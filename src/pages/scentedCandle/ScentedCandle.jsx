import React, { useEffect, useState } from "react";
import ScentedHero from "../../components/scentedCandle/ScentedHero";
import Products from "../../components/scentedCandle/Products";
import HeroImage from "../../assets/images/scentedcandles/hero-image.png"
import axios from "axios";

const ScentedCandle = () => {
  const obj = {
    HeroImage: HeroImage,
    heading_01: "Scented Candles",
    para_01:
      "Elevate your ambiance with Urge Fragrances' premium scented candles, crafted from a luxurious blend of soy wax and pure beeswax. Designed to provide a clean, long-lasting burn, our candles fill your space with captivating fragrances that exude sophistication. Perfect for creating a calming atmosphere or adding a touch of elegance to any setting, these premium candles are a must-have for those who appreciate quality and style. Transform your moments into lasting memories with the warm glow and enchanting scents of Urge Fragrances' scented candles.",
    para_02: "operating since 2023",
    para_03: "Handcrafted with organic soy wax for a clean burn.",
  };

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

      <Products product={fetchProduct} type="scentedCandle" />
    </>
  );
};

export default ScentedCandle;
