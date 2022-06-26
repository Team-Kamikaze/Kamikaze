import React, { useState } from "react";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { BiLike, BiDislike, BiShare, BiCut } from "react-icons/bi";
import { BsThreeDots, BsSave } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { sideIsOpenAtom } from "../../atoms";

function YtVideo() {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);
  console.log(router.query);
  const { id, title, publishTime } = router.query;
  const sideIsOpen = useRecoilValue(sideIsOpenAtom);

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleLiked = () => {
    setIsLiked((prev) => !prev);
    if (isDisLike == true) setIsDisLike(false);
  };
  const handleDisLike = () => {
    setIsDisLike((prev) => !prev);
    if (isLiked == true) setIsLiked(false);
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className={` sm:inline   ${sideIsOpen ? "" : "hidden"}`}>
          <Sidebar />
        </div>
        <div className="flex-1">
          <div className="p-5 flex items-center justify-center">
              <div className="w-full  h-[250px] xs:w-[480px] xs:h-[360px] lg:h-[390px] lg:w-[640px] xl:h-[498px] xl:w-[885px]">
                <YouTube
                  videoId={id}
                  opts={opts}
                  title={title}
                  className="w-full h-full"
                />
                 <div className="mt-5  ">
                <div>
                  <p className=" lg:text-xl font-medium">{title}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="hidden md:inline-flex text-gray-500 text-sm mt-1">
                    <span>{new Date(publishTime).toLocaleDateString()}</span>
                  </div>
                  <div className="flex space-x-5 items-center">
                    <div
                      className={`flex items-center space-x-2 font-medium text-xs md:text-base cursor-pointer ${
                        isLiked && "text-blue-500"
                      }`}
                      onClick={handleLiked}
                    >
                      <BiLike className="text-lg md:text-2xl " />
                      <span>LIKE</span>
                    </div>
                    <div
                      className={`flex items-center space-x-2 font-medium text-xs md:text-base cursor-pointer ${
                        isDisLike && "text-red-500"
                      }`}
                      onClick={handleDisLike}
                    >
                      <BiDislike className="text-lg md:text-2xl" />
                      <span>DISLIKE</span>
                    </div>
                    <div className="flex items-center space-x-2 font-medium text-xs md:text-base cursor-pointer">
                      <BiShare className="text-lg md:text-2xl" />
                      <span>SHARE</span>
                    </div>
                    <div className="flex items-center space-x-2 font-medium text-xs md:text-base cursor-pointer">
                      <BiCut className="text-lg md:text-2xl" />
                      <span>CUT</span>
                    </div>
                    <div className="hidden xs:flex items-center space-x-2 font-medium text-xs md:text-base cursor-pointer">
                      <BsSave className="text-lg md:text-2xl" />
                      <span>SAVE</span>
                    </div>
                    <div className="hidden xs:flex items-center space-x-2 font-medium text-xs md:text-base cursor-pointer">
                      <BsThreeDots className="text-lg md:text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              </div>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default YtVideo;
