import React from "react";
import Navbar from "../components/Navbar";
import UploadAssignment from "../components/UploadAssignment";
import Assignment from "../components/Assignment";

const TempPage = () => {
  return (
    <div class="flex flex-col h-screen">
      <Navbar />
      <div class="flex-1">
        {/* <UploadAssignment /> */}
        <Assignment/>

      </div>
    </div>
  );
};

export default TempPage;
