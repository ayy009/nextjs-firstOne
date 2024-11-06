"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
import {  PackageOpen } from 'lucide-react';
import TableTestsResults from "./components/TableTestsResults";


export default function SideFour() {
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
    // defaultSelectedKeys="1"
    selectionMode="multiple"
      showDivider={false}
      className="p-2 flex flex-col dark:bg-gray-dark  mt-5  w-full mx-auto"
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        className=" dark:bg-gray-dark"
        startContent={<PackageOpen    className="text-primary" />}
        title="Tests Results">
        <TableTestsResults/>
        </AccordionItem>
    </Accordion>
  );
}