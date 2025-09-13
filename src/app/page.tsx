import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Projects />
      <Contact />
    </Container>
  );
}
