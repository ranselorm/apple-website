import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, delay: 0.5 });
  }, []);
  return (
    <section className="bg-black w-full nav-height relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero-title" className="hero-title">
          iPhone 15 Pro
        </p>
      </div>
    </section>
  );
};

export default Hero;
