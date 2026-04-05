"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    label: 'Nivel 01',
    name: 'Emergente',
    price: '$400',
    setup: '$250',
    features: [
      'Auditoría para todos los clientes activos',
      'SLA: 24 Horas',
      'Reuniones con los miembros del equipo',
    ],
    minClients: 3,
    maxClients: 5,
  },
  {
    label: 'Nivel 02',
    name: 'En Crecimiento',
    price: '$800',
    setup: '$200',
    features: [
      'Auditoría para todos los clientes activos',
      'SLA: 12 Horas',
      'Reuniones con los miembros del equipo',
      'Integración de datos avanzada (CRM/CAPI/Server-Side)',
      '4 horas de capacitación mensual',
    ],
    minClients: 6,
    maxClients: 11,
  },
  {
    label: 'Nivel 03',
    name: 'Estratégico',
    price: '$1,500',
    setup: '$150',
    features: [
      'Auditoría para todos los clientes activos',
      'SLA: 8 Horas',
      'Reuniones con los miembros del equipo',
      'Integración de datos avanzada (CRM/CAPI/Server-Side)',
      '6 horas de capacitación mensual',
      'Marca blanca y reuniones con cliente',
    ],
    minClients: 12,
    maxClients: 15,
  },
  {
    label: 'Nivel 04',
    name: 'Estratégico Avanzado',
    price: '$1,800',
    setup: '$150',
    features: [
      'Auditoría para todos los clientes activos',
      'SLA: 6 Horas',
      'Reuniones con los miembros del equipo',
      'Integración de datos avanzada (CRM/CAPI/Server-Side)',
      '8 horas de capacitación mensual',
      'Marca blanca y reuniones con cliente',
    ],
    minClients: 16,
    maxClients: 100, // Represents 16+
  },
];

interface PricingCardsProps {
  onOpenCalModal: () => void;
}

export default function PricingCards({ onOpenCalModal }: PricingCardsProps) {
  const [clients, setClients] = useState(3);

  const currentTier = tiers.find(
    (t) => clients >= t.minClients && clients <= t.maxClients
  ) || tiers[0];

  return (
    <section id="precios" className="py-24 sm:py-32 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left mb-16 max-w-2xl"
        >
          <span className="inline-block text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold mb-6">
            precios ///
          </span>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05]">
            Planes diseñados para escalar.
          </h2>
          <p className="mt-8 text-white/40 text-sm sm:text-base md:text-lg leading-relaxed font-inter">
            Usa el selector para ver la inversión mensual y el Setup Fee. Nota de negocio: El Setup Fee se reduce automáticamente al subir de nivel para priorizar nuestra relación como socios comerciales.
          </p>
        </motion.div>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 md:p-14 lg:p-16 overflow-hidden shadow-2xl shadow-black/40"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] -z-10 rounded-full translate-x-1/3 -translate-y-1/3 opacity-30" />
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column: Calculator */}
              <div className="space-y-12">
                <div>
                  <div className="flex items-baseline justify-between mb-10">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] font-bold">
                      Número de clientes
                    </span>
                    <span className="font-inter font-bold text-5xl text-white tracking-tighter">
                      {clients === 20 ? '20+' : clients}
                    </span>
                  </div>
                  
                  <div className="relative pt-6 pb-2">
                    <input
                      type="range"
                      min="3"
                      max="20"
                      value={clients}
                      onChange={(e) => setClients(parseInt(e.target.value))}
                      className="w-full h-1 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary group transition-all"
                    />
                    <div className="flex justify-between mt-4">
                      <span className="text-[10px] font-mono text-white/20 font-bold uppercase tracking-widest">3</span>
                      <span className="text-[10px] font-mono text-white/20 font-bold uppercase tracking-widest text-right">20+</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/5">
                  <div className="space-y-4">
                    <span className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] font-bold">
                      Fee Mensual
                    </span>
                    <div className="flex items-baseline gap-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentTier.price}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="font-inter font-bold text-4xl md:text-5xl text-white tracking-tighter"
                        >
                          {currentTier.price}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-[10px] font-inter text-white/30 font-medium uppercase tracking-widest">USD</span>
                    </div>
                    <div className="mt-2 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-white/10 font-bold uppercase tracking-widest">
                        ~ ${Math.round(parseInt(currentTier.price.replace('$', '').replace(',', '')) / clients)} por cliente
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <span className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] font-bold">
                      Setup Inicial
                    </span>
                    <div className="flex items-baseline gap-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentTier.setup}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="font-inter font-bold text-4xl md:text-5xl text-white tracking-tighter"
                        >
                          {currentTier.setup}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-[10px] font-inter text-white/30 font-medium uppercase tracking-widest">USD</span>
                    </div>
                  </div>
                </div>

                {/* CTA Removed as requested */}
              </div>

              {/* Right Column: Features (taking more presence) */}
              <div className="lg:pl-16 lg:border-l border-white/5 flex flex-col justify-center">
                <div className="mb-10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/60 font-bold mb-2 block">
                    {currentTier.label}
                  </span>
                  <h3 className="font-inter font-bold text-3xl text-white tracking-tight leading-tight">{currentTier.name}</h3>
                </div>
                <ul className="space-y-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTier.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      {currentTier.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="mt-1 bg-primary/5 border border-primary/20 rounded-full p-1">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm sm:text-base text-white/50 font-inter leading-tight font-medium">{f}</span>
                        </li>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

