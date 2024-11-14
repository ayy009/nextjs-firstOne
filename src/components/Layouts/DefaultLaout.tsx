"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import FooterTwo from "../Footer/FooterTwo";
import { Toaster } from "react-hot-toast";
import { ChevronUp } from "lucide-react";
import { Button } from "@nextui-org/react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // btn for dcroll topPage

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
 
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
            {showButton && (
        <Button
          isIconOnly
          color="primary"
          aria-label="Scroll to top"
          className="fixed bottom-10 right-4 z-50 flex items-center justify-center"
          onPress={scrollToTop}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
            
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
