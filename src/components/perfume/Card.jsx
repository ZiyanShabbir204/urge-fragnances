import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="mt-10 max-w-sm rounded-lg shadow-lg bg-white hover:scale-105 transform transition-transform duration-300 cursor-pointer">
            <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={imageUrl}
                alt={title}
            />
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
                <button className="mt-4 px-4 py-2 bg-customLightBrown text-white rounded hover:bg-customBrown">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default Card;
