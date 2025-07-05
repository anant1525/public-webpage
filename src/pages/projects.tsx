import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
