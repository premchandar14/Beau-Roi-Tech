
import './globals.css'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BottomHero from '@/components/BottomHero';
import Vision from '@/components/Vision';
import Goals from '@/components/Goals';
import About from '@/components/About';


import Footer from '@/components/Footer';
import MegaMenu from '@/components/MegaMenu';

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beauroi',
  description: 'Delivering cutting-edge solutions that empower businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body > 
        {/* <Navbar/> */}
        <MegaMenu/>
        <Hero/>
        <BottomHero/>
        <About/>
        <main ClassName="relative orverflow-hidden"> </main>
        <Goals />
        <Vision />
        {children}
        <Footer />
      </body>
    </html>
  )
}
