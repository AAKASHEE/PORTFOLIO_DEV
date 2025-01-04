import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import NotesList from "./components/NotesList";
import StickyNoteModal from "./components/contact/StickyNoteModal";

const StickyNoteApp: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/notes");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setNotes(data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleNoteSubmit = async (
    name: string,
    email: string,
    message: string
  ) => {
    try {
      const response = await fetch("http://localhost:5001/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Note saved:", data);
      fetchNotes(); // Refresh the list of notes
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error submitting note:", err);
    }
  };

  return 
};

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
        <StickyNoteApp />
      </main>
    </div>
  );
}

export default App;
