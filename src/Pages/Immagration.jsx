import React from "react";
import HeaderGeneral from "../Resue/HeaderGeneral";
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/cnt.png";
import Sidebar from "../Components/Sidebar";

import Tabpanel from "../assets/immgration/2.png";



import SubScribe from "../UI/SubScribe";
import { MdArrowOutward } from "react-icons/md";
import { IoStar } from "react-icons/io5";
const Immagration = () => {
    return (
        <>
            <div className="w-[80%] mx-auto mt-10">
                <HeaderGeneral
                    a={f}
                    b={g}
                    c={t}
                    text="Immigration"
                    des="Apply online now. Our team will get back to you soon."
                />
                <div className="my-32 gap-10 flex">
                    <div className="">
                        <Sidebar />
                    </div>
                    <div className=" space-y-5">
                        <p>
                            At BSI Consultancy, we believe in quality over quantity. This is why we choose to deal only in countries we specialise in, instead of becoming jack of all trades. BSI Consultancy offers immigration services for following countries.
                        </p>
                        <div className="flex gap-8 w-full ">
                            <div className="flex gap-4 shadow-xl p-4 rounded-2xl w-[70%]">
                                <img src={Tabpanel} className="w-44 object-contain" alt="" />
                                <div className=" w-full flex   flex-col  justify-between py-3">
                                    <p className="font-bold text-green-900  text-lg">Australian Skilled Immigration</p>
                                    <p className="text-gray-600 text-sm">We help  you navigate the process of obtaining a skilled worker visa, ensuring a smooth path to living and working in Australia.</p>
                                    <div className="flex gap-2 items-center text-primary ">
                                        <div className="  border rounded-2xl border-primary p-3 text-primary">
                                            <MdArrowOutward />
                                        </div>
                                        <p className="text-sm"> Apply Now</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[30%] flex items-center justify-center flex-col text-primary">

                                <p className="text-8xl font-bold">1</p>
                                <div className="flex   ">
                                    <p className="items-center flex gap-2 text-primary border p-3 rounded-2xl">view Details <MdArrowOutward /></p>
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className="flex gap-8 w-full ">

                            <div className="w-[30%] flex items-center justify-center flex-col text-primary">

                                <p className="text-8xl font-bold">2</p>
                                <div className="flex   ">
                                    <p className="items-center flex gap-2 text-primary border p-3 rounded-2xl">view Details <MdArrowOutward /></p>
                                </div>
                            </div>
                            <div className="flex gap-4 shadow-xl p-4 rounded-2xl w-[70%]">
                                <img src={Tabpanel} className="w-44 object-contain" alt="" />
                                <div className=" w-full flex   flex-col  justify-between py-3">
                                    <p className="font-bold text-green-900  text-lg">Canadian Express Entry</p>
                                    <p className="text-gray-600 text-sm">Our  services streamline your application process, maximizing your chances of securing permanent residency in Canada.</p>
                                    <div className="flex gap-2 items-center text-primary ">
                                        <div className="  border rounded-2xl border-primary p-3 text-primary">
                                            <MdArrowOutward />
                                        </div>
                                        <p className="text-sm"> Apply Now</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <p className="text-4xl font-bold text-center">AUSTRALIAN SKILLED <br /> IMMIGRATION</p>
                            <p className="text-primary font-bold mb-3 text-2xl">OUR SERVIES</p>
                            <ul className="space-y-4 ">
                                <li className="flex items-center gap-4 ">
                                    {" "}
                                    <span className="text-primary text-2xl">
                                        <IoStar />{" "}
                                    </span>{" "}
                                    IML Assessment (Managers & Leaders)
                                </li>
                                <li className="flex items-center gap-4  ">
                                    {" "}
                                    <span className="text-primary text-2xl">
                                        <IoStar />{" "}
                                    </span>{" "}
                                    ACS/RPL (For ICT Professionals)
                                </li>
                                <li className="flex items-center gap-4  ">
                                    {" "}
                                    <span className="text-primary text-2xl">
                                        <IoStar />{" "}
                                    </span>{" "}
                                    NER (National Engineering Register)
                                </li>
                                <li className="flex items-center gap-4  ">
                                    {" "}
                                    <span className="text-primary text-2xl">
                                        <IoStar />{" "}
                                    </span>{" "}
                                    Chartered Engineer Assessment
                                </li>
                                <li className="flex items-center gap-4  ">
                                    {" "}
                                    <span className="text-primary text-2xl">
                                        <IoStar />{" "}
                                    </span>{" "}
                                    AIQS Assessment (Quantity Surveyors)
                                </li>
                                <li className="flex items-center gap-4  ">
                                    {" "}
                                    <span className="text-primary text-2xl">
                                        <IoStar />{" "}
                                    </span>{" "}
                                    AACA Assessment (Architects)
                                </li>
                                <li className="flex items-center gap-4  ">
                                    {" "}
                                    <span className="text-primary text-2xl">
                                        <IoStar />{" "}
                                    </span>{" "}
                                    VETASSES / TRA Assessments
                                </li>

                            </ul>
                        </div>
                        <div className="">
                            <p className="text-2xl font-bold text-primary">Why you should consider migrating to Australia?</p>
                            <p className="font-medium my-3">Here are the key points for why one should consider migrating to Australia:</p>
                            <ol className="font-medium space-y-3">
                                <li>
                                    1. <b>High Quality of Life :</b> Australia is known for its excellent healthcare and education systems.

                                </li>
                                <li>
                                    2. <b> Diverse Landscapes :</b> The country offers a wide range of natural scenery and outdoor activities.

                                </li>
                                <li>
                                    3. <b>Vibrant Cities : </b>Major cities provide rich cultural experiences and entertainment options.

                                </li>
                                <li>
                                    4. <b>Strong Economy :</b> Australia has a robust job market with opportunities in various sectors.

                                </li>
                                <li>
                                    5. <b>Welcoming Environment :</b> The multicultural society encourages community and connection among newcomers.

                                </li>
                                <li>

                                    6. <b>Safety and Stability :</b> Australia is generally regarded as a safe and politically stable country.

                                </li>
                            </ol>
                            <p>
                                These points highlight the numerous benefits of migrating to Australia.
                            </p>
                        </div>


                    </div>
                </div>
            </div>

            <div className="w-[80%] mx-auto relative  ">
                <SubScribe />

            </div>
        </>
    )
}

export default Immagration