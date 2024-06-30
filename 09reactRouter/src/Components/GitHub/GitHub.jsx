import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    //Best method to fetch API (using loader)
    const data=useLoaderData()

    //Basic way to fetch API (slow)
    /* 
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/kartikeyasm')
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                setData(data)
            })
    },[]) 
    */
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            GitHub Followers: {data.followers}
        </div>
        <img width={300} src={data.avatar_url} alt="" />
    </>
  )
}

export default GitHub


export const GitHubLoader= async ()=>{
    const response= await fetch ('https://api.github.com/users/kartikeyasm')
    return response.json()
}