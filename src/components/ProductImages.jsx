import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./ProductImages.css";

const ProductImages = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(1);
  const images = [
    {
      id: 1,
      src: "/images/image-product-1.jpg",
      srcThumb: "/images/image-product-1-thumbnail.jpg",
    },
    {
      id: 2,
      src: "/images/image-product-2.jpg",
      srcThumb: "/images/image-product-2-thumbnail.jpg",
    },
    {
      id: 3,
      src: "/images/image-product-3.jpg",
      srcThumb: "/images/image-product-3-thumbnail.jpg",
    },
    {
      id: 4,
      src: "/images/image-product-4.jpg",
      srcThumb: "/images/image-product-4-thumbnail.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-6">
      <div>
        <img
          src={images[index].src}
          alt="Main Product"
          className="block w-full md:w-[316px] md:rounded-lg cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <div className="flex justify-between px-4 -translate-y-56 md:hidden">
          <img
            src="/images/icon-previous.svg"
            alt="prev icon"
            className="bg-white p-3 rounded-[50%] cursor-pointer"
            onClick={() =>
              index === 0 ? setIndex(images.length - 1) : setIndex(index - 1)
            }
          />
          <img
            src="/images/icon-next.svg"
            alt="next icon"
            className="bg-white p-3 rounded-[50%] cursor-pointer"
            onClick={() =>
              index > images.length - 2 ? setIndex(0) : setIndex(index + 1)
            }
          />
        </div>
        <Lightbox
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .8)" },
            thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, .8)" },
            yarl__navigation_prev: { backgroundColor: "#fff" },
          }}
          open={open}
          close={() => setOpen(false)}
          animation={{ fade: 330, swipe: 300 }}
          slides={[
            { src: "/images/image-product-1.jpg" },
            { src: "/images/image-product-2.jpg" },
            { src: "/images/image-product-3.jpg" },
            { src: "/images/image-product-4.jpg" },
          ]}
          plugins={[Thumbnails]}
        />
      </div>
      <div className="hidden md:flex md:gap-5">
        {images.map((item) => (
          <div
            className="border border-primary-orange rounded-xl"
            key={item.id}
          >
            <img
              src={item.srcThumb}
              alt="Main Product"
              className={`block w-16 h-16 rounded-lg ${
                active === item.id ? " opacity-50" : ""
              } hover:opacity-70 cursor-pointer`}
              onClick={() => {
                setIndex(item.id - 1);
                setActive(item.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
