import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

export interface Slide {
  imageUrl: string | StaticImageData;
  title: string;
  subtitle: string;
}

interface SliderProps {
  slides: Slide[];
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, interval);

    return () => clearInterval(timer);
  }, [interval, slides.length]);

  console.log(slides, "slides");

  return (
    <div id="" className="relative w-full overflow-hidden rounded-lg shadow-md">
      <div
        className="relative h-[400px] md:h-[400px] transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={sliderRef}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black"
            style={{ transform: `translateX(${index * 100}%)` }}
          >
            <div className="absolute inset-0 brightness-50">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="relative text-center px-2 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md animate-slide-up animate-delay-100">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mt-4 text-white drop-shadow-sm animate-slide-up animate-delay-300">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 z-10 hover:bg-opacity-70 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 z-10 hover:bg-opacity-70 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`rounded-full w-3 h-3 focus:outline-none ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
