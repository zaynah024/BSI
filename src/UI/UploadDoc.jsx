import React from "react";
import { CiUser } from "react-icons/ci";
import { Field, ErrorMessage, useFormikContext } from "formik";

const UploadDoc = ({ title, des }) => {
  const { setFieldValue } = useFormikContext();

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      console.log("File details:", {
        name: file.name,
        size: file.size,
        type: file.type,
      });
      setFieldValue("document", file);
    }
  };

  return (
    <div className=" rounded-lg overflow-hidden shadow-xl">
      <p className="p-4 bg-primary text-white flex  items-center gap-2">
        <CiUser /> {title}
      </p>
      <div className="m-4">
        <div className="shadow p-4 rounded-md">
          <p className="mb-4">{des}</p>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Document
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-primary file:text-white
                  hover:file:bg-blue-600"
              />
              <ErrorMessage
                name="document"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDoc;
