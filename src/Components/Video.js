import React, { useRef, useState, useEffect } from "react";
import Footers from "./SingleProduct/Footers";
import Headers from "./SingleProduct/Headers";
import "./Video.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

export default function Video({ channel, song, url, likes, comment, shares }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const vidRef = useRef();

  const toggleVideo = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    vidRef.current.muted = !vidRef.current.muted;
  };

  useEffect(() => {
    const scrollHandler = () => {
      if (vidRef.current) {
        vidRef.current.pause();
        setIsVideoPlaying(false);
      }
    };

    const scrollContainer = document.getElementById("video-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play();
      setIsVideoPlaying(true);
    }
  }, [url]);

  return (
    <div className="video-cards">
      <Headers />
      <div className="video-wrapper">
        <video
          onClick={toggleMute}
          className="video-player"
          ref={vidRef}
          src={url}
          loop
          muted={isMuted}
        />
        <div className="video-overlay">
          <div className="video-icons">
            <div className="icon" onClick={toggleVideo}>
              <FavoriteBorderIcon />
              <span>{likes}</span>
            </div>
            <div className="icon">
              <ChatBubbleOutlineIcon />
              <span>{comment}</span>
            </div>
            <div className="icon">
              <ShareIcon />
              <span>{shares}</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Footers
        channel={channel}
        song={song}
        likes={likes}
        comment={comment}
        shares={shares}
      /> */}
    </div>
  );
}
