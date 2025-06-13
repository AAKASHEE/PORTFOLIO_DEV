import React from 'react';
import { aboutContent } from '../../data/about';

const AboutDescription = () => {
  return (
    <div className="space-y-4 text-gray-300">
      {aboutContent.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default AboutDescription;