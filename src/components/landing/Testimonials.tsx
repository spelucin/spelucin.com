"use client"

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Desde que implementamos la medición server-side, recuperamos el 72% de las conversiones que estábamos perdiendo. El ROI de nuestras campañas finalmente refleja la realidad.',
    name: 'Carla Mendoza',
    role: 'Directora de Performance, Agencia Nexo',
  },
  {
    quote: 'La auditoría reveló 14 puntos ciegos en nuestro tracking. En 3 semanas, Alex optimizó toda nuestra infraestructura. Los reportes ahora generan confianza real con los clientes.',
    name: 'Martín Herrera',
    role: 'CEO, Studio Digital Lab',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground tracking-wide mb-4">
            TESTIMONIOS
          </span>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Resultados que hablan por sí solos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-8"
            >
              <p className="text-foreground/90 text-base leading-relaxed font-inter mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="text-sm font-inter font-semibold text-muted-foreground">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-inter font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs font-inter text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
