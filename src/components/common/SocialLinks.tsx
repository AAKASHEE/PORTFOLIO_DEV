import React from "react";
import { Github, Linkedin, Instagram, Twitter, Ghost, GiftIcon } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: Github,
    href: "https://github.com",
    hoverColor: "hover:text-gray-400",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    hoverColor: "hover:text-pink-400",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: Ghost,
    href: "https://www.geeksforgeeks.org/user/aakashee/",
    hoverColor: "hover:text-green-400",
  },
  {
    icon: GiftIcon,
    href: "https://leetcode.com/u/AAKASHEE/",
    hoverColor: "hover:text-yellow-400",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, hoverColor }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${hoverColor}`}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
