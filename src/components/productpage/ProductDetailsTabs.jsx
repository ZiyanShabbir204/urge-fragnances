import React, { useState } from 'react';

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState('productInfo');

  const tabs = [
    { id: 'productInfo', label: 'Product Info' },
    { id: 'howToUse', label: 'How to Use' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'shippingReturns', label: 'Shipping & Returns' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'productInfo':
        return (
          <p>
            Our Large Candles are housed in an elegant glass container, with our signature label and a wooden lid. Perfect for extended moments of tranquility and indulgence.
            <br />
            Approximate burning time of 50 hours.
          </p>
        );
      case 'howToUse':
        return <p>Trim the wick to 1/4 inch before lighting. Burn within sight and away from flammable materials.</p>;
      case 'ingredients':
        return <p>100% soy wax, premium essential oils, and a cotton wick.</p>;
      case 'shippingReturns':
        return <p>Free shipping on orders over Rs. 5,000. Returns are accepted within 14 days of purchase.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 pt-4">
      {/* Tab Buttons */}
      <div className="flex gap-4 border-b-slate-300 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-xl uppercase ${
              activeTab === tab.id ? 'text-black' : 'text-gray-500'
            } pb-2`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 text-gray-700">{renderContent()}</div>
    </div>
  );
};

export default ProductDetailsTabs;
