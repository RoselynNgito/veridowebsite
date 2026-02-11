import { motion } from "motion/react";

interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  backgroundColor?: string;
}

export default function StatsSection({ stats, backgroundColor = "#f9fafb" }: StatsSectionProps) {
  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#162F21] mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-sm text-gray-500">
                  {stat.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
