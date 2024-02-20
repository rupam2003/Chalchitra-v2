'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Page = () => {

    const router = useRouter()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpasword] = useState('')
    const [error, seterror] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        if(!name||!email||!password)
          {
            seterror("All fields required")
            return
          }
          const data = await fetch("api/userExists" , {
            method:"POST",
            headers:{
              "Content-Type" : "application/json",
            },
            body:JSON.stringify({
            
              email
              
            }),
          })
          const {user} = await data.json()
          if(user){
            seterror("User already exists")
            return
          }         
          
        const res = await fetch("api/register" , {
          method:"POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body:JSON.stringify({
            name,
            email,
            password
          }),
        })
        console.log(res);
        seterror("")
        router.push("/login")
       

    }
  return (
   <div className='flex flex-col items-center'>
        <form onSubmit={handleSubmit} className='mt-[25vh] text-black flex flex-col'>
            <input onChange={(e)=>{setname(e.target.value)}} className='py-1.5 px-3 outline-none font-semibold rounded-xl w-[300px] my-2 bg-opacity-25 text-white bg-gray-300' type='text' placeholder='Name' value={name}/>
            <input onChange={(e)=>{setemail(e.target.value)}} className='py-1.5 px-3 outline-none font-semibold rounded-xl w-[300px] my-2 bg-opacity-25 text-white bg-gray-300' type='text' placeholder='Email' value={email} />
            <input onChange={(e)=>{setpasword(e.target.value)}} className='py-1.5 px-3 outline-none font-semibold rounded-xl w-[300px] my-2 bg-opacity-25 text-white bg-gray-300' type='password' placeholder='Password' value={password}/>
            <button  className='bg-green-500 p-1.5 font-bold rounded-lg  my-2' >REGISTER</button>
        </form>
       <h1>Already have an account?
       <Link className=' text-green-600' href={"/login"}> Login</Link>
       </h1>
       
       <h1 className='px-2 mt-2 rounded-lg bg-red-600'>{error}</h1>

    </div>
  )
}

export default Page
