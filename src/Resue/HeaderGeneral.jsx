import React from "react";
import logo2 from "../assets/logo2.png";

const HeaderGeneral = ({ a, b, c, text, des }) => {
  return (
    <div>
      <div className="bg-zinc-50 text-center relative space-y-4 rounded-3xl p-12 overflow-hidden">
        <img src={b} alt="" className="absolute -top-64 -left-20" />

        <p className="text-4xl font-bold ">{text}</p>
        <p>{des}</p>
      </div>

      <img
        src={a}
        alt=""
        className="absolute hidden md:block top-60 left-10 w-48"
      />
      <img
        src={c}
        alt=""
        className="absolute  hidden md:block top-72 right-52  w-40"
      />
    </div>
  );
};

export default HeaderGeneral;
