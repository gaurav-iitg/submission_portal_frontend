import React from "react";
import { useSelector } from "react-redux";

function Sidebar(props) {
  const coursesEnrolled = useSelector(
    (state) => state.profile.courses_enrolled
  );
  const coursesTutoring = useSelector(
    (state) => state.profile.courses_tutoring
  );
  const isprof = useSelector((state) => state.profile.is_faculty);

  return (
    <div className="w-1/4 bg-gray-800 text-white p-4">
      {!isprof ? (
        <h2 className="text-2xl font-bold mb-8">Enrolled Courses</h2>
      ) : null}
      {coursesEnrolled.length === 0 ? (
        !isprof ? (
          <p className="text-gray-400 mb-6">No courses enrolled</p>
        ) : null
      ) : (
        <ul className="flex flex-col gap-6 mb-6">
          {coursesEnrolled.map((course, index) => (
            <li className="mb-2 cursor-pointer" key={course._id}>
              <div
                onClick={() => {
                  props.setIdx(index);
                  props.setIsEnrolled(true);
                  props.setHasClicked(true);
                }}
                className="block hover:text-gray-500 truncate"
              >
                {course.code} {course.name}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* {coursesTutoring.length !== 0 ? (<h2 className="text-2xl font-bold mb-8">Courses Tutoring</h2>) : null } */}
      <h2 className="text-2xl font-bold mb-8">Courses Tutoring</h2>
      {coursesTutoring.length === 0 ? (
        <p className="text-gray-400">No courses tutoring</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {coursesTutoring.map((course, index) => (
            <li className="mb-2 cursor-pointer" key={course._id}>
              <div
                onClick={() => {
                  props.setIdx(index);
                  props.setIsEnrolled(false);
                  props.setHasClicked(true);
                }}
                className="block hover:text-gray-500 truncate"
              >
                {course.code} {course.name}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
