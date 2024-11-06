import TableBase from '@/components/Tables/TableBase'
import React from 'react'
import {columns, dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName} from "./data";
import { Button, ButtonGroup } from '@nextui-org/react';
import { Copy, Layers2 } from 'lucide-react';

function TableTestsResults() {
  return (
<div className="">
  <div className="text-center md:text-right w-full mb-2 md:pr-9">
    <ButtonGroup className="inline-flex ">
      <Button className="dark:bg-slate-950" endContent={<Copy />}>
        Copy Interfaces
      </Button>
      <Button className="dark:bg-slate-950" endContent={<Layers2 />}>
        Copy Servers
      </Button>
    </ButtonGroup>
  </div>
  
  <div className="mx-auto">
    <TableBase 
      columns={columns} 
      dataTable={dataTable} 
      statusOptions={statusOptions} 
      INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} 
      tableName={tableName} 
    />
  </div>
</div>

  )
}

export default TableTestsResults