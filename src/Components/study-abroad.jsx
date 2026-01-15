import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CiUser } from "react-icons/ci";
import BasicInfo from "../UI/BasicInfo";
import ContactInfo from "../UI/ContactInfo";
import UploadDoc from "../UI/UploadDoc";
import MoreInfo from "../UI/MoreInfo";
import PreviousEducation from "../UI/PreviousEducation";
import Testinfo from "../UI/Testinfo";

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

  // Previous Education
  education: Yup.array().of(
    Yup.object().shape({
      qualification: Yup.string().required("Qualification is required"),
      subject: Yup.string().required("Subject/Program/Degree is required"),
      yearOfCompletion: Yup.string().required("Year of completion is required"),
      institution: Yup.string().required("Institution is required"),
      grade: Yup.string().required("Grade is required"),
    })
  ),

  // Test Information
  englishTest: Yup.string().required(
    "Please select if you have taken an English test"
  ),

  aptitudeTest: Yup.string().required(
    "Please select if you have taken an aptitude test"
  ),

  // Documents
  document: Yup.mixed()
    .required("Document is required")
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      // Convert to bytes for comparison
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      console.log("File validation:", {
        fileSize: value.size,
        maxSize: maxSize,
        isWithinLimit: value.size <= maxSize,
      });
      return value.size <= maxSize;
    })
    .test("fileType", "Unsupported file type", (value) => {
      if (!value) return true;
      const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
      console.log("File type validation:", {
        fileType: value.type,
        isAllowed: allowedTypes.includes(value.type),
      });
      return allowedTypes.includes(value.type);
    }),

  // Additional Information
  additionalInfo: Yup.object().shape({
    intendedCourse: Yup.string().required("Intended course is required"),
    preferredUniversity: Yup.string().required(
      "Preferred university is required"
    ),
    additionalNotes: Yup.string(),
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

  // Previous Education
  education: [
    {
      qualification: "",
      subject: "",
      yearOfCompletion: "",
      institution: "",
      grade: "",
    },
  ],

  // Test Information
  englishTest: "",
  aptitudeTest: "",

  // Documents
  document: null,

  // Additional Information
  additionalInfo: {
    intendedCourse: "",
    preferredUniversity: "",
    additionalNotes: "",
  },
};

const StudyAborad = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Create FormData for file uploads
      const formData = new FormData();

      // Append all form values
      Object.keys(values).forEach((key) => {
        if (key === "documents") {
          // Handle file uploads
          Object.keys(values.documents).forEach((docKey) => {
            formData.append(`documents.${docKey}`, values.documents[docKey]);
          });
        } else {
          formData.append(key, JSON.stringify(values[key]));
        }
      });

      // Make API call here
      // const response = await axios.post(`${BASE_URL}api/study-abroad-application/`, formData);

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
      {({ isSubmitting, isValid, dirty, values, errors, touched }) => {
        console.log("Formik Values:", {
          values,
          errors,
          touched,
          document: values.document,
        });
        return (
          <Form className="space-y-6">
            <BasicInfo />
            <ContactInfo />
            <UploadDoc title="Work Experience" des="Add Experience" />
            <PreviousEducation />
            <Testinfo />
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
        );
      }}
    </Formik>
  );
};

export default StudyAborad;
