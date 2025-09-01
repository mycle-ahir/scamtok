
import React, { useState } from 'react'
import {Briefcase, Users, Heart, Star, MapPin, Clock, DollarSign, Send} from 'lucide-react'

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'research', name: 'Research & Analysis' },
    { id: 'community', name: 'Community & Support' },
    { id: 'content', name: 'Content & Education' },
    { id: 'operations', name: 'Operations' }
  ]

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'full-time', name: 'Full-time' },
    { id: 'part-time', name: 'Part-time' },
    { id: 'contract', name: 'Contract' },
    { id: 'volunteer', name: 'Volunteer' },
    { id: 'internship', name: 'Internship' }
  ]

  const positions = [
    {
      id: 1,
      title: "Senior Security Researcher",
      department: "research",
      type: "full-time",
      location: "Remote",
      salary: "$120,000 - $160,000",
      description: "Lead research initiatives on emerging threats, AI-powered scams, and cybersecurity trends. Publish findings and contribute to community education.",
      requirements: ["5+ years in cybersecurity research", "Experience with threat analysis", "Strong writing skills", "PhD or Master's preferred"],
      featured: true
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      department: "engineering",
      type: "full-time",
      location: "Remote",
      salary: "$100,000 - $140,000",
      description: "Build and maintain our platform infrastructure, develop new features, and ensure scalable, secure architecture.",
      requirements: ["React/Node.js expertise", "Database design experience", "Security-first mindset", "3+ years experience"],
      featured: true
    },
    {
      id: 3,
      title: "Community Manager",
      department: "community",
      type: "full-time",
      location: "Remote",
      salary: "$70,000 - $90,000",
      description: "Foster community engagement, moderate discussions, organize events, and build relationships with users and partners.",
      requirements: ["Community management experience", "Excellent communication", "Understanding of online safety", "Social media expertise"],
      featured: false
    },
    {
      id: 4,
      title: "Content Writer & Educator",
      department: "content",
      type: "part-time",
      location: "Remote",
      salary: "$40 - $60/hour",
      description: "Create educational content, guides, and resources about cybersecurity and scam prevention for diverse audiences.",
      requirements: ["Technical writing experience", "Cybersecurity knowledge", "SEO understanding", "Portfolio required"],
      featured: false
    },
    {
      id: 5,
      title: "Threat Intelligence Analyst",
      department: "research",
      type: "contract",
      location: "Remote",
      salary: "$80 - $120/hour",
      description: "Analyze emerging threats, track scam campaigns, and provide actionable intelligence to protect our community.",
      requirements: ["Threat intelligence experience", "OSINT skills", "Analytical mindset", "Relevant certifications"],
      featured: true
    },
    {
      id: 6,
      title: "Forum Moderator",
      department: "community",
      type: "volunteer",
      location: "Remote",
      salary: "Volunteer",
      description: "Help maintain a safe, respectful community environment by moderating discussions and supporting users.",
      requirements: ["Strong communication skills", "Available 10+ hours/week", "Understanding of community guidelines", "Passion for helping others"],
      featured: false
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and unlimited PTO policy"
    },
    {
      icon: Users,
      title: "Remote-First",
      description: "Fully remote team with optional co-working spaces and annual meetups"
    },
    {
      icon: Star,
      title: "Growth & Learning",
      description: "Professional development budget, conference attendance, and skill building"
    }
  ]

  const filteredPositions = positions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment
    const matchesType = selectedType === 'all' || position.type === selectedType
    return matchesDepartment && matchesType
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-blue-100 text-blue-800'
      case 'part-time': return 'bg-green-100 text-green-800'
      case 'contract': return 'bg-purple-100 text-purple-800'
      case 'volunteer': return 'bg-orange-100 text-orange-800'
      case 'internship': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Help us build a safer digital world. Join our team of passionate professionals, 
          researchers, and volunteers dedicated to protecting people from online threats.
        </p>
      </div>

      {/* Company Culture */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Work at ScamTok?</h2>
          <p className="text-xl mb-8">
            We're more than a company—we're a community of innovators, researchers, and advocates 
            working together to make the internet safer for everyone.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">Meaningful Impact</h3>
              <p className="text-sm opacity-90">Your work directly protects millions from online threats</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
              <p className="text-sm opacity-90">Work with cutting-edge technology and research</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-sm opacity-90">Join a supportive team that values diverse perspectives</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefits & Perks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              Employment Type
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="ml-auto">
            <p className="text-sm text-gray-600">
              {filteredPositions.length} position{filteredPositions.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
        
        {filteredPositions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No positions found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later for new opportunities.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <div key={position.id} className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow ${position.featured ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mr-3">{position.title}</h3>
                      {position.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {position.salary}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(position.type)}`}>
                        {position.type.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Department: {departments.find(d => d.id === position.department)?.name}
                  </span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Volunteer Opportunities */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer & Contributor Opportunities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Forum Moderators</h3>
            <p className="text-gray-600 text-sm mb-4">
              Help maintain a safe and welcoming community environment. 
              Flexible schedule, 10+ hours per week.
            </p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Learn More →
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Content Contributors</h3>
            <p className="text-gray-600 text-sm mb-4">
              Write articles, create guides, and develop educational resources. 
              Perfect for subject matter experts.
            </p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Learn More →
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Research Assistants</h3>
            <p className="text-gray-600 text-sm mb-4">
              Support threat research, data analysis, and trend identification. 
              Great for students and early-career professionals.
            </p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-gray-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Hiring Process</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Application</h3>
            <p className="text-gray-600 text-sm">Submit your application with resume and cover letter</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Screening</h3>
            <p className="text-gray-600 text-sm">Initial phone/video screening with our team</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
            <p className="text-gray-600 text-sm">Technical and cultural fit interviews with team members</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Decision</h3>
            <p className="text-gray-600 text-sm">Final decision and offer within one week</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Don't See the Right Role?</h2>
        <p className="text-gray-700 mb-4">
          We're always looking for talented individuals who share our mission. 
          Send us your resume and let us know how you'd like to contribute.
        </p>
        <div className="space-y-2">
          <p className="text-gray-700">
            <strong>Email:</strong> careers@scamtok.com
          </p>
          <p className="text-gray-700">
            <strong>Subject:</strong> [Position Interest] Your Name
          </p>
        </div>
      </div>
    </div>
  )
}

export default CareersPage
