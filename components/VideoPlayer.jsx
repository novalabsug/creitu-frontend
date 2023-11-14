import React from "react";

const VideoPlayer = ({ url }) => {
  return (
    <video width="100%" height={400} autoPlay loop muted>
      {/* Replace 'your-video.mp4' with the actual video file */}
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
