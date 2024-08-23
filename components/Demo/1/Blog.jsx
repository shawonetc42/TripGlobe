import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <div className="flex flex-col items-start max-w-screen-2xl mx-auto mt-2">
      <div className="text-base text-orange-500">Blog</div>
      <div className="mt-3.5 text-5xl font-semibold leading-[58px] text-cyan-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        We Are The Best Travel
        <br />
        Agency
      </div>
      <div className="self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full text-base max-md:mt-6 max-md:max-w-full">
              <Image
                loading="lazy"
                src="/asset/blog.png"
                alt="blog"
                width={400}
                height={400}
                className="object-contain self-stretch w-full aspect-[1.43] max-md:max-w-full"
              />
              <div className="flex gap-7 mt-10 text-sm leading-loose text-orange-500">
                <div>14 Jan, 2022</div>
                <div>4 day 3 Night</div>
              </div>
              <div className="mt-5 text-4xl font-medium leading-10 text-cyan-950 max-md:max-w-full">
                Cappadocia Chronicles Exploring
                <br />
                Fairy Chimneys
              </div>
              <div className="mt-5 leading-6 text-slate-600 max-md:max-w-full">
                Experience bespoke itineraries and unparalleled service.Explore
                the world without
                <br />
                breaking the bank.
              </div>
              <div className="px-6 py-3.5 mt-7 text-center text-gray-100 rounded border border-solid bg-cyan-950 border-cyan-950 max-md:px-5">
                Explore More
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-1.5 w-full max-md:mt-8 max-md:max-w-full">
              <div className="flex gap-7 text-sm leading-loose text-orange-500">
                <div>14 Jan, 2022</div>
                <div>4 day 3 Night</div>
              </div>
              <div className="mt-4 text-4xl font-medium leading-10 text-cyan-950 max-md:max-w-full">
                Cappadocia Chronicles Exploring
                <br />
                Fairy Chimneys
              </div>
              <div className="mt-4 text-base leading-6 text-slate-600 max-md:max-w-full">
                Experience bespoke itineraries and unparalleled service.Explore
                the world without
                <br />
                breaking the bank.
              </div>
              <div className="flex flex-col items-start self-stretch py-9 pr-16 mt-9 w-full border-t border-neutral-200 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-7 text-sm leading-loose text-orange-500">
                  <div>14 Jan, 2022</div>
                  <div>4 day 3 Night</div>
                </div>
                <div className="mt-4 text-4xl font-medium leading-10 text-cyan-950 max-md:max-w-full">
                  Cappadocia Chronicles Exploring
                  <br />
                  Fairy Chimneys
                </div>
                <div className="mt-4 text-base leading-6 text-slate-600 max-md:max-w-full">
                  Experience bespoke itineraries and unparalleled
                  service.Explore the world without
                  <br />
                  breaking the bank.
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch pt-9 pr-16 pb-2 w-full border-t border-neutral-200 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-7 text-sm leading-loose text-orange-500">
                  <div>14 Jan, 2022</div>
                  <div>4 day 3 Night</div>
                </div>
                <div className="mt-5 text-4xl font-medium leading-10 text-cyan-950 max-md:max-w-full">
                  Cappadocia Chronicles Exploring
                  <br />
                  Fairy Chimneys
                </div>
                <div className="mt-4 text-base leading-6 text-slate-600 max-md:max-w-full">
                  Experience bespoke itineraries and unparalleled
                  service.Explore the world without
                  <br />
                  breaking the bank.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
