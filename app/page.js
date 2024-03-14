"use client"
import Image from 'next/image'

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


<br/>

      </div> 
      </>
    )
}