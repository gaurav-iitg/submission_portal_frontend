import { useState } from "react";

function AssignmentEvaluation({ submission }) {
  const [feedback, setFeedback] = useState("");
  const [marks, setMarks] = useState("");



  return (
    <div className="container mx-auto px-4">
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Assignment Evaluation
        </h1>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {submission.assignmentName}
            </h2>
            <p className="text-gray-700 text-base">
              <span className="font-bold">Submission Time:</span>{" "}
              {submission.submissionTime}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-bold">Total Marks:</span>{" "}
              {submission.totalMarks}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-bold">Submission Status:</span>{" "}
              {submission.submissionStatus}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-bold">Time Remaining:</span>{" "}
              {submission.timeRemaining}
            </p>
            <div className="mt-4">
              <a
                href={submission.submittedFileUrl}
                className="text-blue-500 hover:text-blue-700"
              >
                Download Submitted File
              </a>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-gray-700 font-bold mb-2"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="marks"
              className="block text-gray-700 font-bold mb-2"
            >
              Marks
            </label>
            <input
              type="number"
              id="marks"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Evaluate Submission
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEvaluation;
