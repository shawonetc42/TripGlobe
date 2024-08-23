import React from "react";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    title: "Batu, East Java",
    description: "86 Destinations",
    imageUrl: "/destination/Link-1.png",
  },
  {
    id: 2,
    title: "Kuta",
    description: "86 Destinations",
    imageUrl: "/destination/Link-2.png",
  },
  {
    id: 3,
    title: "Surabaya, East Java",
    description: "86 Destinations",
    imageUrl: "/destination/Link-3.png",
  },
  {
    id: 4,
    title: "Malang, East Java",
    description: "86 Destinations",
    imageUrl: "/destination/Link-4.png",
  },
  {
    id: 5,
    title: "Malang, East Java",
    description: "86 Destinations",
    imageUrl: "/destination/Link-5.png",
  },
  {
    id: 6,
    title: "Malang, East Java",
    description: "86 Destinations",
    imageUrl: "/destination/Link-6.png",
  },
  {
    id: 7,
    title: "Malang, East Java",
    description: "86 Destinations",
    imageUrl: "/destination/Link.png",
  },
  {
    id: 8,
    title: "Malang, East Java",
    description: "86 Destinations",
    imageUrl: "/destination/Link8.png",
  },
];

export default function Topdestination() {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto items-center px-12 py-16 rounded-xl bg-neutral-100 max-md:px-5">
      <div className="text-sm font-medium leading-loose text-center text-orange-500">
        TOP DESTINATION
      </div>
      <div className="mt-5 text-5xl font-semibold leading-tight text-center text-cyan-950 max-md:max-w-full max-md:text-4xl">
        Search a best place in the world
      </div>
      <div className="mt-5 text-base leading-6 text-center text-slate-600 max-md:max-w-full">
        Our dating website offers a range of features and benefits that make
        finding love online
        <br />
        simple and enjoyable. With our advanced matching algorithm
      </div>
      <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 max-md:grid-cols-1">
          {destinations.map((destination) => (
            <div key={destination.id} className="flex flex-col max-w-full">
              <div className="flex flex-col grow items-center p-8 rounded-lg border border-solid border-neutral-200 max-md:px-5 max-md:mt-6">
                {/* Centering the image with flex properties */}
                <div className="flex justify-center items-center w-full h-32">
                  <Image
                    src={destination.imageUrl}
                    alt={destination.title}
                    width={72}
                    height={72}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="mt-5 text-xl font-semibold leading-tight text-cyan-950">
                  {destination.title}
                </div>
                <div className="mt-5 text-sm leading-loose text-slate-600">
                  {destination.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
