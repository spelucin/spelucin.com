"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: '¿Qué tipo de agencias pueden trabajar contigo?',
    a: 'Trabajo con agencias de marketing digital en Latinoamérica que gestionan campañas de performance para clientes. No importa el tamaño, lo que importa es que quieran tomar decisiones basadas en datos confiables.',
  },
  {
    q: '¿Cuánto tiempo tarda una auditoría de medición?',
    a: 'Una auditoría completa toma entre 5 y 10 días hábiles, dependiendo de la complejidad de tu stack actual. Al final recibes un informe detallado con todos los puntos críticos identificados y un plan de acción.',
  },
  {
    q: '¿Qué es la medición server-side y por qué la necesito?',
    a: 'Es una arquitectura donde los eventos de conversión se envían desde tu servidor en lugar del navegador del usuario. Esto elimina el impacto de los bloqueadores de anuncios, las restricciones de iOS 14 y la pérdida de cookies de terceros, recuperando entre el 30% y el 70% de datos que antes perdías.',
  },
  {
    q: '¿Puedo cambiar de plan si mi agencia crece?',
    a: 'Sí. Los planes están diseñados para escalar contigo. Al subir de nivel, el Setup Fee se reduce automáticamente para reconocer el valor de nuestra relación a largo plazo.',
  },
  {
    q: '¿Trabajas con plataformas específicas?',
    a: 'Trabajo con Google Tag Manager, GA4, Meta Pixel, Google Ads, TikTok Ads, y sistemas server-side como Stape, Conversion API y Google Cloud. Si usas otra plataforma, lo evaluamos juntos en la sesión de diagnóstico.',
  },
  {
    q: '¿Cómo es la sesión de diagnóstico preliminar?',
    a: 'Es una videollamada de 20 minutos donde revisamos tu situación actual: qué herramientas usas, qué datos estás perdiendo y qué oportunidades existen. Sin compromiso y sin costo.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-border/60 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-secondary/30 transition-colors"
      >
        <span className="font-inter font-medium text-sm sm:text-base text-foreground">{item.q}</span>
        <div className={`shrink-0 w-7 h-7 rounded-full border border-border/60 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 border-primary/50 bg-primary/10' : ''}`}>
          <Plus className={`w-3.5 h-3.5 transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed font-inter border-t border-border/40 pt-4">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground tracking-wide mb-4">
            FAQ
          </span>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
