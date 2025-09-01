
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {ArrowLeft, ThumbsUp, ThumbsDown, MessageCircle, Share2, Flag, Clock, Eye, AlertTriangle, Shield, Award, CheckCircle} from 'lucide-react'

const ForumThread: React.FC = () => {
  const { category, threadId } = useParams<{ category: string; threadId: string }>()

  const thread = {
    id: threadId,
    title: 'URGENT: New Amazon Prime phishing campaign targeting holiday shoppers',
    author: 'CyberGuard_Mike',
    authorRank: 'Expert Contributor',
    authorJoined: 'March 2023',
    authorPosts: 1247,
    authorReputation: 892,
    createdAt: '2 hours ago',
    views: 1847,
    likes: 15,
    severity: 'high',
    tags: ['phishing', 'amazon', 'urgent'],
    content: `
I've been tracking a sophisticated phishing campaign that started appearing this morning targeting Amazon Prime members. This is particularly dangerous because of the upcoming holiday shopping season.

**What makes this campaign dangerous:**

1. **Professional appearance**: The emails are nearly identical to legitimate Amazon communications
2. **Urgency tactics**: Claims your Prime membership will be suspended in 24 hours
3. **Sophisticated landing pages**: The fake websites look exactly like Amazon's login pages
4. **Mobile optimization**: The scam works seamlessly on mobile devices

**Red flags to watch for:**

- Email sender: "amazon-security@prime-verification.com" (note the suspicious domain)
- Subject line: "Prime Membership Suspension Notice - Action Required"
- The email asks you to "verify your account immediately"
- Links redirect to domains like "amazon-prime-secure.net" instead of amazon.com

**Screenshots and evidence:**

I've documented several examples and will be sharing them with Amazon's security team. The campaign appears to be targeting users in the US, Canada, and UK primarily.

**What to do if you received this email:**

1. DO NOT click any links in the email
2. Forward the email to stop-spoofing@amazon.com
3. Delete the email immediately
4. If you already clicked the link, change your Amazon password immediately
5. Monitor your account for any unauthorized activity

**Update (1 hour ago):** Amazon has confirmed they're aware of this campaign and are working to shut down the malicious domains.

Stay safe everyone, and please share this with anyone who might be vulnerable to this type of attack.
    `,
    isVerified: true
  }

  const replies = [
    {
      id: '1',
      author: 'SafetyFirst_Anna',
      authorRank: 'Community Member',
      authorPosts: 234,
      authorReputation: 156,
      createdAt: '1 hour ago',
      content: 'Thank you for this detailed warning! I actually received this exact email yesterday and almost fell for it. The fake website was incredibly convincing. Sharing this with my family group chat right now.',
      likes: 8,
      isVerified: false
    },
    {
      id: '2',
      author: 'TechSafety_Bob',
      authorRank: 'Security Analyst',
      authorPosts: 567,
      authorReputation: 423,
      createdAt: '45 minutes ago',
      content: 'Excellent analysis Mike! I\'ve seen similar campaigns targeting other major retailers. The sophistication level is definitely increasing. For anyone interested, I can share some technical indicators that security teams can use to detect these campaigns early.',
      likes: 12,
      isVerified: true
    },
    {
      id: '3',
      author: 'PhishHunter_Lisa',
      authorRank: 'Moderator',
      authorPosts: 892,
      authorReputation: 734,
      createdAt: '30 minutes ago',
      content: 'Adding this to our pinned threat alerts. @CyberGuard_Mike - could you share the IOCs (Indicators of Compromise) with our threat intelligence team? This information will help us update our detection systems.',
      likes: 15,
      isVerified: true,
      isModerator: true
    },
    {
      id: '4',
      author: 'NewUser_John',
      authorRank: 'New Member',
      authorPosts: 12,
      authorReputation: 8,
      createdAt: '15 minutes ago',
      content: 'I got this email too but I thought it was real because it looked so professional. Good thing I saw this thread before clicking anything. How can I report it to the authorities?',
      likes: 3,
      isVerified: false
    }
  ]

  const getRankColor = (rank: string, isModerator = false) => {
    if (isModerator) return 'text-green-600'
    if (rank.includes('Expert') || rank.includes('Analyst')) return 'text-blue-600'
    if (rank.includes('Moderator') || rank.includes('Admin')) return 'text-green-600'
    return 'text-gray-600'
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link 
              to={`/forum/${category}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to {category}</span>
            </Link>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded text-xs font-semibold border ${getSeverityColor(thread.severity)}`}>
                  {thread.severity.toUpperCase()} RISK
                </span>
                {thread.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{thread.views} views</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{thread.createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Thread */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6"
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{thread.title}</h1>
            
            {/* Author Info */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                {thread.author.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-gray-900">{thread.author}</span>
                  {thread.isVerified && (
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                  )}
                  <span className={`text-sm ${getRankColor(thread.authorRank)}`}>
                    {thread.authorRank}
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-x-4">
                  <span>Joined {thread.authorJoined}</span>
                  <span>•</span>
                  <span>{thread.authorPosts} posts</span>
                  <span>•</span>
                  <span>{thread.authorReputation} reputation</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {thread.createdAt}
              </div>
            </div>
            
            {/* Content */}
            <div className="prose max-w-none mb-6">
              <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                {thread.content}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                  <ThumbsUp className="h-5 w-5" />
                  <span>{thread.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                  <ThumbsDown className="h-5 w-5" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                <Flag className="h-5 w-5" />
                <span>Report</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Replies */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Replies ({replies.length})
          </h2>
          
          {replies.map((reply, index) => (
            <motion.div
              key={reply.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="p-6">
                {/* Reply Author Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm ${
                    reply.isModerator ? 'bg-green-600 text-white' : 
                    reply.isVerified ? 'bg-blue-600 text-white' : 'bg-gray-400 text-white'
                  }`}>
                    {reply.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900">{reply.author}</span>
                      {reply.isVerified && (
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                      )}
                      {reply.isModerator && (
                        <Award className="h-4 w-4 text-green-500" />
                      )}
                      <span className={`text-sm ${getRankColor(reply.authorRank, reply.isModerator)}`}>
                        {reply.authorRank}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-x-4">
                      <span>{reply.authorPosts} posts</span>
                      <span>•</span>
                      <span>{reply.authorReputation} reputation</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {reply.createdAt}
                  </div>
                </div>
                
                {/* Reply Content */}
                <div className="prose max-w-none mb-4">
                  <p className="text-gray-800 leading-relaxed">
                    {reply.content}
                  </p>
                </div>
                
                {/* Reply Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{reply.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                      <ThumbsDown className="h-4 w-4" />
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>Reply</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Flag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reply Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Post a Reply</h3>
            <textarea
              placeholder="Share your thoughts, experiences, or additional information..."
              rows={6}
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-600">
                Please be respectful and constructive in your response
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Post Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForumThread
