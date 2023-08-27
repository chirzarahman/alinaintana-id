"use client";
import Link from 'next/link';
import { useState } from 'react'
import Home from './sections/home';
import About from './sections/about';

export default function Index() {
  const [navbar, setNavbar] = useState(false)
  const menus = [
    { title: 'home' },
    { title: 'about' },
    { title: 'product' },
    { title: 'testimoni' },
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
                  <Link href="#" className="block py-2 capitalize font-semibold md:bg-transparent md:p-0"
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
    </>
  )
}
