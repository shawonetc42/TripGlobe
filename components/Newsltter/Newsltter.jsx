"use client";
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার সাবস্ক্রিপশন লজিক থাকবে
    console.log("Submitted email:", email);
    setEmail(""); // সাবমিশনের পর ইনপুট ফিল্ড খালি করে দিন
  };

  return (
    <div className="flex relative max-w-screen-2xl mx-auto mt-2 flex-col justify-center items-center px-16 py-16 rounded-2xl min-h-[242px] max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4cc9264868a708c3abaede7dfeac662e8e70f627a0b5b055628b9d54dbd062?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4cc9264868a708c3abaede7dfeac662e8e70f627a0b5b055628b9d54dbd062?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4cc9264868a708c3abaede7dfeac662e8e70f627a0b5b055628b9d54dbd062?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4cc9264868a708c3abaede7dfeac662e8e70f627a0b5b055628b9d54dbd062?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4cc9264868a708c3abaede7dfeac662e8e70f627a0b5b055628b9d54dbd062?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4cc9264868a708c3abaede7dfeac662e8e70f627a0b5b055628b9d54dbd062?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4cc9264868a708c3abaede7dfeac662e8e70f627a0b5b055628b9d54dbd062?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative w-full max-w-[1088px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow text-gray-100 max-md:mt-10">
              <div className="text-5xl font-semibold leading-tight max-md:text-4xl">
                Get our pro offers
              </div>
              <div className="mt-5 mr-7 text-base leading-6 max-md:mr-2.5">
                Create a visual identity for your company, and an overall
                <br />
                branding that stands out.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <form
              onSubmit={handleSubmit}
              className="flex relative flex-wrap self-stretch px-3 py-2 my-auto w-full text-base  rounded max-md:mt-10 max-md:max-w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="grow px-4 py-3 bg-white text-slate-600 text-opacity-50 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 max-md:pr-5"
                required
              />
              <button
                type="submit"
                className="px-6 py-4 text-center text-white whitespace-nowrap rounded-r-md border border-solid bg-cyan-950 border-cyan-950 max-md:px-5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
