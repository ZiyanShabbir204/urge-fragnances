import React, { useEffect, useState } from "react";
import ScentedHero from "../../components/scentedCandle/ScentedHero";
import Products from "../../components/scentedCandle/Products";
import HeroImage from "../../assets/images/perfume/heroimg.jpeg";
import CardImg from "../../assets/images/perfume/heroimg.jpeg";

//These images are temporary stored like this otherwise they will be in db and after hitting on api the imgs automatically will be stores in the products object
import Lavendar from "../../assets/images/scentedcandles/lavendar.png";
import Mulbery from "../../assets/images/scentedcandles/mulbery.png";
import Ocean from "../../assets/images/scentedcandles/ocean.png";
import Oud from "../../assets/images/scentedcandles/oud.png";
import Thandi from "../../assets/images/scentedcandles/thandi.png";
import Card from "../../components/perfume/Card";
import { useParams } from "react-router-dom";
import axios from "axios";

const PerfumePage = () => {
    const [gender,setGender] = useState("")
  const obj = {
    HeroImage: HeroImage,
    heading_01: "scented Perfumes",
    para_01:
      "Perfect for creating a luxurious ambiance, our premium scented candles elevate your space with their exquisite fragrance.",
    para_02: "operating since 2023",
    para_03: "Our In house fresh, fruity fragnances",
  };

  const obj2 = {
    title: "Unisex Perfumes",
    description: "Explore a wide range of fragrances suitable for everyone.",
    imageUrl: CardImg,
    title_02: "Men Perfumes",
    description_02: "Explore a wide range of Men fragnances suitable for Men.",
    imageUrl_02: CardImg,
  };
  const obj3 = {
    title: "All Perfumes",
    description: "Explore a wide range of fragrances suitable for everyone.",
    imageUrl: CardImg,
    title_02: "All Perfumes",
    description_02: "Explore a wide range of fragnances.",
    imageUrl_02: CardImg,
  };

  //here instead of this the api will hit from Perfume database
  //a useEffect will run which will brings all relevent data
  const products = [
    {
      name: "Lavender Scented ",
      price: 2700.0,
      image: Lavendar,
    },
    {
      name: "Thandi Shaam",
      price: 2700.0,
      image: Thandi,
    },
    {
      name: "Ocean",
      price: 3400.0,
      image: Ocean,
    },
    {
      name: "Mulberry",
      price: 3600.0,
      image: Mulbery,
    },
    {
      name: "Oud",
      price: 3500.0,
      image: Oud,
    },
  ];

  const [fetchProduct, setFetchProduct] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOSTURL}/perfumes?gender=${gender}`
      );
      setFetchProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [gender]);

  //   console.log("perfume products: ", fetchProduct);
  return (
    <>
      <ScentedHero
        HeroImage={obj.HeroImage}
        heading_01={obj.heading_01}
        para_01={obj.para_01}
        para_02={obj.para_02}
        para_03={obj.para_03}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0  place-items-center ">
        <Card
          title={obj3.title_02}
          description={obj3.description_02}
          imageUrl={obj3.imageUrl_02}
          gender=""
          setGender={setGender}
        />
        <Card
          title={obj2.title}
          description={obj2.description}
          imageUrl={obj2.imageUrl}
          gender="Unisex"
          setGender={setGender}
        />
        <Card
          title={obj2.title_02}
          description={obj2.description_02}
          imageUrl={obj2.imageUrl_02}
          gender="Male"
          setGender={setGender}
        />
      </div>

      <Products product={fetchProduct} type="perfume" />
    </>
  );
};

export default PerfumePage;
