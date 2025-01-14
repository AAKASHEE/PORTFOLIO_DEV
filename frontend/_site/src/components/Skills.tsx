import React from 'react';
import { skills } from '../data/skills';
import SkillCard from './skills/SkillCard';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;