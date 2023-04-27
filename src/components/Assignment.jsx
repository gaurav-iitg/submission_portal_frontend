import React from "react";
import Submission from "./Submission";
import { useSelector } from "react-redux";

function Assignment(props) {
  const profile = useSelector((state) => state.profile);
  // check if the user id is present in the list of tutors for the course
  let isTA = false;
  props.course.faculties.forEach((fac) => {
    if (fac._id === profile._id) {
      isTA = true;
    }
  });
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-8 ">
        <div className="flex flex-col">
          <div className="pr-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Assignment 1</h1>
            <p className="text-gray-700 mb-4">Assignment Number: 1234</p>
            <p className="text-gray-700 mb-4">Course: COMP 101</p>
            <p className="text-gray-700 mb-4">Due Date: 30 April, 2023</p>
            <p className="text-gray-700 mb-4">Total Marks: 100</p>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Description</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel enim
                euismod, lobortis sapien sed, dapibus dolor. Nam porttitor, libero nec bibendum
                lobortis, sapien ex iaculis nulla, eget tempor justo lectus a velit.
              </p>
            </div>
          </div>
          {isTA ? (
            <div className="test-lg font-bold pl-2">See Submissions</div>
          )
          : (<Submission />)
            }
        </div>
      </div>
    </div>
  );
}

export default Assignment;
