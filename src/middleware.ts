"use server"
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { redirect } from "next/navigation";
import { updateSession } from "./lib/session";


export async function middleware(request: NextRequest) {
  // Check for the Authorization cookie
  const cookie = cookies().get("Authorization");
  console.log(cookie)
  
  // Redirect to the auth page if the cookie is missing
  if (!cookie) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }else{
  //   cookies().set("Authorization", cookie.value, {
  //     secure: true,
  //     httpOnly: true,
  //     expires: new Date(Date.now() + 60 * 60 * 1000),
  //     path: "/",
  //     sameSite: "strict",
  // });
  updateSession();
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/"] 
};
