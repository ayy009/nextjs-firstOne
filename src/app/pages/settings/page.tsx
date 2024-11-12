
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SettingBoxes from "@/components/SettingBoxes";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const Settings = () => {
  return (
    
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumbs>      
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Settings</BreadcrumbItem>
        </Breadcrumbs>

        <SettingBoxes />
      </div>
    
  );
};

export default Settings;
