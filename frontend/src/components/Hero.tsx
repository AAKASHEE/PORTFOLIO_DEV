import { useState, useEffect } from "react";
import { heroContent } from "../data/hero";
import Button from "./common/Button";
import ContactModal from "./contact/ContactModal.tsx";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59); // December 31st of the current year
      const difference = endOfYear.getTime() - now.getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    // Initial calculation
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

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
          {/* Time left for the present year */}
          <div className="mt-8 text-3xl text-gray-400">
            Time left until the end of {new Date().getFullYear()}:{" "}
            <span className="font-semibold text-white">{timeLeft}
            </span>
            {/* Align this text to the right */}
            <p className="text-right text-2xl mt-4 italic text-gray-300">
              There is only one IDOL of you, you 10 years from now
            </p>
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