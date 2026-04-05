"use client"

import { motion } from 'framer-motion';
import { Search, Settings, Server, Database } from 'lucide-react';

const solutions = [
  {
    icon: Search,
    title: 'Auditorías de medición',
    description: 'Diagnóstico de **fallos críticos** y fugas de señal en toda tu infraestructura. Identificamos dónde se rompe la atribución para que recuperes la **certeza total** en tus datos.',
  },
  {
    icon: Settings,
    title: 'Implementación técnica',
    description: 'Arquitectura **robusta y escalable**, diseñada específicamente para el ecosistema de agencias. Aseguramos que cada evento se rastree con **precisión clínica**.',
  },
  {
    icon: Server,
    title: 'Medición server-side',
    description: 'Soluciones avanzadas para **evadir bloqueadores** y restricciones de iOS. Recuperamos hasta un **40% más de conversiones** que la medición tradicional.',
  },
  {
    icon: Database,
    title: 'Integración de datos',
    description: 'Unificación de fuentes para una **verdad única**. Conectamos tus plataformas de media con GTM y GA4 para una **visibilidad 360°** del rendimiento.',
  },
];

export default function SolutionGrid() {
  return (
    <section id="soluciones" className="py-24 sm:py-32 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Bloque de encabezado editorial */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left mb-20 md:mb-24"
        >
          <span className="inline-block text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold mb-6">
            SOLUCIONES ///
          </span>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05] mb-8 max-w-4xl">
            Medición de vanguardia.
          </h2>
          <p className="text-white/40 text-sm sm:text-base md:text-lg leading-relaxed font-inter max-w-4xl">
            Valoramos la precisión técnica porque sabemos que no solo atrae mejores decisiones, sino que otorga a tu agencia una ventaja competitiva real. Hemos optimizado nuestros procesos de auditoría e implementación para integrarnos con tu equipo de media de forma natural.
          </p>
        </motion.div>

        {/* Layout de cuadrícula dinámica (2 columnas por fila) */}
        <div className="grid lg:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-24">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-start"
            >
              {/* Par de Icono + Título Horizontal */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-500 shadow-inner group-hover:border-primary/40 group-hover:bg-primary/5">
                  {/* Branding Glow Below Icon */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 group-hover:bg-primary/30 transition-all duration-500" />
                  
                  <item.icon className="relative z-10 w-6 h-6 text-white/30 group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-white tracking-tight leading-tight group-hover:text-primary/90 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Descripción enfocada en palabras clave */}
              <p className="text-sm sm:text-base text-white/40 leading-relaxed font-inter group-hover:text-white/60 transition-colors max-w-xl">
                {item.description.split('**').map((part, index) => (
                  index % 2 === 1 ? <strong key={index} className="text-white/90 font-bold">{part}</strong> : part
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
