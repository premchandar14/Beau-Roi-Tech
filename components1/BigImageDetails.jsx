

const BigImageDetails = ({dsrc}) => {
	return (
		<section className=" flex px-44 justify-center bg-gray-100 py-52">
		<div className=" container mx-auto ">
			<div className="flex justify-between gap-20">
				<div className="w-1/2">
					<h2 className="text-blue-700 pb-1 text-xl font-extrabold">
						we specialize in
					</h2>
					<h1 className="test-gray-900  leading-10 text-[2.1rem] font-bold">
						Empower business to leverage multi-cloud.
					</h1>
					
				</div>
				<p className="text-xl pt-2 w-1/2">
					Empower business to leverage multi-cloud. We believe that no two orgs are alike, and therefore, their cloud strategies should be just as unique.
Empower business to leverage multi-cloud. 
		
				</p>
			</div>
			<div className="pt-20 mx-auto flex justify-center">
				         <div >
            <img className=" rounded-3xl" src={`${dsrc}`}   />
          </div>
			</div>
			
		</div>
		</section>

	)
}

export default BigImageDetails