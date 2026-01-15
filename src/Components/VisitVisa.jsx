import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import BasicInfo from "../UI/BasicInfo";
import ContactInfo from "../UI/ContactInfo";
import { CiUser } from "react-icons/ci";
import UploadDoc from "../UI/UploadDoc";
import MoreInfo from "../UI/MoreInfo";

const validationSchema = Yup.object().shape({
  // Basic Info
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),

  // Contact Info
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]*$/, "Invalid phone number format"),
  alternatePhone: Yup.string().matches(
    /^[0-9+\-\s()]*$/,
    "Invalid phone number format"
  ),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  nationality: Yup.string().required("Nationality is required"),

  // Documents
  document: Yup.mixed()
    .required("Document is required")
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      return value.size <= maxSize;
    })
    .test("fileType", "Unsupported file type", (value) => {
      if (!value) return true;
      const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
      return allowedTypes.includes(value.type);
    }),

  // Additional Information
  additionalInfo: Yup.object().shape({
    intendedCourse: Yup.string().required("Intended course is required"),
    preferredUniversity: Yup.string().required(
      "Preferred university is required"
    ),
    startDate: Yup.date().required("Intended start date is required"),
    fundingSource: Yup.string().required("Funding source is required"),
    additionalNotes: Yup.string(),
    preferredCountries: Yup.array().of(Yup.string()),
    referralSource: Yup.string(),
  }),
});

const initialValues = {
  // Basic Info
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",

  // Contact Info
  email: "",
  phone: "",
  alternatePhone: "",
  address: "",
  city: "",
  nationality: "",

  // Documents
  document: null,

  // Additional Information
  additionalInfo: {
    intendedCourse: "",
    preferredUniversity: "",
    startDate: "",
    fundingSource: "",
    additionalNotes: "",
    preferredCountries: [],
    referralSource: "",
  },
};

const VisitVisa = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key === "documents") {
          Object.keys(values.documents).forEach((docKey) => {
            formData.append(`documents.${docKey}`, values.documents[docKey]);
          });
        } else {
          formData.append(key, JSON.stringify(values[key]));
        }
      });

      console.log("Form submitted:", values);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="space-y-6">
          <BasicInfo />
          <ContactInfo />
          <div className=" rounded-lg overflow-hidden shadow-xl">
            <p className="p-4 bg-primary text-white flex  items-center gap-2">
              <CiUser /> Visit Information
            </p>
            <div className="p-4 space-y-4">
              <div className="">
                <label htmlFor="firstname">Prefered Countires To visit</label>
                <input
                  type="text"
                  placeholder="Prefered Countires To visit"
                  className="w-full p-2 rounded-lg border"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label htmlFor="firstname">Annual Income In PKR</label>
                  <input
                    type="text"
                    placeholder="Annual Income "
                    className="w-full p-2 rounded-lg border"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="firstname">Expected Travel Date</label>
                  <input type="date" className="w-full p-2 rounded-lg border" />
                </div>
              </div>
              <div className="">
                <div className="">
                  <label htmlFor="firstname">Reason Travel</label>
                  <input
                    type="text"
                    placeholder="Why to want to Travel Abroad"
                    className="w-full p-2 rounded-lg border"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="firstname">
                  Any Relatives in Preferred Countries
                </label>
                <input
                  type="text"
                  placeholder="Tell  about if any of your relative in your Preferred Countries"
                  className="w-full p-2 rounded-lg border"
                />
              </div>
            </div>
          </div>
          <UploadDoc title="Work Experience" des="Add Experience" />
          <UploadDoc title="Travel History (Optional)" des="Add History" />
          <UploadDoc title="Any Refusal (Optional)" des="Add Refusal" />
          <MoreInfo show="true" />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !(isValid && dirty)}
              className={`px-6 py-2 rounded-md transition-colors duration-200 ${
                isSubmitting || !(isValid && dirty)
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-primary text-white hover:bg-blue-600"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default VisitVisa;
