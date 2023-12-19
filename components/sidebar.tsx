'use client'
import {Montserrat} from "next/font/google"
import Image from "@/node_modules/next/image";
import { Button } from "./ui/button";
import Link from "@/node_modules/next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "@/node_modules/next/navigation";


const montserrat =  Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes = [{
    label: "Dashboard",
    icon: "/home.png",
    href: "/dashboard",
    color: "text-sky-500"
}, 
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

const Sidebar = () => {
    const pathname = usePathname()
    return(
        <div className="space-y-4 pl-4 pr-4 flex flex-col h-full text-white bg-[]">
            <div className="px-3 py-2 flex items-center mt-4 ml-3 mb-10">
                <div className="relative h-8 w-8 mr-4">
                    <Image 
                    fill alt="Logo" src="/logo.png"
                    />
                </div>
                <div className={montserrat.className}>
                    <h2 className="font-bold">Taskmaster</h2> 
                </div>
            </div>
            <div className="mt-10 space-y-3 flex flex-col items-left">
                {routes.map((route)=> (<Link
                href = {route.href}
                key = {route.href}>
                <Button className= {cn(" active:bg-white/10 justify-left text-white-foreground  hover:bg-white/10 pt-4 pb-9 w-full outline-none", pathname == route.href ? "text-white bg-white/10" : "text-zinc-400")}> 
                <div className="relative h-6 w-6 mr-2">
                    <Image 
                    fill alt="Logo" src={route.icon}
                    />
                </div>
                <p className=" font-sans font-normal ">
                    {route.label}
                </p> </Button>
                </Link>))}
            </div>
        </div>
    );
}

export default Sidebar