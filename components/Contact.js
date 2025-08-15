import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API endpoint.
        // For this example, we'll just simulate a successful submission.
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // Reset form after 5 seconds
    };

    return (
        <section id="contact" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl mx-auto"
            >
                {submitted ? (
                    <div className="text-center bg-green-500/20 text-green-300 p-4 rounded-lg">
                        <h3 className="text-xl font-bold">Thank you for your message!</h3>
                        <p>I'll get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input type="text" id="name" name="name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input type="email" id="email" name="email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea id="message" name="message" rows="5" required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </motion.div>
        </section>
    );
};

export default Contact;