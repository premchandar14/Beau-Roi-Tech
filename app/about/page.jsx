import Hero from '@/components1/Hero';
import Features from '@/components1/Features';
import Clients2 from '@/components1/Clients2';
import Details1 from '@/components1/Details';
import BigPic from '@/components1/BigPic';
import CTA from '@/components1/CTA';
import Newsletter from '@/components/Newsletter';
import BigImageDetails from '@/components1/BigImageDetails2';
import Abt from '@/components/Abt';
import Details from '@/components/Details';

import Map from '@/components/Map';
import Image from 'next/image'

export default function Home() {
  return (
          <>
            <div className=' overflow-hidden   bg-gradient-to-tl from-purple-900 to-blue-900 h-[300px] sm:h-[500px] w-full relative'>
              <div className='py-10 bg-gray-100 opacity-90'>

              </div>
              <div>
                <img src="3r.png" className='w-full h-full object-cover absolute mix-blend-overlay'/>
                <div className="flex justify-center max-sm:px-0 py-20 sm:py-40">
                  <h1 className="text-white max-sm:text-3xl text-7xl font-semibold">
                    About Us
                  </h1>
                </div>
              </div>
            </div>
            <Details1 dcolor={"text-gray-900"} dfl={"flex-row-reverse"} dbg={" py-20"}
             dsrc={"/vision.jpeg"}  
             dtxt={"Our Vision"}
            dtxtpara={"Empower business to leverage the full potential of multi-cloud environments. We believe that no two organisations are alike, and therefore, their cloud strategies should be just as unique."}
             />
            <Details1 dcolor={"text-gray-900"}  dbg={" py-10 pb-20"}  
            dsrc={"/mission.jpeg"}  
            dtxt={"Our Mission"}
            dtxtpara={"To be your guiding light, simplify the complexities of multi cloud environments and empower your organisation to harness their full potential."}/>

            <Abt/> 
            <BigImageDetails/>
            <Newsletter/>
           
 
            <Map />


          </>
  )
}
