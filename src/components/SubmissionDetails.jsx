import React, { useState, useEffect } from "react";
import { nclient } from "../config/client";
import Loading from "./Loading";

const SubmissionDetails = ({ submissionId }) => {
  const [loaded, setLoaded] = useState(false);
  const [submission, setSubmission] = useState({
    _id: "",
    assignment: {
      _id: "",
      name: "",
    },
    student: {
      _id: "",
      name: "",
      roll: "",
      email: "",
    },
    file: {
      mimetype: "",
      path: "",
      filename: "",
    },
    time: "",
    comment: "",
    feedback: {
      comment: "",
      time: "",
      marks: "",
      faculty: {
        _id: "",
        name: "",
        email: "",
      },
    },
  });
  const [comment, setComment] = useState("");
  const [marks, setMarks] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        comment,
        marks
    };
    nclient.post(`/feedback/${submissionId}`,data, {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    }).then((res) => {
        setSubmission({
            ...submission,
            feedback: res.data.feedback
        })
    }).catch((err) => {
        console.log(err);
    })
};
  useEffect(() => {
    nclient
      .get(`/submission/details/${submissionId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setSubmission(res.data.submission);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [submissionId]);
  const getStringTime = (dt) => {
    const date = new Date(dt);
    const readableTime = date.toLocaleString();
    return readableTime;
  };
  return loaded ? (
    <div>
      <div className="container mx-auto px-4">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {submission.assignment.name} Submission
          </h1>
          <h2 className="text-xl font-bold text-gray-700 mb-6">
            {submission.student.name} - {submission.student.roll}
          </h2>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                File
              </label>
              <a
                href={`http://localhost:5000/submission/file/${submissionId}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download
                </button>
              </a>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Comment
              </label>
              <p className="text-gray-700 text-base">{submission.comment}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Submitted at
              </label>
              <p className="text-gray-700 text-base">
                {getStringTime(submission.time)}
              </p>
            </div>
            {submission.feedback ? (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Feedback
                  </label>
                  <p className="text-gray-700 text-base">
                    {submission.feedback.comment}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Marks
                  </label>
                  <p className="text-gray-700 text-base">
                    {submission.feedback.marks}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Feedback Time
                  </label>
                  <span className="text-gray-700 text-base">
                    {submission.feedback.time}
                  </span>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Feedback By
                  </label>
                  <p className="text-gray-700 text-base">
                    {submission.feedback.faculty.name} -{" "}
                    {submission.feedback.faculty.email}
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                     Give Feedback
                  </label>
                  <div className="flex items-center justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Remarks
                    </label>
                    <input
                    //   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Remarks"
                      name="comment"
                      value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Marks
                    </label>
                    <input
                    //   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Marks"
                      name="marks"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                    ></input>
                  </div>
                <div className="flex items-center justify-between">
                    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SubmissionDetails;
