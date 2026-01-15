import React, { useState } from "react";
import {
  BiGlobeAlt,
  BiLeftArrow,
  BiLocationPlus,
  BiPhone,
} from "react-icons/bi";
import { BsMailbox, BsTiktok } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GiWallet, GiWorld } from "react-icons/gi";
import { SiIndeed } from "react-icons/si";
import logo from "../assets/logo2.png";
import { RiErrorWarningLine } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useBookConsultation } from "../Services/useBookConsultation";

const BookOnlineConsultancy = () => {
  const [id, setid] = useState(1);
  const [time, settime] = useState({
    date: "",
    time: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const { mutate: bookConsultation, isPending } = useBookConsultation();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9+\-\s()]*$/, "Invalid phone number format"),
    inquiry: Yup.string()
      .required("Inquiry is required")
      .min(10, "Inquiry must be at least 10 characters"),
    paymentScreenshot: Yup.mixed()
      .required("Payment screenshot is required")
      .test("fileSize", "File size is too large", (value) => {
        if (!value) return true;
        return value.size <= 5000000; // 5MB
      })
      .test("fileType", "Unsupported file type", (value) => {
        if (!value) return true;
        return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
      }),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    inquiry: "",
    paymentScreenshot: null,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitStatus(null);

    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    bookConsultation(formData, {
      onSuccess: (data) => {
        setSubmitStatus({
          type: "success",
          message: "Booking submitted successfully!",
        });
        resetForm();
        setid(4);
      },
      onError: (error) => {
        setSubmitStatus({
          type: "error",
          message:
            error.response?.data?.message ||
            "Failed to submit booking. Please try again.",
        });
      },
      onSettled: () => {
        setSubmitting(false);
      },
    });
  };

  return (
    <div className="bg-slate-50 p-10">
      {id == 1 && (
        <div className="flex gap-10 w-9/12 mx-auto">
          <div className="bg-white rounded-lg w-3/4 p-6 space-y-8">
            <div className="font-bold text-xl">Services</div>
            <div className="grid grid-cols-2 uppercase space-y-3 text-gray-600">
              <p className="mt-3">australian skilled immigration</p>
              <p>CANADIAN EXPRESS ENTRY</p>
              <p>student visa</p>
              <p>work visa</p>
              <p>VISIT visa</p>
              <p>IMMIGRATION</p>
              <p>VISA APPLICATION</p>
              <p>UK SERVICES</p>
              <p>ONLINE CONSULTATION</p>
            </div>
            <div className="grid grid-cols-2  ">
              <div className="w-full">
                <p className="font-bold mb-3">Contact Us</p>
                <div className="">
                  <p className="flex items-center gap-2">
                    {" "}
                    <BiPhone /> <u>+92 330 4161031</u>{" "}
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <CgMail /> <u>info@bsiconsultancy.com</u>
                  </p>
                  <p className="flex items-center gap-2">
                    <GiWorld /> <u>https://www.bsiconsultancy.com</u>
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="font-bold mb-3">Booking Policy</p>
                <p>
                  Bookings can be rescheduled any time without any charges.
                  Cancellation of booking will cost 25% deduction.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2  ">
              <div className="w-full">
                <p className="font-bold mb-3">Pay Online</p>
                <div className="flex items-start ">
                  <GiWallet className="text-primary text-2xl  m-2" />{" "}
                  <div className="">
                    <p className="flex items-center gap-2">
                      {" "}
                      PK65 UNIL 0109000299562391
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      Muhammad Shahroz Iqbal
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      UBL 1199299562391
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="font-bold mb-3">Social Media</p>
                <div className="w-full gap-2 flex  ">
                  <FaFacebookF className="bg-primary text-3xl text-white p-2 rounded-full" />
                  <BsTiktok className="bg-primary text-3xl text-white p-2 rounded-full" />
                  <SiIndeed className="bg-primary text-3xl text-white p-2 rounded-full" />
                  <FaInstagram className="bg-primary text-3xl text-white p-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg w-1/4 py-10 ">
            <div className="flex justify-center border-b pb-4 items-center flex-col gap-5">
              <img src={logo} alt="" className="w-32" />
              <p className="font-bold text-lg text-center">
                BSI Consultancy - Immigration and Study Abroad Consultants
              </p>
              <button
                onClick={() => setid(2)}
                className="text-white text-sm px-3 py-2 rounded-full bg-primary"
              >
                Book Consultancy
              </button>
            </div>
            <div className="flex items-center flex-col  py-10 text-sm">
              <div className="flex items-center gap-2">
                <BiLocationPlus /> <p className="text-sm">Office XYZ ,292</p>
              </div>
              <p>birmingham united kingdom</p>
            </div>
          </div>
        </div>
      )}

      {id == 2 && (
        <div className="flex gap-10 w-9/12 mx-auto mb-20 ">
          <div className="flex gap-10  ">
            <div className="w-[70%] bg-white p-10">
              <p className="font-bold">
                Barrister Shahroz Iqbal Consultation - Online/Phone
              </p>
              <div className="flex flex-col  gap-10 mt-5">
                <div className=" ">
                  <p> Choose a Date </p>
                  <div className="mt-2">
                    <input
                      type="date"
                      className="border px-4 py-2"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className=" ">
                  <p> Choose a Time </p>
                  <div className="">
                    <input
                      type="time"
                      className="border px-4 py-2"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => setid(3)}
                  className="px-8  py-2 rounded-3xl bg-primary text-white "
                >
                  Next
                </button>
              </div>
            </div>
            <div className="w-[30%] space-y-10">
              <div className="flex bg-white rounded-xl justify-center items-center flex-col py-10">
                <img src={logo} alt="" className="w-32" />
                <p className="font-bold text-lg text-center">
                  BSI Consultancy - Immigration and Study Abroad Consultants
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 space-y-3">
                <p className="font-bold">Summary</p>
                <p className="text-xs">
                  Barrister Shahroz Iqbal Consultation - Online/Phone
                </p>
                <p className="text-sm text-gray-400">30 min session</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {id == 3 && (
        <div className="flex gap-10 w-9/12 mx-auto mb-20 ">
          <div className="flex gap-10  ">
            <div className="w-[70%]">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <Form className="bg-white space-y-4 rounded-2xl p-10">
                    {submitStatus && (
                      <div
                        className={`p-4 rounded-md ${
                          submitStatus.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    <div className="">
                      <label htmlFor="fullName">Full Name</label>
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full p-2 rounded-lg border"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 rounded-lg border"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="w-full p-2 rounded-lg border"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="inquiry">Your Inquiry</label>
                      <Field
                        as="textarea"
                        name="inquiry"
                        placeholder="Please Enter Your Inquiry or purpose of the consultation..."
                        className="w-full p-2 rounded-lg border"
                        rows="4"
                      />
                      <ErrorMessage
                        name="inquiry"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="paymentScreenshot">
                        Upload Payment Screenshot
                      </label>
                      <p className="text-slate-500 text-xs mb-2">
                        60$ - 30 Mins Session
                      </p>
                      <input
                        type="file"
                        name="paymentScreenshot"
                        onChange={(event) => {
                          setFieldValue(
                            "paymentScreenshot",
                            event.currentTarget.files[0]
                          );
                        }}
                        className="w-full p-2 rounded-lg border"
                        accept="image/jpeg,image/png,image/jpg"
                      />
                      <ErrorMessage
                        name="paymentScreenshot"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="">
                      <button
                        type="submit"
                        disabled={isPending}
                        className={`bg-primary text-white rounded-full px-3 py-2 ${
                          isPending
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-blue-600"
                        }`}
                      >
                        {isPending ? "Submitting..." : "Continue"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className="flex flex-col gap-2 p-2 my-3">
                <div className="space-y-1">
                  <p className="font-bold">Booking Policy</p>
                  <p className="text-xs">
                    Bookings can be rescheduled any time without any charges.
                    <br /> Cancellation of booking will cost 25% deduction.
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="font-bold">Additional Information</p>
                  <p className="text-xs">
                    You will receive an email for the booking confirmation.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[30%] space-y-10">
              <div className="flex bg-white rounded-xl justify-center items-center flex-col py-10">
                <img src={logo} alt="" className="w-32" />
                <p className="font-bold text-lg text-center">
                  BSI Consultancy - Immigration and Study Abroad Consultants
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 space-y-3">
                <p className="font-bold">Summary</p>
                <p className="text-xs">
                  Barrister Shahroz Iqbal Consultation - Online/Phone
                </p>
                <p className="text-sm text-gray-400">30 min session</p>
                <p className="font-bold">Total Amount</p>
                <p>$60</p>
              </div>
              <div className="">
                <div className="bg-white rounded-xl p-4 space-y-3">
                  <div className="w-full">
                    <p className="font-bold mb-3">Pay Online</p>
                    <div className="flex items-start ">
                      <GiWallet className="text-primary text-2xl  m-2" />{" "}
                      <div className="text-sm">
                        <p className="flex items-center gap-2">
                          {" "}
                          PK65 UNIL 0109000299562391
                        </p>
                        <p className="flex items-center gap-2">
                          {" "}
                          Muhammad Shahroz Iqbal
                        </p>
                        <p className="flex items-center gap-2">
                          {" "}
                          UBL 1199299562391
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] flex gap-2 items- mt-2  justify-center w-full">
                  <RiErrorWarningLine /> Take a screenshot of the payment
                  receipt to upload.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {id == 4 && (
        <div className="flex flex-col justify-center  ">
          <div className="bg-white p-10 w-2/6 mx-auto flex flex-col justify-center items-center">
            <img src={logo} alt="" />
            <p className="font-bold text-lg text-center">
              Your Request is Submitted. You'll receive a confirmation email
              shortly.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-primary px-4 py-2 rounded-full  text-white text-sm flex items-center gap-2">
              {" "}
              <BiLeftArrow /> Back to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookOnlineConsultancy;
