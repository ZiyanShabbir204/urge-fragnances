import React from 'react'
import HeroImage from "../../assets/images/scentedcandles/hero-image.png"

const ScentedHero = () => {
  return (
    <div className=" bg-gray-100">
    <div className="flex flex-col md:flex-row items-center justify-between md:gap-5 ">
      <div class="flex-shrink-0 mb-6 md:mb-0 w-full md:w-1/2">
        <img
          src={HeroImage}
          alt="Scented Candles"
          class="w-full h-auto rounded-r-2xl "
        />
      </div>

      <div class="flex-1 md:w-1/2 text-center md:text-left md:pl-8">
        <h2 class="text-3xl font-semibold text-black-800 mb-4">
          SCENTED CANDLES
        </h2>
        <p class="text-lg  mb-4">
          Perfect for creating a luxurious ambiance, our premium scented
          candles elevate your space with their exquisite fragrance.
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-center gap-4 items-center bg-customBrown h-24 text-customLightGray">
      <p className="text-xs">
          OPERATING SINCE 2023 

      </p>
      <p className="text-lg">
      Handcrafted with organic soy wax for a clean burn.

      </p>
    </div>
  </div>
  )
}

export default ScentedHero