"use client"
import { Button, Select, SelectItem } from "@nextui-org/react";
import TicketsStatus from "./components/TicketsStatus";
import { ServerCog, UserSearch } from "lucide-react";
import SelectProjects from "./components/SelectProjects";
import TableTickets from "./components/TableTickets/TableTickets";
import TitleAndAction from "./components/TitleAndAction";



export default function Tickets() {
  return (
    <div className="flex flex-col w-full">
    <div className="w-full flex  flex-col-reverse md:flex-row justify-evenly bg-white py-2 rounded-md items-center dark:bg-gray-800 h-full mb-5">
      <SelectProjects/>
      <TicketsStatus />
    </div>

    <div className='flex flex-col justify-between  bg-white rounded-md dark:bg-gray-dark'>
          <TitleAndAction/>
          <TableTickets/>
      </div>

    </div>
  );
}