import type { Metadata } from "next";
import { GraduationCap, Users, MessagesSquare, ShieldCheck } from "lucide-react";
import { Container, SectionHeading, DemoNotice } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, TeamCard, FinalCta } from "@/components/sections";
import { team } from "@/lib/site";

import heroImg from "@/assets/images/equipe.webp";

export const metadata: Metadata = {
  title: "Il Team",
  description:
    "L'équipe di Studio Dentistico Aurora a Napoli: odontoiatri, igienista dentale e personale di accoglienza che lavorano in modo coordinato.",
  alternates: { canonical: "/team" },
};

const values = [
  { icon: Users, title: "Lavoro d'équipe", text: "I casi più articolati vengono discussi insieme, per un piano di cura coerente." },
  { icon: GraduationCap, title: "Aggiornamento", text: "Formazione continua su tecniche, materiali e protocolli clinici." },
  { icon: MessagesSquare, title: "Comunicazione chiara", text: "Linguaggio semplice, tempo per le domande, nessuna decisione affrettata." },
  { icon: ShieldCheck, title: "Sicurezza", text: "Protocolli di sterilizzazione e di gestione documentati e verificati." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Il team"
        title={<>Competenze diverse, <em className="text-sage-deep italic">un solo obiettivo</em>.</>}
        intro="Un'équipe multidisciplinare che segue il paziente dalla prevenzione alle cure più complesse."
        image={heroImg}
        alt="Due professionisti con dispositivi di protezione durante una seduta odontoiatrica"
      />

      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Le persone" title="L'équipe dello studio" intro="Ruoli e competenze illustrativi." />
          <DemoNotice className="mt-8 max-w-2xl">
            Team dimostrativo: nessun nominativo reale. Nel sito definitivo vanno inseriti nomi, titoli di studio, eventuali specializzazioni ufficiali e iscrizione all&apos;Albo, insieme a fotografie autorizzate.
          </DemoNotice>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <TeamCard key={m.area} m={m} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Approccio professionale" title="Come lavoriamo" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="rounded-3xl bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-night/5">
                <Icon className="size-7 text-sage-deep" strokeWidth={1.4} aria-hidden />
                <h3 className="mt-6 text-xl text-night">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-ivory pt-3 sm:pt-5"><FinalCta /></div>
    </>
  );
}
