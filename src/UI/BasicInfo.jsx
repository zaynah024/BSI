import React from "react";
import { CiUser } from "react-icons/ci";
import { Field, ErrorMessage } from "formik";

const BasicInfo = () => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-xl">
      <p className="p-4 bg-primary text-white flex  items-center gap-2">
        <CiUser /> Basic Information
      </p>
      <div className=" grid grid-cols-2 gap-4 p-4">
        <div className="">
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 rounded-lg border"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 rounded-lg border"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div className="">
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <Field
            type="date"
            name="dateOfBirth"
            className="w-full p-2 rounded-lg border"
          />
          <ErrorMessage
            name="dateOfBirth"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div className="">
          <label htmlFor="gender">Gender</label>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Field type="radio" name="gender" value="male" id="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center gap-2">
              <Field type="radio" name="gender" value="female" id="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <ErrorMessage
            name="gender"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
