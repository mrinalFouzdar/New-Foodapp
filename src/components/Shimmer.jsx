import React from "react";

const Shimmer = () => {
  // console.log('object')
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 15 }).map((item, index) => (
        <div
          className="w-72 h-72 border-gray-400 bg-slate-300 m-3"
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
