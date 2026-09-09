

import React from 'react'

const Brokerage = () => {
  return (
    <div className='w-full px-6 md:px-8 lg:px-10 py-20'>

      <div className='grid gird-cols-1 md:grid-cols-2 gap-10'>
        <div className=''>
          <h1 className='text-center tracking-wide text-xl md:text-2xl lg:text-3xl text-blue-500'>Brokerage calculator</h1>
          <ul className='list-disc md:text-xl leading-8 text-gray-600  pt-10 px-4 md:px-15 lg:px-14 tracking-wide' >
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, repudiandae!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nemo ex.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>


        <div className='text-center tracking-wide text-xl md:text-2xl lg:text-3xl text-blue-500'>
          <h1>List of charger</h1>
        </div>

      </div>
      
    </div>
  )
}

export default Brokerage
