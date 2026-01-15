import React from "react";
import { CiUser } from "react-icons/ci";
import { Field, ErrorMessage, FieldArray, useFormikContext } from "formik";

const PreviousEducation = () => {
  const { values } = useFormikContext();

  return (
    <div className=" rounded-lg overflow-hidden shadow-xl">
      <p className="p-4 bg-primary text-white flex  items-center gap-2">
        <CiUser /> Previous Education
      </p>
      <FieldArray name="education">
        {({ push, remove }) => (
          <div className="m-4">
            {values.education.map((_, index) => (
              <div key={index} className="shadow rounded-md mb-4">
                <p className="shadow bg-gray-50 p-4">Education {index + 1}</p>
                <div className="grid grid-cols-2 p-4 gap-4">
                  <div className="">
                    <label htmlFor={`education.${index}.qualification`}>
                      Qualification
                    </label>
                    <Field
                      type="text"
                      name={`education.${index}.qualification`}
                      placeholder="Qualification"
                      className="w-full p-2 rounded-lg border"
                    />
                    <ErrorMessage
                      name={`education.${index}.qualification`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="">
                    <label htmlFor={`education.${index}.subject`}>
                      Subject / Program / Degree
                    </label>
                    <Field
                      type="text"
                      name={`education.${index}.subject`}
                      placeholder="Subject / Program / Degree"
                      className="w-full p-2 rounded-lg border"
                    />
                    <ErrorMessage
                      name={`education.${index}.subject`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="">
                    <label htmlFor={`education.${index}.yearOfCompletion`}>
                      Year of Completion
                    </label>
                    <Field
                      type="text"
                      name={`education.${index}.yearOfCompletion`}
                      placeholder="Year of Completion"
                      className="w-full p-2 rounded-lg border"
                    />
                    <ErrorMessage
                      name={`education.${index}.yearOfCompletion`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="">
                    <label htmlFor={`education.${index}.institution`}>
                      Institution
                    </label>
                    <Field
                      type="text"
                      name={`education.${index}.institution`}
                      placeholder="Institution"
                      className="w-full p-2 rounded-lg border"
                    />
                    <ErrorMessage
                      name={`education.${index}.institution`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="">
                    <label htmlFor={`education.${index}.grade`}>Grade</label>
                    <Field
                      type="text"
                      name={`education.${index}.grade`}
                      placeholder="Grade"
                      className="w-full p-2 rounded-lg border"
                    />
                    <ErrorMessage
                      name={`education.${index}.grade`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-4 rounded-md border py-2 m-3 text-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                push({
                  qualification: "",
                  subject: "",
                  yearOfCompletion: "",
                  institution: "",
                  grade: "",
                })
              }
              className="px-4 rounded-md border py-2 m-3"
            >
              Add More
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default PreviousEducation;
