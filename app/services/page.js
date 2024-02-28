
import Services from '@/components/Services';
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
                    Our Services
                  </h1>
                </div>
              </div>
            </div>

     <Services/>

          </>
  )
}
