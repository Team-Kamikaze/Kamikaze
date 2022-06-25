import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "./ui/VideoCard";
import dummyData from "./ui/dummyData";

function Body() {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=weekend&maxResults=10&key=${process.env.NEXT_PUBLIC_API_KEY}`
  //       )
  //       .then((res) => res.json()).then(data => setData(data.items));
  //   }, []);
  console.log(dummyData);

  return (
    <div>
      <div className=" mx-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {dummyData.map((item) => (
          <VideoCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Body;
