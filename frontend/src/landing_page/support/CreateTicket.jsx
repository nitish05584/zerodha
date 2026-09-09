import React from 'react'

const CreateTicket = () => {
  return (
     <div className="w-full px-6 md:px-10 lg:px-16 py-10">

      
      <h1 className="px-2 md:px-5 text-lg md:text-xl tracking-wide text-gray-700">
        To create a ticket, select a relevant topic
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 pt-8 px-5 md:px-10">

      
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl text-gray-600 pt-2">
            Account Opening
          </h2>

          <a href="#" className="text-blue-500 hover:underline">
            Online Account Opening
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            Offline Account Opening
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            Company, Partnership and HUF Account Opening
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            NRI Account
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            HUF Demat Account
          </a>
        </div>

        
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl text-gray-600 mb-2">
            Your Zerodha Account
          </h2>

          <a href="#" className="text-blue-500 hover:underline">
            Login and password
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            Account modification
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            Account closure
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            Profile and settings
          </a>
        </div>

      
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl text-gray-600 mb-2">
            Trading
          </h2>

          <a href="#" className="text-blue-500 hover:underline">
            Trading basics
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            Orders
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            Positions
          </a>

          <a href="#" className="text-blue-500 hover:underline">
            Funds
          </a>
        </div>

      </div>
    </div>
  )
}

export default CreateTicket
