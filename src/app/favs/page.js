import React from 'react'
import { getServerSession } from 'next-auth';
import Card from '../Components/Card';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getSingleMovies, getSingleTv } from '../utils/request';
import Slider from '../Components/Slider';
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
        <Slider type="movies" sliderId={"Watchlisted Movies"} title = {"Watchlisted Movies"} movies = {likedMovies}/>
        <Slider type="tv" sliderId={"Watchlisted Shows"} title = {"Watchlisted Shows"} movies = {likedTv}/>
    </div>
  )
}

export default page
