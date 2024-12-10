import React, { useEffect, useState } from "react";
import ScentedHero from "../../components/scentedCandle/ScentedHero";
import Products from "../../components/scentedCandle/Products";
import HeroImage from "../../assets/images/scentedcandles/hero-image.png"


//These images are temporary stored like this otherwise they will be in db and after hitting on api the imgs automatically will be stores in the products object
import Lavendar from "../../assets/images/scentedcandles/lavendar.png"
import Mulbery from "../../assets/images/scentedcandles/mulbery.png"
import Ocean from "../../assets/images/scentedcandles/ocean.png"
import Oud from "../../assets/images/scentedcandles/oud.png"
import Thandi from "../../assets/images/scentedcandles/thandi.png"
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const ScentedCandle = () => {
  const obj = {
    HeroImage: HeroImage,
    heading_01: "scented candles",
    para_01: "Perfect for creating a luxurious ambiance, our premium scented candles elevate your space with their exquisite fragrance.",
    para_02: "operating since 2023",
    para_03: "Handcrafted with organic soy wax for a clean burn."
  }

  //here instead of this the api will hit from scentedCandle database
  //a useEffect will run which will brings all relevent data

  const [fetchProduct, setFetchProduct] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_HOSTURL}/scented-candles`);
      setFetchProduct(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  // const { scentedCandle } = useParams();

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(fetchProduct);


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
        product={fetchProduct}
        type="scentedCandle"
      />
    </>
  );
};

export default ScentedCandle;
