"use client"
import React from 'react'
import SideOne from './components/SideOneOne'
import SideTwo from './components/SideTwoTwo'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { Grid2x2Check } from 'lucide-react'
import FormLog from './components/FormLog'

export default function DeliveryServerForm3() {
  return (
    <div className='flex flex-col w-full justify-center'>
    <div className='flex flex-col lg:flex-row w-full justify-around '>
      <SideOne/>
      <SideTwo/>

    
    </div >
    <Accordion
        variant="splitted"
        className='p-2 mt-8 w-full pad bg-transparent'
    >
    
          <AccordionItem
          key="2"
          className=" dark:bg-gray-dark rounded-sm "
          startContent={<Grid2x2Check  />}
          title="Servers installation log"
          
        >
          <FormLog/>
        </AccordionItem>
      </Accordion>
      </div>
  )
}

 