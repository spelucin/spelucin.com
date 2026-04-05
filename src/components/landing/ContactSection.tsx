"use client"

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contacto" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[200px] rounded-full bg-purple-500/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground tracking-wide mb-6">
            DIAGNÓSTICO PRELIMINAR
          </span>

          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-6 leading-tight">
            Agenda una sesión de 20 minutos
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-inter mb-10 max-w-lg mx-auto">
            Revisaremos tu caso actual sin compromisos y con total transparencia. 
            Un diagnóstico técnico preliminar para entender dónde están tus oportunidades de mejora.
          </p>

          <a
            href="mailto:hola@spelucin.com"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-inter font-semibold text-base rounded-full hover:opacity-90 transition-all shadow-xl shadow-primary/25"
          >
            Agendar llamada
          </a>

          <p className="text-xs font-mono text-muted-foreground/50 mt-6">
            Sin compromiso. 100% transparencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
