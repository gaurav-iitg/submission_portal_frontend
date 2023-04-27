import React from "react";
import Navbar from "../components/Navbar";
import Submission from "../components/Submission";
import AssignmentEvaluation from "../components/AssignmentEvaluation";

const TempPage = () => {

  const submission = {
    assignmentName: "Assignment 1",
    submissionTime: "12:00 AM, 1st Jan 2021",
    totalMarks: "10",
    submissionStatus: "Submitted",
    timeRemaining: "2 days, 4 hours",
    submittedFileUrl: "https://www.google.com",
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row" style={{ height: `calc(100vh - 64px)` }}>
        {/* <Sidebar className="w-1/5" /> */}
        {/* <AssignmentSidebar className="w-1/5" /> */}
        <div className="w-4/5 flex flex-col bg-gray-100 overflow-y-auto">
          {/* <Assignment /> */}
          <AssignmentEvaluation submission={submission}/>
          <Submission/>
        </div>
      </div>
    </div>
  );
};

export default TempPage;
