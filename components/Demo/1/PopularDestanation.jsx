import Image from "next/image";
import React from "react";

export default function PopularDestanation() {
  return (
    <div className="flex flex-col items-center max-w-screen-2xl mx-auto mt-2">
      <div className="text-base text-center text-orange-500">
        POPULAR DESTINATION
      </div>
      <div className="mt-4 text-5xl font-semibold text-center leading-[58px] text-cyan-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Vacations To Make Your
        <br />
        Experience Enjoyable
      </div>
      <div className="self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start p-6 mx-auto w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start self-stretch px-2 pt-2 pb-60 w-full text-sm leading-loose text-center text-gray-100 whitespace-nowrap rounded-lg aspect-[1.289] max-md:pb-24">
                <Image
                  loading="lazy"
                  src="/asset/popular-1.png"
                  className="object-cover absolute inset-0 size-full"
                  alt="popular"
                  width={800}
                  height={100}
                />
                <div className="relative px-5 py-3 bg-orange-500 rounded border border-orange-500 border-solid">
                  Popular
                </div>
                <Image
                  loading="lazy"
                  src="/asset/popular-2.png"
                  alt="popular"
                  width={800}
                  height={100}
                  className="object-contain shrink-0 rounded-2xl aspect-square w-[34px]"
                />
              </div>
              <div className="flex gap-1 mt-7 text-sm leading-loose whitespace-nowrap text-slate-600">
                <Image
                  loading="lazy"
                  src="/asset/location.png"
                  className="object-contain shrink-0 self-start w-3.5 aspect-square"
                  alt="location"
                  width={800}
                  height={100}
                />
                <div>Istanbul,Turkey</div>
              </div>
              <div className="mt-4 text-xl font-semibold leading-tight text-cyan-950">
                Colombian Coffee Trails
              </div>
              <div className="flex gap-1 mt-5 text-xs leading-none whitespace-nowrap text-cyan-950">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/84cf6d4e02bd81659f3fda67f473f54c193748f67726ccc01796081dfabe5cbf?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b8f34bd9f035f6a58d6290e0c94a6e8136832389421244a43bd3afde20c1d85?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/faa8a12bb2e1f1acb26c3f64701535c4aea7deb997b7c3c1b9a7a2689d6a755f?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/feca2040d27b81a4adcc4b128ad1fad96c4324d58180063815c8b8cdaf10f731?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <div>5.0(35)</div>
              </div>
              <div className="flex gap-5 justify-between self-stretch mt-7 w-full">
                <div className="flex gap-0.5 my-auto whitespace-nowrap text-cyan-950">
                  <div className="grow text-2xl font-semibold leading-tight">
                    $150
                  </div>
                  <div className="text-sm leading-loose">/Person</div>
                </div>
                <div className="px-6 py-4 text-sm leading-loose text-center text-gray-100 bg-orange-500 rounded border border-orange-500 border-solid max-md:px-5">
                  Book Trip
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start p-6 mx-auto w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start self-stretch px-2 pt-2 pb-60 w-full text-sm leading-loose text-center text-gray-100 whitespace-nowrap rounded-lg aspect-[1.289] max-md:pb-24">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6520174acd08ff3eb9c46ee51a96def64400ed82e922d1d1dbabc101168e627?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6520174acd08ff3eb9c46ee51a96def64400ed82e922d1d1dbabc101168e627?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6520174acd08ff3eb9c46ee51a96def64400ed82e922d1d1dbabc101168e627?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6520174acd08ff3eb9c46ee51a96def64400ed82e922d1d1dbabc101168e627?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6520174acd08ff3eb9c46ee51a96def64400ed82e922d1d1dbabc101168e627?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6520174acd08ff3eb9c46ee51a96def64400ed82e922d1d1dbabc101168e627?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6520174acd08ff3eb9c46ee51a96def64400ed82e922d1d1dbabc101168e627?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6520174acd08ff3eb9c46ee51a96def64400ed82e922d1d1dbabc101168e627?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative px-5 py-3 bg-orange-500 rounded border border-orange-500 border-solid">
                  Popular
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/476a9d5e860e7c2c38d8b841e0a62a4cde7869a7969b2b85e438a4fe43e63f10?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 rounded-2xl aspect-square w-[34px]"
                />
              </div>
              <div className="flex gap-1 mt-7 text-sm leading-loose whitespace-nowrap text-slate-600">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f415a9002239a2e2ce8fe398a6a14830c86f69d696386e3dec4b9e08abe5d7?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <div className="my-auto">Maldeves</div>
              </div>
              <div className="mt-4 text-xl font-semibold leading-tight text-cyan-950">
                Costa Rica Calling
              </div>
              <div className="flex gap-1 mt-3 text-xs leading-none whitespace-nowrap text-cyan-950">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d01ece180bb46d9b2626d51065f69125177dc7cbda8f76fb8f666fbd8f30d0?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6639b84f58940f4e2818b1e4cace96fd34e6bbbe96869c0772d698a1cbf15e5?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/39b784ccb7b3eb23d8248d1f8cf564bd5ad33e8442586fc7c4050532552bc373?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a43e903f934db1768962055ab7e523b2b325b45e8b96093b6946c4bfbe9cb792?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <div>5.0(35)</div>
              </div>
              <div className="flex gap-5 justify-between self-stretch mt-7 w-full">
                <div className="flex gap-0.5 my-auto whitespace-nowrap text-cyan-950">
                  <div className="grow text-2xl font-semibold leading-tight">
                    $170
                  </div>
                  <div className="text-sm leading-loose">/Person</div>
                </div>
                <div className="px-6 py-4 text-sm leading-loose text-center text-gray-100 bg-orange-500 rounded border border-orange-500 border-solid max-md:px-5">
                  Book Trip
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start p-6 mx-auto w-full bg-white rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start self-stretch px-2 pt-2 pb-60 w-full text-sm leading-loose text-center text-gray-100 whitespace-nowrap rounded-lg aspect-[1.289] max-md:pb-24">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc327419708e67819c79f924d3201f862aa857ff9ffdf236a10c63a2bcecfeec?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc327419708e67819c79f924d3201f862aa857ff9ffdf236a10c63a2bcecfeec?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc327419708e67819c79f924d3201f862aa857ff9ffdf236a10c63a2bcecfeec?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc327419708e67819c79f924d3201f862aa857ff9ffdf236a10c63a2bcecfeec?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc327419708e67819c79f924d3201f862aa857ff9ffdf236a10c63a2bcecfeec?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc327419708e67819c79f924d3201f862aa857ff9ffdf236a10c63a2bcecfeec?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc327419708e67819c79f924d3201f862aa857ff9ffdf236a10c63a2bcecfeec?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc327419708e67819c79f924d3201f862aa857ff9ffdf236a10c63a2bcecfeec?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative px-5 py-3 bg-orange-500 rounded border border-orange-500 border-solid">
                  Popular
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/25a4a42b8e1d2029fc09ec77febe4aae5ccfad4ba483e7f8448bee3b2efe3e4b?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 rounded-2xl aspect-square w-[34px]"
                />
              </div>
              <div className="flex gap-1 mt-7 text-sm leading-loose text-slate-600">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d26404935fb0d644afa6583669c3d2e86f638a5fb85a6f4a37d04fd6d341ca1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 self-start w-3.5 aspect-square"
                />
                <div className="basis-auto">Pokhara, Bangkok</div>
              </div>
              <div className="mt-4 text-xl font-semibold leading-tight text-cyan-950">
                Royal Himachal
              </div>
              <div className="flex gap-1 mt-3.5 text-xs leading-none whitespace-nowrap text-cyan-950">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c47b655dc1fcde8476616d36c7a0f74c1ec853a251ab1593932faa15338d372c?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/164f2aaec590b3c195af5fc89322ae8b47371ca2b7df76cf7e099e4133d91e6b?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a913e9d42c0afe54c8ca050e53c2ac9fc50589e01145371c37028552edbd9aa?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/52ce778d80cba4bdd5f55d957dfb3570ae89e722a5d6cba72c13e31e6a09159d?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="object-contain shrink-0 w-3.5 aspect-square"
                />
                <div>5.0(35)</div>
              </div>
              <div className="flex gap-5 justify-between self-stretch mt-7 w-full">
                <div className="flex gap-1 my-auto whitespace-nowrap text-cyan-950">
                  <div className="grow text-2xl font-semibold leading-tight">
                    $120
                  </div>
                  <div className="text-sm leading-loose">/Person</div>
                </div>
                <div className="px-6 py-4 text-sm leading-loose text-center text-gray-100 bg-orange-500 rounded border border-orange-500 border-solid max-md:px-5">
                  Book Trip
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
