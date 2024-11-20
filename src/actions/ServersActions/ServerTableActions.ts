"use server";

import { getUserApiKey } from "@/lib/ApiKey";
import axios from "axios";

export async function addServer(data: any) {
  // Get the user's API key
  const apikey = await getUserApiKey();
  console.log(data)


 
  const url = `http://manageservers.lwebl3ami9.store/api/addServer?main_ip=${data.main_ip}&serverprovider_id=${data.serverProvider}&os_installed=${data.osInstalled}&serverprovider_email_account_id=${2}&ssh_port=${data.sshPort}&ssh_user=${data.ssh_user}&ssh_password=${data.ssh_password}&type=${data.type}&project=pro&api_key=${apikey}`;
  
    const response = await axios.post(url);
    console.log(response.data)
  try {
    

    return "aaaaaaaaaaaaaaaaaaaaaaaa";
  } catch (error: any) {
    // Handle and throw a custom error message
    throw new Error(
      error.response?.data?.message || "Failed to add server. Please try again."
    );
  }
}


export async function updateServer(formData:any) {
  const apikey = await getUserApiKey();
  formData.api_key = apikey
  console.log(formData)
  const url = `http://manageservers.lwebl3ami9.store/api/updateserver`
  // console.log(url)
  const response = await axios.post(url, formData);
  console.log()
  try {
    return response.data;
  } catch (error: any) {
    // Handle and throw a custom error message
    throw new Error(
      error.response?.data?.message || "Failed to add server. Please try again."
    );
  }

}

export async function deleteServers(ids:any){
  const apikey = await getUserApiKey();
  console.log("iiiiiiiiiiiiiiiiiii",ids)
  

  const url = `http://manageservers.lwebl3ami9.store/api/delete`
  const response = await axios.post(url, {
    api_key: apikey,
    ids: ids
  });
  console.log(response)
  try {
    return response.data;
  } catch (error: any) {
    // Handle and throw a custom error message
    throw new Error(
      error.response?.data?.message || "Failed to add server. Please try again."
    );
  }

}


export async function handleSelectServerProviderServerSide(id:string) {
    const apikey = await getUserApiKey()
    const url = `http://manageservers.lwebl3ami9.store/api/getAccountsByID?providerId=${id}&api_key=${apikey}`;
    const { data } = await axios.post(url);
    return data
    
}

export async function getOneServer(id:string) {
  const apikey = await getUserApiKey()
  const url = `http://manageservers.lwebl3ami9.store/api/EditListServers?id=${id}&api_key=${apikey}`;
  const { data } = await axios.post(url);
  return data
  
}