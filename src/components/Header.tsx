"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Chiude il menu mobile quando cambia pagina
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blocca lo scroll e gestisce Esc quando il menu è aperto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-(--ease-soft) ${
        scrolled || open
          ? "border-b border-line/80 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <Link
          href="/"
          className="relative z-10"
          aria-label={`${site.name} — torna alla home`}
        >
          <Logo />
        </Link>

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`link-underline py-1 text-[0.92rem] tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "text-night bg-size-[100%_1px]"
                      : "text-muted hover:text-night"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contatti#prenota"
            className="group hidden items-center gap-2 rounded-full bg-night px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-night-soft hover:shadow-lg hover:shadow-night/15 sm:inline-flex"
          >
            Prenota una visita
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            className="relative z-10 inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-night transition-colors hover:bg-ivory lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>
    </header>

      {/* Menu mobile: fuori dall'header, perché il backdrop-filter dell'header
          creerebbe un nuovo contesto per gli elementi fixed */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-18 bottom-0 z-[45] overflow-y-auto bg-white transition-all duration-500 ease-(--ease-soft) lg:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Navigazione mobile" className="flex h-full flex-col px-6 pt-8 pb-10">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="border-b border-line"
                style={{
                  transition: "opacity .6s, transform .6s",
                  transitionDelay: open ? `${80 + i * 50}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(10px)",
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-5 font-serif text-3xl ${
                    isActive(item.href) ? "text-sage-deep" : "text-night"
                  }`}
                >
                  {item.label}
                  <ArrowRight className="size-5 text-sage" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-4">
            <Link
              href="/contatti#prenota"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-night px-6 py-4 text-base font-medium text-white"
            >
              Prenota una visita <ArrowRight className="size-4" aria-hidden />
            </Link>
            <p className="text-center text-sm text-muted">
              {site.address} · Tel. {site.phoneLabel} (demo)
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
