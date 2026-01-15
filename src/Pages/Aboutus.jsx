import React from "react";
import about from "../assets/aboutus.png";
import b from "../assets/planleft.png";
import abb from "../assets/aboutb.png";
import { BiPhone } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IoCameraReverseSharp } from "react-icons/io5";

const Aboutus = () => {
  return (
    <div className="w-[80%] mx-auto py-20">
      <div className="flex w-[80%] mx-auto">
        <div className="w-full">
          <img src={about} alt="" className="w-96" />
        </div>
        <div className="w-full space-y-6">
          <p className="text-4xl text-primary">About Us</p>
          <p className="font-semibold">
            Unveiling the Vision and Values of BSI <br /> Consultancy
          </p>
          <p className="text-sm">
            Here at BSI Consultancy (a leading study abroad & immigration
            consultancy), we are dedicated to guiding aspiring international
            students through the study abroad process, providing expert advice
            and comprehensive resources on immigration requirements. Our team of
            experienced professionals understands the intricacies of studying
            overseas, and we are committed to helping you achieve your
            educational dreams in a foreign country.{" "}
          </p>
          <span className="px-8 py-2 inline-block font-medium bg-primary text-center text-white">
            {" "}
            SERVICES
          </span>
        </div>
      </div>
      <div className="flex w-[60%] items-center mx-auto ">
        <div className="w-full space-y-5">
          <p className="text-primary font-medium  tracking-[0.8rem]">
            Who We Are
          </p>
          <p className="text-6xl font-bold">Our Vision</p>
          <p>
            We aim to provide the best consultancy services to all our clients
            and guide them through the whole process, making it a seamless
            experience for them.
          </p>
        </div>
        <div className="w-full  ">
          <img
            src={b}
            alt=""
            className=" relative   -top-20 w-full h-full object-contain "
          />
        </div>
      </div>

      <div className="py-10">
        <div className="flex w-[80%] gap-10 mx-auto">
          <div className="w-full flex gap-8">
            <div className=" space-y-4">
              <img src={abb} />
            </div>
          </div>
          <div className="w-full space-y-4">
            <p className="text-primary font-medium">Why US</p>
            <p className="text-3xl font-bold">
              Small Enough to <span className="text-primary">Care</span> , Large
              Enough to Deliver{" "}
              <span className="text-primary"> Excellence</span>
            </p>
            <p className="text-sm text-gray-500">
              we offer expert guidance and personalized support tailored to your
              unique study abroad journey. Our experienced team provides
              comprehensive resources, including step-by-step guides and
              country-specific information, to help you navigate every aspect of
              the process.
            </p>
            <div className="flex gap-4 service">
              <div className="border rounded-3xl  w-full p-6">
                <div className="flex items-center  mb-3 gap-2">
                  <div className=" text-white rounded-full p-4 bg-primary">
                    <IoCameraReverseSharp />
                  </div>
                  <div className="text-sm">Expert Guidance</div>
                </div>
                <ul className="text-xs">
                  <li>Beyond Border Immigration</li>
                  <li>Worldwide Visa Assistance</li>
                </ul>
              </div>
              <div className="border rounded-3xl  w-full px-4 py-6 ">
                <div className="flex items-center mb-3 gap-2">
                  <div className=" text-white rounded-full p-4 bg-primary">
                    <IoCameraReverseSharp />
                  </div>
                  <div className="text-sm">Expert Guidance</div>
                </div>
                <ul className="text-xs">
                  <li>All Type of Visa Applications </li>
                  <li>Over 5+ years of experience</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="border-primary text-sm border rounded-3xl flex justify-center items-center py-3 px-8 gap-4">
                Contact Us <BsArrowRight />
              </div>
              <div className="flex items-start gap-4">
                <div className=" bg-primary text-white  p-4 rounded-full">
                  <BiPhone />
                </div>
                <div className="">
                  <p className="text-sm">Nedd Help?</p>
                  <p className="font-medium text-sm">+92 24628292</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
