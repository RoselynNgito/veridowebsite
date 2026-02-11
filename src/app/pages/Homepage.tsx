import { Link } from "react-router";
import { motion } from "motion/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import WhyWeBuilt from "../components/WhyWeBuilt";
import CleanHero from "../components/CleanHero";
import TeamCard from "../components/TeamCard";
import StatsSection from "../components/StatsSection";
import CleanCard from "../components/CleanCard";
import BusinessToolCard from "../components/BusinessToolCard";
import ComparisonTable from "../components/ComparisonTable";
import { Button } from "../components/ui/button";
import { 
  PlantIcon, 
  HandshakeIcon, 
  BuildingIcon, 
  MoneyIcon, 
  ChartIcon, 
  UserIcon, 
  DatabaseIcon, 
  RocketIcon,
  ShieldIcon,
  LocationIcon,
  PackageIcon,
  DocumentIcon,
  CheckIcon,
  CalculatorIcon,
  TagIcon,
  ReceiptIcon,
  WalletIcon,
  PieChartIcon,
  UserCheckIcon,
  TrendUpIcon,
  AlertIcon
} from "../components/icons/SvgIcons";
import mobileAppImage from "figma:asset/a8433f9d07848bbce11bec936986d3e94f9360a0.png";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 1. HERO */}
      <CleanHero
        badge="Data-Driven Risk Assessment Platform"
        backgroundImage="https://images.unsplash.com/photo-1602427576418-ff392aa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFya2V0JTIwd29tYW4lMjBzZWxsaW5nJTIwZnJlc2glMjBmb29kJTIwcHJvZHVjZSUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzcwNzQ2NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        title={
          <>
            Know Who to Trust.
            <br />
            <span className="text-[#d4a574]">Grow Your Business.</span>
          </>
        }
        subtitle="Use data to decide who gets credit, track every payment, and manage your business from your phone."
        ctaText="Download Free on Play Store"
        onCtaClick={() => window.open('https://play.google.com/store', '_blank')}
      />

      {/* 2. STATS */}
      <StatsSection
        stats={[
          { value: "40%", label: "Reduction in Defaults", sublabel: "Industry average with Verido" },
          { value: "5x", label: "Faster Approvals", sublabel: "Minutes instead of weeks" },
          { value: "100%", label: "Data-Backed Decisions", sublabel: "No more guesswork" }
        ]}
      />

      {/* 3. CHOOSE YOUR INDUSTRY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 rounded-full bg-[#162F21]/10 border-2 border-[#162F21]/30 shadow-sm">
              {/* Industries SVG Icon - Grid/Categories */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="13" y="3" width="7" height="7" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="3" y="13" width="7" height="7" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="13" y="13" width="7" height="7" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-base font-bold text-[#162F21] tracking-wide uppercase">Industries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verido adapts to your specific distribution network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Agribusiness */}
            <Link to="/agribusiness" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#162F21] hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PlantIcon className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agribusiness</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  For aggregators, processors, input suppliers, and exporters managing credit risk
                </p>
                <div className="flex items-center gap-2 text-[#162F21] text-lg font-bold group-hover:gap-3 transition-all">
                  View Details
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            </Link>

            {/* Donors & Development */}
            <Link to="/donors" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#162F21] hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HandshakeIcon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Donors & Development</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  For MSD, PSE, livelihoods, and access to finance programmes
                </p>
                <div className="flex items-center gap-2 text-[#162F21] text-lg font-bold group-hover:gap-3 transition-all">
                  View Details
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            </Link>

            {/* Distribution Companies */}
            <Link to="/companies" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#162F21] hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BuildingIcon className="text-purple-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Distribution Companies</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  For companies using agents/retailers (FMCG, distributors, service networks)
                </p>
                <div className="flex items-center gap-2 text-[#162F21] text-lg font-bold group-hover:gap-3 transition-all">
                  View Details
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS MANAGEMENT TOOLS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 rounded-full bg-[#162F21]/10 border-2 border-[#162F21]/30 shadow-sm">
              {/* Business Tools SVG Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="7" height="7" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="14" y="6" width="7" height="7" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="3" y="17" width="7" height="4" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="14" y="17" width="7" height="4" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-base font-bold text-[#162F21] tracking-wide uppercase">Business Tools</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Manage Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Replace relationship guesswork with powerful data-driven tools designed for small businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BusinessToolCard
              icon={<CalculatorIcon size={40} />}
              title="Till or Cash Register"
              description="Record sales with ease and keep track of every transaction in real-time"
              delay={0}
            />
            <BusinessToolCard
              icon={<TagIcon size={40} />}
              title="Set Profitable Price"
              description="Manage costs effectively and set prices that ensure profitability"
              delay={0.1}
            />
            <BusinessToolCard
              icon={<ReceiptIcon size={40} />}
              title="Your Debt Collector"
              description="Track payments and manage outstanding debts efficiently"
              delay={0.2}
            />
            <BusinessToolCard
              icon={<WalletIcon size={40} />}
              title="Your Cash Flow Manager"
              description="Monitor your cash flow in real-time and make informed decisions"
              delay={0.3}
            />
            <BusinessToolCard
              icon={<PieChartIcon size={40} />}
              title="Your Accountant"
              description="Get comprehensive financial reporting and insights at your fingertips"
              delay={0.4}
            />
            <BusinessToolCard
              icon={<UserCheckIcon size={40} />}
              title="Your Customer Relationship Manager"
              description="Build stronger relationships with detailed client insights and history"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* 5. 5 SCORING SYSTEMS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 rounded-full bg-[#d4a574]/10 border-2 border-[#d4a574]/30 shadow-sm">
              {/* Core Features SVG Icon - Star/Badge */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-base font-bold text-[#162F21] tracking-wide uppercase">Core Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              5 Risk Scoring Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant risk scores across every dimension of your distribution network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            <TeamCard
              icon={<CheckIcon size={48} />}
              title="Data Quality Score"
              description="Can I trust their records?"
              accentColor="#6366f1"
              delay={0}
            />
            <TeamCard
              icon={<ShieldIcon size={48} />}
              title="Verido Trust Score"
              description="Are they consistent over time?"
              accentColor="#8b5cf6"
              delay={0.1}
            />
            <TeamCard
              icon={<TrendUpIcon size={48} />}
              title="Trade Credit Score"
              description="How much exposure is safe right now?"
              accentColor="#ec4899"
              delay={0.2}
            />
            <TeamCard
              icon={<AlertIcon size={48} />}
              title="Consignment Readiness Score"
              description="Can I release stock before payment?"
              accentColor="#d4a574"
              delay={0.3}
            />
            <TeamCard
              icon={<ChartIcon size={48} />}
              title="Loan Readiness & Safe Loan Size"
              description="Are they ready for bigger or third-party finance?"
              accentColor="#10b981"
              delay={0.4}
            />
          </div>

          {/* Visual Score Example */}
          <div className="max-w-5xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Instant Risk Scores
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* HIGH RISK CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Circular Progress Ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#fee2e2"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#ef4444"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(28 / 100) * 339.292} 339.292`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  {/* Score Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-red-500">28</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-bold text-red-700 uppercase tracking-wide mb-2">High Risk</h4>
                  <p className="text-sm text-red-600 font-medium">Don't approve credit</p>
                </div>

                {/* Warning Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertIcon className="text-white" size={16} />
                </div>
              </motion.div>

              {/* MEDIUM RISK CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-200 hover:border-[#d4a574] hover:shadow-xl transition-all duration-300 group"
              >
                {/* Circular Progress Ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#fef3c7"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#d4a574"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(65 / 100) * 339.292} 339.292`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  {/* Score Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-[#d4a574]">65</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-bold text-amber-700 uppercase tracking-wide mb-2">Medium Risk</h4>
                  <p className="text-sm text-amber-600 font-medium">Approve with conditions</p>
                </div>

                {/* Caution Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>

              {/* LOW RISK CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Circular Progress Ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#dcfce7"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#22c55e"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(94 / 100) * 339.292} 339.292`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  {/* Score Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-green-500">94</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-bold text-green-700 uppercase tracking-wide mb-2">Low Risk</h4>
                  <p className="text-sm text-green-600 font-medium">Safe to approve</p>
                </div>

                {/* Check Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckIcon className="text-white" size={16} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT IS/ISN'T */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 rounded-full bg-[#162F21]/10 border-2 border-[#162F21]/30 shadow-sm">
              {/* Understanding Verido SVG Icon - Info Circle */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#162F21" strokeWidth="2"/>
                <path d="M12 16V12M12 8H12.01" stroke="#162F21" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-base font-bold text-[#162F21] tracking-wide uppercase">Understanding Verido</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Verido Is (and Isn't)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear expectations before you start
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT COLUMN - VERIDO IS */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-700 mb-6 text-center flex items-center justify-center gap-3">
                {/* Green Checkmark Icon in Circle */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#22c55e" stroke="#16a34a" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Verido IS
              </h3>
              
                {/* Card 1: Risk Intelligence Platform */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChartIcon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Risk Intelligence Platform</h4>
                    <p className="text-sm text-gray-600">5 scoring systems analyze your distribution network</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Evidence-Based Decisions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DatabaseIcon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Evidence-Based Decisions</h4>
                    <p className="text-sm text-gray-600">Data-driven insights replace gut feelings</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Mobile + Web Tools */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="4" width="14" height="16" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M9 20H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="2" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Mobile + Web Tools</h4>
                    <p className="text-sm text-gray-600">Field teams and management work seamlessly</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Built for Distribution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PackageIcon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Built for Distribution</h4>
                    <p className="text-sm text-gray-600">Custom-fit for FMCG, agribusiness, wholesale</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 5: Fast & Simple */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {/* Stopwatch/Timer SVG Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="14" r="8" stroke="white" strokeWidth="2"/>
                      <path d="M12 10V14L15 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M10 2H14M12 2V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M17 6L18.5 4.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Fast & Simple</h4>
                    <p className="text-sm text-gray-600">Onboard retailers in under 2 minutes</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN - VERIDO ISN'T */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-700 mb-6 text-center flex items-center justify-center gap-3">
                {/* Red X Icon in Circle */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                  <path d="M15 9L9 15M9 9L15 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Verido is NOT
              </h3>
              
              {/* Card 1: NOT a Credit Bureau */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white rounded-2xl p-6 border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                      <path d="M15 9L9 15M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">NOT a Credit Bureau</h4>
                    <p className="text-sm text-gray-600">We don't report to credit agencies</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: NOT a Lender */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                      <path d="M12 6V18M9 8H13.5C14.0304 8 14.5391 8.21071 14.9142 8.58579C15.2893 8.96086 15.5 9.46957 15.5 10C15.5 10.5304 15.2893 11.0391 14.9142 11.4142C14.5391 11.7893 14.0304 12 13.5 12H9V8ZM9 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H9V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">NOT a Lender</h4>
                    <p className="text-sm text-gray-600">We don't provide capital or loans</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: NOT an ERP System */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2"/>
                      <path d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74486 20.1656 6.23582 20.3766 5.705 20.3766C5.17418 20.3766 4.66514 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95235 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87235 8.38291 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74486 3.62343 6.23582 3.62343 5.705C3.62343 5.17418 3.83445 4.66514 4.21 4.29C4.58514 3.91445 5.09418 3.70343 5.625 3.70343C6.15582 3.70343 6.66486 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30291 4.95235 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87235 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09418 20.2966 5.625C20.2966 6.15582 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 3L21 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">NOT an ERP System</h4>
                    <p className="text-sm text-gray-600">We complement, not replace your systems</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: NOT Generic Software */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M3 9H21M9 3V21" stroke="white" strokeWidth="2"/>
                      <path d="M4 4L20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">NOT Generic Software</h4>
                    <p className="text-sm text-gray-600">Purpose-built for distribution networks</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 5: NOT Complicated */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 4L20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">NOT Complicated</h4>
                    <p className="text-sm text-gray-600">No technical expertise required</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WE BUILT VERIDO */}
      <WhyWeBuilt />

      {/* 8. HOW TO START */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 rounded-full bg-[#162F21]/10 border-2 border-[#162F21]/30 shadow-sm">
              {/* Getting Started SVG Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#162F21" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-base font-bold text-[#162F21] tracking-wide uppercase">Getting Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              30-day pilot program • No long-term commitment • Cancel anytime
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { 
                step: "1", 
                title: "Book a Pilot Call", 
                description: "15-minute conversation about your network",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              { 
                step: "2", 
                title: "30-Day Pilot", 
                description: "Test with a segment of your network",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                    <path d="M16 2V6M8 2V6M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                )
              },
              { 
                step: "3", 
                title: "Review Results", 
                description: "See impact on defaults and decisions",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H21M7 13L12 8L16 12L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="8" r="2" fill="white"/>
                  </svg>
                )
              },
              { 
                step: "4", 
                title: "Scale Up", 
                description: "Roll out across your entire network",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="2" fill="white"/>
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#162F21] transition-all duration-300 hover:shadow-xl text-center h-full flex flex-col">
                  {/* Icon with Step Badge */}
                  <div className="relative mb-6 mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#162F21] to-[#0a1810] rounded-2xl flex items-center justify-center shadow-lg">
                      {item.icon}
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-3xl text-gray-300 z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#162F21] px-12 py-7 text-lg font-bold shadow-xl"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Free Pilot Today
            </Button>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. CONTACT FORM */}
      <div id="contact-form">
        <ContactForm />
      </div>

      {/* 11. DOWNLOAD ON PLAY STORE */}
      <section className="py-24 bg-gradient-to-br from-[#162F21] to-[#0a1810] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a574] rounded-full blur-[150px]"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Take Verido
              <span className="block text-[#d4a574]">wherever you go</span>
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.8)] mb-10 max-w-3xl mx-auto leading-relaxed">
              Download the Verido mobile app and manage your distribution network from anywhere
            </p>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.verido" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4a574] to-[#c99a66] hover:from-[#c99a66] hover:to-[#b88f5c] text-white px-10 py-6 rounded-lg text-lg font-bold shadow-[0px_20px_25px_-5px_rgba(212,165,116,0.3),0px_8px_10px_-6px_rgba(212,165,116,0.2)] hover:shadow-[0px_25px_30px_-5px_rgba(212,165,116,0.4),0px_10px_15px_-6px_rgba(212,165,116,0.3)] transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="currentColor"/>
              </svg>
              Download on Play Store
            </a>

            <p className="mt-5 text-sm text-[rgba(255,255,255,0.6)]">
              Available for Android • Free to download
            </p>
          </motion.div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <Footer />
    </div>
  );
}