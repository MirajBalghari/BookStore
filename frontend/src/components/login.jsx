import React from 'react'
import { useForm } from "react-hook-form";
import { Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data)=>{
      const userinfo={
        email:data.email,
        password:data.password
      }
 await axios.post('http://localhost:8003/user/login',userinfo)
 .then((res)=>{
  toast.success(res.data.msg)
  document.getElementById("my_modal_3").close()
setTimeout(() => {
  localStorage.setItem('user', JSON.stringify(res.data.user.email))
  window.location.reload()
}, 1500);
 }).catch((err)=>{
  toast.error(err.response.data.msg)
  setTimeout(()=>{},1500)
 })

    }
    

   


  return (

        <>
            <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} >
      <Link to={'/'} onClick={()=>document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <div className='grid grid-cols'>
<h1 className='text-2xl font-bold text-center'>Login</h1>
  <div className="mb-3 grid grid-cols">
    <label htmlFor="email"className='my-3 text-xl' >Email address</label>
    <input type="email"  id="email" className='p-3 border text-md md-1 '
     {...register("email", { required: true })} />
           {errors.email && <span className='text-red-500'>This field is required</span>}

  </div>
  <div className="mb-3 grid grid-cols">
    <label htmlFor="password" className='my-2 text-xl' >Password</label>
    <input type="password" id="password" className='p-3 border md-1 '
     {...register("password", { required: true })}/>
     {errors.password && <span className='text-red-500'>This field is required</span>}

  </div>
 
  <button type="submit" className="btn btn-primary curser-pointer ">Submit</button>

<div className='mt-2'>
    <p>Not register <Link  to='/signup' className='text-blue-500 underline'>Signup</Link></p>

</div>

    </div>
    
    
    </form>
    
  </div>
</dialog>
            </div>
        
        </>

  )
}

export default Login;







