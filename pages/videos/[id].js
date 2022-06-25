import React from "react";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import Header from '../../components/Header'

function YtVideo() {
  const router = useRouter();
  console.log(router.query);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
        <Header />
      <YouTube videoId={router.query.id} opts={opts} />
    </div>
  );
}

export default YtVideo;
