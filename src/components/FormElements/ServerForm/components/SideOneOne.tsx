"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
import { ServerCog } from 'lucide-react';
import { Server } from 'lucide-react';
import FormdeliveryServer from "./FormdeliveryServer";
import FormOtherOption from "./FormOtherOption";

export default function SideOne() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 dark:hover:bg-slate-950 rounded-sm h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };



  return (
    <Accordion

    defaultSelectedKeys="1"
    selectionMode="multiple"

        fullWidth={true}
      showDivider={false}
      className="p-2 flex flex-col dark:bg-gray-dark lg:w-4/12 mb-4 lg:mb-0"
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        
        startContent={<ServerCog  className="text-primary" />}

        title="Delivery Server"
      >
        {/* -------------------------------------------------------------------------------------------------------------component */}
        <FormdeliveryServer/>
      </AccordionItem>
      <AccordionItem
        key="2"
        // aria-label="Apps Permissions"
        startContent={<Server  />}
        title="Other Options"
      >
        {/* -------------------------------------------------------------------------------------------------------------component */}
        <FormOtherOption/>
      </AccordionItem>
    </Accordion>
  );
}