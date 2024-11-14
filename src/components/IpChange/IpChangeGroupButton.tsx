"use client"
import { Button, ButtonGroup, Switch } from '@nextui-org/react'
import { CircleDashed, PencilLine, Plus, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function IpChangeGroupButton() {
    const [isMobile, setIsMobile] = useState(false)
    const [ipVersion, setIpVersion] = useState("true")
    const [ipVersion1, setIpVersion1] = useState("true")
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768)
      handleResize() // Initial check
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
  
    const [isPending, setIsPending] = useState(true)
    const [isActive, setIsActive] = useState(true)
  
    const togglePendingStatus = () => setIsPending(!isPending)
    const toggleActiveStatus = () => setIsActive(!isActive)


  return (
    <div className='mb-5 w-full flex justify-between '>
        <h1 className='text-3xl ml-5 '>List Of Servers To Change</h1>
        <ButtonGroup >


        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800 " endContent={!isMobile && <CircleDashed />}>
        <Switch
          size="sm"
          color="success"
          checked={isPending}
          onChange={togglePendingStatus}
        />
          Change Status Panding
        </Button>
        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <PencilLine />}>
        <Switch
          size="sm"
          color="success"
          checked={isActive}
          onChange={toggleActiveStatus}
          
        />
            Change Status
        </Button>

        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <Trash2 />}>
          Delete
        </Button>

        <Button className="dark:bg-slate-950 dark:hover:bg-slate-800" endContent={!isMobile && <Plus />}>
          Add
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default IpChangeGroupButton