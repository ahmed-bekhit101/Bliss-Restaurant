import React from 'react'
import './globals.css'
import  './_ignored/navbar/page'
import Navbar from './_ignored/navbar/page'
import Footer from './_ignored/footer/page'



export default function RootLayout({children}) {
  return (
    <html>
      <head>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>
      </head>
      <body>
        <Navbar />
        <main className="container mx-auto ">
          {children}
        </main>
        <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@1.4.7/dist/flowbite.min.js"></script>

      </body>
    </html>
  )
}
