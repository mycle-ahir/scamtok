
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {Shield, AlertTriangle, Users, MessageCircle, Eye, Clock, TrendingUp, Search, Filter, Plus, Star, CheckCircle, Award, Target, Zap, Globe, UserCheck, BarChart3, FileText, Calendar, ArrowRight} from 'lucide-react'

const ForumPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Expert Cybersecurity Community Forum - ScamTok",
    "description": "Join 50,000+ verified cybersecurity professionals in expert discussions about AI threats, scam detection, phishing protection, and digital security intelligence.",
    "url": "https://scamtok.com/forum",
    "mainEntity": {
      "@type": "DiscussionForumPosting",
      "headline": "Expert Cybersecurity Community Forum",
      "description": "Professional forum for cybersecurity experts, researchers, and practitioners to share threat intelligence and protection strategies",
      "url": "https://scamtok.com/forum",
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-27",
      "author": {
        "@type": "Organization",
        "name": "ScamTok Security Research Team"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://scamtok.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Forum",
          "item": "https://scamtok.com/forum"
        }
      ]
    }
  }

  const categories = [
    {
      id: 'scams',
      name: 'General Scams',
      description: 'Expert analysis of traditional and emerging scam techniques',
      icon: Shield,
      color: 'blue',
      threads: 2847,
      posts: 18392,
      moderators: ['Dr. Sarah Chen (CISSP)', 'Alex Rodriguez (GCFA)'],
      lastActivity: '2 min ago',
      featured: true
    },
    {
      id: 'ai-threats',
      name: 'AI Threats',
      description: 'Deepfakes, voice cloning, and AI-powered attack analysis',
      icon: AlertTriangle,
      color: 'red',
      threads: 1563,
      posts: 9847,
      moderators: ['Dr. Jennifer Liu (PhD MIT)', 'Marcus Thompson (SANS)'],
      lastActivity: '5 min ago',
      featured: true
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      description: 'Blockchain security, DeFi exploits, and crypto fraud research',
      icon: TrendingUp,
      color: 'yellow',
      threads: 1892,
      posts: 12456,
      moderators: ['Dr. Emily Watson (PhD Crypto)', 'David Kim (GCFA)'],
      lastActivity: '1 min ago',
      featured: true
    },
    {
      id: 'phishing',
      name: 'Phishing & Email',
      description: 'Advanced email threat analysis and detection techniques',
      icon: MessageCircle,
      color: 'green',
      threads: 2156,
      posts: 14782,
      moderators: ['Michael Chen (GSEC)', 'Lisa Park (CISSP)'],
      lastActivity: '3 min ago',
      featured: false
    },
    {
      id: 'mobile-security',
      name: 'Mobile Security',
      description: 'iOS/Android malware, app security, and mobile threat research',
      icon: Users,
      color: 'purple',
      threads: 987,
      posts: 6543,
      moderators: ['Dr. Robert Kim (Mobile Security)', 'Anna Lee (GSEC)'],
      lastActivity: '7 min ago',
      featured: false
    },
    {
      id: 'social-engineering',
      name: 'Social Engineering',
      description: 'Psychological manipulation tactics and defense strategies',
      icon: Target,
      color: 'orange',
      threads: 1234,
      posts: 8765,
      moderators: ['Dr. Patricia Wilson (Psychology)', 'James Brown (CISSP)'],
      lastActivity: '4 min ago',
      featured: false
    }
  ]

  const featuredThreads = [
    {
      id: 1,
      title: "URGENT: New AI Voice Cloning Campaign Targeting Senior Citizens",
      category: "AI Threats",
      author: "Dr. Jennifer Liu",
      credentials: "PhD MIT, AI Security Specialist",
      verified: true,
      replies: 147,
      views: "23.4k",
      lastActivity: "15 min ago",
      severity: "Critical",
      tags: ["Voice Cloning", "Elder Fraud", "Emergency Scam"],
      expertAnalysis: true,
      pinned: true
    },
    {
      id: 2,
      title: "Technical Analysis: ChatGPT-4 Generated Phishing Emails",
      category: "Phishing & Email",
      author: "Michael Chen",
      credentials: "GSEC, Email Security Lead",
      verified: true,
      replies: 89,
      views: "18.7k",
      lastActivity: "32 min ago",
      severity: "High",
      tags: ["AI Generated", "Phishing", "Technical Analysis"],
      expertAnalysis: true,
      pinned: false
    },
    {
      id: 3,
      title: "Blockchain Forensics: Tracking $12M DeFi Protocol Exploit",
      category: "Cryptocurrency",
      author: "Dr. Emily Watson",
      credentials: "PhD Cryptography, CISA",
      verified: true,
      replies: 203,
      views: "31.2k",
      lastActivity: "1 hour ago",
      severity: "High",
      tags: ["DeFi", "Blockchain Forensics", "Exploit Analysis"],
      expertAnalysis: true,
      pinned: false
    },
    {
      id: 4,
      title: "WhatsApp Business Verification Scam: IOCs and Mitigation",
      category: "General Scams",
      author: "Alex Rodriguez",
      credentials: "GCFA, Threat Intelligence",
      verified: true,
      replies: 156,
      views: "27.8k",
      lastActivity: "2 hours ago",
      severity: "Medium",
      tags: ["WhatsApp", "Business Scam", "IOCs"],
      expertAnalysis: true,
      pinned: false
    }
  ]

  const topContributors = [
    {
      name: "Dr. Sarah Chen",
      credentials: "PhD Computer Science, CISSP",
      role: "AI Security Researcher",
      posts: 2847,
      reputation: 9850,
      specialties: ["AI Threats", "Machine Learning Security"],
      verified: true,
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    },
    {
      name: "Michael Rodriguez",
      credentials: "GCTI, SANS Certified",
      role: "Threat Intelligence Lead",
      posts: 2156,
      reputation: 8743,
      specialties: ["Threat Intelligence", "Malware Analysis"],
      verified: true,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    },
    {
      name: "Dr. Emily Watson",
      credentials: "PhD Cryptography, CISA",
      role: "Blockchain Security Expert",
      posts: 1987,
      reputation: 9234,
      specialties: ["Blockchain Security", "Cryptocurrency Forensics"],
      verified: true,
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    }
  ]

  const realtimeStats = {
    onlineExperts: 847,
    activeDiscussions: 234,
    threatsTracked: 1247,
    fraudPrevented: "$2.3M",
    lastUpdate: new Date().toLocaleTimeString()
  }

  return (
    <>
      <Helmet>
        <title>Expert Cybersecurity Community Forum - ScamTok</title>
        <meta name="description" content="Join 50,000+ verified cybersecurity professionals in expert discussions about AI threats, scam detection, phishing protection, and digital security intelligence." />
        <meta name="keywords" content="cybersecurity forum, expert discussions, AI threats, scam detection, phishing protection, threat intelligence, security professionals, CISSP, CISM, cybersecurity community" />
        <link rel="canonical" href="https://scamtok.com/forum" />
        <meta property="og:title" content="Expert Cybersecurity Community Forum - ScamTok" />
        <meta property="og:description" content="Join 50,000+ verified cybersecurity professionals in expert discussions about AI threats and digital security." />
        <meta property="og:url" content="https://scamtok.com/forum" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Real-time Stats */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Expert Cybersecurity Community
              </h1>
              <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Join 50,000+ verified security professionals, researchers, and analysts in real-time threat intelligence sharing and expert discussions
              </p>
              
              {/* Trust Indicators */}
              <div className="flex justify-center items-center space-x-6 mb-8 flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <UserCheck className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium">Expert Verified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium">CISSP Moderated</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium">24/7 Monitoring</span>
                </div>
              </div>
            </div>

            {/* Real-time Statistics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{realtimeStats.onlineExperts}</div>
                <div className="text-sm text-blue-200">Online Experts</div>
                <div className="flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                  <span className="text-xs text-green-300">Live</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{realtimeStats.activeDiscussions}</div>
                <div className="text-sm text-blue-200">Active Discussions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{realtimeStats.threatsTracked}</div>
                <div className="text-sm text-blue-200">Threats Tracked</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{realtimeStats.fraudPrevented}</div>
                <div className="text-sm text-blue-200">Fraud Prevented</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-sm text-blue-200">Last Update</div>
                <div className="text-sm font-medium text-white">{realtimeStats.lastUpdate}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Navigation */}
        <section className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search expert discussions, threats, IOCs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                  <span>New Discussion</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Expert Discussions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Featured Expert Discussions</h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span>Live Updates</span>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {featuredThreads.map((thread, index) => (
                    <motion.div
                      key={thread.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {thread.pinned && (
                            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                              PINNED
                            </div>
                          )}
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            thread.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                            thread.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {thread.severity} Risk
                          </span>
                          {thread.expertAnalysis && (
                            <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              <CheckCircle className="h-3 w-3" />
                              <span>Expert Analysis</span>
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{thread.lastActivity}</span>
                      </div>

                      <Link to={`/forum/${thread.category.toLowerCase().replace(/\s+/g, '-')}/${thread.id}`} className="block">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                          {thread.title}
                        </h3>
                      </Link>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-900">{thread.author}</span>
                          {thread.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                          <span className="text-xs text-gray-600">• {thread.credentials}</span>
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {thread.category}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{thread.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{thread.views} views</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {thread.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Category Grid */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Expert Categories</h2>
                  <p className="text-gray-600 mt-1">Specialized discussions moderated by certified professionals</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category, index) => {
                      const Icon = category.icon
                      return (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg bg-${category.color}-100`}>
                              <Icon className={`h-6 w-6 text-${category.color}-600`} />
                            </div>
                            {category.featured && (
                              <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                                <Star className="h-3 w-3" />
                                <span>Featured</span>
                              </div>
                            )}
                          </div>

                          <Link to={`/forum/${category.id}`} className="block">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                              {category.name}
                            </h3>
                          </Link>
                          <p className="text-gray-600 mb-4">{category.description}</p>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Expert Moderators:</span>
                            </div>
                            <div className="space-y-1">
                              {category.moderators.map((moderator, modIndex) => (
                                <div key={modIndex} className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                  <span className="text-gray-700">{moderator}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-600 pt-3 border-t border-gray-100">
                              <div className="flex items-center space-x-4">
                                <span>{category.threads.toLocaleString()} threads</span>
                                <span>{category.posts.toLocaleString()} posts</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{category.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Contributors */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Top Expert Contributors</h3>
                  <p className="text-sm text-gray-600 mt-1">Verified security professionals</p>
                </div>
                <div className="p-6 space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-900">{contributor.name}</span>
                          {contributor.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <p className="text-xs text-gray-600">{contributor.credentials}</p>
                        <p className="text-xs text-blue-600">{contributor.role}</p>
                        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                          <span>{contributor.posts.toLocaleString()} posts</span>
                          <span className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>{contributor.reputation.toLocaleString()}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-time Threat Monitor */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Live Threat Monitor</h3>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">Real-time updates</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">CRITICAL</span>
                      <span className="text-xs text-gray-600">2 min ago</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">Voice Cloning Campaign</p>
                    <p className="text-xs text-gray-600">847 new cases detected</p>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">HIGH</span>
                      <span className="text-xs text-gray-600">15 min ago</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">Deepfake Investment Ads</p>
                    <p className="text-xs text-gray-600">$2.3M attempted fraud</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">MEDIUM</span>
                      <span className="text-xs text-gray-600">1 hour ago</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">WhatsApp Business Scam</p>
                    <p className="text-xs text-gray-600">156 reports verified</p>
                  </div>
                </div>
              </div>

              {/* Expert Resources */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Expert Resources</h3>
                </div>
                <div className="p-6 space-y-3">
                  <Link to="/resources" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">Research Papers</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </Link>

                  <Link to="/resources" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Threat Intelligence</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </Link>

                  <Link to="/resources" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-medium">Security Tools</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </Link>

                  <Link to="/careers" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-yellow-600" />
                      <span className="text-sm font-medium">Certifications</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForumPage
