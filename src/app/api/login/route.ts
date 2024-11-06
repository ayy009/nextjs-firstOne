

//importation
import users from "@/types/user";
import * as jose from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


//validation 


export async function POST(request: Request) {
  // Read data off req body
  const body = await request.json();
  const { email, password } = body;
  const JWT_SECRET = "ayyoub"

  // Validate data
  // if (!validateEmail(email) || !validatePassword(password)) {
  //   return Response.json(
  //     {
  //       error: "Invalid email or password",
  //     },
  //     { status: 400 }
  //   );
  // }


  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return Response.json(
      {
        error: "Invalid email or password",
      },
      { status: 400 }
    );
  }


  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";
  console.log(secret);
  const token = await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(user.email.toString())
    .sign(secret);

  // const token = jose.SignJWT({ email: user.email, id: user.name }, JWT_SECRET, { expiresIn: '1h' });
  console.log(token);
  const expires = new Date(Date.now() + 3600 * 1000); 
  console.log(expires);
  // Set cookie with the token
  
  const response = NextResponse.json({ user }, { status: 200 });
  
  cookies().set('session', token, { expires: expires, httpOnly: true });

  // Respond with it
  return Response.json({ token });
}

