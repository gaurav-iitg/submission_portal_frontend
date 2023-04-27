import React from "react";
import Navbar from "../components/Navbar";
import EnrollmentForm from "../components/EnrollmentForm";

const Enrollment = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1">
        <EnrollmentForm />
      </div>
    </div>
  );
};

export default Enrollment;
