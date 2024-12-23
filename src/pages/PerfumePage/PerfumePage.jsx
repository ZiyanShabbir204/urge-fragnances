import React, { useEffect, useState, useRef } from "react";
import ScentedHero from "../../components/scentedCandle/ScentedHero";
import Products from "../../components/scentedCandle/Products";
import HeroImage from "../../assets/images/perfume/hero-img.png"
import Card from "../../components/perfume/Card";
import men from "../../assets/images/perfume/men.jpg";
import all from "../../assets/images/perfume/all.png";
import unisex from "../../assets/images/perfume/unisex.jpg";
import axios from "axios";
import "../PerfumePage/perfumepage.css"
import { InfinitySpin } from "react-loader-spinner";
const PerfumePage = () => {
  const [gender, setGender] = useState("All")
  const perfumesRef = useRef(null);

  const handleScrollToPerfumes = () => {
    const offset = 100; // Offset in pixels
    const elementTop = perfumesRef.current.getBoundingClientRect().top; // Get element's top position relative to the viewport
    const scrollPosition = window.scrollY + elementTop - offset; // Calculate the scroll position with the offset

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const obj = {
    HeroImage: HeroImage,
    heading_01: "Perfumes",
    para_01:
      "Urge Fragrances presents an exquisite collection of premium perfumes, meticulously crafted for those who appreciate luxury and sophistication. Each fragrance is designed with the finest ingredients, ensuring a rich, captivating scent that lingers throughout the day. With unparalleled longevity and exceptional sillage, Urge Fragrances redefine elegance, making every moment unforgettable. Whether you seek bold, charismatic notes or subtle, refined aromas, our collection offers the perfect scent to match your unique style. Experience the art of perfumery with Urge Fragrances—where quality meets timeless allure.",
    para_02: "Redefining elegance and charm since 2023.",
    para_03:
      "Discover our exclusive collection of vibrant notes designed for every personality and occasion.",
  };


  const obj2 = {
    title: "Unisex Collection",
    description: "Explore a wide range of fragrances suitable for everyone.",
    imageUrl: unisex,
    title_02: "Men's Collection",
    description_02: "Explore a wide range of Men fragnances suitable for Men.",
    imageUrl_02: men,
    title_03: "Complete Collection",
    description_03: "Explore a wide range of fragrances suitable for everyone.",
    imageUrl_03: all,
  };


  const [fetchProduct, setFetchProduct] = useState([]);
  const fetchData = async () => {
    try {
      if (gender == "All") {
        const response = await axios.get(
          `${import.meta.env.VITE_HOSTURL}/perfumes`
        );
        setFetchProduct(response.data);
      } else {
        const response = await axios.get(
          `${import.meta.env.VITE_HOSTURL}/perfumes?gender=${gender}`
        );
        setFetchProduct(response.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [gender])

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

      <div className="px-6 grid grid-cols-1 sm:grid-cols-3 sm:gap-8 lg:gap-16 xl3:gap-24 place-items-center wrapper">
        <div
          className={`element ${gender === "Unisex"
            ? "opacity-100 filter-none" // Active category styles
            : "opacity-70 filter blur-[2px]" // Non-active categories
            } transition-all duration-300`}
        >
          <Card
            title={obj2.title}
            description={obj2.description}
            imageUrl={obj2.imageUrl}
            gender="Unisex"
            setGender={setGender}
            handleScrollToTarget={handleScrollToPerfumes}
          />
        </div>
        <div
          className={`element ${gender === "All"
            ? "opacity-100 filter-none" // Active category styles
            : "opacity-70 filter blur-[2px]" // Non-active categories
            } transition-all duration-300`}
        >
          <Card
            title={obj2.title_03}
            description={obj2.description_03}
            imageUrl={obj2.imageUrl_03}
            gender="All"
            setGender={setGender}
            handleScrollToTarget={handleScrollToPerfumes}
          />
        </div>
        <div
          className={`element ${gender === "Male"
            ? "opacity-100 filter-none" // Active category styles
            : "opacity-70 filter blur-[2px]" // Non-active categories
            } transition-all duration-300`}
        >
          <Card
            title={obj2.title_02}
            description={obj2.description_02}
            imageUrl={obj2.imageUrl_02}
            gender="Male"
            setGender={setGender}
            handleScrollToTarget={handleScrollToPerfumes}
          />
        </div>
      </div>
      <h1 ref={perfumesRef} className="text-center mt-12 text-4xl font-bold">
      </h1>
     <Products product={fetchProduct} type="perfume" />
    </>
  );
};

export default PerfumePage;
