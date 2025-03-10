import React, { useRef, useEffect } from "react";

const Loader = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0; 
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <video
        ref={videoRef}
        src="/load1.webm"
        autoPlay
        loop
        muted
        className="w-40 h-40"
      />
    </div>
  );
};

export default Loader;

