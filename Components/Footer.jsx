
import React from 'react'
import logofooter from '../src/assets/favicon.png'

export default function Footer() {
    return (
        <>
            <footer className={`  bg-[url("../src/assets/FooterImg.jpg")] bg-cover  bg-no-repeat text-white h-1/2 py-5 `}>
                <div className='bg-layout '>
                    <div className="container py-2">
                        <div className='flex flex-wrap'>
                            <div className='w-4/4 sm:w-4/4 md:w-1/4 lg:w-1/4 px-2'>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex  items-center me-auto justify-start '>
                                        <img className='size-7 mr-1' src={logofooter} alt="" />
                                        <h2 className='font-bold text-2xl'>Mealify<span className='dark:text-colorInDark'>.</span></h2>
                                    </div>
                                    <p className='line-clamp-3  me-auto'>Mealify is a restaurant landing page that offers a delicious dining experience to its customers.</p>

                                    <h2 className='font-bold relative mt-3'>Social Media
                                        <span className='absolute bg-ancor h-[1px] w-[250px] max-sm:w-[360px] -bottom-2 right-1/2 translate-x-1/2'></span>
                                    </h2>
                                    <div className='flex text-[20px] pt-5'>
                                        <i className="cursor-pointer px-8 max-sm:px-10   fa-brands fa-twitter" />
                                        <i className="cursor-pointer  px-8 max-sm:px-10 fa-brands fa-facebook-f" />
                                        <i className="cursor-pointer  px-8 max-sm:px-10 fa-brands fa-linkedin-in" />
                                        <i className="cursor-pointer  px-8 max-sm:px-10 fa-brands fa-instagram" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-4/4 sm:w-4/4 md:w-2/4 lg:w-2/4 px-2'> 
                                <div className='flex flex-col justify-center items-center '>
                                    <h2 className='font-bold my-2 me-auto max-sm:my-3 '>Subscribe our Newsletter</h2>
                                    <p>Don't miss out on our latest menu updates and exclusive offers - join our newsletter today and stay up-to-date with all things Mealify!</p>
                                    <div className='flex w-full items-center mt-3 max-sm:block'>
                                        <input type="text" placeholder="Enter Your Email Address" className='max-sm:w-full bg-colorPrimary focus:outline-none w-[70%] placeholder-pharagraph px-3 py-1 placeholder:text-[13px]' />
                                        <button className=' dark:bg-colorInDark dark:text-black dark:hover:bg-colorHoverDark max-sm:w-full max-sm:m-auto max-sm:mt-1 ml-2 px-3 py-1 text-white bg-bgAll hover:bg-bgHover transition-all'><i className="fa-regular fa-envelope" /> Subscribe</button>
                                    </div>
                                    <h2 className='me-auto font-bold mt-1 mb-1'>Quick Links</h2>
                                    <div className='flex  w-full'>
                                        <div className='flex flex-col'>
                                            <a className='hover:bg-bghoverancor hover:translate-x-2 py-1 transition-all ease-in-out duration-150 w-50 ' href=""><i className="fa-solid fa-angle-right" />Menu</a>
                                            <a className='hover:bg-bghoverancor hover:translate-x-2 py-1 transition-all ease-in-out duration-150 w-50' href=""><i className="fa-solid fa-angle-right" />About</a>
                                            <a className='hover:bg-bghoverancor hover:translate-x-2 py-1 transition-all ease-in-out duration-150 w-50' href=""><i className="fa-solid fa-angle-right" />Testimonial</a>
                                        </div>
                                        <div className='flex flex-col t me-auto transform translate-x-1'>
                                            <a className='hover:bg-bghoverancor hover:translate-x-2 py-1 transition-all ease-in-out duration-150 w-50' href=""><i className="fa-solid fa-angle-right" />Promo</a>
                                            <a className='hover:bg-bghoverancor hover:translate-x-2 py-1 transition-all ease-in-out duration-150 w-50' href=""><i className="fa-solid fa-angle-right" />Contact</a>
                                            <a className='hover:bg-bghoverancor hover:translate-x-2 py-1 transition-all ease-in-out duration-150 w-50' href=""><i className="fa-solid fa-angle-right" />Our Partners</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='w-4/4 sm:w-4/4 md:w-1/4 lg:w-1/4 px-2 mt-2'>
                                <h2 className='font-bold'>Get in Touch</h2>
                                <div className='flex mt-4 max-sm:px-3'>
                                    <i className=" dark:text-colorInDark text-bgAll mt-2 mr-1 fa-solid fa-location-dot"/>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                                <div className='flex mt-4 max-sm:px-3'>
                                    <i className=" dark:text-colorInDark text-bgAll mt-2 mr-1 fa-solid fa-envelope"/>
                                    <p>contact@example.com</p>
                                </div>
                                <div className='flex mt-4 max-sm:px-3'>
                                    <i className="dark:text-colorInDark  text-bgAll mt-2 mr-1 fa-solid fa-phone"/>
                                    <p>+1 5589 55488 55</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
