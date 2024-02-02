import React, { useRef } from "react";
import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import video_poster from "../Images/missiongraphic.png";

const VideoPlayer = ({ src, video_poster, func }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };
  console.log(func);
  return (
    <>
      {!func ? (
        <div className="relative">
          <video
            poster={video_poster}
            ref={videoRef}
            src={src}
            className="w-full"
            controls={false}
            muted
          ></video>
          <div className="absolute inset-0 flex items-center justify-center">
            {isPlaying ? (
              <FaPause
                className="text-white text-6xl cursor-pointer"
                onClick={togglePlay}
              />
            ) : (
              <FaPlay
                className="text-white text-6xl cursor-pointer"
                onClick={togglePlay}
              />
            )}
          </div>
        </div>
      ) : <video
      poster={video_poster}
      src={src}
      className="w-full"
      controls={false}
      muted
      autoPlay
      loop
    ></video>}
    </>
  );
};

export default VideoPlayer;
