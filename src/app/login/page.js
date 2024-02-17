"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Page = () => {

    const router = useRouter()
    const [email, setemail] = useState('')
    const [password, setpasword] = useState('')
    const [error, seterror] = useState('')
    const [login, setlogin] = useState('LOGIN')

    
    const handleSubmit = async (e) =>{
      e.preventDefault()
      setlogin("PLEASE WAIT...")
      if(!email||!password)
      {
        seterror("All fields required")
        setlogin("LOGIN")
        return
      }
      try {
        const res = await signIn("credentials",{
          email,password,redirect:false
        })

        if(res.error){
          seterror("Invalid credentials")
          setlogin("LOGIN")
          return
        }
        
          router.refresh()
          router.replace("/")
      } catch (error) {
        console.log(error);
      }
      
    } 

  return (
    <div className='h-screen grid place-items-center'>
        
        
        <form onSubmit={handleSubmit} className='text-black flex flex-col'>
            <input onChange={(e)=>{setemail(e.target.value)}} className='p-1.5 font-semibold rounded-md w-[400px] my-2 bg-gray-300' type='text' placeholder='email' value={email} />
            <input onChange={(e)=>{setpasword(e.target.value)}} className='p-1.5 font-semibold rounded-md w-[400px] my-2 bg-gray-300' type='text' placeholder='password' value={password}/>
            <button  className='bg-green-500 p-1.5 font-bold rounded-md w-[400px] my-2' >{login}</button>
        
        <h1 className='mt-2 font-bold text-center bg-red-600'>{error}</h1>
        </form>
        <Link href={"/register"}>register</Link>
      
    </div>
  )
}

export default Page
