import React from "react";
import Submission from "./Submission";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { config } from "../config/config";

function Assignment(props) {
  const profile = useSelector((state) => state.profile);
  // check if the user id is present in the list of tutors for the course
  let isTA = false;
  props.course.faculties.forEach((fac) => {
    if (fac._id === profile._id) {
      isTA = true;
    }
  });
  const getStringTime = (dt) => {
    const date = new Date(dt);
    const readableTime = date.toLocaleString();
    return readableTime;
  }
  return props.clicked ? (
    <div className="w-full bg-gray-100">
      <div className="w-full mx-auto p-8 ">
        <div className="flex flex-col">
          <div className="w-full pr-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {props.course.assignments[props.index].name}
            </h1>
            <p className="text-gray-700 mb-4">Course: {props.course.code}</p>
            <p className="text-gray-700 mb-4">Due Date: {getStringTime(props.course.assignments[props.index].due_date)}</p>
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
                {props.course.assignments[props.index].file && props.course.assignments[props.index].file.filename && props.course.assignments[props.index].file.filename.length > 0 ? (
                  <a
                    className="text-blue-900 cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${config.backendUrl}/assignment/file/${
                      props.course.assignments[props.index]._id
                    }`}
                  >
                    {props.course.assignments[props.index].file.filename}
                  </a>) : (
                    <span className="text-gray-700">No files attached</span>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {isTA ? (
            <Link
              to={`/assignment/${props.course.assignments[props.index]._id}`}
            >
              <div className="text-lg font-bold pl-2">See Submissions</div>
            </Link>
          ) : (
            <Submission assId={props.course.assignments[props.index]._id} dueDate={props.course.assignments[props.index].due_date} total_marks={props.course.assignments[props.index].total_marks}/>
          )}
        </div>
      </div>
    </div>
  ) : (
    // <Loading/>
    <div className="flex-1 bg-gray-100">
      <h1>Click on an assignment to view it</h1>
    </div>
  );
}

export default Assignment;
