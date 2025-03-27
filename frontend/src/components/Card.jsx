import React from 'react'

export default function Card({items}) {
   
    
  return (
    <>
       <div className="flex flex-col items-center justify-center bg-gray-200 gap-6 py-6 shadow-2xl rounded-xl w-96 " >
         <div className="hover:scale-110 duration-200 mb-5 ">
            <img className="md:w-[350px] md:h-[400px] w-[300px] h-[350px] rounded-md" src={items.formats["image/jpeg"]} alt="" />
         </div>
          <div className="">
           <p className="text-md font-semibold">Title:{items.title}</p>
           <p className="text-lg font-bold">Authors:{items.authors[0].name}</p>
           </div>
           <div className="flex justify-between space-x-36">
            <div className="inline-flex items-center rounded-full bg-gray-50 px-6 py-3 text-lg  text-gray-600 ring-1 ring-gray-500/10 ring-inset font-bold">$ 0</div>
            <div className="inline-flex items-center rounded-full bg-gray-50 px-6 py-2 text-lg  ring-1 ring-gray-500/10 ring-inset font-bold text-red-500">Buy now </div>
           </div>
           </div>  
      
    
    
    </>
  )
}
