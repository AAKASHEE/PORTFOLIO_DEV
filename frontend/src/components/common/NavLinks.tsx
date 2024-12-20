import React from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  // { href: "#experience", label: "Experience" },
  // { href: "#opensource", label: "OpenSource" },
];

const NavLinks = () => {
  return (
    <div className="flex space-x-6">
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="hover:text-blue-400 transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
