import GroupButtonDomains from '@/components/Domains/GroupButtonDomains'
import TableBase from '@/components/Tables/TableBase'
import React from 'react'
import { columns, INITIAL_VISIBLE_COLUMNS, statusOptions, tableName } from './data'
import { getUserApiKey } from '@/lib/ApiKey';
import axios from 'axios';
import { deleteDomains } from '@/actions/DomainsActions/DomainsActions';
import { Chip } from '@nextui-org/react';
import ActionsDomainsTable from '@/components/Domains/ActionsDomainsTable';
interface Props {
  searchParams: {
    [key: string]: string | string[] 
  }
}

async function page({ searchParams }: Props) {
  const userApiKey = await getUserApiKey(); 
  // console.log("------------------",userApiKey)
  const ApiUrl = `http://manageservers.lwebl3ami9.store/api/Domains?api_key=${userApiKey}`

  const result = await axios.post(ApiUrl)
  const domains =result.data.domains
  const domainproviders =result.data.domainproviders



  const updatedDomains = domains.map((domain:any) => {
    // Find the matching provider from domainproviders array
    const provider = domainproviders.find((provider:any) => provider.id === domain.domainprovider_id);
  
    // If a matching provider is found, add the 'name' property from provider to domain
    if (provider) {
      return { ...domain, provider_name: provider.name };
    }
    // If no matching provider, return the domain as is
    return domain;
  });


  const domainProviderAfterStyling = updatedDomains.map((element: any) => {
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
        <ActionsDomainsTable 
          domainproviders={domainproviders} 
          domain={element} 
        />
      ),
    };
  });
  


  // const deleteDomainButton = async ()=>{
  //   // "use server"
  //   const selectedItems = searchParams.selectedItems;

  //   let arr: number[] = [];
  //   if (typeof selectedItems === "string") {
  //     arr = selectedItems.split(",").map(Number);
  //   } else if (Array.isArray(selectedItems)) {
  //     // If it's already an array, convert each item to a number
  //     arr = selectedItems.map(Number).flat();
  //   }
    
  //   const data = await deleteDomains(arr)
  // }
 


  return (
    <div className='w-full'>
    <GroupButtonDomains domainproviders={domainproviders} items={searchParams.selectedItems}/>
    <TableBase columns={columns} dataTable={domainProviderAfterStyling} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>
    </div>
  )
}

export default page