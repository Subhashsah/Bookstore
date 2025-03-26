import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import Card from '../components/Card'
export default function Api() {
  const [data,setData]=useState([])
  useEffect(()=>{
    const api =async()=>{
      try{
          
          const response = await axios.get("https://gutendex.com/books/?search=Sherlock")
          console.log(response)
          setData(response.data.results); 
      }
      catch(err){
              console.log(err)
      }
      
    } 
    api(); 
  },[])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className="max-w-screen container m-auto md:px-20 px-4">
    <div className="my-8">
     <h1 className="text-xl font-bold pb-2"> Free offered book</h1>
     <p className="text-md font-semibold">This book is available for free, offering valuable knowledge, entertainment, and insights without any cost. Enjoy unlimited reading! </p>
    </div>
    <div className=''>
    <Slider {...settings}>
    
        {
      
          data.map((item)=>(
            <Card key={item.id} items={item}/>
          
          ))
        }
       
      </Slider>
      
      </div>
    </div>
    </>
  )
}
