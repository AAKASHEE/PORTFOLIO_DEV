import { useState } from "react";
import { heroContent } from "../data/hero";
import Button from "./common/Button";
import ContactModal from "./contact/ContactModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">{heroContent.title}</h1>
          <p className="text-xl text-gray-300 mb-8">
            {heroContent.description}
          </p>
          <div className="flex space-x-4">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-gray-900 text-white transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
