import Image from 'next/image';
import Link from 'next/link';

const Hero = () => (
  <section className="text-center">
    <Image
      src="/Anant-pic.png"
      alt="Profile Picture"
      width={150}
      height={150}
      className="rounded-full mx-auto"
      priority
    />
    <h1 className="text-4xl font-bold mt-4">Anant Pandey</h1>
    <p className="text-xl mt-2">Lead Architect | Fault | Inventory | Monitoring | SOA | Microservices | APIs | Cloud</p>
    <div className="mt-6">
      <Link href="/about" className="bg-blue-500 text-white px-6 py-3 rounded-full mr-4">
        About Me
      </Link>
      <a href="/resume.pdf" className="bg-gray-700 text-white px-6 py-3 rounded-full" download>
        Download Resume
      </a>
    </div>
  </section>
);

export default Hero;
