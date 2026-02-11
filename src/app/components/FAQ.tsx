import { motion } from "motion/react";
import { QuestionIcon, ShieldIcon, DatabaseIcon, CheckIcon } from "./icons/SvgIcons";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "How is my data protected?",
    answer: "Your data is encrypted and stored securely. We never share your business information with third parties. You maintain full ownership and control of all your data.",
    icon: <ShieldIcon className="text-white" size={20} />
  },
  {
    question: "What if I only have 50 retailers or farmers?",
    answer: "Perfect! Our pilot program works with networks of any size. Even with a small network, you'll see valuable insights. Many clients start with 20-100 entities and expand from there.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  },
  {
    question: "Can I cancel the pilot anytime?",
    answer: "Absolutely. There's no long-term commitment. The 30-day pilot is risk-free, and you can cancel at any time with no penalties or fees.",
    icon: <CheckIcon className="text-white" size={20} />
  },
  {
    question: "Do I need to change my existing systems?",
    answer: "No. Verido works alongside your current processes. We integrate with your existing data sources and workflows without requiring you to replace any systems.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.27002 6.96L12 12.01L20.73 6.96M12 22.08V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see initial risk scores within the first week of the pilot. By day 30, you'll have comprehensive insights to make evidence-based decisions.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
      <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  },
  {
    question: "What happens after the 30-day pilot?",
    answer: "You'll review the results with our team. If you're satisfied, we'll discuss a rollout plan for your full network. If not, no problem—there's no obligation to continue.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
      <path d="M16 2V6M8 2V6M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="8" cy="14" r="1" fill="white"/>
      <circle cx="12" cy="14" r="1" fill="white"/>
      <circle cx="16" cy="14" r="1" fill="white"/>
    </svg>
  },
  {
    question: "How much does it cost?",
    answer: "Pricing is customized based on your network size and needs. The 30-day pilot is free with no credit card required. After that, we'll provide transparent pricing options.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
      <path d="M12 6V18M9 8H13.5C14.0304 8 14.5391 8.21071 14.9142 8.58579C15.2893 8.96086 15.5 9.46957 15.5 10C15.5 10.5304 15.2893 11.0391 14.9142 11.4142C14.5391 11.7893 14.0304 12 13.5 12H9V8ZM9 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H9V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  },
  {
    question: "Can I use this for both retailers and farmers?",
    answer: "Yes! The scoring system adapts to different network types—retailers, farmers, dealers, beneficiaries, or any distribution partner. We customize it to your specific use case.",
    icon: <DatabaseIcon className="text-white" size={20} />
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 rounded-full bg-[#162F21]/10 border-2 border-[#162F21]/30 shadow-sm">
            {/* FAQ SVG Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#162F21" strokeWidth="2"/>
              <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15848 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01" stroke="#162F21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base font-bold text-[#162F21] tracking-wide uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Verido
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[#162F21] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center gap-4 group"
              >
                {/* Icon Circle */}
                <div className="w-10 h-10 bg-gradient-to-br from-[#162F21] to-[#0a1810] rounded-lg flex items-center justify-center flex-shrink-0">
                  {faq.icon}
                </div>
                <span className="font-semibold text-gray-900 pr-4 text-lg flex-1">
                  {faq.question}
                </span>
                <span className={`text-2xl font-bold text-[#162F21] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4 ml-14">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}