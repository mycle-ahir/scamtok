
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {MessageCircle, Eye, Clock, TrendingUp, Pin, ThumbsUp, AlertTriangle, Shield, Smartphone, DollarSign, Lock, ArrowLeft, Filter, Search} from 'lucide-react'

const ForumCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>()

  const categoryInfo = {
    'scams': {
      name: 'General Scams',
      description: 'Discussion about various types of scams and fraud',
      icon: AlertTriangle,
      color: 'red'
    },
    'ai-threats': {
      name: 'AI Threats',
      description: 'Deepfakes, voice cloning, and AI-powered attacks',
      icon: TrendingUp,
      color: 'purple'
    },
    'phishing': {
      name: 'Phishing & Email Scams',
      description: 'Email, SMS, and social media phishing attempts',
      icon: Shield,
      color: 'blue'
    },
    'crypto': {
      name: 'Cryptocurrency Scams',
      description: 'Crypto fraud, fake exchanges, and investment scams',
      icon: DollarSign,
      color: 'yellow'
    },
    'mobile': {
      name: 'Mobile & App Scams',
      description: 'Malicious apps, SMS scams, and mobile threats',
      icon: Smartphone,
      color: 'green'
    },
    'security': {
      name: 'General Security',
      description: 'Cybersecurity tips, tools, and best practices',
      icon: Lock,
      color: 'indigo'
    }
  }

  const currentCategory = categoryInfo[category as keyof typeof categoryInfo] || categoryInfo.scams
  const Icon = currentCategory.icon

  const threads = [
    {
      id: '1',
      title: 'URGENT: New Amazon Prime phishing campaign targeting holiday shoppers',
      author: 'CyberGuard_Mike',
      authorRank: 'Expert Contributor',
      authorPosts: 1247,
      createdAt: '2 hours ago',
      lastReply: '5 minutes ago',
      lastReplyBy: 'SafetyFirst_Anna',
      replies: 23,
      views: 1847,
      likes: 15,
      isPinned: false,
      isHot: true,
      tags: ['phishing', 'amazon', 'urgent'],
      severity: 'high'
    },
    {
      id: '2',
      title: 'Voice cloning scam targeting elderly - family emergency variant',
      author: 'AIWatch_Sarah',
      authorRank: 'AI Threat Specialist',
      authorPosts: 892,
      createdAt: '4 hours ago',
      lastReply: '1 hour ago',
      lastReplyBy: 'TechSafety_Bob',
      replies: 45,
      views: 3241,
      likes: 28,
      isPinned: true,
      isHot: true,
      tags: ['voice-cloning', 'ai', 'elderly'],
      severity: 'critical'
    },
    {
      id: '3',
      title: 'Fake Microsoft security alert emails - new template spotted',
      author: 'EmailExpert_Tom',
      authorRank: 'Moderator',
      authorPosts: 2156,
      createdAt: '6 hours ago',
      lastReply: '2 hours ago',
      lastReplyBy: 'PhishHunter_Lisa',
      replies: 34,
      views: 2198,
      likes: 19,
      isPinned: false,
      isHot: false,
      tags: ['microsoft', 'email', 'phishing'],
      severity: 'medium'
    },
    {
      id: '4',
      title: 'Romance scammer using deepfake videos on dating apps',
      author: 'DatingSafety_Jenny',
      authorRank: 'Community Member',
      authorPosts: 156,
      createdAt: '8 hours ago',
      lastReply: '3 hours ago',
      lastReplyBy: 'CyberGuard_Mike',
      replies: 67,
      views: 4521,
      likes: 42,
      isPinned: false,
      isHot: true,
      tags: ['romance-scam', 'deepfake', 'dating'],
      severity: 'high'
    },
    {
      id: '5',
      title: 'Fake crypto investment platform "CoinEarn24" - complete analysis',
      author: 'CryptoWatch_John',
      authorRank: 'Crypto Security Expert',
      authorPosts: 743,
      createdAt: '12 hours ago',
      lastReply: '4 hours ago',
      lastReplyBy: 'BlockchainSafety_Amy',
      replies: 89,
      views: 6834,
      likes: 56,
      isPinned: false,
      isHot: false,
      tags: ['crypto', 'investment', 'fake-platform'],
      severity: 'high'
    },
    {
      id: '6',
      title: 'Malicious QR codes appearing in parking meters - what to watch for',
      author: 'StreetSmart_Alex',
      authorRank: 'Field Reporter',
      authorPosts: 298,
      createdAt: '1 day ago',
      lastReply: '6 hours ago',
      lastReplyBy: 'QRSafety_Maria',
      replies: 28,
      views: 1923,
      likes: 21,
      isPinned: false,
      isHot: false,
      tags: ['qr-code', 'parking', 'physical'],
      severity: 'medium'
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getRankColor = (rank: string) => {
    if (rank.includes('Moderator') || rank.includes('Admin')) return 'text-green-600'
    if (rank.includes('Expert') || rank.includes('Specialist')) return 'text-blue-600'
    return 'text-gray-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link 
              to="/forum"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Forum</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg bg-${currentCategory.color}-100 text-${currentCategory.color}-800 border border-${currentCategory.color}-200`}>
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{currentCategory.name}</h1>
              <p className="text-lg text-gray-600">{currentCategory.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search threads..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  New Thread
                </button>
              </div>
            </div>

            {/* Thread List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Discussions</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {threads.map((thread, index) => (
                  <motion.div
                    key={thread.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Thread Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {thread.isPinned && (
                            <Pin className="h-4 w-4 text-yellow-600" />
                          )}
                          {thread.isHot && (
                            <TrendingUp className="h-4 w-4 text-red-500" />
                          )}
                          <span className={`px-2 py-1 rounded text-xs font-semibold border ${getSeverityColor(thread.severity)}`}>
                            {thread.severity.toUpperCase()}
                          </span>
                          {thread.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link 
                          to={`/forum/${category}/${thread.id}`}
                          className="block"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2">
                            {thread.title}
                          </h3>
                        </Link>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <span>by</span>
                            <span className="font-medium text-gray-900">{thread.author}</span>
                            <span className={`text-xs ${getRankColor(thread.authorRank)}`}>
                              ({thread.authorRank})
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{thread.createdAt}</span>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600">
                          <span>Last reply by </span>
                          <span className="font-medium text-gray-900">{thread.lastReplyBy}</span>
                          <span> • {thread.lastReply}</span>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="flex flex-col items-center space-y-4 text-center min-w-0">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{thread.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{thread.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{thread.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Showing 1-6 of 247 threads
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      Previous
                    </button>
                    <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">
                      1
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      2
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      3
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Threads</span>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Posts</span>
                  <span className="font-semibold">1,834</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Today</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Members</span>
                  <span className="font-semibold">1,247</span>
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {[
                  { name: 'CyberGuard_Mike', posts: 156, rank: 'Expert' },
                  { name: 'AIWatch_Sarah', posts: 134, rank: 'Specialist' },
                  { name: 'EmailExpert_Tom', posts: 98, rank: 'Moderator' },
                  { name: 'PhishHunter_Lisa', posts: 87, rank: 'Contributor' }
                ].map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{contributor.name}</div>
                      <div className="text-xs text-gray-600">{contributor.rank}</div>
                    </div>
                    <div className="text-sm text-gray-600">{contributor.posts} posts</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Categories */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Categories</h3>
              <div className="space-y-2">
                {Object.entries(categoryInfo)
                  .filter(([key]) => key !== category)
                  .slice(0, 3)
                  .map(([key, cat]) => (
                    <Link 
                      key={key}
                      to={`/forum/${key}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{cat.name}</div>
                      <div className="text-sm text-gray-600">{cat.description}</div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForumCategory
