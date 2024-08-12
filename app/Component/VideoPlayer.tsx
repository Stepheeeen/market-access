"use client"
import React, { useState, useEffect } from 'react';

const VideoOverlay = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 overflow-hidden">
      {/* Video Overlay */}
      {showVideo && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-[85%] h-[85%]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1dtraWLEy38?autoplay=1"
              title="YouTube video player"
            //   frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full px-2 py-1 focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Play Button at Bottom Right */}
      {!showVideo && (
        <button
          onClick={handleShowVideo}
          className="fixed bottom-[15%] right-4 z-40 bg-[#00a99d] text-white px-4 py-2.5 rounded-full shadow-lg focus:outline-none"
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default VideoOverlay;
