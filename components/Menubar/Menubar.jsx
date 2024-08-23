"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// react icons
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavItem = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#servicest" },
  { name: "About", href: "/#about" },
  { name: "Team", href: "/#team" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [homeHover, setHomeHover] = useState(false); // Added state for Home hover
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-20 transition-all duration-300 z-50 ${
    isMobile || hasScrolled
      ? "bg-[#FFFCF5] shadow-md"
      : "bg-[#FFFCF5] text-black"
  }`;

  const isActive = (href) => href && pathname === href;

  // desktop
  const renderNavItem = (item, index) => {
    const active = isActive(item.href);

    return (
      <li
        key={index}
        className="relative group"
        onMouseEnter={() => item.name === "Home" && setHomeHover(true)}
        onMouseLeave={() => item.name === "Home" && setHomeHover(false)}
      >
        <Link
          href={item.href}
          className={`flex items-center cursor-pointer ${
            active
              ? "bg-[#FA7335] text-white"
              : hasScrolled
              ? "text-black hover:text-[#357960]"
              : "text-black hover:text-[#357960]"
          } px-3 py-2 rounded-md`}
        >
          {item.name}
          {item.name === "Home" &&
            homeHover && ( // Use homeHover state
              <div
                className="absolute w-96 inset-x-0 bottom-[-389.5px] left-1/2 transform -translate-x-1/2 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-sm px-5 py-4 rounded-lg shadow-lg
             group-hover:bg-gray-100 group-hover:shadow-xl group-hover:border group-hover:border-gray-300"
              >
                <ul className="mt-2 space-y-2 container">
                  <li>
                    <Link
                      href="/demo1"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      Demo 1
                    </Link>
                  </li>
                  <Link href="/demo-1">
                    <p className="relative block ">
                      <img
                        src="/demo.png"
                        alt="Demo Image"
                        className="w-[400px]  min-h-[40px] h-auto"
                      />
                      <span
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white 
                      text-md font-bold opacity-0 hover:opacity-100 transition-opacity"
                      >
                        Demo-2
                      </span>
                    </p>
                  </Link>
                  <li>
                    <Link
                      href="/demo2"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      Demo 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/demo-1">
                      <p className="relative block">
                        <img
                          src="/demo2.png"
                          alt="Demo Image"
                          className="w-[400px] min-h-[40px] h-auto"
                        />
                        <span
                          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50
                         text-white text-md font-bold opacity-0 hover:opacity-100 transition-opacity"
                        >
                          Demo-2
                        </span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
        </Link>
      </li>
    );
  };

  // mobile
  const renderMobileNavItem = (item, index) => {
    const active = isActive(item.href);

    return (
      <li key={index} className="block">
        <Link
          href={item.href}
          className={`flex items-center ${
            active
              ? "bg-[#FA7335] text-white"
              : "text-gray-700 hover:text-[#357960]"
          } cursor-pointer px-3 py-2 rounded-md text-base font-medium`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  return (
    <main className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/home1">
              <div className="flex items-center text-white">
                <Image
                  src="/logo.png"
                  alt="logo"
                  className="w-15"
                  width={50}
                  height={50}
                />
              </div>
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-4">{NavItem.map(renderNavItem)}</ul>
          </nav>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FA7335] focus:outline-none" //its a button for mobile
            >
              {isOpen ? (
                <IoMdClose className="h-8 w-8" />
              ) : (
                <IoMdMenu className="h-8 w-8" />
              )}
            </button>
          </div>
          {/* Add "Create Account" button here */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/create-account">
              <button className="bg-[#FA7335] text-white px-4 py-2 rounded-[200px] hover:bg-green-600 transition duration-300">
                Book Trip
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavItem.map(renderMobileNavItem)}
        </ul>
      </div>
    </main>
  );
};

export default Menubar;
