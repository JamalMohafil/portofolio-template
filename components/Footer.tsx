import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-center text-white-200 mt-10 my-5">
          Reach out to me today and let's turn your vision into a reality. Let's
          build something amazing together!
        </p>
        <a href="mailto:jamalmohafil1@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row max-md:gap-5 flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &#169; 2025 | Jamal Mohafil
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile, index) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center
             items-center backdrop-blur-lg rounded-lg border border-black-300 saturate-150
              bg-opacity-75 bg-black-200"
            >
              <img
                src={profile.img}
                alt={`${profile.id}`}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
