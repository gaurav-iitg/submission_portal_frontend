import React from "react";
import Navbar from "../components/Navbar";
import Submission from "../components/Submission";
import AllSubmissions from "../components/AllSubmissions";
import AssignmentEvaluation from "../components/AssignmentEvaluation";
import NoCourseComponent from "../components/NoCourseComponent";

const TempPage = () => {
  const submission = {
    assignmentName: "Assignment 1",
    submissionTime: "12:00 AM, 1st Jan 2021",
    totalMarks: "10",
    submissionStatus: "Submitted",
    timeRemaining: "2 days, 4 hours",
    submittedFileUrl: "https://www.google.com",
  };

  const submissions = [
    {
      studentName: "Student 1",
      rollNumber: "1",
    },
    {
      studentName: "Student 2",
      rollNumber: "2",
    },
    {
      studentName: "Student 3",
      rollNumber: "3",
    },
    {
      studentName: "Student 4",
      rollNumber: "4",
    },
    {
      studentName: "Student 5",
      rollNumber: "5",
    },
    {
      studentName: "Student 6",
      rollNumber: "6",
    },
    {
      studentName: "Student 7",
      rollNumber: "7",
    },
    {
      studentName: "Student 8",
      rollNumber: "8",
    },
  ];

  const courses = [
    {
      courseName: "Course 1",
      courseCode: "CSE 101",
    },
    {
      courseName: "Course 2",
      courseCode: "CSE 102",
    },
    {
      courseName: "Course 3",
      courseCode: "CSE 103",
    },
    {
      courseName: "Course 4",
      courseCode: "CSE 104",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row" style={{ height: `calc(100vh - 64px)` }}>
        {/* <Sidebar className="w-1/5" cour/> */}
        {/* <AssignmentSidebar className="w-1/5" /> */}
        <div className="flex flex-col bg-gray-100 overflow-y-auto">
          {/* <Assignment /> */}
          {/* <AssignmentEvaluation submission={submission} /> */}
          {/* <Submission /> */}
          {/* <AllSubmissions submissions={submissions}/> */}
          <NoCourseComponent />
        </div>
      </div>
    </div>
  );
};

export default TempPage;
