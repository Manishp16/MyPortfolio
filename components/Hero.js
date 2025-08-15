import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import Three.js component to avoid SSR issues
const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
});



const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Animation variants for better control
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <motion.section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <ThreeBackground />
            <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold mb-4 relative text-white drop-shadow-2xl"
                style={{ zIndex: 20, textShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
            >
                Manish Prajapati
            </motion.h1>
            <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-6 relative drop-shadow-xl"
                style={{ zIndex: 20, textShadow: '0 0 15px rgba(0, 255, 255, 0.8)' }}
            >
                MERN Stack Developer
            </motion.h2>
            <motion.p
                variants={itemVariants}
                className="max-w-3xl text-gray-200 text-lg md:text-xl mb-8 relative backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-cyan-500/20"
                style={{ zIndex: 20 }}
            >
                A passionate and experienced MERN stack developer with 1.5 years of experience in building and deploying scalable, full-stack web applications. Specializing in creating real-time dashboards and efficient internal tools using React.js, Node.js, MongoDB, and various AWS services.
            </motion.p>
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 relative"
                style={{ zIndex: 20 }}
            >
                <motion.button
                    onClick={() => scrollToSection('projects')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-500/80 hover:bg-cyan-600/90 text-white font-bold py-3 px-6 rounded-lg transition duration-300 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-500/25"
                >
                    View My Work
                </motion.button>
                <motion.button
                    onClick={() => scrollToSection('contact')}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-700/80 hover:bg-gray-600/90 text-white font-bold py-3 px-6 rounded-lg transition duration-300 backdrop-blur-sm border border-gray-500/30 shadow-lg"
                >
                    Get In Touch
                </motion.button>
            </motion.div>
        </motion.section>
    );
};

export default Hero;