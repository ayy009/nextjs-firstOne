"use client"
import PmtaForm from '@/components/PmtaManager/PmtaForm'
import PmtaSelectItems from '@/components/PmtaManager/PmtaSelectItems'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { Grid2x2Check } from 'lucide-react'
import React, { useState } from 'react'
import HtmlCardArray from '@/components/PmtaManager/components/HtmlCards'

function page() {
  const [serverSelect,setServerSelect] = useState([])

  return (
<div className='flex flex-col w-full justify-center'>

<Accordion
    defaultExpandedKeys={["2"]}
    variant="splitted"
    className='p-2 mt-2 w-full  bg-transparent'
>

      <AccordionItem
      key="2"
      className=" dark:bg-gray-dark rounded-sm "
      startContent={<Grid2x2Check  />}
      title="PMTA Manager"
      
    >
    <div className='flex flex-col md:flex-row w-full'>
         <PmtaSelectItems setServerSelect={setServerSelect}/>
         <PmtaForm/>
    </div>
    </AccordionItem>
  </Accordion>

  <HtmlCardArray serverSelect={serverSelect}/>

  </div>
  )
}

export default page