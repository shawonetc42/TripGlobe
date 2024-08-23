import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto px-3 items-center text-center rounded-none">
      {/* text */}
      <div className="text-sm font-medium leading-loose text-center text-orange-500">
        Testimonial
      </div>
      <div className="mt-5 text-5xl font-semibold leading-tight text-center text-cyan-950">
        What Our Traveller Said About Us
      </div>
      <div className="flex flex-col items-center mt-10 px-20 pb-16 rounded-lg border border-teal-500 border-solid max-md:px-5 max-md:max-w-full">
        <div className="absulate top-[-100px] flex flex-col items-center max-w-full w-[713px]">
          <Image
            loading="lazy"
            src="/team-1.png.png"
            alt="team-1"
            width={200}
            height={200}
            className="relative  object-contain w-20 -top-10 aspect-square rounded-[40px]"
          />
          <div className="self-stretch mt-16 text-base leading-6 max-md:mt-10 max-md:max-w-full">
            I cant thank Triptopia enough for helping me find love! Initially, I
            was hesitant about online dating, but
            <br />
            this platform changed my perspective entirely. The user-friendly
            interface, personalized matches, and
            <br />
            the welcoming community made me feel at ease from the very
            beginning.
          </div>
          <div className="mt-8 text-xl font-semibold leading-tight text-cyan-950">
            Berk Arisoy
          </div>
          <div className="mt-3.5 text-sm leading-loose">Product Designer</div>
        </div>
      </div>
    </div>
  );
}
