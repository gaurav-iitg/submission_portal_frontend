import React from "react";
import loadingIcon from "../assets/loading.png";

function Loading() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <img
        src={loadingIcon}
        alt="Loading..."
        className="h-16 w-16 animate-spin"
      />
    </div>
  );
}

export default Loading;
