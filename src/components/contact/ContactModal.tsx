import React from "react";
import Modal from "../common/Modal.tsx";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  StickyNote,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Aakashee",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/aakashee",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/aakaas.he",
    color: "hover:text-pink-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/AAKASHEEX",
    color: "hover:text-blue-400",
  },
  {
    name: "Mail",
    icon: Mail,
    href: "https://aakashpatra253@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "StickyNote",
    icon: StickyNote,
    href: "https://mail.com/aakashpatra253@gmail.com",
    color: "hover:text-yellow-400",
  },
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Connect!</h2>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
