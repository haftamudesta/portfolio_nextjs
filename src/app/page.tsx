"use client"

import { NavBar } from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import MainWorks from '@/components/MainWorks';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ContactMe from '@/components/ContactMe';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      < NavBar />
      <HeroSection />
      <About />
      <Skills />
      <MainWorks />
      <ContactMe />
      <Footer />
    </div>
    
  );
}
