import React from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aakashee/",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: Github,
    href: "https://github.com/AAKASHEE",
    hoverColor: "hover:text-gray-400",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/aakaas.he",
    hoverColor: "hover:text-pink-400",
  },
  {
    icon: Twitter,
    href: "https://x.com/AAKASHEEX",
    hoverColor: "hover:text-blue-400",
  },
  {
    text: "GeeksForGeeks", 
    href: "https://www.geeksforgeeks.org/user/aakashee/",
    hoverColor: "hover:text-green-400",
  },
  {
    text: "LeetCode", 
    href: "https://leetcode.com/u/AAKASHEE/",
    hoverColor: "hover:text-yellow-400",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${link.hoverColor}`}
        >
          {link.icon ? <link.icon className="w-6 h-6" /> : link.text} 
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;