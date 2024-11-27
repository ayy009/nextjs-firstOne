"use server"

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export async function getUserApiKey() {
  const token = cookies().get('Authorization')?.value;
  if (!token) return null;

  try {
    const result = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
    return result.payload.user_api_key;
  } catch (error) {
    
    console.error('Token verification failed:', error);
    return null;
  }
}
