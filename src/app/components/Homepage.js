"use client"
import React, { useEffect, useState } from 'react'
import { initFlowbite } from "flowbite";

export default function Homepage() {
    const [values, setvalues] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch('https://majestic-renewal-231ed71455.strapiapp.com/api/restaurants', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {setvalues(data);setloading(false);});

        initFlowbite();

    
    }, []);
    return ( 
        <div>
            {
                !loading && <div className='w-[100vw] h-[100vh] bg-cover p-4 px-8 bg-[url("https://img.freepik.com/free-photo/top-view-delicious-pasta-table_23-2150857954.jpg?t=st=1715759189~exp=1715762789~hmac=7bcb1dd45ac97ac7ad071cdac504e935f05fdf2c591c912aa9cec959a76951a0&w=1380")]'>
                <nav className="bg-white border-gray-200 rounded-lg dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                        <a
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Free-Image.png"
                                className="h-14 w-14"
                                alt="Flowbite Logo"
                            />
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="text-white bg-[#E25435] hover:bg-[#E25435] focus:ring-4 focus:outline-none focus:ring-[#E2435] font-medium rounded-lg text-sm px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Reservation
                            </button>
                            <button
                                data-collapse-toggle="navbar-cta"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-cta"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-cta"
                        >
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-700 md:dark:text-orange-500"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className='flex justify-end h-[80%] items-center'>
                    <div className='w-[50%]'>
                        <h1 className='text-7xl intro-font font-bold'>Welcome to <span className='text-[#E25435]'>{values['data'][0]['attributes']['Name']} Restaurant</span> </h1>
                        <p className='mt-2 description-font text-lg'>{values['data'][0]['attributes']['Description'][0]['children'][0]['text']}</p>
                        <button
                            type="button"
                            className="text-white bg-[#E25435] hover:bg-[#E25435] focus:ring-4 mt-8 focus:outline-none focus:ring-[#E2435] font-medium rounded-lg text-sm px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Reservation
                        </button>
                        <button
                            type="button"
                            className="text-white bg-transparent hover:bg-[#E25435] focus:ring-4 mt-8 focus:outline-none focus:ring-[#E2435] font-medium rounded-lg text-sm px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Open Menu
                        </button>
                    </div>
                </div>
            </div>
            }

        </div>
    )
}
