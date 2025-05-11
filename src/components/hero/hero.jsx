import React from "react";
import Partners from "./partners";
import HeroButton from "./heroButton";
import HeroText from "./heroText";
import HeroImage from "./heroImage";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-20">
      <div className="flex flex-col ">
        <HeroText />
        <HeroButton />
        <Partners />
      </div>

      <div className="">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
