import { motion } from 'framer-motion';

const experienceData = [
    {
        role: "Software Developer Engineer",
        company: "STPLGlobal",
        duration: "July 2024 – Present",
        tasks: [
            "Engineered a real-time web dashboard with React.js, Node.js, and WebSockets to visualize live telemetry from multiple 3D printers.",
            "Integrated secure, multi-user access with role-based permissions, syncing sensor data to a MySQL database for persistent storage.",
            "Developed modular charting features to display historical data trends.",
            "Launched and managed the application on AWS EC2, utilizing debugging and testing tools to ensure high performance."
        ]
    },
    {
        role: "Software Developer Intern",
        company: "STPLGlobal",
        duration: "Jan 2024 – Jun 2024",
        tasks: [
            "Collaborated on a Project Planning System (PPS) using React.js, Node.js, and MySQL to streamline project management for over 50 employees across 5 departments.",
            "Developed responsive UI components and architected a secure JWT-based authentication system with bcrypt.js encryption."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
            <div className="relative border-l-2 border-cyan-400 ml-6 md:ml-0 md:pl-0">
                {experienceData.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-12 ml-8"
                    >
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-gray-900"></span>
                        <h3 className="text-2xl font-semibold text-cyan-400">{exp.role}</h3>
                        <p className="text-lg font-medium text-gray-300">{exp.company}</p>
                        <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {exp.tasks.map((task, i) => (
                                <li key={i}>{task}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;