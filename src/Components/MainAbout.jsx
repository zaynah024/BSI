"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import replace from "../assets/Main/Replace.png";
import countries from "../assets/k.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* MAIN ABOUT SECTION */}
      <motion.div
        className="flex flex-col md:flex-row w-[90%] md:w-[70%] gap-10 mx-auto mt-12 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* TEXT */}
        <motion.div variants={fadeUp} className="w-full">
          <h2 className="text-sm text-primary font-bold mb-4">ABOUT US</h2>

          <h1 className="text-lg font-extrabold mb-2">
            Unveiling the Vision and Values of BSI Consultancy
          </h1>

          <p className="text-sm mb-6">
            Here at BSI Consultancy (a leading study abroad & immigration
            consultancy), we are dedicated to guiding aspiring international
            students through the study abroad process.
          </p>

          {/* VISION */}
          <motion.div variants={fadeUp} className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
            <h3 className="ml-2 font-bold text-primary">Our Vision</h3>
          </motion.div>

          <p className="text-sm mb-6">
            We aim to provide the best consultancy services to all our clients
            and guide them through the whole process.
          </p>

          {/* CEO */}
          <motion.div variants={fadeUp} className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <h3 className="ml-2 font-bold text-primary">Our CEO</h3>
          </motion.div>

          <p className="text-sm mb-6">
            Our CEO,{" "}
            <span className="font-medium">Barrister Shahroz Iqbal</span>, has
            over 8 years of experience in the education consultancy sector.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div variants={fadeUp} className="w-full">
          <img src={replace} alt="" />
        </motion.div>
      </motion.div>

      {/* COUNTRIES INFINITE STRIP */}
      <div className="w-full overflow-hidden mb-32">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate images for seamless loop */}
          <img src={countries} alt="" className="px-10" />
          <img src={countries} alt="" className="px-10" />
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
