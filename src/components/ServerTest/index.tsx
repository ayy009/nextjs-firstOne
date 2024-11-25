"use client"
import SideOne from './SideOne'
import SideTwo from './SideTwo'
import SideThree from './SideThree'
import SideFour from './SideFour'
import { useState } from 'react'

interface FormData {
  header: string;
  returnPath: string;
  testEmails: string;
  sendingType: string;
}



export default function ServerTest(dataGetServers:any) {
  const [formDataIndex, setFormDataIndex] = useState<FormData>({
    header: "MIME-version: 1.0\nContent-Type: text/html;charset=UTF-8\nDate: [smtp_date]\nTo: [to]\nFrom: [from] <[random@[dom]>]\nSubject: [subject]\nList-Unsubscribe: <[random@[dom]>]",
    returnPath: "",
    testEmails: "",
    sendingType: "",
  });
  const [interfacesIdsIndex,setInterfacesIdsIndex] = useState([])
  


  return (
    <div className=''>
      <div className='block md:flex flex-row flex-wrap w-full justify-between'>
        <SideOne setFormDataIndex={setFormDataIndex}/>
        {/* <SideOne formData={formData} setFormData={setFormData}/> */}
        <SideTwo  setInterfacesIdsIndex={setInterfacesIdsIndex}/>
      </div>
      <div className='w-full'>
        <SideThree/>
        <SideFour/>
      </div>

    </div>
  )
}