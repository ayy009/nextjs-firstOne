import { Button, ButtonGroup } from '@nextui-org/react'
import { Pin, PinOff } from 'lucide-react'
import React from 'react'

function TitleAndAction() {
  return (
    <div className='flex flex-col md:flex-row justify-center  md:justify-between pt-2'>
      <h1 className="text-3xl font-bold  mb-5 md:mb-0 md:ml-5 mx-auto md:mx-0 my-auto">Tickets</h1>
      <div className="flex flex-col md:flex-row justify-end md:pr-10">
      {/* <div className="flex flex-col md:flex-row justify-end md:pr-10 pb-6 "> */}
        <ButtonGroup>

        <Button
          size="sm"
          variant='bordered'
          color='primary'
          className="dark:bg-gray-800 py-5  dark:text-gray-100"
          startContent={<Pin  />}
        >
          Fix Tickets
        </Button>

        <Button
          color='primary'
          size="sm"
          variant='bordered'
          className="dark:bg-gray-800 py-5  dark:text-gray-100"
          endContent={<PinOff  />}
        >
          Close Tickets
        </Button>
        </ButtonGroup>

      </div> {/* Close the div here */}
    </div>
  );
}

export default TitleAndAction;
