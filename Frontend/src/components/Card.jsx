import React from 'react'

export default function Card({ item }) {
    return (
        <div className="my-5"> 
            <div className="card bg-base-100 w-auto mx-2 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            {/* <div className="card bg-base-100 w-auto mx-2 shadow-xl hover:scale-105 duration-200 dark:text-black"> */}
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-sm">{item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 hover:text-white">Buy now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
