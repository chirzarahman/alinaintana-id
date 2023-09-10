"use client";
import Link from 'next/link';
import { useState } from 'react'
import Home from './sections/home';
import About from './sections/about';
import Products from './sections/products';
import Testimonials from './sections/testimonials';

export default function Index() {
  const [navbar, setNavbar] = useState(false)
  const menus = [
    { title: 'home', link: '#home' },
    { title: 'about', link: '#about' },
    { title: 'hijabs', link: '#hijabs' },
    { title: 'testimonials', link: '#testimonials' },
  ]

  return (
    <>
      <nav className="bg-[#FEE3EC] relative w-full">
        <div className="absolute w-full md:w-[80%] h-2 border-b border-black bottom-0 md:left-[10%]"></div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="uppercase font-bold text-2xl">
            logo
          </Link>
          <div className="flex md:order-2">
            <button className="hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 border-2 border-black uppercase">whatsapp</button>
            <button
              className="p-2 rounded-lg md:hidden hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 border-2 border-black"
              onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                  <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                  <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                </svg>
              )}
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${navbar ? '' : 'hidden'}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-2 border-pink-500 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {menus.map((menu, i) => (
                <li key={i}>
                  <Link href={menu.link} className="block py-2 capitalize font-semibold md:bg-transparent md:p-0 scroll-smooth"
                    onClick={() => setNavbar(!navbar)}>
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Home />
      <About />
      <Products />
      <Testimonials />
      <footer className="bg-[#F999B7]">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 justify-center md:justify-start">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">LOGO</span>
              </a>
              <p className="hidden md:block w-[60%] mt-5">Lorem ipsum dolor sit amet consectetur. Justo pharetra tincidunt</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-base text-center md:text-start">You can contact us with</h4>
              <ul className="flex flex-wrap items-center my-6 text-sm font-medium sm:mb-0 gap-x-3 justify-center">
                <li>
                  <a href="#" className="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                      <path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19 13-32t32-13h140q14 0 24 10t14 25l27 126q2 14-.5 25.5T359-634L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23-15t26-2l119 26q15 4 25 16t10 27v135q0 19-13 32t-32 13Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                      <path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19 13-32t32-13h140q14 0 24 10t14 25l27 126q2 14-.5 25.5T359-634L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23-15t26-2l119 26q15 4 25 16t10 27v135q0 19-13 32t-32 13Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                      <path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19 13-32t32-13h140q14 0 24 10t14 25l27 126q2 14-.5 25.5T359-634L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23-15t26-2l119 26q15 4 25 16t10 27v135q0 19-13 32t-32 13Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-black border-[1px] sm:mx-auto lg:my-8" />
          <span className="block font-semibold sm:text-center">© 2023 <a href="/" className="hover:underline">Alinaintana.id</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  )
}
