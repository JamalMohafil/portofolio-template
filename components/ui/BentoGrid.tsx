"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlobe";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import { useEffect, useState } from "react";
import animationData from "@/data/confetti.json" assert { type: "json" };
import MagicButton from "./MagicButton";
import { FaCopy } from "react-icons/fa6";
import myImage from "@/public/myimage.png";
import { SkeletonFour } from "../Hero";
import dynamic from "next/dynamic";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("jamalmohafil1@gmail.com");
    setCopied(true);
  };
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  });

  const [minHeight, setMinHeight] = useState<string | undefined>(undefined);

  useEffect(() => {
    const updateMinHeight = () => {
      if (window.innerHeight >= 1200 && window.innerWidth >=600) {
        setMinHeight(id === 1 ? "300px" : id === 5 ? "300px" : undefined);
      } else if (window.innerHeight <= 1200 && window.innerWidth >= 768) {
        setMinHeight(id === 5 ? "300px" : undefined);
      }else (
        setMinHeight(undefined)
      )
    };
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, [id]);

  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden rounded-3xl border
             group/bento hover:shadow-xl transition
    
              duration-200 shadow-input dark:shadow-none justify-between 
              flex flex-col space-y-4  border-white/[0.1]`,
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        minHeight: minHeight,
      }}
    >
      <div className={`${id === 6 && "flex  justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && ` w-full opacity-80`
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
          {id === 5 && (
            <img
              src={"/myImage.png"}
              className={
                "object-contain max-lg:max-h-[390px] max-md:absolute max-sm:hidden left-[160px] top-[100px] object-start w-full max-h-[450px]"
              }
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        {/* ✅ الخلفية المتدرجة تظهر فقط عند id === 1 */}
        {id === 1 && (
          <div className="absolute inset-0 bg-gradient-to-t from-black-100/[0.6] to-transparent"/>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200
              relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`,
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm max-sm:text-xs lg:text-base z-10">
            {description}
          </div>
          <div
            className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 mb-2 mt-2 ${id === 1 && "max-w-[470px]"}`}
          >
            {title}
          </div>
          {id == 2 &&  <div className="w-full  h-full">
                        {" "}
                        <SkeletonFour />
                      </div>}
          {/* {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {["Typescript", "React.js", "Next.js"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {["MongoDB", "Express.js", "Nest.js"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )} */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid Slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy my email"}
                icon={<FaCopy />}
                position="left"
                otherClasses={`bg-[#161a31]`}
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
