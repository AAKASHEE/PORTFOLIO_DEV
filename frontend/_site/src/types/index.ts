export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}
export interface Photo {
  id: number;
  url: string;
  link: string;
  caption: string;
}
export interface Achievement {
  title:string;
  organization:string;
  date:string;
}
export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}



// ... rest of the existing types