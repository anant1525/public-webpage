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
    <Image src={imageUrl} alt={title} width={500} height={300} className="rounded-lg" />
    <h3 className="text-xl font-bold mt-4">{title}</h3>
    <p className="mt-2">{description}</p>
    <div className="mt-4">
      {techStack.map((tech) => (
        <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-4">
      <a href={githubUrl} className="text-blue-500 mr-4" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={liveUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </div>
  </div>
);

export default ProjectCard;
