import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableServerInterfaces from "@/components/Tables/TableSererInterfaces";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>

        <TableServerInterfaces/>
    </DefaultLayout>
  );
};

export default TablesPage;
