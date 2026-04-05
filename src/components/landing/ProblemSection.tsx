"use client"

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl overflow-hidden p-8 md:p-14"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-500/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-red-400/80 mb-6">
              <AlertTriangle className="w-3.5 h-3.5" />
              El Problema
            </span>
            <h2 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight mb-6 tracking-tight">
              Estás perdiendo entre el 45% y el 100% de tus conversiones reales.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed font-inter mb-8">
              Las restricciones de iOS 14 y los bloqueadores de anuncios han eliminado la visibilidad de gran parte de tus datos. 
              Tu agencia está perdiendo entre 5 y 10 veces más ingresos por datos inexactos de lo que costaría una solución profesional.
            </p>
            <a
              href="#soluciones"
              className="inline-block px-6 py-2.5 bg-primary text-primary-foreground font-inter font-semibold text-sm rounded-full hover:opacity-90 transition-opacity"
            >
              Ver soluciones
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
