import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore
}) => {
  return (
    <div className="w-full px-8 md:px-15 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Content */}
        <div className="px-4 md:px-10 py-5 md:py-10">
          <h1 className="text-xl md:text-2xl text-gray-700">
            {productName}
          </h1>

          <p className="leading-7 text-gray-600 pt-4">
            {productDescription}
          </p>

          {/* Link */}
          <div className="flex py-4">
            <a
              href={learnMore}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
            {learnMore}
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="">
          <img
            src={imageURL}
            alt={productName}
            
          />
        </div>

      </div>
    </div>
  );
};

export default RightSection;