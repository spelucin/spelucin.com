"use client"

import { motion } from 'framer-motion';
import { Search, Settings, Server, Database } from 'lucide-react';

const solutions = [
  {
    icon: Search,
    title: 'Auditorías de medición',
    description: 'Diagnóstico de fallos críticos y fugas de señal en toda tu infraestructura de tracking.',
  },
  {
    icon: Settings,
    title: 'Implementación de la medición',
    description: 'Arquitectura robusta y escalable, diseñada para crecer con tu agencia.',
  },
  {
    icon: Server,
    title: 'Medición server-side',
    description: 'Recuperación de datos bloqueados por navegadores y restricciones de privacidad.',
  },
  {
    icon: Database,
    title: 'Integración de datos',
    description: 'Unificación de fuentes para una verdad única sobre el rendimiento de tus campañas.',
  },
];

export default function SolutionGrid() {
  return (
    <section id="soluciones" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground tracking-wide mb-4">
            SOLUCIONES
          </span>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
            Recupera el control de tus datos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-inter">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
