import Image from "next/image";
import React from "react";

export default function SearchBestPlace() {
  return (
    <div className="flex flex-col items-center max-w-screen-2xl mx-auto mt-2">
      <div className="text-base text-center text-orange-500">
        Top Destination
      </div>
      <div className="mt-3 text-5xl font-semibold text-center leading-[58px] text-cyan-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Search a best place in the
        <br />
        world
      </div>
      <div className="mt-4 text-base leading-6 text-center text-slate-600 max-md:max-w-full">
        Our dating website offers a range of features and benifits that make
        finding love online
        <br />
        simple and enjoyable. With our advanced matching algorithm
      </div>
      <div className="self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 py-4 pr-16 pl-4 rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/qatar.png"
                alt="qatar"
                width={70}
                height={70}
                className="object-contain shrink-0 aspect-[0.99] w-[70px]"
              />
              <div className="flex flex-col my-auto">
                <div className="self-start text-base font-semibold text-cyan-950">
                  Qatar
                </div>
                <div className="mt-3 text-sm leading-loose text-cyan-950 text-opacity-70">
                  196 Place
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 py-4 pr-16 pl-4 rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/barbados.png"
                alt="barbados"
                width={70}
                height={70}
                className="object-contain shrink-0 aspect-[0.99] w-[70px]"
              />
              <div className="flex flex-col my-auto">
                <div className="text-base font-semibold text-cyan-950">
                  Barbados
                </div>
                <div className="self-start mt-3.5 text-sm leading-loose text-cyan-950 text-opacity-70">
                  196 Place
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 py-4 pr-16 pl-4 rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/hung.png"
                alt="hung"
                width={72}
                height={72}
                className="object-contain shrink-0 aspect-[1.01] w-[72px]"
              />
              <div className="flex flex-col my-auto">
                <div className="text-base font-semibold text-cyan-950">
                  Hungary
                </div>
                <div className="mt-2.5 text-sm leading-loose text-cyan-950 text-opacity-70">
                  196 Place
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 py-4 pr-16 pl-4 rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/netherlands.png"
                alt="netherlands"
                width={70}
                height={70}
                className="object-contain shrink-0 aspect-square w-[70px]"
              />
              <div className="flex flex-col my-auto">
                <div className="text-base font-semibold text-cyan-950">
                  Netherlands
                </div>
                <div className="self-start mt-3.5 text-sm leading-loose text-cyan-950 text-opacity-70">
                  196 Place
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 py-4 pr-16 pl-4 rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/uganda.png"
                alt="uganda"
                width={70}
                height={70}
                className="object-contain shrink-0 aspect-[0.99] w-[70px]"
              />
              <div className="flex flex-col my-auto">
                <div className="self-start text-base font-semibold text-cyan-950">
                  Uganda
                </div>
                <div className="mt-2.5 text-sm leading-loose text-cyan-950 text-opacity-70">
                  196 Place
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 py-4 pr-16 pl-4 rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/eritrea.png"
                alt="eritrea"
                width={70}
                height={70}
                className="object-contain shrink-0 aspect-[0.99] w-[70px]"
              />
              <div className="flex flex-col my-auto">
                <div className="self-start text-base font-semibold text-cyan-950">
                  Eritrea
                </div>
                <div className="mt-3.5 text-sm leading-loose text-cyan-950 text-opacity-70">
                  196 Place
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 py-4 pr-16 pl-4 rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/gambia.png"
                alt="gambia"
                width={70}
                height={70}
                className="object-contain shrink-0 aspect-[0.99] w-[70px]"
              />
              <div className="flex flex-col my-auto">
                <div className="self-start text-base font-semibold text-cyan-950">
                  Gambia
                </div>
                <div className="mt-3.5 text-sm leading-loose text-cyan-950 text-opacity-70">
                  196 Place
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 py-4 pr-16 pl-4 rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:mt-6">
              <Image
                loading="lazy"
                src="/asset/lebanon.png"
                alt="lebanon"
                width={72}
                height={72}
                className="object-contain shrink-0 aspect-[1.01] w-[72px]"
              />
              <div className="flex flex-col my-auto">
                <div className="text-base font-semibold text-cyan-950">
                  Lebanon
                </div>
                <div className="mt-3.5 text-sm leading-loose text-cyan-950 text-opacity-70">
                  196 Place
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
