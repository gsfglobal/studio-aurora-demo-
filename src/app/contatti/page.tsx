import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container, DemoNotice } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { hours, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Studio Dentistico Aurora a Napoli: modulo di richiesta informazioni, orari di apertura e posizione dello studio.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      <section className="bg-ivory">
        <Container className="pt-14 pb-16 lg:pt-24 lg:pb-20">
          <p className="eyebrow animate-fade-up">Contatti</p>
          <h1 className="mt-6 max-w-3xl animate-fade-up text-5xl leading-[1.04] text-night [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            Siamo qui per <em className="text-sage-deep italic">ascoltarti</em>.
          </h1>
          <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:240ms]">
            Scrivici per informazioni o per richiedere un appuntamento: la segreteria ti ricontatterà negli orari di apertura.
          </p>
          <DemoNotice className="mt-10 max-w-2xl animate-fade-up [animation-delay:360ms]">
            <strong>Sito dimostrativo.</strong> Studio Dentistico Aurora è uno studio immaginario: questa pagina non riceve prenotazioni reali, il modulo non invia dati e recapiti, orari e indirizzo sono di esempio.
          </DemoNotice>
        </Container>
      </section>

      <section id="prenota" className="scroll-mt-24 py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <h2 className="text-4xl text-night sm:text-5xl">Richiedi informazioni</h2>
            <p className="mt-4 mb-10 text-muted">I campi contrassegnati con * sono obbligatori.</p>
            <ContactForm />
          </Reveal>

          <aside className="space-y-6 lg:col-span-5" aria-label="Recapiti e orari">
            <Reveal delay={100} className="rounded-3xl bg-night p-8 text-white sm:p-10">
              <h2 className="text-3xl">Recapiti</h2>
              <ul className="mt-8 space-y-5">
                <li className="flex gap-4"><MapPin className="mt-0.5 size-5 shrink-0 text-sage" aria-hidden /><span className="text-white/80">{site.address}</span></li>
                <li className="flex gap-4"><Phone className="mt-0.5 size-5 shrink-0 text-sage" aria-hidden /><span className="text-white/80">{site.phoneLabel} <span className="text-white/50">(numero dimostrativo)</span></span></li>
                <li className="flex gap-4"><Mail className="mt-0.5 size-5 shrink-0 text-sage" aria-hidden /><span className="text-white/80">{site.email}</span></li>
              </ul>
              <div className="mt-10 border-t border-white/10 pt-8">
                <WhatsAppButton inline />
              </div>
            </Reveal>

            <Reveal delay={180} className="rounded-3xl border border-line p-8 sm:p-10">
              <h2 className="flex items-center gap-3 text-3xl text-night">
                <Clock className="size-6 text-sage-deep" strokeWidth={1.5} aria-hidden /> Orari
              </h2>
              <p className="mt-2 text-sm text-muted">Orari dimostrativi</p>
              <dl className="mt-6 divide-y divide-line">
                {hours.map((h) => (
                  <div key={h.day} className="flex flex-wrap justify-between gap-2 py-4">
                    <dt className="font-medium text-night">{h.day}</dt>
                    <dd className="text-muted">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>
        </Container>
      </section>

      {/* Posizione con segnaposto */}
      <section aria-labelledby="posizione" className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-sage-mist">
          <MapPlaceholder />
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-8 sm:left-8 sm:max-w-sm">
            <div className="rounded-2xl bg-white p-6 shadow-xl shadow-night/10">
              <p className="eyebrow">Posizione</p>
              <h2 id="posizione" className="mt-3 text-2xl text-night">Napoli, centro</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Mappa segnaposto. Nel sito reale verrà inserita la mappa interattiva con l&apos;indirizzo dello studio, caricata solo dopo il consenso ai cookie di terze parti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Mappa illustrativa in SVG: nessun servizio esterno, nessun cookie. */
function MapPlaceholder() {
  return (
    <svg viewBox="0 0 1200 520" className="h-[440px] w-full sm:h-[520px]" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustrazione segnaposto di una mappa">
      <rect width="1200" height="520" fill="#eef2ec" />
      <path d="M0 400 C 200 360, 380 450, 600 410 S 1000 340, 1200 390 L1200 520 L0 520Z" fill="#dbe6ea" />
      <g stroke="#ffffff" strokeWidth="14" fill="none" strokeLinecap="round">
        <path d="M-20 120 L1220 210" />
        <path d="M180 -20 L320 540" />
        <path d="M640 -20 C 600 160, 700 260, 660 540" />
        <path d="M-20 300 C 300 260, 800 300, 1220 250" />
        <path d="M940 -20 L860 540" />
      </g>
      <g stroke="#ffffff" strokeWidth="5" fill="none" opacity=".8">
        <path d="M60 40 L520 80" /><path d="M420 180 L460 380" /><path d="M760 60 L1150 110" />
        <path d="M720 330 L1180 300" /><path d="M80 210 L560 240" /><path d="M1040 140 L1000 380" />
      </g>
      <g fill="#dde6da">
        <rect x="350" y="140" width="120" height="70" rx="10" /><rect x="720" y="140" width="150" height="90" rx="10" />
        <rect x="40" y="200" width="110" height="80" rx="10" /><rect x="980" y="200" width="160" height="70" rx="10" />
      </g>
      <g transform="translate(660 230)">
        <circle r="54" fill="#8fa68e" opacity=".18"><animate attributeName="r" values="30;60;30" dur="3.2s" repeatCount="indefinite" /><animate attributeName="opacity" values=".35;0;.35" dur="3.2s" repeatCount="indefinite" /></circle>
        <path d="M0 22 C -26 -6, -22 -40, 0 -40 S 26 -6, 0 22Z" fill="#0f1d31" />
        <circle cy="-18" r="8" fill="#8fa68e" />
      </g>
    </svg>
  );
}
