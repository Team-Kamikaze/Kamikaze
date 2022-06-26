import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { ImYoutube, ImYoutube2 } from "react-icons/im";
import { FiMenu, FiSearch } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import { IoAppsOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { useRecoilState } from "recoil";
import {searchValueAtom, sideIsOpenAtom} from '../atoms'
import { useRouter } from "next/router";

function Header({handleSearch}) {
  const [searchValue, setSearchValue] = useRecoilState(searchValueAtom);
  const [sideIsOpen, setSideIsOpen] = useRecoilState(sideIsOpenAtom);
  const router = useRouter()
  return (
    <header className="sticky  top-0 z-50 py-2 bg-white shadow-md border-b-2 items-center sm:h-20 flex flex-col space-y-3 sm:space-y-0 px-10 sm:flex-row  text-gray-500 justify-between ">
      {/* left side */}
      <div className=" flex items-center justify-center  space-x-5">
        <FiMenu onClick={() => setSideIsOpen(prev => !prev)} className="text-gray-400 text-3xl  cursor-pointer" />
        <img
          src="/images/KAMIKAZE_logo2.png"
          alt="kamikaze-logo"
          class="  object-contain w-40 cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Middle side */}

      <div className="flex flex-row items-center  text-gray-400  my-2">
        <div className="border-2 flex flex-row items-center h-10 ">
          <div className="">
            <input
              className="mx-2  w-[200px]   lg:w-[400px]  focus:outline-none placeholder:text-gray-400  text-black "
              placeholder="Search"
              value={searchValue}
              onChange = {(e) => setSearchValue(e.target.value) }
            />
          </div>
          <div>
            <FiSearch onClick = {handleSearch} className=" mx-2 text-2xl cursor-pointer " />
          </div>
        </div>
        <MdKeyboardVoice className="hidden md:inline-flex  mx-2 bg-gray-50 rounded-full text-4xl p-1" />
      </div>

      {/* right side */}
      <div className="hidden lg:inline-flex ">
        <div className="  flex flex-row space-x-2 items-center   text-gray-500 justify-evenly">
          <RiVideoAddLine className=" text-3xl p-1" />
          <IoAppsOutline className=" text-3xl p-1" />
          <BsBell className=" text-3xl p-1" />
          <div
            tabindex="0"
            class="focus:outline-none h-8 w-8 mb-4 lg:mb-0"
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
