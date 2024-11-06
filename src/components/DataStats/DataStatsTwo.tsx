
import { ServerOff } from 'lucide-react';
import { ServerCrash } from 'lucide-react';
import { ServerCog } from 'lucide-react';
interface Metric {
  title: string
  value: string
  icon : any
}

export default function dataStatsTwo() {
  const metrics: Metric[] = [
    {
      title: "Server Active",
      value: "1105",
      icon:<ServerCog className="h-10 w-10 text-lime-500"/>
    },
    {
      title: "Server InActive",
      value: "32",

      icon:<ServerCrash className="h-10 w-10 text-amber-500"/>
    },
    {
      title: "Server Retumed",
      value: "3306",
      icon :<ServerOff className="h-10 w-10 text-red-500" />
      
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10 pt-3 ">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-sm  shadow-md dark:bg-gray-900 dark:text-white hover:gray">
          <h2 className="text-sm font-medium text-gray-500 dark:bg-gray-900 px-15 dark:text-white">{metric.title}</h2>
          <div className="flex items-baseline flex-row justify-around">
            <p className="text-2xl font-semibold text-gray-900 dark:bg-gray-900 dark:text-white">{metric.value}</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold">
              {metric.icon}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}