import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 text-center">
          <div>
            <Link href="/" className="flex items-center rtl:space-x-reverse">
            <svg
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] py-2 text-white"
              aria-hidden="true"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.8"
                d="M18.011 13H20c-.367 2.5551-2.32 4.6825-4.9766 5.6162V20H8.97661v-1.3838C6.31996 17.6825 4.36697 15.5551 4 13h14.011Zm0 0c1.0995-.0059 1.989-.8991 1.989-2 0-.8637-.5475-1.59948-1.3143-1.87934M18.011 13H18m0-3.99997c.2409 0 .4718.04258.6857.12063m0 0c.8367-1.0335.7533-2.67022-.2802-3.50694-1.0335-.83672-2.5496-.6772-3.3864.35631-.293-1.50236-1.7485-2.15377-3.2509-1.8607-1.5023.29308-2.48263 1.74856-2.18956 3.25092C8.9805 6.17263 7.6182 5.26418 6.15462 6.00131 4.967 6.59945 4.45094 8.19239 5.04909 9.38002m0 0C4.37083 9.66467 4 10.3357 4 11.1174 4 12.1571 4.84288 13 5.88263 13m-.83354-3.61998c.2866-.12029 1.09613-.40074 2.04494.3418m5.27497-.89091c1.0047-.4589 2.1913-.01641 2.6502.98832"
              />
            </svg>

            <span className="text-white text-3xl py-2 self-center italic md:text-4xl font-semibold whitespace-nowrap playfair-display">
              Bistro Bliss
            </span>
          </Link>
          <p className='py-3 font-light line-spacing'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Links</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline text-white">Home</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline text-white">About</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline text-white">Menu</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline text-white">Privacy Policy</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline text-white">Licensing</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline text-white">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Take a Look</h2>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Link href="#" className="hover:underline text-white">
                <img src="/images/Mask group.png" alt="Footer Image 1" className=" object-cover rounded-lg" />
              </Link>
              </div>
              <div>
                <Link href="#" className="hover:underline  text-white">
                <img src="/images/Mask group (1).png" alt="Footer Image 1" className=" object-cover rounded-lg" />
              </Link>
              
              </div>
              <div className=''>
                <Link href="#" className="hover:underline text-white">
                <img src="/images/Mask group (2).png" alt="Footer Image 2" className=" object-cover rounded-lg" />
              </Link>
              
              </div>
              <div>
                <Link href="#" className="hover:underline text-white">
                <img src="/images/Mask group (3).png" alt="Footer Image 3" className=" object-cover rounded-lg" />
              </Link>
              </div>
            </div>
            
          </div>
        </div>

        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2023 <Link href="#" className="hover:underline text-white">Bistro Bliss™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
              <span className="sr-only">Discord community</span>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.061.14 3.986 3.986 0 0 1-.771-.074 4.129 4.129 0 0 0 3.88 2.872A8.265 8.265 0 0 1 0 15.55a11.623 11.623 0 0 0 6.29 1.843c7.557 0 11.719-6.295 11.719-11.718 0-.179-.006-.356-.02-.532A8.06 8.06 0 0 0 20 1.892Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
