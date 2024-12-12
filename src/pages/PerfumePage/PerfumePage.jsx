import React, { useEffect, useState } from "react";
import ScentedHero from "../../components/scentedCandle/ScentedHero";
import Products from "../../components/scentedCandle/Products";
import HeroImage from "../../assets/images/perfume/hero-img.png"
import CardImg from "../../assets/images/perfume/heroimg.jpeg"
import Card from "../../components/perfume/Card";
import axios from "axios";

const PerfumePage = () => {
    const obj = {
        HeroImage: HeroImage,
        heading_01: "Scented Perfume",
        para_01: "Elevate your senses with our Scented Perfumes, expertly crafted to leave a lasting impression with their alluring and sophisticated fragrances.",
        para_02: "Redefining elegance and charm since 2023.",
        para_03: "Discover our exclusive collection of vibrant, floral, and musky notes designed for every personality and occasion."
    };
    

    const obj2 = {
        title: "Unisex Perfumes",
        description: "Explore a wide range of fragrances suitable for everyone.",
        imageUrl: CardImg,
        title_02: "Men Perfumes",
        description_02: "Explore a wide range of Men fragnances suitable for Men.",
        imageUrl_02: CardImg,
    }

    const [fetchProduct, setFetchProduct] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_HOSTURL}/perfumes`);
            setFetchProduct(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    //   console.log("perfume products: ", fetchProduct);
    return (
        <>
            <ScentedH
            ero
                HeroImage={obj.HeroImage}
                heading_01={obj.heading_01}
                para_01={obj.para_01}
                para_02={obj.para_02}
                para_03={obj.para_03}
            />

            <div className="flex flex-col md:mx-5 md:flex-row md:gap-20 justify-center items-center">
                <Card
                    title={obj2.title}
                    description={obj2.description}
                    imageUrl={obj2.imageUrl}
                />
                <Card
                    title={obj2.title_02}
                    description={obj2.description_02}
                    imageUrl={obj2.imageUrl_02}
                />
            </div>

            <Products
                product={fetchProduct}
                type="perfume"
            />
        </>
    );
};

export default PerfumePage;
