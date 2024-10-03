import React from "react";
import Project from "./project";

const projects = [
  {
    title: "Project 1",
    image: "project1.jpg",
    description: "Project description",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
  },
  {
    title: "Project 2",
    image: "project2.jpg",
    description: "Project description",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
