import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ksushant0293')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)
    //     })
    // }, [])

    return (
        <div className=' m-4 bg-gray-500 text-white text-3xl p-4 flex flex-col items-center justify-center'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="git img" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await  fetch('https://api.github.com/users/ksushant0293')
    return response.json()
}