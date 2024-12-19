"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {banner, banner2, banner3,banner4} from "../assets/images";

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: banner,
  },
  {
    src: banner2,
  },
  {
    src: banner3,
  },
  {
    src: banner4,
  }
];

export default function ImageSlider(): JSX.Element {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to show the next slide
  const nextSlide = ():void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    if (true) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  });


  return (
    <div className="">
      <Image
        src={images[currentIndex].src}
        alt={`Slider Image ${currentIndex + 1}`}
        className="w-full max-h-[560px]  md:max-h-96 lg:max-h-[35rem] object-cover"
      />
    </div>
  )
}


