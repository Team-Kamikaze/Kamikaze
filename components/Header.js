import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { ImYoutube, ImYoutube2 } from "react-icons/im";
import { FiMenu, FiSearch } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import { IoAppsOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";

function Header() {
  return (
    <header className="border-b-2 items-center sm:h-20 flex flex-col sm:flex-row mt-2 text-gray-500 justify-between ">
      {/* left side */}
      <div className=" flex flex-row   sm:ml-20 items-center">
        <FiMenu className="text-gray-400 text-4xl" />
        <img
          src="/images/KAMIKAZE logo2.png"
          alt="man avatar"
          class="h-7 mx-4 "
        />
        {/* <ImYoutube className="text-red-500 ml-10 text-5xl" />
        <ImYoutube2 className=" ml-2 text-7xl" /> */}
      </div>

      {/* Middle side */}

      <div className="flex flex-row items-center mx-16 text-gray-400 grow my-2">
        <div className="border-2 flex flex-row items-center h-12 grow ">
          <div className="grow ">
            <input
              className="mx-2 text-2xl focus:outline-none "
              placeholder="Search"
            />
          </div>
          <div>
            <FiSearch className="mx-2 text-2xl " />
          </div>
        </div>
        <MdKeyboardVoice className="mx-2 bg-gray-50 rounded-full text-4xl p-1" />
      </div>

      {/* right side */}
      <div className="hidden sm:inline-flex ">
        <div className="  flex flex-row items-center ml-10 mr-20 text-gray-500 justify-evenly">
          <RiVideoAddLine className="mx-2 text-4xl p-1" />
          <IoAppsOutline className="mx-2 text-4xl p-1" />
          <BsBell className="mx-2 text-4xl p-1" />
          <div
            tabindex="0"
            class="focus:outline-none h-10 w-10 mb-4 lg:mb-0 mr-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_1.png"
              alt="man avatar"
              class="h-full w-full rounded-full overflow-hidden shadow"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
