import React from "react";
import Navbar from "../components/Navbar";
import UploadAssignment from "../components/UploadAssignment";
import {useParams} from "react-router-dom";

const CreateAssignment = () => {
    const courseId = useParams().courseId;
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <UploadAssignment />
    </div>
  );
};

export default CreateAssignment;
