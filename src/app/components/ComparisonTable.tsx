import { motion } from "motion/react";
import { CheckIcon } from "./icons/SvgIcons";

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  leftColumn: {
    title: string;
    items: string[];
    color: string;
  };
  rightColumn: {
    title: string;
    items: string[];
    color: string;
  };
}

export default function ComparisonTable({ 
  title, 
  subtitle,
  leftColumn,
  rightColumn 
}: ComparisonTableProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border-2 p-8"
            style={{ borderColor: leftColumn.color }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: leftColumn.color }}
              >
                <CheckIcon className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{leftColumn.title}</h3>
            </div>
            <ul className="space-y-4">
              {leftColumn.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span 
                    className="mr-3 mt-1 text-xl font-bold"
                    style={{ color: leftColumn.color }}
                  >
                    •
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border-2 p-8"
            style={{ borderColor: rightColumn.color }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: rightColumn.color }}
              >
                <span className="text-white text-2xl font-bold">✕</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{rightColumn.title}</h3>
            </div>
            <ul className="space-y-4">
              {rightColumn.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span 
                    className="mr-3 mt-1 text-xl font-bold"
                    style={{ color: rightColumn.color }}
                  >
                    •
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
