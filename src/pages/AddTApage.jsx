import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import AddTA from "../components/AddTA";

const AddTApage = () => {
    const courseId = useParams().courseId;
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row" style={{ height: `calc(100vh - 64px)` }}>
        <AddTA courseId={courseId} />
      </div>
    </div>
  );
};

export default AddTApage;
