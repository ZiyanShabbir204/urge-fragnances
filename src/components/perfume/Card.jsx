import React from 'react';

const Card = ({
  title,
  description,
  imageUrl,
  gender,
  setGender,
  handleScrollToTarget,
}) => {
  return (
    <div
      className="flex mt-6 sm:mt-10 overflow-hidden flex-row lg:flex-col justify-between lg:flex-1  w-full rounded-lg shadow-[1px_3px_6px_2px_rgba(0,0,0,0.15)] lg:shadow-xl bg-white hover:scale-105 transform transition-transform duration-300 cursor-pointer"
      onClick={() => {
        setGender(gender); // Update the state
        handleScrollToTarget(); // Call the scroll function
      }}
    >
      <img
        className="w-1/4 h-20 lg:w-full lg:h-48  object-cover lg:rounded-t-lg"
        src={imageUrl}
        alt={title}
      />
      <div className="p-2 lg:p-6 w-3/4 lg:w-full flex flex-col justify-center items-center lg:justify-between h-[full]">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="hidden lg:block mt-2 text-gray-600">{description}</p>
        </div>

        {/* <button className="mt-4 px-4 py-2 bg-customLightBrown text-white rounded hover:bg-customBrown">
                    Explore
                </button> */}
      </div>
    </div>
  );
};

export default Card;
