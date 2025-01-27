import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default function Course() {
    const [book,setbook]=useState([])
    useEffect(()=>{
        const getBook = async ()=>{
            try {
                const res= await axios.get("http://localhost:4001/book")
                console.log(res.data)
                setbook(res.data)
            } catch (error) {
                console.log("Error:",error)
            }
        }
        getBook();
    },[])
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className='mt-36 justify-center items-center text-center'>
                <h1 className='text-2xl md:text-4xl font-semibold'>We're delighted to have you <span className='text-pink-700'>Here!</span></h1>
                <p className='mt-5 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nostrum inventore quo earum adipisci libero labore dolorem velit consectetur asperiores delectus, consequuntur voluptates aliquam exercitationem possimus incidunt atque nobis vero eveniet veritatis, debitis suscipit ducimus ut tempore. In, ex! Praesentium.</p>
                <Link to="/">
                <button className='my-4 bg-pink-600 text-white px-3 py-1 rounded-lg hover:bg-pink-800' >Back</button>
                </Link>
                
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 w-auto'>
                {
                book.map((item)=>(
                    <Card item={item} key={item.id}/> 
                ))
                }
            </div>
        </div>
    )
}
