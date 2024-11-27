import { Metadata } from "next";
import { getUserApiKey } from "@/lib/ApiKey";
import axios from "axios";
import TableBase from "@/components/Tables/TableBase";
import { columns, INITIAL_VISIBLE_COLUMNS, statusOptions, tableName } from "./data";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const ServerProjectStats = async () => {
  const userApiKey = await getUserApiKey(); 
  console.log(userApiKey)
  const ApiUrl = `http://manageservers.lwebl3ami9.store/api/ServerProjectStats?api_key=${userApiKey}`

  const result = await axios.post(ApiUrl)
    // Extract data
    const dataTable = result.data.stats11.map((item: any, index: number) => ({
        ...item, // Spread the existing properties
        id: index + 1, // Add a unique ID starting from 1
      }));


  return (
        // <TableServerInterfaces dataTable ={result.data.interfaces}/>
        <div>
             <TableBase  columns={columns}  dataTable={dataTable} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>

        </div>

  );
};

export default ServerProjectStats;
