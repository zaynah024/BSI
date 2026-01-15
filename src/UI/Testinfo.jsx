import React from "react";
import { CiUser } from "react-icons/ci";
import { Field, ErrorMessage } from "formik";

const Testinfo = () => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-xl">
      <p className="p-4 bg-primary text-white flex  items-center gap-2">
        <CiUser /> Test Information
      </p>
      <div className="m-4">
        <div className="shadow p-4 rounded-md">
          <p>Have you ever taken any English Language Test?</p>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <Field
                type="radio"
                name="englishTest"
                value="yes"
                id="englishYes"
              />
              <label htmlFor="englishYes">Yes</label>
            </div>
            <div className="flex gap-2 items-center">
              <Field
                type="radio"
                name="englishTest"
                value="no"
                id="englishNo"
              />
              <label htmlFor="englishNo">No</label>
            </div>
          </div>
          <ErrorMessage
            name="englishTest"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>
      <div className="m-4">
        <div className="shadow p-4 rounded-md">
          <p>Have you ever taken any Aptitude Test?</p>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <Field
                type="radio"
                name="aptitudeTest"
                value="yes"
                id="aptitudeYes"
              />
              <label htmlFor="aptitudeYes">Yes</label>
            </div>
            <div className="flex gap-2 items-center">
              <Field
                type="radio"
                name="aptitudeTest"
                value="no"
                id="aptitudeNo"
              />
              <label htmlFor="aptitudeNo">No</label>
            </div>
          </div>
          <ErrorMessage
            name="aptitudeTest"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Testinfo;
