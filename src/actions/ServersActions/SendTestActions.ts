
"use server"

import { getUserApiKey } from "@/lib/ApiKey";
import axios from "axios";

export async function TestSendServers() {
    const userApiKey = await getUserApiKey();
    const getServersUrl = `http://manageservers.lwebl3ami9.store/api/test_send_server?api_key=${userApiKey}`;
    const resultgetServers = await axios.post(getServersUrl);

    const dataGetServers = resultgetServers.data.nonSelectedDeliveryServers;

    const formattedData = dataGetServers.map((item: any) => ({
      id: item.id,
      label: `${item.name}-[PV${item.serverprovider_id}]`, // Combine name and serverprovider_id into label
    }));
    return formattedData
    
}

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


export async function TestSend({formData,interfacesIds,htmlCode}:any) {

    // --------------------------------------------------------------- create queryParams
    const apikey = await getUserApiKey()
    formData.api_key=apikey
    formData.compaign_id=0
    formData.selected_interface=interfacesIds
    formData.message_body_html =htmlCode


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
    formData.return_path = formData.returnPath;
    // --------------------------------------------------------------- end queryParams
    // --------------------------------------------------------------- create url && request

    console.log("-------------------------",formData)
    const url = "http://manageservers.lwebl3ami9.store/api/test_sending_server"
    const result = await axios.post(url,formData);
    console.log(result.data)

    return result.data

    // --------------------------------------------------------------- end url && request
}