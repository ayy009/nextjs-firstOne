import TableBase from '@/components/Tables/TableBase'
import React from 'react'
import { columns, INITIAL_VISIBLE_COLUMNS, statusOptions, tableName } from './data'
import { getUserApiKey } from '@/lib/ApiKey';
import axios from 'axios';
import GroupButtonDomainsProvider from '@/components/DomainsProvider/GroupButtonDomainsProvider';
import { Chip } from '@nextui-org/react';
import ActionsDomainsProviderTable from '@/components/DomainsProvider/ActionsDomainsProviderTable';

interface Props {
  searchParams: {
    [key: string]: string | string[] 
  }
}
async function page({ searchParams }: Props) {
  //-------------------------------------------------------get domains provider
  const userApiKey = await getUserApiKey(); 
  // console.log(userApiKey)
  const ApiUrl = `http://manageservers.lwebl3ami9.store/api/DomainProviders?api_key=${userApiKey}`

  const result = await axios.post(ApiUrl)
  const domainproviders =result.data.domainProviders
  const projects=result.data.projects

  // domainproviders.actions = <ActionsServerTable user={user} serverproviders={serverproviders}

  const domainProviderAfterStayling = domainproviders.map((element: any) => ({
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
    // actions: <ActionsDomainsProviderTable />, // Pass necessary props to the component
    actions: (<ActionsDomainsProviderTable projects={projects}  domainProvider={element}/>), // Pass necessary props to the component
  }));
  
  
  


  //-------------------------------------------------------func delete domains provider

  const selectedItems = searchParams.selectedItems;
  // const deleteDomainsProviderButton=async ()=>{
  //   "use server"

    
  //   const selectedItems = searchParams.selectedItems;

  //       let arr: number[] = [];
  //       if (typeof selectedItems === "string") {
  //         arr = selectedItems.split(",").map(Number);
  //       } else if (Array.isArray(selectedItems)) {
  //         // If it's already an array, convert each item to a number
  //         arr = selectedItems.map(Number).flat();
  //       }
       
  //       const data = await deleteDomainsProvider(arr)
  // }

  return (
    <div className='w-full'>
    <GroupButtonDomainsProvider projects={projects} selectedItems={selectedItems}/>
    <TableBase columns={columns} dataTable={domainProviderAfterStayling} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>
    </div>
  )
}

export default page