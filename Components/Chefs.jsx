import React from 'react'
import chef1 from '../src/assets/chefs-1.jpg'
import chef2 from '../src/assets/chefs-2.jpg'
import chef3 from '../src/assets/chefs-3.jpg'

export default function Chefs() {
  return (
    <>             
      <section className='bg-bgSections dark:bg-bgheroDark py-14'>
        <div className="container p-5 text-center ">
          <p className='text-pharagraph'>CHEFS</p>
          <h1 className='font-fontOfHeadings dark:text-white text-pharagraph'>Our <span className='text-bgAll dark:text-colorInDark'>Proffesional</span> Chefs</h1>
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4  mt-10'>
            <div className=' dark:bg-cardsInDark text text-center bg-bgSections shadow-2xl group hover:scale-105 ease-in-out transition-all duration-500  '>
              <div className='relative'>
                <img className=' w-full' src={chef1} alt="chef1" />

                <div className='bg-[#E6E0D9] absolute right-5 top-5  flex-col justify-center items-center space-y-3 w-8 h-32 text-[#C1B3A8] cursor-pointer flex opacity-0 group-hover:opacity-100 transition-all duration-200 delay-500'>
                  <i className=" hover:text-black fa-brands fa-twitter" />
                  <i className=" hover:text-black fa-brands fa-facebook-f" />
                  <i className=" hover:text-black fa-brands fa-linkedin-in" />
                  <i className=" hover:text-black fa-brands fa-instagram" />
                </div>


                <svg className=" dark:hidden w-full absolute -bottom-5" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <path d="M0.00,49.98 C150.00,150.00 349.61,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'white' }} />
                </svg>
              </div>
              <div className='p-4'>
                <h2 className=' dark:text-white font-bold '>Walter White</h2>
                <p className=' text-pharagraph' >Master Chef</p>
                <p className='  text-pharagraph'>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
              </div>
            </div>
            <div className=' dark:bg-cardsInDark text-center group  bg-bgSections shadow-2xl hover:scale-105 ease-in-out transition-all duration-500 '>
              <div className='relative'>
                <img className='w-full' src={chef2} alt="chef1" />
                <div className='bg-[#E6E0D9] absolute right-5 top-5  flex-col justify-center items-center space-y-3 w-8 h-32 text-[#C1B3A8] cursor-pointer flex opacity-0 group-hover:opacity-100 transition-all duration-200 delay-500'>
                  <i className=" hover:text-black fa-brands fa-twitter" />
                  <i className=" hover:text-black fa-brands fa-facebook-f" />
                  <i className=" hover:text-black fa-brands fa-linkedin-in" />
                  <i className=" hover:text-black fa-brands fa-instagram" />
                </div>
                <svg className=" dark:hidden  w-full absolute -bottom-5" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <path d="M0.00,49.98 C150.00,150.00 349.61,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'white' }} />
                </svg>
              </div>
              <div className='p-4'>
                <h2 className='font-bold dark:text-white '>Walter White</h2>
                <p className=' text-pharagraph' >Master Chef</p>
                <p className='text-pharagraph'>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
              </div>
            </div>
            <div className='text-center group dark:bg-cardsInDark bg-bgSections shadow-2xl hover:scale-105 ease-in-out transition-all duration-500'>
              <div className='relative'>
                <img className='w-full' src={chef3} alt="chef1" />
                <div className='bg-[#E6E0D9] absolute right-5 top-5  flex-col justify-center items-center space-y-3 w-8 h-32 text-[#C1B3A8] cursor-pointer flex opacity-0 group-hover:opacity-100 transition-all duration-200 delay-500'>
                  <i className="  hover:text-black fa-brands fa-twitter" />
                  <i className=" hover:text-black fa-brands fa-facebook-f" />
                  <i className=" hover:text-black fa-brands fa-linkedin-in" />
                  <i className=" hover:text-black fa-brands fa-instagram" />
                </div>
                <svg className="dark:hidden w-full absolute -bottom-5" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <path d="M0.00,49.98 C150.00,150.00 349.61,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'white' }} />
                </svg>
              </div>
              <div className='p-4'>
                <h2 className='font-bold dark:text-white'>Walter White</h2>
                <p className=' text-pharagraph' >Master Chef</p>
                <p className='text-pharagraph'>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}