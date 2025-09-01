
import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {AlertTriangle, Upload, Shield, Info, CheckCircle} from 'lucide-react'
import toast from 'react-hot-toast'

interface ScamReportForm {
  title: string
  category: string
  severity: string
  description: string
  evidence: string
  affectedPlatforms: string[]
  contactMethod: string
  location: string
  reporterEmail: string
  isAnonymous: boolean
}

const UpdateReportPage: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ScamReportForm>()

  const onSubmit = (data: ScamReportForm) => {
    console.log('Scam report submitted:', data)
    toast.success('Thank you! Your scam report has been submitted and will be reviewed by our team.')
  }

  const severityLevel = watch('severity')

  const categories = [
    { value: 'phishing', label: 'Phishing & Email Scams' },
    { value: 'ai-threats', label: 'AI Threats (Deepfakes, Voice Cloning)' },
    { value: 'crypto', label: 'Cryptocurrency Scams' },
    { value: 'romance', label: 'Romance Scams' },
    { value: 'investment', label: 'Investment Fraud' },
    { value: 'tech-support', label: 'Tech Support Scams' },
    { value: 'shopping', label: 'Online Shopping Fraud' },
    { value: 'mobile', label: 'Mobile & App Scams' },
    { value: 'social-media', label: 'Social Media Scams' },
    { value: 'other', label: 'Other' }
  ]

  const platforms = [
    'Email', 'WhatsApp', 'Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 
    'TikTok', 'YouTube', 'Telegram', 'Discord', 'SMS/Text', 'Phone Call',
    'Website', 'Mobile App', 'Dating App', 'Marketplace', 'Other'
  ]

  const getSeverityInfo = (severity: string) => {
    switch (severity) {
      case 'critical':
        return {
          color: 'text-red-600',
          bg: 'bg-red-50 border-red-200',
          description: 'Immediate financial loss, identity theft, or widespread targeting'
        }
      case 'high':
        return {
          color: 'text-orange-600',
          bg: 'bg-orange-50 border-orange-200',
          description: 'Significant potential for harm, sophisticated techniques'
        }
      case 'medium':
        return {
          color: 'text-yellow-600',
          bg: 'bg-yellow-50 border-yellow-200',
          description: 'Moderate risk, common scam techniques'
        }
      case 'low':
        return {
          color: 'text-green-600',
          bg: 'bg-green-50 border-green-200',
          description: 'Low risk, easily identifiable as scam'
        }
      default:
        return {
          color: 'text-gray-600',
          bg: 'bg-gray-50 border-gray-200',
          description: 'Please select a severity level'
        }
    }
  }

  const severityInfo = getSeverityInfo(severityLevel)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="h-12 w-12" />
              <h1 className="text-4xl font-bold">Report a Scam</h1>
            </div>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Help protect the community by reporting new scams, threats, and suspicious activities. 
              Your report helps us alert others and build better defenses.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Information</h3>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• <strong>Immediate Danger:</strong> If you're in immediate danger, contact local emergency services</li>
                <li>• <strong>Financial Loss:</strong> If you've lost money, contact your bank and local law enforcement</li>
                <li>• <strong>Identity Theft:</strong> Report to your local police and consider freezing your credit</li>
                <li>• <strong>Privacy:</strong> Don't include personal information like passwords, SSN, or account numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Scam Details</h2>
              
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Scam Title *
                  </label>
                  <input
                    type="text"
                    {...register('title', { required: 'Title is required' })}
                    placeholder="Brief, descriptive title (e.g., 'Fake Amazon Prime renewal phishing email')"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.title && (
                    <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
                  )}
                </div>

                {/* Category and Severity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      {...register('category', { required: 'Category is required' })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Severity Level *
                    </label>
                    <select
                      {...register('severity', { required: 'Severity is required' })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select severity</option>
                      <option value="critical">Critical</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                    {errors.severity && (
                      <p className="text-red-600 text-sm mt-1">{errors.severity.message}</p>
                    )}
                    
                    {severityLevel && (
                      <div className={`mt-2 p-3 rounded-lg border ${severityInfo.bg}`}>
                        <p className={`text-sm ${severityInfo.color}`}>
                          <strong>{severityLevel.toUpperCase()}:</strong> {severityInfo.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    {...register('description', { required: 'Description is required' })}
                    rows={6}
                    placeholder="Provide a detailed description of the scam including:
• How it works
• What makes it convincing
• Red flags to watch for
• Any variations you've seen"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  {errors.description && (
                    <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>

                {/* Evidence */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Evidence & Examples
                  </label>
                  <textarea
                    {...register('evidence')}
                    rows={4}
                    placeholder="Include any evidence such as:
• Email headers or message content (remove personal info)
• Website URLs (if safe to share)
• Screenshots descriptions
• Phone numbers or contact details used by scammers"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Platform Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform & Contact Information</h2>
              
              <div className="space-y-6">
                {/* Affected Platforms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Platforms Used by Scammers
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {platforms.map((platform) => (
                      <label key={platform} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={platform}
                          {...register('affectedPlatforms')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contact Method and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How were you contacted?
                    </label>
                    <input
                      type="text"
                      {...register('contactMethod')}
                      placeholder="e.g., Email, phone call, text message, social media"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Location (Optional)
                    </label>
                    <input
                      type="text"
                      {...register('location')}
                      placeholder="Country or region (helps identify targeting patterns)"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reporter Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reporter Information</h2>
              
              <div className="space-y-6">
                {/* Anonymous Option */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    {...register('isAnonymous')}
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Submit anonymously
                    </label>
                    <p className="text-sm text-gray-600">
                      Your report will be anonymous, but we won't be able to follow up with questions
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    {...register('reporterEmail')}
                    placeholder="your.email@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    We may contact you for clarification or updates. Your email will never be shared publicly.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Your report will be reviewed by our security team within 24 hours
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <AlertTriangle className="h-5 w-5" />
                  <span>Submit Scam Report</span>
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Additional Resources */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold text-green-900">After Reporting</h3>
            </div>
            <ul className="text-green-800 space-y-2 text-sm">
              <li>• Your report will be reviewed and verified</li>
              <li>• We'll add it to our threat database</li>
              <li>• Community will be alerted if verified</li>
              <li>• You'll receive updates on the investigation</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Info className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">Need Help?</h3>
            </div>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• Check our <a href="/resources" className="underline">Resources page</a> for guides</li>
              <li>• Visit the <a href="/forum" className="underline">Community Forum</a> for support</li>
              <li>• Contact us at <a href="/contact" className="underline">support@scamtok.com</a></li>
              <li>• For urgent cases, contact local authorities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateReportPage
