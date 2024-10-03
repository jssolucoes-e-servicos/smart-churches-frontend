import FooterSection from "@/components/common/public/footer/FooterSection";
import NavBar from "@/components/common/public/navbar";
import HeroSection from "@/components/Landing/sections/HeroSection";
import HeroVideoSection from "@/components/Landing/sections/HeroVideo";
import ServiceSection from "@/components/Landing/sections/ServiceSection";
import TeamSection from "@/components/Landing/sections/TeamSection";
import TestimonialSection from "@/components/Landing/sections/TestimonialSection";
import VideoPlayerSection from "@/components/Landing/sections/VideoPlayerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "smartChurches - Home",
  description:
    "smartChurhes, a plataforma que sua igreja precisa para ter total controle sobre o cadastro e relatorios de suas células, departamentos e cultos, além de um completo cadastro de membros com acompanhamento de trilha de evolução",
  // other metadata
};

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col w-full bg-[#F1F2F3]">
      <NavBar />
      <div
        className="pb-4 scroll-margin w-full bg-white px-[10rem]"
        id="anchor_home"
      >
        <HeroSection />
      </div>
      <div className="mt-24 md:32 lg:mt-8 px-4  md:px-[1rem]  w-[1900px] ">
        <div className="py-24 scroll-margin" id="anchor_solution">
          <ServiceSection />
        </div>
        <div className="py-24 scroll-margin" id="anchor_quemsomos">
          <VideoPlayerSection />
        </div>
        <div className="py-2 scroll-margin" id="anchor_quemsomos">
          <HeroVideoSection />
        </div>
        <div className="py-24 ">
          <TestimonialSection />
        </div>
        <div className="py-24 ">
          <TeamSection />
        </div>
        {/* <div className="py-24 scroll-margin" id="anchor_contact">
          <NewsletterSection />
        </div> */}
      </div>
      <div className="pt-1 w-full bg-white px-[10rem]">
        <FooterSection />
      </div>
    </main>
  );
}
