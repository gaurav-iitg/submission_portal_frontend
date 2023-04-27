import React, {useState} from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import CourseDetails from "../components/CourseDetails";

const HomePage = () => {
  const [idx, setIdx] = useState(0);
  const [isenrolled, setIsEnrolled] = useState(true);
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row" style={{ height: `calc(100vh - 64px)` }}>
        <SideBar className="w-1/5" setIdx={setIdx} setIsEnrolled={setIsEnrolled} />
        <div className="w-4/5 flex flex-col bg-gray-100 overflow-y-auto">
          <CourseDetails isenrolled={isenrolled} idx={idx}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
