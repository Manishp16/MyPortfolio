import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form data
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        try {
            // Create email content
            const subject = encodeURIComponent(`Portfolio Contact - Message from ${formData.name}`);
            const body = encodeURIComponent(
                `Hi Manish,\n\n` +
                `You received a new message from your portfolio website:\n\n` +
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n\n` +
                `Message:\n${formData.message}\n\n` +
                `---\n` +
                `Sent from your portfolio contact form\n` +
                `Please reply to: ${formData.email}`
            );
            
            // Method 1: Try to open email client
            const mailtoLink = `mailto:manishprajapat421@gmail.com?subject=${subject}&body=${body}`;
            
            // For better UX, we'll show success immediately and open email
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            
            // Open email client
            window.open(mailtoLink, '_blank');
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
            
        } catch (error) {
            alert('Unable to open email client. Please email me directly at manishprajapat421@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative z-10" style={{ zIndex: 30 }}>
            <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto mb-12"
            >
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                        <div className="text-cyan-400 text-2xl mb-2">📧</div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a href="mailto:manishprajapat421@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                            manishprajapat421@gmail.com
                        </a>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                        <div className="text-cyan-400 text-2xl mb-2">💼</div>
                        <h3 className="font-semibold mb-2">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/manishp161845/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                            Connect with me
                        </a>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                        <div className="text-cyan-400 text-2xl mb-2">🐙</div>
                        <h3 className="font-semibold mb-2">GitHub</h3>
                        <a href="https://github.com/Manishp16" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                            View my code
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl mx-auto relative z-20"
                style={{ zIndex: 50 }}
            >
                {submitted ? (
                    <div className="text-center bg-green-500/20 text-green-300 p-6 rounded-lg border border-green-500/30">
                        <div className="text-4xl mb-4">✅</div>
                        <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                        <p className="text-green-200">Your email client should have opened with the message.</p>
                        <p className="text-green-200 text-sm mt-2">If it didn't open, please email me directly at:</p>
                        <a href="mailto:manishprajapat421@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                            manishprajapat421@gmail.com
                        </a>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/80 p-8 rounded-xl border border-gray-700">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete="name"
                                style={{ 
                                    zIndex: 100, 
                                    position: 'relative',
                                    backgroundColor: '#1f2937',
                                    color: '#ffffff',
                                    border: '2px solid #374151'
                                }}
                                className="w-full rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete="email"
                                style={{ 
                                    zIndex: 100, 
                                    position: 'relative',
                                    backgroundColor: '#1f2937',
                                    color: '#ffffff',
                                    border: '2px solid #374151'
                                }}
                                className="w-full rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ 
                                    zIndex: 100, 
                                    position: 'relative',
                                    backgroundColor: '#1f2937',
                                    color: '#ffffff',
                                    border: '2px solid #374151'
                                }}
                                className="w-full rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-vertical transition-all duration-200"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{ zIndex: 100, position: 'relative' }}
                                className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-10 rounded-lg transition duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-cyan-500/25"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </motion.div>
        </section>
    );
};

export default Contact;