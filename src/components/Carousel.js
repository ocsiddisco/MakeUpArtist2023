import React, { useEffect, useState } from "react";
import { reviews } from "@/pages/api/data";
import { montserrat } from "@/styles/utils/fonts.js";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  const length = 4;

  const delay = 8500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div
      className="flex flex-col text-center overflow-hidden h-[450px] w-full text-twhite absolute z-10 lg:h-screen justify-evenly"
      style={montserrat.style}
    >
      <div
        className="whitespace-nowrap ease-in-out duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {reviews.map((review, i) => {
          return (
            <div
              className="inline-block place-items-center h-[300px] w-full rounded-md p-10 lg:p-20 text-2xl"
              key={i}
            >
              <p className="h-full text-center whitespace-normal italic">
                <q>{review.text}</q>
              </p>
              <p>{review.name}-</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row self-center	">
        <button className="w-[100px] m-1" onClick={handlePrevious}>
          Previous
        </button>
        <button className="w-[100px] m-1" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
