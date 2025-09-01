
import React from 'react'
import {Shield, Eye, Lock, Users, Database, Globe} from 'lucide-react'

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Last updated: December 2024
        </p>
        <p className="text-gray-600 mt-2">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
      </div>

      {/* Quick Overview */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Eye className="w-6 h-6 text-blue-600 mr-2" />
          Quick Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-900">✓ We don't sell your data</p>
            <p className="font-medium text-gray-900">✓ Minimal data collection</p>
            <p className="font-medium text-gray-900">✓ Transparent practices</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">✓ User control over data</p>
            <p className="font-medium text-gray-900">✓ Secure data storage</p>
            <p className="font-medium text-gray-900">✓ Regular policy updates</p>
          </div>
        </div>
      </div>

      {/* Information We Collect */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Database className="w-6 h-6 text-blue-600 mr-3" />
          Information We Collect
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Username and email address</li>
              <li>Profile information you choose to provide</li>
              <li>Account preferences and settings</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Content and Communications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Forum posts, comments, and messages</li>
              <li>Scam reports and submissions</li>
              <li>Support requests and correspondence</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Pages visited and features used</li>
              <li>Time spent on different sections</li>
              <li>Device and browser information</li>
              <li>IP address and general location</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How We Use Information */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Users className="w-6 h-6 text-blue-600 mr-3" />
          How We Use Your Information
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Services</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Provide and maintain our platform</li>
              <li>Enable community features</li>
              <li>Process scam reports</li>
              <li>Send important notifications</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement & Safety</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Improve user experience</li>
              <li>Prevent fraud and abuse</li>
              <li>Analyze usage patterns</li>
              <li>Ensure platform security</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data Sharing */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Globe className="w-6 h-6 text-blue-600 mr-3" />
          Information Sharing
        </h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-900">We DO NOT sell your personal information</h3>
            <p className="text-gray-700">Your data is never sold to third parties for marketing purposes.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900">Limited Sharing</h3>
            <p className="text-gray-700">We may share information only in these specific cases:</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers (under strict agreements)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data Security */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Lock className="w-6 h-6 text-blue-600 mr-3" />
          Data Security
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Measures</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Encryption in transit and at rest</li>
              <li>Regular security audits</li>
              <li>Access controls and monitoring</li>
              <li>Secure data centers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Organizational Measures</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Staff training on data protection</li>
              <li>Incident response procedures</li>
              <li>Regular policy reviews</li>
              <li>Third-party security assessments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Your Rights */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Shield className="w-6 h-6 text-blue-600 mr-3" />
          Your Rights
        </h2>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Access & Portability</h3>
              <p className="text-gray-700 text-sm">Request a copy of your personal data</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Correction</h3>
              <p className="text-gray-700 text-sm">Update or correct your information</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Deletion</h3>
              <p className="text-gray-700 text-sm">Request deletion of your account</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Objection</h3>
              <p className="text-gray-700 text-sm">Object to certain data processing</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>To exercise your rights:</strong> Contact us at privacy@scamtok.com with your request. 
              We'll respond within 30 days and may need to verify your identity.
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about this privacy policy or our data practices, please contact us.
        </p>
        <div className="space-y-2">
          <p className="text-gray-700">
            <strong>Email:</strong> privacy@scamtok.com
          </p>
          <p className="text-gray-700">
            <strong>Response Time:</strong> Within 48 hours
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage
