import type { StaticImageData } from "next/image";
import {
  Activity,
  Microscope,
  ScanLine,
  ShieldCheck,
  MonitorSmartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import imgImplantologia from "@/assets/images/protesi.webp";
import imgOrtodonzia from "@/assets/images/ortodonzia.webp";
import imgIgiene from "@/assets/images/igiene.webp";
import imgEstetica from "@/assets/images/estetica.webp";
import imgEndodonzia from "@/assets/images/endodonzia.webp";
import imgProtesi from "@/assets/images/modello.webp";

/* ------------------------------------------------------------------
   Dati del sito. Studio immaginario a scopo DIMOSTRATIVO.
   Tutti i campi tra [parentesi quadre] vanno sostituiti con dati reali
   prima della messa online.
------------------------------------------------------------------- */

export const site = {
  name: "Studio Dentistico Aurora",
  shortName: "Aurora",
  city: "Napoli",
  url: "https://www.studiodentisticoaurora-demo.it",
  /** true = sito demo, non indicizzabile. Impostare a false per il sito reale. */
  isDemo: true,
  description:
    "Studio Dentistico Aurora a Napoli: implantologia, ortodonzia, igiene, estetica dentale, endodonzia e protesi. Un approccio attento, tecnologie digitali e percorsi di cura spiegati con chiarezza.",
  address: "[Indirizzo dimostrativo], Napoli",
  phoneLabel: "081 000 0000",
  email: "info@studioaurora-demo.it",
  legal: {
    direttoreSanitario: "[Nome e cognome, titoli — da inserire]",
    piva: "[P.IVA da inserire]",
    albo: "[Iscrizione Albo Odontoiatri di Napoli n. — da inserire]",
    autorizzazione: "[Estremi autorizzazione sanitaria — da inserire]",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/lo-studio", label: "Lo Studio" },
  { href: "/trattamenti", label: "Trattamenti" },
  { href: "/team", label: "Il Team" },
  { href: "/contatti", label: "Contatti" },
] as const;

export const hours = [
  { day: "Lunedì – Venerdì", time: "9:00 – 13:00 · 15:00 – 19:30" },
  { day: "Sabato", time: "9:00 – 13:00" },
  { day: "Domenica", time: "Chiuso" },
] as const;

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  body: string[];
  points: string[];
  image: StaticImageData;
  alt: string;
};

export const treatments: Treatment[] = [
  {
    slug: "implantologia",
    title: "Implantologia",
    short:
      "Sostituzione di uno o più denti mancanti con radici artificiali in titanio e corone su misura.",
    body: [
      "L'implantologia permette di sostituire denti mancanti inserendo nell'osso una piccola vite in titanio, che funge da radice artificiale e sostiene la futura corona.",
      "Ogni percorso parte da una valutazione clinica e radiografica: solo dopo aver verificato la quantità e la qualità dell'osso viene proposto un piano di trattamento, con tempi e fasi discussi insieme al paziente.",
    ],
    points: [
      "Valutazione clinica e diagnostica per immagini",
      "Pianificazione digitale dell'intervento",
      "Controlli periodici nel tempo",
    ],
    image: imgImplantologia,
    alt: "Modello di impianto dentale in titanio con corona, tenuto da una mano guantata",
  },
  {
    slug: "ortodonzia",
    title: "Ortodonzia",
    short:
      "Correzione della posizione dei denti e dei rapporti tra le arcate, per bambini, ragazzi e adulti.",
    body: [
      "L'ortodonzia si occupa di riallineare i denti e migliorare il rapporto tra le arcate, con benefici per la funzione masticatoria, l'igiene e l'armonia del sorriso.",
      "Secondo le necessità cliniche si valutano apparecchi fissi tradizionali o mascherine trasparenti rimovibili. La scelta viene sempre motivata e condivisa.",
    ],
    points: [
      "Prima valutazione ortodontica",
      "Apparecchi fissi o ortodonzia trasparente",
      "Monitoraggio dei progressi a ogni fase",
    ],
    image: imgOrtodonzia,
    alt: "Mani che mostrano una mascherina ortodontica trasparente e la relativa custodia",
  },
  {
    slug: "igiene-dentale",
    title: "Igiene dentale",
    short:
      "Sedute di igiene professionale e prevenzione, con indicazioni personalizzate per la cura quotidiana.",
    body: [
      "L'igiene professionale rimuove placca e tartaro dove lo spazzolino non arriva ed è la base della prevenzione di carie e malattie gengivali.",
      "Durante la seduta l'igienista dentale fornisce indicazioni pratiche sulla cura a casa e concorda con il paziente la frequenza dei richiami.",
    ],
    points: [
      "Detartrasi e lucidatura",
      "Istruzioni di igiene domiciliare",
      "Programma di richiami periodici",
    ],
    image: imgIgiene,
    alt: "Specchietto odontoiatrico e sonda appoggiati su una superficie chiara",
  },
  {
    slug: "estetica-dentale",
    title: "Estetica dentale",
    short:
      "Trattamenti conservativi per migliorare forma, colore e proporzioni dei denti.",
    body: [
      "L'estetica dentale comprende interventi come lo sbiancamento professionale, le ricostruzioni in composito e le faccette, sempre nel rispetto dei tessuti sani.",
      "Ogni proposta parte da un'analisi del sorriso e da un confronto sulle aspettative: l'obiettivo è un risultato naturale e coerente con il volto.",
    ],
    points: [
      "Analisi del sorriso",
      "Sbiancamento professionale",
      "Ricostruzioni e faccette",
    ],
    image: imgEstetica,
    alt: "Dettaglio di un sorriso con denti chiari e labbra naturali",
  },
  {
    slug: "endodonzia",
    title: "Endodonzia",
    short:
      "Cura dei canali radicolari per conservare il dente naturale quando la polpa è infiammata o infetta.",
    body: [
      "La terapia endodontica, comunemente detta devitalizzazione, consiste nella pulizia, sagomatura e sigillatura dei canali interni del dente.",
      "Si esegue in anestesia locale quando indicata e con l'ausilio di sistemi di ingrandimento, per lavorare con precisione su strutture molto piccole.",
    ],
    points: [
      "Diagnosi radiografica",
      "Trattamento con sistemi di ingrandimento",
      "Ricostruzione del dente trattato",
    ],
    image: imgEndodonzia,
    alt: "Mano con guanto che tiene strumenti odontoiatrici di precisione",
  },
  {
    slug: "protesi-dentarie",
    title: "Protesi dentarie",
    short:
      "Corone, ponti e protesi fisse o mobili per ripristinare funzione masticatoria ed estetica.",
    body: [
      "La protesi dentaria ripristina denti compromessi o mancanti con corone, ponti o protesi rimovibili, realizzate su misura in collaborazione con il laboratorio odontotecnico.",
      "Le impronte digitali e la progettazione al computer aiutano a ottenere manufatti precisi e un'occlusione equilibrata.",
    ],
    points: [
      "Corone e ponti",
      "Protesi fisse e mobili",
      "Impronte digitali",
    ],
    image: imgProtesi,
    alt: "Mani di un professionista che mostrano un modello di protesi dentaria",
  },
];

export type Technology = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const technologies: Technology[] = [
  {
    title: "Scanner intraorale",
    text: "Impronte digitali al posto dei materiali tradizionali: più rapide e più confortevoli.",
    icon: ScanLine,
  },
  {
    title: "Radiologia digitale",
    text: "Immagini immediate e consultabili a schermo insieme al paziente.",
    icon: MonitorSmartphone,
  },
  {
    title: "Sistemi di ingrandimento",
    text: "Ottiche dedicate per lavorare con precisione in endodonzia e conservativa.",
    icon: Microscope,
  },
  {
    title: "Progettazione digitale",
    text: "Pianificazione al computer di impianti, protesi e trattamenti estetici.",
    icon: Sparkles,
  },
  {
    title: "Sterilizzazione tracciata",
    text: "Protocolli documentati per ogni strumento, dal ciclo di lavaggio al confezionamento.",
    icon: ShieldCheck,
  },
  {
    title: "Monitoraggio clinico",
    text: "Cartella digitale per seguire nel tempo ogni fase del percorso di cura.",
    icon: Activity,
  },
];

export type TeamMember = {
  role: string;
  area: string;
  text: string;
  skills: string[];
};

/* Ruoli dimostrativi: nessun nominativo reale. */
export const team: TeamMember[] = [
  {
    role: "Odontoiatra",
    area: "Direzione sanitaria",
    text: "Coordina i piani di cura e il confronto tra le diverse aree cliniche dello studio.",
    skills: ["Diagnosi", "Piani di trattamento", "Coordinamento clinico"],
  },
  {
    role: "Odontoiatra",
    area: "Area chirurgica e implantare",
    text: "Si occupa di chirurgia orale e implantologia, dalla pianificazione ai controlli.",
    skills: ["Chirurgia orale", "Implantologia", "Pianificazione digitale"],
  },
  {
    role: "Odontoiatra",
    area: "Area ortodontica",
    text: "Segue i percorsi ortodontici di bambini, ragazzi e adulti.",
    skills: ["Ortodonzia fissa", "Ortodonzia trasparente", "Prevenzione"],
  },
  {
    role: "Odontoiatra",
    area: "Conservativa ed endodonzia",
    text: "Cura il recupero dei denti naturali con tecniche conservative ed endodontiche.",
    skills: ["Endodonzia", "Conservativa", "Estetica"],
  },
  {
    role: "Igienista dentale",
    area: "Prevenzione",
    text: "Esegue le sedute di igiene professionale e accompagna i pazienti nella cura quotidiana.",
    skills: ["Igiene professionale", "Educazione", "Richiami"],
  },
  {
    role: "Accoglienza",
    area: "Segreteria e assistenza",
    text: "Gestisce appuntamenti, informazioni e documentazione con attenzione e riservatezza.",
    skills: ["Appuntamenti", "Informazioni", "Privacy"],
  },
];

export const faqs = [
  {
    q: "Come posso prenotare una prima visita?",
    a: "Puoi chiamare la segreteria negli orari di apertura oppure compilare il modulo nella pagina Contatti: verrai ricontattato per concordare data e orario. In questa demo il modulo non invia dati.",
  },
  {
    q: "Cosa comprende la prima visita?",
    a: "Un colloquio sulla storia clinica, l'esame del cavo orale e, se necessario, gli esami radiografici. Al termine ricevi le informazioni sulle possibili soluzioni e, se richiesto, un preventivo scritto.",
  },
  {
    q: "Ricevo un preventivo dettagliato prima di iniziare?",
    a: "Sì. Ogni piano di cura viene illustrato per fasi, con tempi indicativi e un preventivo scritto. Nessun trattamento inizia senza il tuo consenso informato.",
  },
  {
    q: "Le cure sono fastidiose?",
    a: "Quando indicato si utilizza l'anestesia locale e ogni passaggio viene spiegato prima di procedere. Puoi sempre segnalare qualsiasi disagio durante la seduta.",
  },
  {
    q: "Ogni quanto è consigliata l'igiene professionale?",
    a: "La frequenza dipende dalla situazione di ciascuno: viene stabilita insieme all'igienista dentale dopo la valutazione.",
  },
  {
    q: "Come vengono trattati i miei dati personali?",
    a: "I dati sono trattati nel rispetto del Regolamento UE 2016/679 (GDPR) e utilizzati solo per finalità di cura e organizzative. L'informativa completa va inserita prima della pubblicazione del sito reale.",
  },
] as const;
