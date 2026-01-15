import React, { useState } from "react";
import HeaderGeneral from "../Resue/HeaderGeneral";
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/cnt.png";
import Sidebar from "../Components/Sidebar";

import pic1 from "../assets/visitvisa/__before.png";
import pic11 from "../assets/visitvisa/__before (1).png";

import pic4 from "../assets/visitvisa/finland.png";
import uk from "../assets/uk.png";
import aus from "../assets/australia.png";
import fin from "../assets/finland.png";
import one from "../assets/visitvisa/Rectangle 5689.png";
import two from "../assets/visitvisa/Rectangle 5690.png";
import three from "../assets/visitvisa/Rectangle 5691.png";
import four from "../assets/visitvisa/Rectangle 5692.png";







import SubScribe from "../UI/SubScribe";
import { MdArrowOutward } from "react-icons/md";

const StudyVisa = () => {
    const [selectedCountry, setselectedCountry] = useState(1)
    return (
        <>
            <div className="w-[90%] md:w-[80%] mx-auto mt-10">
                <HeaderGeneral
                    a={f}
                    b={g}
                    c={t}
                    text="Study Visa"
                    des="Apply online now. Our team will get back to you soon."
                />
                <div className=" my-10 md:my-32 gap-10 flex flex-col md:flex-row">
                    <div className="">
                        <Sidebar />
                    </div>
                    <div className=" space-y-5">
                        <p>
                            At BSI Consultancy, we believe in quality over quantity. This is why we choose to deal only in countries we specialise in, instead of becoming jack of all trades. BSI Consultancy offers Student visas in following countries.
                        </p>
                        <div className="">
                            <div className="w-full grid m:grid-cols-3 gap-8">
                                {[
                                    { img: pic1, title: "UK" },
                                    { img: pic11, title: "AUSTRALIA" },
                                    { img: pic4, title: "FINLAND" },
                                ].map((val, i) => {
                                    return (
                                        <div
                                            className=" relative overflow-hidden mx-auto rounded-xl"
                                            key={i}
                                        >
                                            <div className="flex absolute gap-2 items-center    blur-xs w-48 bottom-5 left-2 bg-gray-400/80 pe-5 p-1 rounded-full  ">
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

                        <div className=" space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div onClick={() => setselectedCountry(1)} className={`${selectedCountry == 1 && "border-primary"} cursor-pointer border w-full border-b-0 rounded-t-2xl pt-8  px-8 flex  gap-4 flex-col justify-center  items-center`}>
                                    <div className="flex justify-center ">
                                        <img src={uk} alt="" />

                                    </div>
                                    <p className="font-bold text-lg">WHY STUDY IN UK?</p>
                                </div>
                                <div onClick={() => setselectedCountry(2)} className={`${selectedCountry == 2 && "border-primary"} cursor-pointer border w-full border-b-0 rounded-t-2xl pt-8  px-8 flex  gap-4 flex-col justify-center  items-center`}>

                                    <div className="flex justify-center">
                                        <img src={aus} alt="" />

                                    </div>
                                    <p className="font-bold ">WHY STUDY IN AUSTRALIA?</p>
                                </div>
                                <div onClick={() => setselectedCountry(3)} className={`${selectedCountry == 3 && "border-primary"} cursor-pointer border w-full border-b-0 rounded-t-2xl pt-8  px-8 flex  gap-4 flex-col justify-center  items-center`}>

                                    <div className="flex justify-center">
                                        <img src={fin} alt="" />

                                    </div>
                                    <p className="font-bold  text-lg    ">WHY STUDY IN FINLAND?</p>
                                </div>



                            </div>
                            <div className="">
                                <p>
                                    Studying in the UK offers numerous advantages. Firstly, the UK is home to some of the world's leading universities, known for their high academic standards and research opportunities. Secondly, the diverse cultural environment provides a rich experience, allowing you to meet people from various backgrounds. Additionally, studying in the UK can enhance your employability, as many employers value international experience and the skills gained from studying abroad. Lastly, the UK's historical significance and vibrant cities offer a unique backdrop for your educational journey.
                                </p>
                                <br />
                                <p>
                                    Institutions like the University of Oxford and the University of Cambridge consistently rank among the top universities globally, offering a wide range of disciplines and fostering critical thinking, research, and innovation. Other notable universities include Imperial College London, University College London (UCL), and the London School of Economics (LSE), all renowned for their contributions to science, technology, politics, and business. UK universities attract students from across the globe due to their diverse and inclusive environments, high-quality education, and strong ties to industry and research.
                                </p>
                            </div>
                            <div className="grid  grid-cols-2 md:grid-cols-4  my-4 gap-2 items-center">
                                <img src={one} alt="" />
                                <img src={two} alt="" />
                                <img src={three} alt="" />
                                <img src={four} alt="" />

                            </div>
                            <div className=" space-y-4">
                                <p>There are several compelling reasons why foreign students choose to study in the UK:</p>
                                <br />
                                <p>
                                    <b>  World-Class Education:</b> The UK is home to some of the most prestigious universities in the world, offering high-quality education and a wide range of courses across diverse fields. British institutions are known for their rigorous academic standards and innovative research.
                                </p>
                                <p><b>Cultural and Historical Richness:</b> Studying in the UK provides an opportunity to experience its rich history, culture, and traditions. From historic landmarks to diverse arts scenes, students can immerse themselves in a vibrant cultural environment while pursuing their studies.</p>
                                <p>
                                    <b>
                                        Global Recognition:</b> A degree from a UK university is highly respected worldwide, enhancing career prospects. UK universities consistently rank high in global league tables, and their qualifications are recognized by employers across the globe.
                                </p>
                                <p>
                                    <b>
                                        Multicultural Environment:</b> The UK is a melting pot of cultures, and universities reflect this diversity. International students often feel welcome and supported in this inclusive environment, offering opportunities to meet people from around the world and broaden their perspectives
                                </p>
                                <p>
                                    <b>
                                        Research Opportunities:</b> The UK is a global leader in research and innovation. Students have access to cutting-edge facilities and the chance to work on groundbreaking projects, often alongside leading experts in their fields.</p>
                                <p>
                                    <b>Shorter Degree Duration:</b> Many UK degrees, especially at the undergraduate level, are shorter in duration compared to those in other countries. For example, bachelor's degrees typically take three years, and master's programs often take just one year, making it an efficient option for students looking to complete their studies quickly.
                                </p>
                                <p>
                                    <b>Work Opportunities:</b> International students are allowed to work part-time during their studies, helping them gain valuable work experience, improve language skills, and support their finances. Additionally, some universities offer placement or internship opportunities that can enhance career prospects.</p>
                                <p>
                                    <b>
                                        Post-Graduation Visa Options:</b> The UK offers a Graduate Route visa that allows international students to stay for up to two years (three years for doctoral graduates) after completing a degree in the UK, providing time to gain work experience and build a career.
                                </p>
                                <p>
                                    <b>Quality of Life:</b> The UK offers a high standard of living, with excellent public services, healthcare, and a variety of leisure activities. Students can enjoy a balanced life while studying, whether exploring the countryside, attending world-class theatre performances, or visiting museums.
                                </p>
                                <p>
                                    <b>
                                        Access to Global Networks:</b> Studying in the UK allows students to connect with a global network of alumni and professionals, opening doors to international career opportunities and collaborations.
                                </p>
                                <p>
                                    These factors make the UK a top destination for international students seeking a world-class education and a dynamic, enriching experience.
                                </p>






                            </div>

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

export default StudyVisa