import React from 'react';
import { Experience } from '../../types';

const ExperienceCard: React.FC<Experience> = ({ role, company, duration, description, skills }) => (
  <div className="bg-gray-800 rounded-lg p-6 mb-8">
    <h3 className="text-xl font-semibold text-white mb-2">{role}</h3>
    <p className="text-blue-400 mb-2">{company}</p>
    <p className="text-gray-400 mb-4">{duration}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceCard;