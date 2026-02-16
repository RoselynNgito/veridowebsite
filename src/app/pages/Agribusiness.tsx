import { motion } from "motion/react";
import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { Button } from "../components/ui/button";
import { 
  StoreIcon,
  ShieldIcon, 
  LocationIcon, 
  PackageIcon, 
  DocumentIcon,
  CheckIcon,
  TrendUpIcon,
  AlertIcon,
  UsersIcon,
  MailIcon,
  ClockIcon
} from "../components/icons/SvgIcons";
import imgImageVeridoMobileApp from "../../assets/verido_mobile_app.png";
import imgImageVeridoWebDashboard from "../../assets/verido_web_dashboard.png";
import FiveScoringSystemsSection from "../components/FiveScoringSystemsSection";

export default function Agribusiness() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-[#162F21] to-[#0a1810]">
        {/* Animated Background Blurs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-10 w-[600px] h-[600px] bg-[#d4a574] rounded-full blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1.1 }}
          transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px]"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-10 items-center">
            {/* LEFT: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full mb-6">
                <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                <span className="text-[#d4a574] font-bold text-xs tracking-[2px] uppercase">For Agribusiness</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                <span className="block text-white">Growth isn't</span>
                <span className="block text-white">the problem.</span>
                <span className="block text-[#d4a574]">Hidden risk is.</span>
              </h1>

              {/* Subheadline - IN A BANNER */}
              <div className="inline-block bg-gradient-to-r from-[rgba(212,165,116,0.15)] to-[rgba(212,165,116,0.05)] border-l-4 border-[#d4a574] rounded-r-xl px-5 py-4 mb-8">
                <p className="text-lg md:text-xl text-[rgba(255,255,255,0.95)] leading-relaxed font-medium">
                  Especially in agent and retailer networks where trust decisions cost you millions.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="mailto:hello@verido.com?subject=Book a Demo - Agribusiness"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4a574] to-[#c99a66] hover:from-[#c99a66] hover:to-[#b88f5c] text-white px-8 py-4 rounded-lg text-lg font-bold shadow-[0px_20px_25px_-5px_rgba(212,165,116,0.3),0px_8px_10px_-6px_rgba(212,165,116,0.2)] hover:shadow-[0px_25px_30px_-5px_rgba(212,165,116,0.4),0px_10px_15px_-6px_rgba(212,165,116,0.3)] transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Book a Demo
                </a>

                <a 
                  href="https://play.google.com/store/apps/details?id=app.verido.app"  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] text-white px-6 py-4 rounded-lg text-base font-semibold border border-[rgba(255,255,255,0.2)] backdrop-blur-sm transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="currentColor"/>
                  </svg>
                  Download App
                </a>
              </div>
              
              <p className="mt-4 text-xs text-[rgba(255,255,255,0.6)]">
                By downloading, you agree to our{" "}
                <Link to="/terms-of-service" className="underline hover:text-[#d4a574] transition-colors">
  Terms of Service
</Link>
<Link to="/privacy-policy" className="underline hover:text-[#d4a574] transition-colors">
  Privacy Policy
</Link>
              </p>
            </motion.div>

            {/* RIGHT: Mobile Phone Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <img 
                  src={imgImageVeridoMobileApp} 
                  alt="Verido Mobile App" 
                  className="w-[240px] md:w-[280px] lg:w-[320px] h-auto drop-shadow-2xl"
                />
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-[#d4a574] opacity-30 blur-[80px] -z-10"></div>

                {/* LIVE Badge */}
                <div className="absolute bottom-4 right-4 bg-[#10b981] rounded-full px-3.5 py-2 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] border-2 border-[rgba(255,255,255,0.2)] flex items-center gap-1.5">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.45px]">LIVE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Challenge Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] rounded-full mb-6">
              <AlertIcon className="text-red-600" size={20} />
              <span className="text-red-600 font-bold text-sm tracking-wider uppercase">The Problem</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              You already manage a complex distribution network.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-semibold">
              But every growth decision comes with pressure:
            </p>
          </motion.div>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            {[
              {
                text: "Retailers push for more stock or more credit",
                Icon: StoreIcon
              },
              {
                text: "Agents say \"this one is safe\"",
                Icon: UsersIcon
              },
              {
                text: "Sales wants expansion",
                Icon: TrendUpIcon
              },
              {
                text: "Finance wants control",
                Icon: ShieldIcon
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-white to-red-50/30 rounded-xl p-6 border-l-4 border-red-500 shadow-[0px_2px_8px_rgba(0,0,0,0.08),0px_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0px_20px_25px_-5px_rgba(239,68,68,0.15),0px_8px_10px_-6px_rgba(239,68,68,0.1)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.Icon className="text-red-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-800 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[rgba(239,68,68,0.08)] to-[rgba(239,68,68,0.03)] border-l-4 border-red-400 rounded-r-lg px-6 py-2.5 shadow-sm">
              <p className="text-base md:text-lg font-bold text-gray-800 leading-snug">
                Problems don't show up where you're looking. They show up where you're not.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE REAL ISSUE SECTION */}
      <section className="py-20 bg-gradient-to-br from-red-50/30 to-orange-50/20 shadow-[0px_-10px_30px_-5px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Real Issue Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] rounded-full mb-6">
              <AlertIcon className="text-red-600" size={20} />
              <span className="text-red-600 font-bold text-sm tracking-wider uppercase">The Real Issue</span>
            </div>
          </motion.div>

          {/* Myth vs Reality Comparison Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Box 1 - What you're often told (MYTH) */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-8 border-2 border-dashed border-gray-300 opacity-95 hover:opacity-100 transition-all duration-300">
                {/* Label */}
                <div className="flex items-center gap-2 mb-4">
                  <MailIcon className="text-gray-400" size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">What you're often told</span>
                </div>
                
                {/* Quote */}
                <div className="relative">
                  <div className="absolute -top-2 -left-1 text-4xl text-gray-300 font-serif">"</div>
                  <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed italic pl-6">
                    Some retailers just aren't trustworthy.
                  </p>
                  <div className="absolute -bottom-4 right-0 text-4xl text-gray-300 font-serif">"</div>
                </div>
              </div>

              {/* Connecting Element - Arrow/Symbol */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full shadow-[0px_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-gray-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-500">
                    <path d="M13 5L20 12M20 12L13 19M20 12H4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Box 2 - What's actually happening (REALITY) */}
              <div className="group relative bg-gradient-to-br from-white to-red-50/30 rounded-2xl p-8 border-l-4 border-red-500 shadow-[0px_4px_16px_rgba(239,68,68,0.1),0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_20px_30px_-5px_rgba(239,68,68,0.2),0px_10px_15px_-6px_rgba(239,68,68,0.15)] transition-all duration-300">
                {/* Label */}
                <div className="flex items-center gap-2 mb-4">
                  <AlertIcon className="text-red-600" size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">What's actually happening</span>
                </div>
                
                {/* Statement */}
                <p className="text-base md:text-lg font-bold text-gray-900 leading-relaxed">
                  Risk hides in agent and retailer behaviour and only becomes visible after money or stock is gone.
                </p>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Mobile Arrow (shown only on small screens) */}
              <div className="md:hidden flex justify-center -my-3">
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-500 rotate-90">
                    <path d="M13 5L20 12M20 12L13 19M20 12H4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION INTRO */}
      <section className="py-20 bg-gradient-to-br from-[#162F21] to-[#0a1810] relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#d4a574] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00C896] rounded-full blur-[150px]"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[rgba(212,165,116,0.2)] border border-[rgba(212,165,116,0.3)] rounded-full mb-8">
              <CheckIcon className="text-[#d4a574]" size={20} />
              <span className="text-[#d4a574] font-bold text-sm tracking-wider uppercase">The Solution</span>
            </div>

            {/* Premium Content Card */}
            <div className="relative bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-3xl p-10 md:p-14 shadow-[0px_20px_50px_rgba(0,0,0,0.3),0px_0px_80px_rgba(212,165,116,0.15)] overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#d4a574] opacity-40 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#d4a574] opacity-40 rounded-br-3xl"></div>

              {/* Glow accent line at top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#d4a574] to-transparent opacity-50"></div>

              {/* Main Headline */}
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.15] tracking-tight">
                Verido is{" "}
                <span className="relative inline-block">
                  <span className="text-[#d4a574]">risk infrastructure</span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#d4a574] to-transparent opacity-60"></div>
                </span>
                {" "}for growing distribution networks.
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-3 justify-center my-8">
                <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                <div className="w-16 h-[2px] bg-gradient-to-r from-[rgba(212,165,116,0.5)] to-transparent"></div>
                <div className="w-2 h-2 bg-[#00C896] rounded-full"></div>
                <div className="w-16 h-[2px] bg-gradient-to-l from-[rgba(0,200,150,0.5)] to-transparent"></div>
              </div>

              {/* Subheadlines */}
              <div className="space-y-5 max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-r from-[rgba(212,165,116,0.1)] to-transparent border-l-4 border-[#d4a574] rounded-r-xl px-6 py-4">
                  <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
                    It shows you who is safe to grow with before you pay the price.
                  </p>
                </div>

                <div className="relative bg-gradient-to-r from-[rgba(0,200,150,0.08)] to-transparent border-l-4 border-[#00C896] rounded-r-xl px-6 py-4">
                  <p className="text-base md:text-lg text-[rgba(255,255,255,0.85)] leading-relaxed">
                    Based on real agent and retailer behaviour, where most risk hides.
                  </p>
                </div>
              </div>

              {/* Bottom glow accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#00C896] to-transparent opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 SCORING SYSTEMS */}
      <FiveScoringSystemsSection />

      {/* BENEFITS - When You See Risk Clearly */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-br from-[#d4a574] to-[#c99a66] border border-[rgba(255,255,255,0.2)] rounded-full shadow-[0px_10px_15px_0px_rgba(212,165,116,0.3),0px_4px_6px_0px_rgba(212,165,116,0.2)] mb-6">
              <TrendUpIcon className="text-white" size={20} />
              <span className="text-white font-bold text-sm tracking-wider uppercase">
                Payoff
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#162f21] mb-4 leading-tight">
              What changes when you see clearly:
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results across your distribution network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Fewer defaults and write-offs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-white rounded-3xl p-8 border-2 border-[#162f21] hover:shadow-[0px_25px_35px_-5px_rgba(22,47,33,0.2),0px_10px_15px_-6px_rgba(22,47,33,0.15)] transition-all duration-300 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#162f21] to-transparent opacity-5 rounded-bl-[100px]"></div>
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#162f21] to-[#1a3826] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ShieldIcon className="text-[#d4a574]" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-[#162f21] mb-4 leading-tight">
                Fewer defaults and write-offs
              </h3>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a574] to-transparent mb-4"></div>

              {/* Description - placeholder if needed */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Data-driven decisions reduce your exposure to high-risk retailers before losses occur.
              </p>
            </motion.div>

            {/* Card 2 - Faster onboarding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-gradient-to-br from-[#d4a574] to-[#c99a66] rounded-3xl p-8 border-2 border-[#d4a574] hover:shadow-[0px_25px_35px_-5px_rgba(212,165,116,0.4),0px_10px_15px_-6px_rgba(212,165,116,0.3)] transition-all duration-300 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white to-transparent opacity-10 rounded-bl-[100px]"></div>
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ClockIcon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                Faster onboarding of new retailers
              </h3>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-white to-transparent mb-4 opacity-70"></div>

              {/* Description */}
              <p className="text-sm text-white/90 leading-relaxed">
                Approve trustworthy retailers in minutes instead of weeks of manual verification.
              </p>
            </motion.div>

            {/* Card 3 - Expansion without blind risk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-white rounded-3xl p-8 border-2 border-[#162f21] hover:shadow-[0px_25px_35px_-5px_rgba(22,47,33,0.2),0px_10px_15px_-6px_rgba(22,47,33,0.15)] transition-all duration-300 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#162f21] to-transparent opacity-5 rounded-bl-[100px]"></div>
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#162f21] to-[#1a3826] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <LocationIcon className="text-[#d4a574]" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-[#162f21] mb-4 leading-tight">
                Expansion into new areas without blind risk
              </h3>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a574] to-transparent mb-4"></div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Enter new territories with confidence, knowing which regions are profitable vs. high-risk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA - After Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#162F21] to-[#0a1810] relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a574] rounded-full blur-[150px]"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Ready to see how it works for your network?
            </h3>
            <p className="text-lg text-[rgba(255,255,255,0.85)] mb-10 max-w-2xl mx-auto">
              Book a personalized demo and see how Verido reduces risk in your distribution network
            </p>
            
            <a 
              href="mailto:hello@verido.com?subject=Book a Demo - Agribusiness"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4a574] to-[#c99a66] hover:from-[#c99a66] hover:to-[#b88f5c] text-white px-10 py-5 rounded-lg text-lg font-bold shadow-[0px_20px_25px_-5px_rgba(212,165,116,0.3),0px_8px_10px_-6px_rgba(212,165,116,0.2)] hover:shadow-[0px_25px_30px_-5px_rgba(212,165,116,0.4),0px_10px_15px_-6px_rgba(212,165,116,0.3)] transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Book a Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM PREVIEW - Mobile + Web */}
      <section className="py-20 bg-gradient-to-br from-[#162F21] to-[#0a1810] relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], x: [0, 100, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4a574] rounded-full blur-[150px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready on mobile and web
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.8)] max-w-3xl mx-auto">
              Your team gets the data they need, wherever they are
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img 
                  src={imgImageVeridoMobileApp} 
                  alt="Verido Mobile App" 
                  className="w-full max-w-[300px] h-auto drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-[#d4a574] opacity-20 blur-[80px] -z-10"></div>
              </div>
            </motion.div>

            {/* Web Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img 
                  src={imgImageVeridoWebDashboard} 
                  alt="Verido Web Dashboard" 
                  className="w-full max-w-[450px] h-auto rounded-2xl shadow-2xl border border-[rgba(255,255,255,0.1)]"
                />
                <div className="absolute inset-0 bg-[#00C896] opacity-10 blur-[80px] -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - Stats Banner */}
      <section className="py-16 bg-gradient-to-br from-[#162F21] to-[#0a1810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "35%", label: "Average default reduction" },
              { number: "2min", label: "Retailer onboarding time" },
              { number: "5", label: "Scoring systems included" },
              { number: "24/7", label: "Mobile & web access" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-[#d4a574] mb-2">{stat.number}</div>
                <div className="text-sm text-[rgba(255,255,255,0.7)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Common questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know before getting started
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need clean data to get started?",
                a: "No. Most distribution companies have messy, incomplete records. We help you clean and structure your data during setup. You'll see improvements even with imperfect data."
              },
              {
                q: "How long does implementation take?",
                a: "Initial setup takes 3-5 days. Your team can start scoring retailers immediately. Full rollout across all territories typically happens within 30 days."
              },
              {
                q: "Can we customize the scoring models?",
                a: "Yes. Every business has different risk tolerances and priorities. We configure the weighting of each scoring system to match your distribution model."
              },
              {
                q: "What if we already use an ERP system?",
                a: "Verido integrates with your existing systems (SAP, Odoo, QuickBooks, etc.). We pull transaction data automatically—no manual exports or duplicate entry."
              },
              {
                q: "Is my data secure?",
                a: "Bank-level encryption, role-based access controls, and regular security audits. You own your data—we never sell it or use it for other purposes."
              },
              {
                q: "What's the commitment and pricing?",
                a: "We offer flexible monthly subscriptions with no long-term contracts. Pricing depends on your network size and territories. Contact us for a custom quote and demo."
              }
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-xl border border-gray-200 hover:border-[#162F21] transition-all duration-300"
              >
                <summary className="cursor-pointer p-6 font-bold text-gray-900 list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <div className="w-6 h-6 rounded-full bg-[#162F21] flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                      <path d="M6 9L6 3M3 6L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#162F21] rounded-full blur-[150px]"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Ready to make risk visible
              <span className="block text-[#162F21]">before it costs you?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              See Verido in action with a personalized demo for your distribution network
            </p>
            
            {/* Primary CTA - Book a Demo */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <a 
                href="mailto:hello@verido.com?subject=Book a Demo - Agribusiness"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4a574] to-[#c99a66] hover:from-[#c99a66] hover:to-[#b88f5c] text-white px-10 py-6 rounded-lg text-lg font-bold shadow-[0px_20px_25px_-5px_rgba(212,165,116,0.3),0px_8px_10px_-6px_rgba(212,165,116,0.2)] hover:shadow-[0px_25px_30px_-5px_rgba(212,165,116,0.4),0px_10px_15px_-6px_rgba(212,165,116,0.3)] transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Book a Demo
              </a>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-gray-300"></div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Or</span>
                <div className="w-12 h-[1px] bg-gray-300"></div>
              </div>

              {/* Secondary CTA - Download App (for existing customers) */}
              <a 
                href="https://play.google.com/store/apps/details?id=app.verido.app"  
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#162F21] px-6 py-3 rounded-lg text-base font-semibold border-2 border-[#162F21] transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#162F21]">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="currentColor"/>
                </svg>
                Download App
              </a>
            </div>

            <p className="text-xs text-gray-500">
              Already a customer? Download the app • Free on Android
            </p>
            
            <p className="mt-3 text-xs text-gray-500">
              By downloading, you agree to our{" "}
              <Link to="/terms-of-service" className="underline hover:text-[#d4a574] transition-colors">
  Terms of Service
</Link>
<Link to="/privacy-policy" className="underline hover:text-[#d4a574] transition-colors">
  Privacy Policy
</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTopButton />
    </div>
  );
}