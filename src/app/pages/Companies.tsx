import { motion } from "motion/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import WhyWeBuilt from "../components/WhyWeBuilt";
import { Button } from "../components/ui/button";
import { 
  BuildingIcon,
  StoreIcon,
  ShieldIcon, 
  LocationIcon, 
  PackageIcon, 
  DocumentIcon,
  TrendDownIcon,
  UserIcon,
  TargetIcon,
  LightningIcon,
  CheckIcon,
  AlertIcon,
  ChartIcon
} from "../components/icons/SvgIcons";

export default function Companies() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 1. HERO - Industry Pain */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#162F21] to-[#0a1810]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-10 w-96 h-96 bg-[#00C896] rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#00C896]/20 rounded-full text-[#00C896] font-semibold mb-6">
              <BuildingIcon className="text-[#00C896]" size={20} />
              For Distribution Companies
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stop Losing Money to
              <span className="block text-[#00C896]">
                Hidden Retailer Risk
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              FMCGs, wholesalers, and manufacturers—eliminate guesswork and make 
              data-driven decisions about retailer credit and territory expansion.
            </p>
            <Button 
              size="lg" 
              className="bg-[#00C896] hover:bg-[#00C896]/90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Free Pilot →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. PAIN STATEMENT - Amplify Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Problem: Trust Without Evidence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're making critical credit decisions based on relationships and gut feeling—
              and it's costing you millions in trade credit defaults.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                Icon: TrendDownIcon,
                title: "30-40% Default Rates",
                description: "Trade credit defaults are crushing your cash flow and limiting growth potential"
              },
              {
                Icon: UserIcon,
                title: "Relationship-Based Decisions",
                description: "Sales agents recommend retailers based on personal relationships, not creditworthiness"
              },
              {
                Icon: TargetIcon,
                title: "Expansion Paralysis",
                description: "You can't confidently enter new territories because you have no data on retailer risk"
              },
              {
                Icon: AlertIcon,
                title: "No Performance Tracking",
                description: "You can't identify which agents, territories, or products are actually profitable"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border-l-4 border-red-500"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <item.Icon className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5 SCORING SYSTEMS - The Solution */}
      <section className="py-20 bg-gradient-to-br from-[#162F21] to-[#0a1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              5 Scoring Systems That Eliminate Guesswork
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Evidence-based decision making for every layer of your distribution network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Retailer Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-[#00C896] rounded-xl flex items-center justify-center mb-6">
                <StoreIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Retailer Score</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Payment history and creditworthiness",
                  "Store size and sales volume trends",
                  "Order frequency and consistency",
                  "Loyalty and relationship strength"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="text-[#00C896] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Agent Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-[#00C896] rounded-xl flex items-center justify-center mb-6">
                <ShieldIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Agent Score</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Default rate of recommended retailers",
                  "Sales performance and growth rate",
                  "Territory coverage efficiency",
                  "Customer satisfaction ratings"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="text-[#00C896] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Territory Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-[#00C896] rounded-xl flex items-center justify-center mb-6">
                <LocationIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Territory Score</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Regional default rates and trends",
                  "Market saturation and competition levels",
                  "Economic indicators and purchasing power",
                  "Infrastructure and logistics costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="text-[#00C896] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Product Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 bg-[#00C896] rounded-xl flex items-center justify-center mb-6">
                <PackageIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Product Score</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Profitability by product category",
                  "Repayment rates by SKU/product line",
                  "Demand forecasting and seasonality",
                  "Margin analysis and inventory turnover"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="text-[#00C896] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Transaction Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 bg-[#00C896] rounded-xl flex items-center justify-center mb-6">
                <DocumentIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transaction Score</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Real-time risk assessment per order",
                  "Credit limit recommendations",
                  "Anomaly detection and fraud alerts",
                  "Payment prediction modeling"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="text-[#00C896] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. OUTCOMES - Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real, measurable outcomes from day one
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                Icon: TrendDownIcon,
                title: "Reduce Defaults by 35%",
                description: "Cut bad debt with evidence-based credit approvals"
              },
              {
                Icon: LightningIcon,
                title: "Faster Retailer Onboarding",
                description: "Approve creditworthy retailers in minutes, not weeks"
              },
              {
                Icon: TargetIcon,
                title: "Confident Territory Expansion",
                description: "Enter new markets with data-backed confidence"
              },
              {
                Icon: ChartIcon,
                title: "Better ROI on Inventory",
                description: "Stock the right products in the right locations"
              }
            ].map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-[#00C896]/10 rounded-lg flex items-center justify-center mb-4">
                  <outcome.Icon className="text-[#00C896]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT IT IS/ISN'T - Clarity */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Verido Is (And Isn't)
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* What It Is */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-[#00C896]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00C896] rounded-lg flex items-center justify-center">
                  <CheckIcon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What It IS</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "A decision-support tool that gives you evidence",
                  "A system that scores risk at multiple levels",
                  "Built for distribution networks and wholesalers",
                  "Designed to work with your existing processes",
                  "A way to make smarter credit decisions faster"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00C896] mr-3 text-xl font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What It Isn't */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border-2 border-gray-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">✕</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What It ISN'T</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Not a loan/credit provider—you still control funding",
                  "Not a replacement for sales agents or relationships",
                  "Not a 'set it and forget it' black box",
                  "Not an accounting or ERP system",
                  "Not requiring you to change your entire workflow"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-600 mr-3 text-xl font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. WHY WE BUILT VERIDO - Trust */}
      <WhyWeBuilt />

      {/* 7. HOW TO START - Clear Path */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're launching with a pilot program—no long-term commitment required
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Book a Pilot Call",
                description: "15-minute conversation to understand your network and pain points"
              },
              {
                step: "2",
                title: "30-Day Pilot Program",
                description: "Test the system with a segment of your retailer network"
              },
              {
                step: "3",
                title: "See the Results",
                description: "Review scoring data and measure impact on defaults and decisions"
              },
              {
                step: "4",
                title: "Scale Across Network",
                description: "Roll out to your entire distribution network with confidence"
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
                <div className="bg-white border border-[#e5e5e5] rounded-2xl p-10 hover:border-[#162F21] transition-all duration-300 hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] text-center h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#162F21] to-[#0a1810] rounded-2xl flex items-center justify-center text-3xl font-bold text-white mb-8 mx-auto shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl text-gray-300">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-[#162F21] hover:bg-[#162F21]/90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Pilot Call Now
            </Button>
            <p className="mt-4 text-gray-600">
              No credit card required • 30-day pilot • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ - Remove Objections */}
      <FAQ />

      {/* 9. CONTACT FORM - Convert */}
      <div id="contact-form">
        <ContactForm />
      </div>

      {/* 10. FOOTER */}
      <Footer />

      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTopButton />
    </div>
  );
}