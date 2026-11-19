import { Container, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
        <p className="eyebrow">Errore 404</p>
        <h1 className="mt-6 text-5xl text-night sm:text-6xl">Pagina non trovata</h1>
        <p className="mt-5 max-w-md text-lg text-muted">La pagina che cerchi non esiste o è stata spostata.</p>
        <ButtonLink href="/" className="mt-10">Torna alla home</ButtonLink>
      </Container>
    </section>
  );
}
