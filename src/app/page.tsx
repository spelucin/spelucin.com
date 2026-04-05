"use client"

import { useState } from 'react';
import Navbar from '@/components/landing/Navbar';
import FAQSection from '@/components/landing/FAQSection';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionGrid from '@/components/landing/SolutionGrid';
import Testimonials from '@/components/landing/Testimonials';
import PricingCards from '@/components/landing/PricingCards';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import CalModal from '@/components/landing/CalModal';

export default function Home() {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  const openCalModal = () => setIsCalModalOpen(true);
  const closeCalModal = () => setIsCalModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar onOpenCalModal={openCalModal} />
      <HeroSection onOpenCalModal={openCalModal} />
      <ProblemSection onOpenCalModal={openCalModal} />
      <SolutionGrid />
      <Testimonials />
      <PricingCards onOpenCalModal={openCalModal} />
      <FAQSection />
      <ContactSection onOpenCalModal={openCalModal} />
      <Footer />

      <CalModal isOpen={isCalModalOpen} onClose={closeCalModal} />
    </div>
  );
}
