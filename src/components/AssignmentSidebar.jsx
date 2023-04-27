import React from "react";
import { Link } from "react-router-dom";

function AssignmentSidebar(props) {
  return (
    <div className="flex flex-col justify-between w-1/4 bg-gray-800 text-white p-8">
      <div>
        <h2 className="text-2xl font-bold mb-8">{props.course.code}</h2>
        <ul className="flex flex-col gap-6">
          {props.course.assignments.map((assignment) => (
            <li className="mb-2" key={assignment.id}>
              <Link to="/" className="block hover:text-gray-500">
                {assignment.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">
        <h3 className="text-2xl font-bold"> Back </h3>
      </Link>
    </div>
  );
}

export default AssignmentSidebar;
