import React from "react";
import HeaderGeneral from "../Resue/HeaderGeneral";
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/cnt.png";
import Sidebar from "../Components/Sidebar";

import Tabpanel from "../assets/Tabpanel → Link.png";



import SubScribe from "../UI/SubScribe";

const WorkVisa = () => {
    return (
        <>
            <div className="w-[80%] mx-auto mt-10">
                <HeaderGeneral
                    a={f}
                    b={g}
                    c={t}
                    text="Work Visa"
                    des="Apply online now. Our team will get back to you soon."
                />
                <div className="my-32 gap-10 flex">
                    <div className="">
                        <Sidebar />
                    </div>
                    <div className=" space-y-5">
                        <p>
                            At BSI Consultancy, we believe in quality over quantity. This is why we choose to deal only in countries we specialise in, instead of becoming jack of all trades. BSI Consultancy offers work visas in following countries.
                        </p>
                        <div className="flex gap-8">
                            <div className="w-full">
                                <img src={Tabpanel} alt="" />
                            </div>
                            <div className=" w-full flex justify-center items-center flex-col space-y-4">
                                <p className="font-bold  text-2xl">We specialise in work visa application for uk with 80% success ratio </p>
                                <p>We do not offer work permits, we only do visa applications for uk work permits.</p>

                            </div>
                        </div>

                        <p>

                            At BSI Immigration Consultancy, we specialise in assisting individuals with the visa application process for work permits in the UK. Navigating the UK's immigration system can be complex, but our team of experts is here to simplify the process. From selecting the right visa type to compiling the necessary documents, we guide you through each step to ensure your application is submitted accurately and on time. Whether you're seeking to advance your career or explore new professional opportunities, we are committed to helping you secure your UK work permit with confidence and ease.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[80%] mx-auto relative  ">
                <SubScribe />

            </div>
        </>
    )
}

export default WorkVisa