import Image from "next/image";
import React from "react";

export default function KnowUs() {
  return (
    <div className="flex  max-w-screen-2xl  mx-auto flex-col md:flex-row justify-between p-4">
      <div className="mb-6 md:mb-0 px-4 md:px-8">
        <div className="text-sm leading-loose text-orange-600">
          GET TO KNOW US
        </div>
        <div className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-cyan-900">
          Experience the World
          <br />
          With Triptopia
        </div>
        <div className="mt-4 text-base leading-6 text-gray-700 md:max-w-2xl">
          Triptopia was born out of a shared passion for exploration and a
          desire to create
          <br />
          meaningful travel experiences. We believe travel is more than just
          visiting a place;
        </div>
        <div className="bg-slate-100 mt-6 p-6 rounded-lg text-cyan-900 text-lg leading-relaxed md:text-xl">
          The world is a book and those who do not travel
          <br />
          read only one page.
        </div>
        <div className="flex gap-3 mt-4 text-lg leading-none items-center">
          <Image
            loading="lazy"
            src="/asset/plane.svg"
            alt="plane"
            width={24}
            height={24}
            className="text-orange-500"
          />
          <div className="text-gray-800">
            To curate personalized itineraries
          </div>
        </div>
        <div className="flex gap-3 mt-4 text-lg leading-none items-center">
          <Image
            loading="lazy"
            src="/asset/plane.svg"
            alt="plane"
            width={24}
            height={24}
            className="text-orange-500"
          />
          <div className="text-gray-800">
            We believe travel fosters understanding
          </div>
        </div>

        <button className="w-full mt-6 py-3 text-base font-medium text-white bg-orange-500 rounded-lg border border-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
          Discover More
        </button>
      </div>

      {/* right */}
      <div className="relative">
        <div className="flex flex-col items-start px-3 max-w-full">
          <div className="flex overflow-hidden relative flex-col items-start pb-32 w-full">
            <Image
              loading="lazy"
              src="/asset/ab1.png"
              className="w-full h-auto"
              alt="about"
              width={1920}
              height={1080}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
          <div className="w-full max-w-sm mx-3 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">
                Special Offer!
              </h2>
              <p className="mt-2 text-gray-600">
                Get 20% off on your next purchase. Limited time offer!
              </p>
              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded mt-4 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
