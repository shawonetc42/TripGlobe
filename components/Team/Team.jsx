import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Vasili Ilmaz",
    role: "Web Developer",
    imageUrl: "/avatar/team-1.png.png",
  },
  {
    name: "Veronica",
    role: "Product Designer",
    imageUrl: "/avatar/team-2.png.png",
  },
  {
    name: "John Doe",
    role: "Project Manager",
    imageUrl: "/avatar/team-3.png.png",
  },
];

export default function Team() {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto items-center py-10 px-4">
      <div className="text-sm font-medium text-center text-orange-500">
        OUR TEAM
      </div>
      <div className="mt-5 text-3xl md:text-5xl font-semibold text-center text-cyan-950 leading-tight">
        Meet the Creative Minds
        <br />
        Behind Triptopia
      </div>
      <div className="mt-10 w-full">
        <div className="flex flex-wrap gap-5 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-80 md:w-60 lg:w-80 bg-cyan-950 text-gray-100 rounded-lg shadow-lg"
            >
              <div className="flex justify-center p-4 border-b border-cyan-900 rounded-t-lg">
                <Image
                  loading="lazy"
                  src={member.imageUrl}
                  className="object-cover rounded-full"
                  alt={`Photo of ${member.name}`}
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex flex-col items-center px-4 py-6 text-center">
                <div className="text-xl font-semibold">{member.name}</div>
                <div className="mt-2 text-sm">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
