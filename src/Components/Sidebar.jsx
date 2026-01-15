import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white rounded-md py-10 px-8 gap-2 md:w-72 flex flex-col shadow-md font-medium">
      <NavLink to="" className="flex justify-between items-center">Student visa  <IoIosArrowForward /></NavLink>
      <hr />
      <NavLink to="" className="flex justify-between items-center">Visit Visa <IoIosArrowForward /></NavLink>
      <hr />

      <NavLink to="" className="flex justify-between items-center" >Work Visa <IoIosArrowForward /></NavLink>
      <hr />

      <NavLink to="" className="flex justify-between items-center">Immigration <IoIosArrowForward /></NavLink>
      <hr />

      <NavLink to="" className="flex justify-between items-center">Uk Services <IoIosArrowForward /></NavLink>
      <hr />

      <NavLink to="" className="flex justify-between items-center">Visa Applications <IoIosArrowForward /></NavLink>
    </div>
  );
};

export default Sidebar;
