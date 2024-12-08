import React, { useState } from "react";
import img from "../../assets/images/productpage/bf9618331449aaefdac141b4c5fd6450.png";
import img2 from "../../assets/images/productpage/161a738b0be7db16053c9cd407048a9a.png";
import ProductDetailsTabs from "./ProductDetailsTabs";
import { titleCase } from "../../utilis/TitleCase";
import { useCart } from "../../context/cart.context";
const Product = () => {
    const {updateCart} = useCart()
  const productData = {
    name: "Lavender - Large Scented Candle",
    description: "A premium lavender-scented candle for a calming atmosphere.",
    productImage: img,
    additionalImages: [img, img2, img, img],
    sizes: [
      { size: "small", price: 2500 },
      { size: "double wick", price: 3000 },
      { size: "large", price: 3500 },
    ],
    scentThrow: "Subtle",
  };

  const [size, setSize] = useState(productData.sizes[0].size);
  const [price, setPrice] = useState(productData.sizes[0].price);
  // const [scent, setScent] = useState(productData.defaultScent);
  const [qty, setQty] = useState(1);

  const [scentThrow, setScentThrow] = useState(productData.scentThrow);
  const [mainImage, setMainImage] = useState(productData.productImage);

  const handleSizeChange = (e) => {
    const obj = productData.sizes.find((p) => p.size === e.target.value);
    setSize(obj.size);
    setPrice(obj.price);
  };
  // const handleScentChange = (e) => setScent(e.target.value);
  const handleQtyChange = (e) => setQty(e.target.value);
  // const handleScentThrowChange = (e) => setScentThrow(e.target.value);
  const handleImageClick = (imageUrl) => setMainImage(imageUrl);
  const cartHandler = () => {
    updateCart(productData.productImage,price,productData.name,size,qty)
   
  };

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) setQty(qty - 1);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img
            src={mainImage}
            alt={productData.name}
            className="w-full h-auto object-cover shadow-lg"
          />
          <div className="flex gap-4 mt-4">
            {productData.additionalImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Additional view ${index + 1}`}
                className="w-24 h-24 object-cover cursor-pointer hover:opacity-80"
                onClick={() => handleImageClick(imageUrl)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4">{productData.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Rs. {price}.00
          </p>

          {/* <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-600">SCENT: </label>
                        <select
                            className="w-1/2 uppercase px-2 py-4 border mt-2"
                            value={scent}
                            onChange={handleScentChange}
                        >
                            {productData.scents.map((scentOption) => (
                                <option key={scentOption.value} value={scentOption.value}>
                                    {scentOption.label}
                                </option>
                            ))}
                        </select>
                    </div> */}

          <div className="mb-5 uppercase">
            <label className="block text-lg font-medium text-gray-600 mb-1">
              Size
            </label>
            <div className="flex gap-4">
              {productData.sizes.map((sizeOption) => (
                <label key={sizeOption.size}>
                  <input
                    type="radio"
                    value={sizeOption.size}
                    checked={size === sizeOption.size}
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
              QTY:{" "}
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

          <p className="text-lg text-gray-600 mb-4 mt-6">
            {productData.description}
          </p>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-600">
              Scent Throw
            </label>
            <p className="font-semibold">
              {" "}
              {titleCase(productData.scentThrow)}
            </p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <ProductDetailsTabs></ProductDetailsTabs>
      </div>
    </>
  );
};

export default Product;
