"use client"
import Image from 'next/image'
// import TestimonialCarousel from '@/components/TestimonialCarousel';
// import TestimonialAnimation from '@/components/TestimonialAnimation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Newsletter from '@/components/Newsletter';
import Form from '@/components/Form';
import Map from '@/components/Map';
import Tesstic from '@/components/testimonials';
import BigImageDetails from '@/components1/BigImageDetails';

import Script from 'next/script';

import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
export default function Home() {


    return ( 
        <>
        <div>

          <TawkMessengerReact
            propertyId="658daa0270c9f2407f841867"
            widgetId="1hiom06vn"/>
          <Hero />
          <Services/>
          <hr/>
          <Tesstic/>
          <hr/>
          <BigImageDetails/>
          <br/>
          <Newsletter/>
          <Form/>






{/*  */}
{/* <TestimonialAnimation/> */}
                {/* <div className="py-56 bg-blue-500 ">
                    <p className="text-white text-center">testimonials</p>
                </div> */}
<br/>














      </div> 
      </>
    )
}