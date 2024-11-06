"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import FooterTwo from "../Footer/FooterTwo";
import { Toaster } from "react-hot-toast";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen)
  return (
    <>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      <div className="flex  overflow-hidden min-h-screen">
        {/* <!-- ===== Sidebar Star ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Star ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main className="min-h-[84%]">
            <div className="mx-auto p-4 2xl:max-w-[95%] md:p-6 2xl:p-10" 
            >
              {children}
            </div>
            
            
          </main>
          <FooterTwo />
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
      
    </>
  );
}
