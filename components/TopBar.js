import React from "react";

function TopBar({ feedfilter }) {
  return (
    <div className="hidden sm:inline-flex ">
      <div className="flex flex-row space-x-3 mx-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-50 py-2 ">
        {feedfilter.map((feed) => (
          <div className=" cursor-pointer text-gray-400 rounded-3xl  py-2 px-3 bg-gray-50 first:bg-gray-200 hover:bg-gray-200">
            {feed}5
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
