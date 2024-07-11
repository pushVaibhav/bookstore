import React from 'react'
import book from "../../public/Book.jpg";

export default function Banner() {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-14 ">
            <div className="w-full order-2 md:order-1 md:w-1/2 mt-5 md:mt-10">
                <div className="space-y-12">
                <h1 className="text-4xl font-bold ">Hello, Welcomes here to learn something <span className="text-pink-700">new everyday!!!</span></h1>
                <p className="my-6 text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem libero, pariatur ratione soluta corporis deserunt expedita quidem rerum consectetur laudantium impedit porro, tempora facere itaque.</p>
                <label className="border-2 rounded-md px-2 py-3 flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow outline-none" placeholder="Enter your email to login" />
                </label>
                </div>
                <button className="btn btn-active btn-secondary mt-4">Secondary</button>
            </div>
            <div className="w-full md:order-2 order-1 md:w-1/2 md:ml-4  ">
                <img className="" src={book} alt="" />
            </div>
        </div>
    )
}

// <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

//     <div className="flex justify-stretch py-5">
//         <div className="">
//             <div className="text-4xl font-bold py-5">Hello, welcomes here to learn something new everyday!!!</div>
//             <p className="my-6 text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi tenetur modi repudiandae animi amet voluptates, adipisci, et odit architecto cumque necessitatibus qui, alias totam veritatis impedit maiores sapiente ipsa placeat. Et.</p>
//             <label className="border-2 rounded-md px-2 py-3 flex items-center gap-2">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 16 16"
//                     fill="currentColor"
//                     className="h-4 w-4 opacity-70">
//                     <path
//                         d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                     <path
//                         d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                 </svg>
//                 <input type="text" className="grow outline-none" placeholder="Enter your email to login" />
//             </label>
//         </div>
//         <div className="mx-5">
//             <img className="w-auto " src="https://plus.unsplash.com/premium_photo-1696408291111-5cc2da374c93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         </div>
//     </div>
// </div>