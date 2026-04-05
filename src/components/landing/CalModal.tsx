"use client"

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalModal({ isOpen, onClose }: CalModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Initialize Cal.com logic
      (function (C, A, L) { 
        let p = function (a: any, ar: any) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            let s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s); 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api: any = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          } 
          p(cal, ar); 
        }; 
      })(window as any, "https://app.cal.com/embed/embed.js", "init");

      if (window.Cal) {
        window.Cal("init", "diagnostico", { origin: "https://app.cal.com" });
        window.Cal.ns.diagnostico("inline", {
          elementOrSelector: "#my-cal-inline-diagnostico",
          config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
          calLink: "spelucin/diagnostico",
        });
        window.Cal.ns.diagnostico("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl h-[95vh] sm:h-[85vh] m-4 bg-[#111] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 bg-[#111]">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-[0.3em]">
                  Programar Diagnóstico ///
                </span>
              </div>
              <button
                onClick={onClose}
                className="group p-2 rounded-full hover:bg-white/5 transition-all border border-white/5 hover:border-white/10"
              >
                <X className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Cal.com Embed Container */}
            <div className="flex-1 w-full bg-[#111] px-2 sm:px-4 pb-12">
              <div 
                id="my-cal-inline-diagnostico" 
                className="w-full h-full overflow-y-auto scrollbar-hide rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
