"use client";
import React, { useEffect, useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { Cover } from "./ui/Cover";
import createGlobe from "cobe";
import { AuroraBackground } from "./ui/AuroraBackground";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";

type Props = {};

const Hero = (props: Props) => {
  return (
    <AuroraBackground id="home">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="pb-10 w-screen min-h-[100vh] flex justify-center items-center"
      >
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[100vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="top-10 left-full h-[100vh] w-[50vw] "
            fill="purple"
          />
          <Spotlight
            className="top-28 left-80 h-[80vh] w-[50vw] "
            fill="blue"
          />
          <div>
            {/* Radial gradient for the container to give a faded look */}
            <div
              className="absolute pointer-events-none inset-0  flex items-center justify-center
           dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            ></div>
          </div>
          <div className="flex justify-center relative">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
              {/* <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Hi there, I'm Jamal "
            /> */}

              {/* <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Hello Everyone <br /> I'm <Cover>Jamal Mohafil</Cover>
              </h1> */}
              <HeroHighlight>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="sm:text-4xl text-3xl mb-4 px-4 md:text-5xl font-bold
                   text-neutral-700 dark:text-white max-w-4xl leading-relaxed
                    lg:leading-snug text-center mx-auto "
                >
                  <span className="">
                    {" "}
                    Hello Everyone <br />
                  </span>
                  <span className="max-md:mt-4 md:mt-2 max-sm:mt-0 max-md:block">
                    {" "}
                    I'm{" "}
                    <Highlight className="text-black md:text-5xl text-3xl max-[370px]:text-2xl  sm:text-4xl dark:text-white">
                      Jamal Mohafil
                    </Highlight>
                  </span>
                </motion.h1>
              </HeroHighlight>
              <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                A Professional Developer Crafting Scalable & Efficient Code
              </p>
              <h2
                className="text-xs text-center text-blue-100 max-w-92 
            tracking-widest uppercase max-md:mb-4"
              >
                Building High-Performance Web Apps with Next.js{" "}
              </h2>
              <div className="flex gap-4  max-sm:flex-col">
                <MagicButton
                  icon={<FaLinkedin />}
                  position="right"
                  title="My LinkedIn Profile"
                />
                <MagicButton
                  icon={<FaLocationArrow />}
                  position="right"
                  title="Contact Me"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
