import Faq from "@/components/About/Faq";
import AboutUs from "@/components/Demo/1/AboutUs";
import Blog from "@/components/Demo/1/Blog";
import CoverSection from "@/components/Demo/1/Cover/CoverSection";
import Hero from "@/components/Demo/1/Hero";
import PopularDestanation from "@/components/Demo/1/PopularDestanation";
import SearchBestPlace from "@/components/Demo/1/SearchBestPlace";
import Testimonial from "@/components/Demo/1/Testimonial";
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <SearchBestPlace />
      <Blog />
      <CoverSection />
      <PopularDestanation />
      <Testimonial />
      <Footer />
    </div>
  );
}
