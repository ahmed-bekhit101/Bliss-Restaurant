'use client'

import Link from 'next/link'
import React from 'react'
import { useAuth } from "../../../../hooks/useAuth"

export default function Navbar() {
  const { user, loading } = useAuth()

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }
  console.log('User:', user)

  return (
    <>
      {/* Top Navigation */}
      <nav className="flex justify-between px-5 py-1 bg-gray-500">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {!loading && user && (
            <>
              <Link href="/">
                <span className="text-white text-sm md:text-base hover:underline">Home</span>
              </Link>
              <Link href="/about">
                <span className="text-white text-sm md:text-base hover:underline">About</span>
              </Link>
              <Link href="/menu">
                <span className="text-white text-sm md:text-base hover:underline">Menu</span>
              </Link>
              {user.role === 'admin' && (
                <Link href="/admin">
                  <span className="text-yellow-300 text-sm md:text-base hover:underline font-semibold">Admin</span>
                </Link>
              )}
            </>
          )}
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Link href="/services">
            <svg className="md:w-[48px] md:h-[48px] w-[30px] h-[30px] text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="/contact">
            <svg className="md:w-[48px] md:h-[48px] w-[30px] h-[30px] text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="bg-gray-100 border-gray-200 py-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2">
          <Link href="/" className="flex items-center rtl:space-x-reverse">
            <svg className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] py-2 text-red-800" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M18.011 13H20c-.367 2.5551-2.32 4.6825-4.9766 5.6162V20H8.97661v-1.3838C6.31996 17.6825 4.36697 15.5551 4 13h14.011Zm0 0c1.0995-.0059 1.989-.8991 1.989-2 0-.8637-.5475-1.59948-1.3143-1.87934M18.011 13H18m0-3.99997c.2409 0 .4718.04258.6857.12063m0 0c.8367-1.0335.7533-2.67022-.2802-3.50694-1.0335-.83672-2.5496-.6772-3.3864.35631-.293-1.50236-1.7485-2.15377-3.2509-1.8607-1.5023.29308-2.48263 1.74856-2.18956 3.25092C8.9805 6.17263 7.6182 5.26418 6.15462 6.00131 4.967 6.59945 4.45094 8.19239 5.04909 9.38002m0 0C4.37083 9.66467 4 10.3357 4 11.1174 4 12.1571 4.84288 13 5.88263 13m-.83354-3.61998c.2866-.12029 1.09613-.40074 2.04494.3418m5.27497-.89091c1.0047-.4589 2.1913-.01641 2.6502.98832" />
            </svg>
            <span className="text-gray-600 text-3xl py-2 self-center italic md:text-4xl font-semibold whitespace-nowrap playfair-display">
              Bistro Bliss
            </span>
          </Link>

          <div className="flex md:order-2 space-x-2 items-center">
            <Link href="/book-table">
              <button
                type="button"
                className="text-gray-600 hidden md:block border-2 border-gray-600 bg-transparent hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-4xl text-md md:text-lg px-4 py-2 text-center"
              >
                Book a Table
              </button>
            </Link>

            {!loading && user ? (
              <>
                <Link href="/profile">
                  <button className="text-gray-600 text-sm md:text-base font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition">
                    Account
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-600 text-sm md:text-base font-medium px-3 py-1 rounded-full hover:bg-red-100 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="text-gray-600 text-sm md:text-base font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="text-gray-600 text-sm md:text-base font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
