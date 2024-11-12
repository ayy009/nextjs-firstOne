import { Metadata } from "next"
import { redirect } from "next/navigation"
import { checkSession } from "@/lib/session" // Import your custom session check function

export const metadata: Metadata = {
  title: "All-in-one SEO tool to grow your business rapidly",
  description: "Welcome to E-impact, where creativity meets strategy to elevate your brand to new heights. Our team of passionate marketers is dedicated to crafting compelling narratives, captivating visuals, and innovative strategies tailored to your unique needs",
}

export default async function Home() {
  const session = await checkSession() // Custom session check

  if (!session) {
    redirect("/auth")
  } else {
    redirect("/dashboard")
  }

  // This part will never be reached due to redirects
  return null
}
