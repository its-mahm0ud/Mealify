
import React, { useEffect, useState, } from 'react';
import { NavLink } from 'react-router-dom';
import FeedBack from './FeedBack';
import Contact from './Contact';
import Gallary from './Gallary';
import Chefs from './Chefs';

export default function Navbar() {
    const toggleMenu = () => setIsOpen(!isOpen);
    const [isScroll, setIsScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (!("theme" in localStorage)) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark")
                setTheme("dark")
            } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
                setTheme("light")
            }
        }
        if (("theme" in localStorage)) {
            if (localStorage.getItem("theme") == "dark") {
                document.documentElement.classList.add("dark")
                setTheme("dark")
            } else if (localStorage.getItem("theme") == "light") {
                setTheme("light")

            }
        }
    }, [])
    function toggleMood() {
        document.documentElement.classList.toggle("dark");
        if (theme == "dark") {
            localStorage.setItem("theme", "light")
            setTheme("light")
        } else if (theme == "light") {
            localStorage.setItem("theme", "dark")
            setTheme("dark")
        }


    }
    window.addEventListener("scroll", function () {
        if (scrollY > 0) {
            setIsScroll(true)

        } else {
            setIsScroll(false)

        }
    })

    return (
        <>


            <nav className={`transition-all z-50 bg-bgSections border-gray-200 dark:bg-bgInDark ${isScroll ? "" : "py-4"} sticky top-0 start-0 end-0 `}>
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <h1 className=' dark:text-bgSections text-3xl font-bold text-headOfSection ms-8'>
                        Mealify<span className='text-bgAll dark:text-colorInDark '>.</span>
                    </h1>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button className='mr-4' onClick={toggleMood}> {theme === "dark" ? (

                            <i className="fa-solid fa-sun text-yellow-400" />
                        ) : (
                            <i className="fa-solid fa-moon text-gray-600" />
                        )}</button>
                        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
                            <i className="text-bgheroDark max-sm:mr-3 text-2xl dark:text-white  fa-solid fa-bars" />
                        </button>
                    </div>
                    <div className={` ${isOpen ? "block text-center my-1" : "hidden"}  items-center justify-between  w-full md:flex md:w-auto md:order-1`}>
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">

                            <li>
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        `group  flex flex-col items-center
                                       ${isActive ? "text-pharagraph dark:text-white dark:hover:text-white" : "text-ancor hover:text-headOfSection dark:hover:text-white"}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className='relative'>Home
                                                <span
                                                    className={`absolute left-0  bottom-0 h-0.5 transition-all ease-in-out
                                             ${isActive ? "w-full bg-bgAll dark:bg-colorInDark" : "w-0 bg-bgAll group-hover:w-full dark:group-hover:bg-colorInDark"}`}
                                                ></span>
                                            </span>
                                        </>
                                    )}
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to="/chefs"
                                    className={({ isActive }) =>
                                        `group  flex flex-col items-center
                                       ${isActive ? "text-pharagraph dark:text-white dark:hover:text-white" : "text-ancor hover:text-headOfSection dark:hover:text-white"}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className='relative'>Chefs
                                                <span
                                                    className={`absolute left-0  bottom-0 h-0.5 transition-all ease-in-out
                                             ${isActive ? "w-full bg-bgAll dark:bg-colorInDark" : "w-0 bg-bgAll group-hover:w-full dark:group-hover:bg-colorInDark"}`}
                                                ></span>
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/gallary"
                                    className={({ isActive }) =>
                                        `group  flex flex-col items-center
                                       ${isActive ? "text-pharagraph dark:text-white dark:hover:text-white" : "text-ancor hover:text-headOfSection dark:hover:text-white"}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className='relative'>Gallary
                                                <span
                                                    className={`absolute left-0  bottom-0 h-0.5 transition-all ease-in-out
                                             ${isActive ? "w-full bg-bgAll dark:bg-colorInDark" : "w-0 bg-bgAll group-hover:w-full dark:group-hover:bg-colorInDark"}`}
                                                ></span>
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `group  flex flex-col items-center
                                       ${isActive ? "text-pharagraph dark:text-white dark:hover:text-white" : "text-ancor hover:text-headOfSection dark:hover:text-white"}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className='relative'>Contact
                                                <span
                                                    className={`absolute left-0  bottom-0 h-0.5 transition-all ease-in-out
                                             ${isActive ? "w-full bg-bgAll dark:bg-colorInDark" : "w-0 bg-bgAll group-hover:w-full dark:group-hover:bg-colorInDark"}`}
                                                ></span>
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/feedBack"
                                    className={({ isActive }) =>
                                        `group  flex flex-col items-center
                                       ${isActive ? "text-pharagraph dark:text-white dark:hover:text-white" : "text-ancor hover:text-headOfSection dark:hover:text-white"}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className='relative'>FeedBack
                                                <span
                                                    className={`absolute left-0  bottom-0 h-0.5 transition-all ease-in-out
                                             ${isActive ? "w-full bg-bgAll dark:bg-colorInDark" : "w-0 bg-bgAll group-hover:w-full dark:group-hover:bg-colorInDark"}`}
                                                ></span>
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div >
            </nav >






        </>
    )

}