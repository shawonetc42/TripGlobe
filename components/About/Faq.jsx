"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import the icon

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What destinations do you offer tours to?",
      answer:
        "Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.",
    },
    {
      question: "What types of service do you provide?",
      answer:
        "We provide a variety of services including travel tours, adventure packages, and cultural experiences.",
    },
    {
      question: "What is included in the tour package?",
      answer:
        "Tour packages include accommodation, meals, transportation, and guided tours.",
    },
    {
      question: "What should I pack for my trip?",
      answer:
        "Pack according to the destination's weather, including essentials like clothing, toiletries, and travel documents.",
    },
  ];

  return (
    <div className="flex flex-col mt-2">
      <div className="flex flex-col justify-center items-center px-16 py-32 w-full bg-neutral-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="-mb-6 max-w-full w-[1296px] max-md:mb-2.5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start max-md:mt-1 max-md:max-w-full">
                <div className="text-sm font-medium leading-loose text-orange-500">
                  FAQ
                </div>
                <div className="self-stretch mt-5 text-5xl font-semibold leading-[58px] text-cyan-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Unpacking Your Travel
                  <br />
                  Questions
                </div>
                <Image
                  loading="lazy"
                  src="/asset/m1.png"
                  alt="faq"
                  width={469}
                  height={469}
                  className="object-contain mt-16 max-w-full aspect-[0.94] w-[469px] max-md:mt-10"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="flex flex-col mt-6 w-full bg-white text-slate-600"
                  >
                    <div
                      className="flex flex-wrap gap-5 justify-between px-8 py-5 cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      <div className="text-xl font-semibold leading-tight text-cyan-950">
                        {faq.question}
                      </div>
                      <FaChevronDown
                        className={`text-cyan-950 w-5 h-5 transition-transform ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {activeIndex === index && (
                      <div className="px-8 py-4 text-base leading-6 text-slate-600 bg-white">
                        {faq.answer}
                      </div>
                    )}
                    <div className="flex shrink-0 mt-8 h-1 bg-teal-500 max-md:max-w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
