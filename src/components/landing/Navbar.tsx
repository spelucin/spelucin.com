"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Servicios', href: '#soluciones' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const logoMarkup = (
    <a href="#" className="flex items-center gap-2">
      <img 
        src="/img/logo.png" 
        alt="Alex Spelucin Logo" 
        className="h-8 w-auto"
      />
    </a>
  );

  return (
    <>
      {/* 1. The Scrollable Logo (Desktop only, absolute at top of page) */}
      <div className="absolute top-0 left-0 right-0 z-40 hidden md:block px-6 py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto">
          {logoMarkup}
        </div>
      </div>

      {/* 2. The Fixed Pill Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Mobile Layout (Logo + CTA inside a single pill) */}
          <div className="md:hidden w-full pointer-events-auto">
            <div className={`flex items-center justify-between w-full px-4 py-2 rounded-full border border-border/60 transition-all duration-300 ${
              scrolled ? 'bg-card/80 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-card/40 backdrop-blur-md'
            }`}>
              <div className="h-6 w-auto">
                <img 
                  src="/img/logo.png" 
                  alt="Logo" 
                  className="h-full w-auto"
                />
              </div>
              <a
                href="#contacto"
                className="px-4 py-1.5 text-xs font-inter font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
              >
                Agendar llamada
              </a>
            </div>
          </div>

          {/* Desktop Layout - Invisible spacer for where the logo is (to maintain the "between" flex position) */}
          <div className="hidden md:block invisible pointer-events-none">
            {logoMarkup}
          </div>

          {/* Desktop Pill Navbar (Fixed on the right) */}
          <nav
            className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/60 transition-all duration-300 pointer-events-auto ${
              scrolled ? 'bg-card/80 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-card/40 backdrop-blur-md'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/60"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-1 px-5 py-1.5 text-sm font-inter font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Agendar llamada
            </a>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
