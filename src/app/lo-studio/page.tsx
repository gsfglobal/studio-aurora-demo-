import type { Metadata } from "next";
import Image from "next/image";
import { Armchair, Sun, Leaf, MessagesSquare, ClipboardList, CalendarClock } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, TechGrid, FinalCta, CheckList } from "@/components/sections";

import heroImg from "@/assets/images/ambiente-arte.webp";
import luceImg from "@/assets/images/ambiente-luce.webp";
import attesaImg from "@/assets/images/attesa.webp";
import roomImg from "@/assets/images/hero.webp";
import radioImg from "@/assets/images/radiografie.webp";
import equipeImg from "@/assets/images/equipe.webp";
import scanImg from "@/assets/images/scansione.webp";
import strumentiImg from "@/assets/images/igiene.webp";

export const metadata: Metadata = {
  title: "Lo Studio",
  description:
    "Filosofia, ambienti e tecnologie di Studio Dentistico Aurora a Napoli. Un approccio al paziente basato su ascolto, chiarezza e percorsi condivisi.",
  alternates: { canonical: "/lo-studio" },
};

const spaces = [
  { icon: Sun, title: "Luce naturale", text: "Sale operative luminose, pensate per mettere a proprio agio fin dal primo ingresso." },
  { icon: Armchair, title: "Accoglienza riservata", text: "Una sala d'attesa tranquilla e spazi dedicati ai colloqui con il paziente." },
  { icon: Leaf, title: "Ambienti curati", text: "Materiali naturali, toni chiari e ordine: la cura passa anche dagli spazi." },
];

const approach = [
  { icon: MessagesSquare, step: "01", title: "Ascolto", text: "Il primo incontro è dedicato a conoscerti: storia clinica, esigenze e domande." },
  { icon: ClipboardList, step: "02", title: "Piano condiviso", text: "Ti presentiamo le possibili soluzioni con tempi indicativi e preventivo scritto." },
  { icon: CalendarClock, step: "03", title: "Cura e controlli", text: "Ogni fase viene programmata e seguita nel tempo con controlli periodici." },
];

const gallery = [
  { src: luceImg, alt: "Poltrona odontoiatrica bianca accanto a una finestra luminosa", className: "row-span-2" },
  { src: roomImg, alt: "Sala operativa con postazione completa e mobili chiari", className: "" },
  { src: attesaImg, alt: "Sala d'attesa minimale con pianta e pannello decorativo", className: "" },
  { src: radioImg, alt: "Professionista che consulta radiografie su un diafanoscopio", className: "" },
  { src: strumentiImg, alt: "Strumenti odontoiatrici in acciaio su superficie chiara", className: "" },
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Lo studio"
        title={<>Uno spazio pensato per <em className="text-sage-deep italic">stare bene</em>.</>}
        intro="Filosofia, ambienti e strumenti di uno studio che mette al centro la persona: chiarezza nelle informazioni, rispetto dei tempi e attenzione ai dettagli."
        image={heroImg}
        alt="Sala operativa con poltrona odontoiatrica e un dipinto colorato alla parete"
      />

      {/* Filosofia */}
      <section className="py-24 lg:py-36">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Filosofia" title="Il tempo giusto per ogni persona" />
          </div>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            <p className="font-serif text-2xl leading-snug text-night sm:text-3xl">
              Crediamo in un&apos;odontoiatria che informa, coinvolge e accompagna.
            </p>
            <p>
              Ogni paziente ha una storia, delle aspettative e, a volte, qualche timore. Per questo dedichiamo il tempo necessario al dialogo: spiegare cosa si vede, perché si propone un trattamento e quali alternative esistono.
            </p>
            <p>
              La prevenzione resta il punto di partenza. Quando servono cure più complesse, l&apos;équipe valuta insieme il caso per proporre un piano coerente e sostenibile nel tempo.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Ambienti */}
      <section className="bg-ivory py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Ambienti" title="Luce, ordine e riservatezza" intro="Spazi progettati per essere funzionali, accoglienti e rispettosi della privacy." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {spaces.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90} className="rounded-3xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-night/5">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-sage-mist text-sage-deep">
                  <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl text-night">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tecnologie */}
      <section className="relative overflow-hidden bg-night py-24 lg:py-32">
        <Container className="relative">
          <div className="grid items-end gap-12 lg:grid-cols-2">
            <SectionHeading
              light
              eyebrow="Tecnologie disponibili"
              title="Diagnosi e pianificazione digitali"
              intro="Dotazioni descritte a titolo dimostrativo: nel sito reale vanno indicate solo le tecnologie effettivamente presenti, senza marchi commerciali."
            />
            <Reveal delay={120}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
                <Image src={scanImg} alt="Scansione dentale tridimensionale visualizzata su tablet" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="mt-16"><TechGrid dark /></div>
        </Container>
      </section>

      {/* Approccio al paziente */}
      <section className="py-24 lg:py-36">
        <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Approccio al paziente" title="Tre passi, nessuna sorpresa" />
            <ol className="mt-12 space-y-4">
              {approach.map(({ icon: Icon, step, title, text }, i) => (
                <Reveal as="li" key={step} delay={i * 100} className="group flex gap-6 rounded-3xl border border-line p-6 transition-colors duration-500 hover:border-sage/50 hover:bg-sage-mist/50 sm:p-8">
                  <span className="font-serif text-4xl text-sage">{step}</span>
                  <div>
                    <h3 className="flex items-center gap-3 text-2xl text-night">
                      {title}
                      <Icon className="size-5 text-sage-deep" strokeWidth={1.5} aria-hidden />
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[2rem]">
              <Image src={equipeImg} alt="Due professionisti con dispositivi di protezione durante una seduta odontoiatrica" fill placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="mt-8">
              <CheckList items={["Consenso informato a ogni fase", "Preventivo scritto prima di iniziare", "Controlli programmati nel tempo"]} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Galleria */}
      <section className="bg-ivory py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Galleria" title="Uno sguardo agli spazi" intro="Fotografie illustrative da archivio libero (Unsplash): nel sito reale vanno sostituite con le foto dello studio." />
          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.alt} delay={i * 70} className={`group relative overflow-hidden rounded-3xl ${g.className}`}>
                <Image src={g.src} alt={g.alt} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover transition-transform duration-[1.2s] ease-(--ease-soft) group-hover:scale-[1.06]" />
                <div aria-hidden className="absolute inset-0 bg-linear-to-t from-night/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-ivory pt-3 sm:pt-5"><FinalCta /></div>
    </>
  );
}
