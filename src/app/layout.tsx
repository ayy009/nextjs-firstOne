"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { usePathname } from "next/navigation"; // Import usePathname

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Determine if the current path is the login page
  const isLoginPage = pathname === "/auth";

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          {loading ? (
            <Loader />
          ) : (
            <>
              {!isLoginPage ? (
                <DefaultLayout>
                  {children}
                </DefaultLayout>
              ) : (
                children // Render directly without layout for login page
              )}
            </>
          )}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
