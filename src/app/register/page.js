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
            seterror("all fields required")
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
    <div className='h-screen grid place-items-center'>
        <form onSubmit={handleSubmit} className='text-black flex flex-col'>
            <input onChange={(e)=>{setname(e.target.value)}} className='p-1.5 font-semibold rounded-md w-[400px] my-2 bg-gray-300' type='text' placeholder='name' value={name}/>
            <input onChange={(e)=>{setemail(e.target.value)}} className='p-1.5 font-semibold rounded-md w-[400px] my-2 bg-gray-300' type='text' placeholder='email' value={email} />
            <input onChange={(e)=>{setpasword(e.target.value)}} className='p-1.5 font-semibold rounded-md w-[400px] my-2 bg-gray-300' type='text' placeholder='password' value={password}/>
            <button  className='bg-green-500 p-1.5 font-bold rounded-md w-[400px] my-2' >REGISTER</button>
        </form>
       <h1 className=' bg-red-600'>{error}</h1>
       <Link href={"/login"}>login</Link>

    </div>
  )
}

export default Page