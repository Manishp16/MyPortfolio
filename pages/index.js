import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}