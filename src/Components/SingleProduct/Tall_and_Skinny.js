import React from "react";
import Video from "../Video";

import Vid1 from "../video/vid7.mp4";


export default function Tall_and_Skinny() {
  const data = [
    {
      channel: "aaa",
      song: "song-1",
      url: Vid1,
      likes: "32",
      comment: "2",
      shares: "23",
    },
   
  ];

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Tall And Skinny</h1>
      <div className="Apps">
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
              />
            ))}
          </div>
        </center>
      </div>
    </>
  );
}