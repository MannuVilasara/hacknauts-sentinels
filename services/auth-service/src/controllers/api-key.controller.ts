/**
 * API Key Controllers
 */

import type { Response, NextFunction } from 'express';
import type { AuthRequest } from '../middleware/auth.middleware.js';
import { asyncHandler, successResponse, NotFoundError } from '@cybersec/utils';
import { createLogger } from '@cybersec/utils';
import { LogLevel } from '@cybersec/types';
import prisma from '../lib/prisma.js';
import { randomBytes, createHash } from 'crypto';

const logger = createLogger({
    service: 'api-key-controller',
    level: LogLevel.INFO,
    pretty: process.env.NODE_ENV === 'development'
});

/**
 * Generate a secure API key
 */
function generateApiKey(): string {
    return `sk_${randomBytes(32).toString('hex')}`;
}

/**
 * Hash an API key for storage
 */
function hashApiKey(key: string): string {
    return createHash('sha256').update(key).digest('hex');
}

export const listApiKeys = asyncHandler(async (req: AuthRequest, res: Response, _next: NextFunction) => {
    const userId = req.user!.id;

    logger.info('Fetching API keys', { userId });

    const apiKeys = await prisma.apiKey.findMany({
        where: { userId },
        select: {
            id: true,
            name: true,
            key: true,
            lastUsedAt: true,
            expiresAt: true,
            createdAt: true,
            // Don't return revoked keys
        },
        orderBy: { createdAt: 'desc' },
    });

    // Mask the keys for security (show only last 8 characters)
    const maskedKeys = apiKeys.map((apiKey: typeof apiKeys[number]) => ({
        ...apiKey,
        key: `sk_...${apiKey.key.slice(-8)}`,
    }));

    logger.info('API keys fetched successfully', { userId, count: apiKeys.length });

    const { data, statusCode } = successResponse({
        apiKeys: maskedKeys,
    });

    res.status(statusCode).json(data);
});

export const createApiKey = asyncHandler(async (req: AuthRequest, res: Response, _next: NextFunction) => {
    const userId = req.user!.id;
    const { name, expiresInDays } = req.body;

    logger.info('Creating API key', { userId, name });

    const key = generateApiKey();
    const keyHash = hashApiKey(key);
    const expiresAt = expiresInDays
        ? new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000)
        : null;

    const apiKey = await prisma.apiKey.create({
        data: {
            userId,
            name: name || 'Unnamed API Key',
            key,
            keyHash,
            expiresAt,
        },
        select: {
            id: true,
            name: true,
            key: true,
            expiresAt: true,
            createdAt: true,
        },
    });

    // Log audit
    await prisma.auditLog.create({
        data: {
            userId,
            action: 'API_KEY_CREATED',
            resource: 'API_KEY',
            details: {
                apiKeyId: apiKey.id,
                name: apiKey.name,
            },
            ipAddress: req.ip,
            userAgent: req.headers['user-agent'],
        },
    });

    logger.info('API key created successfully', { userId, apiKeyId: apiKey.id });

    const { data, statusCode } = successResponse({
        message: 'API key created successfully',
        apiKey: {
            ...apiKey,
            // Return full key only once during creation
            key: apiKey.key,
            warning: 'Store this key securely. It will not be shown again.',
        },
    }, 201);

    res.status(statusCode).json(data);
});

export const revokeApiKey = asyncHandler(async (req: AuthRequest, res: Response, _next: NextFunction) => {
    const userId = req.user!.id;
    const apiKeyId = req.params.id;

    logger.info('Revoking API key', { userId, apiKeyId });

    // Verify the API key belongs to the user
    const apiKey = await prisma.apiKey.findFirst({
        where: {
            id: apiKeyId,
            userId,
        },
    });

    if (!apiKey) {
        logger.warn('API key not found or unauthorized', { userId, apiKeyId });
        throw new NotFoundError('API key', apiKeyId);
    }

    // Delete the API key
    await prisma.apiKey.delete({
        where: { id: apiKeyId },
    });

    // Log audit
    await prisma.auditLog.create({
        data: {
            userId,
            action: 'API_KEY_REVOKED',
            resource: 'API_KEY',
            details: {
                apiKeyId: apiKeyId,
                name: apiKey.name,
            },
            ipAddress: req.ip,
            userAgent: req.headers['user-agent'],
        },
    });

    logger.info('API key revoked successfully', { userId, apiKeyId });

    const { data, statusCode } = successResponse({
        message: 'API key revoked successfully',
    });

    res.status(statusCode).json(data);
});
