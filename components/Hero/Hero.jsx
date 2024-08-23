import React from "react";
import RightSideHero from "./RightSideHero";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex relative flex-col items-start px-16 py-16 w-full rounded-2xl min-h-[726px] max-md:px-5 max-md:max-w-full">
        {/* background */}
        <Image
          loading="lazy"
          src="/asset/hero-4.png"
          alt="hero"
          width={1920}
          height={100}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative self-stretch max-md:max-w-full w-full max-w-screen-2xl  mx-auto">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col items-start self-stretch my-auto text-black max-md:mt-10">
                <div className="px-6 py-5 text-base font-bold leading-loose text-center bg-yellow-400 rounded-[50px] max-md:px-5">
                  Luxury Travel Redefined
                </div>
                <div className="self-stretch mt-8 text-5xl font-extrabold leading-[61px] max-md:text-4xl max-md:leading-[52px]">
                  Your Passport to
                  <br />
                  Global Glamour
                </div>
                <div className="mt-9 ml-5 text-sm leading-6 max-md:ml-2.5">
                  Personalized Travel Experiences
                  <br />
                  Expert Destination Knowledge
                  <br />
                  Exceptional Customer Service
                </div>
              </div>
            </div>
            {/* right side */}
            <RightSideHero />
          </div>
        </div>
        <div className="flex relative w-full max-w-screen-2xl mx-auto gap-2 mt-5">
          <Image
            loading="lazy"
            src="/asset/googleplay.png"
            alt="googleplay"
            width={200}
            height={100}
            className="object-contain shrink-0 max-w-full aspect-[3.13] w-[204px]"
          />
          <Image
            loading="lazy"
            src="/asset/appstore.png"
            alt="appstore"
            width={200}
            height={100}
            className="object-contain shrink-0 max-w-full aspect-[3.11] w-[202px]"
          />
        </div>
      </div>
    </div>
  );
}
