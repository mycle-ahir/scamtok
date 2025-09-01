
import React, { useState } from 'react'
import {AlertTriangle, FileText, Mail, Clock, Shield, Scale} from 'lucide-react'

const NoticeRemovalPage = () => {
  const [requestType, setRequestType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    contentUrl: '',
    copyrightWork: '',
    description: '',
    goodFaithStatement: false,
    accuracyStatement: false,
    authorityStatement: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('DMCA request submitted:', { requestType, ...formData })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Notice & Removal</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Submit DMCA takedown notices, copyright claims, and content removal requests. 
          We take intellectual property rights seriously and respond promptly to valid requests.
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-bold text-yellow-900 mb-2">Important Legal Notice</h2>
            <p className="text-yellow-800 mb-3">
              Filing false or fraudulent DMCA claims may result in legal consequences. 
              Please ensure you have a good faith belief that the use of copyrighted material 
              is not authorized before submitting a request.
            </p>
            <p className="text-yellow-800 text-sm">
              If you're unsure about your rights or the validity of your claim, 
              please consult with a qualified attorney before proceeding.
            </p>
          </div>
        </div>
      </div>

      {/* Process Overview */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Clock className="w-6 h-6 text-blue-600 mr-3" />
          Our Process
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Submit Request</h3>
            <p className="text-gray-600 text-sm">Complete the appropriate form with all required information and documentation.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Review & Verification</h3>
            <p className="text-gray-600 text-sm">We review your request within 24-48 hours and verify the validity of the claim.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Action & Response</h3>
            <p className="text-gray-600 text-sm">Valid requests result in content removal. We notify all parties of our decision.</p>
          </div>
        </div>
      </div>

      {/* Request Type Selection */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Type of Request</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <label className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="requestType"
              value="dmca"
              checked={requestType === 'dmca'}
              onChange={(e) => setRequestType(e.target.value)}
              className="sr-only"
            />
            <div className={`flex items-start ${requestType === 'dmca' ? 'text-blue-600' : 'text-gray-700'}`}>
              <Scale className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">DMCA Copyright Takedown</h3>
                <p className="text-sm">Remove content that infringes on your copyrighted work.</p>
              </div>
            </div>
            {requestType === 'dmca' && (
              <div className="mt-2 w-4 h-4 bg-blue-600 rounded-full ml-auto"></div>
            )}
          </label>
          
          <label className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="requestType"
              value="general"
              checked={requestType === 'general'}
              onChange={(e) => setRequestType(e.target.value)}
              className="sr-only"
            />
            <div className={`flex items-start ${requestType === 'general' ? 'text-blue-600' : 'text-gray-700'}`}>
              <FileText className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">General Content Removal</h3>
                <p className="text-sm">Request removal of inappropriate or harmful content.</p>
              </div>
            </div>
            {requestType === 'general' && (
              <div className="mt-2 w-4 h-4 bg-blue-600 rounded-full ml-auto"></div>
            )}
          </label>
        </div>
      </div>

      {/* DMCA Form */}
      {requestType === 'dmca' && (
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DMCA Takedown Request</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization (if applicable)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Copyright Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Copyright Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="copyrightWork" className="block text-sm font-medium text-gray-700 mb-2">
                    Description of Copyrighted Work *
                  </label>
                  <textarea
                    id="copyrightWork"
                    name="copyrightWork"
                    required
                    rows={4}
                    value={formData.copyrightWork}
                    onChange={handleChange}
                    placeholder="Provide a detailed description of the copyrighted work that you believe has been infringed..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="contentUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    URL of Infringing Content *
                  </label>
                  <input
                    type="url"
                    id="contentUrl"
                    name="contentUrl"
                    required
                    value={formData.contentUrl}
                    onChange={handleChange}
                    placeholder="https://scamtok.com/..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide any additional information that supports your claim..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Legal Statements */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Statements</h3>
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="goodFaithStatement"
                    checked={formData.goodFaithStatement}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I have a good faith belief that the use of the copyrighted material described above 
                    is not authorized by the copyright owner, its agent, or the law.
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="accuracyStatement"
                    checked={formData.accuracyStatement}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I swear, under penalty of perjury, that the information in this notification is accurate.
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="authorityStatement"
                    checked={formData.authorityStatement}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I am authorized to act on behalf of the copyright owner of the exclusive right 
                    that is allegedly infringed.
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-200 flex items-center justify-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Submit DMCA Request
            </button>
          </form>
        </div>
      )}

      {/* General Removal Form */}
      {requestType === 'general' && (
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">General Content Removal Request</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contentUrl" className="block text-sm font-medium text-gray-700 mb-2">
                URL of Content to Remove *
              </label>
              <input
                type="url"
                id="contentUrl"
                name="contentUrl"
                required
                value={formData.contentUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Removal Request *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                value={formData.description}
                onChange={handleChange}
                placeholder="Please explain why this content should be removed, including any relevant policies it violates..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Submit Removal Request
            </button>
          </form>
        </div>
      )}

      {/* Contact Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Shield className="w-6 h-6 text-blue-600 mr-2" />
          Alternative Contact Methods
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700 text-sm mb-1">DMCA Agent: dmca@scamtok.com</p>
            <p className="text-gray-700 text-sm">General: legal@scamtok.com</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
            <p className="text-gray-700 text-sm mb-1">DMCA Requests: 24-48 hours</p>
            <p className="text-gray-700 text-sm">General Requests: 2-5 business days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeRemovalPage
