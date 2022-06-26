import React from "react";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import { useRouter } from "next/router";
TimeAgo.addDefaultLocale(en);

function VideoCard({ item }) {
  const router = useRouter();
  const {
    id: { videoId },
    snippet: {
      title,
      description,
      channelTitle,
      publishTime,
      thumbnails: {
        medium: { url },
      },
    },
  } = item;
  const timeAgo = new TimeAgo("en-US");

  // console.log(item);

  return (
    <div className="cursor-pointer" onClick={() => router.push(`/videos/${videoId}?title=${title}&publishTime=${publishTime}`)}>
      <img className="w-full" src={url} />
      <p className="text-sm font-semibold mt-3">{title}</p>
      <div className="font-medium">
        <span className="text-xs text-gray-500">{channelTitle} </span>.
        <span className="text-xs text-gray-500 ">
          {" "}
          {timeAgo.format(
            new Date().getTime() -
              (new Date().getTime() - new Date(publishTime).getTime())
          )}
        </span>
      </div>
    </div>
  );
}

export default VideoCard;
