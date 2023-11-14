import Image from 'next/image'
import Hero from '@/components/Hero';
import BottomHero from '@/components/BottomHero';
import Details from '@/components/Details';
import Details2 from '@/components/Details2';
import ServicesBreif from '@/components/ServicesBreif';
import Features from '@/components/Features';
import Clients2 from '@/components1/Clients2';
export default function Home() {
  return (
          <>
          
        <Hero/>
        <BottomHero  hei={" py-20"}/>

            <Features/>
        
<Clients2/>
        <ServicesBreif/>  <Details2/> <Details/>   
             <BottomHero  hei={" py-60"}/><BottomHero color={"bg-cyan-900"} hei={" py-60"}/><Details2/>
   <BottomHero color={"  bg-gradient-to-tl text-gray-800 from-indigo-200 via-gray-300 to-indigo-700"} hei={" py-60"}/>
   
                          
                
          </>
  )
}
