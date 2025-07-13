import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Fault Management Platform',
    description: 'Its a COTS product build on the top of IBM Tivoli Netcool suite of products,  used for collection of fault status transactions from the network management systems and then correlating the faults to find the actual root cause fault, then sending the actional faults for ticket creation and if required for the work order creation so as actual field work can be done on the faults, faults are also processed using the automation rules, running set of automations for the complex correlations, then creating the synthetic faults, which are then further refined as required for addional information from other faults or from the inventory systems, post then these were sent for Ticketing, post required backoffice actions the life cycle of the faults are then completed by clearing the fault(s).',
    techStack: ['omnibus','impact','dash','microservices', 'Java', 'Spring Boot', 'MariaDB','Spring Hibernate', 'singleton', 'Atomic'],
    imageUrl: 'https://placehold.co/500x300',
  },
  {
    title: 'Automation Platform Enhancement',
    description: 'This is a custom automation platform built and refined over a decade, known for its stability and popularity as a runbook-based automation solution developed using the Java technology stack. \n\r The project’s primary objective was to understand the technical implementation and build a capable local team with deep expertise in the platform.I began by gaining hands-on experience as a developer to understand the tool in depth. I then conducted interviews to onboard and structure the team. While the initial phase presented significant challenges, over time, I was able to establish clear workflows and lead the team effectively. Under my leadership, the new team successfully delivered complex feature enhancements, executed a major cloud migration from IBM Cloud to Google Cloud Platform (GCP), and consistently deployed new functionalities. These efforts significantly improved the platform’s stability, scalability, and performance.',
    techStack: ['Java', 'Spring Boot', 'MariaDB', 'Java Swing', 'Spring cloud gateway', 'Netflix Eureka', 'CORBA', 'Spring Hibernate', 'micro kernal', 'singleton', 'Atomic txn'],
    imageUrl: 'https://placehold.co/500x300',
  },
  {
    title: 'H-Cloud Integration',
    description: 'Horizontal Cloud Integration and Monitoring Platform This project is the integration of Telco Packet Core domain integration with MSDP, with extension of new capabilities like Topology Correlation, VNF-VNF relationships, MITO (MS IT Platform integration) ',
    techStack: ['Fault Management', 'Inventory', 'Data Lake', 'Automations', 'Zabbix', 'SOA', 'ITSM'],
    imageUrl: 'https://placehold.co/500x300',
  },
  {
    title: 'Inventory Management Platform',
    description: 'This was a traditional monolithic implementation with app server (web server) under high availability along with database, used for storing the inventory data, important feature due to which this is extensively in use is the abaility to create and control the data constraints, relationships between the data bindings, and if the data is coming then with relation criteria data bindings will be created automatically. the tool is the single source of truth for the topology data and network inventory information for all the underlying systems of fault, ticketing, work orders, performance, machine learning platforms.',
    techStack: ['weblogic', 'oracle', 'java', 'angular', 'javascript'],
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
