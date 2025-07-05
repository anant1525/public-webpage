import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubUrl, liveUrl, imageUrl }) => (
  <div className="border rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-xl font-bold mt-4">{title}</h3>
    <p className="mt-2">{description}</p>
    <div className="mt-4">
      {techStack.map((tech) => (
        <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
