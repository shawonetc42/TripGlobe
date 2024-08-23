"use client";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    location: "New York, USA",
    checkIn: "02 January 2024",
    checkOut: "05 January 2024",
    guests: "2 adults, 2 children",
    images: {
      locationImg:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cc5c798ed5a1d76228b68301d1fac523bfb3f6390e4e8aaa7f9b1143acb49502?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      checkInImg:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d648aa01a06daeba9073d9b0833b3508343494081dd8e7e524ba238044cc2165?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      checkOutImg:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d169c98038eb297e59727ccefe331fef481d1ea03f41e648d8d9cf3cd5df0a82?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      guestImg:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a25a131aae04aa5d3bf2947ba2b1bb4313386059e25422d4a076e272a5ea808d?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    },
  },
];

const RightSideHero = () => {
  const [activeTab, setActiveTab] = useState("Tours");
  const [checkInDate, setCheckInDate] = useState(data[0].checkIn);
  const [checkOutDate, setCheckOutDate] = useState(data[0].checkOut);
  const [location, setLocation] = useState(data[0].location);
  const [guests, setGuests] = useState(data[0].guests);

  const tabs = ["Tours", "Hotels", "Tickets", "Rental", "Activities"];

  useEffect(() => {
    // Example of updating state based on active tab or other logic
    if (activeTab === "Hotels") {
      setLocation("Paris, France"); // Just an example update
    } else {
      setLocation(data[0].location);
    }
  }, [activeTab]);

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  return (
    <div className="flex justify-center p-6 bg-gray-50">
      <div className="flex flex-col w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-4 py-2 rounded-full cursor-pointer transition duration-300 ${
                activeTab === tab
                  ? "bg-[#FA7335] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {data.map((item) => (
          <div key={item.id} className="flex flex-col space-y-6">
            <div className="bg-gray-100 rounded-xl shadow-md p-6 space-y-6">
              <div className="flex gap-6 items-start border-b border-gray-300 pb-4">
                <div className="flex flex-col flex-1">
                  <div className="text-gray-500 text-xs uppercase">
                    Location
                  </div>
                  <div className="flex gap-4 mt-2 items-center">
                    <img
                      loading="lazy"
                      src={item.images.locationImg}
                      className="w-6 h-6 object-contain"
                      alt="Location"
                    />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="text-lg font-medium border rounded p-2"
                    />
                  </div>
                </div>
                <div className="w-px bg-gray-300" />
                <div className="flex flex-col items-center">
                  <div className="text-gray-500 text-xs uppercase">
                    Check In
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-lg font-medium">
                    <img
                      loading="lazy"
                      src={item.images.checkInImg}
                      className="w-6 h-6 object-contain"
                      alt="Check In"
                    />
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="text-lg font-medium border rounded p-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-start border-t border-gray-300 pt-4">
                <div className="flex flex-col flex-1">
                  <div className="text-gray-500 text-xs uppercase">
                    Check Out
                  </div>
                  <div className="flex gap-4 mt-2 items-center">
                    <img
                      loading="lazy"
                      src={item.images.checkOutImg}
                      className="w-6 h-6 object-contain"
                      alt="Check Out"
                    />
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="text-lg font-medium border rounded p-2"
                    />
                  </div>
                </div>
                <div className="w-px bg-gray-300" />
                <div className="flex flex-col items-center">
                  <div className="text-gray-500 text-xs uppercase">Guests</div>
                  <div className="flex gap-4 mt-2 items-center">
                    <img
                      loading="lazy"
                      src={item.images.guestImg}
                      className="w-6 h-6 object-contain"
                      alt="Guests"
                    />
                    <input
                      type="text"
                      value={guests}
                      onChange={handleGuestsChange}
                      className="text-lg font-medium border rounded p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button className="flex items-center px-6 py-3 bg-[#FA7335] text-white rounded-full hover:bg-blue-700 transition duration-300">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a191fbc73d8cf9ee250f06973d6fd63fb1f2c3bf8b8476425f82ee121f25ffd2?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                  className="w-5 h-5 mr-2"
                  alt="Search"
                />
                Search
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6be3f65412fcfd085f924984c492b0776990bfcef8d6074a03091ddc7a4729e?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                className="w-32 h-auto"
                alt="More"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideHero;
