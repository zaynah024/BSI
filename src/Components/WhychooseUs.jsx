import React from "react";
import { motion } from "framer-motion";
import us from "../assets/Main/us (1).png";
import us1 from "../assets/Main/us (2).png";
import us3 from "../assets/Main/us (3).png";
import us4 from "../assets/Main/us4.png";
import { IoCameraReverseSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";

const services = [
  {
    icon: <IoCameraReverseSharp />,
    title: "Expert Guidance",
    items: ["Beyond Border Immigration", "Worldwide Visa Assistance"],
  },
  {
    icon: <IoCameraReverseSharp />,
    title: "Expert Guidance",
    items: ["All Type of Visa Applications", "Over 5+ years of experience"],
  },
];

const WhychooseUs = () => {
  return (
    <div className="py-24">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[65%] gap-10 mx-auto">
        {/* IMAGE GRID */}
        <motion.div
          className="w-full flex gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <motion.img
              src={us1}
              className="rounded-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={us}
              className="rounded-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="space-y-4">
            <motion.img
              src={us4}
              className="rounded-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={us3}
              className="rounded-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* TEXT + CARDS */}
        <motion.div
          className="w-full space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium">Why CHOOSE US</p>
          <p className="text-3xl font-bold">
            Small Enough to <span className="text-primary">Care</span>, Large
            Enough to Deliver <span className="text-primary">Excellence</span>
          </p>
          <p className="text-sm text-gray-500">
            We offer expert guidance and personalized support tailored to your
            unique study abroad journey. Our experienced team provides
            comprehensive resources, including step-by-step guides and
            country-specific information, to help you navigate every aspect of
            the process.
          </p>

          {/* SERVICE CARDS */}
          <div className="flex gap-4 service">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="border rounded-3xl w-full p-6 cursor-pointer hover:shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-3 gap-2">
                  <div className="text-white rounded-full p-4 bg-primary">
                    {service.icon}
                  </div>
                  <div className="text-sm">{service.title}</div>
                </div>
                <ul className="text-xs">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CONTACT BUTTON + PHONE */}
          <div className="flex gap-6">
            <motion.a
              href="/contact-us"
              className="border-primary text-sm border rounded-3xl flex justify-center items-center py-3 px-8 gap-4 cursor-pointer hover:bg-primary hover:text-white transition-colors inline-flex"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us{" "}
              <motion.span
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
              >
                <BsArrowRight />
              </motion.span>
            </motion.a>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-4 rounded-full">
                <BiPhone />
              </div>
              <div>
                <p className="text-sm">Need Help?</p>
                <p className="font-medium text-sm">+92 24628292</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhychooseUs;
