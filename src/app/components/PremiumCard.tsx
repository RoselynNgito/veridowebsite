import { motion } from "motion/react";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  gradient?: boolean;
  hover3d?: boolean;
}

export default function PremiumCard({ 
  children, 
  className = "", 
  delay = 0,
  gradient = false,
  hover3d = true
}: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={hover3d ? { 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      className={`
        relative group
        ${gradient 
          ? 'bg-gradient-to-br from-white via-gray-50 to-white' 
          : 'bg-white'
        }
        rounded-2xl 
        shadow-lg shadow-gray-200/50
        border border-gray-200/50
        hover:shadow-2xl hover:shadow-gray-300/50
        hover:border-[#00C896]/30
        transition-all duration-500
        overflow-hidden
        ${className}
      `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/0 via-[#00C896]/0 to-[#162F21]/0 group-hover:from-[#00C896]/5 group-hover:to-[#162F21]/5 transition-all duration-500 rounded-2xl"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}
