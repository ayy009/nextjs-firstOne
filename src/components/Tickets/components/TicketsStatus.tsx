import { Badge, Button } from '@nextui-org/react'
import { Ticket, TicketCheck, TicketPercent, TicketPlus, Tickets, TicketX } from 'lucide-react'
import React from 'react'

function TicketsStatus() {
  return (
    <div className='flex mb-3 md:mb-0 p-2  justify-evenly w-full md:w-4/6 flex-wrap'>
      <Badge content="10666" className='' color="primary">
        <Button
          className='w-35 h-15 mt-1'
          color="primary"
          variant="flat"
          title="Total Tickets"
        >
          <h2 className="text-lg font-medium">Total</h2>
          <Tickets className='w-100 h-100 ' />
        </Button>
      </Badge>

      <Badge content="12" color="success">
        <Button
          className='w-35 h-15 mt-1'
          color="success"
          variant="flat"
          title="Fixed Tickets"
        >
          <h2 className="text-lg font-medium">Fixed</h2>
          <TicketCheck className='w-100 h-100 ' />
        </Button>
      </Badge>

      <Badge content="30" color="secondary">
        <Button
          className='w-35 h-15 mt-1'
          color="secondary"
          variant="flat"
          title="Answered Tickets"
        >
          <h2 className="text-lg font-medium">Answered</h2>
          <TicketPercent className='w-100 h-100 ' />
        </Button>
      </Badge>

      <Badge content="70" color="warning">
        <Button
          className='w-35 h-15 mt-1'
          color="warning"
          variant="flat"
          title="Pending Tickets"
        >
          <h2 className="text-lg font-medium">Pending</h2>
          <Ticket className='w-100 h-100 ' />
        </Button>
      </Badge>

      <Badge content="80" color="danger">
        <Button
          className='w-35 h-15 mt-1'
          color="danger"
          variant="flat"
          title="Closed Tickets"
        >
          <h2 className="text-lg font-medium">Closed</h2>
          <TicketX className='w-100 h-100 ' />
        </Button>
      </Badge>

      <Badge content="100" color="default">
        <Button
          className='w-35 h-15 mt-1'
          color="default"
          variant="flat"
          title="New Tickets"
        >
          <h2 className="text-lg font-medium">New</h2>
          <TicketPlus className='w-100 h-100 ' />
        </Button>
      </Badge>
    </div>
  )
}

export default TicketsStatus