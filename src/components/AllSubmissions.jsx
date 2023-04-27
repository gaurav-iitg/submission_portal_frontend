import React from "react";

function AssignmentSubmissions({ submissions }) {
  //Isme assignment type pass karke uske submissions nikalne hain
  return (
    <div className="container mx-auto px-4">
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Assignment Submissions
        </h1>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Student Name</th>
                <th className="text-left px-4 py-2">Roll Number</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.rollNumber}>
                  <td className="border px-4 py-2">{submission.studentName}</td>
                  <td className="border px-4 py-2">{submission.rollNumber}</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AssignmentSubmissions;
