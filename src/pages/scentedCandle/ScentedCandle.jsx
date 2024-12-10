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
import { useParams } from "react-router-dom";

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

  const [product, setProduct] = useState([{
    "name": "Coffee",
    "description": "Indulge your senses in the rich and aromatic experience of our coffee-scented candle, carefully crafted with a blend of premium soy and beeswax.Immerse yourself in the comforting embrace of freshly brewed coffee as the candle’s warm and inviting aroma fills the air. The robust notes of roasted coffee beans create a captivating fragrance that awakens your senses and creates a cozy atmosphere, reminiscent of your favorite café.\nOur commitment to sustainability is reflected in the 100 percent reusable glass jar that houses this exquisite candle. After enjoying the captivating aroma, repurpose the elegant jar as a stylish storage solution or a decorative element, adding a touch of sophistication to any space.\nTo further enhance the overall experience, our coffee-scented candle comes beautifully packaged in premium materials, elevating it to the realm of a luxurious gift for yourself or someone special. Immerse yourself in the world of coffee-inspired bliss as the flickering flame illuminates the room with a gentle glow, creating an ambiance that is both comforting and inviting.\nExperience the perfect blend of indulgence and sustainability with our coffee-scented candle. Let the enchanting aroma of freshly brewed coffee transport you to your favorite coffeehouse, while knowing that each burn is accompanied by a commitment to eco-friendly practices. Sit back, relax, and enjoy the comforting aroma and ambiance that our candle provides, making every moment a delightful coffee-infused experience.",
    "intro": "Indulge in the irresistible aroma of our Coffee Bliss scented candle. Housed in a 100 percent reusable glass jar, it not only emits the rich fragrance of freshly brewed coffee but also adds a touch of elegance to your space. With its premium packaging, this candle makes a perfect gift for coffee lovers or a luxurious treat for yourself. Experience the cozy ambiance and invigorating scent as you enjoy the comforting embrace of our coffee-scented candle.",
    "sizes": [
      {
        "size": "medium",
        "price": 2700,
        "quantity": 2,
        "img1": "https://res.cloudinary.com/dlzoahoee/image/upload/v1733737749/Coffee_ths6d7.png",
        "img2": "https://res.cloudinary.com/dlzoahoee/image/upload/v1733737749/Coffee_BG_x3ue4z.png",
        "_id": "6756eadb400dc7005d1aef31"
      },
      {
        "size": "large",
        "price": 3500,
        "quantity": 2,
        "img1": "https://res.cloudinary.com/dlzoahoee/image/upload/v1733737362/Coffee_cujshw.png",
        "img2": "https://res.cloudinary.com/dlzoahoee/image/upload/v1733737362/Coffee_BG_lpdx3o.png",
        "_id": "6756eadb400dc7005d1aef32"
      }
    ],
    "_id": "6756eadb400dc7005d1aef30",
    "__v": 0
  }]);
  const fetchData = async () => {
    try {
      // const response = await axios.get(`${process.env.HOSTURL}/scented-candles`);
      // setProduct(response);
    } catch (error) {
      // console.log(error)
    }
  }

  useEffect(() => {
    // fetchData();
  }, [])
  // const products = [{
  //   name: "Lavender Scented ",
  //   price: 2700.00,
  //   image: Lavendar
  // },
  // {
  //   name: "Thandi Shaam",
  //   price: 2700.00,
  //   image: Thandi
  // },
  // {
  //   name: "Ocean",
  //   price: 3400.00,
  //   image: Ocean
  // },
  // {
  //   name: "Mulberry",
  //   price: 3600.00,
  //   image: Mulbery
  // },
  // {
  //   name: "Oud",
  //   price: 3500.00,
  //   image: Oud
  // },]


  const { scentedCandle } = useParams();
  // console.log(scentedCandle + " ka page hai");
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
        product={product}
        type={scentedCandle}
      />
    </>
  );
};

export default ScentedCandle;
