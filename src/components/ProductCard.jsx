import React from "react";

const ProductCard = ({ image, name, price }) => {
    // shadow-[-2px_8px_24px_2px_rgba(0,0,0,0.07)]
  return (
    <div className="flex flex-col items-center justify-center shadow-md bg-white-100  hover:scale-105 duration-300">
      <div class="w-full max-w-sm mb-6">
        <img
          src={image}
          alt="Lavender Scented Candle"
          class="w-full h-auto rounded-t-lg "
        />
      </div>
      <div class="w-full max-w-sm text-center text-customBlack  p-4 ">
        <h2 class="text-2xl font-semibold  mb-2">
          {name}
        </h2>
   
        <p class="text-xl font-semibold text-gray-800">Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
