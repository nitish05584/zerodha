

import React from 'react'

const Stats = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-16 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center'>

        <div>
          <h2 className='text-3xl text-gray-900 '>Trust with confidence </h2>
          <h1 className='text-2xl text-gray-900 pt-8'>Customer-first always</h1>
           <p className='text-gray-500 tracking-wide '>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

           <h1 className='text-2xl text-gray-900 pt-4'>No spam or gimmicks</h1>

           <p className='text-gray-500 tracking-wide'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
           
           <h1 className='text-2xl text-gray-900 pt-4'>The Zerodha universe</h1>

           <p className='text-gray-500 tracking-wide'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

           <h1 className='text-2xl text-gray-900 pt-4'>Do better with money</h1>

           <p className='text-gray-500 tracking-wide'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

        </div>

        <div className='pt-15'>
        <img src="https://zerodha.com/static/images/ecosystem.png"/>
     
     <div className='flex gap-15 md:gap-12 text-blue-500 pt-10 pl-10'>
      <p className='hover:text-black cursor-pointer'>Explore our products →</p>
      <p className='hover:text-black cursor-pointer'>Try Kite demo →</p>
     </div>
        </div>

      </div>
      
    </div>
  )
}

export default Stats
