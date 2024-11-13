import { Button, Input } from '@nextui-org/react'
import {  ChevronsRight, CirclePause, History, PowerOff, RotateCcw, SearchCode, ServerCog, SquareArrowOutUpRight, SquarePlay, Trash2 } from 'lucide-react'
import React from 'react'

function PmtaGroupButton() {
  return (
    <div className='flex flex-col justify-center mt-3'>

            <Input
          type="email"
          className='w-1/2 mb-3 mx-auto '
          placeholder="*"
          classNames={
           { inputWrapper:"dark:bg-slate-950"}
          }
          variant='faded'
          labelPlacement="outside"
          startContent={
            <SearchCode  className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
            />

        <div className="flex md:gap-2 justify-center items-center">
            <Button isIconOnly variant='faded' color="default"
            className='dark:bg-slate-950' >
            <ServerCog />
            </Button>

            <Button isIconOnly variant='faded' color="default" 
            className='dark:bg-slate-950'>
            <PowerOff />
            </Button>   

            <Button isIconOnly variant='faded' color="default"
            className='dark:bg-slate-950' >
            <RotateCcw />
            </Button>  

            <Button isIconOnly variant='faded' color="default"
            className='dark:bg-slate-950' >
            <History />
            </Button> 

            <Button isIconOnly variant='faded' color="default"
            className='dark:bg-slate-950' >
            <ChevronsRight />
            </Button> 

            <Button isIconOnly variant='faded' color="default"
            className='dark:bg-slate-950' >
            <Trash2 />
            </Button> 

            <Button isIconOnly variant='faded' color="default"
            className='dark:bg-slate-950' >
            <SquarePlay />
            </Button> 

            <Button isIconOnly variant='faded' color="default"
            className='dark:bg-slate-950' >
            <CirclePause />
            </Button> 

            <Button isIconOnly variant='faded' color="default"
            className='dark:bg-slate-950' >
            <SquareArrowOutUpRight />
            </Button>

        </div>
    </div>

  )
}

export default PmtaGroupButton