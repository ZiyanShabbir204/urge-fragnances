import React, { useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../assets/images/perfume/hover-images/Celeste.jpg"
import "../components/productCard.css"

//todo
// hovered images should be in db and then in cloudinary after abrar send all the pictures

const ProductCard = ({ name, price, img1, type }) => {

  const [dum, setDum] = useState(img1);
  const handleHover = () => {
    console.log("object")
    setDum(dummy);
  }
  return (
    <Link
      to={`/productpage?type=${encodeURIComponent(
        type
      )}&name=${encodeURIComponent(name)}`}
      className={`flex flex-col items-center justify-center  rounded-md bg-white  hover:scale-105 duration-300 overflow-hidden`}

    >

      <div class="w-full max-w-sm">
        <img
          src={dum}
          alt="Lavender Scented Candle"
          className="w-full h-auto rounded-t-lg picture"
          // onMouseOver={handleHover}
          // onMouseLeave={() => setDum(img1)}
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
