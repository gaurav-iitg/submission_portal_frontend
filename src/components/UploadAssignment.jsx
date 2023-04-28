import React, { useState } from "react";
import { nclient,formDataClient } from "../config/client"
import { useNavigate } from "react-router-dom";

function UploadAssignment(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: title, 
      description, 
      due_date: dueDate, 
      total_marks: totalMarks
    }
    nclient.post(`/assignment/${props.courseId}`, data, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => {
      const formData = new FormData();
      formData.append("file", file);
      formDataClient.post(`/assignment/add/${res.data.assignment._id}`, formData, {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }).then(res => {
        navigate(`/course/${props.courseId}`);
      }).catch(err => {
        console.log(err)
      })
    }).catch(err => {
      console.log(err)
    })
  };
  return (
    <div className="flex items-center h-full">
      <div className="w-2/3 max-w-lg mx-auto bg-gray-200 p-6 rounded-md">
        <h2 className="text-xl font-bold mb-4 text-center">Upload Assignment</h2>
        <form className="flex flex-col">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Assignment Title
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter assignment title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Description
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Enter assignment description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="due-date"
            >
              Due Date Time
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="due-date"
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="due-date"
            >
              Total Marks
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="due-date"
              type="text"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="file"
            >
              Upload File
            </label>
            <input type="file" id="file" onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
          <div className="flex justify-center">
            <button 
            onClick={handleSubmit}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadAssignment;

// course description due date
