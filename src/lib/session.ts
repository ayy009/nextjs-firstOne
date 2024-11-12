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


export async function checkSession() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get("Authorization")

  if (!sessionToken) return null

  // Validate session token if needed
  const isValid = await validateToken(sessionToken.value) // Custom validation function

  return isValid ? { user: { name: "User" } } : null // Return session data if valid
}

async function validateToken(token: string) {
  // Add logic to validate token (e.g., call your backend API to verify)
  return token === "valid-token" // Replace with actual validation logic
}