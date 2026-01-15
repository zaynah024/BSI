import React from "react";
import HeaderGeneral from "../Resue/HeaderGeneral";
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/cnt.png";
import Sidebar from "../Components/Sidebar";
import { IoStar } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import uk from "../assets/Destination/uk.png";
import { MdArrowOutward } from "react-icons/md";
import SubScribe from "../UI/SubScribe";

const Destinations = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-10">
      <HeaderGeneral
        a={f}
        b={g}
        c={t}
        text="DESTINATIONS"
        des="Apply online now. Our team will get back to you soon."
      />
      <div className=" my-10 md:my-32 gap-10 flex flex-col md:flex-row">
        <div className="">
          <Sidebar />
        </div>
        <div className=" space-y-5">
          <p>
            At BSI Consultancy, we believe in quality over quantity. This is why
            we choose to deal only in countries we specialise in, instead of
            becoming jack of all trades. BSI Consultancy offers Visa
            Applications for following countries.
          </p>
          <p className="text-primary  text-xl  font-bold">
            Our Visa Application Services:
          </p>
          <ul className="space-y-4 ">
            <li className="flex items-center gap-4 ">
              {" "}
              <span className="text-primary text-2xl">
                <IoStar />{" "}
              </span>{" "}
              UK
            </li>
            <li className="flex items-center gap-4  ">
              {" "}
              <span className="text-primary text-2xl">
                <IoStar />{" "}
              </span>{" "}
              USA
            </li>
            <li className="flex items-center gap-4  ">
              {" "}
              <span className="text-primary text-2xl">
                <IoStar />{" "}
              </span>{" "}
              CANADA
            </li>
            <li className="flex items-center gap-4  ">
              {" "}
              <span className="text-primary text-2xl">
                <IoStar />{" "}
              </span>{" "}
              NEW ZELAND
            </li>
            <li className="flex items-center gap-4  ">
              {" "}
              <span className="text-primary text-2xl">
                <IoStar />{" "}
              </span>{" "}
              AUSTRALIA
            </li>
            <li className="flex items-center gap-4  ">
              {" "}
              <span className="text-primary text-2xl">
                <IoStar />{" "}
              </span>{" "}
              FINLAND
            </li>
          </ul>
        </div>
      </div>
      <div className=" my-10 md:my-32 ">
        <div className=" text-center space-y-3">
          <p className="uppercase text-primary">VISA APPLICATION support</p>
          <p className="text-4xl font-bold">
            Let’s Start your Visa <br /> Application
          </p>
        </div>
        <div className="grid mt-10 gap-10 grid-cols-1 md:grid-cols-3">
          {["UK", "USA", "AUSTRALIA", "FINLAND", "CANADA", "NEW ZEALAND"].map((val, i) => {
            return <div key={i} className="flex">
              <div className="">
                <img src={uk} alt="" />
              </div>

              <div className="flex items-c flex-col justify-center space-y-3 ps-3">
                <p className="text-primary font-medium">{val}</p>
                <p className="text-gray-600">Contact us now to discuss opportunities in {val}.</p>
                <p>
                  <NavLink to="" className="flex items-center gap-2 text-primary">Contact us <MdArrowOutward /></NavLink>
                </p>
              </div>
            </div>
          })}
        </div>
        
        <SubScribe/>
      </div>
    </div>
  );
};

export default Destinations;
