"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

// Define the login credentials interface
interface LoginCredentials {
  email: string;
  password: string;
}

// Main login action function
export default async function loginAction({ email, password }: LoginCredentials) {
  try {
    // Send a POST request to the external API with login credentials
    const response = await axios.post(
      `http://manageservers.lwebl3ami9.store/api/login?email=${email}&password=${password}`
    );

    const { success, message, user_api_key } = response.data;

    // Check if login was successful
    if (!success) {
      return { error: message || "Invalid email or password", status: 400 };
    }

    // Create a JWT using the user API key
    const token = await new SignJWT({ email, user_api_key })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET!));

    // Set the JWT as an HTTP-only cookie
    cookies().set("Authorization", token, {
      secure: true,
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 1000),
      path: "/",
      sameSite: "strict",
    });
    // cookies().set("user_api_key",user_api_key);
    cookies().set("email",email);

    // Return the essential data to the client
    return { message: "Login successful!", status: 200};
  } catch (error) {
    console.error("An error occurred during login:", error);
    return { error: "An error occurred during login.", status: 500 };
  }
}
