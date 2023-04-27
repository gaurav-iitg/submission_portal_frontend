import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CourseDetails(props) {
  const coursesEnrolled = useSelector(
    (state) => state.profile.courses_enrolled
  );
  const coursesTutoring = useSelector(
    (state) => state.profile.courses_tutoring
  );
  const isprof = useSelector(
    (state) => state.profile.is_faculty
  );
  let course = {
    name: "COMP 101",
    code: "Introduction to Computer Science",
    description: "some description",
    }
  if(props.isenrolled){
    if(props.idx < coursesEnrolled.length){
      course = coursesEnrolled[props.idx]
    }
  } else {
    if(props.idx < coursesTutoring.length){
      course = coursesTutoring[props.idx]
    }
  }
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h1>
          <p className="text-gray-700 mb-4">Course Code: {course.code}</p>
          <p className="text-gray-700 mb-4">Faculties: John Smith, Jane Doe</p>
          {isprof ? (
            <p className="text-gray-700 mb-4">Enrolment Key: {course.enrolment_key}</p>
          ) : (<p>Not Prof</p>) }
          <div className="">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Course Description
            </h2>
            <p className="text-gray-700">
              {course.description}
            </p>
          </div>
        </div>
      </div>
      <Link to={`/course/${course._id}`}>
        <h1 className="text-2xl font-bold text-blue-900 mb-2">View Assignments</h1>
      </Link>
    </div>
  );
}

export default CourseDetails;
