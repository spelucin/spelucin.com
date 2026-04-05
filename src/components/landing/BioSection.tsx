"use client"

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function BioSection() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold mb-6">
                nosotros ///
              </span>
              <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05]">
                Rigor técnico para el marketing de alto rendimiento.
              </h2>
            </div>
            
            <p className="text-white/60 text-base sm:text-lg leading-relaxed font-inter">
              Cuento con 7 años de trayectoria resolviendo la complejidad técnica que impide a las agencias crecer con autoridad. Mi propósito es eliminar la incertidumbre operativa para que los equipos estratégicos dediquen su energía exclusivamente al negocio. No instalo etiquetas, construyo la infraestructura que protege la inversión de tus clientes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/spelucin/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/spelucin"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:hola@spelucin.com"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full max-w-md mx-auto group">
              {/* Contenedor del decorativo animado */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-full" />
              
              {/* Marco elegante */}
              <div className="relative h-full w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md p-2 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="relative h-full w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0A0A]">
                  <Image
                    src="/img/pfp.jpg"
                    alt="Perfil Profesional"
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  {/* Overlay gradiente para fusionar la imagen con el fondo de forma elegante */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80" />
                </div>
              </div>
              
              {/* Elementos decorativos abstractos flotantes */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 border border-white/10 rounded-full bg-white/[0.02] backdrop-blur-sm -z-10"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 border border-primary/20 rounded-full bg-white/[0.01] backdrop-blur-sm -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
