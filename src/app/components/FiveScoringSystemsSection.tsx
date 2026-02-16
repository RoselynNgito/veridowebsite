import { motion } from "motion/react";
import svgPaths from "../../imports/svg-6yd0ds2dzw";
import { ShieldIcon } from "./icons/SvgIcons";

const scoringSystems = [
  {
    number: "01",
    title: "Data Quality Score",
    description: "Can I trust their records?",
    iconPath: svgPaths.p21b47700,
    bgGradient: "from-[#f0f9f4] to-white"
  },
  {
    number: "02",
    title: "Verido Trust Score",
    description: "Are they consistent over time?",
    iconPath: svgPaths.pd95e780,
    bgGradient: "from-[#faf6f0] to-white"
  },
  {
    number: "03",
    title: "Trade Credit Score",
    description: "How much exposure is safe right now?",
    iconPath: svgPaths.p1bfd700,
    bgGradient: "from-[#f0f9f4] to-[#faf6f0]"
  },
  {
    number: "04",
    title: "Consignment Readiness Score",
    description: "Can I release stock before payment?",
    iconPath: svgPaths.p25390b80,
    bgGradient: "from-[#faf6f0] to-[#f0f9f4]"
  },
  {
    number: "05",
    title: "Loan Readiness & Safe Loan Size",
    description: "Are they ready for bigger or third-party finance?",
    iconPath: svgPaths.p6937640,
    bgGradient: "from-white to-[#f0f9f4]"
  }
];

export default function FiveScoringSystemsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-br from-[#162f21] to-[#1a3826] border border-[rgba(212,165,116,0.3)] rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] mb-6">
            <ShieldIcon className="text-[#d4a574]" size={20} />
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              5 Scoring Systems
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#162f21] mb-4 leading-tight">
            Before you release stock or approve credit,
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Verido answers five uncomfortable questions:
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {scoringSystems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-gradient-to-b ${system.bgGradient} border-2 border-[#e5e7eb] rounded-2xl p-6 hover:border-[#162f21] transition-all duration-300 hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]`}
            >
              {/* Number Badge - Top Right */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[rgba(22,47,33,0.05)] rounded-lg flex items-center justify-center">
                <span className="text-[#162f21] font-black text-sm">{system.number}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-b from-[#162f21] to-[#1a3826] rounded-2xl flex items-center justify-center mb-6 shadow-[0px_10px_15px_0px_rgba(22,47,33,0.2),0px_4px_6px_0px_rgba(22,47,33,0.2)] group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path 
                    d={system.iconPath} 
                    stroke="#D4A574" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2.33333" 
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-[#162f21] mb-3 leading-tight">
                {system.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {system.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-[rgba(22,47,33,0.08)] to-[rgba(22,47,33,0.03)] border-l-4 border-[#162f21] rounded-r-lg px-6 py-2.5 shadow-sm">
            <p className="text-base md:text-lg font-bold text-gray-800 leading-snug">
              Each score links to a clear decision: approve, limit, delay, or decline - calmly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}