import React from 'react'
import {columns, dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName} from "./data";
import TableBase from '@/components/Tables/TableBase';

function TableTickets() {
  return (
    <div>
        <TableBase columns={columns} dataTable={dataTable} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>
    </div>
  )
}

export default TableTickets