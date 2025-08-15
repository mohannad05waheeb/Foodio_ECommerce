import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-8">      
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-[#D7261E] mb-6"
      >
        About Us
      </motion.h1>
      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl text-center text-gray-700 text-lg leading-relaxed mb-10"
      >
        At <span className="font-bold">FOODIO</span>, we believe great food brings people together.  
        That’s why we proudly serve freshly baked <span className="text-red-500 font-semibold">pizza</span> with rich, cheesy goodness,  
        juicy <span className="text-yellow-600 font-semibold">burgers</span> stacked to perfection,  
        and refreshing <span className="text-blue-500 font-semibold">drinks</span> to complete your meal.  
        Every bite is made with love, passion, and the finest ingredients — because you deserve nothing less.
      </motion.p>

      {/* Values Section */}
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
        {[
          { title: "Quality", desc: "Fresh, premium ingredients in every pizza, burger, and drink we serve.", icon: "🍕" },
          { title: "Speed", desc: "Fast service without compromising on taste or freshness.", icon: "⚡" },
          { title: "Innovation", desc: "Unique recipes and flavors you won’t find anywhere else.", icon: "✨" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#D7261E]">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
export default About;