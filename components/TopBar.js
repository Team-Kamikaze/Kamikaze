import React from "react";

function TopBar({ feedfilter }) {
  return (
    <div className="hidden sm:inline-flex ">
      <div className="flex flex-row mx-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-50 pb-2 ">
        {feedfilter.map((feed) => (
          <div className="text-xl text-gray-400 rounded-3xl  py-1 px-2 m-2 bg-gray-50 first:bg-gray-200 hover:bg-gray-200">
            {feed}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
