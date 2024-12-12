import React, { useEffect, useState } from "react";
import ScentedHero from "../../components/scentedCandle/ScentedHero";
import Products from "../../components/scentedCandle/Products";
import HeroImage from "../../assets/images/perfumewax/hero-img.png"
import axios from "axios";

const PerfumeWax = () => {
    const obj = {
        HeroImage: HeroImage,
        heading_01: "Perfume Wax",
        para_01: "Transform your space with our luxurious Perfume Wax, designed to infuse your surroundings with long-lasting and exquisite fragrances.",
        para_02: "Creating memorable scents since 2023.",
        para_03: "Our in-house crafted waxes feature fresh, fruity, and captivating fragrances to suit every mood and occasion."
    };
    
    const [fetchProduct, setFetchProduct] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_HOSTURL}/perfume-wax`);
            setFetchProduct(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    //   console.log("perfume wax products: ", fetchProduct);
    return (
        <>
            <ScentedHero
                HeroImage={obj.HeroImage}
                heading_01={obj.heading_01}
                para_01={obj.para_01}
                para_02={obj.para_02}
                para_03={obj.para_03}
            />

            {/* <div className="flex gap-20 justify-center items-center">
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
            </div> */}

            <Products
                product={fetchProduct}
                type="perfumeWax"
            />
        </>
    );
};

export default PerfumeWax;
