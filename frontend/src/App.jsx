import './App.css'
import Signup from './components/Signup.jsx'
import { useAuth } from './contex/AuthProvider.jsx'
import Courses from './course/courses.jsx'
import Home from './home/home.jsx'
import {BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import Contacts from './contact/Contacts.jsx'

function App() {

const[authUser,setAuthUser]= useAuth()
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<h1>Not Found This Page</h1>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/> : <Navigate to={'/'}/>}/>
      <Route path='/signup' element={authUser? <Navigate to={'/'}/>:<Signup/>}/>
      <Route path='/contact' element={authUser?<Contacts/>:<Navigate to={'/'}/>}/>


    </Routes>
    </BrowserRouter>
    <Toaster/>
    </div>

    </>
  )
}

export default App
