import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Cours from '../components/cours';

function Courses() {


  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar/>
      <div className='dark:bg-slate-900 dark:text-white' >
      <Cours/>
      </div> 
      <Footer/>
    </div>

     
    </>
  )
}

export default Courses;