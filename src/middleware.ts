"use server"
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "./lib/session";


export async function middleware(request: NextRequest) {
  // Check for the Authorization cookie
  const cookie = cookies().get("Authorization");

  if (!cookie) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }else{
  // updateSession();
  }

  return NextResponse.next();
}


export const config = {
  // matcher: [] 
  // matcher: ["/"] 
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|register|auth|signin|signout|signup).*)"]
};
