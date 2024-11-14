
import IpChangeGroupButton from '@/components/IpChange/IpChangeGroupButton'
import TableBase from '@/components/Tables/TableBase'
import React from 'react'
import { columns, dataTable, INITIAL_VISIBLE_COLUMNS, statusOptions, tableName } from './data'


function DeliveryServers() {
 

  return (
    <div className="">
      <IpChangeGroupButton/>
    <TableBase columns={columns} dataTable={dataTable} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>

    </div>
  )
}

export default DeliveryServers
