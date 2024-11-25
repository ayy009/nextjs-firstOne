"use client"
import React, { useState } from "react";
import { Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {  FileJson2 } from 'lucide-react';


export default function SideOne({setFormData,formData,handleSubmit}:any) {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 dark:hover:bg-slate-950 rounded-sm h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };



  const handleChange = (field: string, value: string) => {
    setFormData((prev:any) => ({ ...prev, [field]: value }));
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
            <div className="space-y-6">
      <Textarea
        label="Header"
        value={formData.header}
        onChange={(e) => handleChange('header', e.target.value)}
        rows={7}
        variant="bordered"
      />

      <Input
        label="Return Path"
        value={formData.returnPath}
        onChange={(e) => handleChange('returnPath', e.target.value)}
        variant="bordered"
      />

      <Textarea
        label="Test emails"
        value={formData.testEmails}
        onChange={(e) => handleChange('testEmails', e.target.value)}
        rows={3}
        variant="bordered"
      />

      <Select
        label="Sending Type"
        value={formData.sendingType}
        onChange={(e) => handleChange('sendingType', e.target.value)}
        variant="bordered"
      >
        <SelectItem key="queuenova" value="QueueNova">QueueNova</SelectItem>
        <SelectItem key="mandrill" value="Mandrill">Mandrill</SelectItem>
        <SelectItem key="sendgrid" value="SendGrid">SendGrid</SelectItem>
        <SelectItem key="custom" value="Custom">Custom</SelectItem>
      </Select>

      <Button 
       className="place-items-end w-full"
       color="primary"
       onClick={handleSubmit}>
        Test
      </Button>
    </div>
        </AccordionItem>
    </Accordion>
  );
}