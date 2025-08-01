
import React from 'react'
import meal1 from '../src/assets/meal-1.jpg'
import meal2 from '../src/assets/meal-2.jpg'
import meal3 from '../src/assets/meal-3.jpg'
import meal4 from '../src/assets/meal-4.jpg'
import meal5 from '../src/assets/meal-5.jpg'
import meal6 from '../src/assets/meal-6.jpg'
import meal7 from '../src/assets/meal-7.jpg'

export default function Gallary() {
    return (
        <>
            <section className='bg-colorPrimary dark:bg-bgheroDark py-5'>
                <div className="container text-center py-3">
                    <p className='text-pharagraph uppercase'>gallery</p>
                    <h1 className='font-fontOfHeadings text-pharagraph dark:text-white'>Check <span className='text-bgAll dark:text-colorInDark'>Our Gallery</span></h1>
                    <div className='columns columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-3'>
                        <div className='relative group'>
                            <img className='w-full border-4 border-white' src={meal1} alt="" />
                            <div className='bg-layout absolute  h-0 opacity-0  flex flex-col justify-center w-[96%] left-2 bottom-1  group-hover:h-11/12 group-hover:opacity-100 transition-all duration-300'>
                                <p className='text-white font-bold'>Pizza</p>
                                <p className='text-white'>Hawaiian pizza with ham and pineapple</p>
                            </div>
                        </div>
                        <div className='relative group'>
                            <img className='w-full mt-3   border-4 border-white' src={meal4} alt="" />
                            <div className='bg-layout absolute  h-0 opacity-0  flex flex-col justify-center w-[96%] left-2 bottom-1  group-hover:h-11/12 group-hover:opacity-100 transition-all duration-300'>
                                <p className='text-white font-bold'>Levitation pizza</p>
                                <p className='text-white'>Levitation pizza on black background.</p>
                            </div>
                        </div>
                        <div className='relative group'>
                            <img className='w-full  border-4 border-white' src={meal2} alt="" />
                            <div className='bg-layout absolute  h-0 opacity-0  flex flex-col justify-center w-[96%] left-2 bottom-1  group-hover:h-11/12 group-hover:opacity-100 transition-all duration-300'>
                                <p className='text-white font-bold'>Beef steaks</p>
                                <p className='text-white'>asty beef steaks flying above cast iron grate with fire flames.</p>
                            </div>
                        </div>
                        <div className='relative group'>
                            <img className='w-full mt-3  border-4 border-white' src={meal7} alt="" />
                            <div className='bg-layout absolute  h-0 opacity-0  flex flex-col justify-center w-[96%] left-2 bottom-1  group-hover:h-11/12 group-hover:opacity-100 transition-all duration-300'>
                                <p className='text-white font-bold'>Frittata</p>
                                <p className='text-white'>Frittata or potato pie in a ceramic plate</p>
                            </div>
                        </div>
                        <div className='relative group'>
                            <img className='w-full  border-4 border-white' src={meal3} alt="" />
                            <div className='bg-layout absolute  h-0 opacity-0  flex flex-col justify-center w-[96%] left-2 bottom-1  group-hover:h-11/12 group-hover:opacity-100 transition-all duration-300'>
                                <p className='text-white font-bold'>Burger</p>
                                <p className='text-white'>grass fed bison hamburger with chips & beer</p>
                            </div>
                        </div>
                        <div className='relative group'>
                            <img className='w-full mt-3  border-4 border-white' src={meal5} alt="" />
                            <div className='bg-layout absolute  h-0 opacity-0  flex flex-col justify-center w-[96%] left-2 bottom-1  group-hover:h-11/12 group-hover:opacity-100 transition-all duration-300'>
                                <p className='text-white font-bold'>Crispy Fried Chicken</p>
                                <p className='text-white'>Golden brown chicken legs with a crunchy coating and juicy meat</p>
                            </div>
                        </div>
                        <div className='relative group'>
                            <img className='w-full mt-3  border-4 border-white' src={meal6} alt="" />
                            <div className='bg-layout absolute  h-0 opacity-0  flex flex-col justify-center w-[96%] left-2 bottom-1  group-hover:h-11/12 group-hover:opacity-100 transition-all duration-300'>
                                <p className='text-white font-bold'>Lyulya kebab</p>
                                <p className='text-white'>Tender and juicy skewers of ground lamb or beef, flavored with aromatic spices and herbs</p>
                            </div>
                        </div>







                    </div>



                </div>
            </section>
        </>
    )
}
