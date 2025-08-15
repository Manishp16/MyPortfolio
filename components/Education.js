import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-800/50 rounded-lg my-10">
            <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto text-center"
            >
                <h3 className="text-2xl font-semibold text-cyan-400">B.E. in Computer Engineering</h3>
                <p className="text-lg font-medium text-gray-300 mt-2">Sarvajanik College of Engineering and Technology</p>
                <p className="text-md text-gray-400 mt-1">Aug 2020 – June 2024</p>
                <p className="text-lg font-bold text-white mt-3">CGPA: 8.88/10</p>
            </motion.div>
        </section>
    );
};

export default Education;