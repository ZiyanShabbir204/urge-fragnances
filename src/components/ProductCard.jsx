import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, img1, type }) => {

  return (
    <Link
      to={`/productpage?type=${encodeURIComponent(
        type
      )}&name=${encodeURIComponent(name)}`}
      className="flex flex-col items-center justify-center shadow-[2px_2px_8px_3px_rgba(0,0,0,0.1)] rounded-md bg-white  hover:scale-105 duration-300"
    >
      <div class="w-full max-w-sm">
        <img
          src={img1}
          alt="Lavender Scented Candle"
          class="w-full h-auto rounded-t-lg "
        />
      </div>
      <div class="w-full max-w-sm flex justify-between items-center text-center text-customBlack pb-1 px-4">
        <h2 class="text-2xl font-bold">{name}</h2>
      </div>
      <div class="w-full max-w-sm text-customBlack pb-4 px-4">
        <p class="text-xl text-gray-800">Rs. {price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
