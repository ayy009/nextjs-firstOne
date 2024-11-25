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

      <GroupButton data ={data.serverproviders} handleDeleteServers={handleDeleteServers}/>

    <TableBase  columns={columns} serverproviders ={data.serverproviders} dataTable={data.servers} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>

    </div>
  )
}

