import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-8">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-[#D7261E] mb-4"
            >
                Contact Us
            </motion.h1>
            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-gray-700 text-lg text-center max-w-2xl mb-10"
            >
                Have a question, feedback, or craving for our delicious food?
                We’d love to hear from you! Fill out the form or reach us through the details below.
            </motion.p>
            {/* Contact Info */}
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full mb-12">
                {[
                    { icon: <FaPhoneAlt />, title: "Phone", info: "+1 234 567 890" },
                    { icon: <FaEnvelope />, title: "Email", info: "support@foodio.com" },
                    { icon: <FaMapMarkerAlt />, title: "Address", info: "123 Food Street, Flavor Town" }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center"
                    >
                        <div className="text-3xl text-[#D7261E] mb-3">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.info}</p>
                    </motion.div>
                ))}
            </div>
            {/* Contact Form */}
            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full"
            >
                <div className="grid gap-6 md:grid-cols-2">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="border border-gray-300 rounded-lg p-3 focus:border-[#D7261E] outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="border border-gray-300 rounded-lg p-3 focus:border-[#D7261E] outline-none"
                    />
                </div>
                <textarea
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="border border-gray-300 rounded-lg p-3 mt-6 w-full focus:border-[#D7261E] outline-none"
                ></textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-[#D7261E] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                    Send Message
                </motion.button>
            </motion.form>

        </div>
    );
};
export default Contact;