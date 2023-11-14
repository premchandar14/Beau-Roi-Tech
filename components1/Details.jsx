

const Details = ({dtxt, dcolor, dfl, dbg, dsrc}) => {
  return (

      
        <div className={`${dbg}  px-36 py-16`} >

           
     <section  className={`${dcolor} container mx-auto  py-2  rounded-3xl flex ${dfl} gap-10 items-center mb-6 dark:bg-gray-900`}>
          <div  className=" ml-8 mr-12 py-10">
            <div className="py-5">
                       <div className='mt-1'>
                <div className="  text-yellow-500  font-bold ">
                  Know More
                </div>  
             </div>
            <div className="sm:text-[2.5rem] max-sm:pt-20 text-[1.3rem] font-bold">
              Big Title Here
            </div>
            <p className="text-xl  leading-8 max-w-md mt-2">
             {`${dtxt}`} Empower business to leverage multi-cloud. We believe that no two orgs are alike, and therefore, their cloud strategies should be just as unique.
            </p>
            </div>
 
             
            <div className='mt-1'>
                <button className="px-4 py-2 text-white  hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 ">
                  Know More
                </button>  
             </div>
          </div>

          <div  className=" sm:w-1/2  max-w-screen-xl  ml-2  py-8  text-center lg:py-10 ">
                 
    <div
         
            className="md:w-[95%] flex"
          >
            <img src={`${dsrc}`} className="justify-center rounded-3xl items-center" />
          </div>

      </div>
          
        </section>




    </div>

  )
}

export default Details

   