


"use server";
import users from '@/types/user';
import { NextResponse } from 'next/server';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { getSession } from 'next-auth/react';
import { Session } from 'inspector';




const JWT_SECRET = "ayyoub" ; 


export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = users.find((user) => user.email === email && user.password === password);

  
  if (user) {
    
      
    const token = jwt.sign({ email: user.email, id: user.name }, JWT_SECRET, { expiresIn: '1h' });
    console.log(token);
    const expires = new Date(Date.now() + 3600 * 1000); 
    console.log(expires);
    // Set cookie with the token
    
    const response = NextResponse.json({ user }, { status: 200 });
    
    cookies().set('session', token, { expires: expires, httpOnly: true });



    return response;
  } else {
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
  }
}
