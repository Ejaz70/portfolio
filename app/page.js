"use client";
export const dynamic = 'force-static'; 
import Navabar from "@/components/Navabar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Project from "@/components/Project";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navabar />;
      <Hero/>
      <About/>
      <Experience/>
      <Services/>
      <Skills/>
      <Project/>
      <ContactSection/>
      
      
      <Footer/>
    </>
  );
}
