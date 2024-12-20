import React from "react";
import { Skill } from "../../types";
import { getSkillIcon } from "../../utils/iconMap";

const SkillCard: React.FC<Skill> = ({ name }) => {
  const iconUrl = getSkillIcon(name);

  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:bg-gray-700">
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={name}
          className="w-30 h-30 mb-4 object-contain"
        />
      ) : (
        <div className="w-24 h-24 mb-4 flex items-center justify-center text-gray-400">
          {" "}
          <span className="text-3xl font-bold">{name.charAt(0)}</span> 
        </div>
      )}
      <p className="text-gray-300 text-center text-lg font-medium">{name}</p> 
    </div>
  );
};

export default SkillCard;
