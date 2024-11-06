import React from 'react'
import { Button, ButtonGroup } from '@nextui-org/react'
import { CloudDownload, Cog, CopyX, HardDrive, HardDriveDownload, Plus, Server, ServerCog, ServerOff, Trash2, Undo } from 'lucide-react'
import TableBase from '../TableBase'
import {columns, dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName} from "./data";
import AddServerModel from './components/AddServerModel';

export default function TableServers() {
      
  return (
    <div>
      <div className='lg:flex justify-between'>
      <h1 className='text-3xl ml-5 '>servers</h1>
             <div className='flex flex-col md:flex-row justify-end  pr-10 pb-6'>
        <ButtonGroup className=''>
      <Button 
      size='sm' className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
      endContent={<ServerCog/>}
      >Add Server To Change IP</Button>
      
      {/* <Button 
      size='sm' 
      className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
      endContent={<HardDrive/>}
      >Add Server</Button> */}

      <AddServerModel/>





      {/* _________________________________________________________________________________buttom button */}
      <Button 
      size='sm' className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
      
      endContent={<HardDriveDownload/>}
      >Install Server</Button>

<Button 
      size='sm' className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
      endContent={<Server/>}
      >Install Server Multihreading</Button>

<Button 
      size='sm' className=' py-5 text-gray'
      color='danger'
      endContent={<ServerOff/>}
      >Delete Server</Button>




      {/* _______________________________________________________________________________________end */}
    </ButtonGroup>
        </div>
      </div>





    <TableBase columns={columns} dataTable={dataTable} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>

    </div>
  )
}

