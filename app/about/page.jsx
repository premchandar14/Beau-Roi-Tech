import Hero from '@/components1/Hero';
import Features from '@/components1/Features';
import Clients2 from '@/components1/Clients2';
import Details from '@/components1/Details';
import BigPic from '@/components1/BigPic';
import CTA from '@/components1/CTA';
import BigImageDetails from '@/components1/BigImageDetails';
import Testimonials from '@/components1/Testimonials';
import Blog from '@/components1/Blog';
import Blg from '@/components1/Blg';

import Image from 'next/image'

export default function Home() {
  return (
          <>
            <Hero/>
            <Features/>
            <Clients2/>
            <Details dcolor={"text-gray-900"}  dbg={"bg-gray-100"} dsrc={"/fref2.png"} dtxt={" "}/>

            <Details dbg={"bg-gray-100"} dfl={" flex-row-reverse "} dsrc={"/fref2.png"} dcolor={"text-gray-900"} dtxt={" hello undefined Empower business to leverage multi-cloud. "}/>
            <Details dcolor={"text-gray-900"}  dbg={"bg-gray-100"} dsrc={"/fref2.png"} dtxt={" "}/>
            <Details dcolor={"text-gray-100"}  dbg={"py-40  bg-gradient-to-tl from-gray-600 via-lime-900 to-sky-900"} dsrc={"/fref2.png"} dtxt={" hello "}/>
            <BigImageDetails dsrc={"/3r.png"}/>
  
            <BigPic/>
            <Testimonials/>
         
            <Blg dcolor={"text-gray-900"} dfl={" flex-row-reverse "} dbg={"py-10 m-10 bg-white"} dsrc={"/4r.png"} dtxt={" hello "} />
            <CTA color={"  bg-gray-50 p-20"} hei={" "}/>
          </>
  )
}
