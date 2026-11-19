"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

/**
 * Pulsante WhatsApp DIMOSTRATIVO.
 * Non apre alcuna chat: mostra un avviso. Per attivarlo, sostituire il pannello
 * con un link a https://wa.me/<numero-reale-dello-studio>.
 */
export function WhatsAppButton({ inline = false }: { inline?: boolean }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const button = (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      aria-controls={inline ? "wa-panel-inline" : "wa-panel"}
      className={
        inline
          ? "group inline-flex items-center gap-3 rounded-full bg-[#1f7a4d] px-6 py-3.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#186540] hover:shadow-xl hover:shadow-[#1f7a4d]/20"
          : "group inline-flex size-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-xl shadow-night/20 transition-all duration-300 hover:scale-105 hover:bg-[#186540]"
      }
    >
      {open && !inline ? <X className="size-6" aria-hidden /> : <MessageCircle className={inline ? "size-5" : "size-6"} aria-hidden />}
      {inline ? "Scrivici su WhatsApp" : <span className="sr-only">WhatsApp (dimostrativo)</span>}
    </button>
  );

  const panel = open && (
    <div
      ref={panelRef}
      id={inline ? "wa-panel-inline" : "wa-panel"}
      role="dialog"
      aria-label="WhatsApp dimostrativo"
      tabIndex={-1}
      className={`animate-fade-up rounded-2xl border border-line bg-white p-5 text-sm leading-relaxed text-night-muted shadow-2xl shadow-night/15 outline-none [animation-duration:.4s] ${
        inline ? "mt-4 max-w-sm" : "absolute right-0 bottom-18 w-72"
      }`}
    >
      <p className="font-semibold text-night">Pulsante WhatsApp dimostrativo</p>
      <p className="mt-2">
        In questa demo non è collegato alcun numero. Nel sito reale aprirà una chat con la segreteria dello studio.
      </p>
      <p className="mt-2 text-xs text-muted">Non inviare mai via WhatsApp referti o dati clinici.</p>
    </div>
  );

  if (inline) {
    return (
      <div>
        {button}
        {panel}
      </div>
    );
  }

  return (
    <div className="fixed right-5 bottom-5 z-40 sm:right-8 sm:bottom-8">
      {panel}
      {button}
    </div>
  );
}
