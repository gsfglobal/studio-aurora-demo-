import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, FileText, HeartHandshake, ArrowRight } from "lucide-react";
import { Container, ButtonLink, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { TreatmentTile, TechGrid, TeamCard, Faq, FinalCta } from "@/components/sections";
import { treatments, team } from "@/lib/site";

import heroImg from "@/assets/images/ambiente-luce.webp";
import roomImg from "@/assets/images/hero.webp";
import scanImg from "@/assets/images/scansione.webp";

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative -mt-18 overflow-hidden bg-ivory pt-18 lg:-mt-20 lg:pt-20">
        <div aria-hidden className="pointer-events-none absolute top-1/3 -left-40 size-[32rem] rounded-full bg-sage-light/60 blur-3xl" />
        <Container className="relative grid items-center gap-14 py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="eyebrow animate-fade-up">Studio dentistico · Napoli</p>
            <h1 className="mt-7 animate-fade-up text-[2.9rem] leading-[1.02] text-night [animation-delay:120ms] sm:text-7xl xl:text-[5.4rem]">
              Il tuo sorriso,
              <br />
              <em className="font-light text-sage-deep italic">curato</em> con attenzione.
            </h1>
            <p className="mt-8 max-w-lg animate-fade-up text-lg leading-relaxed text-muted [animation-delay:240ms] sm:text-xl">
              Uno studio luminoso nel cuore di Napoli, dove ogni percorso di cura viene spiegato con chiarezza e costruito sulle tue esigenze.
            </p>
            <div className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:360ms] sm:flex-row">
              <ButtonLink href="/contatti#prenota">Prenota una visita</ButtonLink>
              <ButtonLink href="/trattamenti" variant="outline">
                I trattamenti
              </ButtonLink>
            </div>
            <ul className="mt-14 grid animate-fade-up grid-cols-3 gap-4 border-t border-line pt-8 [animation-delay:480ms]">
              {[
                { icon: CalendarCheck, label: "Prima visita su appuntamento" },
                { icon: FileText, label: "Preventivi scritti e chiari" },
                { icon: HeartHandshake, label: "Ascolto e trasparenza" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col gap-3 text-sm leading-snug text-night-muted">
                  <Icon className="size-5 text-sage-deep" strokeWidth={1.6} aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-6 lg:pl-8 xl:pl-14">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-2xl shadow-night/15 lg:max-w-none">
              <Image
                src={heroImg}
                alt="Sala operativa luminosa con poltrona odontoiatrica bianca e attrezzature moderne"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="animate-slow-zoom object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-0 animate-fade-up rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl shadow-night/10 backdrop-blur [animation-delay:700ms] sm:left-4 lg:-left-2 xl:left-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-sage-deep uppercase">Orari</p>
              <p className="mt-1.5 font-serif text-lg text-night">Lun – Sab, su appuntamento</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= INTRODUZIONE ================= */}
      <section className="py-24 lg:py-36">
        <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
              <Image
                src={roomImg}
                alt="Studio odontoiatrico ordinato con postazione di lavoro e ampie finestre"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Lo studio"
              title={<>Una cura che parte <em className="text-sage-deep italic">dall&apos;ascolto</em>.</>}
              intro="Studio Dentistico Aurora nasce dall'idea che andare dal dentista possa essere un'esperienza serena. Ambienti curati, tempi dedicati e un dialogo costante accompagnano ogni fase del percorso."
            />
            <Reveal delay={150} className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-serif text-xl text-night">Spiegare prima di fare</p>
                <p className="mt-2 leading-relaxed text-muted">Ogni proposta di cura è illustrata con immagini, tempi indicativi e alternative possibili.</p>
              </div>
              <div>
                <p className="font-serif text-xl text-night">Un unico riferimento</p>
                <p className="mt-2 leading-relaxed text-muted">Un&apos;équipe che lavora in modo coordinato, dalla prevenzione alle cure più complesse.</p>
              </div>
            </Reveal>
            <Reveal delay={250} className="mt-10">
              <Link href="/lo-studio" className="group inline-flex items-center gap-2 font-medium text-night">
                <span className="link-underline">Scopri lo studio</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================= TRATTAMENTI ================= */}
      <section className="bg-ivory py-24 lg:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Trattamenti"
              title="Le aree di cura"
              intro="Dalla prevenzione alla riabilitazione: percorsi completi, seguiti all'interno dello stesso studio."
            />
            <Reveal delay={120}>
              <ButtonLink href="/trattamenti" variant="outline">Tutti i trattamenti</ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <TreatmentTile key={t.slug} t={t} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ================= TECNOLOGIE ================= */}
      <section className="relative overflow-hidden bg-night py-24 text-white lg:py-36">
        <div aria-hidden className="pointer-events-none absolute -top-32 right-0 size-[40rem] rounded-full bg-sage/10 blur-3xl" />
        <Container className="relative">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                light
                eyebrow="Tecnologie"
                title={<>Strumenti digitali, al servizio della <em className="text-sage italic">precisione</em>.</>}
                intro="Le tecnologie aiutano a vedere meglio, pianificare con accuratezza e spiegare ogni passaggio in modo comprensibile."
              />
            </div>
            <Reveal delay={120} className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
                <Image
                  src={scanImg}
                  alt="Immagine diagnostica dentale tridimensionale consultata su tablet"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="mt-16">
            <TechGrid dark />
          </div>
        </Container>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 lg:py-36">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Il team"
              title="Persone, prima che professionisti"
              intro="Un'équipe multidisciplinare che si confronta su ogni caso. Profili dimostrativi con immagini segnaposto."
            />
            <Reveal delay={120}>
              <ButtonLink href="/team" variant="outline">Conosci il team</ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((m, i) => (
              <TeamCard key={m.area} m={m} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-ivory py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Domande frequenti"
              title="Prima di venirci a trovare"
              intro="Le risposte alle domande che riceviamo più spesso in segreteria."
            />
          </div>
          <div className="lg:col-span-8">
            <Faq />
          </div>
        </Container>
      </section>

      <div className="bg-ivory pt-3 sm:pt-5">
        <FinalCta />
      </div>
    </>
  );
}
