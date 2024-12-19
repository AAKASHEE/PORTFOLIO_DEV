import React, { useState } from "react";
import Modal from "../common/Modal";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import StickyNote from "./StickyNotes";
import StickyNoteModal from "./StickyNoteModal";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/yourusername",
    color: "hover:text-pink-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/yourusername",
    color: "hover:text-blue-400",
  },
  {
    name: "Mail",
    icon: Mail,
    href: "mailto:youremail@example.com",
    color: "hover:text-red-400",
  },
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isStickyNoteModalOpen, setIsStickyNoteModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let's Connect!</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {socialLinks.map(({ name, icon: Icon, href, color }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-4 bg-gray-700 rounded-lg transition-all duration-300 ${color} hover:scale-105`}
              >
                <Icon className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium">{name}</span>
              </a>
            ))}
            <StickyNote onClick={() => setIsStickyNoteModalOpen(true)} />
          </div>
        </div>
      </Modal>

      <StickyNoteModal
        isOpen={isStickyNoteModalOpen}
        onClose={() => setIsStickyNoteModalOpen(false)}
      />
    </>
  );
};

export default ContactModal;
