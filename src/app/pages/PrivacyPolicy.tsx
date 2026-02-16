import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-[#162F21] to-[#0a1810] text-white rounded-2xl p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last Updated: February 16, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              At Verido ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website, and services (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our Services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access or use our Services.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              1. Information We Collect
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">1.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide when using our Services, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name, email address, phone number, and business contact details</li>
              <li>Company name, job title, and professional information</li>
              <li>Account credentials (username and encrypted password)</li>
              <li>Payment and billing information (processed securely through third-party payment processors)</li>
              <li>Communication preferences and marketing opt-ins</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">1.2 Business and Transaction Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our risk assessment platform, we collect:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Retailer and agent data (names, locations, transaction histories)</li>
              <li>Distribution network information and geographic data</li>
              <li>Financial transaction records and payment histories</li>
              <li>Credit assessments and risk scoring data</li>
              <li>Business performance metrics and analytics</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">1.3 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you access our Services, we automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Device information (type, operating system, browser type, unique device identifiers)</li>
              <li>IP address and general location data</li>
              <li>Usage data (pages viewed, features accessed, time spent, click patterns)</li>
              <li>Cookies and similar tracking technologies (see Cookie Policy below)</li>
              <li>Log files and diagnostic data</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our risk assessment platform and related services</li>
              <li><strong>Risk Analysis:</strong> To generate credit scores, risk assessments, and actionable insights for your distribution network</li>
              <li><strong>Account Management:</strong> To create and manage your account, process transactions, and provide customer support</li>
              <li><strong>Communication:</strong> To send service updates, security alerts, technical notices, and respond to inquiries</li>
              <li><strong>Marketing:</strong> To send promotional materials, newsletters, and product updates (with your consent)</li>
              <li><strong>Analytics:</strong> To analyze usage patterns, improve user experience, and develop new features</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, security breaches, and technical issues</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations, enforce our terms, and protect our rights</li>
            </ul>
          </section>

          {/* 3. How We Share Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              3. How We Share Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (cloud hosting, payment processing, analytics, customer support)</li>
              <li><strong>Business Partners:</strong> With integration partners and distributors you authorize (with your explicit consent)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notification to affected users)</li>
              <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of Verido, our users, or the public</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information with specific third parties</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              All third-party service providers are contractually bound to protect your information and use it only for the purposes we specify.
            </p>
          </section>

          {/* 4. Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              4. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>256-bit SSL/TLS encryption for data transmission</li>
              <li>AES-256 encryption for data at rest</li>
              <li>Multi-factor authentication (MFA) options</li>
              <li>Role-based access controls and permission systems</li>
              <li>Regular security audits and penetration testing</li>
              <li>Secure cloud infrastructure with industry-leading providers</li>
              <li>Employee training on data protection and security practices</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* 5. Your Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              5. Your Rights and Choices
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
              <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise these rights, contact us at <a href="mailto:privacy@verido.com" className="text-[#d4a574] hover:underline font-semibold">privacy@verido.com</a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              We will respond to your request within 30 days. Please note that certain information may be retained as required by law or for legitimate business purposes.
            </p>
          </section>

          {/* 6. Cookies and Tracking Technologies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality and security</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our Services</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Track your activity for targeted advertising (with your consent)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can control cookies through your browser settings. Disabling certain cookies may limit functionality of our Services.
            </p>
          </section>

          {/* 7. Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              7. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide our Services and maintain your account</li>
              <li>Comply with legal, tax, and accounting requirements</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Improve our Services and conduct analytics</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When information is no longer needed, we securely delete or anonymize it. Transaction and financial data may be retained for up to 7 years as required by law.
            </p>
          </section>

          {/* 8. International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              8. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place through standard contractual clauses, adequacy decisions, or other lawful transfer mechanisms. By using our Services, you consent to such transfers.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              9. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* 10. Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of material changes by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Posting the updated policy on our website with a new "Last Updated" date</li>
              <li>Sending an email notification to your registered email address</li>
              <li>Displaying a prominent notice in our mobile application</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of our Services after changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              11. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#d4a574]">
              <p className="font-semibold text-gray-900 mb-2">Verido Privacy Team</p>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong> <a href="mailto:privacy@verido.com" className="text-[#d4a574] hover:underline">privacy@verido.com</a>
              </p>
              <p className="text-gray-700 mb-1">
                <strong>General Inquiries:</strong> <a href="mailto:hello@verido.com" className="text-[#d4a574] hover:underline">hello@verido.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> We aim to respond within 3-5 business days
              </p>
            </div>
          </section>

          {/* GDPR/CCPA Specific Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              12. Additional Rights for EU and California Residents
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">For EU/EEA Residents (GDPR)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are located in the European Union or European Economic Area, you have additional rights under GDPR, including the right to lodge a complaint with your local data protection authority.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">For California Residents (CCPA)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              California residents have specific rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Right to know what personal information is collected, used, and shared</li>
              <li>Right to delete personal information (with certain exceptions)</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
