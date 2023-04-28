import React from "react";
import logo from "../assets/logo.png";

function NoCourseComponent() {
  return (
    <div className="h-full w-screen bg-gray-100 flex justify-center items-center">
      <img src={logo} alt="Watermark" className="opacity-25 absolute" />
    </div>
  );
}

export default NoCourseComponent;
