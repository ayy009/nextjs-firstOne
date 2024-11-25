"use client"
import React, { useState, useEffect } from "react";
import SideFour from "@/components/ServerTest/SideFour";
import SideOne from "@/components/ServerTest/SideOne";
import SideThree from "@/components/ServerTest/SideThree";
import SideTwo from "@/components/ServerTest/SideTwo";
import { getUserApiKey } from "@/lib/ApiKey";
import axios from "axios";
import { TestSend } from "@/actions/ServersActions/SendTestActions";
import toast from "react-hot-toast";

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

  // ---------------------------------------------------------------------------------------------------------- start states for test
  const [formData, setFormData] = useState({
    header: "MIME-version: 1.0\nContent-Type: text/html;charset=UTF-8\nDate: [smtp_date]\nTo: [to]\nFrom: [from] <[random@[dom]>]\nSubject: [subject]\nList-Unsubscribe: <[random@[dom]>]",
    returnPath: "",
    testEmails: "",
    sendingType: "QueueNova",
  });

  const [rightItemsInterfaces, setRightItemsInterfaces] = React.useState<ServerItem[]>([]);


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log("--------------------------------------start testSend")
  //   // console.log(formData)
  //   const interfacesIds = rightItemsInterfaces.map((item) => item.id);

    
  //   const result = await TestSend({formData,interfacesIds})
  //     result.results = result.results.map((item:any, index:any) => ({
  //       ...item,       // Retain existing properties
  //       id: index + 1, // Add a new 'id' (starting from 1 or any other logic)
  //     }));
  //   setDataTable(result.results)
  //   console.log("--------------------------------------end testSend")


  // };

  // ---------------------------------------------------------------------------------------------------------- end states for test


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log("--------------------------------------start testSend");
      const interfacesIds = rightItemsInterfaces.map((item) => item.id);
     
      const result = await TestSend({ formData, interfacesIds });
      
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
        const userApiKey = await getUserApiKey();
        const getServersUrl = `http://manageservers.lwebl3ami9.store/api/test_send_server?api_key=${userApiKey}`;
        const resultgetServers = await axios.post(getServersUrl);

        const dataGetServers = resultgetServers.data.nonSelectedDeliveryServers;

        const formattedData = dataGetServers.map((item: any) => ({
          id: item.id,
          label: `${item.name}-[PV${item.serverprovider_id}]`, // Combine name and serverprovider_id into label
        }));

        setFormattedData(formattedData); // Set the formatted data
      } catch (error) {
        console.error("Error fetching server data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  }

  return (
    <div className="min-h-full flex justify-center">
      <div className="flex flex-col w-full relative min-h-screen">
        <div className="block md:flex flex-row flex-wrap w-full justify-between">
          <SideOne setFormData={setFormData} formData={formData} handleSubmit={handleSubmit}/>
          <SideTwo dataGetServers={formattedData} rightItemsInterfaces={rightItemsInterfaces} setRightItemsInterfaces={setRightItemsInterfaces} />
        </div>
        <div className="w-full">
          <SideThree />
          <SideFour dataTable={dataTable}/>
        </div>
      </div>
    </div>
  );
};

export default TablesPage;
