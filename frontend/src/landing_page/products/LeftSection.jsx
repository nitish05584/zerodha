import React from 'react'

const LeftSection = ({imageURL,productName,productDescription,tryDemo,learnMore, googlePlay,appStore}) => {
  return (
    <div className='w-full px-8 md:px-15 py-10 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className=''>
       <img src={imageURL}/>
      </div>

      <div className='px-4 md:px-5 md:py-10 py-5'>
         <h1 className='text-xl md:text-2xl text-gray-700'>{productName}</h1>
         <p className='leading-7 text-gray-600'>{productDescription}</p>
         <div className=' flex  flex-col md:flex-row md:gap-15 py-2 gap-4'>
          <a href={tryDemo} className='text-blue-500'>{tryDemo} </a>
          <a href={learnMore} className='text-blue-500'>{learnMore}  </a>
         </div>

          <div className='flex gap-5 py-7'>
            <img src={googlePlay}/>
          <img src={appStore}/>
          </div>

      </div>
      </div>
      
    </div>
  )
}

export default LeftSection
