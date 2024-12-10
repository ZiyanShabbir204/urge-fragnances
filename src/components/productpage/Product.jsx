import React, { useEffect, useState } from "react";
import ProductDetailsTabs from "./ProductDetailsTabs";
import { titleCase } from "../../utilis/TitleCase";
import { useCart } from "../../context/cart.context";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { updateCart } = useCart();
  const [product, setProduct] = useState([]);
  const [size, setSize] = useState("medium"); // Set default size to "medium"
  const [price, setPrice] = useState();
  const [qty, setQty] = useState(1);
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const type = searchParams.get("type");

  const fetchProductData = async () => {
    if (type === "scentedCandle") {
      const response = await axios.get(
        `${import.meta.env.VITE_HOSTURL}/scented-candles/${name}`
      );
      setProduct(response.data);
    } else if (type === "perfume") {
      const response = await axios.get(
        `${import.meta.env.VITE_HOSTURL}/perfumes/${name}`
      );
      setProduct(response.data);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [name, type]);

  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      const defaultSize = product.sizes.find((s) => s.size === "medium");
      if (defaultSize) {
        setSize(defaultSize.size);
        setPrice(defaultSize.price);
      } else {
        // Fallback to the first size if "medium" is not available
        setSize(product.sizes[0].size);
        setPrice(product.sizes[0].price);
      }
    }
  }, [product]);

  const handleSizeChange = (e) => {
    const obj = product.sizes.find((p) => p.size === e.target.value);
    setSize(obj.size);
    setPrice(obj.price);
  };

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const cartHandler = () => {
    updateCart(product.productImage, price, product.name, size, qty);
  };

  if (!product.name) return <p>Loading...</p>;

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img
            src={size == "medium" ? product.sizes[0].img1 : product.sizes[1].img1}
            alt={product.name}
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Rs. {price}.00
          </p>

          <div className="mb-5 uppercase">
            <label className="block text-lg font-medium text-gray-600 mb-1">
              Size
            </label>
            <div className="flex gap-4">
              {product.sizes.map((sizeOption) => (
                <label key={sizeOption.size}>
                  <input
                    type="radio"
                    value={sizeOption.size}
                    checked={size === sizeOption.size} // Controlled by state
                    onChange={handleSizeChange}
                    className="mr-2"
                  />
                  {titleCase(sizeOption.size)}
                </label>
              ))}
            </div>
          </div>

          <div className="qty-div">
            <label className="block text-lg font-medium text-gray-600 mb-2">
              QTY:{" " + product.sizes[0]?.quantity}
            </label>
            <div className="qty-addcart flex gap-2">
              <div className="flex gap-4 items-center border border-black w-36 h-11 px-2 justify-between">
                <button
                  onClick={decrementQty}
                  className="w-10 h-full flex items-center justify-center text-3xl"
                >
                  -
                </button>
                <input
                  type="number"
                  value={qty}
                  readOnly
                  className="w-10 h-full flex text-center items-center justify-center text-xl"
                />
                <button
                  onClick={incrementQty}
                  className="w-10 h-full flex items-center justify-center text-3xl"
                >
                  +
                </button>
              </div>
              <div className="flex gap-4  ">
                <button
                  className="uppercase border border-black px-6 py-2  bg-amber-950 text-white hover:bg-amber-700 w-64"
                  onClick={cartHandler}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-4 mt-6">{product.intro}</p>
        </div>
      </div>
      <div className="p-10">
        <ProductDetailsTabs
          productDescription={product.description}
        ></ProductDetailsTabs>
      </div>
    </>
  );
};

export default Product;
