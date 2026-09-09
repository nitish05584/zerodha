import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductPage = () => {
  return (
    <div>
      <Hero/>
      <LeftSection imageURL="https://zerodha.com/static/images/products-kite.png"
      productName="Kite"
      productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
      tryDemo="Try demo →"
      learnMore="Learn more →"
       googlePlay="https://zerodha.com/static/images/google-play-badge.svg"
       appStore="https://zerodha.com/static/images/appstore-badge.svg"
              />


      <RightSection imageURL="https://zerodha.com/static/images/products-console.png"
      productName="Console"
      productDescription={<>The central dashboard for your Zerodha account. <br/>Gain insights into your trades and investments with<br/> in-depth reports and visualisations.</>}
      learnMore="Learn more →"/>



       <LeftSection imageURL="https://zerodha.com/static/images/products-coin.png"
      productName="Coin"
      productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices"
      tryDemo="coin →"
      
       googlePlay="https://zerodha.com/static/images/google-play-badge.svg"

       appStore="https://zerodha.com/static/images/appstore-badge.svg"
              />


          <RightSection imageURL="https://zerodha.com/static/images/kite-trade/landing.svg"
      productName="Kite Connect API"
      productDescription={<>Build powerful trading platforms and experiences <br/>with our super simple HTTP/JSON APIs. If you are a startup, <br/>build your investment app and showcase it to our clientbase.

.</>}
      learnMore="Kite Connect →"/>



        <LeftSection imageURL="https://zerodha.com/static/images/varsity-products.svg"
      productName="Varsity mobile"
      productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      tryDemo=" "
      
       googlePlay="https://zerodha.com/static/images/google-play-badge.svg"

       appStore="https://zerodha.com/static/images/appstore-badge.svg"
              />





      <Universe/>
    </div>
  )
}

export default ProductPage
