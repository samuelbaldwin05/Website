import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <main className="flex flex-col items-center gap-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          Welcome to <span className="text-gray-700">sambaldwin.dev</span>
        </h1>

        <p className="text-center text-gray-600 max-w-prose">
          Quick links to my projects. More pages coming soon.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="https://quoridor.sambaldwin.dev">Quoridor</ButtonLink>
          <ButtonLink href="https://minigolf.sambaldwin.dev">Mini Golf</ButtonLink>
        </div>
      </main>
    </Container>
  );
}
