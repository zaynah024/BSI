import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import service from "../assets/Main/service5.png";
import service6 from "../assets/Main/service6.png";
import service3 from "../assets/Main/service3.png";
import service4 from "../assets/Main/service4.png";
import service1 from "../assets/Main/service1.png";
import service2 from "../assets/Main/service2.png";

const MotionLink = motion(Link);

const services = [
  { img: service, title: "Student Visa", href: "/study-visa" },
  { img: service6, title: "Visit Visa", href: "/visit-visa" },
  { img: service3, title: "Immigration", href: "/immigration" },
  { img: service4, title: "Consultancy", href: "/Book-Online-Consultancy" },
  { img: service1, title: "Work Visa", href: "/work-visa" },
  { img: service2, title: "UK Services", href: "/uk-services" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const OurServices = () => {
  return (
    <div className="bg-zinc-50 py-20">
      <div className="mx-auto w-[90%] md:w-[70%] flex flex-col gap-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-primary font-semibold">OUR SERVICES</p>
          <p className="text-3xl font-bold">
            Our Comprehensive Visa and <br /> Immigration Solutions
          </p>
          <p className="text-sm">
            We specialise in following services here at BSI Consultancy. Feel
            free to contact <br /> us for any of these.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-6 w-[70%] md:w-[80%] mx-auto">
          {services.map((item, i) => (
            <MotionLink
              key={i}
              to={item.href}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative cursor-pointer group inline-block"
            >
              {/* IMAGE */}
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-72 h-auto rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* LABEL */}
              <motion.span
                className="absolute bottom-2 left-2 px-8 py-2 rounded-md flex items-center gap-2 bg-white shadow-md"
              >
                {item.title}
                <motion.span
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight className="text-primary" />
                </motion.span>
              </motion.span>
            </MotionLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
