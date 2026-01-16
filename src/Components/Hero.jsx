"use client";

import { CgArrowRight } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import font from "../assets/Main/herfont.png";
import tower from "../assets/lefttower.png";
import element from "../assets/generalHeader/elements.png";

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Floating background element — DESKTOP ONLY */}
      <motion.img
        src={element}
        alt=""
        className="absolute z-10 hidden md:block -left-52 -top-40 rotate-[10deg]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="bg-white relative py-10 px-4 md:px-24">
        <div className="container bg-zinc-50 rounded-3xl px-4 md:p-20 py-10 md:py-44 mx-auto flex flex-col md:flex-row justify-between">
          
          {/* LEFT CONTENT — ALWAYS VISIBLE */}
          <motion.div
            className="md:w-1/2 relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div variants={fadeUp} className="leading-3">
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Take A Step Now For
              </p>
              <p className="text-3xl md:text-5xl font-bold text-blue-500 mb-8">
                <span className="text-black">A</span> Brighter Future
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm md:pe-10 text-gray-600 mb-8"
            >
              Let's make your dream of studying abroad a reality. Visa processing
              now made easier than ever, only with BSI Consultancy.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <MotionLink
                to="/Book-Online-Consultancy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary rounded-full hover:bg-blue-700 text-white font-medium py-4 px-6 flex items-center gap-2 shadow-lg inline-flex"
              >
                Book Consultation
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <CgArrowRight />
                </motion.span>
              </MotionLink>

              <motion.button
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-gray-800 font-medium px-4 rounded-full"
              >
                <motion.span
                  className="p-4 bg-slate-200 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaPlay className="text-primary text-xl" />
                </motion.span>
                <span className="text-primary">Watch Our Videos</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE — DESKTOP ONLY */}
          <motion.div
            className="hidden md:block md:w-1/2 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={font}
              alt="Students looking at a tablet"
              className="rounded-lg -top-24 absolute pointer-events-none z-10"
            />
          </motion.div>
        </div>

        {/* Tower — DESKTOP ONLY */}
        <motion.img
          src={tower}
          alt=""
          className="absolute bottom-0 left-4 w-64 hidden md:block pointer-events-none z-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
};

export default Hero;
