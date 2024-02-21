

const Details2 = ({sername,serdes,serimg}) => {
	return (
<div className='bg-gray-100'>
      <section className="md:px-20 sm:px-10 max-xs:pb-20 max-sm:py-6 px-6 ">

      <div className=" ">
   
   
      <div className=" sm:px-8  sm:py-32 w-[100%] ">

         <div className="max-sm:flex max-sm:flex-col-reverse sm:flex max-sm:pt-16  items-center  justify-between">
          <div className="mt-6 sm:mr-6">
         <div className=" sm:text-[1.1rem] max-sm:text-center text-blue-500  font-bold ">
                   "we specialize in"
                </div>
            <div className="sm:text-[2.7rem] max-sm:text-center  text-gray-900 max-sm:pt-2 text-[1.7rem]  font-extrabold">
              {sername}
            </div>
                       
            <p className="text-xl max-xs:text-sm max-sm:text-md max-sm:text-center xs:max-w:lg sm:max-w-xl md:max-w-5xl lg:max-w-7xl font-semibold text-gray-700 mb-4 leading-8  mt-5">
               {serdes}</p>

  
          </div>
          <div
         
            className="md:w-[50%] md:pr-8 sm:flex sm:justify-end"
          >
            <img src={`${serimg}`} width="310px" height="600px" className="rounded-xl justify-center items-center" />
          </div>

        </div>  <div className='mt-10 flex max-sm:justify-center  mx-auto'>
                <button href="/services" className="px-8 mr-4 hover:text-black  py-4 text-gray-500 font-semibold border border-gray-800 hover:bg-blue-400 rounded-md transition duration-300 border-gray">
                  explore more
                </button> <button className="px-8 mr-4 hover:text-black  py-4 text-gray-500 font-semibold border border-gray-800 hover:bg-blue-400 rounded-md transition duration-300 border-gray">
                  Enquire Now
                </button> </div>

      </div>
        </div>

    </section>
</div>
	)
}

export default Details2