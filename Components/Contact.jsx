
import React from 'react'

export default function Contact() {
    return (
        <>
            <section className='bg-bgSections dark:bg-bgInDark text-center py-10'>
                <div className="container">
                    <p className='text-pharagraph'>CONTACT</p>
                    <h1 className='font-fontOfHeadings dark:text-white text-pharagraph'>Need Help ? <span className='dark:text-colorInDark text-bgAll'>Contact Us</span></h1>
                    <div className=" py-4">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10348577.678063877!2d-0.1105214159537731!3d50.71050991095918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68fe05fadfaaa29f%3A0x793c9f0195b79ede!2smealify%20gmbh!5e0!3m2!1sen!2seg!4v1753860351260!5m2!1sen!2seg" width={1000} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>
                    </div>
                    <div className='flex flex-wrap items-center justify-between'>
                        <div className=' dark:bg-cardsInDark  w-full sm:w-full md:1/2 lg:w-1/2 bg-[#F5F5F5] p-3 h-20 mt-3'>
                            <div className='flex w-full items-center'>
                                <div className='p-2 rounded-4xl dark:bg-colorInDark  bg-bgAll mr-2 '>
                                    <i className="dark:text-black  text-2xl text-white fa-regular fa-map" />
                                </div>
                                <div className='text-start '>
                                    <h2 className='font-bold text-pharagraph'>Our Address</h2>
                                    <p className='dark:text-white text-pharagraph'>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>

                        </div>
                        <div className='  dark:bg-cardsInDark w-full sm:w-full md:1/2 lg:w-1/2 bg-[#F5F5F5] p-3 h-20 mt-3'>
                            <div className='flex w-full items-center'>
                                <div className='p-2 rounded-4xl dark:bg-colorInDark bg-bgAll mr-2 '>
                                    <i className="dark:text-black text-white fa-regular fa-envelope" />
                                </div>
                                <div className='text-start '>
                                    <h2 className='font-bold text-pharagraph'>Email Us</h2>
                                    <p className='dark:text-white text-pharagraph'>contact@example.com</p>
                                </div>

                            </div>

                        </div>
                        <div className='dark:bg-cardsInDark w-full sm:w-full md:1/2 lg:w-1/2 bg-[#F5F5F5] p-3 h-20 mt-3'>
                            <div className='flex w-full items-center'>
                                <div className='dark:bg-colorInDark p-2 rounded-4xl bg-bgAll mr-2 '>
                                    <i className="dark:text-black text-white fa-solid fa-phone" />
                                </div>
                                <div className='text-start '>
                                    <h2 className='font-bold text-pharagraph'>Call Us</h2>
                                    <p className='dark:text-white text-pharagraph'>+1 5589 55488 55</p>
                                </div>

                            </div>

                        </div>
                        <div className='dark:bg-cardsInDark w-full sm:w-full md:1/2 lg:w-1/2 bg-[#F5F5F5] p-3 h-20 mt-3'>
                            <div className='flex w-full items-center'>
                                <div className='dark:bg-colorInDark text-white p-2 rounded-4xl bg-bgAll mr-2 '>
                                    <i className="dark:text-black fa-solid fa-share-nodes" />
                                </div>
                                <div className='text-start '>
                                    <h2 className='font-bold text-pharagraph'>Opening Hours</h2>
                                    <p className='dark:text-white text-pharagraph'><span className='text-pharagraph  font-bold'>Mon-Sat:</span> 11AM - 23PM; <span className='text-pharagraph font-bold'>Sunday</span> : Closed</p>
                                </div>

                            </div>

                        </div>


                    </div>






                </div>
            </section>


        </>
    )
}
