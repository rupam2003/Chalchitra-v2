import React from 'react'
import { getTopMovies } from '@/app/utils/request';
import { getServerSession } from 'next-auth';
import Card from '../Components/Card';
import { authOptions } from '../api/auth/[...nextauth]/route';
const page = async () => {
    
  const session = await getServerSession(authOptions)
  const  email = session.user.email
    
    const data = await fetch("https://chalchitra-v2.vercel.app/api/getFavs" , {
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
      
        email
        
      }),
    })
    const {likes} = await data.json()
    
  return (
    
    <div className=''>
    
    {
      likes.map((item)=>{
        return <h1 key={item}>{item}</h1>
      })
    }
     
    </div>
  )
}

export default page
