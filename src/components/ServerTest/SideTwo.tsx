"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
import {   ServerCog, ServerCrash } from 'lucide-react';
import EmailHeaders from "./components/EmailHeaders";
import DeliveryBase from "./components/DeliveryBase";
import DeliveryServers from "./components/DeliveryServers";
import DeliveryServerInterfaces from "./components/DeliveryServerInterfaces";


export default function SideTwo() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 dark:hover:bg-slate-950 rounded-sm h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };


  return (
    <Accordion
    fullWidth={true}
    defaultSelectedKeys="1"
    selectionMode="multiple"
      showDivider={false}
      className="p-2 flex flex-col dark:bg-gray-dark  mt-5 md:mt-0  w-full md:w-[68%]"
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
                className=" dark:bg-gray-dark"
        startContent={<ServerCog    className="text-primary" />}
        

        title="Delivery Servers"
      >
        <DeliveryServers/>
        </AccordionItem>


        <AccordionItem
        key="2"
                className=" dark:bg-gray-dark"
        startContent={<ServerCrash    className="text-primary" />}
        

        title="Delivery Servers Interfaces"
      >
        <DeliveryServerInterfaces/>
        </AccordionItem>
    </Accordion>
  );
}