import React from 'react'
import TableBase from '../TableBase'
import {columns, dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName} from "./data";

function App() {
  return (
    <TableBase columns={columns} dataTable={dataTable} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>
  )
}

export default App