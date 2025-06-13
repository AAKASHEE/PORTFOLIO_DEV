const projectTags: string[] = [
  // 'Devops', 'RUST', 'Full Stack Web Development', 'Extension Development',
  // 'Typescript', 'Svelte', 'NextJs', 'Firebase', 'Machine Learning',
  // 'Java SpringBoot', 'MERN', 'Python Flask'
];

const ProjectTags = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {projectTags.map((tag) => (
        <button
          key={tag}
          className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ProjectTags;