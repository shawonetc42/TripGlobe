import React from "react";
import Image from "next/image";

const tourData = [
  {
    id: 1,
    title: "Exploring Fairy Chimneys and Underground Cities",
    location: "Istanbul",
    price: "$150",
    rating: "5.0(35)",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/969df19c3346f39640c91aaf942dd9cb3c8bcd29fe5a4fa1dd174e3b83a239ce?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    badge:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39ecd26c4ea6d6a23e5ef020a8acf9105027c5b164107b7ba46ecfd02f04cc20?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },

  {
    id: 2,
    title: "Tracing Ancient Ruins and Roman Relics Cities",
    location: "California",
    price: "$150",
    rating: "5.0(35)",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/219a667b0872dad49aa8a35dcdcbe5b1a748c2405be1f0654d2cf7e5045c2076?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    badge:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b71d5786c4fff1cf12c840fd1ed013ff21cd9a3b7e758c1a8ab07d7c207bc3ca?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    id: 1,
    title: "Exploring Fairy Chimneys and Underground Cities",
    location: "Istanbul",
    price: "$150",
    rating: "5.0(35)",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/969df19c3346f39640c91aaf942dd9cb3c8bcd29fe5a4fa1dd174e3b83a239ce?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    badge:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39ecd26c4ea6d6a23e5ef020a8acf9105027c5b164107b7ba46ecfd02f04cc20?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  // Add more tour objects as needed
];

export default function PopularTour() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12">
      <div className="text-center">
        <div className="text-sm font-medium text-orange-500 uppercase tracking-wider">
          Popular Tour
        </div>
        <h2 className="mt-2 text-4xl font-bold text-cyan-950 md:text-5xl">
          See Destinations You’ll
          <br />
          Love To Visit
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-10 text-base text-cyan-950">
          <div className="px-4 py-2 border border-cyan-950 rounded-full bg-white text-center">
            Day Long Tour
          </div>
          <div className="px-4 py-2 rounded-full bg-transparent border text-center">
            Adventure Trip
          </div>
          <div className="px-4 py-2 rounded-full bg-transparent border text-center">
            Group Tour
          </div>
          <div className="px-4 py-2 rounded-full bg-transparent border text-center">
            Solo Tour
          </div>
        </div>
      </div>

      {/* Images container */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tourData.map((tour) => (
          <div
            key={tour.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-60">
              <Image
                alt={tour.title}
                src={tour.image}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <div className="absolute top-4 right-4">
                <Image
                  alt="Tour Badge"
                  src={tour.badge}
                  width={40}
                  height={40}
                  className="rounded-full bg-white p-1"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-slate-600">
                <span className="ml-2">{tour.location}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-cyan-950">
                {tour.title}
              </h3>

              <div className="flex items-center justify-between mt-4">
                <div className="text-2xl font-bold text-cyan-950">
                  {tour.price}
                </div>
                <button className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg">
                  Book Trip
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
