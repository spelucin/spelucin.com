"use client"

import { motion } from 'framer-motion';
import { SiMeta, SiGoogleads, SiGoogleanalytics, SiGoogletagmanager, SiHubspot, SiGooglegemini } from 'react-icons/si';
import { TrendingUp, Pointer, Check } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      title: "Inmersión Estratégica",
      description: "Analizo tu modelo de ingresos para identificar las preguntas de negocio que hoy no puedes responder. Aseguramos que cada evento configurado tenga un propósito comercial claro.",
    },
    {
      title: "Diseño de la Estructura de Datos",
      description: "Planifico el entorno técnico con reglas de nombre y eventos bajo estándares globales. Convertimos el caos técnico en un activo de consulta rápida para todo tu equipo.",
    },
    {
      title: "Ejecución Técnica con IA",
      description: "Implemento la solución mediante herramientas de automatización propias. Garantizo precisión absoluta y tiempos de entrega que los métodos manuales no pueden igualar.",
    },
    {
      title: "Distribución y Validación",
      description: "Enviamos la data limpia y validada a través de GTM hacia tus píxeles de pauta y CRM, asegurando que cada parámetro sea exacto antes de su uso.",
    },
    {
      title: "Traducción y Activación",
      description: "Traduzco la complejidad técnica en conclusiones accionables. Te enseño a leer tu sistema para que ajustes tus campañas basándote en la realidad financiera de tu negocio.",
    }
  ];

  const visuals = [ChecklistVisual, DataLayerVisual, GeminiVisual, FlowchartVisual, DashboardVisual];

  return (
    <section id="proceso" className="relative bg-background border-t border-border pt-24 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto mb-16 md:mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary/50" />
            <span className="text-[10px] sm:text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold">
              PROCESO ///
            </span>
          </div>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05] mb-6 max-w-3xl">
            Un proceso diseñado para que los datos trabajen para ti.
          </h2>
          <p className="text-white/40 text-sm sm:text-base md:text-lg leading-relaxed font-inter max-w-3xl">
            Descubre cómo transformamos datos en bruto en decisiones seguras. A continuación, verás nuestro ecosistema técnico en acción, diseñado para eliminar fugas y maximizar el retorno de inversión iterando en cada pilar.
          </p>
        </motion.div>
      </div>


      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-20 pb-4 md:pb-8">
        {steps.map((step, index) => {
          const Visual = visuals[index];
          const topOffset = 120 + (index * 60);
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ top: `${topOffset}px` }}
              className="flex flex-col lg:flex-row bg-card border border-white/5 rounded-3xl overflow-hidden sticky shadow-[0_0_40px_rgba(var(--primary),0.08),0_8px_32px_rgba(0,0,0,0.6)]"
            >
              {/* Content Side - Aligned to top as requested */}
              <div className="w-full lg:w-5/12 p-6 sm:p-8 lg:pr-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-start pt-10 sm:pt-12">
                 <div className="flex items-center gap-3 mb-2 mt-0">
                   <span className="font-mono text-primary font-bold text-sm tracking-widest">
                     00{index + 1}
                   </span>
                   <span className="text-white/20 font-mono tracking-widest text-xs">///</span>
                   <span className="font-inter font-bold text-lg sm:text-xl text-white ml-2">
                     {step.title}
                   </span>
                 </div>
                 <p className="text-sm sm:text-base text-white/50 leading-relaxed font-inter mt-4">
                   {step.description}
                 </p>
              </div>

              {/* Visual Side */}
              <div className="w-full lg:w-7/12 relative min-h-[280px] lg:min-h-[320px] flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-white/[0.01]">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
                 <Visual />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// Subcomponents for the visuals
function DataLayerVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-md bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs text-left">
        <div className="flex gap-2 p-2 bg-white/5 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="p-4 sm:p-6 text-emerald-400 space-y-1.5 overflow-auto max-h-[350px]">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
            <span className="text-purple-400">window</span>.dataLayer = <span className="text-purple-400">window</span>.dataLayer || [];
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <span className="text-purple-400">window</span>.dataLayer.<span className="text-blue-400">push</span>({"{}"}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.5 }} className="pl-4">
            <span className="text-white">'event'</span>: <span className="text-yellow-300">'purchase'</span>,
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.6, duration: 0.5 }} className="pl-4">
            <span className="text-white">'ecommerce'</span>: {"{"}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.1, duration: 0.5 }} className="pl-8">
            <span className="text-white">'value'</span>: <span className="text-orange-400">299.99</span>,
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.1, duration: 0.5 }} className="pl-8">
            <span className="text-white">'currency'</span>: <span className="text-yellow-300">'USD'</span>,
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.5 }} className="pl-4">
            {"}"}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.5 }}>
            {"});"}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function GA4Visual() {
  const events = [
    { name: "user_engagement", time: "3:46:07 PM", gap: "8s" },
    { name: "view_item_list", time: "3:45:59 PM", gap: "6s" },
    { name: "scroll", time: "3:45:53 PM", gap: "4s" },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center relative z-10">
        <div className="w-full max-w-sm bg-[#f8f9fa] dark:bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-full min-h-[260px] max-h-[300px]">
          <div className="p-3 border-b border-black/5 dark:border-white/5 flex justify-between items-center bg-white/50 dark:bg-black/20 shrink-0">
            <div className="flex items-center gap-2">
               <SiGoogleanalytics className="text-brand-google-analytics w-4 h-4" />
               <span className="font-inter font-medium text-black dark:text-white text-xs">DebugView</span>
            </div>
            <div className="flex gap-2 items-center">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
            </div>
          </div>
          
          {/* Timeline body */}
          <div className="flex-1 overflow-y-auto bg-white dark:bg-[#1a1a1a] px-4 py-3 font-mono">
            <div className="flex flex-col items-center w-full">

              {/* 0 new bubble */}
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="mb-3 z-20">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex flex-col items-center justify-center shadow-md">
                  <span className="text-white text-[13px] font-bold leading-none mt-1">0</span>
                  <span className="text-white/90 text-[9px] font-medium leading-none mb-1">new</span>
                </div>
              </motion.div>

              {/* Vertical connector from bubble to first event */}
              <div className="w-0.5 h-3 bg-gray-200 dark:bg-gray-700" />

              {events.map((ev, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  {/* Event row */}
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12 + 0.2 }}
                    className="flex items-center w-full gap-3"
                  >
                    {/* Timestamp */}
                    <span className="w-[90px] shrink-0 text-[9px] text-right text-gray-400 dark:text-gray-500 tracking-tighter">
                      {ev.time}
                    </span>
                    {/* Circle icon — sits exactly on the centre line */}
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 z-10">
                      <Pointer className="w-2.5 h-2.5 text-white" />
                    </div>
                    {/* Event name */}
                    <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-200 truncate">
                      {ev.name}
                    </span>
                  </motion.div>

                  {/* Connector + gap label below each event */}
                  {ev.gap ? (
                    <div className="flex flex-col items-center my-0.5">
                      <div className="w-0.5 h-2 bg-gray-200 dark:bg-gray-700" />
                      <span className="text-[9.5px] italic text-gray-400 dark:text-gray-500">{ev.gap}</span>
                      <div className="w-0.5 h-2 bg-gray-200 dark:bg-gray-700" />
                    </div>
                  ) : (
                    i < events.length - 1 && <div className="w-0.5 h-3 bg-gray-200 dark:bg-gray-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

function FlowchartVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative z-10 w-full max-w-[280px] mx-auto">
      <div className="relative w-full aspect-square flex items-center justify-center">
        
        {/* Animated Connected Dots SVG - Placed FIRST to render behind everything */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Dashed Lines (Curved) */}
          <path id="line-tl" d="M 50 50 Q 50 16 16 16" stroke="white" strokeOpacity="0.15" strokeWidth="0.8" fill="none" strokeDasharray="3 4" />
          <path id="line-tr" d="M 50 50 Q 50 16 84 16" stroke="white" strokeOpacity="0.15" strokeWidth="0.8" fill="none" strokeDasharray="3 4" />
          <path id="line-bl" d="M 50 50 Q 50 84 16 84" stroke="white" strokeOpacity="0.15" strokeWidth="0.8" fill="none" strokeDasharray="3 4" />
          <path id="line-br" d="M 50 50 Q 50 84 84 84" stroke="white" strokeOpacity="0.15" strokeWidth="0.8" fill="none" strokeDasharray="3 4" />

          {/* Traveling Dots - Slower animation */}
          <circle r="1.5" fill="#fff" filter="url(#glow)">
            <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear">
              <mpath href="#line-tl" />
            </animateMotion>
          </circle>
          <circle r="1.5" fill="#fff" filter="url(#glow)">
            <animateMotion dur="4.5s" repeatCount="indefinite" calcMode="linear">
              <mpath href="#line-tr" />
            </animateMotion>
          </circle>
          <circle r="1.5" fill="#fff" filter="url(#glow)">
            <animateMotion dur="3.8s" repeatCount="indefinite" calcMode="linear">
              <mpath href="#line-bl" />
            </animateMotion>
          </circle>
          <circle r="1.5" fill="#fff" filter="url(#glow)">
            <animateMotion dur="4.2s" repeatCount="indefinite" calcMode="linear">
              <mpath href="#line-br" />
            </animateMotion>
          </circle>
        </svg>

        {/* Central GTM Server */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-2xl shadow-[0_0_30px_rgba(var(--brand-gtm),0.2)]">
          <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
            <div className="w-full h-full bg-brand-gtm/10 border border-brand-gtm/30 rounded-2xl flex flex-col items-center justify-center">
              <SiGoogletagmanager className="w-7 h-7 text-brand-gtm mb-1" />
              <span className="text-[9px] font-bold text-white/80">sGTM</span>
            </div>
          </div>
        </div>

        {/* Top Left: Meta */}
        <motion.div 
           initial={{ opacity: 0, x: 20, y: 20 }}
           whileInView={{ opacity: 1, x: 0, y: 0 }}
           transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
           className="absolute top-[10%] left-[10%] z-20 w-14 h-14 rounded-2xl"
        >
          <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
             <div className="w-full h-full bg-brand-meta/10 border border-brand-meta/30 rounded-2xl flex items-center justify-center">
               <SiMeta className="w-6 h-6 text-brand-meta" />
             </div>
          </div>
        </motion.div>

        {/* Top Right: Google Ads */}
        <motion.div 
           initial={{ opacity: 0, x: -20, y: 20 }}
           whileInView={{ opacity: 1, x: 0, y: 0 }}
           transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
           className="absolute top-[10%] right-[10%] z-20 w-14 h-14 rounded-2xl"
        >
          <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
             <div className="w-full h-full bg-brand-google-ads/10 border border-brand-google-ads/30 rounded-2xl flex items-center justify-center">
               <SiGoogleads className="w-6 h-6 text-brand-google-ads" />
             </div>
          </div>
        </motion.div>

        {/* Bottom Left: GA4 */}
        <motion.div 
           initial={{ opacity: 0, x: 20, y: -20 }}
           whileInView={{ opacity: 1, x: 0, y: 0 }}
           transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
           className="absolute bottom-[10%] left-[10%] z-20 w-14 h-14 rounded-2xl"
        >
          <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
            <div className="w-full h-full bg-brand-google-analytics/10 border border-brand-google-analytics/30 rounded-2xl flex items-center justify-center">
               <SiGoogleanalytics className="w-5 h-5 text-brand-google-analytics" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Right: CRM */}
        <motion.div 
           initial={{ opacity: 0, x: -20, y: -20 }}
           whileInView={{ opacity: 1, x: 0, y: 0 }}
           transition={{ delay: 0.9, duration: 1.5, ease: "easeOut" }}
           className="absolute bottom-[10%] right-[10%] z-20 w-14 h-14 rounded-2xl"
        >
          <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
            <div className="w-full h-full bg-brand-hubspot/10 border border-brand-hubspot/30 rounded-2xl flex items-center justify-center">
               <SiHubspot className="w-6 h-6 text-brand-hubspot" />
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

function ChecklistVisual() {
  const items = [
    { label: "Costo de Adquisición (CAC)", checked: true },
    { label: "Valor de Vida del Cliente (LTV)", checked: true },
    { label: "Retorno de Inversión (ROI)", checked: true },
    { label: "Tasa de Conversión", checked: true },
    { label: "Margen de Contribución", checked: false },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[280px] bg-card border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 space-y-4">
          <div className="text-[10px] font-mono text-primary tracking-widest uppercase mb-4 font-bold">KPIs Estratégicos ///</div>
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className={`w-4 h-4 rounded border ${item.checked ? 'bg-primary border-primary flex items-center justify-center' : 'border-white/20'}`}>
                {item.checked && <Check className="w-2.5 h-2.5 text-primary-foreground" />}
              </div>
              <span className={`text-xs font-inter ${item.checked ? 'text-white/80' : 'text-white/30'}`}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GeminiVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 p-4 rounded-3xl bg-white/[0.03] border border-white/5"
      >
        <SiGooglegemini className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
      </motion.div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative z-10 w-full max-w-lg">
      <div className="w-full bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
         {/* Subtle animated background gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-30" />
         
         <div className="flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-white font-medium text-sm">Rendimiento General</h4>
            </div>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-8 bg-white/10 rounded-full" />
              <div className="h-1.5 w-8 bg-white/10 rounded-full" />
            </div>
         </div>
         
         <div className="grid grid-cols-3 gap-3 z-10">
            {[
              { label: 'ROAS', val: '3.4x', trend: '+12%', delay: 0 },
              { label: 'Conversiones', val: '1,248', trend: '+8.5%', delay: 0.1 },
              { label: 'CPA Avg', val: '$14.2', trend: '-5%', down: true, delay: 0.2 },
            ].map((kpi, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 + kpi.delay, duration: 1, ease: "easeOut" }}
                 className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/5 relative overflow-hidden group hover:bg-white/10 transition-colors"
              >
                 <div className="text-white/40 text-[10px] sm:text-xs font-medium mb-1">{kpi.label}</div>
                 <div className="text-white font-bold text-lg sm:text-2xl">{kpi.val}</div>
                 <div className={`text-[10px] flex items-center gap-1 mt-2 font-medium ${kpi.down ? 'text-red-400' : 'text-emerald-400'}`}>
                   <TrendingUp className={`w-3 h-3 ${kpi.down ? 'rotate-180' : ''}`} /> {kpi.trend}
                 </div>
              </motion.div>
            ))}
         </div>

         {/* Animated Bar chart */}
         <div className="w-full bg-white/5 rounded-xl border border-white/5 p-3 flex items-end gap-1 relative z-10 h-[120px] pt-4">
           {/* Chart Grid Lines */}
           <div className="absolute inset-x-4 inset-y-8 flex flex-col justify-between pointer-events-none opacity-20">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="w-full border-b border-dashed border-white/20" />
             ))}
           </div>
           
           {[
             { h: '25%' }, { h: '35%' }, { h: '20%' }, { h: '45%' }, { h: '50%' }, { h: '30%' },
             { h: '60%' }, { h: '55%' }, { h: '40%' }, { h: '65%' }, { h: '80%' }, { h: '70%' },
             { h: '50%' }, { h: '85%' }, { h: '75%' }, { h: '90%' }, { h: '65%' }, { h: '85%' },
             { h: '95%' }, { h: '80%' }, { h: '100%' }, { h: '90%' }, { h: '95%' }, { h: '85%' }
           ].map((bar, i) => (
             <div key={i} className="flex-1 flex flex-col justify-end h-full relative group">
               <motion.div
                 initial={{ height: "0%" }}
                 whileInView={{ height: bar.h }}
                 transition={{ duration: 1.5, delay: 0.5 + (i * 0.03), ease: "easeOut" }}
                 className="w-full rounded-t-sm bg-gradient-to-t from-primary/40 to-primary/80 relative"
               >
                 <div className="absolute top-0 inset-x-0 h-1 bg-white/30 rounded-t-sm" />
               </motion.div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}
