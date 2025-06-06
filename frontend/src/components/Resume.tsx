import { FileText } from "lucide-react";

const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1bTrb2CPRtiDGWR4ZAny3cHDghqIRXlph/view"; // Replace with your actual Google Drive link

  return (
    <section id="resume" className="bg-gray-900 py-20 relative">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-white mb-12">Resume</h2>

        <div className="max-w-3xl mx-auto">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative"
          >
            {/* Resume Preview Card */}
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300 transform group-hover:scale-105">
              {/* Resume Preview Image */}
              <div className="relative aspect-[1/1.4] w-full">
                <img
                  src="./img/preview_resume.png"
                  alt="Resume Preview"
                  className="w-full h-full object-cover"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <FileText className="w-16 h-16 text-white mb-4" />
                  <span className="text-white text-xl font-semibold">
                    View Full Resume
                  </span>
                </div>
              </div>

              {/* Download Button */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
                <div className="flex justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-300 flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Blur Effect - Sides Only */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-y-0 left-0 w-60 bg-gray-400"
                style={{ filter: "blur(40px)" }}
              ></div>
              <div
                className="absolute inset-y-0 right-0 w-60 bg-gray-400"
                style={{ filter: "blur(40px)" }}
              ></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
