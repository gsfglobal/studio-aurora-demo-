import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Plus, UserRound, Check } from "lucide-react";
import { Container, ButtonLink, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { faqs, technologies, type Treatment, type TeamMember } from "@/lib/site";

/* ---------------- Hero delle pagine interne ---------------- */

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image: StaticImageData;
  alt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid items-end gap-12 pt-14 pb-16 lg:grid-cols-12 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-6">
          <p className="eyebrow animate-fade-up">{eyebrow}</p>
          <h1 className="mt-6 animate-fade-up text-5xl leading-[1.04] text-night [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:240ms]">
            {intro}
          </p>
        </div>
        <div className="relative lg:col-span-6">
          <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-night/10">
            <Image
              src={image}
              alt={alt}
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="animate-slow-zoom object-cover"
            />
          </div>
          <div aria-hidden className="absolute -bottom-6 -left-6 z-0 hidden size-32 rounded-full bg-sage-light lg:block" />
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Card trattamento (panoramica) ---------------- */

export function TreatmentTile({ t, index }: { t: Treatment; index: number }) {
  return (
    <Reveal delay={(index % 3) * 90}>
      <Link
        href={`/trattamenti#${t.slug}`}
        className="group block h-full overflow-hidden rounded-3xl border border-line bg-white transition-all duration-500 ease-(--ease-soft) hover:-translate-y-1 hover:border-sage/60 hover:shadow-2xl hover:shadow-night/8"
      >
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={t.image}
            alt={t.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1.2s] ease-(--ease-soft) group-hover:scale-[1.05]"
          />
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wider text-night backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-start justify-between gap-4 p-7">
          <div>
            <h3 className="text-2xl text-night">{t.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t.short}</p>
          </div>
          <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-night transition-all duration-300 group-hover:border-night group-hover:bg-night group-hover:text-white">
            <ArrowUpRight className="size-4" aria-hidden />
            <span className="sr-only">Scopri {t.title}</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------- Griglia tecnologie ---------------- */

export function TechGrid({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech, i) => {
        const Icon = tech.icon;
        return (
          <li key={tech.title} className={dark ? "bg-night" : "bg-white"}>
            <Reveal delay={(i % 3) * 80} className="group h-full p-8 transition-colors duration-500 hover:bg-night-soft lg:p-10">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-sage/15 text-sage transition-transform duration-500 group-hover:-translate-y-1">
                <Icon className="size-6" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="mt-6 text-xl text-white">{tech.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{tech.text}</p>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------------- Card team con immagine segnaposto ---------------- */

export function TeamCard({ m, index }: { m: TeamMember; index: number }) {
  const tones = ["from-sage-light to-ivory", "from-ivory-deep to-sage-mist", "from-sage-mist to-ivory-deep"];
  return (
    <Reveal delay={(index % 3) * 90} as="article" className="group">
      <div
        className={`relative flex aspect-[4/5] items-end overflow-hidden rounded-3xl bg-linear-to-br ${tones[index % 3]}`}
      >
        {/* Silhouette segnaposto: sostituire con foto reale autorizzata */}
        <svg viewBox="0 0 200 250" className="absolute inset-x-0 bottom-0 mx-auto w-[78%] text-night/12 transition-transform duration-700 ease-(--ease-soft) group-hover:scale-[1.03]" aria-hidden>
          <circle cx="100" cy="82" r="42" fill="currentColor" />
          <path d="M18 250c0-55 37-92 82-92s82 37 82 92z" fill="currentColor" />
        </svg>
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-semibold tracking-wider text-night-muted uppercase backdrop-blur">
          <UserRound className="size-3.5" aria-hidden /> Foto segnaposto
        </span>
      </div>
      <div className="pt-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-sage-deep uppercase">{m.area}</p>
        <h3 className="mt-2 text-2xl text-night">{m.role}</h3>
        <p className="mt-3 leading-relaxed text-muted">{m.text}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Competenze">
          {m.skills.map((s) => (
            <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-night-muted">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ---------------- FAQ (accessibile senza JavaScript) ---------------- */

export function Faq() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => (
        <Reveal key={f.q} delay={i * 40}>
          <details className="group py-2">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left">
              <span className="font-serif text-xl text-night transition-colors group-hover:text-sage-deep sm:text-2xl">
                {f.q}
              </span>
              <span className="faq-icon inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-night transition-transform duration-500 ease-(--ease-soft)">
                <Plus className="size-4" aria-hidden />
              </span>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-muted">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- CTA finale ---------------- */

export function FinalCta() {
  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-night px-6 py-20 text-center sm:py-28">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-sage/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(143,166,142,0.25),transparent_55%)]" />
        <Reveal className="relative mx-auto max-w-2xl">
          <p className="eyebrow text-sage-light!">Prima visita</p>
          <h2 className="mt-6 text-4xl leading-tight text-white sm:text-6xl">
            Parliamo del tuo sorriso, con calma.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Una visita per conoscerci, valutare la situazione e ricevere informazioni chiare sulle possibili soluzioni.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contatti#prenota" variant="light">
              Prenota una visita
            </ButtonLink>
            <ButtonLink href="/trattamenti" variant="ghost">
              Scopri i trattamenti
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Lista con spunte ---------------- */

export function CheckList({ items, light = false }: { items: readonly string[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className={`flex items-start gap-3 ${light ? "text-white/80" : "text-night-muted"}`}>
          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-sage-light text-sage-deep">
            <Check className="size-3" strokeWidth={3} aria-hidden />
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}

export { SectionHeading };
