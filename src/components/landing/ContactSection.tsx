"use client"

import { motion } from 'framer-motion';
import { sendGTMEvent } from '@next/third-parties/google'

interface ContactSectionProps {
  onOpenCalModal: () => void;
}

export default function ContactSection({ onOpenCalModal }: ContactSectionProps) {
  return (
    <section id="contacto" className="relative py-24 sm:py-32 px-6 sm:px-12 border-t border-border bg-background overflow-hidden">
      {/* Resplandor nébula centrado para la sección final */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-primary/20 blur-[140px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-8 h-[1px] bg-primary/50" />
            <span className="text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold">
              contacto ///
            </span>
          </div>
          <h2 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter leading-[1.05] mb-8">
            Mejoramos tu medición hoy mismo.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/40 leading-relaxed font-inter mb-12 max-w-2xl mx-auto">
            Deja de operar a ciegas. Agenda una sesión de 15 minutos y hablemos de cómo hacer que tus datos trabajen para tu rentabilidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
               onClick={() => {
                 onOpenCalModal();
                 sendGTMEvent({ event: 'open_calendar', ubicacion: 'final_cta' });
               }}
               className="px-6 py-3 sm:px-10 sm:py-4 bg-primary text-primary-foreground font-inter font-bold text-[11px] sm:text-[12px] rounded-full hover:opacity-90 shadow-2xl shadow-primary/20 transition-all tracking-tight"
            >
              Agendar ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
