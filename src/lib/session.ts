"use server"
import { cookies } from 'next/headers';

export async function updateSession() {
  // Retrieve the 'Authorization' cookie value
  const session = cookies().get('Authorization')?.value;

  // Check if session exists
  if (!session) {

    return {message: 'Authorization session not found'}
  }

  // Set the updated 'Authorization' cookie
  cookies().set('Authorization', session, {
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour expiry
    path: '/',
    sameSite: 'strict',
  });

  // Return success message
  return { message: 'Session updated successfully' };
}



export async function deleteSession() {
  // Deleting the 'session' cookie
  cookies().delete('Authorization');

  // Return a success message
  return { message: 'Session deleted successfully' };
}
