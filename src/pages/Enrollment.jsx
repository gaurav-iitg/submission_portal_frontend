import React from "react";
import Navbar from "../components/Navbar";
import EnrollmentForm from "../components/EnrollmentForm";

const Enrollment = () => {
  return (
    <div class="flex flex-col h-screen">
      <Navbar />
      <div class="flex-1">
        <EnrollmentForm />
      </div>
    </div>
  );
};

export default Enrollment;
