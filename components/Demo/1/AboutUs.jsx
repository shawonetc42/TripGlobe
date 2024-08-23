import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-w-screen-2xl mx-auto mt-2">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src="/asset/coverbg.png"
            alt="coverbg"
            width={400}
            height={100}
            className="object-contain grow w-full aspect-[0.95] max-md:mt-6 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-base text-slate-600 max-md:mt-10 max-md:max-w-full">
            <div className="self-start text-orange-500">ABOUT US</div>
            <div className="self-start mt-4 text-5xl font-semibold leading-[58px] text-cyan-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              We Are The Best Travel
              <br />
              Agency
            </div>
            <div className="flex flex-wrap gap-4 mt-6 leading-6">
              <Image
                loading="lazy"
                src="/asset/readme.png"
                alt="readme"
                width={100}
                height={100}
                className="object-contain shrink-0 aspect-[0.99] w-[90px]"
              />
              <div className="flex-auto self-start w-[492px] max-md:max-w-full">
                Venenatis donec sit sit egestas varius. Dictum sit risus
                scelerisque nulla
                <br />
                amet vel mollis sem morbi. Egestas quam scelerisque morbi nisi
                lacinia
                <br />
                nunc.
              </div>
            </div>
            <div className="self-end leading-6 max-md:max-w-full">
              Venenatis donec sit sit egestas varius. Dictum sit risus
              scelerisque nulla
              <br />
              amet vel mollis sem morbi. Egestas quam scelerisque morbi nisi
              lacinia
              <br />
              nunc.Venenatis donec sit sit egestas varius.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
