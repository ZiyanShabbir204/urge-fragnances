import React from "react";
import ScentedHero from "../../components/scentedCandle/ScentedHero";
import Products from "../../components/scentedCandle/Products";
import HeroImage from "../../assets/images/scentedcandles/hero-image.png"


//These images are temporary stored like this otherwise they will be in db and after hitting on api the imgs automatically will be stores in the products object
import Lavendar from "../../assets/images/scentedcandles/lavendar.png"
import Mulbery from "../../assets/images/scentedcandles/mulbery.png"
import Ocean from "../../assets/images/scentedcandles/ocean.png"
import Oud from "../../assets/images/scentedcandles/oud.png"
import Thandi from "../../assets/images/scentedcandles/thandi.png"

const ScentedCandle = () => {
  const obj={
    HeroImage:HeroImage,
    heading_01:"scented candles",
    para_01:"Perfect for creating a luxurious ambiance, our premium scented candles elevate your space with their exquisite fragrance.",
    para_02:"operating since 2023",
    para_03:"Handcrafted with organic soy wax for a clean burn."
  }

  //here instead of this the api will hit from scentedCandle database
  //a useEffect will run which will brings all relevent data
  const  products = [ {
    name: "Lavender Scented ",
    price: 2700.00,
    image : Lavendar
},
{
    name: "Thandi Shaam",
    price: 2700.00,
    image : Thandi
},
{
    name: "Ocean",
    price: 3400.00,
    image : Ocean
},
{
    name: "Mulberry",
    price: 3600.00,
    image : Mulbery
},
{
    name: "Oud",
    price: 3500.00,
    image : Oud
},]

  return (
    <>
      <ScentedHero 
      HeroImage={obj.HeroImage}
      heading_01={obj.heading_01}
      para_01={obj.para_01}
      para_02={obj.para_02}
      para_03={obj.para_03}
      />

      <Products
      products={products}
      />
    </>
  );
};

export default ScentedCandle;
