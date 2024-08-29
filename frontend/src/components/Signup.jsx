
import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Login from './login';
import axios from 'axios'
import toast from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit =async (data)=>{
      const userinfo={
        name:data.name,
        email:data.email,
        password:data.password
      }
 await axios.post('http://localhost:8003/user/signup',userinfo)
  .then((res)=>{
    toast.success(res.data.msg)
localStorage.setItem('user',JSON.stringify(res.data.user.email))
setTimeout(()=>{
  navigate('/')
  window.location.reload()
},2000)
  }).catch((err)=>{
    toast.error(err.response.data.msg )
  })


    }



  return (

        <>
        

  <div className="modal-box  my-5 container mx-auto md:px-20 px-4   ">
    <form onSubmit={handleSubmit(onSubmit)} >
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4">✕</Link>
    <div className='grid grid-cols'>
<h1 className='text-2xl font-bold text-center mt-5'>Signup</h1>
<div className="mb-1 grid grid-cols">
    <label htmlFor="name"className='my-1 text-xl' >Name</label>
    <input type="text"  name='name' className='p-2 border text-md md-1 '
     {...register("name", { required: true })} />
           {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}

  </div>
  <div className="mb-1 grid grid-cols">
    <label htmlFor="email"className='my-1 text-xl' >Email address</label>
    <input type="email"  name='email' className='p-2 border text-md md-1 '
     {...register("email", { required: true })} />
           {errors.email && <span className='text-red-500 mt-1'>This field is required</span>}

  </div>
  <div className="mb-2 grid grid-cols">
    <label htmlFor="password" className='my-1 text-xl' >Password</label>
    <input type="password" name='password' className='p-2 border md-1 '
     {...register("password", { required: true })}/>
     {errors.password && <span className='text-red-500 mt-1'>This field is required</span>}

  </div>
 
  <button type="submit" className="btn btn-primary curser-pointer ">Submit</button>

<div className='mt-1'>
    <p>do register <Link  className='text-blue-500 underline' 
    onClick={()=> document.getElementById('my_modal_3').showModal()}>Login</Link></p>
 <Login/>
</div>
    </div>
    
    
    </form>
    
  </div>

      
        </>

  )
}

export default Signup;
