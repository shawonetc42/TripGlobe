import Image from "next/image";
import React from "react";

export default function Distination() {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto p-3 items-center rounded-none">
      <div className="text-sm font-medium leading-loose text-center text-orange-500">
        Top Destination
      </div>
      <div className="mt-4 text-5xl font-semibold text-center leading-[58px] text-cyan-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Unveiling Worlds Top
        <br />
        Travel Hotspots
      </div>
      {/* Image section */}
      <div className="self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col items-start pt-80 pr-20 pb-9 pl-8 text-white min-h-[412px] max-md:px-5 max-md:pt-24 max-md:mt-6 max-md:max-w-full">
              <Image
                loading="lazy"
                src="/asset/destination-1.png"
                alt="destination"
                width={800}
                height={100}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative text-2xl font-medium leading-tight">
                Pryde mountains
              </div>
              <div className="relative mt-3 text-sm leading-loose">
                Prydelands, 100 Trips
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col text-white aspect-square max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/ifel.png"
                alt="destination"
                width={800}
                height={100}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col items-start pt-80 pr-20 pb-9 pl-8 bg-cyan-950 bg-opacity-20 max-md:px-5 max-md:pt-24">
                <div className="text-2xl font-medium leading-tight">
                  Eiffel Tower
                </div>
                <div className="mt-4 text-sm leading-loose">
                  France, 150 Trips
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col text-white aspect-square max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/destination-2.png"
                alt="destination"
                width={800}
                height={100}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col items-start pt-80 pr-20 pb-9 pl-8 bg-cyan-950 bg-opacity-20 max-md:px-5 max-md:pt-24">
                <div className="text-2xl font-medium leading-tight">
                  Iceland
                </div>
                <div className="mt-4 text-sm leading-loose">
                  Prydelands, 100 Trips
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col text-white aspect-square max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/jammu.png"
                alt="destination"
                width={800}
                height={100}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col items-start pt-80 pr-20 pb-9 pl-8 bg-cyan-950 bg-opacity-20 max-md:px-5 max-md:pt-24">
                <div className="text-2xl font-medium leading-tight">
                  Jammu Kashmir
                </div>
                <div className="mt-4 text-sm leading-loose">
                  Prydelands, 100 Trips
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col text-white aspect-square max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/destination-3.png"
                alt="destination"
                width={800}
                height={100}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col items-start pt-80 pr-20 pb-9 pl-8 bg-cyan-950 bg-opacity-20 max-md:px-5 max-md:pt-24">
                <div className="text-2xl font-medium leading-tight">
                  Bosphorus Trip
                </div>
                <div className="mt-3 text-sm leading-loose">
                  Prydelands, 100 Trips
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* see all */}
      <div
        className="px-7 py-4 mt-16 max-w-full text-sm leading-loose text-center text-white 
      rounded border border-solid bg-cyan-950 border-cyan-950 w-[259px] max-md:px-5 max-md:mt-10"
      >
        See All Top Spots
      </div>
    </div>
  );
}
