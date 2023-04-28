import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import AllSubmissions from "../components/AllSubmissions";

const AllSubmissionPage = () => {
    const assignmentId = useParams().assignmentId;
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row" style={{ height: `calc(100vh - 64px)` }}>
        <AllSubmissions assignmentId={assignmentId}/>
      </div>
    </div>
  );
};

export default AllSubmissionPage;
