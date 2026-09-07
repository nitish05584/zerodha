
import React from 'react'

const Awards = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center'>
      
       <div className='py-10'>
          <img
            src="https://raw.githubusercontent.com/SKSingh0703/Zerodha-Clone/049b30a87bcd54ce95a887afcd0d4672c30f3c47/frontend/public/media/images/largestBroker.svg"
            alt="Awards"
            className="w-full max-w-md mx-auto"
          />
        </div>


        <div>
          <h1 className='text-3xl md:text-4xl '>Largest stock broker in India</h1>

          <p className='pt-1 md:pt-2 text-gray-700'>2+million zerodha clients contribute to over 15% of all retail order volumes in india daily by trading investing in:</p>
         
         <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-3 pl-5 pt- text-gray-600 pt-10">
  <li>Futures and options</li>
  <li>Stocks & IPOs</li>
  <li>Commodity derivatives</li>
  <li>Direct mutual funds</li>
  <li>Currency derivatives</li>
  <li>Bonds and Gold</li>
       </ul>

       <img className='pt-10' src="https://github.com/SKSingh0703/Zerodha-Clone/blob/main/frontend/public/media/images/pressLogos.png?raw=true"/>
            
        </div>
     
       
      </div>
    
    </div>
  )
}

export default Awards

