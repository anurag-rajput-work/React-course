import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            {/* HERO SECTION */}
            <aside className="relative overflow-hidden rounded-3xl sm:mx-16 mx-2 sm:py-16  from-orange-50 via-white to-orange-100 shadow-xl">

                <div className="relative z-10 px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-6 text-center sm:text-right sm:ml-auto">

                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-3xl font-medium text-gray-600 mt-2">
                                Lorem Ipsum
                            </span>
                        </h2>

                        <Link
                            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="22"
                                height="22"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download now
                        </Link>
                    </div>
                </div>

                {/* FLOATING IMAGE */}
                <div className="absolute inset-0 flex justify-center items-end sm:items-center overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1400"
                        alt="Hero"
                        className="w-full h-full object-cover object-center opacity-90"
                    />
                </div>

            </aside>

            {/* SECOND IMAGE */}
            <div className="grid place-items-center sm:mt-20 mt-12">
                <img
                    className="sm:w-96 w-48 drop-shadow-xl hover:scale-105 transition-transform"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
                    alt="image2"
                />
            </div>

            {/* HEADING */}
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-semibold text-gray-800">
                Lorem Ipsum Yojo
            </h1>
        </div>
    );
}

export default Home
