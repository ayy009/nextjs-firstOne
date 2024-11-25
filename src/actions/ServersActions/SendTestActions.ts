
"use server"

import { getUserApiKey } from "@/lib/ApiKey";
import axios from "axios";

export async function GetServersInterfaces({queryParams}:any) {
    const apikey = await getUserApiKey()
    queryParams.api_key=apikey

    console.log(queryParams)
const url="http://manageservers.lwebl3ami9.store/api/getInterfacesByServersId"
    const result = await axios.post(url,queryParams);
    console.log(result.data)

    return result.data
    
}


export async function AutoSelectServers(queryParams:any) {
    const apikey = await getUserApiKey()
    queryParams.api_key=apikey

    console.log(queryParams)
const url="http://manageservers.lwebl3ami9.store/api/auto_select"
    const result = await axios.post(url,queryParams);
    console.log(result.data)

    return result.data
    
}


export async function TestSend({formData,interfacesIds}:any) {

    // --------------------------------------------------------------- create queryParams
    const apikey = await getUserApiKey()
    formData.api_key=apikey
    formData.compaign_id=0
    formData.selected_interface=interfacesIds


    const variables: Record<string, string> = {};

    formData.header.trim().split('\n').forEach((line:any) => {
        const [key, value] = line.split(':', 2);
        if (key && value) {
            // Remove brackets from the value
            const trimmedValue = value.trim().replace(/\[|\]/g, ''); // Remove [ and ]
            switch (key.trim().toLowerCase()) {
                case 'mime-version':
                    variables.message_headers_html = key+":"+trimmedValue;
                    break;
                case 'content-type':
                    variables.body_domain = trimmedValue;
                    break;
                case 'date':
                    variables.message_body_html = trimmedValue;
                    break;
                case 'subject':
                    variables.subject_line = trimmedValue; // Value without brackets
                    break;
                case 'from':
                    variables.from_line = trimmedValue;
                    break;
            }
        }
    });


    formData.message_headers_html=variables.message_headers_html;
    formData.test_emails = formData.testEmails;
    // --------------------------------------------------------------- end queryParams
    // --------------------------------------------------------------- create url && request

    const url = "http://manageservers.lwebl3ami9.store/api/test_sending_server"
    const result = await axios.post(url,formData);
    console.log(result.data)

    return result.data

    // --------------------------------------------------------------- end url && request
}