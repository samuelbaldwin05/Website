import { Project } from "@/types/projects";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
  {
    id: "quoridor",
    name: "Quoridor",
    image: "/projects/Quoridor.png",
    description: "A strategy board game implemented with custom AI logic.",
    github: "https://github.com/samuelbaldwin05/quoridor",
    website: "https://quoridor.sambaldwin.dev"
  },
  {
    id: "minigolf",
    name: "Mini Golf",
    image: "/projects/Minigolf.png",
    description: "A creative 2D mini golf game with custom maps and mechanics.",
    github: "https://github.com/samuelbaldwin05/minigolf",
    website: "https://minigolf.sambaldwin.dev"
  },
  {
    id: "nextite",
    name: "NExT Web Portal",
    image: "/projects/Nexite.png",
    description: "Professional consulting website for NExT Consulting",
    website: "https://nunext.dev"
  },

];

export default function Projects() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
}
