import Image from "next/image";
import React from "react";
import { FaArrowAltCircleDown, FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex relative flex-col items-center px-20 pt-40 pb-16 min-h-[1290px] max-md:px-5 max-md:pt-24">
      <Image
        loading="lazy"
        src="/asset/hero1.png"
        alt="hero"
        width={800}
        height={100}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col max-w-full w-[1296px]">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-7 font-medium max-md:mt-10 max-md:max-w-full">
                <div className="text-lg leading-none text-orange-500">
                  Start Travelling with us
                </div>
                <div className="self-stretch mt-6 text-6xl leading-[77px] text-cyan-950 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Let’s enjoy your
                  <br />
                  desired trip with
                  <br />
                  Tourice
                </div>
                <div className="mt-9 text-base leading-6 text-slate-600">
                  The traveller where you can select your desired activity and
                  <br />
                  destinations of your choice for vacations.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="/asset/bg3.png"
                alt="bg3"
                width={400}
                height={100}
                className="object-contain grow w-full aspect-[1.13] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="px-10 py-9 rounded-lg bg-cyan-950 bg-opacity-80 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-base whitespace-nowrap max-md:mt-10">
                <div className="self-start text-gray-100">Destination</div>
                <div className="flex gap-5 justify-between px-4 py-2.5 mt-2.5 bg-white rounded border border-solid border-neutral-200 text-slate-600">
                  <div>Instanbul</div>
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-base max-md:mt-10">
                <div className="self-start text-gray-100">Duration</div>
                <div className="flex gap-5 justify-between px-4 py-2.5 mt-2.5 bg-white rounded border border-solid border-neutral-200 text-slate-600">
                  <div>4 Days</div>
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-base max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-w-full text-gray-100 w-[316px]">
                  <div>Travel Type</div>
                  <div>Travellers</div>
                </div>
                <div className="flex flex-wrap gap-6 mt-2">
                  <div className="flex gap-10 px-4 py-2.5 whitespace-nowrap bg-white rounded border border-solid border-neutral-200 text-slate-600">
                    <div>Adventure</div>
                    <FaChevronDown />
                  </div>
                  <div className="flex flex-auto gap-3 max-md:max-w-full">
                    <div className="flex gap-10 px-4 py-2.5 whitespace-nowrap bg-white rounded border border-solid border-neutral-200 text-slate-600">
                      <div>04</div>
                      <FaChevronDown />
                    </div>
                    <div className="px-14 py-3.5 text-center text-gray-100 bg-orange-500 rounded border border-orange-500 border-solid max-md:px-5">
                      Find Availability
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-32 text-sm leading-loose text-center text-orange-500 max-md:mt-10">
          CATEGORIES
        </div>
        <div className="self-center mt-6 text-5xl font-semibold leading-tight text-center text-cyan-950 max-md:max-w-full max-md:text-4xl">
          We Offer The Best Service
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 py-7 w-full text-center bg-white rounded-xl border border-solid border-teal-500 border-opacity-50 max-md:px-5 max-md:mt-6">
                <Image
                  loading="lazy"
                  src="/asset/weather.png"
                  alt="weather"
                  width={100}
                  height={100}
                  className="object-contain self-center aspect-[1.18] w-[92px]"
                />
                <div className="mt-5 text-xl font-semibold leading-tight text-cyan-950">
                  Calculated Weather
                </div>
                <div className="mt-6 text-base leading-6 text-slate-600">
                  Built Wicket longer admire do
                  <br />
                  barton vanity itself do in it
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 py-7 w-full text-center bg-white rounded-xl border border-solid border-teal-500 border-opacity-50 max-md:px-5 max-md:mt-6">
                <Image
                  loading="lazy"
                  src="/asset/flight.png"
                  alt="flight"
                  width={100}
                  height={100}
                  className="object-contain aspect-[1.18] w-[92px]"
                />
                <div className="mt-5 text-xl font-semibold leading-tight text-cyan-950">
                  Best Flight
                </div>
                <div className="self-stretch mt-5 text-base leading-6 text-slate-600">
                  Engrossed listening. Park gate sell
                  <br />
                  they west hard for
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 py-7 w-full text-center bg-white rounded-xl border border-solid border-teal-500 border-opacity-50 max-md:px-5 max-md:mt-6">
                <Image
                  loading="lazy"
                  src="/asset/local.png"
                  alt="local"
                  width={100}
                  height={100}
                  className="object-contain aspect-[1.18] w-[92px]"
                />
                <div className="mt-5 text-xl font-semibold leading-tight text-cyan-950">
                  Local Events
                </div>
                <div className="self-stretch mt-6 text-base leading-6 text-slate-600">
                  Barton vanity itself do in it. Preferd
                  <br />
                  to men it engrossed
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-11 py-7 w-full text-center bg-white rounded-xl border border-solid border-teal-500 border-opacity-50 max-md:px-5 max-md:mt-6">
                <Image
                  loading="lazy"
                  src="/asset/customize.png"
                  className="object-contain aspect-[1.18] w-[92px]"
                  alt="customize"
                  width={100}
                  height={100}
                />
                <div className="mt-5 text-xl font-semibold leading-tight text-cyan-950">
                  Customize Tour
                </div>
                <div className="self-stretch mt-6 text-base leading-6 text-slate-600">
                  We deliver outsourced aviation
                  <br />
                  services for
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
