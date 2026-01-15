import React from "react";
import { CiUser } from "react-icons/ci";
import { useFormikContext } from "formik";

const MoreInfo = ({ show }) => {
  const { values, setFieldValue } = useFormikContext();

  const handleCountryChange = (country) => {
    const currentCountries = values.additionalInfo?.preferredCountries || [];
    if (currentCountries.includes(country)) {
      setFieldValue(
        "additionalInfo.preferredCountries",
        currentCountries.filter((c) => c !== country)
      );
    } else {
      setFieldValue("additionalInfo.preferredCountries", [
        ...currentCountries,
        country,
      ]);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-xl">
      <p className="p-4 bg-primary text-white flex  items-center gap-2">
        <CiUser /> More Information
      </p>
      <div className="m-4 ">
        <div className="space-y-3">
          {show && (
            <>
              <div className="">
                <p>Prefered Counties</p>
                <p className="text-gray-500">
                  Select the countries where you want to study abroad.
                </p>
              </div>
              <div className="grid grid-cols-4">
                {[
                  "UK",
                  "USA",
                  "Australia",
                  "Europe",
                  "Dubai",
                  "Canada",
                  "Malaysia",
                  "Germany",
                  "Cyprus",
                  "Other",
                ].map((val, i) => {
                  return (
                    <div key={i} className="flex gap-2 items-center ">
                      <input
                        type="checkbox"
                        name="additionalInfo.preferredCountries"
                        id={val}
                        checked={values.additionalInfo?.preferredCountries?.includes(
                          val
                        )}
                        onChange={() => handleCountryChange(val)}
                      />{" "}
                      <label htmlFor={val}>{val}</label>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="intendedCourse">Prefered Course </label>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      placeholder="Prefered Course "
                      id="intendedCourse"
                      value={values.additionalInfo?.intendedCourse || ""}
                      onChange={(e) =>
                        setFieldValue(
                          "additionalInfo.intendedCourse",
                          e.target.value
                        )
                      }
                      className="w-full p-2 rounded-lg border"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="preferredUniversity">
                    Prefered University{" "}
                  </label>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      placeholder="Prefered University "
                      id="preferredUniversity"
                      value={values.additionalInfo?.preferredUniversity || ""}
                      onChange={(e) =>
                        setFieldValue(
                          "additionalInfo.preferredUniversity",
                          e.target.value
                        )
                      }
                      className="w-full p-2 rounded-lg border"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="w-full">
            <label htmlFor="additionalNotes">Any Other Query ? </label>
            <div className="flex items-center gap-2 mt-2">
              <textarea
                cols={4}
                rows={4}
                placeholder="Anything else you want to discuss ? "
                id="additionalNotes"
                value={values.additionalInfo?.additionalNotes || ""}
                onChange={(e) =>
                  setFieldValue(
                    "additionalInfo.additionalNotes",
                    e.target.value
                  )
                }
                className="w-full p-2 rounded-lg border"
              />
            </div>
          </div>
          <div className="w-full">
            <p>How did you hear about BSI Consultancy?</p>
            {[
              "Banner",
              "Social Media",
              "Call/SMS",
              "Through a Friend",
              "Youtube",
            ].map((val) => {
              return (
                <div key={val} className="flex gap-2 mt-2 items-center">
                  <input
                    type="radio"
                    name="additionalInfo.referralSource"
                    id={val}
                    checked={values.additionalInfo?.referralSource === val}
                    onChange={() =>
                      setFieldValue("additionalInfo.referralSource", val)
                    }
                  />{" "}
                  <label htmlFor={val}>{val}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
