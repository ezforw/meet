'use server';

import { cookies } from 'next/headers';
import { generateSignedCookie } from './auth-utils';

const COOKIE_NAME = 'room_auth';
const COOKIE_MAX_AGE = 60 * 60 * 3; // 3 hours

/**
 * Server action to verify room password
 */
export async function verifyRoomPassword(
  _prevState: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string; success?: boolean }> {
  const password = formData.get('password') as string;

  if (!password) {
    return { error: '请输入密码' };
  }

  const correctPassword = process.env.ROOM_PASSWORD_777;

  if (!correctPassword) {
    return { error: '密码保护未配置' };
  }

  if (password !== correctPassword) {
    return { error: '密码不正确' };
  }

  // Password is correct, set signed cookie
  try {
    const signedValue = generateSignedCookie();
    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAME, signedValue, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
      path: '/',
    });

    return { success: true };
  } catch (error) {
    return { error: '认证失败，请重试' };
  }
}
