import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-[url('/images/mask-group-4.png')] bg-cover bg-center h-screen">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-900 px-4 w-full max-w-2xl">
            <h1 className="text-4xl md:text-7xl font-light mb-6 playfair-display">
              Best Food For Your Taste
            </h1>
            <p className="text-lg md:text-xl mb-10">
              Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/book">
                <button className="bg-[#B73E3E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a33434] transition">
                  Book A Table
                </button>
              </Link>
              <Link href="/menu">
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-full border border-black hover:bg-gray-100 transition">
                  Explore Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold playfair-display mb-16 text-gray-900">
            Browse Our Menu
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border rounded-xl min-h-[360px] p-6 flex flex-col items-center text-gray-800 shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 p-5 rounded-full mb-5 text-[#B73E3E]">
                <svg className="h-14 w-14 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-9 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Breakfast</h3>
              <p className="text-sm text-gray-600 mb-6">
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <Link href="/menu/breakfast" className="text-[#B73E3E] font-semibold hover:underline">
                Explore Menu
              </Link>
            </div>

            <div className="border rounded-xl min-h-[360px] p-6 flex flex-col items-center text-gray-800 shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 p-5 rounded-full mb-5 text-[#B73E3E]">
                <svg className="h-14 w-14 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M6 20h12a2 2 0 002-2v-4H4v4a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Main Dishes</h3>
              <p className="text-sm text-gray-600 mb-6">
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <Link href="/menu/main-dishes" className="text-[#B73E3E] font-semibold hover:underline">
                Explore Menu
              </Link>
            </div>

            <div className="border rounded-xl min-h-[360px] p-6 flex flex-col items-center text-gray-800 shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 p-5 rounded-full mb-5 text-[#B73E3E]">
                <svg className="h-14 w-14 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2zM4 8h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Drinks</h3>
              <p className="text-sm text-gray-600 mb-6">
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <Link href="/menu/drinks" className="text-[#B73E3E] font-semibold hover:underline">
                Explore Menu
              </Link>
            </div>

            <div className="border rounded-xl min-h-[360px] p-6 flex flex-col items-center text-gray-800 shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 p-5 rounded-full mb-5 text-[#B73E3E]">
                <svg className="h-14 w-14 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18h18M9 14l1.5 1.5L12 14m0 0l1.5 1.5L15 14m-3 0v-2a3 3 0 10-6 0v2m6 0h6v-2a3 3 0 00-6 0v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Desserts</h3>
              <p className="text-sm text-gray-600 mb-6">
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <Link href="/menu/desserts" className="text-[#B73E3E] font-semibold hover:underline">
                Explore Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src="/images/mask-group-5.png"
              alt="Food Wraps"
              className="w-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-0 md:translate-x-6/8 translate-y-1/5 bg-gray-500 text-white p-6 rounded-xl shadow/50 w-full max-w-sm ml-6">
              <h3 className="text-lg font-semibold mb-4">Come and visit us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h2l.4 2M7 4h10l1 3M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z" />
                  </svg>
                  <span>(414) 857 – 0107</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v16H4V4zm16 0l-8 8-8-8" />
                  </svg>
                  <span>happytummy@restaurant.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 9c-4.97-4.59-8-7.99-8-11a8 8 0 0116 0c0 3.01-3.03 6.41-8 11z" />
                  </svg>
                  <span>
                    837 W. Marshall Lane Marshalltown, <br />
                    IA 50158, Los Angeles
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-900 px-4">
            <h2 className="text-4xl md:text-5xl font-semibold playfair-display mb-6">
              We provide healthy <br /> food for your family.
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </p>
            <p className="text-sm text-gray-600 mb-8">
              At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
            </p>
            <Link href="/about">
              <button className="px-6 py-3 border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition">
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
