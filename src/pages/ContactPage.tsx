
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Mail, Phone, MapPin, Clock, Send, Shield, Users, AlertTriangle, Briefcase, Award, Globe, CheckCircle} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
    priority: 'normal'
  })

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      contact: "info@scamtok.com",
      description: "General questions and information",
      responseTime: "24-48 hours"
    },
    {
      icon: AlertTriangle,
      title: "Security Reports",
      contact: "security@scamtok.com",
      description: "Report vulnerabilities or security issues",
      responseTime: "2-4 hours"
    },
    {
      icon: Users,
      title: "Research Collaboration",
      contact: "research@scamtok.com",
      description: "Academic partnerships and research inquiries",
      responseTime: "48-72 hours"
    },
    {
      icon: Briefcase,
      title: "Business Partnerships",
      contact: "partnerships@scamtok.com",
      description: "Enterprise solutions and partnerships",
      responseTime: "24-48 hours"
    }
  ]

  const officeLocations = [
    {
      city: "San Francisco, CA",
      address: "123 Cyber Security Blvd, Suite 400",
      phone: "+1 (415) 555-0123",
      type: "Headquarters"
    },
    {
      city: "Washington, DC",
      address: "456 Intelligence Ave, Floor 8",
      phone: "+1 (202) 555-0456",
      type: "Government Relations"
    },
    {
      city: "London, UK",
      address: "789 Threat Intel Way, Level 12",
      phone: "+44 20 7555 0789",
      type: "European Operations"
    }
  ]

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Security Officer",
      credentials: "Ph.D. Computer Science, Stanford • CISSP, CISM",
      email: "s.chen@scamtok.com"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Threat Intelligence",
      credentials: "M.S. Cybersecurity, MIT • SANS GIAC Expert",
      email: "m.rodriguez@scamtok.com"
    },
    {
      name: "Dr. James Wilson",
      role: "Research Director",
      credentials: "Ph.D. Information Security, Carnegie Mellon",
      email: "j.wilson@scamtok.com"
    }
  ]

  const certifications = [
    "ISO 27001:2013 Certified",
    "SOC 2 Type II Compliant",
    "GDPR Compliant",
    "CCPA Compliant",
    "NIST Cybersecurity Framework"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact ScamTok</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our cybersecurity experts, researchers, and support team. 
            We're here to help protect you and your organization from digital threats.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <div className="flex items-center text-green-600">
              <Award className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center text-green-600">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center text-green-600">
              <Globe className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Global Operations</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
          <div>
            <h3 className="font-bold text-red-900">Urgent Security Incident?</h3>
            <p className="text-red-800">
              For immediate security incidents: <strong>emergency@scamtok.com</strong> or call <strong>+1 (415) 555-URGENT</strong>
              <br />
              <span className="text-sm">24/7 incident response team • Average response time: 15 minutes • Certified incident handlers on duty</span>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-blue-600 font-medium mb-2">{method.contact}</p>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {method.responseTime}
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
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
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  <option value="general">General Inquiry</option>
                  <option value="security">Security Report</option>
                  <option value="research">Research Collaboration</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="media">Media Inquiry</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                  Priority Level
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please provide detailed information about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>

        {/* Office Locations & Additional Info */}
        <div className="space-y-8">
          {/* Office Locations */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              Office Locations
            </h2>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{office.city}</h3>
                    <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">{office.type}</span>
                  </div>
                  <p className="text-gray-600 mb-1">{office.address}</p>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {office.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Team Members */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              Key Contacts
            </h2>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                  <p className="text-gray-600 text-xs mb-1">{member.credentials}</p>
                  <p className="text-gray-600 text-sm">{member.email}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              Business Hours
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="font-medium text-gray-900">9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Saturday</span>
                <span className="font-medium text-gray-900">10:00 AM - 4:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="font-medium text-gray-900">Closed</span>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">24/7 Security Incident Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Compliance */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              Certifications & Compliance
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How quickly do you respond to security reports?</h3>
            <p className="text-gray-600 text-sm">Critical security issues receive responses within 2-4 hours. Our incident response team operates 24/7 with certified SANS GIAC professionals.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Do you offer enterprise consulting services?</h3>
            <p className="text-gray-600 text-sm">Yes, we provide customized cybersecurity consulting for Fortune 500 companies and government agencies. Our team includes former NSA analysts and industry experts.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I contribute to your research?</h3>
            <p className="text-gray-600 text-sm">We welcome collaboration from security researchers, academics, and industry professionals. We've published over 150 peer-reviewed papers and maintain partnerships with leading universities.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How do I report a vulnerability?</h3>
            <p className="text-gray-600 text-sm">Send detailed vulnerability reports to security@scamtok.com. We follow responsible disclosure practices and offer bug bounty rewards up to $50,000 for critical findings.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What are your data protection practices?</h3>
            <p className="text-gray-600 text-sm">We maintain ISO 27001 certification, SOC 2 Type II compliance, and follow GDPR/CCPA requirements. All data is encrypted at rest and in transit using AES-256.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Do you work with law enforcement?</h3>
            <p className="text-gray-600 text-sm">Yes, we collaborate with FBI, Interpol, and international cybercrime units. Our threat intelligence feeds are used by over 200 law enforcement agencies globally.</p>
          </div>
        </div>
      </div>

      {/* Media Kit & Press */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Media & Press Inquiries</h2>
          <p className="text-gray-600 mb-6">
            For media inquiries, interview requests, or press kit materials, contact our communications team.
          </p>
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <p className="font-semibold text-gray-900">Press Contact</p>
              <p className="text-blue-600">press@scamtok.com</p>
              <p className="text-sm text-gray-600">Response within 4 hours</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Speaker Bureau</p>
              <p className="text-blue-600">speakers@scamtok.com</p>
              <p className="text-sm text-gray-600">Conference & event speakers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
