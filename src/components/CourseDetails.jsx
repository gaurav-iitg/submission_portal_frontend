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
  let course = {
    name: "Click on a course to view details or enroll",
    code: "",
    description: "",
    faculties: [],
  };
  if (props.isenrolled) {
    if (props.idx < coursesEnrolled.length) {
      course = coursesEnrolled[props.idx];
    }
  } else {
    if (props.idx < coursesTutoring.length) {
      course = coursesTutoring[props.idx];
    }
  }
  const profile = useSelector((state) => state.profile);
  const isprof = useSelector((state) => state.profile.is_faculty);
  // check if the user id is present in the list of tutors for the course
  let isTA = false;
  course.faculties.forEach((fac) => {
    if (fac._id === profile._id) {
      isTA = true;
    }
  });

  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {course.name}
          </h1>
          <p className="text-gray-700 mb-4">Course Code: {course.code}</p>
          <p className="text-gray-700 mb-4">
            Faculties:
            {course.faculties.map((faculty) => (
              <span key={faculty._id}> {faculty.name}, </span>
            ))}
          </p>
          {isprof ? (
            <p className="text-gray-700 mb-4">
              Enrolment Key: {course.enrolment_key}
            </p>
          ) : null}
          <div className="">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Course Description
            </h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Link to={`/course/${course._id}`}>
          <h1 className="text-2xl font-bold text-blue-900 mb-6">
            View Assignments
          </h1>
        </Link>
        {isTA ? (
        <Link to={`/assignment-create/${course._id}`}>
          <h1 className="text-2xl font-bold text-blue-900 mb-6">
            Create New Assignment
          </h1>
        </Link>) : null}
        {isprof ? (
          <Link to={`/add-ta/${course._id}`}>
            <h1 className="text-2xl font-bold text-blue-900 mb-6">
              Add TA to Course
            </h1>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default CourseDetails;
