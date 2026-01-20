import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
            <nav className="px-4 lg:px-8 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-10 object-contain"
                            alt="Logo"
                        />
                    </Link>

                    {/* Right Buttons */}
                    <div className="flex items-center lg:order-2 gap-2">
                        <Link
                            to="#"
                            className="text-gray-700 hover:text-orange-600 font-medium text-sm px-4 py-2 rounded-lg transition"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 transition shadow-md"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div
                        className="hidden lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-row items-center gap-8 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `relative transition duration-200 ${
                                            isActive
                                                ? 'text-orange-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-orange-600'
                                                : 'text-gray-700 hover:text-orange-600'
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `relative transition duration-200 ${
                                            isActive
                                                ? 'text-orange-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-orange-600'
                                                : 'text-gray-700 hover:text-orange-600'
                                        }`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `relative transition duration-200 ${
                                            isActive
                                                ? 'text-orange-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-orange-600'
                                                : 'text-gray-700 hover:text-orange-600'
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Github"
                                    className={({ isActive }) =>
                                        `relative transition duration-200 ${
                                            isActive
                                                ? 'text-orange-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-orange-600'
                                                : 'text-gray-700 hover:text-orange-600'
                                        }`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header
