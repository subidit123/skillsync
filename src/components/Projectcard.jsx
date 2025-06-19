import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
    >
      <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-white">
        {tech.map((t, i) => (
          <span key={i} className="bg-indigo-600 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;