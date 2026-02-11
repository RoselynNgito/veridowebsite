import { motion } from "motion/react";
import { ReactNode } from "react";

interface CleanCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  variant?: "default" | "outlined" | "filled";
}

export default function CleanCard({ 
  icon, 
  title, 
  description, 
  delay = 0,
  variant = "default"
}: CleanCardProps) {
  const variants = {
    default: "bg-white border border-gray-200 shadow-sm hover:shadow-md",
    outlined: "bg-white border-2 border-gray-300 hover:border-[#162F21]",
    filled: "bg-gray-50 border border-gray-200 hover:bg-white"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-xl p-8 transition-all duration-300 ${variants[variant]}`}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-[#162F21]/5 flex items-center justify-center mb-4 text-[#162F21]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
