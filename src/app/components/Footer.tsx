import { Link } from "react-router";
import imgVeridoLogo from "../../assets/Verido_White_transparent.png";
export default function Footer() {
  return (
    <footer className="bg-[#162F21] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <img 
              src={imgVeridoLogo} 
              alt="Verido" 
              className="h-8 mb-4"
            />
            <p className="text-gray-300 text-sm">
              Data-driven risk assessment for distribution networks.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/agribusiness" className="text-gray-300 hover:text-white transition-colors">
                  Agribusiness
                </Link>
              </li>
              <li>
                <Link to="/donors" className="text-gray-300 hover:text-white transition-colors">
                  Donor Programmes
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-300 hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#partner" className="text-gray-300 hover:text-white transition-colors">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
  <a href="/privacy-policy.html" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
</li>
              <li>
  <a href="/terms-of-service.html" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Verido. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a href="/privacy-policy.html" className="hover:text-[#d4a574] transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms-of-service.html" className="hover:text-[#d4a574] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}