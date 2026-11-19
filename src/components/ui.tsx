import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-night text-white hover:bg-night-soft hover:shadow-xl hover:shadow-night/15",
  light: "bg-white text-night hover:bg-ivory hover:shadow-xl hover:shadow-black/10",
  outline: "border border-night/20 text-night hover:border-night hover:bg-night hover:text-white",
  ghost: "border border-white/40 text-white hover:bg-white hover:text-night",
} as const;

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-all duration-300 ease-(--ease-soft) hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  as: H = "h2",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className={`eyebrow ${light ? "text-sage-light!" : ""}`}>{eyebrow}</p>
      <H
        className={`mt-5 text-4xl leading-[1.08] sm:text-5xl ${light ? "text-white" : "text-night"}`}
      >
        {title}
      </H>
      {intro && (
        <p className={`mt-6 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{intro}</p>
      )}
    </Reveal>
  );
}

/** Avviso visibile che il sito è una demo. */
export function DemoNotice({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      role="note"
      className={`flex gap-3 rounded-2xl border border-sage/40 bg-sage-mist px-5 py-4 text-sm leading-relaxed text-night-muted ${className}`}
    >
      <span aria-hidden className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-sage-deep text-[0.7rem] font-bold text-white">
        i
      </span>
      <div>{children}</div>
    </div>
  );
}
