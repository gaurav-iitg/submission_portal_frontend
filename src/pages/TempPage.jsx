import React from "react";
import Navbar from "../components/Navbar";
import Assignment from "../components/Assignment";
import AssignmentSidebar from "../components/AssignmentSidebar";
import Submission from "../components/Submission";

const TempPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row" style={{ height: `calc(100vh - 64px)` }}>
        {/* <Sidebar className="w-1/5" /> */}
        {/* <AssignmentSidebar className="w-1/5" /> */}
        <div className="w-4/5 flex flex-col bg-gray-100 overflow-y-auto">
          {/* <Assignment /> */}
          <Submission/>
        </div>
      </div>
    </div>
  );
};

export default TempPage;
