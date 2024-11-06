import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "All in one SEO tool need to grow your business rapidly",
  description: "Welcome to E-impact, where creativity meets strategy to elevate your brand to new heights. Our team of passionate marketers is dedicated to crafting compelling narratives, captivating visuals, and innovative strategies tailored to your unique needs",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
