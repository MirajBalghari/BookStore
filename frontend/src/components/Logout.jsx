import React from 'react'
import { useAuth } from '../contex/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
const [authUser,setAuthUser]= useAuth()
   const Logout =()=>{
setAuthUser({...authUser , user:null})
 localStorage.removeItem('user')
 toast.success('Logout Successful')
 setTimeout(()=>{
    window.location.reload()
 },2000)

} 
  return (
    <>
    <div>
        <button onClick={Logout} className='px-3 py-2 bg-red-500 hover:bg-red-700 rounded-md text-white'>Logout</button>
    </div>
    </>
  )
}

export default Logout
