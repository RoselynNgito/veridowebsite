import { motion } from "motion/react";
import { ReactNode } from "react";

interface TeamCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor?: string;
  delay?: number;
}

export default function TeamCard({ 
  icon, 
  title, 
  description, 
  accentColor = "#FFD700",
  delay = 0 
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center bg-gradient-to-b from-[#fafaf9] to-white rounded-2xl p-6 border border-gray-100/50 hover:border-[#162F21]/10 transition-all duration-300 hover:shadow-lg"
    >
      {/* Circular Icon Container */}
      <div className="relative inline-flex items-center justify-center mb-4">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: accentColor }}
        >
          <div className="text-white w-12 h-12">
            {icon}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}