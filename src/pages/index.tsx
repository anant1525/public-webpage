import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <Stats />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
