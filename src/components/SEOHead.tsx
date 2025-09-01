
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  structuredData?: object
  noIndex?: boolean
  lastModified?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "ScamTok - Expert Cybersecurity Community & AI Threat Intelligence Platform",
  description = "Join 50,000+ cybersecurity professionals on ScamTok. Expert-verified threat intelligence, real-time scam detection, and community-driven protection against AI threats, phishing, and digital fraud.",
  keywords = "cybersecurity, scam detection, AI threats, phishing protection, fraud prevention, threat intelligence, security community, expert analysis",
  canonicalUrl = "https://scamtok.com/",
  ogImage = "https://scamtok.com/images/scamtok-social-preview.jpg",
  ogType = "website",
  structuredData,
  noIndex = false,
  lastModified
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ScamTok" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Last Modified */}
      {lastModified && <meta name="last-modified" content={lastModified} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead
