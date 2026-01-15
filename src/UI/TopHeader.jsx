import { CgArrowRight } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaPlane } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import MobileNav from "../Components/MobileNav";

function TopHeader() {
  return (
    <div className="">
      <div className="hidden md:block ">
        <div className="hidden md:block">
          <div className="flex  w-[90%] mx-auto py-3 text-sm font-medium">
            <div className="w-full flex items-center gap-4   ">
              <p className="flex items-center gap-2">
                {" "}
                <CiMail className="text-primary text-2xl" />
                <a href="mailto:bsiconsultancy@gmail.com">
                  bsiconsultancy@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2   pe-4   border-r border-black">
                <FiPhone className="text-primary text-xl" />{" "}
                <a href="tel:+923304161031 ">+92 330 4161031</a>{" "}
              </p>
              <p>+44 236356723 (UK)</p>
            </div>
            <div className="w-full gap-2 flex justify-end">
              <a href="https://www.facebook.com/BarristerShahrozIqbal100?mibextid=wwXIfr&mibextid=wwXIfr">
                <FaFacebookF className="bg-primary text-2xl text-white p-1 rounded-full" />
              </a>
              <TiSocialTwitter className="bg-primary text-2xl text-white p-1 rounded-full" />
              <FaLinkedinIn className="bg-primary text-2xl text-white p-1 rounded-full" />
              <AiFillInstagram className="bg-primary text-2xl text-white p-1 rounded-full" />
            </div>
          </div>
        </div>
        <hr />
        <div className="shadow-sm relative z-[999] border-b">
          <div className="  w-[90%]  mx-auto   py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <NavLink to="/" className="mr-2">
                  <img src={logo} alt="" />
                </NavLink>
                <NavLink
                  to="/"
                  className="text-lg leading-5 font-medium text-gray-800"
                >
                  Barrister Shahroz <br />
                  Immigration
                </NavLink>
              </div>
              <div className="  flex justify-between  gap-6 items-center">
                <NavLink to="/" className="mr-4 hover:text-blue-500">
                  Home
                </NavLink>
                <NavLink to="/Destination" className="mr-4 hover:text-blue-500">
                  Destinations
                </NavLink>
                <div className="">
                  <li className="flex relative  z-50 group">
                    <a href="#" className="">
                      Services
                    </a>
                    <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
                    <ul className="absolute text-xl bg-white  rounded-xl p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                      <li className="text-sm hover:bg-slate-100 leading-8">
                        <NavLink
                          to="/uk-services"
                          className="flex gap-2 items-center"
                        >
                          <FaPlane /> UK Services
                        </NavLink>
                      </li>
                     
                      <li className="text-sm hover:bg-slate-100 leading-8">
                        <NavLink
                          to="/study-visa"
                          className="flex gap-2 items-center"
                        >
                          <FaPlane /> Student Visa
                        </NavLink>
                      </li>
                      <li className="text-sm hover:bg-slate-100 leading-8">
                        <NavLink
                          to="/visit-visa"
                          className="flex gap-2 items-center"
                        >
                          <FaPlane /> Visit Visa
                        </NavLink>
                      </li>
                      <li className="text-sm hover:bg-slate-100 leading-8">
                        <NavLink
                          to="/Work-visa"
                          className="flex gap-2 items-center"
                        >
                          <FaPlane /> Work Visa
                        </NavLink>
                      </li>
                      <li className="text-sm hover:bg-slate-100 leading-8">
                        <NavLink
                          to="/immigration"
                          className="flex gap-2 items-center"
                        >
                          <FaPlane /> Immigration
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </div>
                <NavLink
                  to="/Book-Online-Consultancy"
                  className="mr-4 hover:text-blue-500"
                >
                  Book Online Consultation
                </NavLink>
                <NavLink to="/contact-us" className="mr-4 hover:text-blue-500">
                  Contact Us
                </NavLink>
                {/* <div className="">
                  <li className="flex relative  z-50 group">
                    <a href="#" className="">
                      More
                    </a>
                    <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
                    <ul className="absolute text-xl bg-white  rounded-xl p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                      <li className="text-sm hover:bg-slate-100 leading-8">
                        <NavLink
                          to="/uk-services"
                          className="flex gap-2 items-center"
                        >
                          <FaPlane /> CEO{" "}
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </div> */}
              </div>
              <div className="flex items-center">
                <NavLink
                  to="/apply-online"
                  className="px-6 flex items-center gap-2 py-4 text-sm font-medium text-white bg-blue-500 rounded-full  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
                >
                  Apply Now <CgArrowRight className="text-xl" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default TopHeader;
