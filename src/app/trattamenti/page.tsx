import type { Metadata } from "next";
import Image from "next/image";
import { Container, ButtonLink, DemoNotice } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, FinalCta, CheckList } from "@/components/sections";
import { treatments } from "@/lib/site";

import heroImg from "@/assets/images/radiografie.webp";

export const metadata: Metadata = {
  title: "Trattamenti",
  description:
    "Implantologia, ortodonzia, igiene dentale, estetica dentale, endodonzia e protesi dentarie presso Studio Dentistico Aurora a Napoli.",
  alternates: { canonical: "/trattamenti" },
};

export default function TrattamentiPage() {
  return (
    <>
      <PageHero
        eyebrow="Trattamenti"
        title={<>Sei aree di cura, <em className="text-sage-deep italic">un solo percorso</em>.</>}
        intro="Schede informative sui principali trattamenti. Ogni indicazione clinica viene definita solo dopo una visita e una valutazione personalizzata."
        image={heroImg}
        alt="Professionista che analizza radiografie dentali su un pannello luminoso"
      />

      {/* Indice rapido */}
      <nav aria-label="Indice dei trattamenti" className="sticky top-18 z-30 border-y border-line bg-white/90 backdrop-blur-xl lg:top-20">
        <Container>
          <ul className="-mx-1 flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
            {treatments.map((t) => (
              <li key={t.slug} className="shrink-0">
                <a href={`#${t.slug}`} className="inline-block rounded-full border border-line px-4 py-2 text-sm text-night-muted transition-colors duration-300 hover:border-night hover:bg-night hover:text-white">
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="py-20 lg:py-28">
        <Container className="space-y-24 lg:space-y-36">
          {treatments.map((t, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={t.slug}
                id={t.slug}
                aria-labelledby={`${t.slug}-title`}
                className="grid scroll-mt-40 items-center gap-10 lg:grid-cols-12 lg:gap-20"
              >
                <Reveal className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-ivory">
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-(--ease-soft) group-hover:scale-[1.04]"
                    />
                  </div>
                </Reveal>
                <Reveal delay={120} className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")} — Trattamento</p>
                  <h2 id={`${t.slug}-title`} className="mt-5 text-4xl text-night sm:text-5xl">{t.title}</h2>
                  <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                    {t.body.map((p) => <p key={p}>{p}</p>)}
                  </div>
                  <div className="mt-8"><CheckList items={t.points} /></div>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <ButtonLink href="/contatti#prenota">Richiedi informazioni</ButtonLink>
                  </div>
                </Reveal>
              </article>
            );
          })}

          <DemoNotice className="mx-auto max-w-3xl">
            I testi hanno finalità informativa e dimostrativa. Prima della pubblicazione vanno rivisti e approvati dal direttore sanitario dello studio, nel rispetto della normativa sulla comunicazione sanitaria (L. 145/2018, c. 525).
          </DemoNotice>
        </Container>
      </div>

      <div className="pt-3 sm:pt-5"><FinalCta /></div>
    </>
  );
}
