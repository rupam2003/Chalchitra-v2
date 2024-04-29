'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { FaMagnifyingGlass } from "react-icons/fa6";

import { IoClose } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";





const Header = () => {

 
  const [inputState, setinputState] = useState("hidden")

  const handleClick = (e) => {
    e.preventDefault()
    if(inputState=="hidden")
    {
      setinputState("block")
      return
    }
    setinputState("hidden")
    
  }
  
  const router = useRouter()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let input = document.getElementById('input').value
    setinputState("hidden")
    router.push(`/search/query=${input}`)
  }
  return (
    <header className='bg-black'>
        <section className=' flex py-2 items-center justify-between'>
        <Link href={'/'}  className='flex font-bold logo  ml-4 text-2xl'>
          <div className='w-[90px] h-[40px] relative'>
            <Image quality={100} src="/images.png" fill alt='logo'/>
          </div>
          </Link>
          
          <div className='flex'>
            {
              inputState == "hidden"
              
              ?<button onClick={handleClick} ><FaMagnifyingGlass className=' text-xl'/></button>
              :<button onClick={handleClick} ><IoClose className='relative  text-2xl'/></button>
            }
            <Link className='flex items-center mx-3' href={"/favs"}><FaRegBookmark className='text-xl' /></Link>
            <button className='mr-2' onClick={signOut}><MdLogout className='relative  text-2xl' /></button>
            
          </div>
          

          
        </section>
        <form className={`${inputState} py-2 absolute left-0 right-0 bg-white z-10`} onSubmit={handleSubmit}> 
            <input id='input' autoComplete='off' className=' pl-3  w-full text-md  text-black outline-none' placeholder='Search any movie...'/>
          </form>
        
        

    </header>
  )
}

export default Header
