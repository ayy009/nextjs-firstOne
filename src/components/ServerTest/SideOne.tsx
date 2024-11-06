"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
import {  FileJson2 } from 'lucide-react';
import EmailHeaders from "./components/EmailHeaders";


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
    fullWidth={true}
    defaultSelectedKeys="1"
    selectionMode="multiple"
      showDivider={false}
      className="p-2 flex flex-col dark:bg-gray-dark  mt-5 md:mt-0 w-full md:w-[30%] "
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
                className=" dark:bg-gray-dark"
        startContent={<FileJson2   className="text-primary" />}
        

        title="Email Headers"
      >
        <EmailHeaders/>
        </AccordionItem>
    </Accordion>
  );
}