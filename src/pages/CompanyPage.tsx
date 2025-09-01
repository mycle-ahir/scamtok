
import React from 'react'
import { motion } from 'framer-motion'
import {Shield, Target, Users, Globe, Award, Heart, Lightbulb, TrendingUp} from 'lucide-react'

const CompanyPage: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We build trust through verified information, transparent processes, and honest communication with our community.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our community drives everything we do. We listen, learn, and evolve based on the needs of those we serve.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to stay ahead of emerging threats and provide cutting-edge protection tools.'
    },
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We empower individuals with knowledge and tools to protect themselves and their loved ones from digital threats.'
    }
  ]

  const milestones = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'ScamTok was founded by cybersecurity experts who recognized the need for community-driven threat intelligence.'
    },
    {
      year: '2023',
      title: 'Community Launch',
      description: 'Launched our forum with 1,000 founding members and established our first threat detection protocols.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Integrated AI-powered threat detection and launched specialized tracking for deepfake and voice cloning scams.'
    },
    {
      year: '2024',
      title: 'Global Impact',
      description: 'Reached 25,000+ active members and prevented over $50M in fraud losses through community alerts.'
    }
  ]

  const stats = [
    { number: '25,000+', label: 'Active Community Members' },
    { number: '$50M+', label: 'Fraud Losses Prevented' },
    { number: '10,000+', label: 'Scams Documented' },
    { number: '150+', label: 'Countries Served' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About ScamTok
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Building the world's most trusted community-driven platform for scam research, 
              AI threat detection, and digital safety education.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <p className="text-xl text-gray-800 leading-relaxed">
                To create a safer digital world by empowering communities with real-time threat intelligence, 
                cutting-edge research, and collaborative defense mechanisms against scams, AI-powered attacks, 
                and emerging cyber threats.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Goals & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Goals</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Prevention First</h3>
                    <p className="text-gray-600">
                      Prevent fraud before it happens through early detection, community alerts, 
                      and proactive education initiatives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Protection</h3>
                    <p className="text-gray-600">
                      Expand our reach to protect vulnerable populations worldwide, 
                      especially targeting regions with emerging digital adoption.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Leadership</h3>
                    <p className="text-gray-600">
                      Lead the industry in AI threat detection, behavioral analysis, 
                      and next-generation cybersecurity research.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2024 Impact</h2>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-900">Recognition</span>
                </div>
                <p className="text-green-800 text-sm">
                  Named "Top Cybersecurity Community Platform" by TechRadar and featured 
                  in cybersecurity conferences across North America and Europe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ScamTok was born from a simple observation: traditional cybersecurity approaches 
              weren't keeping pace with the creativity and sophistication of modern scammers.
            </p>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 mx-8">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Looking Forward</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our vision extends beyond just detecting scams. We're building an ecosystem 
              where communities, technology, and human intelligence work together to create 
              a fundamentally safer digital world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proactive Defense</h3>
                <p className="text-blue-100">
                  AI-powered systems that predict and prevent scams before they reach victims
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Network</h3>
                <p className="text-blue-100">
                  Connecting security researchers, law enforcement, and communities worldwide
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Education First</h3>
                <p className="text-blue-100">
                  Making cybersecurity knowledge accessible to everyone, regardless of technical background
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CompanyPage
