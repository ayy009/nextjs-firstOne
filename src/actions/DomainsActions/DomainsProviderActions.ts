"use server"

import { getUserApiKey } from "@/lib/ApiKey";
import axios from "axios";


export async function addDomainProvider(formData: any) {
    // Get the user's API key
    const apikey = await getUserApiKey();
  
    // Modify formData fields as necessary
    formData.api_key = apikey;
    const status = formData.status = formData.status == "Active" ? true : false
  
    // Map to API parameters
    const params = {
      api_Secret: formData.apiSecret,
      name: formData.name,
      provider: formData.provider,
      apiuser: formData.apiUser,
      apikey: formData.apiKey,
      account_email: formData.accountEmail,
      account_password: formData.accountPassword,
      project_id: formData.project,
      api_key: apikey,
      status: status,
    };
  
    const url = `http://manageservers.lwebl3ami9.store/api/AddDomainProvider`;
  
    try {
      const response = await axios.post(url, params);
      return response.data;
    } catch (error: any) {
      // Handle and throw a custom error message
      throw new Error(
        error.response?.data?.message || "Failed to add domain provider. Please try again."
      );
    }
  }



  export async function updateDomainsProvider(formData: any) {
    // Get the user's API key
    const apikey = await getUserApiKey();
  
    // Modify formData fields as necessary
    formData.api_key = apikey;

    console.log(formData)
  
    // Map to API parameters
    const params = {
        id:formData.id,
      api_Secret: formData.apiSecret,
      name: formData.name,
      provider: formData.provider,
      apiuser: formData.apiUser,
      apikey: formData.apiKey,
      account_email: formData.accountEmail,
      account_password: formData.accountPassword,
      project_id: formData.project,
      api_key: apikey,
      status: formData.status,
    };
  
    const url = `http://manageservers.lwebl3ami9.store/api/UpdateDomainProvider`;
  
    try {
      const response = await axios.post(url, params);
      console.log(response.data)
      return response.data;
    } catch (error: any) {
      // Handle and throw a custom error message
      throw new Error(
        error.response?.data?.message || "Failed to update domain provider. Please try again."
      );
    }
  }
  


  export async function deleteDomainsProvider(ids:any){
    const apikey = await getUserApiKey();

    const url = `http://manageservers.lwebl3ami9.store/api/DeleteSelectedDomainprovider`

    try {
        const response = await axios.post(url, {
            api_key: apikey,
            domain_id: ids
          });
      return response.data;
    } catch (error: any) {
      // Handle and throw a custom error message
      throw new Error(
        error.response?.data?.message || "Failed to delete  domain. Please try again."
      );
    }
  
  }


