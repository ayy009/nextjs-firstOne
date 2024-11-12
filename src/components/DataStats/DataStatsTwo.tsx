"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { ServerOff, ServerCrash, ServerCog } from 'lucide-react'
import React from 'react'

interface Metric {
  title: string
  value: string | number
  icon: React.ReactElement
  status: string
}

interface DataStatsTwoProps {
  data: {
    nbrActiveServers: number
    nbrInactiveServers: number
    nbrReturnedServers: number
  }
}

const DataStatsTwo: React.FC<DataStatsTwoProps> = ({ data }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const selectedStatuses = searchParams.get('status')?.split(',').filter(Boolean) || []

  const metrics: Metric[] = [
    {
      title: 'Server Active',
      value: data.nbrActiveServers,
      icon: <ServerCog className="h-10 w-10 text-lime-500" />,
      status: 'active'
    },
    {
      title: 'Server InActive',
      value: data.nbrInactiveServers,
      icon: <ServerCrash className="h-10 w-10 text-amber-500" />,
      status: 'inactive'
    },
    {
      title: 'Server Returned',
      value: data.nbrReturnedServers,
      icon: <ServerOff className="h-10 w-10 text-red-500" />,
      status: 'returned'
    },
  ]

  const handleClick = (status: string) => {
    // Toggle the selected status
    const newSelectedStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter(s => s !== status) // Remove status if already selected
      : [...selectedStatuses, status];             // Add status if not selected
  
    // Create the query string manually to avoid encoding commas
    const query = newSelectedStatuses.length > 0
      ? `?status=${newSelectedStatuses.join(',')}`  // Join statuses with commas
      : '';                                         // Clear the query if empty
  
    // Push the updated URL path
    router.push(`${window.location.pathname}${query}`);
  };
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10 pt-3">
      {metrics.map((metric, index) => (
        <div
          key={index}
          onClick={() => handleClick(metric.status)}
          className={`bg-gray-100 p-4 rounded-sm shadow-md dark:bg-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer ${
            selectedStatuses.includes(metric.status) ? 'bg-gray-300 dark:bg-gray-700' : ''
          }`}
        >
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {metric.title}
          </h2>
          <div className="flex items-baseline flex-row justify-around">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {metric.value}
            </p>
            <div className="ml-2 flex items-baseline text-sm font-semibold">{metric.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DataStatsTwo