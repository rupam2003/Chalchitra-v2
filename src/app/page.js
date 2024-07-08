
import React ,{ Suspense } from 'react'
import { getTopMovies,getTopTv,getTrendingMovies,getTrendingTv } from './utils/request'
import Card from './Components/Card'
import Slider from './Components/Slider'
import Header from './Components/Header'
import HeroBanner from './Components/HeroBanner'
import Loading from './Components/Loading'

export const revalidate = 3600
 
async function page() {


  
  const trendingmovies = await getTrendingMovies() 
  const topMovies = await getTopMovies();
  const trendingTv = await getTrendingTv() 
  const topTv = await getTopTv()
  return (  
    <main className='main-page '>
      
      <Suspense fallback={<Loading/>} >
      <HeroBanner/>
      <div className=' mb-8'>
      <Slider type="movies" sliderId={"popular"} title = {"Popular Movies"} movies = {trendingmovies}/>
      <Slider type="movies" sliderId={"top"} title = {"Top-Rated Movies"} movies = {topMovies}/>
      <Slider type="tv" sliderId={"popularTv"} title = {"Popular Series"} movies = {trendingTv}/>
      <Slider type="tv" sliderId={"topTv"} title = {"Top-Rated Series"} movies = {topTv}/>

      </div>
      </Suspense>
    </main>
    
    
  )
} 

export default page
