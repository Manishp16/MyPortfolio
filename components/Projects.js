import { motion } from 'framer-motion';

const projects = [
    {
        title: "Real-Time Equipment Monitoring System",
        description: "Developed a full-stack application to visualize equipment metrics from manufacturing machines with real-time updates. It features data polling and alert mechanisms to track sensor inputs, reducing manual checks and improving maintenance response time. The UI is clean, mobile-friendly, and optimized for low-latency data display.",
        technologies: ["Node.js", "React.js", "MySQL", "WebSockets"]
    },
    {
        title: "Internal Project Management Tool",
        description: "Created a comprehensive internal tool for managing projects, tasks, and team discussions. It includes drag-and-drop task assignments, deadlines, and team tagging to streamline workflows for over 50 users. Focused heavily on backend and database optimization to reduce API response times by 60%.",
        technologies: ["React.js", "Express.js", "MySQL", "JWT"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-gray-800 p-6 rounded-lg flex flex-col"
                    >
                        <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;