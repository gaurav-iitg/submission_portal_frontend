import { useState } from "react";
import { nclient } from "../config/client";
import { useDispatch } from "react-redux";
import { add_course_enrolled } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function EnrollmentForm() {
  const [courseId, setCourseId] = useState("");
  const [enrollmentKey, setEnrollmentKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      courseId: courseId,
      enrollmentKey: enrollmentKey,
    };
    nclient.post("/student/join", data,{
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      dispatch(add_course_enrolled(res.data.course));
      alert("Successfully enrolled");
      navigate("/");
    }).catch((err) => {
      alert(err.response.data.message);
    });
  };
  const handleCourseChange = (event) => {
    setCourseId(event.target.value);
  };
  const handleEnrollmentKeyChange = (event) => {
    setEnrollmentKey(event.target.value);
  };

  return (
    <div className="flex items-center h-full">
      <div className="w-2/3 max-w-lg mx-auto bg-gray-200 p-6 rounded-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          Enroll for a course
        </h2>
        <form className="flex flex-col gap-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Course Code
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter Course Code"
              value={courseId}
              onChange={handleCourseChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Enrollment Key
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter Enrollment Key"
              value={enrollmentKey}
              onChange={handleEnrollmentKeyChange}
            />
          </div>
          <div className="flex justify-center">
            <button onClick={handleSubmit} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Enroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnrollmentForm;
