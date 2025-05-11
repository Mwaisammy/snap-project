import React from "react";
import HeroDesktop from "../../assets/images/image-hero-desktop.png";

const HeroImage = () => {
  return (
    <div className=" z-10">
      <img
        src={HeroDesktop} // Replace with your image path
        alt="Person working on laptop"
        className="w-full h-[400px] object-contain"
      />
    </div>
  );
};

export default HeroImage;
