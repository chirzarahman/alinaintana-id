"use client";
import Link from 'next/link';
import { useState } from 'react'
import Home from './sections/home';
import About from './sections/about';
import Products from './sections/products';
import Testimonials from './sections/testimonials';

const menus = [
  { title: 'home', link: '#home' },
  { title: 'about', link: '#about' },
  { title: 'hijabs', link: '#hijabs' },
  { title: 'testimonials', link: '#testimonials' },
]

const contacts = [
  {
    title: 'whatsapp',
    viewBox: '0 0 16 16',
    icon: 'M8.002 0h-.004C3.587 0 0 3.588 0 8a7.94 7.94 0 0 0 1.523 4.689l-.997 2.972 3.075-.983A7.93 7.93 0 0 0 8.002 16C12.413 16 16 12.411 16 8s-3.587-8-7.998-8zm4.655 11.297c-.193.545-.959.997-1.57 1.129-.418.089-.964.16-2.802-.602-2.351-.974-3.865-3.363-3.983-3.518-.113-.155-.95-1.265-.95-2.413s.583-1.707.818-1.947c.193-.197.512-.287.818-.287.099 0 .188.005.268.009.235.01.353.024.508.395.193.465.663 1.613.719 1.731.057.118.114.278.034.433-.075.16-.141.231-.259.367-.118.136-.23.24-.348.386-.108.127-.23.263-.094.498.136.23.606.997 1.298 1.613.893.795 1.617 1.049 1.876 1.157.193.08.423.061.564-.089.179-.193.4-.513.625-.828.16-.226.362-.254.574-.174.216.075 1.359.64 1.594.757.235.118.39.174.447.273.056.099.056.564-.137 1.11z',
    link: '/'
  },
  {
    title: 'instagram',
    viewBox: '0 0 24 24',
    icon: 'M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z',
    link: '/'
  }
]

export default function Index() {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <nav className="bg-[#FEE3EC] relative w-full">
        <div className="absolute w-full md:w-[80%] h-2 border-b border-black bottom-0 md:left-[10%]"></div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="uppercase font-bold text-2xl">
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
              <a href="/" className="flex items-center mb-4 sm:mb-0 justify-center md:justify-start">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">LOGO</span>
              </a>
              <p className="hidden md:block w-[60%] mt-5">Lorem ipsum dolor sit amet consectetur. Justo pharetra tincidunt</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-base text-center md:text-start">You can contact us with</h4>
              <ul className="flex flex-wrap items-center my-6 text-sm font-medium sm:mb-0 gap-x-3 justify-center">
                {contacts.map((contact, i) => (
                  <li className="group relative justify-center" key={i}>
                    <a href={contact.link} className="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={contact.viewBox}>
                        <path d={contact.icon} />
                      </svg>
                      <span className="absolute top-10 scale-0 transition-all rounded bg-white p-2 text-xs text-black group-hover:scale-100 w-max font-semibold capitalize">{contact.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-6 border-black border-[1px] sm:mx-auto lg:my-8" />
          <span className="block font-semibold text-center">© 2023 <a href="/" className="hover:underline">Alinaintana.id</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  )
}
