import React from 'react'
import TableBase from '../TableBase'
import DataStatsTwo from "@/components/DataStats/DataStatsTwo";

import {columns, statusOptions,INITIAL_VISIBLE_COLUMNS,dataTable,tableName} from "./data";


function App({data}:any) {
  console.log(data.servers)

  return (
    <div className=' flex flex-col   gap-4 rounded-sm mt-5 bg-white  px-6 py-2  text-dark dark:bg-gray-dark  dark:text-white '>

                    <h2 className="p-3 text-xl font-extrabold   underline dark:text-white">
                    {tableName}
                  </h2>
          <DataStatsTwo data={data.dataTwo}/> 
    <TableBase columns={columns}  dataTable={data.servers} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>
          


    </div>
  )
}

export default App