import React from 'react'
import Meteors  from "@/components/ui/Meteors";
import { Skills } from '@/data';
import Image from 'next/image';

const TechStack = () => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My <span className="text-purple">My Stack Skills</span>
      </h1>
      <div className="mt-16">
        <div className=" w-full relative max-w-[90vw] ">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl  bg-gray-900 border border-gray-800  px-10 max-sm:px-3 max-sm:pb-5 max-sm:pt-3 pb-16 pt-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 max-w-6xl mx-auto">
              {Skills.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 sm:gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <Image
                    width={36}
                    height={36}
                    alt={item.name}
                    src={item.image}
                    className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] lg:w-[50px] lg:h-[50px]"
                  />
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold truncate">
                    {item.name}
                  </h2>
                </div>
              ))}
            </div>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default TechStack