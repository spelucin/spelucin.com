"use client"

import { motion } from 'framer-motion';
import { sendGTMEvent } from '@next/third-parties/google'
import Image from 'next/image';

const clientLogos = [
  { name: 'Attach', src: '/img/client-logos/attach.svg', width: 120, height: 24, className: "h-5 sm:h-6" },
  { name: 'Notebook', src: '/img/client-logos/notebook.svg', width: 120, height: 24, className: "h-5 sm:h-6" },
  { name: 'Owlbox', src: '/img/client-logos/owlbox.png', width: 100, height: 20, className: "h-4 sm:h-5 opacity-80" },
  { name: 'Picnic', src: '/img/client-logos/picnic.svg', width: 90, height: 18, className: "h-3.5 sm:h-4.5" },
];

interface HeroSectionProps {
  onOpenCalModal: () => void;
}

export default function HeroSection({ onOpenCalModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-20 px-6 sm:px-12">
      {/* Efecto de resplandor nébula */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/20 blur-[130px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] rounded-full bg-purple-500/10 blur-[120px] opacity-10 pointer-events-none" />

      {/* Fondo de cuadrícula */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="max-w-3xl text-left">
          {/* Insignia */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold">
              introducción ///
            </span>
          </motion.div>

          {/* Encabezado */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter text-white mb-8"
          >
            Tus decisiones son tan buenas como tus datos.
          </motion.h1>

          {/* Párrafo */}
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-sm sm:text-base text-white/60 leading-relaxed mb-10 font-inter"
          >
            Ayudo a agencias y equipos de marketing a construir sistemas de medición que transforman la incertidumbre en rentabilidad. No instalo etiquetas, construyo la base para que cada dólar invertido sea rastreado y validado.
          </motion.p>

          {/* Botones - Estilo con Acento y Gatillo Dinámico */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-row items-center justify-start gap-4 mb-24"
          >
            <a
              href="#precios"
              onClick={() => {
                sendGTMEvent({ event: 'view_plans_click', ubicacion: 'hero' });
              }}
              className="px-6 py-3 sm:px-10 sm:py-4 bg-primary text-primary-foreground font-inter font-bold text-[11px] sm:text-[12px] tracking-tight rounded-full hover:opacity-90 transition-all shadow-xl shadow-primary/20 text-center"
            >
              Ver planes
            </a>
            <a
              href="#proceso"
              className="px-6 py-3 sm:px-10 sm:py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white font-inter font-bold text-[11px] sm:text-[12px] tracking-tight rounded-full hover:bg-white/10 transition-all text-center"
            >
              Mi método
            </a>
          </motion.div>

          {/* Logotipos */}
          <div className="mb-4">
            <p className="text-white/40 text-xs sm:text-sm font-inter">Confían en nuestra integridad técnica:</p>
          </div>
          <div className="flex items-center gap-8 md:gap-14 flex-wrap select-none opacity-40">
            {clientLogos.map((logo) => (
              <motion.div 
                key={logo.name} 
                className="brightness-0 invert hover:opacity-100 transition-all duration-500 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={logo.width}
                  height={logo.height}
                  priority
                  className={`${logo.className} w-auto object-contain`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
