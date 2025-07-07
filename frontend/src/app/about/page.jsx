// components/AboutSection.jsx

export default function About(){
  return (<>
    <section className="bg-white py-4 px-10 md:py-16">
      <div className=" w-11/12 container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"> {/* Changed md:flex-row to lg:flex-row, md:items-start to lg:items-start, md:gap-12 to lg:gap-12 */}
        <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left"> {/* Changed md:w-1/2 to lg:w-1/2, md:text-left to lg:text-left */}
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 leading-tight">
            A little information <br className="hidden lg:block"/> for our valuable guest {/* Changed hidden md:block to hidden lg:block */}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="bg-gray-50 p-5 italic font-light md:p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-4xl md:text-5xl text-gray-800">3</p>
              <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Locations</p>
            </div>

            <div className="bg-gray-50 p-5 italic font-extralight md:p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-4xl md:text-5xl text-gray-800">1995</p>
              <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Founded</p>
            </div>

            <div className="bg-gray-50 p-5 italic font-extralight md:p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-4xl md:text-5xl text-gray-800">65+</p>
              <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Staff Members</p>
            </div>

            <div className="bg-gray-50 p-5 italic font-extralight md:p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-4xl md:text-5xl text-gray-800">100%</p>
              <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Satisfied Customers</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center "> {/* Changed md:w-1/2 to lg:w-1/2, md:justify-end to lg:justify-end */}
          <div className="relative w-full md:max-w-none lg:w-[480px] lg:h-[550px]  rounded-lg overflow-hidden shadow-lg"> {/* Changed md:w-[480px] to lg:w-[480px], md:h-[550px] to lg:h-[550px], added h-72 for smaller screens */}
            <img
              src="/images/mask-group-6.png"
              alt="Chef preparing fresh food"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-10 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-12 md:mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col justify-between h-full">
            <div>
              <p className="text-xl font-semibold text-red-700 mb-4">
                "The best restaurant"
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
              </p>
            </div>
            <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
              
              <div>
                <p className="font-semibold text-gray-800">Sophie Robson</p>
                <p className="text-sm text-gray-600">Los Angeles, CA</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col justify-between h-full">
            <div>
              <p className="text-xl font-semibold text-red-700 mb-4">
                "Simply delicious"
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
              </p>
            </div>
            <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
              
              <div>
                <p className="font-semibold text-gray-800">Matt Cannon</p>
                <p className="text-sm text-gray-600">San Diego, CA</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col justify-between h-full">
            <div>
              <p className="text-xl font-semibold text-red-700 mb-4">
                "One of a kind restaurant"
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.
              </p>
            </div>
            <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
              
              <div>
                <p className="font-semibold text-gray-800">Andy Smith</p>
                <p className="text-sm text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};