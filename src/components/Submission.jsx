import React from "react";

const Submission = () => {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          Submission Details
        </h2>
        <p className="text-gray-700 mb-4">Submission Status: Not Submitted</p>
        <p className="text-gray-700 mb-4">Time Remaining: 2 days, 4 hours</p>
        <div className="mb-4">
          <h3 className="text-md font-bold text-gray-900 mb-2">
            Attached Files
          </h3>
          <input type="file" id="file" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Assignment
        </button>
      </div>
    </div>
  );
};

export default Submission;
