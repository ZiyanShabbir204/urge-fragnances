import React, { useState } from 'react';
import img from "../../assets/images/productpage/bf9618331449aaefdac141b4c5fd6450.png"
import img2 from "../../assets/images/productpage/161a738b0be7db16053c9cd407048a9a.png"
import ProductDetailsTabs from './ProductDetailsTabs';
const Product = () => {

    const productData = {
        name: "Lavender - Large Scented Candle",
        price: 3500,
        description: "A premium lavender-scented candle for a calming atmosphere.",
        mainImage: img, // URL to the main product image
        additionalImages: [
            img, // Replace with actual image URLs
            img2,
            img,
            img,
        ],
        sizes: [
            { label: "Small", value: "small" },
            { label: "Double Wick", value: "double wick" },
            { label: "Large", value: "large" }
        ],
        scents: [
            { label: "Lavender", value: "lavender" },
            { label: "Rose", value: "rose" },
            { label: "Jasmine", value: "jasmine" }
        ],
        scentThrows: [
            { label: "Subtle", value: "subtle" },
            { label: "Strong", value: "strong" }
        ],
        defaultSize: "large",  // Default selected size
        defaultScent: "lavender", // Default selected scent
        defaultQty: 1,  // Default quantity
        defaultScentThrow: "subtle",  // Default scent throw
    };

    const [size, setSize] = useState(productData.defaultSize);
    const [scent, setScent] = useState(productData.defaultScent);
    const [qty, setQty] = useState(1);

    const [scentThrow, setScentThrow] = useState(productData.defaultScentThrow);
    const [mainImage, setMainImage] = useState(productData.mainImage);

    const handleSizeChange = (e) => setSize(e.target.value);
    const handleScentChange = (e) => setScent(e.target.value);
    const handleQtyChange = (e) => setQty(e.target.value);
    const handleScentThrowChange = (e) => setScentThrow(e.target.value);
    const handleImageClick = (imageUrl) => setMainImage(imageUrl);

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
                    <p className="text-xl font-semibold text-gray-700 mb-4">Rs. {productData.price}.00</p>

                    <div className="mb-4">
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
                    </div>

                    <div className="mb-4 uppercase">
                        <label className="block text-lg font-medium text-gray-600">Size</label>
                        <div className="flex gap-4">
                            {productData.sizes.map((sizeOption) => (
                                <label key={sizeOption.value}>
                                    <input
                                        type="radio"
                                        value={sizeOption.value}
                                        checked={size === sizeOption.value}
                                        onChange={handleSizeChange}
                                        className="mr-2"
                                    />
                                    {sizeOption.label}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className='qty-div'>
                        <label className="block text-lg font-medium text-gray-600 mb-2">QTY: </label>
                        <div className='qty-addcart flex gap-2'>
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
                                <button className="uppercase border border-black px-6 py-2  bg-amber-950 text-white hover:bg-amber-700 w-64">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-4 mt-5">{productData.description}</p>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-600">Scent Throw</label>
                        <select
                            className="w-full p-2 border rounded-md mt-2"
                            value={scentThrow}
                            onChange={handleScentThrowChange}
                        >
                            {productData.scentThrows.map((scentThrowOption) => (
                                <option key={scentThrowOption.value} value={scentThrowOption.value}>
                                    {scentThrowOption.label}
                                </option>
                            ))}
                        </select>
                    </div>


                </div>
            </div>
            <div className='p-10'>
            <ProductDetailsTabs></ProductDetailsTabs>
            </div>
        </>
    );
};

export default Product;
