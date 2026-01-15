import React from "react";
import HeaderGeneral from "../Resue/HeaderGeneral";
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/generalHeader/type.png";
import vec from "../assets/SuccessStory/Vector.png";
import ht from "../assets/SuccessStory/Image.png";

const SuccessStory = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto py-10">
        <HeaderGeneral a={f} b={g} c={t} text="SUCCESS STORIES" des="DREAMS TURNED INTO REALITIES"/>
      </div>
      <div className="flex w-[70%] mx-auto my-20">
        <div className="w-full space-y-4">
          <p className="text-primary text-2xl font-bold">
            Visit Visa Approved for UK
          </p>
          <img src={vec} alt="" className="w-14" />
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamco rper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti ullamc
            orper posuere viverra .Aliquam eros justo, posu Aliquam eros justo,
            posuere loborti viverra laoreet matti ullamcorper posuere viverra
            .Aliquam eros justo, posuere lobo rtis viverra laoreet augue mattis
            fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere
            loborti viverra laoreet matti ullamcorper posuere
          </p>
          <div className="">
            <div className=" flex flex-col gap-2">
              <p><span className="font-medium">Visit Applied</span> : Visa Special</p>
              <p><span className="font-medium">Visa Type</span> : 10 years +</p>
              <p><span className="font-medium">Approval:</span> adbs@gmail.com</p>
            </div>
          </div>
          <div className=" flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-full">
              {" "}
              Apply For Visa
            </button>
            <button className="border-primary border  text-black px-6 py-3 rounded-full">
              {" "}
              Contact Us
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center overflow-hidden ">
          <img src={ht} alt="" className=" w-96 h-full object-contain " />
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
