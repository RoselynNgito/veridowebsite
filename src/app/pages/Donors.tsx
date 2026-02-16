import { motion } from "motion/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { 
  AlertIcon,
  CheckIcon,
  TrendUpIcon,
  MailIcon,
  ShieldIcon,
  LocationIcon,
  PackageIcon,
  DocumentIcon,
  UserIcon,
  ClockIcon,
  TargetIcon
} from "../components/icons/SvgIcons";
import imgImageVeridoMobileApp from "../../assets/verido_mobile_app.png";
import imgImageVeridoWebDashboard from "../../assets/verido_web_dashboard.png";
import imgImageVeridoReportsDashboard from "../../assets/verido_reports_dashboard.png";
import imgVeridoLogo from "../../assets/Verido_White_transparent.png";
import svgPaths from "../../imports/svg-t88svzplsg";
import svgPathsUsers from "../../imports/svg-4dv4lrjl5b";

export default function Donors() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-[#162f21] via-[#1f4230] to-[#2a5540]">
        {/* Animated Background Blurs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 right-[293.7px] w-[500px] h-[500px] bg-[#d4a574] rounded-full blur-[64px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1.1 }}
          transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[97.2px] left-0 w-[400px] h-[400px] bg-[#10b981] rounded-full blur-[64px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12 items-center">
            {/* LEFT: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full mb-6">
                <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                <span className="text-[#d4a574] font-bold text-xs tracking-[2px] uppercase">For Donor Programmes</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.05] mb-6 tracking-tight">
                <span className="block text-white">System change without evidence is just </span>
                <span className="italic text-[#d4a574]">activity.</span>
              </h1>

              {/* Gold-to-Green Gradient Divider */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#d4a574] to-[#10b981] mb-6"></div>

              {/* Subheadline */}
              <p className="text-lg md:text-[18px] text-[rgba(255,255,255,0.95)] font-semibold leading-relaxed mb-8">
                Verido makes system behaviour visible in real time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="mailto:hello@verido.com?subject=Book a Demo - Donor Programmes"
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
            </motion.div>

            {/* RIGHT: Mobile Phone Screenshot with LIVE Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Phone Image */}
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

      {/* PROGRAMME REALITY SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#fafbfa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Red Decorative Lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Top Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#dc2626]"></div>
              <div className="w-2 h-2 bg-[#dc2626] rotate-45"></div>
              <div className="w-12 h-0.5 bg-[#dc2626]"></div>
            </div>

            {/* Badge */}
            <h3 className="text-[32px] font-black text-[#162f21] text-center uppercase tracking-[8px] mb-4">
              Programme Reality
            </h3>

            {/* Bottom Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-[#dc2626]"></div>
              <div className="w-2 h-2 bg-[#dc2626] rotate-45"></div>
              <div className="w-12 h-0.5 bg-[#dc2626]"></div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-[28px] font-black text-[#162f21] mb-3 tracking-tight">
              Every programme wants sustainable outcomes.
            </h2>

            {/* Subheadline */}
            <p className="text-lg md:text-[18px] text-[#353e4e] font-semibold italic">
              But in practice:
            </p>
          </motion.div>

          {/* Divider */}
          <div className="h-0.5 w-full bg-gradient-to-r from-[rgba(220,38,38,0.2)] via-[rgba(220,38,38,0.4)] to-[rgba(220,38,38,0.6)] mb-12"></div>

          {/* 4 Pain Point Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { num: "1", text: "Data arrives late or incomplete" },
              { num: "2", text: "Monitoring happens after implementation" },
              { num: "3", text: "Learning relies on snapshots & surveys" },
              { num: "4", text: "Evidence is retrospective, not live" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-6 hover:border-[#dc2626] transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="flex justify-center mb-4">
                  <div className="w-11 h-11 bg-gradient-to-b from-[#dc2626] to-[#ef4444] rounded-full flex items-center justify-center shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                    <span className="text-base font-black text-white">{item.num}</span>
                  </div>
                </div>

                {/* Text */}
                <p className="text-xs font-bold text-[#162f21] text-center leading-relaxed">
                  {item.text}
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
            className="flex justify-center"
          >
            <div className="bg-gradient-to-b from-white to-[#fef2f2] border-l-4 border-[#dc2626] rounded-md shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] px-8 py-5 max-w-3xl">
              <p className="text-xl font-black text-[#162f21] text-center tracking-tight">
                Scale becomes cautious. <span className="text-[#dc2626]">Attribution becomes difficult.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE REAL ISSUE SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#f9fafb] via-white to-[#f3f4f6]">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Section Header with Decorative Lines */}
            <div className="relative mb-[52px]">
              {/* Decorative Lines */}
              <div className="flex items-center justify-center gap-0 mb-[10px]">
                <div className="w-16 h-[2px] bg-[#162f21]"></div>
                <div className="w-8 h-[2px] bg-[#d4a574]"></div>
              </div>

              {/* Title */}
              <h2 className="text-[28px] font-black text-[#162f21] text-center uppercase tracking-[4.2px] leading-[42px]">
                The Real Issue
              </h2>
            </div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-8">
              {/* LEFT BOX - What Programmes Often Hear */}
              <div className="bg-[#f3f4f6] p-8 flex flex-col gap-6 min-h-[220px]">
                {/* Header */}
                <div>
                  <p className="text-[16px] font-black text-[#dc2626] uppercase tracking-[3.2px] leading-[19.2px] mb-[13px]">
                    What programmes<br />often hear
                  </p>
                  <div className="w-16 h-[3px] bg-[#dc2626]"></div>
                </div>

                {/* Quote */}
                <p className="text-[20px] font-bold italic text-[#4b5563] leading-[26px]">
                  "We can't measure systemic change in real time."
                </p>
              </div>

              {/* RIGHT BOX - What's Actually Missing */}
              <div className="bg-[#162f21] p-8 flex flex-col gap-6 min-h-[220px]">
                {/* Header */}
                <div>
                  <p className="text-[16px] font-black text-[#d4a574] uppercase tracking-[3.2px] leading-[19.2px] mb-[13px]">
                    What's<br />actually missing
                  </p>
                  <div className="w-16 h-[3px] bg-[#d4a574]"></div>
                </div>

                {/* Answer */}
                <p className="text-[20px] font-bold text-white leading-[26px] max-w-[240px]">
                  Real-time visibility into partner and beneficiary behaviour.
                </p>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-gradient-to-b from-[#162f21] via-[#223a28] to-[#6b5d47] border-l-4 border-[#d4a574] rounded-md shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] px-8 py-5">
              <p className="text-[20px] font-bold text-white leading-[26px] text-center">
                Without it, support and finance become <span className="italic text-[#d4a574]">trial-and-error.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION INTRO */}
      <section className="py-20 bg-gradient-to-b from-white via-[#fafbfa] to-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card Container with Background and Shadow */}
            <div className="relative bg-gradient-to-br from-white via-[#fdfbf8] to-[#faf8f5] rounded-3xl p-10 md:p-14 shadow-[0px_20px_40px_-10px_rgba(22,47,33,0.12),0px_10px_20px_-5px_rgba(212,165,116,0.08)] border border-[rgba(212,165,116,0.15)]">
              {/* Subtle corner glow accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4a574]/10 to-transparent rounded-tr-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#162f21]/5 to-transparent rounded-bl-3xl pointer-events-none"></div>

              <div className="text-center relative">
                {/* Top Decorative Lines with Icon */}
                <div className="flex items-center justify-center gap-3 mb-[44px]">
                  <div className="w-16 h-[2px] bg-[#d4a574]"></div>
                  
                  {/* Layers Icon */}
                  <div className="relative w-5 h-5 shrink-0">
                    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_layers)">
                        <path 
                          d="M10.6917 1.81666C10.4746 1.71762 10.2387 1.66636 10 1.66636C9.76136 1.66636 9.52549 1.71762 9.30835 1.81666L2.16669 5.06666C2.01881 5.13186 1.89309 5.23866 1.80482 5.37404C1.71656 5.50942 1.66957 5.66755 1.66957 5.82916C1.66957 5.99077 1.71656 6.1489 1.80482 6.28428C1.89309 6.41966 2.01881 6.52646 2.16669 6.59166L9.31669 9.84999C9.53382 9.94903 9.7697 10.0003 10.0084 10.0003C10.247 10.0003 10.4829 9.94903 10.7 9.84999L17.85 6.59999C17.9979 6.53479 18.1236 6.42799 18.2119 6.29261C18.3001 6.15723 18.3471 5.99911 18.3471 5.83749C18.3471 5.67588 18.3001 5.51775 18.2119 5.38237C18.1236 5.24699 17.9979 5.1402 17.85 5.07499L10.6917 1.81666Z"
                          stroke="#162F21" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2.08333"
                        />
                        <path 
                          d="M1.66667 10C1.66627 10.1594 1.7116 10.3155 1.79727 10.45C1.88293 10.5844 2.00535 10.6914 2.15 10.7583L9.31667 14.0167C9.53267 14.1145 9.76705 14.1651 10.0042 14.1651C10.2413 14.1651 10.4757 14.1145 10.6917 14.0167L17.8417 10.7667C17.9892 10.7004 18.1142 10.5926 18.2015 10.4564C18.2888 10.3203 18.3346 10.1617 18.3333 10"
                          stroke="#162F21" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2.08333"
                        />
                        <path 
                          d="M1.66667 14.1667C1.66627 14.3261 1.7116 14.4822 1.79727 14.6166C1.88293 14.751 2.00535 14.8581 2.15 14.925L9.31667 18.1833C9.53267 18.2811 9.76705 18.3317 10.0042 18.3317C10.2413 18.3317 10.4757 18.2811 10.6917 18.1833L17.8417 14.9333C17.9892 14.867 18.1142 14.7592 18.2015 14.6231C18.2888 14.487 18.3346 14.3284 18.3333 14.1667"
                          stroke="#162F21" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2.08333"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_layers">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="w-16 h-[2px] bg-[#d4a574]"></div>
                </div>

                {/* Main Headline */}
                <h2 className="text-[36px] font-black text-[#162f21] mb-[20px] leading-[43.2px] tracking-[-0.9px]">
                  Verido is a <span className="italic text-[#d4a574]">monitoring and learning layer</span><br />
                  for market systems change.
                </h2>

                {/* Subheadline 1 */}
                <p className="text-[16px] font-semibold italic text-[#222c40] leading-[28px] mb-[4px]">
                  It converts everyday transactions into live evidence —
                </p>

                {/* Subheadline 2 */}
                <p className="text-[16px] font-semibold italic text-[#2d364a] leading-[28px]">
                  without new forms, parallel reporting, or extra field visits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MONITORING EVALUATION LEARNING VALUE */}
      <section className="py-20 bg-gradient-to-b from-[#f0fdf4] to-white">
        <div className="max-w-[793.7px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Decorative Lines with Dot */}
            <div className="flex items-center justify-center gap-[12px] mb-[10px]">
              <div className="w-[48px] h-[2px] bg-gradient-to-b from-transparent via-[#10b981] to-transparent"></div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#10b981] shrink-0"></div>
              <div className="w-[48px] h-[2px] bg-gradient-to-b from-transparent via-[#10b981] to-transparent"></div>
            </div>

            {/* Title */}
            <div className="text-center mb-[20px]">
              <h2 className="text-[26px] font-black text-[#162f21] uppercase tracking-[6.16px] leading-[33px]">
                Monitoring Evaluation Learning<br />Value
              </h2>
            </div>

            {/* Bottom Decorative Lines with Dot */}
            <div className="flex items-center justify-center gap-[12px] mb-[44px]">
              <div className="w-[48px] h-[2px] bg-gradient-to-b from-transparent via-[#10b981] to-transparent"></div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#10b981] shrink-0"></div>
              <div className="w-[48px] h-[2px] bg-gradient-to-b from-transparent via-[#10b981] to-transparent"></div>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-[24px]">
              <p className="text-[24px] font-bold text-[#162f21] tracking-[-0.6px] leading-[31.2px]">
                Verido gives <span className="text-[#10b981]">programmes</span>:
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[24px]">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-[6px] border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-[22px] flex items-start gap-[12px]"
              >
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_clock)">
                      <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 5V10L13.3333 11.6667" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs><clipPath id="clip0_clock"><rect fill="white" height="20" width="20"/></clipPath></defs>
                  </svg>
                </div>
                <p className="text-[14px] font-bold text-[#162f21] leading-[18.9px] flex-1">Real-time transaction data from the field</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-[6px] border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-[22px] flex items-start gap-[12px]"
              >
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d="M18.3333 5.83333L11.25 12.9167L7.08333 8.75L1.66667 14.1667" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3333 5.83333H18.3333V10.8333" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[14px] font-bold text-[#162f21] leading-[18.9px] flex-1">Behavioural trends over time, not one-off surveys</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-[6px] border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-[22px] flex items-start gap-[12px]"
              >
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_target)">
                      <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07953 10.9205 8.33333 10 8.33333C9.07953 8.33333 8.33333 9.07953 8.33333 10C8.33333 10.9205 9.07953 11.6667 10 11.6667Z" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs><clipPath id="clip0_target"><rect fill="white" height="20" width="20"/></clipPath></defs>
                  </svg>
                </div>
                <p className="text-[14px] font-bold text-[#162f21] leading-[18.9px] flex-1">Early signals of what is working — and what is not</p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-[6px] border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-[22px] flex items-start gap-[12px]"
              >
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d="M2.5 2.5V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H17.5" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 14.1667V7.5" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.8333 14.1667V4.16667" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 14.1667V11.6667" stroke="#10B981" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[14px] font-bold text-[#162f21] leading-[18.9px] flex-1">Evidence of impact suitable for evaluation and learning</p>
              </motion.div>
            </div>

            {/* Bottom Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="bg-gradient-to-b from-white to-[#f0fdf4] border-l-4 border-[#10b981] rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] px-8 py-4 max-w-[488px]">
                <p className="text-[18px] font-bold text-[#162f21] text-center leading-[27px]">
                  Behaviour is captured <span className="italic text-[#10b981]">as business happens.</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SYSTEMIC CHANGE LOGIC */}
      <section className="py-20 bg-gradient-to-b from-[#fafbfa] to-white">
        <div className="max-w-[793.7px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Decorative Lines with Icon */}
            <div className="flex items-center justify-center gap-[12px] mb-[12px]">
              <div className="w-[48px] h-[2px] bg-[#d4a574]"></div>
              
              {/* Network Icon */}
              <div className="relative w-5 h-5 shrink-0">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 20 20">
                  <path d="M5 2.5V12.5" stroke="#D4A574" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333"/>
                  <path d={svgPaths.p3a3cf580} stroke="#D4A574" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333"/>
                  <path d={svgPaths.p34c9bb80} stroke="#D4A574" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333"/>
                  <path d={svgPaths.p13cf9c00} stroke="#D4A574" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333"/>
                </svg>
              </div>
              
              <div className="w-[48px] h-[2px] bg-[#d4a574]"></div>
            </div>

            {/* Title */}
            <div className="text-center mb-[12px]">
              <h2 className="text-[32px] font-black text-[#162f21] uppercase tracking-[8px] leading-[48px]">
                Systemic Change Logic
              </h2>
            </div>

            {/* Bottom Decorative Lines with Rotated Diamond */}
            <div className="flex items-center justify-center gap-[10.757px] mb-[32px]">
              <div className="w-[48px] h-[2px] bg-[#d4a574]"></div>
              <div className="w-[12px] h-[12px] flex items-center justify-center shrink-0">
                <div className="w-[8.485px] h-[8.485px] bg-[#d4a574] rotate-45"></div>
              </div>
              <div className="w-[48px] h-[2px] bg-[#d4a574]"></div>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-[24px]">
              <p className="text-[24px] font-bold text-[#162f21] tracking-[-0.6px] leading-[28.8px]">
                Verido makes the <span className="italic text-[#d4a574]">system visible</span>:
              </p>
            </div>

            {/* Cascade Steps and Dashboard Image */}
            <div className="relative mb-[24px]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
                {/* Left: Cascade Steps */}
                <div className="relative">
                  {/* Vertical Gradient Line */}
                  <div className="absolute left-[21.52px] top-[30px] w-[3px] h-[207.583px] bg-gradient-to-b from-[#162f21] via-[#d4a574] via-50% to-[#10b981]"></div>
                  
                  {/* 4 Steps */}
                  <div className="space-y-4">
                    {[
                      { num: "1", text: "How partner practices change" },
                      { num: "2", text: "How those changes affect agents" },
                      { num: "3", text: "How agent behaviour affects beneficiaries" },
                      { num: "4", text: "How beneficiary behaviour affects outcomes" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex items-center gap-4"
                      >
                        {/* Number Badge */}
                        <div className="relative w-[48px] h-[48px] bg-gradient-to-b from-[#6ee7b7] to-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] z-10">
                          <span className="text-[16px] font-black text-white leading-[24px]">{item.num}</span>
                        </div>

                        {/* Text Card */}
                        <div className="flex-1 bg-white rounded-[6px] border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] py-[14px] px-[18px]">
                          <p className="text-[14px] font-bold text-[#162f21] leading-[18.9px]">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Dashboard Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative w-[160px] mx-auto md:mx-0"
                >
                  {/* Teal Glow Background */}
                  <div className="absolute inset-0 bg-[rgba(16,185,129,0.2)] rounded-full blur-[100px] pointer-events-none"></div>
                  
                  {/* Dashboard Image */}
                  <div className="relative rounded-[16px] overflow-hidden border-[0.667px] border-[#e5e7e4] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.3)] w-[160px] h-[318px]">
                    <img
                      src={imgImageVeridoReportsDashboard}
                      alt="Verido Reports Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Banner - Centered Below Everything */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="bg-gradient-to-b from-white to-[#fffbf5] border-l-4 border-[#d4a574] rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] px-8 py-[19.67px] max-w-[602.76px]">
                <p className="text-[20px] font-bold text-[#162f21] text-center leading-[26px]">
                  This allows programmes to track <span className="italic text-[#d4a574]">change pathways,</span><br />
                  not assumptions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS & SUSTAINABILITY */}
      <section className="py-20 bg-gradient-to-b from-[#fffbf5] to-white">
        <div className="max-w-[793.7px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Decorative Lines with Users Icon */}
            <div className="flex items-center justify-center gap-[12px] mb-[12px]">
              <div className="w-[48px] h-[2px] bg-[#d4a574]"></div>
              
              {/* Users Icon */}
              <div className="relative w-5 h-5 shrink-0">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsUsers.p25397b80} stroke="#D4A574" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333"/>
                  <path d={svgPathsUsers.p2c4f400} stroke="#D4A574" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333"/>
                  <path d={svgPathsUsers.p16b3b0c0} stroke="#D4A574" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333"/>
                  <path d={svgPathsUsers.p1fe14e00} stroke="#D4A574" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333"/>
                </svg>
              </div>
              
              <div className="w-[48px] h-[2px] bg-[#d4a574]"></div>
            </div>

            {/* Title */}
            <div className="text-center mb-[12px]">
              <h2 className="text-[32px] font-black text-[#162f21] uppercase tracking-[8px] leading-[48px]">
                Partners & Sustainability
              </h2>
            </div>

            {/* Bottom Decorative Lines with Gold Circle */}
            <div className="flex items-center justify-center gap-[12px] mb-[31.67px]">
              <div className="w-[48px] h-[2px] bg-[#d4a574]"></div>
              <div className="w-[6px] h-[6px] bg-[#d4a574] rounded-full shrink-0"></div>
              <div className="w-[48px] h-[2px] bg-[#d4a574]"></div>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-[24px]">
              <h3 className="text-[28px] font-black text-[#162f21] tracking-[-0.7px] leading-[36.4px]">
                Verido becomes <span className="text-[#d4a574]">shared infrastructure</span>
              </h3>
            </div>

            {/* Three Partner Cards with Plus Signs */}
            <div className="flex items-center justify-center gap-4 mb-[24px] flex-wrap">
              {/* Banks */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-[6px] border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] py-[14px] px-[26px]"
              >
                <p className="text-[14px] font-bold text-[#162f21] leading-[21px]">Banks</p>
              </motion.div>

              {/* Plus Sign */}
              <div className="text-[24px] font-bold text-[#d4a574] leading-[36px]">+</div>

              {/* MFBs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-[6px] border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] py-[14px] px-[26px]"
              >
                <p className="text-[14px] font-bold text-[#162f21] leading-[21px]">MFBs</p>
              </motion.div>

              {/* Plus Sign */}
              <div className="text-[24px] font-bold text-[#d4a574] leading-[36px]">+</div>

              {/* Companies */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white rounded-[6px] border-2 border-[#e5e7e4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] py-[14px] px-[26px]"
              >
                <p className="text-[14px] font-bold text-[#162f21] leading-[21px]">Companies</p>
              </motion.div>
            </div>

            {/* Gradient Lines with Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-[12px] mb-[32px]"
            >
              <div className="w-[64px] h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
              <div className="text-center">
                <p className="text-[16px] font-bold text-[#162f21] leading-[25.6px]">
                  — used by banks, MFBs, and companies —
                </p>
                <p className="text-[16px] font-bold text-[#162f21] leading-[25.6px]">
                  continuing beyond the life of the programme.
                </p>
              </div>
              <div className="w-[64px] h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
            </motion.div>

            {/* Bottom Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="bg-gradient-to-b from-white to-[#fffbf5] border-l-4 border-[#d4a574] rounded-[6px] shadow-[3px_0px_4px_0px_rgba(0,0,0,0.25),0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] px-8 py-[20px] w-full max-w-[698px]">
                <p className="text-[18px] font-bold italic text-[#d4a574] text-center leading-[28.8px]">
                  Linking partner behaviour change to beneficiary outcomes over time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#162F21] to-[#0a1810] relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981] rounded-full blur-[150px]"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Ready to see how it works for your programme?
            </h3>
            <p className="text-lg text-[rgba(255,255,255,0.85)] mb-10 max-w-2xl mx-auto">
              Book a personalized demo and see how Verido tracks system change in real time
            </p>
            
            <a 
              href="mailto:hello@verido.com?subject=Book a Demo - Donor Programmes"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white px-10 py-5 rounded-lg text-lg font-bold shadow-[0px_20px_25px_-5px_rgba(16,185,129,0.3),0px_8px_10px_-6px_rgba(16,185,129,0.2)] hover:shadow-[0px_25px_30px_-5px_rgba(16,185,129,0.4),0px_10px_15px_-6px_rgba(16,185,129,0.3)] transition-all duration-300"
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

      {/* PLATFORM PREVIEW */}
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wide">
              From Activities to Outcomes
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.8)] max-w-3xl mx-auto mb-6">
              Verido helps programmes see change as it happens.
            </p>

            {/* GET IN TOUCH Banner */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#162F21] to-[#1a3826] border-l-4 border-[#10b981] rounded-r-xl shadow-xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#10b981]">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white font-bold text-sm">info@verido.app</span>
            </div>
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
                <div className="absolute inset-0 bg-[#10b981] opacity-20 blur-[80px] -z-10"></div>
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
                  className="w-full max-w-[600px] h-auto rounded-2xl shadow-2xl border border-[rgba(255,255,255,0.1)]"
                />
                <div className="absolute inset-0 bg-[#d4a574] opacity-10 blur-[80px] -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-16 bg-gradient-to-br from-[#162F21] to-[#0a1810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "Real-time", label: "Evidence collection" },
              { number: "3 layers", label: "System change tracking" },
              { number: "Live", label: "Behavioral data" },
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
                <div className="text-4xl md:text-5xl font-black text-[#10b981] mb-2">{stat.number}</div>
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
                q: "How is this different from our existing Monitoring & Evaluation system?",
                a: "Most Monitoring & Evaluation systems collect data after interventions happen. Verido captures behavioral data in real time as transactions occur, giving you evidence of change during implementation, not just at the end."
              },
              {
                q: "Do we need technical expertise to use Verido?",
                a: "No. We handle the technical setup and integration. Your field teams use the mobile app to capture data during their regular activities—no special training needed."
              },
              {
                q: "Can we customize it for our programme logic?",
                a: "Yes. We configure Verido to match your theory of change and the specific indicators you need to track. Every programme has different goals, and the system adapts accordingly."
              },
              {
                q: "What about participant privacy and data security?",
                a: "All data is encrypted, stored securely, and only accessible to authorized programme staff. We comply with international data protection standards and never share participant data with third parties."
              },
              {
                q: "How long does implementation take?",
                a: "Initial setup takes 1-2 weeks. You can start collecting data immediately after that. Most programmes run a pilot phase for 30-60 days before full rollout."
              },
              {
                q: "What's included in the cost?",
                a: "Setup, training, mobile and web access, ongoing support, and data hosting. Pricing is based on the number of participants you're tracking and the programme duration. Contact us for a custom quote."
              },
              {
                q: "Can we export data for our own analysis and donor reports?",
                a: "Absolutely. You own your data. Export raw data anytime for external analysis, donor reports, or academic research. We provide CSV, Excel, and API access."
              },
              {
                q: "What happens to our data if we stop using Verido?",
                a: "You get a complete export of all your data in standard formats. We delete our copies per your instructions. There's no vendor lock-in."
              }
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-xl border border-gray-200 hover:border-[#10b981] transition-all duration-300"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10b981] rounded-full blur-[150px]"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Ready to make system change visible
              <span className="block text-[#10b981]">in real time?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              See Verido in action with a personalized demo for your development programme
            </p>
            
            {/* Primary CTA - Book a Demo */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <a 
                href="mailto:hello@verido.com?subject=Book a Demo - Donor Programmes"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white px-10 py-6 rounded-lg text-lg font-bold shadow-[0px_20px_25px_-5px_rgba(16,185,129,0.3),0px_8px_10px_-6px_rgba(16,185,129,0.2)] hover:shadow-[0px_25px_30px_-5px_rgba(16,185,129,0.4),0px_10px_15px_-6px_rgba(16,185,129,0.3)] transition-all duration-300"
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

              {/* Secondary CTA - Download App (for existing partners) */}
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
              Already a partner? Download the app • Free on Android
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