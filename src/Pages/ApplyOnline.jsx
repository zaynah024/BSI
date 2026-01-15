"use client";

import React, { useState, lazy, Suspense } from "react";
import HeaderGeneral from "../Resue/HeaderGeneral";
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/cnt.png";
import { FaGraduationCap } from "react-icons/fa";

// lazy-load form panels
const StudyAborad = lazy(() => import("../Components/study-abroad"));
const VisitVisa = lazy(() => import("../Components/VisitVisa"));
const Immigration = lazy(() => import("../Components/Immigration"));

// generic ErrorBoundary for Study Abroad & Visit Visa
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 text-red-700 rounded">
          Something went wrong loading this section.
        </div>
      );
    }
    return this.props.children;
  }
}

// Immigration ErrorBoundary: fallback to Study Abroad form
class ImmigrationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <StudyAborad />
        </Suspense>
      );
    }
    return this.props.children;
  }
}

const ApplyOnline = () => {
  const [status, setstatus] = useState(1);

  return (
    <div className="w-[80%] mx-auto mt-10">
      <HeaderGeneral
        a={f}
        b={g}
        c={t}
        text="Apply Online"
        des="Apply online now. Our team will get back to you soon."
      />

      <div className="w-[80%] mx-auto mt-32">
        <form className="w-full flex flex-col gap-4">
          <div className="flex gap-10 w-full">
            {/* Study Abroad */}
            <div
              className={`flex p-2 rounded-lg border w-full justify-between items-center transition-colors duration-200 ${
                status === 1 ? "bg-primary text-white" : "bg-white text-gray-700"
              }`}
            >
              <div className="flex gap-2 items-center w-full">
                <input
                  type="radio"
                  name="a"
                  id="StudyAbroad"
                  onClick={() => setstatus(1)}
                  checked={status === 1}
                  className="cursor-pointer"
                />
                <label htmlFor="StudyAbroad" className="cursor-pointer">
                  Study Abroad
                </label>
              </div>
              <FaGraduationCap />
            </div>

            {/* Visit Visa */}
            <div
              className={`flex p-2 rounded-lg border items-center w-full transition-colors duration-200 ${
                status === 2 ? "bg-primary text-white" : "bg-white text-gray-700"
              }`}
            >
              <div className="flex gap-2 items-center w-full">
                <input
                  type="radio"
                  name="a"
                  id="VisitVisa"
                  onClick={() => setstatus(2)}
                  checked={status === 2}
                  className="cursor-pointer"
                />
                <label htmlFor="VisitVisa" className="cursor-pointer">
                  Visit Visa
                </label>
              </div>
              <FaGraduationCap />
            </div>

            {/* Immigration */}
            <div
              className={`flex p-2 rounded-lg border items-center w-full transition-colors duration-200 ${
                status === 3 ? "bg-primary text-white" : "bg-white text-gray-700"
              }`}
            >
              <div className="flex gap-2 items-center w-full">
                <input
                  type="radio"
                  id="Immigration"
                  name="a"
                  onClick={() => setstatus(3)}
                  checked={status === 3}
                  className="cursor-pointer"
                />
                <label htmlFor="Immigration" className="cursor-pointer">
                  Immigration
                </label>
              </div>
              <FaGraduationCap />
            </div>
          </div>

          {/* Panels */}
          {status === 1 && (
            <ErrorBoundary>
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <StudyAborad />
              </Suspense>
            </ErrorBoundary>
          )}
          {status === 2 && (
            <ErrorBoundary>
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <VisitVisa />
              </Suspense>
            </ErrorBoundary>
          )}
          {status === 3 && (
            <ImmigrationErrorBoundary>
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <Immigration />
              </Suspense>
            </ImmigrationErrorBoundary>
          )}

          <div className="my-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyOnline;
