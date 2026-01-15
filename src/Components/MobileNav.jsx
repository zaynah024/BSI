import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Login from "../assets/logo.png";

const MobileNav = () => {
  const [navbar, ShowNavbar] = useState(false);

  const closeMenu = () => ShowNavbar(false);

  return (
    <div className="bg-primary text-white block md:hidden p-4">
      <div className="flex justify-between items-center px-4 relative">
        <div className="relative flex items-center gap-2">
          <img src={Login} alt="" className="logo z-10 md:w-[120px]" />
          BSI CONSULTANCY
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full mblbtn card !bg-[#1E1825]">
            <button
              onClick={() => ShowNavbar(!navbar)}
              className="flex text-lg text-white bg-primary p-2"
            >
              {navbar ? <RxCross1 /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {navbar && (
        <div className="left-0 absolute z-50 py-4 bg-primary w-full">
          <ul className="w-full text-center space-y-4">

            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/Destination" onClick={closeMenu}>
                Destinations
              </NavLink>
            </li>

            <li>
              <NavLink to="/uk-services" onClick={closeMenu}>
                UK Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/Book-Online-Consultancy" onClick={closeMenu}>
                Book Online Consultation
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact-us" onClick={closeMenu}>
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
