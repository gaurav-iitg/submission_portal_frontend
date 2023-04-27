import React, { useState } from "react";
import { nclient } from "../config/client";
import { useDispatch } from "react-redux";
import { add_course_tutoring } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function CourseCreationForm() {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateCourse = () => {
    const data = {
      name: courseName,
      code: courseCode,
      description: courseDescription,
    }
    nclient.post('/course',data,{
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
       console.log(res.data.course);
       dispatch(add_course_tutoring(res.data.course));
        navigate("/");
     }).catch((err) => {
       alert(err.response.data.message);
     });
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Create a New Course
          </h1>
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <div className="mb-4">
              <label
                htmlFor="courseName"
                className="block text-gray-700 font-bold mb-2"
              >
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="courseCode"
                className="block text-gray-700 font-bold mb-2"
              >
                Course Code
              </label>
              <input
                type="text"
                id="courseCode"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="courseDescription"
                className="block text-gray-700 font-bold mb-2"
              >
                Course Description
              </label>
              <textarea
                id="courseDescription"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="6"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCreateCourse}
          >
            Create Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCreationForm;
