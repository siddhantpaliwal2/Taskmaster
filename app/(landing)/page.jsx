"use client"
import {Button} from '@/components/ui/button'
import Link from '@/node_modules/next/link'
import Image from "@/node_modules/next/image";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import TypewriterComponent from "typewriter-effect";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const font = Montserrat({ weight: '600', subsets: ['latin'] });
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


export default function LandingPage() {
  return (
    <div className='h-full bg-#111827'>
          <nav className="flex items-center justify-between p-4 bg-transparent  mt-5">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-4">
                <Image fill alt="Logo" src="/logo.png" />
              </div>
              <h1 className={cn("text-2xl font-bold text-white", font.className)}>
                Taskmaster
              </h1>
            </Link>
            <div className="flex items-end justify-end pl-10 gap-x-2">
              <Link href={"/sign-up"}>
                <Button variant="outline" className="rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
          <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        <TypewriterComponent
            options={{
              strings: [
                "Video Generation.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400 mt-15">
        Your All In One AI Assistant.
      </div>
      <div>
        <Link href={ "/sign-in"} >
          <Button className="bg-white text-black text-center align-center justify-center rounded-full hover:bg-white mb-10 mt-10">
                    Click here to sign in
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400  text-sm font-bold md:text-sm ">
        This is Taskmaster.
      </div>
      <p>
        Created by Siddhant Paliwal.
      </p>
    </div>
          
    </div>
)}