import React from 'react';

 const Contact = () => {


  return (
    <>
    <div className='flex  h-screen item-center justify-center border p-4 mt-20  
    '>
    <form className='' >
        <h1 className='my-2 text-2xl font-bold'>Contact Us</h1>
        <div className='flex flex-col my-3 '>
        <label>Name</label>
        <input type="text" name="name" placeholder='Enter Name' className=' border p-3 my-2'/>
        </div>
    <div className='flex flex-col my-3 '>
    <label>Email</label>
    <input type="email" name="email" placeholder='Enter Email'  className=' border p-3 my-2' />
    </div>
    <div className='flex flex-col my-3 '>
    <label>Message</label>
    <textarea name="message" placeholder='Message'  className=' border p-3 my-2'/>
    </div>
    
      <button type="submit" className='bg-blue-500 text-white hover:bg-blue-700 py-2 px-3 rounded-md'  >Send</button>
    </form>
    </div>
    </>
  );
}
export default Contact;
