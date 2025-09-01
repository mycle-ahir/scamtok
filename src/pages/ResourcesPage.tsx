
import React, { useState } from 'react'
import {Book, Download, ExternalLink, Search, Filter, Star, Clock, Users} from 'lucide-react'

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'phishing', name: 'Phishing' },
    { id: 'ai-threats', name: 'AI Threats' },
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'social-engineering', name: 'Social Engineering' },
    { id: 'malware', name: 'Malware' },
    { id: 'identity-theft', name: 'Identity Theft' }
  ]

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'guide', name: 'Guides' },
    { id: 'tutorial', name: 'Tutorials' },
    { id: 'checklist', name: 'Checklists' },
    { id: 'tool', name: 'Tools' },
    { id: 'template', name: 'Templates' }
  ]

  const resources = [
    {
      id: 1,
      title: "Complete Phishing Protection Guide",
      description: "Comprehensive guide to identifying and preventing phishing attacks across email, SMS, and social media platforms.",
      category: "phishing",
      type: "guide",
      rating: 4.9,
      downloads: 15420,
      lastUpdated: "2024-12-01",
      difficulty: "Beginner",
      readTime: "15 min",
      featured: true
    },
    {
      id: 2,
      title: "AI Deepfake Detection Toolkit",
      description: "Tools and techniques for identifying AI-generated content, deepfakes, and synthetic media manipulation.",
      category: "ai-threats",
      type: "tool",
      rating: 4.7,
      downloads: 8930,
      lastUpdated: "2024-11-28",
      difficulty: "Advanced",
      readTime: "30 min",
      featured: true
    },
    {
      id: 3,
      title: "Cryptocurrency Scam Prevention Checklist",
      description: "Essential checklist for verifying crypto projects, exchanges, and investment opportunities.",
      category: "crypto",
      type: "checklist",
      rating: 4.8,
      downloads: 12150,
      lastUpdated: "2024-11-25",
      difficulty: "Intermediate",
      readTime: "10 min",
      featured: false
    },
    {
      id: 4,
      title: "Social Engineering Awareness Training",
      description: "Interactive tutorial covering common social engineering tactics and psychological manipulation techniques.",
      category: "social-engineering",
      type: "tutorial",
      rating: 4.9,
      downloads: 18760,
      lastUpdated: "2024-12-03",
      difficulty: "Beginner",
      readTime: "45 min",
      featured: true
    },
    {
      id: 5,
      title: "Incident Response Template",
      description: "Step-by-step template for responding to security incidents, data breaches, and scam encounters.",
      category: "identity-theft",
      type: "template",
      rating: 4.6,
      downloads: 6840,
      lastUpdated: "2024-11-20",
      difficulty: "Intermediate",
      readTime: "20 min",
      featured: false
    },
    {
      id: 6,
      title: "Malware Analysis Fundamentals",
      description: "Introduction to malware analysis techniques, tools, and safe analysis environments.",
      category: "malware",
      type: "guide",
      rating: 4.5,
      downloads: 9320,
      lastUpdated: "2024-11-15",
      difficulty: "Advanced",
      readTime: "60 min",
      featured: false
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesType = selectedType === 'all' || resource.type === selectedType
    
    return matchesSearch && matchesCategory && matchesType
  })

  const featuredResources = resources.filter(resource => resource.featured)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Resources</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive guides, tools, and educational materials to help you stay safe online 
          and protect yourself from evolving threats.
        </p>
      </div>

      {/* Featured Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Star className="w-6 h-6 text-yellow-500 mr-2" />
          Featured Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{resource.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {resource.readTime}
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  {resource.downloads.toLocaleString()}
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center">
                <Book className="w-4 h-4 mr-2" />
                Access Resource
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* All Resources */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            All Resources ({filteredResources.length})
          </h2>
          <div className="flex items-center text-sm text-gray-500">
            <Filter className="w-4 h-4 mr-1" />
            Filtered Results
          </div>
        </div>

        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{resource.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {resource.readTime}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloads.toLocaleString()}
                    </div>
                  </div>
                  <span>Updated {new Date(resource.lastUpdated).toLocaleDateString()}</span>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center">
                    <Book className="w-4 h-4 mr-2" />
                    View
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 flex items-center">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 flex items-center">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resource Categories */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(1).map((category) => {
            const categoryResources = resources.filter(r => r.category === category.id)
            return (
              <div key={category.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{categoryResources.length} resources</span>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {categoryResources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()} downloads
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage
