"use client"
import React, { useState, useEffect } from 'react'
import DeliveryBase from '../DeliveryBase'
import { Button, ButtonGroup } from '@nextui-org/react'
import { LoaderCircle, MousePointerClick, NotebookText } from 'lucide-react'

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

function DeliveryServers() {
  const [isMobile, setIsMobile] = useState(false)
  const [ipVersion, setIpVersion] = useState("IPv4")

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleIpVersionChange = (event:any) => {
    setIpVersion(event.target.value)
  }

  return (
    <div className="place-items-center">
      <ButtonGroup>
        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <LoaderCircle />}>
          Load
        </Button>
        
        <select
          value={ipVersion}
          onChange={handleIpVersionChange}
          // className="dark:bg-slate-950 dark:text-white px-4 py-2 rounded-md border border-gray-300"
          className="bg-zinc-300 text-dark dark:bg-slate-950 dark:text-white px-4 h-10   hover:dark:bg-slate-800 focus:outline-none "
        >
          <option value="IPv4">IPv4</option>
          <option value="IPv6">IPv6</option>
          <option value="all">All</option>
        </select>

        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <MousePointerClick />}>
          Auto Select
        </Button>

        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <NotebookText />}>
          PMTAQueue
        </Button>
      </ButtonGroup>

      <DeliveryBase data={data} />
    </div>
  )
}

export default DeliveryServers
