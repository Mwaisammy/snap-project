import React from "react";
import NavLinks from "./navlinks";
import AuthLinks from "./authlinks";

const Navigation = () => {
  return (
    <div className="  ">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-3xl font-bold">snap</h2>
          <div>
            <NavLinks />
          </div>
        </div>

        <div>
          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
