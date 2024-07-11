import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";


export default function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Signup</h3>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-3">
                                <span className="label-text text-base">Name</span>
                            </div>
                            <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"/>
                            {errors.name && <span>This field is required</span>}
                            <div className="label mt-3">
                                <span className="label-text text-base">Email</span>
                            </div>
                            <input {...register("email", { required: true })} type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <span>This field is required</span>}
                            <div className="label mt-3">
                                <span className="label-text text-base">Password</span>
                            </div>
                            <input {...register("password", { required: true })} type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <span>This field is required</span>}
                        </label>
                    </div>
                    <div className='flex justify-between mt-4 mx-2'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Signup</button>
                        <p className='mt-2'>Already registered? <span onClick={() => document.getElementById('my_modal_3').showModal()} className='underline text-blue-500 cursor-pointer'>Login</span></p>
                        <Login />
                    </div>
                </form>
            </div>
        </div>
    )
}