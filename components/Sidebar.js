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
import { useRecoilValue } from "recoil";
import { sideIsOpenAtom } from "../atoms";

const Sidebar = () => {
  const sideIsOpen = useRecoilValue(sideIsOpenAtom);
  return (
    <div
      className={`bg-slate-100/90 min-h-screen relative top-0 ${
        sideIsOpen ? "left-0" : "-left-full sm:left-0"
      } no-scrollbar`}
    >
      <div className="pt-5 flex flex-col justify-start items-start w-full space-y-3 pb-5 ">
        <button
          className={`side_btn ${
            !sideIsOpen
              ? "sm:flex-col"
              : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
          }  `}
        >
          <AiFillHome className="text-2xl text-slate-700" />
          <p className="text-base leading-10">Home</p>
        </button>
        <button
          className={`side_btn ${
            !sideIsOpen
              ? "sm:flex-col"
              : " sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
          }  `}
        >
          <MdOutlineExplore className="text-2xl text-slate-700" />
          <p className="text-base leading-10">Explore</p>
        </button>
        <button
          className={`side_btn ${
            !sideIsOpen
              ? "sm:flex-col"
              : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
          }  `}
        >
          <BsFileEarmarkPlay className="text-2xl text-slate-700" />
          <p className="text-base leading-10   ">Shorts</p>
        </button>
        <button
          className={`side_btn ${
            !sideIsOpen
              ? "sm:flex-col"
              : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
          }  `}
        >
          <BsCollectionPlayFill className="text-2xl text-slate-700" />
          <p className="text-base leading-10  ">Subscriptions</p>
        </button>
        <div className="w-full px-4 hidden sm:block ">
          <hr className="border-gray-400 w-full" />
        </div>
        {/* -------------------------- */}
        <button
          className={`side_btn ${
            !sideIsOpen
              ? "sm:flex-col"
              : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
          }  `}
        >
          <MdVideoLibrary className="text-2xl text-slate-700" />
          <p className="text-base leading-10  ">Library</p>
        </button>
        <div className="hidden sm:block sm:w-full">
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <GrHistory className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">History</p>
          </button>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : " sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <BsPlayBtn className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Your Video</p>
          </button>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <BiTimeFive className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Watch later</p>
          </button>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <FaRegThumbsUp className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Liked videos</p>
          </button>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <MdKeyboardArrowDown className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Show more</p>
          </button>
          <div className="w-full px-4 hidden sm:block ">
            <hr className="border-gray-400 w-full" />
          </div>
          {/* --------------------------- */}
          <h4 className="text-gray-800 font-bold  px-5 my-5   ">
            SUBSCRIPTIONS
          </h4>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <div tabindex="0" class="focus:outline-none h-8 w-8 lg:mb-0">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_1.png"
                alt="man avatar"
                class="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            <p className="text-base leading-10 ">Kamikaze</p>
          </button>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <MdKeyboardArrowDown className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Show more</p>
          </button>
        </div>
        <div className="w-full px-4 hidden sm:block ">
          <hr className="border-gray-400 w-full" />
        </div>
        {/* --------------------------- */}
        <div className="w-full px-4 hidden sm:block ">
          <hr className=" border-gray-100 w-full" />
        </div>
        <div className="mt-6 flex flex-col justify-start items-start  w-full space-y-3 hidden sm:block ">
          <h4 className="text-gray-800 font-bold px-5 ">MORE FROM YOUTUBE</h4>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <AiTwotoneSetting className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Settings</p>
          </button>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <BiHelpCircle className="text-2xl text-slate-700" />
            <p className="text-base leading-10  ">Help</p>
          </button>
          <button
            className={`side_btn ${
              !sideIsOpen
                ? "sm:flex-col"
                : "sm:space-x-4 px-3 flex-col sm:flex-row sm:px-14"
            }  `}
          >
            <MdOutlineFeedback className="text-2xl text-slate-700" />
            <p className="text-base leading-10 whitespace-nowrap  ">
              Send feedback
            </p>
          </button>
        </div>
        <div className="h-36 text-xs px-5 flex justify-center  hidden sm:block ">
          &copy; {new Date().getFullYear()} Kamikaze
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
