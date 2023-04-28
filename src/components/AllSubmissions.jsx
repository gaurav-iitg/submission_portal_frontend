import React, { useState,useEffect } from "react";
import { nclient } from "../config/client";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function AssignmentSubmissions({ assignmentId }) {
  const [submissions, setSubmissions] = useState([]);
  const [assignment, setAssignment] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    nclient
      .get(`/submission/all/${assignmentId}`,{
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAssignment(res.data.assignment);
        setSubmissions(res.data.submission);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [assignmentId]);
  return loaded ? (
    <div className="container mx-auto px-4">
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {assignment.name} Submissions
        </h1>
        <h2 className="text-xl font-bold text-gray-700 mb-6">
          {assignment.course.code} - {assignment.course.name}
        </h2>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Sl No</th>
                <th className="text-left px-4 py-2">Student Name</th>
                <th className="text-left px-4 py-2">Roll Number</th>
                <th className="text-left px-4 py-2">Graded</th>
                <th className="text-left px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission,index) => (
                <tr key={submission._id}>
                  <td className="border px-4 py-2">{index+1}</td>
                  <td className="border px-4 py-2">{submission.student.name}</td>
                  <td className="border px-4 py-2">{submission.student.roll}</td>
                  <td className="border px-4 py-2">{submission.feedback ? (<div dangerouslySetInnerHTML={{ __html: '&#9989;' }}></div>): null}</td>
                  <td className="border px-4 py-2">
                    <Link to={`/submission/${submission._id}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : <Loading />;
}

export default AssignmentSubmissions;
