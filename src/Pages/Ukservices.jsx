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
import pic from "../assets/vv.png";
import Frame from "../assets/ukservice/Frame.png";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowRightLong, FaLocationArrow } from "react-icons/fa6";
import pic1 from "../assets/ukservice/1.png"
import pic2 from "../assets/ukservice/2.png"
import pic3 from "../assets/ukservice/3.png"
import pic4 from "../assets/ukservice/4.png"
import pic5 from "../assets/ukservice/5.png"


const Ukservices = () => {
  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto mt-10">
        <HeaderGeneral
          a={f}
          b={g}
          c={t}
          text="UK SERVICES"
          des="Apply online now. Our team will get back to you soon."
        />
        <div className="my-32 gap-10 flex flex-col md:flex-row">
          <div className="">
            <Sidebar />
          </div>
          <div className=" space-y-5">
            <p>
              At BSI Consultancy, we believe in quality over quantity. This is why
              we choose to deal only in countries we specialise in, instead of
              becoming jack of all trades. BSI Consultancy offers many services
              for UK.
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
                Work Visa Application
              </li>
              <li className="flex items-center gap-4  ">
                {" "}
                <span className="text-primary text-2xl">
                  <IoStar />{" "}
                </span>{" "}
                Dependants Visa Applications
              </li>
              <li className="flex items-center gap-4  ">
                {" "}
                <span className="text-primary text-2xl">
                  <IoStar />{" "}
                </span>{" "}
                Administrative Review
              </li>
              <li className="flex items-center gap-4  ">
                {" "}
                <span className="text-primary text-2xl">
                  <IoStar />{" "}
                </span>{" "}
                Pre Action Protocol
              </li>
              <li className="flex items-center gap-4  ">
                {" "}
                <span className="text-primary text-2xl">
                  <IoStar />{" "}
                </span>{" "}
                UK Entry Ban Removal
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#3365E31A] rounded-2xl pt-20 px-4 md:px-40 pb-40">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-10 md:py-20 space-y-2">
            <p className="text-primary font-medium flex items-center gap-2" >SERVICE WE OFFER <FaLocationArrow /> </p>
            <p className="text-primary text-5xl font-bold">List Of  Our UK  Services</p>
          </div>
          {[{ imges: pic5, title: "Work Visa Application", Des: "We offer work visa applications after assessing your eligibility." },
          { imges: pic4, title: "Work Visa Application", Des: "There are many variety of pathways for dependants visa applications." },
          { imges: pic1, title: "Administrative Review", Des: "We offer administrative review services for UK." },
          { imges: pic3, title: "Pre Action Protocol", Des: "We offer our services for pre action protocol for UK." },
          { imges: pic2, title: "UK Entry Ban Removal", Des: "We help our services and guidance on how to remove you entry ban for UK." },
          ].map((val, i) => {
            return <div key={i} className="bg-white p-8 rounded-xl">

              <div className=" space-y-4">
                <div className="flex  ">
                  <div className="border rounded-full p-3 ">
                    <img src={val.imges} alt="" />
                  </div>
                </div>
                <p className="text-primary font-medium text-lg">{val.title}</p>
                <p className="text-gray-500 text-sm">{val.Des}</p>
                <p className="text-primary flex items-center gap-2">Contact Us <FaArrowRightLong /></p>
              </div>
            </div>

          })}


        </div>
      </div>
      <div className=" w-[90%] md:w-[80%] mx-auto relative md:-top-40 ">

        <div className="  ">



          <div className="rounded-2xl flex flex-col md:flex-row bg-primary my-20 md:p-10 ">
            <div
              className="w-full space-y-10 p-10 "
              style={{
                backgroundImage: `url(${pic})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: "99"
              }}
            >
              <div className="text-white space-y-3">
                <p className=" font-bold text-4xl">
                  Are You ready to Start ?
                </p>
                <p className="text-sm">All the Solutions relating to your travel to UK at one place only at BSI Consultancy.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                <input
                  type="text"
                  className="rounded-full px-4 p-2 placeholder:text-white border-white text-white bg-transparent w-full outline-none border"
                  placeholder="Enter Email"
                />
                <button className="rounded-full w-48 bg-white text-primary px-4 py-2">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-full flex  justify-center">
              <img src={Frame} alt="" className="w-72 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ukservices;
