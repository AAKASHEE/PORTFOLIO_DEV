import {
  Braces,
  FileCode2,
  Terminal,
  Database,
  Globe,
  Server,
  Code2,
  Cpu,
  Layers,
  Box,
} from "lucide-react";

// Map skill names to their respective icon URLs or Lucide icons
export const getSkillIcon = (skillName: string): string | null => {
  // Custom icon URLs
  const customIcons: Record<string, string> = {
    TypeScript:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    JavaScript:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    React:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    "Next.js":
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",

    Python:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    Java: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    C: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    PostgreSQL:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    SQLite:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg",

    Nodejs:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",

    HTML5:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    CSS3: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",

    Git: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",

    Github:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",

    GithubActions:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg",

    MySQL:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",

    MongoDB:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",

    Cpp: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    Tailwindcss:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",

    Golang:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",

    Electron:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
  };

  return customIcons[skillName] || null;
};

// Map categories to Lucide icons
import { LucideIcon } from "lucide-react";

export const getCategoryIcon = (category: string): LucideIcon => {
  const categoryIcons: Record<string, LucideIcon> = {
    Frontend: Globe,
    Backend: Server,
    Languages: Braces,
    Databases: Database,
    DevOps: Terminal,
    Mobile: FileCode2,
    Cloud: Layers,
    Tools: Box,
    Other: Code2,
    Systems: Cpu,
  };

  return categoryIcons[category] || Code2;
};
