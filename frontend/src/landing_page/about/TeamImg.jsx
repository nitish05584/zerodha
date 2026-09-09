
import React from 'react'

const TeamImg = () => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-10 lg:px-14 py-10">




      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-20 items-center">


        <div className="flex flex-col items-center justify-center">
            <img src="https://zerodha.com/static/images/Nikhil.jpg"  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover"/>

            <h2 className="text-xl pt-5 text-gray-700">
            Nikhil Kamath
          </h2>

          <p className="text-gray-500 pt-2">
           Co-founder & CFO
          </p>
        
        </div>

        <div className="flex flex-col items-center justify-center">
        <img src="https://zerodha.com/static/images/Kailash.jpg"  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover"/>


        <h2 className="text-xl pt-5 text-gray-700">
           Dr. Kailash Nadh

          </h2>

          <p className="text-gray-500 pt-2">
           CTO
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
        <img src="https://zerodha.com/static/images/Venu.jpg"  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover"/>

        <h2 className="text-xl pt-5 text-gray-700">
            Venu Madhav

          </h2>

          <p className="text-gray-500 pt-2">
            COO
          </p>
        </div>


        <div className="flex flex-col items-center justify-center">
        <img src="https://zerodha.com/static/images/Seema.jpg"  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover"/>

        <h2 className="text-xl pt-5 text-gray-700">
           Seema Patil
          </h2>

          <p className="text-gray-500 pt-2">
            Director
          </p>
        </div>

        
        <div className="flex flex-col items-center justify-center">
        <img src="https://zerodha.com/static/images/karthik.jpg"  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover"/>

        <h2 className="text-xl pt-5 text-gray-700">
           Karthik Rangappa
          </h2>

          <p className="text-gray-500 pt-2">
            Chief of Education
          </p>
        </div>


        <div className="flex flex-col items-center justify-center">
        <img src="https://zerodha.com/static/images/Austin.jpg"  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover"/>

        <h2 className="text-xl pt-5 text-gray-700">
            Austin Prakesh
          </h2>

          <p className="text-gray-500 pt-2">
           Director Strategy
          </p>
        </div>
     



      </div>
    </div>
  )
}

export default TeamImg
