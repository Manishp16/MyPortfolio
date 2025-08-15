import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Manish Prajapati</h1>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </button>
          ))}
          <a href="https://github.com/Manishp16" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/manishp161845/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </button>
          ))}
           <div className="flex space-x-4 mt-2">
              <a href="https://github.com/Manishp16" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/manishp161845/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
                <FaLinkedin size={24} />
              </a>
           </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;