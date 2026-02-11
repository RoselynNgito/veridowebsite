import { motion } from "motion/react";
import { ReactNode } from "react";

interface BusinessToolCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function BusinessToolCard({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: BusinessToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="group relative bg-gradient-to-br from-white via-[#fafaf8] to-[#f8f9f8] rounded-2xl p-8 border-2 border-gray-100 hover:border-[#162F21]/20 transition-all duration-300 hover:shadow-2xl shadow-md overflow-hidden"
    >
      {/* Icon Container with Glow Effect */}
      <div className="relative mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-16 h-16 rounded-2xl bg-[#162F21] group-hover:bg-[#d4a574] transition-all duration-300 flex items-center justify-center relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-[#d4a574] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
          <div className="relative text-white group-hover:text-[#162F21] transition-colors duration-300">
            {icon}
          </div>
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#162F21] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Hover accent line - now properly contained */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#162F21] to-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}