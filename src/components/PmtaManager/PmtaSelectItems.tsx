"use client"
import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup } from '@nextui-org/react'
import { ExternalLink, LoaderCircle, MousePointerClick, NotebookText, Play, SearchCheck } from 'lucide-react'
import DeliveryBase from '../ServerTest/components/DeliveryBase'
import toast from 'react-hot-toast'

const data = [
  { value: "C_SF52244", label: "PV494" },
  { value: "C_SF52550", label: "PV154" },
  { value: "C_SF52551", label: "PV154" },
  { value: "C_SF53954", label: "PV37" },
  { value: "C_SF54829", label: "PV37" },
  { value: "C_SF54834", label: "PV37" },
  { value: "C_SF54837", label: "PV37" },
  { value: "C_SF55060", label: "PV37" }
]

function PmtaSelectItems({setServerSelect}:any) {
  const [isMobile, setIsMobile] = useState(false)
  // const [controlSetServerSelect,SetControlSetServerSelect]=useState([])
  const [controlSetServerSelect, setControlSetServerSelect] = useState<{ value: string; label: string }[]>([]); 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const hundleOpen = (selectedItems:any) => {
          
    if(selectedItems.length === 0){
      toast.error('No server selected', { duration: 3000 })}
      setServerSelect(selectedItems)
    }


  return (
    <div className="place-items-center w-full md:w-4/6">
      <ButtonGroup>
      <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <MousePointerClick />}>
          Auto Select
        </Button>
        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <SearchCheck  />}>
          Check server
        </Button>
        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" 
        onClick={() => hundleOpen(controlSetServerSelect)}
        endContent={!isMobile && <ExternalLink  />}>
          Open
        </Button>
        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <Play  />}>
          Run
        </Button>
      </ButtonGroup>

      <DeliveryBase data={data} SetControlSetServerSelect={setControlSetServerSelect} />
    </div>
  )
}

export default PmtaSelectItems
