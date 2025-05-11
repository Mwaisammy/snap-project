"use client";

import React, { useState } from "react";
import TodoIcon from "../../assets/images/icon-todo.svg";
import CalendarIcon from "../../assets/images/icon-calendar.svg";
import RemindersIcon from "../../assets/images/icon-reminders.svg";
import PlanningIcon from "../../assets/images/icon-planning.svg";
import ArrowDownIcon from "../../assets/images/icon-arrow-down.svg";

const NavLinks = () => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <nav className="flex items-center gap-6 text-gray-600 text-sm relative">
      {/* Features Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleMenu("features")}
          className="flex items-center gap-1 hover:text-black cursor-pointer"
        >
          Features
          <img src={ArrowDownIcon} alt="arrow down" className="w-2 h-2" />
        </button>
        {openMenu === "features" && (
          <div className="absolute flex flex-col top-8 left-0 bg-white shadow-lg rounded-lg py-3 px-4 space-y-3 z-20">
            <DropdownItem
              icon={<img src={TodoIcon} alt="todo" />}
              label="Todo List"
            />
            <DropdownItem
              icon={<img src={CalendarIcon} alt="calendar" />}
              label="Calendar"
            />
            <DropdownItem
              icon={<img src={RemindersIcon} alt="reminders" />}
              label="Reminders"
            />
            <DropdownItem
              icon={<img src={PlanningIcon} alt="planning" />}
              label="Planning"
            />
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleMenu("company")}
          className="flex items-center gap-1 hover:text-black cursor-pointer"
        >
          Company
          <img src={ArrowDownIcon} alt="arrow down" className="w-2 h-2" />
        </button>
        {openMenu === "company" && (
          <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-4 px-6 space-y-2 z-20">
            <p className="hover:font-semibold cursor-pointer">History</p>
            <p className="hover:font-semibold cursor-pointer">Our Team</p>
            <p className="hover:font-semibold cursor-pointer">Blog</p>
          </div>
        )}
      </div>

      {/* Regular Links */}
      <a href="/careers" className="hover:text-black">
        Careers
      </a>
      <a href="/about" className="hover:text-black">
        About
      </a>
    </nav>
  );
};

const DropdownItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:font-semibold">
      <span className="text-indigo-500">{icon}</span>
      <p>{label}</p>
    </div>
  );
};

export default NavLinks;
