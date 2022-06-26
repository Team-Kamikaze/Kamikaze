import React, { useState } from "react";
import { AiFillHome, AiTwotoneSetting } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdVideoLibrary,
  MdKeyboardArrowDown,
  MdOutlineFeedback,
} from "react-icons/md";
import { BiTimeFive, BiHelpCircle } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";
import {
  BsCollectionPlayFill,
  BsFileEarmarkPlay,
  BsPlayBtn,
} from "react-icons/bs";
import { GrHistory } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="bg-slate-100/90  w-auto  h-screen  fixed top-21 overflow-auto  no-scrollbar">
      <div className="mt-6 flex flex-col justify-start items-start  pr-4 w-full space-y-3 pb-5 ">
        <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 flex-col sm:flex-row">
          <AiFillHome className="text-2xl text-slate-700" />
          <p className="text-base leading-10 ml-0 ">Home</p>
        </button>
        <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 flex-col sm:flex-row ">
          <MdOutlineExplore className="text-2xl text-slate-700" />
          <p className=" leading-10  ">Explore</p>
        </button>
        <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 flex-col sm:flex-row">
          <BsFileEarmarkPlay className="text-2xl text-slate-700" />
          <p className="text-base leading-10   ">Shorts</p>
        </button>
        <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 flex-col sm:flex-row ">
          <BsCollectionPlayFill className="text-2xl text-slate-700" />
          <p className="text-base leading-10  ">Subscriptions</p>
        </button>
        <div className="w-full px-4 hidden sm:block ">
          <hr className="border-gray-400 w-full" />
        </div>
        {/* -------------------------- */}
        <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 flex-col sm:flex-row">
          <MdVideoLibrary className="text-2xl text-slate-700" />
          <p className="text-base leading-10  ">Library</p>
        </button>
        <div className="hidden sm:block sm:w-full">
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4">
            <GrHistory className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">History</p>
          </button>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 ">
            <BsPlayBtn className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Your Video</p>
          </button>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4  ">
            <BiTimeFive className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Watch later</p>
          </button>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4  ">
            <FaRegThumbsUp className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Liked videos</p>
          </button>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4">
            <MdKeyboardArrowDown className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Show more</p>
          </button>
          <div className="w-full px-4 hidden sm:block ">
            <hr className="border-gray-400 w-full" />
          </div>
          {/* --------------------------- */}
          <h4 className="text-gray-800 font-bold text-lg  pl-4  ">
            SUBSCRIPTIONS
          </h4>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 ">
            <div tabindex="0" class="focus:outline-none h-8 w-8 lg:mb-0">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_1.png"
                alt="man avatar"
                class="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            <p className="text-base leading-10 ">Kamikaze</p>
          </button>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 ">
            <MdKeyboardArrowDown className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Show more</p>
          </button>
        </div>
        <div className="w-full px-4 ">
          <hr className="border-gray-400 w-full" />
        </div>
        {/* --------------------------- */}
        <div className="w-full px-4 hidden sm:block ">
          <hr className=" border-gray-100 w-full" />
        </div>
        <div className="mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 hidden sm:block ">
          <h4 className="text-gray-800 font-bold text-lg  pl-4 sm:">
            MORE FROM YOUTUBE
          </h4>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4 ">
            <AiTwotoneSetting className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Settings</p>
          </button>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4">
            <BiHelpCircle className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Help</p>
          </button>
          <button className="flex text-black hover:text-white focus:bg-slate-400 focus:text-white hover:bg-slate-400 text-gray-400 rounded  items-center space-x-6 w-full pl-4">
            <MdOutlineFeedback className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Send feedback</p>
          </button>
        </div>
        <div className="h-36 flex justify-center text-gray-400 hidden sm:block ">
          &copy; {new Date().getFullYear()} Kamikaze
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
