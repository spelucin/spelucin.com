"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    label: 'Agencia - Nivel 01',
    name: 'Emergente',
    price: '$400',
    setup: '$250',
    features: ['Auditoría activa', 'SLA: 24h', 'Reuniones equipo'],
    minClients: 3,
    maxClients: 5,
  },
  {
    label: 'Agencia - Nivel 02',
    name: 'En Crecimiento',
    price: '$800',
    setup: '$200',
    features: ['Auditoría activa', 'SLA: 12h', 'Reuniones equipo', 'Integración avanzada', '4h capacitación'],
    minClients: 6,
    maxClients: 11,
  },
  {
    label: 'Agencia - Nivel 03',
    name: 'Estratégico',
    price: '$1,500',
    setup: '$150',
    features: ['Auditoría activa', 'SLA: 8h', 'Reuniones equipo', 'Integración avanzada', '6h capacitación', 'Marca blanca'],
    minClients: 12,
    maxClients: 15,
  },
  {
    label: 'Agencia - Nivel 04',
    name: 'Estratégico Avanzado',
    price: '$1,800',
    setup: '$150',
    features: ['Auditoría activa', 'SLA: 6h', 'Reuniones equipo', 'Integración avanzada', '8h capacitación', 'Marca blanca'],
    minClients: 16,
    maxClients: 100,
  },
];

interface PricingCardsProps {
  onOpenCalModal: () => void;
}

export default function PricingCards({ onOpenCalModal }: PricingCardsProps) {
  const [clients, setClients] = useState(3);
  const currentTier = tiers.find((t) => clients >= t.minClients && clients <= t.maxClients) || tiers[0];

  return (
    <section id="precios" className="py-24 px-6 sm:px-12 border-t border-white/5 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase font-bold mb-6 block">precios ///</span>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter mb-8">Planes para escalar.</h2>
          <p className="text-white/40 text-sm sm:text-base md:text-lg leading-relaxed font-inter">
            Inversión transparente para resultados medibles. Planes diseñados para acompañar el crecimiento de tu negocio o agencia con rigor técnico y escala operativa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Plan Agencias (Interactive) */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col transition-all">
            <div className="flex justify-between items-start mb-10">
              <div>
                <span className="text-sm font-mono text-primary block mb-2">{currentTier.label}</span>
                <h3 className="text-2xl font-bold text-white tracking-tighter">{currentTier.name}</h3>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-white tracking-tighter">{clients}</span>
                <span className="text-xs text-white/40 block">Clientes</span>
              </div>
            </div>
            
            <input
              type="range"
              min="3"
              max="20"
              value={clients}
              onChange={(e) => setClients(parseInt(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary mb-10"
            />

            <div className="flex gap-12 mb-10">
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Mensual</p>
                <p className="text-3xl font-bold text-white mt-1">{currentTier.price}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Setup</p>
                <p className="text-3xl font-bold text-white mt-1">{currentTier.setup}</p>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {currentTier.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60 font-inter">
                  <Check className="w-4 h-4 text-primary" /> {f}
                </li>
              ))}
            </ul>

            <button onClick={onOpenCalModal} className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-full text-xs font-bold hover:bg-white/10 transition-all">
              Agendar para Agencias
            </button>
          </div>

          {/* Plan Proyectos (Static) */}
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 sm:p-10 flex flex-col">
            <div className="mb-8">
              <span className="text-sm font-mono text-primary block mb-2">Puntual</span>
              <h3 className="text-2xl font-bold text-white tracking-tighter">Plan Proyectos</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Soluciones de auditoría rápida, migraciones técnicas o resolución de problemas específicos. Setup impecable sin compromiso mensual.
            </p>
            
            <div className="mb-10">
              <p className="text-[10px] text-primary/60 uppercase tracking-widest font-bold">Inversión única</p>
              <p className="text-3xl font-bold text-white mt-1">Desde $250</p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {['Auditoría de integridad', 'Configuración de eventos', 'Fixing de tracking', 'Documentación final'].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60 font-inter">
                  <Check className="w-4 h-4 text-primary" /> {f}
                </li>
              ))}
            </ul>

            <button onClick={onOpenCalModal} className="w-full py-4 bg-primary text-primary-foreground rounded-full text-xs font-bold hover:opacity-90 transition-all">
              Agendar Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

