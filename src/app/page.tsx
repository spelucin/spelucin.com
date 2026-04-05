import Navbar from '@/components/landing/Navbar';
import FAQSection from '@/components/landing/FAQSection';
import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionGrid from '@/components/landing/SolutionGrid';
import Testimonials from '@/components/landing/Testimonials';
import PricingCards from '@/components/landing/PricingCards';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SolutionGrid />
      <Testimonials />
      <PricingCards />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
