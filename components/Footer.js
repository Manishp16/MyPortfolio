import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-6">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                     <a href="https://github.com/manishprajapat421" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/manish-prajapati-1a9348213/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                        <FaLinkedin size={28} />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Manish Prajapati. All rights reserved.</p>
                <p className="mt-2">manishprajapat421@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;