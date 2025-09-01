
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {MessageCircle, Users, TrendingUp, Clock, Pin, AlertTriangle, Shield, Smartphone, DollarSign, Lock, Eye, ThumbsUp, CheckCircle, Award, Star, UserCheck, Zap, BarChart3, Globe, Target} from 'lucide-react'

const ForumPage: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    timeZoneName: 'short'
  })

  const categories = [
    {
      id: 'scams',
      name: 'General Scams & Fraud',
      description: 'Expert analysis of scam techniques, prevention strategies, and victim support',
      icon: AlertTriangle,
      color: 'red',
      threads: 2847,
      posts: 18934,
      experts: 23,
      lastPost: {
        title: 'Advanced BEC attack analysis: CEO impersonation via deepfake',
        author: 'Dr. Sarah Chen',
        credentials: 'PhD Computer Science, CISSP',
        time: '3 minutes ago',
        verified: true
      }
    },
    {
      id: 'ai-threats',
      name: 'AI & Synthetic Media Threats',
      description: 'Cutting-edge research on AI-powered attacks, deepfakes, and voice cloning',
      icon: TrendingUp,
      color: 'purple',
      threads: 1289,
      posts: 7156,
      experts: 18,
      lastPost: {
        title: 'Voice synthesis detection: Technical countermeasures update',
        author: 'Dr. Michael Torres',
        credentials: 'AI Security Researcher, MIT',
        time: '8 minutes ago',
        verified: true
      }
    },
    {
      id: 'phishing',
      name: 'Phishing & Email Security',
      description: 'Technical analysis of phishing campaigns and email security best practices',
      icon: Shield,
      color: 'blue',
      threads: 3234,
      posts: 19567,
      experts: 31,
      lastPost: {
        title: 'Microsoft 365 phishing: New evasion techniques identified',
        author: 'Jennifer Walsh',
        credentials: 'GCFA, Email Security Specialist',
        time: '12 minutes ago',
        verified: true
      }
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency & DeFi Security',
      description: 'Blockchain security research, smart contract audits, and crypto fraud analysis',
      icon: DollarSign,
      color: 'yellow',
      threads: 1834,
      posts: 9521,
      experts: 15,
      lastPost: {
        title: 'DeFi protocol exploit: $12M bridge attack post-mortem',
        author: 'Alex Kim',
        credentials: 'Blockchain Security Auditor',
        time: '25 minutes ago',
        verified: true
      }
    },
    {
      id: 'mobile',
      name: 'Mobile & IoT Security',
      description: 'Mobile malware analysis, IoT vulnerabilities, and device security research',
      icon: Smartphone,
      color: 'green',
      threads: 1167,
      posts: 6289,
      experts: 12,
      lastPost: {
        title: 'Android banking trojan evolution: 2024 threat landscape',
        author: 'Dr. Lisa Park',
        credentials: 'Mobile Security Lead, SANS',
        time: '1 hour ago',
        verified: true
      }
    },
    {
      id: 'security',
      name: 'Enterprise Security',
      description: 'Corporate security frameworks, incident response, and threat intelligence',
      icon: Lock,
      color: 'indigo',
      threads: 2092,
      posts: 11634,
      experts: 27,
      lastPost: {
        title: 'Zero Trust implementation: Lessons from Fortune 500 deployment',
        author: 'Robert Singh',
        credentials: 'CISO, CISSP',
        time: '2 hours ago',
        verified: true
      }
    }
  ]

  const pinnedThreads = [
    {
      title: '🚨 CRITICAL ALERT: Multi-vector AI-powered campaign targeting financial institutions',
      author: 'ScamTok_ThreatIntel',
      authorType: 'Official Threat Intelligence Team',
      category: 'AI Threats',
      replies: 287,
      views: '45.2k',
      time: '6 hours ago',
      isPinned: true,
      severity: 'critical',
      verificationLevel: 'Government Verified'
    },
    {
      title: '📋 Official Reporting Guidelines: How to submit verified threat intelligence',
      author: 'Dr. Emily Watson',
      authorType: 'Chief Security Officer',
      category: 'Guidelines',
      replies: 156,
      views: '23.8k',
      time: '2 days ago',
      isPinned: true,
      severity: 'info',
      verificationLevel: 'Expert Authored'
    },
    {
      title: '🔬 Research Collaboration: Academic partnerships and peer review process',
      author: 'Prof. David Chen',
      authorType: 'Academic Research Director',
      category: 'Research',
      replies: 89,
      views: '12.4k',
      time: '1 week ago',
      isPinned: true,
      severity: 'info',
      verificationLevel: 'Peer Reviewed'
    }
  ]

  const recentThreads = [
    {
      title: 'Technical analysis: ChatGPT-4 powered spear phishing campaign',
      author: 'Dr. Amanda Rodriguez',
      credentials: 'PhD AI Security, CISSP',
      category: 'AI Threats',
      replies: 67,
      views: '8.3k',
      time: '15 minutes ago',
      hasNewPosts: true,
      expertLevel: 'Subject Matter Expert',
      verificationBadge: true
    },
    {
      title: 'Romance scam evolution: Deepfake video calls in dating apps',
      author: 'Sarah Kim',
      credentials: 'Digital Forensics Specialist',
      category: 'Scams',
      replies: 134,
      views: '15.7k',
      time: '45 minutes ago',
      hasNewPosts: true,
      expertLevel: 'Certified Professional',
      verificationBadge: true
    },
    {
      title: 'Supply chain attack: Compromised npm packages targeting crypto wallets',
      author: 'Michael Chen',
      credentials: 'Security Researcher, SANS',
      category: 'Cryptocurrency',
      replies: 89,
      views: '12.1k',
      time: '1 hour ago',
      hasNewPosts: true,
      expertLevel: 'Industry Expert',
      verificationBadge: true
    },
    {
      title: 'Mobile malware campaign: Banking trojans via fake COVID apps',
      author: 'Dr. Jennifer Liu',
      credentials: 'Mobile Security Lead',
      category: 'Mobile Security',
      replies: 45,
      views: '6.8k',
      time: '2 hours ago',
      hasNewPosts: false,
      expertLevel: 'Research Scientist',
      verificationBadge: true
    },
    {
      title: 'Enterprise breach analysis: Lessons from recent healthcare attack',
      author: 'Robert Singh',
      credentials: 'CISO, Fortune 500',
      category: 'Enterprise',
      replies: 78,
      views: '9.4k',
      time: '3 hours ago',
      hasNewPosts: true,
      expertLevel: 'C-Level Executive',
      verificationBadge: true
    }
  ]

  const forumStats = {
    totalMembers: '52,847',
    verifiedExperts: '1,247',
    totalThreads: '12,963',
    totalPosts: '87,101',
    onlineNow: '2,834',
    expertOnline: '156'
  }

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-red-100 text-red-800 border-red-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'info': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header with Authority Indicators */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-4 mb-6 flex-wrap gap-2">
              <div className="flex items-center space-x-2 bg-green-50 rounded-full px-3 py-1 border border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Expert Moderated</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-3 py-1 border border-blue-200">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Peer Reviewed</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 rounded-full px-3 py-1 border border-purple-200">
                <Globe className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">Global Intelligence</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 rounded-full px-3 py-1 border border-orange-200">
                <Zap className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Real-time Updates</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Expert Security Community</h1>
            <p className="text-lg text-gray-600 mb-6">
              Join certified cybersecurity professionals, researchers, and analysts in collaborative threat intelligence
            </p>
            
            {/* Real-time Status */}
            <div className="mb-6 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live monitoring active</span>
                </div>
                <span>•</span>
                <span>Last threat update: {currentTime}</span>
                <span>•</span>
                <span>{forumStats.expertOnline} experts online</span>
              </div>
            </div>
            
            {/* Enhanced Forum Stats */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">{forumStats.totalMembers}</div>
                <div className="text-sm text-gray-600">Total Members</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-green-600">{forumStats.verifiedExperts}</div>
                <div className="text-sm text-gray-600">Verified Experts</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-purple-600">{forumStats.totalThreads}</div>
                <div className="text-sm text-gray-600">Research Threads</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-orange-600">{forumStats.totalPosts}</div>
                <div className="text-sm text-gray-600">Expert Posts</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-red-600">{forumStats.onlineNow}</div>
                <div className="text-sm text-gray-600">Online Now</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
                <div className="text-sm text-gray-600">Threat Watch</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Critical Alerts & Pinned Threads */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                  <Pin className="h-5 w-5 text-yellow-600" />
                  <span>Critical Security Alerts & Announcements</span>
                  <div className="flex items-center space-x-1 ml-auto">
                    <Target className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-red-600 font-medium">THREAT LEVEL: ELEVATED</span>
                  </div>
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {pinnedThreads.map((thread, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Pin className="h-4 w-4 text-yellow-600" />
                          <span className={`px-2 py-1 rounded text-xs font-semibold border ${getSeverityColor(thread.severity)}`}>
                            {thread.severity === 'critical' ? 'CRITICAL ALERT' : 'PINNED'}
                          </span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                            {thread.verificationLevel}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {thread.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{thread.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <UserCheck className="h-4 w-4" />
                            <span className="font-medium text-gray-900">{thread.author}</span>
                          </div>
                          <span className="text-blue-600 text-xs">{thread.authorType}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{thread.replies} expert replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{thread.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{thread.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Categories */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Expert Research Categories</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BarChart3 className="h-4 w-4" />
                    <span>Real-time activity</span>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {categories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link 
                        to={`/forum/${category.id}`}
                        className="block p-6 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg border ${getColorClasses(category.color)}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <UserCheck className="h-4 w-4" />
                                  <span>{category.experts} experts</span>
                                </div>
                                <span>{category.threads} threads</span>
                                <span>{category.posts} posts</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-3">{category.description}</p>
                            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-gray-900 mb-1">
                                    Latest Expert Analysis:
                                  </div>
                                  <div className="text-sm text-gray-700">{category.lastPost.title}</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center space-x-1">
                                    {category.lastPost.verified && <CheckCircle className="h-3 w-3 text-green-500" />}
                                    <span className="font-medium">{category.lastPost.author}</span>
                                  </div>
                                  <span className="text-blue-600">{category.lastPost.credentials}</span>
                                </div>
                                <span>{category.lastPost.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Expert Activity Feed */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Live Expert Activity</span>
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentThreads.slice(0, 4).map((thread, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${thread.hasNewPosts ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'}`} />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{thread.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          {thread.verificationBadge && <CheckCircle className="h-3 w-3 text-green-500" />}
                          <span className="text-xs font-medium text-gray-900">{thread.author}</span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{thread.credentials}</div>
                        <div className="flex items-center space-x-2 mt-2 text-xs text-gray-600">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{thread.category}</span>
                          <span>{thread.replies} replies</span>
                          <span>{thread.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Contributors */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Top Expert Contributors</span>
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { 
                    name: 'Dr. Sarah Chen', 
                    title: 'AI Security Researcher',
                    credentials: 'PhD MIT, CISSP',
                    posts: 1847, 
                    reputation: 9.8,
                    specialties: ['AI Threats', 'Machine Learning Security']
                  },
                  { 
                    name: 'Michael Rodriguez', 
                    title: 'Threat Intelligence Lead',
                    credentials: 'GCTI, SANS Certified',
                    posts: 1634, 
                    reputation: 9.7,
                    specialties: ['Threat Intel', 'Malware Analysis']
                  },
                  { 
                    name: 'Dr. Emily Watson', 
                    title: 'Blockchain Security Expert',
                    credentials: 'PhD Cryptography, CISA',
                    posts: 1456, 
                    reputation: 9.6,
                    specialties: ['Cryptocurrency', 'Smart Contracts']
                  },
                  { 
                    name: 'Jennifer Walsh', 
                    title: 'Email Security Specialist',
                    credentials: 'GCFA, Email Security',
                    posts: 1289, 
                    reputation: 9.5,
                    specialties: ['Phishing', 'Email Security']
                  }
                ].map((expert, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {expert.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <div className="font-medium text-gray-900 text-sm">{expert.name}</div>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="text-xs text-gray-600">{expert.title}</div>
                          <div className="text-xs text-blue-600">{expert.credentials}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">{expert.reputation}</span>
                        </div>
                        <div className="text-xs text-gray-600">{expert.posts} posts</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {expert.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/update-report"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <AlertTriangle className="h-4 w-4" />
                  <span>Report New Threat</span>
                </Link>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Start Research Thread
                </button>
                <Link 
                  to="/resources"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors text-center block"
                >
                  Access Research Library
                </Link>
              </div>
            </div>

            {/* Expert Guidelines */}
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Expert Community Standards</span>
              </h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Peer review all technical findings</li>
                <li>• Cite authoritative sources and research</li>
                <li>• Maintain professional discourse</li>
                <li>• Protect sensitive investigation details</li>
                <li>• Collaborate on threat intelligence</li>
                <li>• Follow responsible disclosure practices</li>
              </ul>
            </div>

            {/* Certification Info */}
            <div className="bg-green-50 rounded-lg border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Expert Verification</h3>
              <p className="text-sm text-green-800 mb-3">
                Our community maintains the highest standards through verified expert credentials and peer review.
              </p>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Industry certifications verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Academic credentials confirmed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Professional experience validated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForumPage
