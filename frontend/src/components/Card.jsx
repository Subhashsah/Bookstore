import React from 'react'

export default function Card({items}) {
   
    
  return (
    <>
       <div className="flex flex-col items-center justify-center bg-gray-200 gap-6 py-6 shadow-2xl rounded-xl w-96 " >
         <div className="hover:scale-110 duration-200 mb-5">
            <img className="md:w-[350px] md:h-[400px] w-[300px] h-[350px] rounded-md" src={items.formats["image/jpeg"]} alt="" />
         </div>
           <p className="text-md font-semibold">Title:{items.title}</p>
           <p className="text-lg font-bold">Authors:{items.authors[0].name}</p>
           </div>  
      
    
    
    </>
  )
}
