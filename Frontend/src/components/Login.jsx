import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios"
import {toast} from "react-hot-toast"

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =async (data) =>{
    const userinfo= {
        email:data.email,
        password:data.password
    }
    await axios.post("http://localhost:4001/user/login",userinfo)
    .then((res)=>{
        console.log(res.data)
        if(res.data){
            toast.success("Login Successful!")
            document.getElementById('my_modal_3').close()
            setTimeout(()=>{
                window.location.reload()
                localStorage.setItem("Users",JSON.stringify(res.data.User))
            },1000)
        }
    }).catch((err)=>{
        if(err.response){
            console.log(err)
            // alert("Error:"+err.response.data.message)
            toast.error("Error: "+err.response.data.message)
            setTimeout(()=>{},2000)
        }
    })
  }
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_3').close()}>✕</Link>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-3">
                                <span className="label-text text-base">Email</span>
                            </div>
                            <input {...register("email", { required: true })} type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            <br/>
                            <div className="label mt-3">
                                <span className="label-text text-base">Password</span>
                            </div>
                            <input {...register("password", { required: true })} type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            <br/>
                        </label>
                    </div>
                    <div className='flex justify-between mt-4 mx-2'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Login</button>
                        <p className='mt-2'>Not registered? <span className='underline text-blue-500 cursor-pointer'>
                            <Link to="/signup">
                            Signup
                            </Link>
                            </span></p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}
