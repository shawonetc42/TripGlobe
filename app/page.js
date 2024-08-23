import AboutUs from "@/components/About/AboutUs";
import Faq from "@/components/About/Faq";
import Distination from "@/components/Destination/Distination";
import Topdestination from "@/components/Destination/Topdestination";
import Footer from "@/components/Footer/Footer";
import AdventureSection from "@/components/Hero/Hero";
import KnowUs from "@/components/Know Us/KnowUs";
import Personalized from "@/components/Know Us/Personalized";
import Newsltter from "@/components/Newsltter/Newsltter";
import MostSearch from "@/components/Search/MostSearch";
import Team from "@/components/Team/Team";
import PopularTour from "@/components/Tour/PopularTour";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <AdventureSection />
        <KnowUs />
        <Topdestination />
        <Team />
        <Personalized />
        <PopularTour />
        <Distination />
        <MostSearch />
        <AboutUs />
        <Faq />
        <Newsltter />
        <Footer />
      </div>
    </main>
  );
}
