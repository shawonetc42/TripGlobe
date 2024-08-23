import Image from "next/image";
import React from "react";

export default function CoverSection() {
  return (
    <div className="relative flex items-center justify-center h-screen max-h-[400px] mt-2">
      <Image
        loading="lazy"
        src="/asset/coverbg1.png"
        alt="cover"
        width={800}
        height={100}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative text-center text-5xl font-semibold text-gray-100 leading-[58px] max-md:px-5 max-md:py-24 max-md:text-4xl max-md:leading-[54px]">
        Start Saving on Your
        <br />
        Travel Budget
      </div>
    </div>
  );
}
