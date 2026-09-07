

import React from 'react'

const Education = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10">
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>

        <div>
          <img src="https://zerodha.com/static/images/index-education.svg"/>
        </div>

        <div>
          <h1 className='text-3xl md:text-2xl '>Free and market education</h1>
          <p className='tracking-wide text-gray-700 pt-4'>Verify the largest online market education book in the world covering everything from the basics to advanced trading</p>
          
          <p className="pt-4 text-blue-500 hover:text-black cursor-pointer">
            Versity →
          </p>

          <p className='tracking-wide text-gray-700 pt-4'>TradingQ&A the most active trading and investment community in india for all your market related queries</p>

          <p className="pt-4 text-blue-500 hover:text-black cursor-pointer">
            TradingQ&A →
          </p>
        </div>

      </div>
     
    </div>
  )
}

export default Education
