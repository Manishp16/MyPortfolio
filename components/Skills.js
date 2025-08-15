import { motion } from 'framer-motion';

const skills = {
    "Frontend": ["React.js", "Next.js", "Redux", "JavaScript", "HTML", "CSS"],
    "Backend": ["Node.js", "Express.js", "Python"],
    "Databases & Storage": ["MongoDB", "MySQL", "PostgreSQL", "DynamoDB"],
    "Cloud Services": ["AWS EC2", "AWS S3", "AWS Lambda", "AWS Cognito", "AWS IAM"],
    "Version Control": ["Git", "GitHub"],
    "Coursework": ["OOPs", "DSA", "OS", "CN", "DBMS"]
};

const SkillCard = ({ title, skills }) => (
    <motion.div 
        whileHover={{ y: -10 }}
        className="bg-gray-800 p-6 rounded-lg"
    >
        <h3 className="text-xl font-bold text-cyan-400 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, skillList], index) => (
                    <SkillCard key={index} title={category} skills={skillList} />
                ))}
            </div>
        </section>
    );
};

export default Skills;