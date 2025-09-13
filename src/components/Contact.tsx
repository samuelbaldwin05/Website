import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      {/* <h2 className="text-3xl font-bold mb-6">Contact Me</h2> */}
      <p className="mb-4">
        Email me or check out my GitHub and LinkedIn!
      </p>
      <div className="flex justify-center gap-8">
        <a
          href="mailto:sambaldwin2005@gmail.com"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/samuelbaldwin05"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/baldwinsamuel"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
