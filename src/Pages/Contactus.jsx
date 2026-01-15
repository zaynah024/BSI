import React, { useState } from "react";
import HeaderGeneral from "../Resue/HeaderGeneral";
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/generalHeader/type.png";
import plan from "../assets/plan.png";
import cnt from "../assets/cnt.png";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BiPhone } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "../Config/Constants";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        `${BASE_URL}api/contact-form/`,
        formData
      );
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:w-[80%] mx-auto py-10">
      <HeaderGeneral
        a={f}
        b={g}
        c={cnt}
        text="CONTACT US"
        des="Let's make your dreams a reality."
      />
      <div className="flex w-[90%] gap-20 mx-auto md:flex-row flex-col mb-20 mt-20 md:mt-40">
        <div className="w-full space-y-4">
          <div className="space-y-4">
            <p className="text-sm text-primary font-semibold">Get In Touch</p>
            <p className="text-4xl font-semibold">Need a quote? Get in Touch</p>
            <p className="text-sm text-gray-700">
              At nullam leo consectetur euismod enim. Orci donec sapien et
              semper fringilla pellentesque in diam mi. Pulvinar ante sed velit
              ac nibh.
            </p>
          </div>
          <div className="bg-primary  flex justify-center items-center py-28 p-20">
            <img src={plan} className="w-32" alt="" />
          </div>
        </div>
        <div className="w-full bg-[#F1F4FF] p-8 md:mx-10">
          <p className="text-2xl text-center font-semibold">
            Contact Us Now to Get Free Quote from Our Experts!
          </p>
          {submitStatus && (
            <div
              className={`mt-4 p-4 rounded-md ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md"
              placeholder="Your Email"
              required
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded-md"
              placeholder="Your Phone Number"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 rounded-md"
              cols={10}
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary text-white rounded-md py-4 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            >
              {isSubmitting ? "Sending..." : "Get a Free Quote!"}
            </button>
          </form>
        </div>
      </div>
      <div className=" p-20  mx-auto bg-[#EFF4FC]">
        <div className="grid gap-10 md:grid-cols-2 ">
          <div className="space-y-2 ">
            <p className="text-2xl font-semibold ">London Office</p>
            <p className="text-gray-500 text-sm">Contact us for any queries.</p>
            <p className="flex items-center text-sm gap-2">
              <div className="">
                <CiLocationOn className="text-primary text-2xl" />
              </div>{" "}
              Carsic Road Sutton, Ashfield, NG172BS, Nottinghamshire
            </p>
            <p className="flex items-center text-sm gap-2">
              <CiMail className="text-primary text-xl" />{" "}
              aneesmazhar02@yahoo.com
            </p>
            <p className="flex items-center text-sm gap-2">
              <BiPhone className="text-primary text-xl" /> +44 7399 121688
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold ">Pakistan Office</p>
            <p className="text-gray-500 text-sm">Contact us for any queries.</p>
            <p className="flex items-center text-sm gap-2">
              <div className="">
                <CiLocationOn className="text-primary text-2xl" />
              </div>
              Civil Lines, Gujranwala
            </p>
            <p className="flex items-center text-sm gap-2">
              <CiMail className="text-primary text-xl" />{" "}
              barristershahroz@gmail.com
            </p>
            <p className="flex items-center text-sm gap-2">
              <BiPhone className="text-primary text-xl" /> +92 330 4161031
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
