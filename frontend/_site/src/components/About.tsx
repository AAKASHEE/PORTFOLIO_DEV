import React from "react";
import { aboutContent } from "../data/about";
import PhotoGallery from "./about/PhotoGallery";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-400 italic mb-4">
                "{aboutContent.quote}"
              </p>
              <p className="text-gray-400">- Said by everyone inside you</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-2">
                {aboutContent.title}
              </h3>
              <p className="text-gray-400 italic">{aboutContent.subtitle}</p>
            </div>

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

            <div className="space-y-4 text-gray-300">
              {aboutContent.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column - Photo Gallery */}
          <div>
            <PhotoGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
