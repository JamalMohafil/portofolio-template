import { projects } from "@/data";
import { title } from "process";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

type Props = {};

const RecentProjects = (props: Props) => {
  return (
    <div className="py-20 max-h-max w-full flex flex-col gap-6 sm:max-w-[95vw] max-w-7xl" id="projects">
      <h1 className="heading">
        A small selection <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap flex-rowh -max justify-center items-center
       lg:gap-x-20 gap-x-24 lg:gap-y-8 gap-y-12 mt-10 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className={` h-[28rem] sm:min-h-[28.5rem] lg:min-h-[32.5rem] 
                    flex items-center justify-center sm:w-[340px] w-[75vw]`}
            key={id}
          >
            <PinContainer title={"Visit"} className="p-4" href={link}>
              <div
                className="relative h-max flex items-center justify-center
               sm:w-[340px]  w-[80vw] overflow-hidden  mb-10"
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 top-0 absolute" />
              </div>
              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-2">
                {title}
              </h1>
              <p className="lg:text-sm lg:font-normal font-light text-sm line-clamp-3">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8
                      flex justify-center items-center"
                      style={{
                        transform: `
                        translateX(-${5 * index * 2}px)
                      `,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <FaLocationArrow className="ms-3" color="#acd0f9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
