"use client";

import { useId, useState, type FormEvent } from "react";
import { Send, CircleAlert, Check } from "lucide-react";

type Errors = Partial<Record<"nome" | "email" | "privacy", string>>;

/**
 * Modulo contatti DIMOSTRATIVO.
 * Valida i campi lato client ma NON invia né salva alcun dato.
 * Per renderlo operativo va collegato a un servizio reale (es. endpoint
 * server, servizio email transazionale o CRM) con informativa privacy completa.
 */
export function ContactForm() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Errors = {};
    const nome = String(fd.get("nome") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (nome.length < 2) next.nome = "Inserisci nome e cognome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Inserisci un indirizzo email valido.";
    if (!fd.get("privacy")) next.privacy = "È necessario prendere visione dell'informativa.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setDone(true);
      e.currentTarget.reset();
    }
  }

  const field =
    "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-night placeholder:text-muted/60 transition-colors duration-300 focus:border-sage-deep focus:ring-4 focus:ring-sage/15 focus:outline-none aria-[invalid=true]:border-red-400";
  const label = "text-sm font-medium text-night";

  if (done) {
    return (
      <div role="status" className="animate-fade-up rounded-3xl border border-sage/40 bg-sage-mist p-8 sm:p-10">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-sage-deep text-white">
          <Check className="size-6" aria-hidden />
        </span>
        <h3 className="mt-6 text-3xl text-night">Simulazione completata</h3>
        <p className="mt-3 leading-relaxed text-night-muted">
          Questo è un <strong>modulo dimostrativo</strong>: nessun dato è stato inviato, salvato o trasmesso. Nel sito reale la richiesta arriverà alla segreteria dello studio.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="link-underline mt-6 text-sm font-medium text-night"
        >
          Compila di nuovo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby={`${id}-demo`}>
      <p id={`${id}-demo`} className="flex gap-2 rounded-xl bg-ivory px-4 py-3 text-sm text-night-muted">
        <CircleAlert className="mt-0.5 size-4 shrink-0 text-sage-deep" aria-hidden />
        Modulo dimostrativo: non invia richieste e non salva dati.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-nome`} className={label}>Nome e cognome *</label>
          <input
            id={`${id}-nome`} name="nome" type="text" autoComplete="name" required
            aria-invalid={!!errors.nome} aria-describedby={errors.nome ? `${id}-nome-err` : undefined}
            className={field} placeholder="Mario Rossi"
          />
          {errors.nome && <p id={`${id}-nome-err`} className="mt-2 text-sm text-red-600">{errors.nome}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-tel`} className={label}>Telefono</label>
          <input id={`${id}-tel`} name="telefono" type="tel" autoComplete="tel" className={field} placeholder="Facoltativo" />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-email`} className={label}>Email *</label>
        <input
          id={`${id}-email`} name="email" type="email" autoComplete="email" required
          aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-err` : undefined}
          className={field} placeholder="nome@esempio.it"
        />
        {errors.email && <p id={`${id}-email-err`} className="mt-2 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor={`${id}-motivo`} className={label}>Motivo del contatto</label>
        <select id={`${id}-motivo`} name="motivo" className={field} defaultValue="info">
          <option value="info">Richiesta di informazioni</option>
          <option value="visita">Prenotazione di una prima visita</option>
          <option value="appuntamento">Modifica di un appuntamento</option>
          <option value="altro">Altro</option>
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-msg`} className={label}>Messaggio</label>
        <textarea
          id={`${id}-msg`} name="messaggio" rows={4} className={`${field} resize-y`}
          placeholder="Indica giorni e fasce orarie in cui preferisci essere ricontattato."
          aria-describedby={`${id}-msg-hint`}
        />
        <p id={`${id}-msg-hint`} className="mt-2 text-xs text-muted">
          Ti chiediamo di non inserire dati sulla salute: ne parleremo di persona durante la visita.
        </p>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-night-muted">
          <input
            type="checkbox" name="privacy"
            aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? `${id}-privacy-err` : undefined}
            className="mt-1 size-4 shrink-0 accent-sage-deep"
          />
          <span>Ho letto l&apos;informativa privacy (da inserire) e acconsento a essere ricontattato per rispondere alla mia richiesta. *</span>
        </label>
        {errors.privacy && <p id={`${id}-privacy-err`} className="mt-2 text-sm text-red-600">{errors.privacy}</p>}
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-night px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-night-soft hover:shadow-xl hover:shadow-night/15 sm:w-auto"
      >
        Invia richiesta (demo)
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </button>
    </form>
  );
}
