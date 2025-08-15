import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaCode, FaUsers } from 'react-icons/fa';

const achievements = [
    { icon: <FaCertificate size={30} className="text-cyan-400" />, text: "AWS Certified Cloud Practitioner" },
    { icon: <FaAward size={30} className="text-cyan-400" />, text: "Ranked Top 3% in GATE 2024 among 150,000+ candidates" },
    { icon: <FaCode size={30} className="text-cyan-400" />, text: "Consistent LeetCode performer with 250+ problems solved" },
    { icon: <FaUsers size={30} className="text-cyan-400" />, text: "Technical Lead, Coding Club SCET, increasing member participation" }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Achievements & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((ach, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center bg-gray-800 p-6 rounded-lg"
                    >
                        <div className="mr-4">{ach.icon}</div>
                        <p className="text-lg text-gray-300">{ach.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;