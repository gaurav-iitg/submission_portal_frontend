import React from "react";
import logo from "../assests/logo.png";

function NoCourseComponent() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <img src={logo} alt="Watermark" className="opacity-25 absolute" />
    </div>
  );
}

export default NoCourseComponent;