import React, { useEffect, useState } from "react";
import Cards from "./cards";
import {Link } from 'react-router-dom' ;
import axios from 'axios'
const Cours=()=>{
   const [book , setBook] = useState([]);
   useEffect(()=>{
const fetchData =async()=>{
    try {
        const res = await axios.get('http://localhost:8003/book/')
    setBook(res.data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()
   },[])


return(
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
    <div className="mt-28 items-center justify-center text-center  dark:bg-slate-900 dark:text-white ">
        <h1 className="  text-2xl font-semibold md:text-4xl">We're delighted to have you {"" }<span className="text-pink-500">Here! :)</span> </h1>
    <p className="pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime aspernatur necessitatibus voluptate pariatur dolore possimus, eos iste! Enim fugiat excepturi in ea corrupti animi incidunt ex quia debitis, totam alias nulla rem nemo consectetur ullam. Unde recusandae sapiente beatae animi sit velit veritatis autem, nisi dolorem sint, eum iusto in earum, sed vitae vel excepturi? Aspernatur minus, id at quia repudiandae officia quidem ullam ratione optio, sunt culpa unde expedita. Perspiciatis minus porro sunt odit laudantium vel quas libero.</p>
  <Link to={'/'}><button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button></Link>  
    </div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
        {
            book.map((item)=>(
                <Cards  item={item}/>
            ))

        }
    </div>
    </div>
 
    </>
)
};
export default Cours;