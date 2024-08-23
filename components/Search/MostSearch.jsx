import React from "react";

// Sample data for the cities
const cities = [
  {
    id: 1,
    name: "Jordan",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8d21c14e1faf3dc143ce3fe9e6995b6a1f5e39c1a1504e6dfd7599c1b63f3b5d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    rating: "5.0(35)",
    price: "$150",
  },
  {
    id: 2,
    name: "Waterfall",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/955c4f84f03d43ee674d05dae5731b70f901bb09062f4973b6362c3925937d68?apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    rating: "5.0(35)",
    price: "$150",
  },
  {
    id: 3,
    name: "Forestgump",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d21c05a392f35c6ae0bcbddcb78dbabd4d7dc80a8fc955184d3d5546e53d9563?apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    rating: "5.0(35)",
    price: "$150",
  },
  {
    id: 4, // Fixed duplicate id issue
    name: "Forestgump",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d21c05a392f35c6ae0bcbddcb78dbabd4d7dc80a8fc955184d3d5546e53d9563?apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    rating: "5.0(35)",
    price: "$150",
  },
];

export default function MostSearch() {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-10 bg-gray-50 min-h-screen">
      <div className="flex flex-col px-4 max-w-screen-xl mx-auto">
        <div className="self-center text-xs font-medium text-center text-orange-500 uppercase tracking-wider">
          Trending Destination
        </div>
        <div className="self-center mt-4 text-4xl font-bold text-center text-gray-800">
          The most searched for
          <br />
          cities on Triptopia
        </div>
        {/* Image section */}
        <div className="mt-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <div
                key={city.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  loading="lazy"
                  srcSet={`${city.imageSrc}?width=200 200w, ${city.imageSrc}?width=400 200w, ${city.imageSrc}?width=400 400w, ${city.imageSrc}?width=800 800w, ${city.imageSrc}?width=1200 1200w, ${city.imageSrc}?width=2600 2600w, ${city.imageSrc}?width=4000 4000w`}
                  src={city.imageSrc}
                  className="w-full h-80 object-cover rounded-t-lg"
                  alt={city.name}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {city.name}
                  </h3>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ea8b4ed1077fee18bb3571569996804bc8e25515e624451a9abe89fcde0ec9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                      className="w-4 h-4 mr-1"
                      alt="Rating"
                    />
                    <span>{city.rating}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-xl font-semibold text-gray-800">
                      {city.price}
                    </div>
                    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
