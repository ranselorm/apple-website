import React from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, index) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-0">
            <div className="video-carousel_container">
              <div className="bg-black w-full h-full rounded-3xl overflow-hidden">
                <video id="video" playsInline={true} muted preload="auto">
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
