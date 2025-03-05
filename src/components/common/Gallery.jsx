import React, { useState } from "react";

export default function Gallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5 ">
      <div className="flex flex-row lg:flex-col gap-3 ">
        {images?.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt=""
              className={`w-[40px] h-[60px] sm:w-[60px] sm:h-[80px] lg:w-[66px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] ${
                activeIndex === index
                  ? "border border-gray-800 "
                  : "border-none"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
      <div className="w-full mx-auto sm:w-[400px] lg:w-[540px] h-[600px]  lg:h-[600px] xl:h-[650px] 2xl:h-[700px] -order-5 lg:order-1 relative overflow-hidden ">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt=""
              className="w-full h-full absolute top-0 left-0 transition-transform duration-500"
              style={{
                transform: `translateY(${
                  activeIndex === index ? "0" : `${100 * (activeIndex + index)}`
                }%)`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
