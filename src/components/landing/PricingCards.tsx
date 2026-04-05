"use client"

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    label: 'Tier 01',
    name: 'Emergente',
    price: '$400',
    period: 'USD / mes',
    clients: '1 a 5 clientes',
    setup: '$250',
    featured: false,
    features: [
      'Auditoría inicial completa',
      'Implementación de medición base',
      'Soporte mensual',
      'Reportes de señal',
    ],
  },
  {
    label: 'Tier 02',
    name: 'En Crecimiento',
    price: '$800',
    period: 'USD / mes',
    clients: '6 a 15 clientes',
    setup: '$200',
    featured: true,
    features: [
      'Todo del plan Emergente',
      'Medición server-side',
      'Integración de datos avanzada',
      'Soporte prioritario',
      'Dashboard personalizado',
    ],
  },
  {
    label: 'Tier 03',
    name: 'Estratégico',
    price: '$1,500',
    period: 'USD / mes',
    clients: '16+ clientes',
    setup: '$150',
    featured: false,
    features: [
      'Todo del plan En Crecimiento',
      'Consultoría estratégica',
      'Arquitectura personalizada',
      'Onboarding dedicado',
      'SLA garantizado',
      'Acceso anticipado a novedades',
    ],
  },
];

export default function PricingCards() {
  return (
    <section id="precios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground tracking-wide mb-4">
            PLANES
          </span>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
            Elige tu nivel de partnership
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.featured
                  ? 'border-primary/50 bg-primary/5 backdrop-blur-sm'
                  : 'border-border/60 bg-card/30 backdrop-blur-sm'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-mono font-semibold rounded-full">
                  RECOMENDADO
                </div>
              )}

              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                  {tier.label}
                </span>
                <h3 className="font-inter font-bold text-xl text-foreground mt-1">{tier.name}</h3>
                <p className="text-xs font-mono text-muted-foreground mt-1">{tier.clients}</p>
              </div>

              <div className="mb-6">
                <span className="font-inter font-bold text-4xl text-foreground">{tier.price}</span>
                <span className="text-sm font-inter text-muted-foreground ml-1">{tier.period}</span>
                <p className="text-xs font-mono text-muted-foreground/70 mt-2">
                  Setup Fee: {tier.setup}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground font-inter">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3 rounded-full text-sm font-inter font-semibold transition-all ${
                  tier.featured
                    ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20'
                    : 'border border-border text-foreground hover:bg-secondary/60'
                }`}
              >
                Comenzar
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-mono text-muted-foreground/60 mt-10 max-w-lg mx-auto"
        >
          El Setup Fee se reduce automáticamente al subir de nivel para priorizar nuestra relación como socios comerciales.
        </motion.p>
      </div>
    </section>
  );
}
