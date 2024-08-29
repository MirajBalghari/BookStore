import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Freebook from '../components/freebooks'

function Home() {


  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </div>
     
    </>
  )
}

export default Home;
