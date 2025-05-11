import React from "react";
import DatabizLogo from "../../assets/images/client-databiz.svg";
import AudiophileLogo from "../../assets/images/client-audiophile.svg";
import MeetLogo from "../../assets/images/client-meet.svg";
import MakerLogo from "../../assets/images/client-maker.svg";

const Partners = () => {
  return (
    <div className="flex justify-center items-center gap-8 py-8 bg-gray-100">
      <img src={DatabizLogo} alt="Databiz" className="h-6 opacity-50" />
      <img src={AudiophileLogo} alt="Audiophile" className="h-6 opacity-50" />
      <img src={MeetLogo} alt="Meet" className="h-6 opacity-50" />
      <img src={MakerLogo} alt="Maker" className="h-6 opacity-50" />
    </div>
  );
};

export default Partners;
