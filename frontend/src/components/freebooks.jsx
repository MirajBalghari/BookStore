import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./cards";
import axios from "axios";

const Freebook=()=>{
   const [book , setBook]= useState([]) ;
   useEffect(()=>{
    const fetchData= async()=>{
      try {
        const res = await axios.get('http://localhost:8003/book/');
        const data = res.data.filter((data)=> data.category==="Free")
        setBook(data)
      } catch (error) {
        console.log(error)
      }
    
    }
    fetchData()
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
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
            {
              breakpoint: 260,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          
        }
      ]
    };

   
    return(
        <>
        <div className="dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl my-5 container mx-auto md:px-20 px-4">
            <h1 className="font-semibold text-xl pb-2 ">Free Offered Course</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti reprehenderit in amet placeat quo doloribus doloremque omnis natus blanditiis provident earum, ab officiis, deserunt minima tenetur magni dolorem illo animi mollitia accusantium vitae.</p>
        </div>
     <div className="max-w-screen-2xl my-5 container mx-auto md:px-20 px-4">
        <div>
      <Slider {...settings}>
        {
          book.map((item)=>
            (
              <Cards item={item} key={item.id}/>
            )
          )
        }
      </Slider>
      </div>
    </div>
    </div>
        </>
    )
}
export default Freebook;