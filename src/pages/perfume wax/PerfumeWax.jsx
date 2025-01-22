import React, { useEffect, useState } from "react";
import ScentedHero from "../../components/scentedCandle/ScentedHero";
import Products from "../../components/scentedCandle/Products";
import HeroImage from "../../assets/images/perfumewax/hero-img.png";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

const PerfumeWax = () => {
  const obj = {
    HeroImage: HeroImage,
    heading_01: "Perfume Wax",
    para_01:
      "Experience the elegance of Urge Fragrances' perfume wax, a unique blend of pure beeswax, nourishing palm oil, and exquisite perfume oils. Designed for those who seek alcohol-free fragrances, our solid perfume offers a skin-friendly, long-lasting scent with a luxurious touch. Crafted to enhance your mood—whether you desire calm, confidence, or invigoration—it’s the perfect companion for your on-the-go lifestyle. Its compact, pocket-friendly design ensures you can refresh your fragrance anytime, anywhere. Discover the sophistication and versatility of Urge Fragrances' perfume wax and make it a part of your daily essentials.",
    para_02: "Creating memorable scents since 2023.",
    para_03:
      "Our in-house crafted waxes feature fresh, fruity, and captivating fragrances to suit every mood and occasion.",
  };

  const [fetchProduct, setFetchProduct] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOSTURL}/perfume-wax`
      );
      setFetchProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {fetchProduct.length > 0 ? (
        <Products product={fetchProduct} type="perfumeWax" />
      ) : (
        <div className="items-center text-center">
            <InfinitySpin
          visible={true}
          width="500"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />

        </div>
        
      )}
    </>
  );
};

export default PerfumeWax;
