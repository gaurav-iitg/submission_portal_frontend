import React, { useEffect, useState } from "react";
import { formDataClient, nclient } from "../config/client";
const Submission = ({ assId, dueDate, total_marks }) => {
  const [loaded, setLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOverdue, setIsOverdue] = useState(false);
  const [diff , setDiff] = useState("");
  const [file, setFile] = useState(null);
  const [submission, setSubmission] = useState({
    _id:"",
    file: {
      filename: "",
    },
    time: "",
    comment: "",
    feedback: {
      _id:"",
      comment: "",
      marks: 0,
      time: "",
      faculty: {
        name: "",
      },
    },
  });
  const getStringTime = (dt) => {
    const date = new Date(dt);
    const readableTime = date.toLocaleString();
    return readableTime;
  };
  const checkOverdue = (dueDate) => {
    const date1 = new Date(dueDate);
    const date2 = new Date();
    let diffTime = date1.getTime() - date2.getTime();
    const isoverdue = diffTime < 0;
    return isoverdue;
  };
  const difference = (dueDate) => {
    const date1 = new Date(dueDate);
    const date2 = new Date();
    let diffTime = date1.getTime() - date2.getTime();
    const isoverdue = diffTime < 0;
    if (isoverdue) {
      diffTime = diffTime * -1;
    }
    const seconds = Math.floor(diffTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let tstr = "";
    if (days > 0) {
      tstr += days + " days ";
    }
    if (hours > 0) {
      tstr += (hours % 24) + " hours ";
    }
    if (minutes > 0) {
      tstr += (minutes % 60) + " minutes ";
    }
    if (seconds > 0) {
      tstr += (seconds % 60) + " seconds ";
    }
    if (isoverdue) {
      tstr = "Overdue by " + tstr;
    } else {
      tstr = "Due in " + tstr;
    }
    return tstr;
  };
  useEffect(() => {
    setLoaded(false);
    setDiff(difference(dueDate));
    setIsOverdue(checkOverdue(dueDate));
    nclient
      .get(`/submission/check/${assId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        let sub = res.data.submission;
        setSubmission({
          _id:sub._id,
          file: sub.file,
          time: sub.time,
          comment: sub.comment,
          feedback: sub.feedback ? sub.feedback : {
            _id:"",
            comment: "",
            marks: 0,
            time: "",
            faculty: {
              name: "",
            },
          },
        });
        setIsSubmitted(true);
        setLoaded(true);
      })
      .catch((err) => {
        setIsSubmitted(false);
        setLoaded(true);
      });
  }, [assId,dueDate]);
  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    nclient.post(`/submission/${assId}`, {comment:""} , {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res)=>{
      console.log(res.data.submission);
      formDataClient.post(`/submission/add/${res.data.submission._id}`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }).catch((err)=>{
      console.log(err);
    })
  };
  return loaded ? (
    <div className="">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          Submission Details
        </h2>
        <p className="text-gray-700 mb-4">
          Submission Status: {isSubmitted ? "Submitted" : "Not Submitted"}
        </p>
        <p className="text-gray-700 mb-4">
          {isSubmitted
            ? `Submitted at: ${getStringTime(submission.time)}`
            : `${diff}`}
        </p>
        <div className="mb-4">
          <h3 className="text-md font-bold text-gray-900 mb-2">
            {isSubmitted ? "Submitted File" : isOverdue ? "Can't Submit now" : "Upload File"}
          </h3>
          {isSubmitted ? (
            <a 
              className="text-blue-900 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href={`http://localhost:5000/submission/file/${submission._id}`}
              >
                {submission.file.filename}
            </a>
          ) : isOverdue ? null : (
            <input type="file" name="file" onChange={(e)=>setFile(e.target.files[0])}/>
          )}
        </div>
        {isSubmitted ? (
        <div className="mb-4">
          <h3 className="text-md font-bold text-gray-900 mb-2">
            Feedback
          </h3>
          {submission.feedback._id !== "" ? (
            <div>
              <div>
                Graded
              </div>
              <div>
                Graded at: {getStringTime(submission.feedback.time)}
              </div>
              <div>
                Marks: {submission.feedback.marks} / {total_marks}
              </div>
              <p>
                Comment: {submission.feedback.comment}
              </p>
              <div>
                Graded by: {submission.feedback.faculty.name}
              </div>
            </div>
          ) : (
            <div>
              Ungraded
            </div>
          )}
        </div>
        ) : null}
        {isSubmitted || isOverdue ? null : (
        <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Assignment
        </button>
        )}
      </div>
    </div>
  ) : (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        Loading Submission Details
      </h2>
    </div>
  );
};

export default Submission;
