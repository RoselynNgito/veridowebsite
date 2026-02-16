import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, Store, Users, Building2 } from "lucide-react";
import veridoLogo from "../../assets/Verido_Green_transparent.png";

const industries = [
  {
    path: "/agribusiness",
    label: "Agribusiness",
    icon: Store,
    description: "For aggregators, processors, input suppliers, and exporters"
  },
  {
    path: "/donors",
    label: "Donor Programmes",
    icon: Users,
    description: "For MSD, PSE, livelihoods, and access to finance programmes"
  },
  {
    path: "/companies",
    label: "Companies",
    icon: Building2,
    description: "For companies using agents/retailers (FMCG, distributors, service networks)"
  }
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll for enhanced styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isActive = (path: string) => {
    // Home page check
    if (path === '/') {
      return location.pathname === '/';
    }
    // Industry pages check
    return location.pathname === path;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg border-b-2 border-[#d4a574]' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" onClick={handleHomeClick} className="flex items-center group">
              <motion.img 
                src={veridoLogo} 
                alt="Verido" 
                className="h-9 w-auto transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Home Tab */}
              <Link
                to="/"
                onClick={handleHomeClick}
                className={`relative font-medium transition-colors px-4 py-2 rounded-lg group ${
                  isActive('/') ? 'text-[#0a4521]' : 'text-gray-600 hover:text-[#0a4521]'
                }`}
              >
                Home
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-[#0a4521] transition-all duration-300 ${
                  isActive('/') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </Link>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button className={`flex items-center gap-1.5 font-medium transition-colors px-4 py-2 rounded-lg ${
                  ['/agribusiness', '/donors', '/companies'].includes(location.pathname) 
                    ? 'text-[#0a4521]' 
                    : 'text-gray-600 hover:text-[#0a4521]'
                }`}>
                  Industries
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  {['/agribusiness', '/donors', '/companies'].includes(location.pathname) && (
                    <span className="absolute bottom-1 left-4 right-[calc(1rem+1.5rem)] h-0.5 bg-[#0a4521]" />
                  )}
                </button>
                
                {/* Enhanced Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <Link
                        key={industry.path}
                        to={industry.path}
                        className={`flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-all duration-200 group/item ${
                          index !== industries.length - 1 ? 'border-b border-gray-100' : ''
                        } ${isActive(industry.path) ? 'bg-[#162F21]/5' : ''}`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isActive(industry.path) 
                            ? 'bg-[#162F21] shadow-lg' 
                            : 'bg-gray-100 group-hover/item:bg-[#162F21] group-hover/item:shadow-lg'
                        }`}>
                          <Icon className={`w-5 h-5 transition-colors ${
                            isActive(industry.path) 
                              ? 'text-[#d4a574]' 
                              : 'text-gray-600 group-hover/item:text-[#d4a574]'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold mb-1 transition-colors ${
                            isActive(industry.path) 
                              ? 'text-[#162F21]' 
                              : 'text-gray-900 group-hover/item:text-[#162F21]'
                          }`}>
                            {industry.label}
                            {isActive(industry.path) && (
                              <span className="ml-2 text-xs text-[#d4a574]">• Active</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            {industry.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* About Tab */}
              <Link
                to="/#about"
                className={`relative font-medium transition-colors px-4 py-2 rounded-lg group ${
                  isActive('/#about') ? 'text-[#0a4521]' : 'text-gray-600 hover:text-[#0a4521]'
                }`}
              >
                About
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-[#0a4521] transition-all duration-300 ${
                  isActive('/#about') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </Link>

              {/* Contact Tab */}
              <button
                onClick={scrollToContact}
                className="relative text-gray-600 hover:text-[#0a4521] font-medium transition-colors px-4 py-2 rounded-lg group"
              >
                Contact
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#0a4521] opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {/* Home Link */}
                <Link
                  to="/"
                  onClick={handleHomeClick}
                  className={`block px-3 py-3 rounded-xl transition-all font-medium ${
                    isActive('/')
                      ? 'bg-[#162F21]/5 border-2 border-[#162F21] text-[#162F21]'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent text-gray-700'
                  }`}
                >
                  Home
                </Link>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Industries Section */}
                <div className="space-y-3">
                  <div className="font-bold text-gray-900 px-3 py-2 text-sm uppercase tracking-wide">
                    Industries
                  </div>
                  {industries.map((industry) => {
                    const Icon = industry.icon;
                    return (
                      <Link
                        key={industry.path}
                        to={industry.path}
                        className={`flex items-start gap-3 px-3 py-3 rounded-xl transition-all ${
                          isActive(industry.path)
                            ? 'bg-[#162F21]/5 border-2 border-[#162F21]'
                            : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isActive(industry.path) ? 'bg-[#162F21]' : 'bg-white'
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            isActive(industry.path) ? 'text-[#d4a574]' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold mb-0.5 ${
                            isActive(industry.path) ? 'text-[#162F21]' : 'text-gray-900'
                          }`}>
                            {industry.label}
                          </div>
                          <div className="text-xs text-gray-600">
                            {industry.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Other Links */}
                <Link
                  to="/#about"
                  className="block px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors font-medium"
                >
                  About
                </Link>
                <button
                  onClick={scrollToContact}
                  className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors font-medium"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}