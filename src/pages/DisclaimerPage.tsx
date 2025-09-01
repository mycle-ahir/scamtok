
import React from 'react'
import {AlertTriangle, Info, Shield, Scale} from 'lucide-react'

const DisclaimerPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
        <p className="text-lg text-gray-600">
          Last updated: December 2024
        </p>
        <p className="text-gray-600 mt-2">
          Important information about the use of ScamTok and limitations of our services.
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-red-900 mb-2">Important Notice</h2>
            <p className="text-red-800">
              The information provided on ScamTok is for educational and informational purposes only. 
              While we strive for accuracy, we cannot guarantee the completeness or reliability of all content. 
              Always verify information independently and consult with appropriate professionals when needed.
            </p>
          </div>
        </div>
      </div>

      {/* Information Accuracy */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Info className="w-6 h-6 text-blue-600 mr-3" />
          Information Accuracy
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Sources</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Information is gathered from user reports, research, and public sources</li>
              <li>Content is reviewed but may not always be independently verified</li>
              <li>Scam reports reflect individual experiences and may vary</li>
              <li>AI threat information is based on available research and analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We cannot guarantee the accuracy of all user-submitted content</li>
              <li>Threat landscapes change rapidly; information may become outdated</li>
              <li>Regional variations in scams and regulations may not be fully covered</li>
              <li>Technical details may be simplified for general audience understanding</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Limitation of Liability */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Scale className="w-6 h-6 text-blue-600 mr-3" />
          Limitation of Liability
        </h2>
        
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">No Warranty</h3>
            <p className="text-gray-700">
              ScamTok is provided "as is" without warranties of any kind, either express or implied. 
              We do not warrant that the service will be uninterrupted, error-free, or completely secure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Liability Limitations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We are not liable for damages resulting from use of our platform</li>
              <li>Users act on information at their own risk and discretion</li>
              <li>We cannot be held responsible for financial losses from scams</li>
              <li>Third-party links and content are outside our control</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Maximum Liability</h3>
            <p className="text-gray-700">
              To the maximum extent permitted by law, our total liability for any claims 
              shall not exceed the amount paid by you (if any) for accessing our services 
              in the 12 months preceding the claim.
            </p>
          </div>
        </div>
      </div>

      {/* User Responsibilities */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Shield className="w-6 h-6 text-blue-600 mr-3" />
          User Responsibilities
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Due Diligence</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Verify information independently before taking action</li>
              <li>Consult with professionals for legal, financial, or technical advice</li>
              <li>Report suspected scams to appropriate authorities</li>
              <li>Use common sense and critical thinking when evaluating threats</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Accuracy</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide accurate information when submitting reports</li>
              <li>Update or correct information if errors are discovered</li>
              <li>Respect privacy and confidentiality when sharing experiences</li>
              <li>Follow community guidelines and terms of service</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Professional Advice */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Not Professional Advice</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Legal Advice:</strong> Content does not constitute legal advice. 
            Consult with qualified attorneys for legal matters.
          </p>
          <p className="text-gray-700">
            <strong>Financial Advice:</strong> Information is not financial or investment advice. 
            Consult with certified financial professionals.
          </p>
          <p className="text-gray-700">
            <strong>Technical Advice:</strong> Technical information is general in nature. 
            Consult with IT professionals for specific implementations.
          </p>
        </div>
      </div>

      {/* Third-Party Content */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Content</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Our platform may contain links to external websites, references to third-party services, 
            or user-generated content. We do not endorse, control, or assume responsibility for:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Content accuracy on external websites</li>
            <li>Privacy practices of third-party services</li>
            <li>Availability or functionality of linked resources</li>
            <li>User-generated content and opinions expressed</li>
          </ul>
          
          <p className="text-gray-700 mt-4">
            Users access third-party content at their own risk and should review 
            applicable terms and privacy policies.
          </p>
        </div>
      </div>

      {/* Updates and Changes */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Updates and Changes</h2>
        <p className="text-gray-700">
          This disclaimer may be updated periodically to reflect changes in our services, 
          legal requirements, or best practices. Continued use of ScamTok after updates 
          constitutes acceptance of the revised disclaimer. Check this page regularly for updates.
        </p>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions About This Disclaimer?</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about this disclaimer or need clarification, please contact us.
        </p>
        <div className="space-y-2">
          <p className="text-gray-700">
            <strong>Email:</strong> legal@scamtok.com
          </p>
          <p className="text-gray-700">
            <strong>Subject:</strong> Disclaimer Inquiry
          </p>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerPage
