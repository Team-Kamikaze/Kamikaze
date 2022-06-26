import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "./ui/VideoCard";
import dummyData from "./ui/dummyData";
import { useRecoilValue } from "recoil";
import { searchValueAtom } from "../atoms";

function Body({ data }) {
  const searchValue = useRecoilValue(searchValueAtom);
  console.log(searchValue);

  return (
    <div className="bg-[#F9F9F9] border-t-2 p-5 ">
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 ">
          : data?.map((item) => <VideoCard item={item} />)}
      </div>
    </div>
  );
}

export default Body;
