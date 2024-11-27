"use client"
import React, { useState, useEffect } from "react";
import SideFour from "@/components/ServerTest/SideFour";
import SideOne from "@/components/ServerTest/SideOne";
import SideThree from "@/components/ServerTest/SideThree";
import SideTwo from "@/components/ServerTest/SideTwo";
import { TestSend, TestSendServers } from "@/actions/ServersActions/SendTestActions";
import toast from "react-hot-toast";
import EmailInterfaceSkeleton from "@/components/ServerTest/components/EmailInterfaceSkeleton";

interface Server {
  id: number;
  label: string;
}

interface ServerItem {
  id: number;
  label: string;
}

const TablesPage = () => {
  const [formattedData, setFormattedData] = useState<any[]>([]); // State for the formatted data
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [dataTable,setDataTable] = useState([])
  //-----------------------------------------------------------------------------------------------------------start status for html
    // New state for HTML code
    const [htmlCode, setHtmlCode] = useState("<h1>Hello World</h1><p>Start editing to see changes!</p>");

    // ... (previous useEffect and other functions)
  

  // ---------------------------------------------------------------------------------------------------------- start states for test
  const [formData, setFormData] = useState({
    header: "MIME-version: 1.0\nContent-Type: text/html;charset=UTF-8\nDate: [smtp_date]\nTo: [to]\nFrom: [from] <[random@[dom]>]\nSubject: [subject]\nList-Unsubscribe: <[random@[dom]>]",
    returnPath: "",
    testEmails: "",
    sendingType: "QueueNova",
  });

  const [rightItemsInterfaces, setRightItemsInterfaces] = React.useState<ServerItem[]>([]);

  useEffect(
    ()=>{
      console.log(htmlCode)

    },[htmlCode])


  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log("--------------------------------------start testSend");
      const interfacesIds = rightItemsInterfaces.map((item) => item.id);
     
      const result = await TestSend({ formData, interfacesIds,htmlCode });
      
      const processedResults = result.results.map((item: any, index: number) => ({
        ...item,
        id: index + 1,
      }));
      
      setDataTable(processedResults);
      
      toast.success('Test send completed successfully', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#4CAF50',
          color: 'white',
        },
        iconTheme: {
          primary: 'white',
          secondary: '#4CAF50',
        },
      });
      
      console.log("--------------------------------------end testSend");
    } catch (error) {
      console.error('Error in test send:', error);
      
      toast.error('Failed to complete test send', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#F44336',
          color: 'white',
        },
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {


        const result = await TestSendServers();

        setFormattedData(result); // Set the formatted data
      } catch (error) {
        console.error("Error fetching server data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <EmailInterfaceSkeleton/>; // Render a loading indicator while data is being fetched
  }

  return (
    <div className="min-h-full flex justify-center">
      <div className="flex flex-col w-full relative min-h-screen">
        <div className="block md:flex flex-row flex-wrap w-full justify-between">
          <SideOne setFormData={setFormData} formData={formData} handleSubmit={handleSubmit}/>
          <SideTwo dataGetServers={formattedData} rightItemsInterfaces={rightItemsInterfaces} setRightItemsInterfaces={setRightItemsInterfaces} />
        </div>
        <div className="w-full">
          <SideThree setHtmlCode={setHtmlCode} htmlCode={htmlCode}/>
          <SideFour dataTable={dataTable}/>
        </div>
      </div>
    </div>
  );
};

export default TablesPage;
