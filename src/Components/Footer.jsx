import React from "react";
import { BiPhone } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoCameraReverseSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import { CgArrowRight } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="py-10 bg-primary footer">
      <div className="w-[90%] md:w-[70%] mx-auto">
        <div className="w-full flex  pb-6 ">
          <div className="flex w-full md:border-r  border-white/35 justify-start items-center mb-3 gap-4">
            <div className="  rounded-full p-4 bg-white">
              <FiPhone className="text-2xl text-primary" />
            </div>
            <div className=" text-sm md:text-xl font-medium text-white">
              Need any support for <br /> your visa application?
            </div>
          </div>
          <div className="flex w-full justify-center items-center mb-3 gap-4">
            <div className=" rounded-full p-4 bg-white">
              <FaPlay className="text-xl text-primary" />
            </div>
            <div className="text-sm md:text-xl font-medium text-white">
              Need more Information? <br /> Watch our videos on youtube
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/30 py-14">
        <div className="grid md:grid-cols-4 gap-10 text-white mx-auto w-[70%]">
          <div className=" space-y-4 pt-4">
            <div className="flex items-center ">
              <a href="/" className="mr-2">
                <img src={logo} alt="" />
              </a>
              <a href="/" className="text-xl font-medium text-white     ">
                BSI CONSULTANCY
              </a>
            </div>
            <div className=" text-white font-thin text-sm">
              Feel free to reach us for any guidance or advise for your career
              path or immigration services.
            </div>
          </div>
          <div className="">
            <p className="text-xl text-white font-medium mb-4">Services</p>
            <ul className="flex flex-col gap-4">
              <li>Visa Application</li>
              <li>Student Visa</li>
              <li>Work Visa</li>
              <li>Visit Visa</li>
              <li>Immigration</li>
              <li>UK Services</li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl text-white font-medium mb-4">Useful Links</p>
            <ul className="flex flex-col gap-4">
              <li>Youtube</li>
              <li>Whatsapp</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Our CEO</li>
            </ul>
          </div>
          <div className=" space-y-5">
            <p className="text-xl text-white font-medium mb-4">Subscribe Our Newsletter</p>
            <p>
              Subscribe to get latest information about visas and country
              policies.
            </p>
            <div className="bg-black rounded-full  flex  py-2 px-4">
              <input
                type="text"
                className="w-full text-sm outline-none bg-transparent"
                placeholder="Enter E-Mail"
              />
              <div className="bg-white p-2 rounded-full ">
              <span>
                <CgArrowRight className="text-black " />{" "}
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t pt-10 border-white/30  ">
        <div className="w-[70%] mx-auto  flex justify-end">
          <ul className="flex gap-4 text-white/80">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
