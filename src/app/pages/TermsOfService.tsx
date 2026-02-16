import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-[#162F21] to-[#0a1810] text-white rounded-2xl p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-gray-300">Last Updated: February 16, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Verido. These Terms of Service ("Terms") govern your access to and use of Verido's mobile application, website, and related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>PLEASE READ THESE TERMS CAREFULLY.</strong> If you do not agree to these Terms, you may not access or use our Services.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By creating an account, downloading our mobile application, or using any of our Services, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You have read, understood, and agree to be bound by these Terms</li>
              <li>You have read and agree to our Privacy Policy</li>
              <li>You are at least 18 years old and have the legal capacity to enter into these Terms</li>
              <li>If you are using the Services on behalf of an organization, you have the authority to bind that organization to these Terms</li>
            </ul>
          </section>

          {/* 2. Description of Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              2. Description of Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Verido provides a risk assessment platform designed for distribution networks, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Credit scoring and risk analysis for retailers, agents, and distribution partners</li>
              <li>Five specialized scoring systems (Location, Transaction, Behaviour, Payment, Network Scores)</li>
              <li>Data analytics and business intelligence tools</li>
              <li>Mobile and web-based dashboard access</li>
              <li>Integration capabilities with third-party systems</li>
              <li>Reporting and monitoring tools for distribution networks</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice.
            </p>
          </section>

          {/* 3. Account Registration and Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              3. Account Registration and Security
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features, you must create an account by providing accurate, complete, and current information. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide truthful and accurate registration information</li>
              <li>Maintain and update your information to keep it accurate and current</li>
              <li>Not create an account using false or misleading information</li>
              <li>Not create multiple accounts for the same individual or organization</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">3.2 Account Security</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use a strong, unique password and keep it confidential</li>
              <li>Enable multi-factor authentication when available</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
              <li>Not share your account credentials with others</li>
              <li>Not allow others to access your account</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Verido is not liable for any loss or damage arising from your failure to protect your account credentials.
            </p>
          </section>

          {/* 4. Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              4. Acceptable Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree NOT to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Use the Services for any fraudulent, illegal, or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the Services</li>
              <li>Interfere with or disrupt the Services or servers/networks connected to the Services</li>
              <li>Introduce viruses, malware, or other harmful code</li>
              <li>Reverse engineer, decompile, or disassemble any software or technology</li>
              <li>Scrape, copy, or extract data from the Services using automated means</li>
              <li>Resell, sublicense, or distribute the Services without authorization</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Harass, abuse, or harm others through the Services</li>
              <li>Upload false, misleading, or deceptive information</li>
            </ul>
          </section>

          {/* 5. User Data and Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              5. User Data and Content
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">5.1 Your Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of all data you upload or input into the Services ("User Data"). By providing User Data, you grant Verido a worldwide, non-exclusive, royalty-free license to use, process, store, and analyze your User Data solely to provide and improve the Services.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">5.2 Data Accuracy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for the accuracy, quality, and legality of your User Data. You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You have the right to provide the User Data to Verido</li>
              <li>The User Data does not violate any third-party rights or applicable laws</li>
              <li>You have obtained all necessary consents to collect and share the User Data</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">5.3 Data Backup</h3>
            <p className="text-gray-700 leading-relaxed">
              While we implement backup procedures, you are responsible for maintaining your own backup copies of critical User Data. Verido is not liable for loss or corruption of User Data.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              6. Intellectual Property Rights
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">6.1 Verido's Ownership</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Services, including all software, algorithms, designs, text, graphics, logos, and other content (excluding User Data), are owned by Verido and protected by copyright, trademark, patent, and other intellectual property laws.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">6.2 Limited License</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subject to these Terms, Verido grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes. This license does not include the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Copy, modify, or create derivative works of the Services</li>
              <li>Sell, rent, lease, or sublicense access to the Services</li>
              <li>Remove or modify any proprietary notices or labels</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">6.3 Feedback</h3>
            <p className="text-gray-700 leading-relaxed">
              If you provide feedback, suggestions, or ideas about the Services, you grant Verido an unrestricted, perpetual, irrevocable, royalty-free license to use such feedback without compensation or attribution.
            </p>
          </section>

          {/* 7. Payment and Billing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              7. Payment and Billing
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">7.1 Fees</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Certain features of the Services require payment of fees. You agree to pay all applicable fees as described on our pricing page or in your service agreement. Fees are:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Charged in advance on a subscription basis (monthly or annually)</li>
              <li>Non-refundable except as required by law or explicitly stated</li>
              <li>Subject to change with 30 days' notice to existing customers</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">7.2 Payment Methods</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must provide valid payment information and authorize us to charge your payment method for all fees. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Keep your payment information current and accurate</li>
              <li>Pay all applicable taxes (VAT, GST, sales tax, etc.)</li>
              <li>Resolve any payment disputes directly with your financial institution</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">7.3 Late Payment and Suspension</h3>
            <p className="text-gray-700 leading-relaxed">
              If payment is not received by the due date, we may suspend or terminate your access to the Services. Late payments may incur additional charges as permitted by law.
            </p>
          </section>

          {/* 8. Term and Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              8. Term and Termination
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">8.1 Term</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms begin when you first access the Services and continue until terminated by either party.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">8.2 Termination by You</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may terminate your account at any time by contacting customer support or using the account deletion feature. Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your access to the Services will cease immediately</li>
              <li>You will not receive a refund for any prepaid fees (unless required by law)</li>
              <li>Your User Data may be deleted after a 30-day grace period</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">8.3 Termination by Verido</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may suspend or terminate your access to the Services at any time, with or without cause, including if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You violate these Terms or our policies</li>
              <li>Your account remains inactive for an extended period</li>
              <li>Your payment is overdue</li>
              <li>We discontinue the Services or your subscription plan</li>
              <li>Required by law or legal process</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">8.4 Effect of Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, all licenses granted to you will immediately cease. Sections that by their nature should survive termination (including payment obligations, limitations of liability, and dispute resolution) will remain in effect.
            </p>
          </section>

          {/* 9. Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              9. Disclaimers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 uppercase font-semibold">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Verido disclaims all warranties, express or implied, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Warranties regarding accuracy, reliability, or completeness of risk assessments and scores</li>
              <li>Warranties that the Services will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding results obtained from using the Services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Risk Assessment Disclaimer:</strong> Verido's scores and risk assessments are analytical tools based on available data and algorithms. They do not guarantee future behavior or payment performance. You are solely responsible for all credit and business decisions made using our Services.
            </p>
          </section>

          {/* 10. Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VERIDO SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, goodwill, or business opportunities</li>
              <li>Losses resulting from decisions made based on risk scores or assessments</li>
              <li>Damages arising from unauthorized access to or use of our servers or your data</li>
              <li>Damages from errors, interruptions, or inaccuracies in the Services</li>
              <li>Third-party actions or content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Maximum Liability:</strong> In no event shall Verido's total liability to you for all claims exceed the amount you paid to Verido in the 12 months preceding the claim, or $100 USD if no payments were made.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability will be limited to the fullest extent permitted by law.
            </p>
          </section>

          {/* 11. Indemnification */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              11. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless Verido, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your use or misuse of the Services</li>
              <li>Your violation of these Terms or applicable laws</li>
              <li>Your User Data or any content you submit</li>
              <li>Your violation of any third-party rights</li>
              <li>Business decisions made using the Services</li>
            </ul>
          </section>

          {/* 12. Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              12. Dispute Resolution
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">12.1 Informal Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have a dispute with Verido, you agree to first contact us at <a href="mailto:legal@verido.com" className="text-[#d4a574] hover:underline">legal@verido.com</a> to attempt to resolve the dispute informally.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">12.2 Arbitration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes that cannot be resolved informally shall be resolved through binding arbitration, except where prohibited by law. You agree that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Arbitration will be conducted on an individual basis (no class actions)</li>
              <li>The arbitration will be governed by the rules of [Arbitration Association]</li>
              <li>The arbitration will take place in [Jurisdiction]</li>
              <li>The arbitrator's decision will be final and binding</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">12.3 Exceptions</h3>
            <p className="text-gray-700 leading-relaxed">
              Either party may seek injunctive relief in court for intellectual property infringement or violations of confidentiality obligations.
            </p>
          </section>

          {/* 13. General Provisions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              13. General Provisions
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">13.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">13.2 Modifications to Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may modify these Terms at any time. We will provide notice of material changes by email or through the Services. Your continued use after changes become effective constitutes acceptance of the modified Terms.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">13.3 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy and any additional agreements, constitute the entire agreement between you and Verido regarding the Services.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">13.4 Severability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">13.5 No Waiver</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">13.6 Assignment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">13.7 Force Majeure</h3>
            <p className="text-gray-700 leading-relaxed">
              Verido is not liable for any failure or delay in performance due to causes beyond our reasonable control, including natural disasters, war, terrorism, labor disputes, or internet/telecommunications failures.
            </p>
          </section>

          {/* 14. Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#162F21] mb-6 border-b-4 border-[#d4a574] pb-2 inline-block">
              14. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#d4a574]">
              <p className="font-semibold text-gray-900 mb-2">Verido Legal Team</p>
              <p className="text-gray-700 mb-1">
                <strong>Legal Inquiries:</strong> <a href="mailto:legal@verido.com" className="text-[#d4a574] hover:underline">legal@verido.com</a>
              </p>
              <p className="text-gray-700 mb-1">
                <strong>General Inquiries:</strong> <a href="mailto:hello@verido.com" className="text-[#d4a574] hover:underline">hello@verido.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> We aim to respond within 3-5 business days
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="mb-12">
            <div className="bg-[#162F21] text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Acknowledgment</h3>
              <p className="leading-relaxed">
                By using Verido's Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>
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
