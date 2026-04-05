"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sendGTMEvent } from '@next/third-parties/google'
import Image from 'next/image';

const navItems = [
  { label: 'Servicios', href: '#soluciones' },
  { label: 'Precios', href: '#precios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Acerca de', href: '#nosotros' },
];

interface NavbarProps {
  onOpenCalModal: () => void;
}

export default function Navbar({ onOpenCalModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const logoMarkup = (
    <a href="#" className="flex items-center gap-2">
      <Image 
        src="/img/logo.png" 
        alt="Alex Spelucin Logo" 
        width={140}
        height={35}
        priority
        className="h-7 w-auto"
      />
    </a>
  );

  return (
    <>
      {/* 1. Logo deslizable (Sólo escritorio, absoluto al inicio) */}
      <div className="absolute top-0 left-0 right-0 z-40 hidden md:block px-6 sm:px-12 py-6 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          {logoMarkup}
        </div>
      </div>

      {/* 2. Navbar tipo Pill fija */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 pointer-events-none"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Diseño Móvil (Logo + CTA dentro de una pill única) */}
          <div className="md:hidden w-full pointer-events-auto">
            <div className={`flex items-center justify-between w-full px-5 py-2.5 rounded-full border border-white/5 transition-all duration-500 backdrop-blur-2xl ${
              scrolled ? 'bg-background/80 shadow-2xl shadow-black/40' : 'bg-transparent'
            }`}>
              <div className="h-5 w-auto">
                <Image 
                  src="/img/logo.png" 
                  alt="Logo" 
                  width={100}
                  height={25}
                  priority
                  className="h-full w-auto"
                />
              </div>
              <button
                onClick={() => {
                  onOpenCalModal();
                  sendGTMEvent({ event: 'open_calendar', ubicacion: 'nav' });
                }}
                className="px-4 py-1.5 text-[11px] font-inter font-bold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity tracking-tight"
              >
                Agenda una llamada
              </button>
            </div>
          </div>

          {/* Diseño Escritorio - Espaciador invisible para balancear layout */}
          <div className="hidden md:block invisible pointer-events-none">
            {logoMarkup}
          </div>

          {/* Navbar tipo Pill escritorio (Fija a la derecha) */}
          <nav
            className={`hidden md:flex items-center gap-1.5 px-2 py-2 rounded-full border border-border transition-all duration-500 pointer-events-auto backdrop-blur-2xl ${
              scrolled ? 'bg-background/80 shadow-2xl shadow-black/40' : 'bg-transparent'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2 text-[13px] font-inter font-semibold text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/[0.03]"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onOpenCalModal();
                sendGTMEvent({ event: 'open_calendar', ubicacion: 'nav' });
              }}
              className="ml-1 px-6 py-2 text-[13px] font-inter font-bold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all shadow-sm tracking-tight"
            >
              Agenda una llamada
            </button>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
