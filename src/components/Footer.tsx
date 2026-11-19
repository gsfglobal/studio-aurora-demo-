import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { nav, site, hours, treatments } from "@/lib/site";
import { Container } from "./ui";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <Container>
        <div className="grid gap-12 border-b border-line pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm leading-relaxed text-muted">
              Odontoiatria a Napoli con un approccio attento alla persona, percorsi spiegati con chiarezza e tecnologie digitali.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-night-muted">
              <li className="flex gap-3"><MapPin className="size-4 shrink-0 text-sage-deep" aria-hidden />{site.address}</li>
              <li className="flex gap-3"><Phone className="size-4 shrink-0 text-sage-deep" aria-hidden />{site.phoneLabel} <span className="text-muted">(demo)</span></li>
              <li className="flex gap-3"><Mail className="size-4 shrink-0 text-sage-deep" aria-hidden />{site.email}</li>
            </ul>
          </div>

          <nav aria-label="Pagine" className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-night uppercase">Pagine</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-muted transition-colors hover:text-night">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Trattamenti" className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-night uppercase">Trattamenti</h2>
            <ul className="mt-5 space-y-3">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link href={`/trattamenti#${t.slug}`} className="link-underline text-muted transition-colors hover:text-night">{t.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-night uppercase">Orari (dimostrativi)</h2>
            <dl className="mt-5 space-y-3 text-sm">
              {hours.map((h) => (
                <div key={h.day}>
                  <dt className="text-night">{h.day}</dt>
                  <dd className="text-muted">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Dati obbligatori per le strutture sanitarie: segnaposto da compilare */}
        <div className="grid gap-2 border-b border-line py-8 text-xs leading-relaxed text-muted md:grid-cols-2">
          <p>Direttore sanitario: {site.legal.direttoreSanitario}</p>
          <p>{site.legal.albo}</p>
          <p>{site.legal.piva}</p>
          <p>{site.legal.autorizzazione}</p>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {site.name} — <strong className="font-semibold text-night-muted">sito dimostrativo</strong>: studio immaginario, nessuna prenotazione reale.
          </p>
          <p>
            Privacy policy e cookie policy: da inserire · Questa demo non usa cookie di profilazione · Foto: Unsplash
          </p>
        </div>
      </Container>
    </footer>
  );
}
