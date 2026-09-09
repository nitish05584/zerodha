import React from 'react'

const Hero = () => {
  return (
    <div className="w-full px-8 sm:px-10 md:px-12 lg:px-14 py-15">

      
      <div className="text-center">
        <h1 className="text-2xl text-gray-600 leading-relaxed pb-10">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>

        <hr className="mt-8 border-gray-300" />
      </div>


      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-20 px-4">

        
        <div>
          <p className="text-gray-600 leading-7 ">
            We kick-started operations on the 15th of August, 2010 with the
            goal of breaking all barriers that traders and investors face in
            India in terms of cost, support, and<br/> technology. We named the
            company Zerodha, a combination of Zero and<br/> "Rodha", the Sanskrit
            word for barrier.
          </p>

          <p className="text-gray-600 leading-7 pt-6">
            Today, our disruptive pricing models and in-house technology have<br/>
            made us the biggest stock broker in India.
          </p>

          <p className="text-gray-600 leading-7  pt-6">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% <br/>of all Indian retail trading volumes.
          </p>
        </div>

        
        <div>
          <p className="text-gray-600 leading-7 ">
            In addition, we run a number of popular open online <br/>educational
            and community initiatives to empower retail traders and investors.
          </p>

          <p className="text-gray-600 leading-7  pt-6">
           <a href="" className="text-blue-400 hover:underline"> Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech<br/> startups with the goal of growing the Indian capital
            markets.
          </p>

          <p className="text-gray-600  leading-10 pt-6">
            And yet, we are always up to something new every day. Catch <br/>up on
            the latest updates on our blog or see what the media is <br/>saying
            about us or learn more about our business <br/>and product philosophies.
          </p>
        </div>

      </div>


      

    </div>
  )
}

export default Hero