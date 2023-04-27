import React from "react";
import Submission from "./Submission";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Assignment(props) {
  const profile = useSelector((state) => state.profile);
  // check if the user id is present in the list of tutors for the course
  let isTA = false;
  props.course.faculties.forEach((fac) => {
    if (fac._id === profile._id) {
      isTA = true;
    }
  });
  return props.clicked ? (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-8 ">
        <div className="flex flex-col">
          <div className="pr-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {props.course.assignments[props.index].name}
            </h1>
            <p className="text-gray-700 mb-4">Course: {props.course.code}</p>
            <p className="text-gray-700 mb-4">Due Date: {props.course.assignments[props.index].due_date}</p>
            <p className="text-gray-700 mb-4">Total Marks: {props.course.assignments[props.index].total_marks}</p>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-700">
                {props.course.assignments[props.index].description}
              </p>
            </div>
            <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
                Files Attached
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <a 
                  className="text-blue-900 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`http://localhost:5000/assignment/file/${props.course.assignments[props.index]._id}`}
                  >
                  {props.course.assignments[props.index].file.filename}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {isTA ? (
            <Link to={`/assignment/${props.course.assignments[props.index]._id}`}>
              <div className="test-lg font-bold pl-2">See Submissions</div>
            </Link>
          ) : (
            <Submission />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gray-100 p-10"> Click on an assignment to view it
    </div>);
}

export default Assignment;
