
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ForumPage from './pages/ForumPage'
import ForumCategory from './pages/ForumCategory'
import ForumThread from './pages/ForumThread'
import CompanyPage from './pages/CompanyPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import DisclaimerPage from './pages/DisclaimerPage'
import TermsPage from './pages/TermsPage'
import UpdateReportPage from './pages/UpdateReportPage'
import ResourcesPage from './pages/ResourcesPage'
import NoticeRemovalPage from './pages/NoticeRemovalPage'
import LegalPage from './pages/LegalPage'
import CareersPage from './pages/CareersPage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/forum/:category" element={<ForumCategory />} />
              <Route path="/forum/:category/:threadId" element={<ForumThread />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/update-report" element={<UpdateReportPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/notice-removal" element={<NoticeRemovalPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
          </Layout>
          <Toaster position="top-right" />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
