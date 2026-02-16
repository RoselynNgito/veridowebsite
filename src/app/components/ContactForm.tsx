import { motion } from "motion/react";
import { Button } from "./ui/button";
import { PhoneIcon, MailIcon } from "./icons/SvgIcons";
import { useState } from "react";
import CustomDropdown from "./CustomDropdown";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    networkSize: "",
    industry: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const industryOptions = [
    { value: "", label: "Select Industry" },
    { value: "agribusiness", label: "Agribusiness" },
    { value: "donor", label: "Donor Programme / NGO" },
    { value: "fmcg", label: "FMCG / Distribution" },
    { value: "other", label: "Other" },
  ];

  const networkSizeOptions = [
    { value: "", label: "Select Size" },
    { value: "1-50", label: "1-50 partners" },
    { value: "51-200", label: "51-200 partners" },
    { value: "201-500", label: "201-500 partners" },
    { value: "500+", label: "500+ partners" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 rounded-full bg-[#162F21]/10 border-2 border-[#162F21]/30 shadow-sm">
            {/* Get Started SVG Icon - Form/Document */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="2" width="16" height="20" rx="2" stroke="#162F21" strokeWidth="2"/>
              <path d="M8 7H16M8 11H16M8 15H12" stroke="#162F21" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-base font-bold text-[#162F21] tracking-wide uppercase">Get Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Free Pilot Call
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how Verido can help reduce risk in your distribution network
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <p className="text-gray-600">
                Fill out the form and we'll be in touch within 24 hours to schedule your 15-minute pilot call.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Phone</h4>
                  <p className="text-gray-600 text-sm">+254 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MailIcon className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                  <p className="text-gray-600 text-sm">info@verido.app</p>
                </div>
              </div>
            </div>

            <div className="bg-[#162F21] rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">30-Day Free Pilot</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span> No credit card required
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span> Cancel anytime
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span> Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span> Full feature access
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#162F21] focus:border-[#162F21] outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#162F21] focus:border-[#162F21] outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#162F21] focus:border-[#162F21] outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#162F21] focus:border-[#162F21] outline-none transition-all"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-900 mb-2">
                    Industry *
                  </label>
                  <CustomDropdown
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleDropdownChange}
                    options={industryOptions}
                    placeholder="Select Industry"
                  />
                </div>

                <div>
                  <label htmlFor="networkSize" className="block text-sm font-semibold text-gray-900 mb-2">
                    Network Size
                  </label>
                  <CustomDropdown
                    id="networkSize"
                    name="networkSize"
                    value={formData.networkSize}
                    onChange={handleDropdownChange}
                    options={networkSizeOptions}
                    placeholder="Select Size"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell us about your challenge
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#162F21] focus:border-[#162F21] outline-none transition-all resize-none"
                    placeholder="What challenges are you facing with credit risk or distribution network management?"
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#162F21] hover:bg-[#162F21]/90 text-white font-bold"
                >
                  Book Your Free Pilot Call
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  We'll respond within 24 hours to schedule your call
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}