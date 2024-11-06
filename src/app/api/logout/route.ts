// pages/api/logout.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });

  // Clear the session cookie
  response.cookies.set('session', '', { expires: new Date(0) }); // Set a past date to delete the cookie

  return response;
}
