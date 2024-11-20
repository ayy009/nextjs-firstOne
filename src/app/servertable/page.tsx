"use server"
import React from 'react'
import { Button, ButtonGroup } from '@nextui-org/react'
import {  HardDriveDownload, Server, ServerCog, ServerOff} from 'lucide-react'
import TableBase from '@/components/Tables/TableBase'
import {columns, dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName} from "@/components/Tables/TableServers/data";
import AddServerModel from '@/components/Tables/TableServers/components/AddServerModel';
import Link from 'next/link';
import axios from 'axios';
import { getUserApiKey } from '@/lib/ApiKey';
import GroupButton from '@/components/Tables/TableServers/components/GroupButton'
import { deleteServers } from '@/actions/ServersActions/ServerTableActions'
// import EditServerModal from './components/EditServerModel'
interface Props {
  searchParams: {
    [key: string]: string | string[] 
  }
}


export default async function TableServers({ searchParams }: Props) {

  const handleDeleteServers=async ()=>{
    "use server"

    
    const selectedItems = searchParams.selectedItems;

        let arr: number[] = [];
        if (typeof selectedItems === "string") {
          arr = selectedItems.split(",").map(Number);
        } else if (Array.isArray(selectedItems)) {
          // If it's already an array, convert each item to a number
          arr = selectedItems.map(Number).flat();
        }
       
        const data = await deleteServers(arr)
  }
  
  
  const userApiKey = await getUserApiKey(); 

  const apiUrl =`http://manageservers.lwebl3ami9.store/api/getInstallListDeliveryservers?api_key=${userApiKey}`
  const { data } = await axios.post(apiUrl)
  console.log(data)

  
      
  return (
    <div>
      {/* <div className='lg:flex justify-between'>
      <h1 className='text-3xl ml-5 '>servers</h1>
             <div className='flex flex-col md:flex-row justify-end  pr-10 pb-6'>
        <ButtonGroup className=''>



      <AddServerModel serverproviders ={data.serverproviders}/>
      <Link 
      className='rounded-none'
      href={'/ipchange'}>
      <Button 
      radius="none"
      
      size='sm' className='rounded-l-sm dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
      endContent={<ServerCog/>}
      
      >Add Server To Change IP</Button>
      </Link>
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
      onClick={()=>handleDeleteServers()}
      >Delete Servers Selected</Button>
    </ButtonGroup>
        </div>
      </div> */}
      <GroupButton data ={data.serverproviders} handleDeleteServers={handleDeleteServers}/>





    <TableBase  columns={columns} serverproviders ={data.serverproviders} dataTable={data.servers} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>

    </div>
  )
}

