"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Page = () => {

    const {status} = useSession()
    const router = useRouter()
    const [email, setemail] = useState('')
    const [password, setpasword] = useState('')
    const [error, seterror] = useState('')
    const [login, setlogin] = useState('LOGIN')

    useEffect(() => {
      if(status === 'authenticated')
        router.push("/")
    
      
    }, [status])
    
    
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
        
      } catch (error) {
        console.log(error);
      }
      
    } 

  return (
   <div className=' flex flex-col items-center'>
        
        
        <form onSubmit={handleSubmit} className='mt-[25vh]   flex flex-col items-center'>
            <input onChange={(e)=>{setemail(e.target.value)}} className='py-1.5 px-3 outline-none font-semibold rounded-xl w-[300px] my-2 bg-opacity-25 text-white bg-gray-300' type='text' placeholder='Email' value={email} />
            <input onChange={(e)=>{setpasword(e.target.value)}} className='py-1.5 px-3 outline-none font-semibold rounded-xl w-[300px] my-2 bg-opacity-25 text-white bg-gray-300' type='text' placeholder='Password' value={password}/>
            <button  className= 'text-black bg-green-500 p-1.5 font-bold rounded-md w-[300px]  my-2' >{login}</button>
        

        </form>
        <h1>Don't have an account? <Link className=' text-green-600' href={"/register"}> Register</Link></h1>

        <h1 className='mt-2 px-2 rounded-lg font-semibold text-center bg-red-600'>{error}</h1>

      
    </div>
  )
}

export default Page
