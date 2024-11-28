"use server"
import React from 'react'
import { Button, ButtonGroup, Chip } from '@nextui-org/react'
import {  HardDriveDownload, Server, ServerCog, ServerOff} from 'lucide-react'
import TableBase from '@/components/Tables/TableBase'
import {columns, dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName} from "@/components/Tables/TableServers/data";

import axios from 'axios';
import { getUserApiKey } from '@/lib/ApiKey';
import GroupButton from '@/components/Tables/TableServers/components/GroupButton'
import { deleteServers } from '@/actions/ServersActions/ServerTableActions'
import { ActionsServerTable } from '@/components/Tables/TableServers/components/ActionsServerTable'
// import EditServerModal from './components/EditServerModel'
interface Props {
  searchParams: {
    [key: string]: string | string[] 
  }
}


export default async function TableServers({ searchParams }: Props) {

  const selectedItems = searchParams.selectedItems;

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
  const result = await axios.post(apiUrl)
  const serverproviders=result.data.serverproviders
  const servers=result.data.servers


  const serversAfterStyling = servers.map((element: any) => {
    const expireDate = new Date(element.expire_at); // Parse the expire_at date
    const todayTime = new Date(); // Get the current date
    
    // Calculate the difference in time (milliseconds)
    const diffTimeMs = expireDate.getTime() - todayTime.getTime();
    
    // Convert the difference to days
    const daysLeftTime = Math.ceil(diffTimeMs / (1000 * 60 * 60 * 24)); 
  
    return {
      ...element, // Keep all other properties
  
      provider: (
        <Chip
          className="capitalize"
          color="secondary"
          size="sm"
          variant="dot"
        >
          {element.provider}
        </Chip>
      ),
  
      api_user: (
        <Chip
          className="capitalize"
          color="warning"
          size="sm"
          variant="shadow"
        >
          {element.api_user}
        </Chip>
      ),
  
      daysleft: (
        <Chip
          className="select-all capitalize"
          color={daysLeftTime >= 0 ? "primary" : "danger"} 
          size="sm"
          variant="flat"
        >
          {daysLeftTime >= 0 ? daysLeftTime : "Expired"}
        </Chip>
      ),
  
      provider_name: (
        <Chip
          className="capitalize"
          color="secondary"
          size="sm"
          variant="dot"
        >
          {element.provider_name}
        </Chip>
      ),
  
      actions: (
        <ActionsServerTable user={element} serverproviders={serverproviders} />     
      ),
    };
  });

  console.log(serversAfterStyling)
  
      
  return (
    <div>

    <GroupButton data ={serverproviders} handleDeleteServers={handleDeleteServers} selectedItems={selectedItems}/>

    <TableBase  columns={columns} serverproviders ={serverproviders} dataTable={serversAfterStyling} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>

    </div>
  )
}

