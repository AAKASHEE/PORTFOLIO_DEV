import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './projects/ProjectCard';
import ProjectTags from './projects/ProjectTags';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
        <ProjectTags />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;