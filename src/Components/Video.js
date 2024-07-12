import React, { useRef, useState, useEffect, forwardRef } from "react";
import Headers from "./SingleProduct/Headers";
import "./Video.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

const Video = forwardRef(({ channel, song, url, likes, comment, shares }, ref) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const localVidRef = useRef();
  const vidRef = ref || localVidRef;

  const toggleVideo = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleMute = () => {
    setIsMuted((prevMuted) => {
      const newMuted = !prevMuted;
      vidRef.current.muted = newMuted;
      return newMuted;
    });
  };

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = isMuted;
    }
  }, [isMuted]);

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
    </div>
  );
});

export default Video;
