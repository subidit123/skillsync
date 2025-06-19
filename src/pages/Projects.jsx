import ProjectCard from '../components/Projectcard';

const mockProjects = [
  {
    title: 'Portfolio Website',
    description: 'Modern responsive portfolio using React and Tailwind.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'SkillSync Tool',
    description: 'Interactive resume analyzer frontend project.',
    tech: ['React', 'HTML', 'CSS']
  },
  {
    title: 'E-commerce UI',
    description: 'Product listing and filtering using only frontend tech.',
    tech: ['React', 'Tailwind CSS']
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {mockProjects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
