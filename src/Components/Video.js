import React, { useRef, useState, useEffect } from "react";

// import components


import Footers from "./SingleProduct/Footers"
import Headers from "./SingleProduct/Headers"
import "./Video.css";

export default function Video({ channel, song, url, likes, comment, shares }) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  return (
    <div className="video-cards">
      <Headers />
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        loop
      />
      <Footers
        channel={channel}
        song={song}
        likes={likes}
        comment={comment}
        shares={shares}
      />
    </div>
  );
}