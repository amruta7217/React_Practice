import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch('https://api.github.com/users/amruta7217')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // },[])

  return (
    <>
    <div className='m-4 text-center bg-gray-600 p-4 text-3xl text-white'> 
      Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/amruta7217')
    return response.json()
}
