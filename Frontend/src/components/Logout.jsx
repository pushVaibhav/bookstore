import React from 'react'
import { useAuth } from '../Context/Auth'
import toast from 'react-hot-toast'

export default function Logout() {
    const [authUser,setauthUser] = useAuth()
    const handlelogout = ()=>{
        try {
            setauthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully!")
            setTimeout(()=>{
                window.location.reload()
            },3000)
        } catch (error) {
            console.log(error)
            toast.error("Error: "+error)
            setTimeout(()=>{},2000)
        }
    }

  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handlelogout}>Logout</button>
    </div>
)
}