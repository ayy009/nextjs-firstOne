"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
import { FileCog } from 'lucide-react';
import { Grid2x2Check } from 'lucide-react';
import FormLog from "./FormLog";
import TableDelivery from "./TableDelivery";

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
      className="p-2 flex flex-col dark:bg-gray-dark lg:w-7/12 mt-5 md:mt-0  "
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
                className=" dark:bg-gray-dark"
        startContent={<FileCog  className="text-primary" />}

        title="Delivery Servers Inrterfaces"
      >
        <TableDelivery/>
        </AccordionItem>
    </Accordion>
  );
}