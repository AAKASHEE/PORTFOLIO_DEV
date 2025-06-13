// import React from 'react';
import { aboutContent } from "../../data/about";

const AboutHeader = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
      <p className="text-orange-400 italic mb-2">"{aboutContent.quote}"</p>
      <p className="text-gray-400">- Said by everyone inside you</p>
    </div>
  );
};

export default AboutHeader;
