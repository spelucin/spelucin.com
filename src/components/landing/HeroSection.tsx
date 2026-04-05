"use client"

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6">
      {/* Nebula glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(172,216,185,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(172,216,185,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground tracking-wide mb-8">
            MEASUREMENT STRATEGY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6"
        >
          Tus decisiones son tan buenas como tus datos.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 font-inter"
        >
          Ayudo a agencias de marketing digital en Latinoamérica a recuperar la certeza en su medición. 
          Aseguro que la infraestructura técnica sea impecable, veraz y resistente a los cambios del ecosistema.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-inter font-semibold text-sm rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Agendar llamada
          </a>
          <a
            href="#soluciones"
            className="px-8 py-3.5 border border-border text-foreground font-inter font-medium text-sm rounded-full hover:bg-secondary/60 transition-all"
          >
            Ver soluciones
          </a>
        </motion.div>
      </div>
    </section>
  );
}
