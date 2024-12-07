import React from 'react'

const ScentedHero = ({HeroImage,heading_01, para_01, para_02, para_03}) => {
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
          {heading_01}
        </h2>
        <p class="text-lg  mb-4">
        {para_01}
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-center gap-4 items-center bg-customBrown h-24 text-customLightGray">
      <p className="text-xs">
      {para_02}

      </p>
      <p className="text-lg">
      {para_03}

      </p>
    </div>
  </div>
  )
}

export default ScentedHero