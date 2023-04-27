import { useState } from "react";

function EnrollmentForm() {
  const [courseId, setCourseId] = useState("");
  const [enrollmentKey, setEnrollmentKey] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
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
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Enroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnrollmentForm;
