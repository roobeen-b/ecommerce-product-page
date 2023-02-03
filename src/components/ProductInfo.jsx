import React, { useState } from "react";

const ProductInfo = ({ func }) => {
  const [count, setCount] = useState(0);

  function handleSubmit() {
    func(count);
  }

  return (
    <div className="px-4 md:px-12 py-8">
      <p className="text-primary-orange text-xs font-bold mb-5">
        SNEAKER COMPANY
      </p>
      <p className="text-4xl font-extrabold mb-6">
        Fall Limited Edition Snickers
      </p>
      <p className="text-sm text-dark-grayish-blue mb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between md:block">
        <p className="text-2xl font-extrabold mb-2">
          $125.00{" "}
          <span className="text-primary-orange  font-bold  bg-light-grayish-blue ml-2 py-1 px-2 rounded text-sm">
            50%
          </span>
        </p>
        <p className="line-through text-sm text-grayish-blue font-bold">
          $250.00
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-5 gap-3">
        <div className="flex items-center justify-between bg-light-grayish-blue rounded-lg md:rounded gap-10 py-4 md:py-1 px-4">
          <p
            className="text-primary-orange text-lg cursor-pointer"
            onClick={() => setCount(count - 1)}
          >
            <img
              src="/images/icon-minus.svg"
              alt="cart"
              className="hover:opacity-70"
            />
          </p>
          <p className="font-bold">{count < 0 ? setCount(0) : count}</p>
          <p
            className="text-primary-orange text-lg cursor-pointer"
            onClick={() => setCount(count + 1)}
          >
            <img
              src="/images/icon-plus.svg"
              alt="cart"
              className="hover:opacity-70"
            />
          </p>
        </div>
        <div
          className="cursor-pointer hover:opacity-70 rounded-lg md:rounded bg-primary-orange md:px-12 py-4 md:py-2 text-white text-md md:text-xs font-bold flex gap-4 items-center justify-center"
          onClick={handleSubmit}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
          </svg>
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
