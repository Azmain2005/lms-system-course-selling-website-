import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import logo from '../assets/logo.png';


function Navbar() {
  const [menu , setMenu] = useState(false);

  const toggle = () =>{
    setMenu(!menu)
  }
  return (
    <>
    <div className='p-2'>
    <div className='container flex justify-between items-center'>
    <a href="/"><img src={logo} className='w-32'  alt="Logo" /></a>
    
    <ul className='items-center hidden lg:flex'>
  <li className='mx-4 relative cursor-pointer group'>
    <span className='absolute left-0 right-0 top-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><a href="/">Home</a></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><a href="#admission">Courses</a></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'>news</span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><a href="#gallery">gallery</a></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><a href="/AboutUs">About-us</a></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><a href="/offlineForm">apply offline</a></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
</ul>

      <div className='flex'>
      <IoCall className='text-red-600 m-2 hidden sm:block' size={25}/>
      <button className=' hidden lg:block p-2 px-6 bg-red-500 rounded-md text-white font-bold'><a href="/login">Login</a></button>
      </div>
      <div className='flex'>
        <IoCall className='text-red-600 lg:hidden md:hidden mr-2' size={25}/>
        <GiHamburgerMenu className='block lg:hidden' size={23} onClick={toggle} />
      </div>

   
    </div>
 </div>


 {menu && 
 <div className='block lg:hidden fixed inset-0  bg-black bg-opacity-50 z-40' onClick={toggle}/>
  }
 <aside className={`block lg:hidden fixed top-0 h-full w-64 bg-white text-black transition-transform transform z-50 ${
  menu ? " translate-x-0" : "-translate-x-full"
  }`}> 



<IoMdClose className=' absolute top-5 text-2xl right-4 text-black' size={23} onClick={toggle}/>
 
<div className='p-4'>
<img src={logo} className='w-32'  alt="Logo" />

</div>
     <ul>
        <li className='mx-4 font-bold cursor-pointer mb-2 '><a href="/">Home</a></li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'><a href="#admission">Courses</a></li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'>news</li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'><a href="#gallery">gallery</a></li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'><a href="/AboutUs">About-us</a></li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'><a href="/offlineForm">apply offline</a></li>
      </ul>

      <button className='w-[80%] bg-red-500 p-2 px-4 rounded-md text-white font-bold absolute bottom-[10px] mx-6'>Login</button>
 </aside>
 </>
  )
}

export default Navbar