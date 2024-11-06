"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@nextui-org/react"
import { ChevronUp } from "lucide-react"
import SideOne from './SideOne'
import SideTwo from './SideTwo'
import SideThree from './SideThree'
import SideFour from './SideFour'

export default function ServerTest() {
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
    <div className='flex flex-col w-full relative min-h-screen'>
      <div className='block md:flex flex-row flex-wrap w-full justify-between'>
        <SideOne/>
        <SideTwo/>
      </div>
      <div className='w-full'>
        <SideThree/>
        <SideFour/>
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
    </div>
  )
}