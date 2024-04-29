"use client"
import React from 'react'
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const LikeButton = (props) => {
    
    const router = useRouter()
    const [item, setitem] = useState(props.item)
    const [email, setemail] = useState(props.email)
    const [like, setlike] = useState(props.isLiked)
    
    const handleLike = async () =>{
        
        const data = await fetch(`/api/like/${props.type}`, {
            method:"POST",
            headers:{
              "Content-Type" : "application/json",
            },
            body:JSON.stringify({
            
              email,
              item
              
              
            }),
          })
          console.log(data);
          setlike(true)
        router.refresh()
          
    }

    const handleRemoveLike = async () =>{
        
      const data = await fetch(`/api/removeLike/${props.type}`, {
          method:"POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body:JSON.stringify({
          
            email,
            item
            
            
          }),
        })
        console.log(data);
        setlike(false)
        router.refresh()
        
  }

  return (
    <div className='ml-3 flex justify-center items-center rounded-full w-9 h-9 bg-white'>
        {
        like
        ?  <button onClick={handleRemoveLike} className='   mx-2'>
          <FcRegBookmark className='text-xl text-green-800'/>
          </button>
      :<button onClick={handleLike} className='mx-2'>
      <FcBookmark className='text-xl text-green-800'/>
      </button>
        }
        
    </div>
  )
}

export default LikeButton
