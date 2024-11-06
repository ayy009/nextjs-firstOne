"use server";

import users from "@/types/user";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from 'next/server'; 
import { SignJWT } from "jose"; 

// Validate email format
// function validateEmail(email: string) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }



// Define the login credentials interface
interface LoginCredentials {
    email: string;
    password: string;
}



// Main login action function
export default async function loginAction({ email, password }: LoginCredentials) {
    // Validate data
    // if (!validateEmail(email) ) {
    //     return NextResponse.json(
    //         { error: "Invalid email or password" },
    //         { status: 400 }
    //     );
    // }

    // Find the user by email and password
    const user = users.find((user) => user.email === email && user.password === password);
    console.log(user)

    if (!user) {

        return {error: 'Invalid email or password', status: 400}
        
    }

    try {

        const token = await new SignJWT({ email: user.email, id: user.name }) // Create the JWT with the payload
        .setProtectedHeader({ alg: 'HS256' }) // Set the algorithm for the JWT
        .setExpirationTime('1h') // Set the expiration time
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));


  
        if (token) {
            cookies().set("Authorization", token, {
                secure: true,
                httpOnly: true,
                expires: new Date(Date.now() + 60 * 60 * 1000),
                path: "/",
                sameSite: "strict",
            });


            return { message: "Login successful!",status: 200 } 
            
            

        }
    } catch (error) {
        console.error("An error occurred during login:", error);
        return NextResponse.json(
            { error: "An error occurred during login." },
            { status: 500 }
        );
    }


    
}
