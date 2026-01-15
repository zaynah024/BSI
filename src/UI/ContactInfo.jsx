import React from "react";
import { CiUser } from "react-icons/ci";
import { Field, ErrorMessage } from "formik";

const ContactInfo = () => {
  return (
    <>
      <div className=" rounded-lg overflow-hidden shadow-xl">
        <p className="p-4 bg-primary text-white flex  items-center gap-2">
          <CiUser /> Contact Information
        </p>
        <div className=" grid grid-cols-2 gap-4 p-4">
          <div className="">
            <label htmlFor="firstname">Email</label>
            <Field
              type="text"
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
            <label htmlFor="firstname">Phone</label>
            <Field
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-2 rounded-lg border"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="">
            <label htmlFor="firstname">Alternate Phone Number</label>
            <Field
              type="text"
              name="alternatePhone"
              placeholder="Last Name"
              className="w-full p-2 rounded-lg border"
            />
            <ErrorMessage
              name="alternatePhone"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="">
            <label htmlFor="firstname">Address</label>
            <Field
              type="text"
              name="address"
              placeholder="Address"
              className="w-full p-2 rounded-lg border"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="">
            <label htmlFor="firstname">City </label>
            <div className="flex items-center gap-2 mt-2">
              <Field
                type="text"
                name="city"
                placeholder="City "
                className="w-full p-2 rounded-lg border"
              />
            </div>
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="">
            <label htmlFor="firstname">Nationality </label>
            <div className="flex items-center gap-2 mt-2">
              <Field
                as="select"
                name="nationality"
                className="w-full border p-2 rounded-md"
              >
                <option
                  value=""
                  disabled
                  className="text-gray-500 disabled:text-gray-500"
                >
                  Choose Nationality
                </option>
                <option value="pakistani">Pakistan</option>
              </Field>
            </div>
            <ErrorMessage
              name="nationality"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
