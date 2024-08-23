import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <div className="mt-2">
      <div className="flex flex-col justify-center items-end px-16 py-32 bg-neutral-100 max-md:py-24 max-md:pl-5">
        <div className="w-full max-w-[1612px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="/asset/testimonial.png"
                alt="testimonial"
                width={300}
                height={300}
                className="object-contain grow shrink-0 max-w-full aspect-[0.68] w-[300px] max-md:mt-8"
              />
            </div>
            <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-2 w-full max-md:mt-9 max-md:max-w-full">
                <div className="text-sm leading-loose text-orange-500">
                  TESTIMONIAL
                </div>
                <div className="mt-4 text-5xl font-semibold leading-[58px] text-cyan-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  What Customer Said
                  <br />
                  About Us
                </div>
                <div className="self-stretch mt-3 w-full max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-start py-7 pr-20 pl-6 mx-auto w-full rounded-lg border border-gray-200 border-solid bg-cyan-950 max-md:px-5 max-md:max-w-full">
                        <div className="text-sm leading-6 text-white">
                          As a seasoned traveler, I can confidently say that
                          <br />
                          Tourice is one of the best travel agencies I have had
                          <br />
                          the pleasure of working.
                        </div>
                        <div className="flex gap-1 mt-6">
                          <Image
                            loading="lazy"
                            src="/asset/5star.svg"
                            alt="5star"
                            width={24}
                            height={24}
                            className="object-contain w-20 h-5"
                          />
                        </div>
                        <div className="flex gap-3 mt-5 text-white">
                          <Image
                            loading="lazy"
                            src="/avatar/team-3.png.png"
                            alt="testimonial"
                            width={48}
                            height={48}
                            className="object-contain shrink-0 w-12 rounded-3xl aspect-square"
                          />
                          <div className="flex flex-col my-auto">
                            <div className="text-base font-semibold leading-tight">
                              Peter Parker
                            </div>
                            <div className="self-start mt-3 text-sm leading-loose">
                              Founder
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-wrap gap-2 items-center max-md:max-w-full">
                        <div className="flex flex-col items-start self-stretch py-7 pr-20 pl-6 my-auto bg-white rounded-lg border border-gray-200 border-solid min-w-[240px] w-[441px] max-md:px-5 max-md:max-w-full">
                          <div className="text-sm leading-6 text-slate-600">
                            As a seasoned traveler, I can confidently say that
                            <br />
                            Tourice is one of the best travel agencies i have
                            had
                            <br />
                            the pleasure of working.
                          </div>
                          <div className="flex gap-1 mt-6">
                            <Image
                              loading="lazy"
                              src="/asset/5star.svg"
                              alt="5star"
                              width={24}
                              height={24}
                              className="object-contain w-20 h-5"
                            />
                          </div>
                          <div className="flex gap-3 mt-5">
                            <Image
                              loading="lazy"
                              src="/avatar/team-2.png.png"
                              alt="testimonial"
                              width={48}
                              height={48}
                              className="object-contain shrink-0 w-12 rounded-3xl aspect-square"
                            />
                            <div className="flex flex-col my-auto">
                              <div className="text-base font-semibold leading-tight text-cyan-950">
                                John Snow
                              </div>
                              <div className="self-start mt-3 text-sm leading-loose text-slate-600">
                                Customer
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
