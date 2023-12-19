'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {Poppins} from "next/font/google"
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
import { usePathname } from "@/node_modules/next/navigation";
import {ArrowRight} from "lucide-react"

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"]
})

const routes = [
  {
    label: "Conversation",
    icon: "/chat.png",
    href: "/conversation",
    color: "text-sky-500"
    }, 
{
  label: "Image Generation",
  icon: "/photo.png",
  href: "/image",
  color: "text-sky-500"
},
{
  label: "Video Generation",
  icon: "/photo.png",
  href: "/video",
  color: "text-sky-500"
},

{
  label: "Music Generation",
  icon: "/voice.png",
  href: "/music",
  color: "text-sky-500"
},

{
  label: "Code Generation",
  icon: "/transcript.png",
  href: "/code",
  color: "text-sky-500"
},
{
  label: "Settings",
  icon: "/home.png",
  href: "/settings",
  color: "text-sky-500"
}]

export default function DashboardPage() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <h1 className={cn(" text-4xl font-bold", poppins.className)}>
        Explore the Power of AI
      </h1>
      <p className="mt-5 text-gray-500"> Select one of the options below to get started.</p>
      <div className="ml-12 mr-12 mt-10">
      {routes.map((route)=> (<Link
                href = {route.href}
                key = {route.href}>
                <Button className= {cn(" bg-gray-100  hover:bg-gray-200  w-full outline-8 h-20 mb-2 items-center", pathname == route.href ? "text-white bg-white/10" : "text-zinc-400")}> 
                <div className="relative h-10 w-10 mr-2">
                    <Image 
                    fill alt="Logo" src={route.icon}
                    />
                </div>
                <p className=" text-black font-sans font-semibold ">
                    {route.label}
                </p> 
                <ArrowRight className="ml-auto h-5 w-5"/>
                </Button>
                </Link>))}
      </div>
      <p className="mt-10 text-gray-500 text-xs"> Made by Siddhant Paliwal</p>
    </div>

  )
}