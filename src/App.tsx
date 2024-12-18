import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from './components/Resume'; // Add this import
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
// import Experience from "./components/Experience";
// import OpenSource from "./components/OpenSource";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Achievements />
        {/* <Experience />
        <OpenSource /> */}
      </main>
    </div>
  );
}

export default App;
