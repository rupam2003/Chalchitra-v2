import React from 'react'
import { getServerSession } from 'next-auth';
import Card from '../Components/Card';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getSingleMovies, getSingleTv } from '../utils/request';
const page = async () => {
    
  const session = await getServerSession(authOptions)
  const  email = session.user.email
  const likedMovies = []
  const likedTv = []
    const data = await fetch("https://chalchitra-v2.vercel.app/api/getFavs" , {
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
      
        email
        
      }),
    })
    const {likes,tv} = await data.json()
    for(const item of likes)
    {  
      likedMovies.push(await getSingleMovies(item))
    }
    for(const item of tv)
    {  
      likedTv.push(await getSingleTv(item))
    }
    
    
  return (
    
    <div>
    <h1 className='font-semibold text-2xl text-center my-6'>Favourite Movies</h1>
    <div className='mb-10 flex flex-wrap justify-center gap-y-6 mx-2 '>
    {
      likedMovies.map((movie)=>{
        return <Card key={movie.id} type={"movies"} movie={movie}/>
      })
    }

    
    
    </div>
    <h1 className='font-semibold text-2xl text-center my-6'>Favourite TV Shows</h1>
    <div className='mb-10 flex flex-wrap justify-center gap-y-6 mx-2 '>
    {
      likedTv.map((movie)=>{
        return <Card key={movie.id} type={"tv"} movie={movie}/>
      })
    }

    
    
    </div>
    
    
    
  
     
    </div>
  )
}

export default page
