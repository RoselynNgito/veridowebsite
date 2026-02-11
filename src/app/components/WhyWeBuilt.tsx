import { motion } from "motion/react";
import { HeartIcon, LightningIcon, TargetIcon, AlertIcon, RocketIcon } from "./icons/SvgIcons";

export default function WhyWeBuilt() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 rounded-full bg-[#d4a574]/10 border-2 border-[#d4a574]/30 shadow-sm">
            {/* Our Story SVG Icon - Book */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="#162F21" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6.5 2H20V22H6.5A2.5 2.5 0 014 19.5V4.5A2.5 2.5 0 016.5 2Z" stroke="#162F21" strokeWidth="2"/>
              <path d="M12 2V22" stroke="#162F21" strokeWidth="2"/>
            </svg>
            <span className="text-base font-bold text-[#162F21] tracking-wide uppercase">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why We Built Verido
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've seen firsthand how gut-feeling decisions destroy businesses
          </p>
        </motion.div>

        {/* 3-Column Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-red-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
              <AlertIcon className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem We Saw</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Distribution companies losing <span className="font-bold text-red-600">millions</span> to 30-40% default rates because decisions were based on relationships, not data
            </p>
          </motion.div>

          {/* Card 2: What Was Missing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#d4a574] hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#d4a574] to-[#c99a66] rounded-xl flex items-center justify-center mb-4">
              {/* Lightbulb SVG Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.0869 7.01674 12.9279 8.55567 14.0004C9.23404 14.4803 9 15 9 15.5V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V15.5C15 15 14.766 14.4803 15.4443 14.0004C16.9833 12.9279 18 11.0869 18 9C18 5.68629 15.3137 3 12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="2" fill="white"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">What Was Missing</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              No data-driven tools existed for credit decisions in African distribution networks. Only guesswork and gut feelings
            </p>
          </motion.div>

          {/* Card 3: Our Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              {/* Target/Bullseye SVG Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="white"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Risk intelligence platform with 5 scoring systems that replaces guesswork with evidence-based decisions
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Principles</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#162F21] hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] rounded-xl flex items-center justify-center mb-4">
              <TargetIcon className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Data Over Gut Feeling</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every decision backed by evidence, not relationships or hunches
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#162F21] hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#d4a574] to-[#c99a66] rounded-xl flex items-center justify-center mb-4">
              <LightningIcon className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast, Not Complicated</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Risk assessment in minutes, not months
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#162F21] hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center mb-4">
              <HeartIcon className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Africa</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We understand distribution networks in emerging markets
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-gradient-to-br from-[#162F21] to-[#0a1810] rounded-2xl p-10"
        >
          <p className="text-xl text-white/90 mb-4 leading-relaxed">
            We're not just building software. We're building a future where businesses grow confidently, backed by data.
          </p>
          <p className="text-2xl font-bold text-[#d4a574]">
            That's why Verido exists.
          </p>
        </motion.div>
      </div>
    </section>
  );
}