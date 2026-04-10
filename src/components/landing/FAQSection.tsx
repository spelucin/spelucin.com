"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendGTMEvent } from '@next/third-parties/google'
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo ayuda la IA en mi medición?",
    answer: "La uso para automatizar la parte operativa, garantizando cero errores y mayor velocidad de entrega. Esto me permite dedicar más tiempo al análisis estratégico que realmente mueve la aguja de tu negocio.",
  },
  {
    question: "¿Qué pasa si ya tengo un equipo técnico?",
    answer: "Actúo como un consultor estratégico que establece los estándares que ellos deben seguir para ser rentables. Mi rol es elevar su capacidad técnica y asegurar que la arquitectura de datos sea impecable.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Un diagnóstico de integridad puede revelar fugas de dinero en menos de 48 horas. La implementación completa de un sistema robusto suele tomar entre 2 y 4 semanas, dependiendo de la complejidad del ecosistema.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32 px-6 sm:px-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Columna Izquierda: Encabezado */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left pt-2"
          >
            <span className="inline-block text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold mb-6">
              PREGUNTAS FRECUENTES ///
            </span>
            <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05]">
              Resolviendo tus dudas.
            </h2>
            <p className="mt-8 text-white/40 text-sm sm:text-base md:text-lg leading-relaxed font-inter max-w-sm">
              Todo lo que necesitas saber sobre el proceso de optimización, implementación y consultoría estratégica de datos.
            </p>
          </motion.div>

          {/* Columna Derecha: Acordeón */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/5 rounded-[24px] overflow-hidden bg-white/[0.015] backdrop-blur-md group hover:border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => {
                    const isOpening = openIndex !== i;
                    setOpenIndex(isOpening ? i : null);
                    if (isOpening) {
                      sendGTMEvent({ event: 'open_faq', faq_index: i });
                    }
                  }}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-white/[0.02] transition-all"
                >
                  <span className="text-sm sm:text-base font-inter font-bold text-white tracking-tight leading-snug pr-8 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-500 rounded-full border border-white/5 p-1 ${openIndex === i ? 'rotate-180 bg-primary/10 border-primary/20' : 'group-hover:border-white/20'}`}>
                    {openIndex === i ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/20" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-8 pb-8 text-sm text-white/40 font-inter leading-relaxed max-w-2xl border-t border-white/[0.03] pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
