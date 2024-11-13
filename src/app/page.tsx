import { Metadata } from "next"
import { redirect } from "next/navigation"
import { checkSession } from "@/lib/session" // Import your custom session check function
import { getUserApiKey } from "@/lib/ApiKey"

export const metadata: Metadata = {
  title: "All-in-one SEO tool to grow your business rapidly",
  description: "Welcome to E-impact, where creativity meets strategy to elevate your brand to new heights. Our team of passionate marketers is dedicated to crafting compelling narratives, captivating visuals, and innovative strategies tailored to your unique needs",
}

export default async function Home() {
  const apikey = await getUserApiKey()
  if (!apikey) {
    redirect("/auth")
  } else {
    redirect("/dashbord")
  }

  // This part will never be reached due to redirects
  return null
}
