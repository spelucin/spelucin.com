"use client"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img 
            src="/img/logo.png" 
            alt="Alex Spelucin Logo" 
            className="h-6 w-auto opacity-30"
          />
          <span className="text-xs font-inter text-muted-foreground/60">
            Alex Spelucin
          </span>
        </div>

        <p className="text-xs font-inter text-muted-foreground/50 text-center">
          Hecho con ❤ en Lima, Perú
        </p>

        <a
          href="mailto:hola@spelucin.com"
          className="text-xs font-mono text-muted-foreground/60 hover:text-primary transition-colors"
        >
          hola@spelucin.com
        </a>
      </div>
    </footer>
  );
}
