"use client"

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Creó nuestro dashboard de analytics asegurándose de que todo estuviera estructurado y funcionando a la perfección. Resolvió problemas de tracking que no teníamos mapeados y dejó todas las conexiones listas. ¡Totalmente recomendado!",
    author: "Milagros Meier",
    role: "Growth Lead @ Laboratoria",
  },
  {
    quote: "Su extenso conocimiento técnico logra intersecciones fascinantes entre SEO y tecnología. Automatizó nuestra reportería manteniendo siempre el foco en el crecimiento del negocio y los objetivos del cliente.",
    author: "Darío Vergara",
    role: "SEO Lead @ Attach Media",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 sm:py-32 px-6 sm:px-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary/50" />
            <span className="text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold">
              feedback ///
            </span>
          </div>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05]">
            Resultados que hablan por sí mismos.
          </h2>
          <p className="mt-8 text-white/40 text-sm sm:text-base md:text-lg leading-relaxed font-inter">
            Agencias que han transformado su rentabilidad recuperando la visibilidad total de sus datos y campañas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-sm group hover:border-primary/20 transition-all duration-500"
            >
              <div className="mb-8 flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary/60 group-hover:text-primary transition-colors duration-500">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white/60 font-inter italic mb-10 leading-relaxed group-hover:text-white transition-colors duration-500">
                "{item.quote}"
              </p>
              <div>
                <p className="font-inter font-bold text-white text-base tracking-tight">{item.author}</p>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mt-2 font-bold group-hover:text-primary/60 transition-colors duration-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
