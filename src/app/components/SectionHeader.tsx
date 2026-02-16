import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string | ReactNode;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ 
  badge, 
  badgeIcon,
  title, 
  subtitle, 
  centered = true,
  light = false
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full font-semibold text-sm
            ${light 
              ? 'bg-white/10 backdrop-blur-sm text-[#00C896] border border-white/20' 
              : 'bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/20'
            }
          `}
        >
          {badgeIcon && <span className="w-5 h-5">{badgeIcon}</span>}
          {badge}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight
          ${light ? 'text-white' : 'text-gray-900'}
        `}
      >
        {title}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''}
          ${light ? 'text-gray-300' : 'text-gray-600'}
        `}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
