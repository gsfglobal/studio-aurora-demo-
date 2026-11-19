# Studio Dentistico Aurora — sito dimostrativo

Demo didattica di un sito premium per uno studio dentistico **immaginario** a Napoli.
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Lucide Icons.

## Avvio in locale

```bash
npm install
npm run dev        # http://localhost:3000
```

Versione di produzione: `npm run build && npm start`.
Versione statica (cartella `out/`): `STATIC_EXPORT=1 npm run build`.

## Pagine

| Percorso | Contenuto |
|---|---|
| `/` | Hero, introduzione, trattamenti, tecnologie, team, FAQ, CTA |
| `/lo-studio` | Filosofia, ambienti, tecnologie, approccio al paziente, galleria |
| `/trattamenti` | 6 schede con testo, immagine e CTA + indice rapido |
| `/team` | Team dimostrativo con immagini segnaposto |
| `/contatti` | Modulo demo, orari, WhatsApp demo, mappa segnaposto |

## Struttura

- `src/lib/site.ts` — tutti i dati (testi, orari, trattamenti, team, FAQ, dati legali)
- `src/components/` — Header (menu mobile), Footer, Reveal (animazioni), ContactForm, WhatsAppButton, sezioni riutilizzabili
- `src/app/globals.css` — design system (palette, font, animazioni, reduced-motion)
- `src/assets/images/` — fotografie ottimizzate in WebP

## Parti ancora dimostrative (da sostituire prima della messa online)

- **Modulo contatti**: valida i campi ma non invia né salva nulla. Va collegato a un servizio reale (endpoint server, email transazionale o CRM) con informativa privacy.
- **WhatsApp**: mostra un avviso, nessun numero collegato. Sostituire con `https://wa.me/<numero>`.
- **Mappa**: illustrazione SVG. Inserire la mappa reale solo dopo consenso ai cookie di terze parti.
- **Dati in `site.ts` tra [parentesi quadre]**: indirizzo, telefono, direttore sanitario, P.IVA, iscrizione Albo, autorizzazione sanitaria.
- **Team**: nessun nominativo, foto segnaposto. Usare solo titoli e specializzazioni reali.
- **Privacy e cookie policy**: da redigere.
- **Indicizzazione disattivata** (`isDemo: true` in `site.ts` e `public/robots.txt`).
- **Testi clinici**: da far approvare al direttore sanitario (L. 145/2018 c. 525: niente sconti, promesse di risultato o superlativi).

## Fotografie

Immagini da [Unsplash](https://unsplash.com) (Unsplash License: uso gratuito anche commerciale, nessuna attribuzione obbligatoria). Nessun paziente identificabile. Nel sito reale vanno sostituite con le foto dello studio.
