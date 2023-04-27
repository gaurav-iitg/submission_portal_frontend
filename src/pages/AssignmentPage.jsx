import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Assignment from "../components/Assignment";
import AssignmentSidebar from "../components/AssignmentSidebar";
import {useParams} from "react-router-dom";
import { nclient } from "../config/client";
const CourseDetailsPage = () => {
    const courseId = useParams().courseId;
    const [loaded, setLoaded] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [course, setCourse] = useState({});
    const [index, setIndex] = useState(0);
    useEffect(() => {
        nclient.get(`/course/${courseId}`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }).then((res) => {
            setCourse(res.data.course);
            setLoaded(true);
          }).catch((err) => {
            alert(err.response.data.message);
          });

    },[courseId])
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {loaded ? (<div className="flex flex-row" style={{ height: `calc(100vh - 64px)` }}>
        <AssignmentSidebar className="w-1/5" course={course} setClicked={setClicked} setIndex={setIndex}/>
        <div className="w-4/5 flex flex-col bg-gray-100 overflow-y-auto">
          <Assignment course={course} clicked={clicked} index={index}/>
        </div>
      </div>) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default CourseDetailsPage;
