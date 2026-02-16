import { motion } from "motion/react";
import { ReactNode } from "react";
import { Button } from "./ui/button";

interface CleanHeroProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string | ReactNode;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function CleanHero({ 
  badge, 
  badgeIcon,
  title, 
  subtitle,
  backgroundImage,
  ctaText = "Start Your Free Pilot",
  onCtaClick
}: CleanHeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#162F21] via-[#1a3926] to-[#0e1f15]">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(22,47,33,0.85)] via-[rgba(22,47,33,0.75)] to-[rgba(22,47,33,0.9)]"></div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-badge inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              {badgeIcon && <span className="w-5 h-5 text-[#d4a574]">{badgeIcon}</span>}
              <span className="text-sm font-semibold text-white tracking-wide uppercase">{badge}</span>
            </motion.div>
          )}

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* CTA */}
          {ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#162F21] px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={onCtaClick}
              >
                {ctaText}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}