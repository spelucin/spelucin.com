"use client"

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface ProblemSectionProps {
  onOpenCalModal: () => void;
}

export default function ProblemSection({ onOpenCalModal }: ProblemSectionProps) {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden p-8 md:p-16"
        >
          {/* Subtle red glow */}
          <div className="absolute top-0 right-0 w-[500px] h-full bg-red-500/5 blur-[120px] pointer-events-none opacity-40" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-red-500/80 mb-8 font-bold">
              <AlertTriangle className="w-3.5 h-3.5" />
              El Problema ///
            </span>
            <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.05] mb-8 tracking-tighter">
              Estás perdiendo entre el 45% y el 100% de tus conversiones reales.
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed font-inter mb-0">
              Las restricciones de iOS 14 y los bloqueadores de anuncios han eliminado la visibilidad de gran parte de tus datos. 
              Tu agencia está perdiendo ingresos proyectados por datos inexactos de lo que costaría una solución técnica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
