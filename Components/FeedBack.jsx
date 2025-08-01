
import React from 'react'

export default function FeedBack() {









    return (
        <>
            <section className='bg-colorPrimary dark:bg-bgheroDark py-10'>
                <div className="container text-center py-5 shadow-2xl  rounded-4xl ">
                    <div>
                        <h1 className='font-fontOfHeadings max-sm:m-auto max-sm:w-[90%] dark:text-white text-pharagraph'>Your opinion <span className='text-bgAll dark:text-colorInDark'>matters to us!</span></h1>
                    </div>
                    <div className=' w-[90%]  md:w-1/2 m-auto group flex flex-col items-center justify-center mt-5'>
                        <label className='transition-all group-focus-within:-translate-y-1 translate-y-2 me-auto text-pharagraph dark:text-white' htmlFor="name">Name </label>
                        <input className= "text-pharagraph me-auto w-full border-b-1 focus:outline-none" type="text"   />
                    </div>
                    <div className=' w-[90%]  md:w-1/2 m-auto group flex flex-col items-center justify-center mt-5'>
                        <label className='transition-all group-focus-within:-translate-y-1 translate-y-2 me-auto text-pharagraph dark:text-white' htmlFor="name">Email </label>
                        <input className= "text-pharagraph me-auto w-full border-b-1 focus:outline-none" type="text"   />
                    </div>
                    <div className=' w-[90%]  md:w-1/2 m-auto group flex flex-col items-center justify-center mt-5'>
                        <label className='transition-all group-focus-within:-translate-y-1 translate-y-2 me-auto text-pharagraph dark:text-white' htmlFor="name">Subject </label>
                        <input className= "text-pharagraph me-auto w-full border-b-1 focus:outline-none" type="text"   />
                    </div>
                    <div className=' w-[90%]  md:w-1/2 m-auto group flex flex-col items-center justify-center mt-5'>
                        <label className='transition-all group-focus-within:-translate-y-1 translate-y-2 me-auto text-pharagraph dark:text-white' htmlFor="name">Message </label>
                        <input className= "text-pharagraph me-auto w-full border-b-1 focus:outline-none" type="text"   />
                    </div>
                        <button className='bg-bgAll hover:bg-bgHover transition-all py-2 px-4 mt-6 rounded-4xl dark:bg-colorInDark dark:hover:bg-colorHoverDark'>Send Message</button>
                    
                  
                </div>
            </section>
        </>
    )
}
