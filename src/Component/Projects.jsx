import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-8 text-center text-4xl pt-24 pb-24"
      >
        Projects
      </motion.h1>
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 ml-4 md:ml-24 flex flex-col md:flex-row items-center md:items-start"
          >
            {/* image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mb-4 md:mb-0 md:mr-8 w-full md:w-1/3 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-[220px] h-[150px] object-cover shadow-md"
              />
            </motion.div>

            {/* content */}
            <div className="w-full md:max-w-xl">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <ul className="mb-4">
                {project.description.map((el, idx) => (
                  <li key={idx} className="text-neutral-400 text-[13px]">
                    {el}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* buttons */}
              <div className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-800 px-3 py-2 rounded-md text-sm text-white hover:scale-105 transition"
                >
                  View
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-800 px-3 py-2 rounded-md text-sm text-white hover:scale-105 transition"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
