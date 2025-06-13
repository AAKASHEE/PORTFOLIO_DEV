// import React from "react";
import { aboutContent } from "../../data/about";

const PersonalInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-orange-400">
        {aboutContent.title}
      </h3>
      <p className="text-gray-400 italic">{aboutContent.subtitle}</p>

      <div className="grid grid-cols-2 gap-4 text-gray-300">
        <div>
          <p className="font-semibold">Degree:</p>
          <p>{aboutContent.degree}</p>
        </div>
        <div>
          <p className="font-semibold">Specialisation:</p>
          <p>{aboutContent.specialisation}</p>
        </div>
        <div>
          <p className="font-semibold">City:</p>
          <p>{aboutContent.city}</p>
        </div>
        <div>
          <p className="font-semibold">Email:</p>
          <p className="text-blue-400">{aboutContent.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
