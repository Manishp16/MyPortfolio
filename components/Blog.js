import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: "Building Real-Time Dashboards with WebSockets",
        summary: "A brief look into the architecture and key considerations when using Node.js and React to handle live data streams. (Full article coming soon)."
    },
    {
        title: "Securing Your Application with JWT",
        summary: "A step-by-step guide on implementing a secure, token-based authentication system in a Node.js environment. (Full article coming soon)."
    },
    {
        title: "My Journey to AWS Certification",
        summary: "Sharing the study plan, resources, and tips that helped me pass the AWS Certified Cloud Practitioner exam. (Full article coming soon)."
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-gray-800 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">{post.title}</h3>
                        <p className="text-gray-400">{post.summary}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Blog;