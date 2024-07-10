import React from "react";

import Video from "../Video";

 


import Vid1 from "../video/Vid1.mp4";

//import "./SingleProduct.css";

export default function App() {
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
      url: Vid1,
      likes: "3",
      comment: "22",
      shares: "23",
    },
    {
      channel: "ccc",
      song: "song-3",
      url: Vid1,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];

  return (
    <div className="App">
      <center>
        
        <h3>Reel</h3>
        {/*  */}

        <div className="video-container" id="video-container">
          {/*  */}

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

          {/*  */}
        </div>
      </center>
    </div>
  );
}