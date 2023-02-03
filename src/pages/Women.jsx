import React from "react";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";

const Women = ({ func }) => {
  return (
    <div className="w-full md:w-[75%] mx-auto flex flex-col md:flex-row pt-4 md:pt-10 justify-between">
      <div className="w-full md:w-1/2">
        <ProductImages />
      </div>
      <div className="w-full md:w-1/2">
        <ProductInfo func={func} />
      </div>
    </div>
  );
};

export default Women;
