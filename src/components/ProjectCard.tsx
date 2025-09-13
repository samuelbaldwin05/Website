"use client";

import { useState } from "react";
import type { Project } from "@/types/projects";
import Image from "next/image";
import { Github, Globe, X } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <div
        className="
          group rounded-lg border border-white/10 bg-gray-800/60
          shadow-sm overflow-hidden backdrop-blur-sm
          transition-transform duration-200 ease-out
          hover:-translate-y-1 hover:shadow-lg
          will-change-transform cursor-pointer
        "
        onClick={() => setModalOpen(true)}
      >
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-100">{project.name}</h3>
          {project.organization && (
            <p className="text-sm text-gray-400">{project.organization}</p>
          )}

          <div className="mt-2 flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-gray-800 rounded-lg border border-white/10 backdrop-blur-sm max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end p-4 pb-0">
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-4 pt-0">
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-100 mb-2">
                {project.name}
              </h3>
              
              {project.organization && (
                <p className="text-sm text-gray-400 mb-3">{project.organization}</p>
              )}

              <p className="text-gray-200 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="text-sm">View Code</span>
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="text-sm">Visit Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}