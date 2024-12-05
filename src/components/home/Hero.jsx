import React, { useState } from "react";
import image1 from "../../assets/images/home/image1.jpg";

const Hero = () => {
  
  return (
    <div className="grid grid-cols-3 h-screen overflow-hidden">
      {/* Scented Candles */}
      <div
        style={{ backgroundImage: `url(${image1})` }}
        className="bg-cover bg-center bg-no-repeat transition-all duration-500 flex items-center justify-center group hover:scale-105 hover:z-10 cursor-pointer"
        onMouseEnter={()=> setScentedHover(true)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
        <h1 className="text-white font-bold text-4xl group-hover:opacity-100 absolute transition-all duration-500">
          Scented Candles
        </h1>
      </div>

      {/* Perfumes */}
      <div
        style={{ backgroundImage: `url(${image1})` }}
        className="bg-cover bg-center bg-no-repeat transition-all duration-500 flex items-center justify-center group hover:scale-105 hover:z-10 cursor-pointer"
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
        <h1 className="text-white font-bold text-4xl group-hover:opacity-100 absolute transition-all duration-500">
          Perfumes
        </h1>
      </div>

      {/* Perfume Wax */}
      <div
        style={{ backgroundImage: `url(${image1})` }}
        className="bg-cover bg-center bg-no-repeat transition-all duration-500 flex items-center justify-center group hover:scale-105 hover:z-10 cursor-pointer"
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
        <h1 className="text-white font-bold text-4xl group-hover:opacity-100 absolute transition-all duration-500">
          Perfume Wax
        </h1>
      </div>
    </div>
  );
};

export default Hero;