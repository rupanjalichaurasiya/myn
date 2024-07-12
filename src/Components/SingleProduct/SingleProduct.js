import React, { useEffect, useRef } from "react";
import Video from "../Video";
import "./Single.css";
import Vid1 from "../video/vid2.mp4";
import Vid2 from "../video/vid5.mp4";
import Vid3 from "../video/vid4.mp4";
import Mini_Nav_Studi from "./Mini_Nav_Studi";

export default function Sapp() {
  const data = [
    {
      channel: "aaa",
      song: "song-1",
      url: Vid1,
      likes: "32",
      comment: "2",
      shares: "23",
    },
    {
      channel: "bbb",
      song: "song-2",
      url: Vid2,
      likes: "3",
      comment: "22",
      shares: "23",
    },
    {
      channel: "ccc",
      song: "song-3",
      url: Vid3,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];

  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, data.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, [data]);

  return (
    <>
      <Mini_Nav_Studi />
      <div className="App">
        <center>
          <div className="video-container" id="video-container">
            {data.map((list, i) => (
              <Video
                key={i}
                channel={list.channel}
                song={list.song}
                url={list.url}
                likes={list.likes}
                comment={list.comment}
                shares={list.shares}
                ref={(el) => (videoRefs.current[i] = el)}
              />
            ))}
          </div>
        </center>
      </div>
    </>
  );
}
