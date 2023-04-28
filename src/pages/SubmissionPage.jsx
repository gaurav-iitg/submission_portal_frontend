import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import SubmissionDetails from "../components/SubmissionDetails";

const SubmissionPage = () => {
    const submissionId = useParams().submissionId;
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row" style={{ height: `calc(100vh - 64px)` }}>
        <SubmissionDetails submissionId={submissionId} />
      </div>
    </div>
  );
};

export default SubmissionPage;
