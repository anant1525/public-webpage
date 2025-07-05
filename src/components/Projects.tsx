import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'H-Cloud Integration',
    description: 'Horizontal Cloud Integration and Monitoring Platform This project is the integration of Telco Packet Core domain integration with MSDP, with extension of new capabilities like Topology Correlation, VNF-VNF relationships, MITO (MS IT Platform integration) ',
    techStack: ['Fault Management', 'Inventory', 'Data Lake', 'Automations', 'Zabbix', 'SOA', 'ITSM'],
    imageUrl: 'https://placehold.co/500x300',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    techStack: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://placehold.co/500x300',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three.',
    techStack: ['Svelte', 'Firebase', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://placehold.co/500x300',
  },
];

const Projects = () => (
  <section id="projects" className="my-10">
    <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
