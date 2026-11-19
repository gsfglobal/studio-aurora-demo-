type LogoProps = { light?: boolean };

/** Logotipo dimostrativo: monogramma ad arco ("aurora") + wordmark. */
export function Logo({ light = false }: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        className="size-9 shrink-0"
        aria-hidden
        focusable="false"
      >
        <circle cx="20" cy="20" r="19.25" fill="none" stroke={light ? "#dde6da" : "#0f1d31"} strokeWidth="1.5" />
        <path d="M9 26a11 11 0 0 1 22 0" fill="none" stroke="#8fa68e" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 26a6 6 0 0 1 12 0" fill="none" stroke={light ? "#ffffff" : "#0f1d31"} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="26" r="1.6" fill="#8fa68e" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.35rem] tracking-tight ${light ? "text-white" : "text-night"}`}>
          Aurora
        </span>
        <span className={`mt-1 text-[0.6rem] font-semibold tracking-[0.28em] uppercase ${light ? "text-sage-light" : "text-sage-deep"}`}>
          Studio Dentistico
        </span>
      </span>
    </span>
  );
}
