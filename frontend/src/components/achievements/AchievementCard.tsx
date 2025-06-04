import React from 'react';
import { Achievement } from '../../types';

const AchievementCard: React.FC<Achievement> = ({ title, organization, date, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block transform transition duration-300 hover:scale-105"
  >
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-colors shadow hover:shadow-orange-400/30">
      <h3 className="text-xl font-semibold text-orange-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-2">{organization}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  </a>
);

export default AchievementCard;
