"use client"

import { motion } from 'framer-motion';

const agencies = [
  'Agency Alpha',
  'Media Corp',
  'Digital Lab',
  'Growth Studio',
];

export default function TrustBar() {
  return (
    <section className="py-12 px-6 border-y border-border/40">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-mono text-muted-foreground/60 tracking-widest uppercase mb-8">
          Agencias que confían en la medición precisa
        </p>
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          {agencies.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-default"
            >
              <div className="flex items-center gap-2 opacity-30 hover:opacity-70 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center">
                  <span className="text-xs font-mono font-semibold text-muted-foreground">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-inter font-medium text-muted-foreground hidden sm:block">
                  {name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
