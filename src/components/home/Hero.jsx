import React, { useState } from "react";
import image1 from "../../assets/images/home/waxhomepage.png";
import image2 from "../../assets/images/home/perfumehomepage.png";
import image3 from "../../assets/images/home/candlehomepage.jpg";

import perfume from "../../assets/images/home/perfume.jpg"
import wax from "../../assets/images/home/wax.jpg"
import candle from "../../assets/images/home/candle.jpg"
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen overflow-hidden">
      {/* Scented Candles */}
      <Link
        style={{ backgroundImage: `url(${candle})` }}
        className="bg-cover bg-center bg-no-repeat transition-all duration-500 flex items-center justify-center group hover:scale-105 hover:z-10 cursor-pointer"
        to="/scentedCandle"
      // onMouseEnter={()=> setScentedHover(true)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
        {/* <h1 className="text-white font-bold text-4xl group-hover:opacity-100 absolute transition-all duration-500">
          Scented Candles
        </h1> */}
      </Link>

      {/* Perfumes */}
      <Link
        style={{ backgroundImage: `url(${perfume})` }}
        className="bg-cover bg-center bg-no-repeat transition-all duration-500 flex items-center justify-center group hover:scale-105 hover:z-10 cursor-pointer"
        to="/perfume"
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
        {/* <h1 className="text-white font-bold text-4xl group-hover:opacity-100 absolute transition-all duration-500">
          Perfumes
        </h1> */}
      </Link>

      {/* Perfume Wax */}
      <Link
        style={{ backgroundImage: `url(${wax})` }}
        className="bg-cover bg-center bg-no-repeat transition-all duration-500 flex items-center justify-center group hover:scale-105 hover:z-10 cursor-pointer"
        to="/perfumeWax"
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
        {/* <h1 className="text-white font-bold text-4xl group-hover:opacity-100 absolute transition-all duration-500">
          Perfume Wax
        </h1> */}
      </Link>
    </div>
  );
};

export default Hero;
