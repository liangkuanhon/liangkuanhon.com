import "./Home.css";
import React, { useEffect, useRef } from "react";

const ScrollVideo = () => {
  const videoRef = useRef(null);
  const rafId = useRef(null);
  const durationRef = useRef(0);

  // Define the scroll start and end pixel positions where video scrubbing happens
  const scrollStart = 500;  // px from top
  const scrollEnd = 1500;   // px from top

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      durationRef.current = video.duration;
      video.pause();

      const updateVideoTime = () => {
        const scrollY = window.scrollY;

        if (scrollY < scrollStart) {
          video.currentTime = 0;
        } else if (scrollY > scrollEnd) {
          video.currentTime = durationRef.current;
        } else {
          const scrollFraction = (scrollY - scrollStart) / (scrollEnd - scrollStart);
          video.currentTime = scrollFraction * durationRef.current;
        }

        rafId.current = requestAnimationFrame(updateVideoTime);
      };

      rafId.current = requestAnimationFrame(updateVideoTime);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      
      {/* Video (normal flow) */}
      <div style={{ height: "400px" }}>
        <video
          ref={videoRef}
          muted
          preload="auto"
          playsInline
          style={{ width: "100%", height: "100%" }}
          src="/src/assets/videos/video.mp4"
        />
      </div>

      <div className="border">
        <span>ARCHITECTING AND FINE-TUNING...</span>
      </div>

      <div className="tertiary-wrapper">
        {/* Future content */}
      </div>
    </>
  );
};

export default ScrollVideo;
