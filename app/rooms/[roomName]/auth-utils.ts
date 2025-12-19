import { createHmac } from 'crypto';

/**
 * Verify a signed cookie value
 */
export function verifyAuthCookie(cookieValue: string | undefined): boolean {
  if (!cookieValue) {
    return false;
  }

  const secret = process.env.ROOM_AUTH_SECRET;
  if (!secret) {
    return false;
  }

  try {
    const [timestamp, signature] = cookieValue.split('.');
    if (!timestamp || !signature) {
      return false;
    }

    // Verify signature
    const expectedSignature = createHmac('sha256', secret)
      .update(timestamp)
      .digest('hex');

    // Constant-time comparison to prevent timing attacks
    return signature === expectedSignature;
  } catch {
    return false;
  }
}

/**
 * Generate a signed cookie value using HMAC-SHA256
 */
export function generateSignedCookie(): string {
  const secret = process.env.ROOM_AUTH_SECRET;
  if (!secret) {
    throw new Error('ROOM_AUTH_SECRET is not configured');
  }

  const timestamp = Date.now().toString();
  const signature = createHmac('sha256', secret)
    .update(timestamp)
    .digest('hex');

  return `${timestamp}.${signature}`;
}
