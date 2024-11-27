import { Metadata } from "next";
import TableServerInterfaces from "@/components/Tables/TableSererInterfaces";
import { getUserApiKey } from "@/lib/ApiKey";
import axios from "axios";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = async () => {
  const userApiKey = await getUserApiKey(); 
  const ApiUrl = `http://manageservers.lwebl3ami9.store/api/DeliveryServersInterfaces?api_key=${userApiKey}`

  const result = await axios.post(ApiUrl)
  console.log(result.data.interfaces)







  return (
        <TableServerInterfaces dataTable ={result.data.interfaces}/>

  );
};

export default TablesPage;
