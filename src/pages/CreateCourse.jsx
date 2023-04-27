import React from "react";
import Navbar from "../components/Navbar";
import CreateCourseForm from "../components/CourseCreationForm;";
const CreateCourse = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="" style={{ height: `calc(100vh - 64px)` }}>
        <CreateCourseForm />
      </div>
    </div>
  );
};

export default CreateCourse;
