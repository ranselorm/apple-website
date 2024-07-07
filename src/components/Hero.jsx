import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, delay: 0.5 });
    gsap.to("#cta", { opacity: 1, delay: 0.5, y: 0, delay: 1.2 });
  }, []);
  return (
    <section className="bg-black w-full nav-height relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero-title" className="hero-title mt-24">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/10">
          <video
            autoPlay
            playsInline={true}
            muted
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div
            id="cta"
            className="flex flex-col items-center opacity-0 translate-y-20"
          >
            <a href="#highlights" className="btn">
              Buy
            </a>
            <p className="font-normal text-xl">From $199/month or $999</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
