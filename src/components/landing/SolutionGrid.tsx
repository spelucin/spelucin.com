"use client"

import { motion } from 'framer-motion';
import { Search, Settings, Server, Database } from 'lucide-react';

const solutions = [
  {
    icon: Search,
    title: 'Diagnóstico de Integridad',
    description: 'Encuentro por qué tus números no coinciden y dónde se pierden las ventas.',
    step: '01'
  },
  {
    icon: Settings,
    title: 'Sistemas de Medición 360',
    description: 'Implementación completa de GA4 y seguimiento desde el servidor para máxima fidelidad.',
    step: '02'
  },
  {
    icon: Server,
    title: 'Automatización con IA',
    description: 'Uso tecnología propia para eliminar errores humanos y acelerar el despliegue técnico.',
    step: '03'
  },
  {
    icon: Database,
    title: 'Traducción de Negocio',
    description: 'Convierto la complejidad técnica en insights claros para tu equipo de marketing.',
    step: '04'
  },
];

export default function SolutionGrid() {
  return (
    <section id="soluciones" className="relative py-24 sm:py-32 px-6 sm:px-12 border-t border-border bg-background overflow-hidden">
      {/* Background Texture Accents */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Bloque de encabezado editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary/50" />
            <span className="text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold">
              servicios ///
            </span>
          </div>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05] mb-8 max-w-3xl">
            Sistemas ingeniería diseñados para <span className="text-primary italic">escalar</span>.
          </h2>
        </motion.div>

        {/* Layout de cuadrícula dinámica */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full p-8 rounded-3xl bg-card/20 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:bg-card/40 group-hover:shadow-[0_0_40px_rgba(var(--primary),0.05)]">
                
                {/* Background Accent Shimmer */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                
                {/* Step Number Badge */}
                <div className="absolute top-6 right-8 font-mono text-3xl font-black text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500">
                   {item.step}
                </div>

                <div className="flex flex-col h-full">
                  {/* Icon Area */}
                  <div className="mb-8 p-4 w-fit rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/5">
                    <item.icon className="w-6 h-6 text-white/40 group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="font-inter font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-primary/90 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-inter group-hover:text-foreground/80 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Corner Gradient Glow */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 blur-[50px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
