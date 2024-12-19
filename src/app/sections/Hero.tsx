"use client";

import ImageSlider from "../component/Img_slider";


const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full "
    >
      <div className=" w-full h-full">
        <div className="w-full h-full sm:max-h-fit">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;


