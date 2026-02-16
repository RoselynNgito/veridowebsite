import { motion } from "motion/react";

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100, y: -100 }}
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.2, 1],
          x: [-100, -50, -100],
          y: [-100, -50, -100]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#162F21] to-[#00C896] rounded-full blur-3xl"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
        animate={{ 
          opacity: [0.15, 0.2, 0.15],
          scale: [1, 1.3, 1],
          x: [100, 150, 100],
          y: [100, 50, 100]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#00C896] to-[#162F21] rounded-full blur-3xl"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
          x: [-50, 50, -50],
          y: [50, -50, 50]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-br from-[#00C896]/50 to-[#162F21]/50 rounded-full blur-3xl"
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMiwgNDcsIDMzLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
    </div>
  );
}
