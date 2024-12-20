import React from 'react';
import SectionTitle from './common/SectionTitle';
import AchievementCard from './achievements/AchievementCard';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Achievements" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;