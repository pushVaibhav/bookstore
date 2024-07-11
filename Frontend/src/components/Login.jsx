import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
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
