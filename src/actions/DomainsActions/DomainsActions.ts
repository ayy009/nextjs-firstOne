"use server"

import { getUserApiKey } from "@/lib/ApiKey";
import axios from "axios";


export async function addDomain(formData: any) {
    // Get the user's API key
    const apikey = await getUserApiKey();
    // console.log(formData)
    formData.api_key=apikey
    formData.status=formData.status == "active" ? true : false;
  
  
   
    const url = `http://manageservers.lwebl3ami9.store/api/AddDomain`;
    
    
      
    try {
        const response = await axios.post(url,formData);
      return response.data;
    } catch (error: any) {
      // Handle and throw a custom error message
      throw new Error(
        error.response?.data?.message || "Failed to add domain. Please try again."
      );
    }
  }


  export async function updateDomains(formData: any) {
    // Get the user's API key
    const apikey = await getUserApiKey();
  
    // Modify formData fields as necessary
    formData.api_key = apikey;

    
  
    // Map to API parameters
    const params = {
      id:formData.id,
      name: formData.name,
      edit_provider: parseInt(formData.provider),
      expire_at_update:formData.expire_at,
      api_key: apikey,
      domaingroup:"",
      status: formData.status,
    };

    console.log(params)
  
    const url = `http://manageservers.lwebl3ami9.store/api/UpdateDomain`;
  
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



  export async function deleteDomains(ids:any){
    const apikey = await getUserApiKey();

    const url = `http://manageservers.lwebl3ami9.store/api/DeleteSelectedDomain`
    const response = await axios.post(url, {
      api_key: apikey,
      domain_id: ids
    });
    console.log(response)
    try {
      return response.data;
    } catch (error: any) {
      // Handle and throw a custom error message
      throw new Error(
        error.response?.data?.message || "Failed to delete  domain. Please try again."
      );
    }
  
  }