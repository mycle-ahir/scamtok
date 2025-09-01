
import React from 'react'
import {FileText, Users, Shield, AlertCircle, Scale, Clock} from 'lucide-react'

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-lg text-gray-600">
          Last updated: December 2024
        </p>
        <p className="text-gray-600 mt-2">
          Please read these terms carefully before using ScamTok.
        </p>
      </div>

      {/* Agreement Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-2">Agreement to Terms</h2>
            <p className="text-blue-800">
              By accessing and using ScamTok, you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Shield className="w-6 h-6 text-blue-600 mr-3" />
          Service Description
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            ScamTok is a community-driven platform that provides information about scams, 
            AI threats, and internet safety. Our services include:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Educational content about online threats and safety</li>
            <li>Community forums for discussion and information sharing</li>
            <li>User-submitted scam reports and threat alerts</li>
            <li>Resources and guides for protection and prevention</li>
            <li>Research and analysis of emerging threats</li>
          </ul>
          
          <p className="text-gray-700">
            We reserve the right to modify, suspend, or discontinue any aspect of our 
            services at any time without prior notice.
          </p>
        </div>
      </div>

      {/* User Accounts */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Users className="w-6 h-6 text-blue-600 mr-3" />
          User Accounts
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Creation</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You must be at least 13 years old to create an account</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>One account per person; multiple accounts are prohibited</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You are responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Keep your contact information current and accurate</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Termination</h3>
            <p className="text-gray-700">
              We may suspend or terminate accounts that violate these terms, 
              engage in harmful behavior, or for any reason at our discretion. 
              You may delete your account at any time through your account settings.
            </p>
          </div>
        </div>
      </div>

      {/* Acceptable Use */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
          Acceptable Use Policy
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Permitted Uses</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Share legitimate experiences with scams and threats</li>
              <li>Participate constructively in community discussions</li>
              <li>Access educational resources for personal protection</li>
              <li>Report new threats to help protect others</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Prohibited Activities</h3>
            <ul className="list-disc list-inside text-red-800 space-y-2">
              <li>Posting false, misleading, or defamatory content</li>
              <li>Sharing personal information of others without consent</li>
              <li>Promoting or facilitating illegal activities</li>
              <li>Harassment, bullying, or threatening behavior</li>
              <li>Spamming, phishing, or malicious content distribution</li>
              <li>Attempting to hack, disrupt, or damage our systems</li>
              <li>Commercial use without prior written permission</li>
              <li>Impersonating others or creating fake accounts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content and Intellectual Property */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Scale className="w-6 h-6 text-blue-600 mr-3" />
          Content & Intellectual Property
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Content</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You retain ownership of content you submit</li>
              <li>You grant us a license to use, display, and distribute your content</li>
              <li>You are responsible for ensuring you have rights to share content</li>
              <li>You warrant that your content does not infringe on others' rights</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Content</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>ScamTok platform, design, and original content are our property</li>
              <li>You may not copy, reproduce, or distribute our content without permission</li>
              <li>Trademarks and logos are protected intellectual property</li>
              <li>Educational use and fair use exceptions may apply</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">DMCA Compliance</h3>
            <p className="text-gray-700">
              We respect intellectual property rights and respond to valid DMCA takedown notices. 
              If you believe your copyrighted work has been infringed, please contact us through 
              our Notice & Removal process.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy and Data */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Your privacy is important to us. Our Privacy Policy explains how we collect, 
            use, and protect your information. By using ScamTok, you also agree to our 
            Privacy Policy.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Key Points:</strong> We don't sell your data, we use minimal collection 
              practices, and you have control over your information. 
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 ml-1">
                Read our full Privacy Policy →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimers and Limitations */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimers & Limitations</h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Service "As Is"</h3>
            <p className="text-gray-700">
              ScamTok is provided "as is" without warranties. We cannot guarantee 
              uninterrupted service, complete accuracy, or freedom from errors.
            </p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
            <p className="text-gray-700">
              We are not liable for damages resulting from use of our platform, 
              user-generated content, or third-party links. Users act at their own risk.
            </p>
          </div>
          
          <p className="text-gray-700">
            For complete disclaimer information, please review our 
            <a href="/disclaimer" className="text-blue-600 hover:text-blue-800 ml-1">
              Disclaimer page
            </a>.
          </p>
        </div>
      </div>

      {/* Modifications */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Clock className="w-6 h-6 text-blue-600 mr-3" />
          Modifications to Terms
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            We may update these Terms and Conditions periodically to reflect changes in:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Our services and features</li>
            <li>Legal or regulatory requirements</li>
            <li>Business practices and policies</li>
            <li>User feedback and community needs</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Notice of Changes:</strong> We will notify users of significant changes 
              via email or platform announcements. Continued use after changes constitutes 
              acceptance of updated terms.
            </p>
          </div>
        </div>
      </div>

      {/* Governing Law */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h2>
        <p className="text-gray-700">
          These terms are governed by and construed in accordance with applicable laws. 
          Any disputes will be resolved through appropriate legal channels in the 
          jurisdiction where ScamTok operates.
        </p>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about these Terms and Conditions, please contact us.
        </p>
        <div className="space-y-2">
          <p className="text-gray-700">
            <strong>Email:</strong> legal@scamtok.com
          </p>
          <p className="text-gray-700">
            <strong>Subject:</strong> Terms and Conditions Inquiry
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsPage
