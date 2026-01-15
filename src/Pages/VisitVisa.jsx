import React from "react";
import HeaderGeneral from "../Resue/HeaderGeneral";
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/cnt.png";
import Sidebar from "../Components/Sidebar";

import Tabpanel from "../assets/Tabpanel → Link.png";
import pic1 from "../assets/visitvisa/__before.png";
import pic2 from "../assets/visitvisa/__before (2).png";
import pic11 from "../assets/visitvisa/__before (1).png";

import pic3 from "../assets/visitvisa/__before (3).png";
import pic4 from "../assets/visitvisa/__before (4).png";

import SubScribe from "../UI/SubScribe";
import { MdArrowOutward } from "react-icons/md";
const VisitVisa = () => {
    return (
        <>
            <div className="w-[80%] mx-auto mt-10">
                <HeaderGeneral
                    a={f}
                    b={g}
                    c={t}
                    text="Visit Visa"
                    des="Apply online now. Our team will get back to you soon."
                />
                <div className="my-32 gap-10 flex">
                    <div className="">
                        <Sidebar />
                    </div>
                    <div className=" space-y-5">
                        <p>
                            At BSI Consultancy, we believe in quality over quantity. This is
                            why we choose to deal only in countries we specialise in, instead
                            of becoming jack of all trades. BSI Consultancy offers visit visas
                            in following countries.
                        </p>
                        <div className="">
                            <div className="w-full grid grid-cols-3 gap-8">
                                {[
                                    { img: pic1, title: "UK" },
                                    { img: pic11, title: "AUSTRALIA" },
                                    { img: pic2, title: "USA" },
                                    { img: pic3, title: "CANADA" },
                                    { img: pic4, title: "NEW ZEELAND" },
                                ].map((val, i) => {
                                    return (
                                        <div
                                            className=" relative overflow-hidden rounded-xl"
                                            key={i}
                                        >
                                            <div className="flex absolute gap-2 items-center  blur-xs w-48 bottom-5 left-2 bg-gray-400/80 pe-5 p-1 rounded-full  ">
                                                <div className="bg-white rounded-full p-2">
                                                    <MdArrowOutward className="text-xl text-primary" />
                                                </div>
                                                <span className="text-white">{val.title}</span>
                                            </div>
                                            <img src={val.img} alt="" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="">
                            <p className="font-bold text-2xl mb-4">Requirements</p>
                            <div className="grid grid-cols-2 gap-1">
                                <li> Valid Passport</li>
                                <li> Passport-sized Photographs</li>
                                <li>Proof of Travel Arrangements</li>
                                <li>Proof of Accommodation</li>
                                <li>Financial Means</li>

                                <li>Travel Insurance</li>

                                <li>Proof of Employment or Income</li>
                                <li>Purpose of Visit</li>
                            </div>
                        </div>
                        <div className="">
                            <p>
                                Visiting foreign countries opens up opportunities to experience
                                new cultures, broaden your perspective, and foster personal
                                growth. It also helps you build global connections, enhancing
                                both your career and personal life. Traveling abroad allows you
                                to learn new languages, understand different ways of life, and
                                even gain access to international job markets and education.

                                <br />
                                <br /> At
                                BSI Consultancy, we specialise in making your journey to foreign
                                countries seamless. Our expert team offers personalised
                                services, from visa applications and documentation preparation
                                to guiding you through immigration laws and job search
                                strategies. We help you navigate the complexities of moving
                                abroad, ensuring you feel confident every step of the way.
                                Whether you're seeking educational opportunities, career growth,
                                or a fresh start, we're here to provide you with the support and
                                knowledge needed for a successful international transition.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[80%] mx-auto relative  ">
                <SubScribe />
            </div>
        </>
    );
};

export default VisitVisa;
