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
          <Link href={"/favs"}>fav</Link>
          <div>
            {
              inputState == "hidden"
              
              ?<button className='mr-3 ' onClick={handleClick} ><FaMagnifyingGlass className=' text-xl'/></button>
              :<button className='mr-3' onClick={handleClick} ><IoClose className='relative -bottom-0.5 text-2xl'/></button>
            }
            <button className='mr-2' onClick={signOut}><MdLogout className='relative -bottom-0.5 text-2xl' /></button>
            
          </div>
          

          
        </section>
        <form className={`${inputState} py-2 absolute left-0 right-0 bg-white z-10`} onSubmit={handleSubmit}> 
            <input id='input' autoComplete='off' className=' pl-3  w-full text-md  text-black outline-none' placeholder='Search any movie...'/>
          </form>
        
        

    </header>
  )
}

export default Header