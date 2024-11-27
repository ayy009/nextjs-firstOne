"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
import {  CodeXml } from 'lucide-react';
import CodeEditor from "./components/CodeEditor";


export default function SideThree({ htmlCode, setHtmlCode }:any) {


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
      className="p-2 flex flex-col dark:bg-gray-dark  mt-5 w-full mx-auto"
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
                className=" dark:bg-gray-dark"
        startContent={<CodeXml    className="text-primary" />}
        

        title='try it yourself   "creative"'
      >
    <div style={{ padding: '10px' }}>

      <CodeEditor 
            initialHtml={htmlCode}
            initialCss=""
            onHtmlChange={setHtmlCode}
        />
    </div>
        </AccordionItem>
    </Accordion>
  );
}