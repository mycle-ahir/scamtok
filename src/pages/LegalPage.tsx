
import React from 'react'
import {Scale, Shield, FileText, Globe, AlertTriangle, Users} from 'lucide-react'

const LegalPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Information</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive legal information, compliance statements, and regulatory details 
          governing the use of ScamTok platform and services.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#compliance" className="flex items-center text-blue-600 hover:text-blue-800">
            <Shield className="w-4 h-4 mr-2" />
            Compliance Statements
          </a>
          <a href="#jurisdiction" className="flex items-center text-blue-600 hover:text-blue-800">
            <Globe className="w-4 h-4 mr-2" />
            Jurisdiction & Law
          </a>
          <a href="#rights" className="flex items-center text-blue-600 hover:text-blue-800">
            <Scale className="w-4 h-4 mr-2" />
            Rights & Obligations
          </a>
          <a href="#policies" className="flex items-center text-blue-600 hover:text-blue-800">
            <FileText className="w-4 h-4 mr-2" />
            Platform Policies
          </a>
          <a href="#liability" className="flex items-center text-blue-600 hover:text-blue-800">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Liability & Disclaimers
          </a>
          <a href="#enforcement" className="flex items-center text-blue-600 hover:text-blue-800">
            <Users className="w-4 h-4 mr-2" />
            Enforcement
          </a>
        </div>
      </div>

      {/* Compliance Statements */}
      <div id="compliance" className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Shield className="w-6 h-6 text-blue-600 mr-3" />
          Compliance Statements
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Compliance</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-green-900 mb-2">GDPR Compliance</h4>
              <p className="text-green-800 text-sm">
                We comply with the General Data Protection Regulation (GDPR) for all users in the European Union. 
                This includes providing data portability, right to deletion, and transparent privacy practices.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">CCPA Compliance</h4>
              <p className="text-blue-800 text-sm">
                We comply with the California Consumer Privacy Act (CCPA) for California residents, 
                including rights to know, delete, and opt-out of the sale of personal information.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Compliance</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Digital Millennium Copyright Act (DMCA) compliance</li>
              <li>Section 230 of the Communications Decency Act adherence</li>
              <li>Community standards enforcement</li>
              <li>Age-appropriate content guidelines</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Standards</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>SOC 2 Type II compliance for data security</li>
              <li>ISO 27001 information security management</li>
              <li>Regular security audits and penetration testing</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Jurisdiction & Governing Law */}
      <div id="jurisdiction" className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Globe className="w-6 h-6 text-blue-600 mr-3" />
          Jurisdiction & Governing Law
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These terms and your use of ScamTok are governed by the laws of the jurisdiction 
              where our primary operations are located, without regard to conflict of law principles.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Primary Jurisdiction:</strong> United States<br/>
                <strong>Applicable Laws:</strong> Federal and state laws of the United States<br/>
                <strong>International Users:</strong> Local laws may also apply
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Informal Resolution</h4>
                <p className="text-gray-700 text-sm">
                  We encourage resolving disputes through direct communication. 
                  Contact our legal team at legal@scamtok.com for informal resolution attempts.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Formal Proceedings</h4>
                <p className="text-gray-700 text-sm">
                  If informal resolution fails, disputes will be resolved through binding arbitration 
                  or in courts of competent jurisdiction in our primary operating location.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">International Considerations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Users outside the US may have additional rights under local laws</li>
              <li>We respect international data transfer regulations</li>
              <li>Cross-border law enforcement cooperation when legally required</li>
              <li>Compliance with international sanctions and export controls</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rights & Obligations */}
      <div id="rights" className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Scale className="w-6 h-6 text-blue-600 mr-3" />
          Rights & Obligations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Rights</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-900 mb-1">Access & Use</h4>
                <p className="text-green-800 text-sm">Right to access and use our platform according to terms</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-900 mb-1">Privacy</h4>
                <p className="text-green-800 text-sm">Right to privacy and data protection as outlined in our policy</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-900 mb-1">Content Ownership</h4>
                <p className="text-green-800 text-sm">Retain ownership of content you create and submit</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-900 mb-1">Account Control</h4>
                <p className="text-green-800 text-sm">Right to modify or delete your account and data</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Obligations</h3>
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-medium text-red-900 mb-1">Lawful Use</h4>
                <p className="text-red-800 text-sm">Use platform only for lawful purposes and in compliance with terms</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-medium text-red-900 mb-1">Accurate Information</h4>
                <p className="text-red-800 text-sm">Provide truthful and accurate information in all interactions</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-medium text-red-900 mb-1">Respect Others</h4>
                <p className="text-red-800 text-sm">Respect other users' rights and maintain civil discourse</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-medium text-red-900 mb-1">Security</h4>
                <p className="text-red-800 text-sm">Maintain account security and report suspicious activity</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Policies */}
      <div id="policies" className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <FileText className="w-6 h-6 text-blue-600 mr-3" />
          Platform Policies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                <a href="/terms" className="text-blue-600 hover:text-blue-800">Terms & Conditions</a>
              </h3>
              <p className="text-gray-600 text-sm">Comprehensive terms governing platform use and user agreements</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
              </h3>
              <p className="text-gray-600 text-sm">Detailed information about data collection, use, and protection</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                <a href="/disclaimer" className="text-blue-600 hover:text-blue-800">Disclaimer</a>
              </h3>
              <p className="text-gray-600 text-sm">Limitations of liability and accuracy of information</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Community Guidelines</h3>
              <p className="text-gray-600 text-sm">Standards for respectful and constructive community participation</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Content Policy</h3>
              <p className="text-gray-600 text-sm">Rules governing user-generated content and acceptable use</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                <a href="/notice-removal" className="text-blue-600 hover:text-blue-800">DMCA Policy</a>
              </h3>
              <p className="text-gray-600 text-sm">Procedures for copyright claims and content removal requests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Liability & Disclaimers */}
      <div id="liability" className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
          Liability & Disclaimers
        </h2>
        
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Important Disclaimers</h3>
            <ul className="list-disc list-inside text-yellow-800 space-y-2">
              <li>Information provided is for educational purposes only</li>
              <li>We do not guarantee accuracy of user-submitted content</li>
              <li>Platform provided "as is" without warranties</li>
              <li>Not responsible for third-party content or links</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, ScamTok and its affiliates shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages resulting from user-generated content</li>
              <li>Service interruptions or technical failures</li>
              <li>Actions taken based on platform information</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Indemnification</h3>
            <p className="text-gray-700">
              Users agree to indemnify and hold harmless ScamTok from claims, damages, or expenses 
              arising from their use of the platform, violation of terms, or infringement of third-party rights.
            </p>
          </div>
        </div>
      </div>

      {/* Enforcement */}
      <div id="enforcement" className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Users className="w-6 h-6 text-blue-600 mr-3" />
          Policy Enforcement
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Violation Consequences</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">Warning</h4>
                <p className="text-yellow-800 text-sm">First-time or minor violations receive warnings with guidance</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2">Suspension</h4>
                <p className="text-orange-800 text-sm">Temporary account restrictions for repeated or serious violations</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-900 mb-2">Termination</h4>
                <p className="text-red-800 text-sm">Permanent account closure for severe or persistent violations</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Appeals Process</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Submit appeal within 30 days of enforcement action</li>
              <li>Provide detailed explanation and supporting evidence</li>
              <li>Internal review by independent team within 7 business days</li>
              <li>Final decision communicated with reasoning</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Law Enforcement Cooperation</h3>
            <p className="text-gray-700">
              We cooperate with law enforcement agencies when legally required, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
              <li>Responding to valid legal process (subpoenas, warrants)</li>
              <li>Reporting illegal activities as required by law</li>
              <li>Preserving evidence for ongoing investigations</li>
              <li>Assisting in cybercrime prevention efforts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Legal Team */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Legal Questions or Concerns?</h2>
        <p className="text-gray-700 mb-4">
          Our legal team is available to address questions about policies, compliance, or legal matters.
        </p>
        <div className="space-y-2">
          <p className="text-gray-700">
            <strong>Email:</strong> legal@scamtok.com
          </p>
          <p className="text-gray-700">
            <strong>Response Time:</strong> 3-5 business days
          </p>
          <p className="text-gray-700">
            <strong>For Urgent Legal Matters:</strong> urgent-legal@scamtok.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default LegalPage
