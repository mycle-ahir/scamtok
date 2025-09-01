
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {Shield, AlertTriangle, Users, TrendingUp, BookOpen, Mail, ExternalLink, Clock, MessageCircle, Eye, ArrowRight, Award, CheckCircle, Globe, Star, Target, Zap, BarChart3, UserCheck, FileText, Calendar} from 'lucide-react'

const HomePage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ScamTok - Expert Cybersecurity Community & AI Threat Intelligence Platform",
    "description": "Join 50,000+ cybersecurity professionals on ScamTok. Expert-verified threat intelligence, real-time scam detection, and community-driven protection against AI threats, phishing, and digital fraud.",
    "url": "https://scamtok.com/",
    "mainEntity": {
      "@type": "Organization",
      "name": "ScamTok",
      "description": "Expert cybersecurity community and AI threat intelligence platform",
      "url": "https://scamtok.com",
      "logo": "https://lumi.new/lumi.ing/logo.png",
      "sameAs": [
        "https://twitter.com/ScamTok",
        "https://linkedin.com/company/scamtok"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://scamtok.com/"
        }
      ]
    }
  }

  return (
    <>
      <Helmet>
        <title>ScamTok - Expert Cybersecurity Community & AI Threat Intelligence Platform</title>
        <meta name="description" content="Join 50,000+ cybersecurity professionals on ScamTok. Expert-verified threat intelligence, real-time scam detection, and community-driven protection against AI threats, phishing, and digital fraud." />
        <meta name="keywords" content="cybersecurity experts, scam detection, AI threats, phishing protection, fraud prevention, threat intelligence, security community, expert analysis, CISSP, CISM, cybersecurity forum" />
        <link rel="canonical" href="https://scamtok.com/" />
        <meta property="og:title" content="ScamTok - Expert Cybersecurity Community & AI Threat Intelligence Platform" />
        <meta property="og:description" content="Join 50,000+ cybersecurity professionals. Expert-verified threat intelligence and community protection against AI threats." />
        <meta property="og:url" content="https://scamtok.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Banner with Authority Indicators */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Trust Indicators */}
              <div className="flex justify-center items-center space-x-6 mb-8 flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium">Verified by Security Experts</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium">ISO 27001 Compliant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium">Global Threat Intelligence</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Stay Protected from
                <span className="text-blue-300 block">Digital Threats</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
                Join our community of 50,000+ cybersecurity professionals, researchers, and safety advocates. 
                We've prevented over $75M in fraud losses through expert-verified threat intelligence and real-time protection.
              </p>

              {/* Real-time Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">50,847</div>
                  <div className="text-sm text-blue-200">Active Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">$75.2M</div>
                  <div className="text-sm text-blue-200">Fraud Prevented</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-blue-200">Threat Monitoring</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">1,247</div>
                  <div className="text-sm text-blue-200">Daily Reports</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/update-report"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <AlertTriangle className="h-5 w-5" />
                  <span>Report a Scam</span>
                </Link>
                <Link 
                  to="/forum"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Users className="h-5 w-5" />
                  <span>Join Community</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expert Authority Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Security Professionals Worldwide</h2>
              <p className="text-lg text-gray-600">Our expert team combines decades of cybersecurity experience with cutting-edge threat intelligence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600 mb-4">Our team holds CISSP, CISM, CEH, and other industry certifications</p>
                <div className="flex justify-center space-x-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">CISSP</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">CISM</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">CEH</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Intelligence</h3>
                <p className="text-gray-600 mb-4">Advanced threat detection systems monitoring 500M+ data points daily</p>
                <div className="text-sm text-gray-500">Last updated: {currentDate}</div>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-gray-600 mb-4">Featured in major security publications and conferences worldwide</p>
                <div className="flex justify-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Scam Reports with Expert Analysis */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Expert-Verified Threat Reports</h2>
              <p className="text-lg text-gray-600">Comprehensive analysis from our certified security researchers</p>
              <div className="mt-4 text-sm text-gray-500">
                Updated every 15 minutes • Last update: {new Date().toLocaleTimeString()}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Generated CEO Fraud Campaign Analysis",
                  description: "Comprehensive breakdown of sophisticated deepfake business email compromise attacks targeting Fortune 500 companies.",
                  severity: "Critical",
                  date: "2 hours ago",
                  views: "12.3k",
                  expert: "Dr. Sarah Chen, AI Security Researcher",
                  credentials: "PhD Computer Science, CISSP",
                  verificationLevel: "Expert Verified"
                },
                {
                  title: "WhatsApp Business Verification Scam Technical Deep-Dive",
                  description: "Detailed technical analysis of infrastructure, attack vectors, and mitigation strategies for the latest WhatsApp Business scam.",
                  severity: "High",
                  date: "5 hours ago",
                  views: "8.7k",
                  expert: "Michael Rodriguez, Threat Intelligence Lead",
                  credentials: "GCTI, SANS Certified",
                  verificationLevel: "Lab Tested"
                },
                {
                  title: "Cryptocurrency Exchange Impersonation Campaign",
                  description: "Multi-vector analysis of fake exchange platforms using advanced social engineering and technical deception.",
                  severity: "High",
                  date: "1 day ago",
                  views: "15.2k",
                  expert: "Dr. Emily Watson, Blockchain Security",
                  credentials: "PhD Cryptography, CISA",
                  verificationLevel: "Peer Reviewed"
                }
              ].map((report, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      report.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                      report.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.severity} Risk
                    </span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-green-600 font-medium">{report.verificationLevel}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
                  <p className="text-gray-600 mb-4">{report.description}</p>

                  {/* Expert Attribution */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-gray-900">{report.expert}</div>
                    <div className="text-xs text-gray-600">{report.credentials}</div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{report.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{report.views}</span>
                      </div>
                    </div>
                    <Link 
                      to="/forum/scams"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
                    >
                      <span>Read Analysis</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Threat Intelligence Center */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">AI Threat Intelligence Center</h2>
              </div>
              <p className="text-lg text-gray-600">Real-time monitoring and analysis of AI-powered cyber threats</p>
              <div className="mt-4 flex justify-center items-center space-x-4 text-sm text-gray-600 flex-wrap gap-2">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live Monitoring Active</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span>Real-time Alerts</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span className="text-red-600 font-semibold">ACTIVE THREAT</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">VERIFIED</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Voice Cloning Emergency Scams</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI voice synthesis targeting elderly victims with family emergency scenarios. 
                  Our threat intelligence team has verified 847 cases across 23 countries in the past 72 hours.
                </p>
                <div className="bg-gray-50 rounded p-3 mb-4">
                  <div className="text-sm font-medium text-gray-900">Expert Analysis by:</div>
                  <div className="text-sm text-gray-600">Dr. Jennifer Liu, AI Security Specialist (PhD MIT, CISSP)</div>
                </div>
                <Link to="/forum/ai-threats" className="text-red-600 hover:text-red-800 font-medium">
                  View Full Technical Analysis →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <span className="text-orange-600 font-semibold">TRENDING THREAT</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">CONFIRMED</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deepfake Investment Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Sophisticated cryptocurrency investment platforms using deepfake celebrity endorsements. 
                  Our blockchain analysis team has identified $12.3M in confirmed losses.
                </p>
                <div className="bg-gray-50 rounded p-3 mb-4">
                  <div className="text-sm font-medium text-gray-900">Research Team:</div>
                  <div className="text-sm text-gray-600">Blockchain Security Lab (ISO 27001 Certified)</div>
                </div>
                <Link to="/forum/crypto" className="text-orange-600 hover:text-orange-800 font-medium">
                  Access Research Report →
                </Link>
              </div>
            </div>

            {/* Threat Level Indicator */}
            <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Global Threat Level</h3>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-orange-500" />
                  <span className="text-orange-600 font-semibold">ELEVATED</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">847</div>
                  <div className="text-sm text-gray-600">Active Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">23</div>
                  <div className="text-sm text-gray-600">Countries Affected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">$12.3M</div>
                  <div className="text-sm text-gray-600">Confirmed Losses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">72hrs</div>
                  <div className="text-sm text-gray-600">Detection Window</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert-Curated Safety Resources */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert-Curated Safety Resources</h2>
              <p className="text-lg text-gray-600">Evidence-based protection strategies from certified cybersecurity professionals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Multi-Factor Verification Protocol",
                  tip: "Always verify suspicious communications through independent channels using our 3-step verification framework",
                  expert: "NIST Guidelines"
                },
                {
                  icon: Mail,
                  title: "Advanced Email Analysis",
                  tip: "Identify sophisticated phishing attempts using our 12-point technical analysis checklist",
                  expert: "SANS Institute"
                },
                {
                  icon: Users,
                  title: "Social Engineering Defense",
                  tip: "Recognize and counter psychological manipulation tactics with expert-tested countermeasures",
                  expert: "FBI IC3 Standards"
                },
                {
                  icon: BookOpen,
                  title: "Continuous Threat Education",
                  tip: "Stay current with evolving threats through our certified professional development program",
                  expert: "CISSP Framework"
                }
              ].map((tip, index) => {
                const Icon = tip.icon
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 mb-3">{tip.tip}</p>
                    <div className="text-xs text-blue-600 font-medium bg-blue-50 rounded px-2 py-1">
                      Based on {tip.expert}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Community Forum Preview with Authority */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Community Discussions</h2>
              <p className="text-lg text-gray-600">Join certified professionals and security researchers in protecting global communities</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  {
                    category: "AI Threats",
                    title: "Technical analysis: GPT-4 powered phishing campaigns",
                    author: "Dr. Alex Thompson",
                    credentials: "PhD AI Security, CISSP",
                    replies: 89,
                    time: "15 min ago",
                    verified: true
                  },
                  {
                    category: "Cryptocurrency", 
                    title: "Blockchain forensics: Tracking DeFi protocol exploits",
                    author: "Sarah Kim",
                    credentials: "GCFA, Blockchain Analyst",
                    replies: 156,
                    time: "1 hour ago",
                    verified: true
                  },
                  {
                    category: "Mobile Security",
                    title: "iOS/Android malware distribution via enterprise certificates",
                    author: "Michael Chen",
                    credentials: "GSEC, Mobile Security Lead",
                    replies: 67,
                    time: "3 hours ago",
                    verified: true
                  }
                ].map((thread, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                        {thread.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        {thread.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                        <span className="text-gray-500 text-sm">{thread.time}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{thread.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-medium text-gray-900">{thread.author}</span>
                        <div className="text-xs text-gray-600">{thread.credentials}</div>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MessageCircle className="h-4 w-4" />
                        <span>{thread.replies} expert replies</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Join Our Expert Community</h3>
                <p className="text-blue-100 mb-6">
                  Connect with certified cybersecurity professionals, researchers, and analysts. 
                  Our community has prevented over $75M in fraud losses through collaborative intelligence sharing.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <UserCheck className="h-5 w-5 text-blue-300" />
                    <span>50,000+ Verified Security Professionals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-300" />
                    <span>Expert-Verified Threat Intelligence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-300" />
                    <span>Real-time Global Threat Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-300" />
                    <span>Peer-Reviewed Research Papers</span>
                  </div>
                </div>
                <Link 
                  to="/forum"
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Access Expert Forum
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Newsletter Signup */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Professional Threat Intelligence Briefing</h2>
            <p className="text-xl text-gray-300 mb-6">
              Weekly executive briefings and technical analysis from our certified research team
            </p>
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Expert-Authored Content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Technical IOCs Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>MITRE ATT&CK Mapping</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Professional email address"
                className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Join 75,000+ security professionals • GDPR Compliant • Unsubscribe anytime
            </p>
          </div>
        </section>

        {/* Authoritative External Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Security Partners & Resources</h2>
              <p className="text-lg text-gray-600">Official partnerships with leading cybersecurity organizations and government agencies</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "FBI IC3", url: "https://www.ic3.gov", type: "Government Agency" },
                { name: "CISA", url: "https://www.cisa.gov", type: "Federal Authority" },
                { name: "SANS Institute", url: "https://www.sans.org", type: "Training Partner" },
                { name: "MITRE ATT&CK", url: "https://attack.mitre.org", type: "Framework" },
                { name: "NIST Cybersecurity", url: "https://www.nist.gov/cybersecurity", type: "Standards Body" },
                { name: "ENISA", url: "https://www.enisa.europa.eu", type: "EU Agency" },
                { name: "ACSC", url: "https://www.cyber.gov.au", type: "National Center" },
                { name: "NCSC UK", url: "https://www.ncsc.gov.uk", type: "National Authority" }
              ].map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors group border border-gray-200"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className="font-medium text-gray-700 group-hover:text-blue-600">
                      {resource.name}
                    </span>
                    <span className="text-xs text-gray-500">{resource.type}</span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </a>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Compliance & Certifications</h3>
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">SOC 2 Type II</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-2">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium">NIST Framework</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
