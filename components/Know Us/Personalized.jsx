import React from "react";
import Image from "next/image";
const images = [
  {
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e7615ff4f7a1dd0cc544fc2be06680fc96728a9cf1050ef126f95ff20b862cb5?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    alt: "Luxury Trip",
    title: "Luxury Trip",
    description:
      "Our algorithm connects you with like-minded partners using your interests.",
    className: "object-contain w-12 h-12",
  },
  {
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ccdc470cbeee5e2565a7491d42a5780219fc9bed498d579be926042222ac0a47?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    alt: "Affordable Budget",
    title: "Affordable Budget",
    description:
      "Your safety is a priority. We ensure strict security for your information.",
    className: "object-contain w-12 h-12 mt-8",
  },
  {
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ee2cd65fff9f3b2bed60193e27e98fd6d8325f6c42832056158c5f1024bc7e8e?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    alt: "Experience the World",
    title: "",
    description: "",
    className: "object-contain mt-6",
  },
  {
    srcSet:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7616975aa61b81a4a2bafad4c84d6c60b1ae1b1ac589ad452d37dc6d09ec53d8?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    alt: "Personalized Matchmaking",
    title: "Personalized Matchmaking",
    description: "Meet new people who share your interests and values.",
    className: "object-contain w-12 h-12",
  },
];

export default function Personalized() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* First Column */}
        <div className="flex flex-col w-full md:w-1/4 mt-0 md:mt-80 items-start text-center md:text-left">
          {images.slice(0, 2).map((image, index) => (
            <div key={index}>
              <img
                loading="lazy"
                srcSet={`${image.srcSet}&width=100 100w, ${image.srcSet}&width=200 200w, ${image.srcSet}&width=400 400w, ${image.srcSet}&width=800 800w, ${image.srcSet}&width=1200 1200w, ${image.srcSet}&width=1600 1600w, ${image.srcSet}&width=2000 2000w`}
                className={image.className}
                alt={image.alt}
              />
              <div className="text-lg font-semibold text-cyan-950 mt-3">
                {image.title}
              </div>
              <p className="text-base text-slate-600 mt-2">
                {image.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center Column */}
        <div className="flex flex-col w-full md:w-1/2 text-center">
          <h1 className="text-4xl font-semibold text-cyan-950 md:text-5xl mt-5">
            Experience the World
            <br />
            With Triptopia
          </h1>
          <p className="text-base text-slate-600 mt-4 px-2">
            Our dating website offers a range of features and benefits that make
            finding love online
            <br />
            simple and enjoyable. With our advanced matching algorithm
          </p>
          <img
            loading="lazy"
            srcSet={`${images[2].srcSet}&width=100 100w, ${images[2].srcSet}&width=200 200w, ${images[2].srcSet}&width=400 400w, ${images[2].srcSet}&width=800 800w, ${images[2].srcSet}&width=1200 1200w, ${images[2].srcSet}&width=1600 1600w, ${images[2].srcSet}&width=2000 2000w`}
            className={images[2].className}
            alt={images[2].alt}
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col w-full md:w-1/4 mt-0 md:mt-80 items-start text-center md:text-left">
          <img
            loading="lazy"
            srcSet={`${images[3].srcSet}&width=100 100w, ${images[3].srcSet}&width=200 200w, ${images[3].srcSet}&width=400 400w, ${images[3].srcSet}&width=800 800w, ${images[3].srcSet}&width=1200 1200w, ${images[3].srcSet}&width=1600 1600w, ${images[3].srcSet}&width=2000 2000w`}
            className={images[3].className}
            alt={images[3].alt}
          />
          <div className="text-lg font-semibold text-cyan-950 mt-3">
            {images[3].title}
          </div>
          <p className="text-base text-slate-600 mt-2">
            {images[3].description}
          </p>
        </div>
      </div>
    </div>
  );
}
