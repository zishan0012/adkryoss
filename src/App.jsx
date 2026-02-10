import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder component for other pages
const PlaceholderPage = ({ title }) => (
  <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
    <h1 style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '20px' }}>{title}</h1>
    <p style={{ fontSize: '20px', color: '#666' }}>This page is under construction as per the base structure plan.</p>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Company Subpages */}
        <Route path="/company" element={<PlaceholderPage title="Company Overview" />} />
        <Route path="/company/about-us" element={<PlaceholderPage title="About Us" />} />
        <Route path="/company/careers" element={<PlaceholderPage title="Careers" />} />
        <Route path="/company/awards" element={<PlaceholderPage title="Awards" />} />
        <Route path="/company/press-releases" element={<PlaceholderPage title="Press Releases" />} />
        <Route path="/company/best-place-to-work" element={<PlaceholderPage title="Best Place to Work" />} />


        {/* Services Main Page */}
        <Route path="/services" element={<PlaceholderPage title="Services" />} />

        {/* SEO Services */}
        <Route path="/services/seo" element={<PlaceholderPage title="Search Engine Optimization" />} />
        <Route path="/services/seo/seo-services" element={<PlaceholderPage title="SEO Services" />} />
        <Route path="/services/seo/enterprise-seo" element={<PlaceholderPage title="Enterprise SEO" />} />
        <Route path="/services/seo/seo-migration-services" element={<PlaceholderPage title="SEO Migration Services" />} />
        <Route path="/services/seo/vernacular-seo-services" element={<PlaceholderPage title="Vernacular SEO Services" />} />
        <Route path="/services/seo/white-label-seo-services" element={<PlaceholderPage title="White Label SEO Services" />} />
        <Route path="/services/seo/hyperlocal-marketing" element={<PlaceholderPage title="HyperLocal Marketing" />} />
        <Route path="/services/seo/ai-seo" element={<PlaceholderPage title="AI SEO" />} />
        <Route path="/services/seo/ecommerce-seo" element={<PlaceholderPage title="Ecommerce SEO" />} />
        <Route path="/services/seo/javascript-seo" element={<PlaceholderPage title="Javascript SEO" />} />
        <Route path="/services/seo/multilingual-seo-services" element={<PlaceholderPage title="Multilingual SEO Services" />} />
        <Route path="/services/seo/seo-audit" element={<PlaceholderPage title="SEO Audit" />} />
        <Route path="/services/seo/google-penalty-recovery" element={<PlaceholderPage title="Google Penalty Recovery" />} />
        <Route path="/services/seo/llm-optimization" element={<PlaceholderPage title="LLM Optimization" />} />
        <Route path="/services/seo/technical-seo" element={<PlaceholderPage title="Technical SEO" />} />
        <Route path="/services/seo/local-seo" element={<PlaceholderPage title="Local SEO" />} />
        <Route path="/services/seo/link-building-services" element={<PlaceholderPage title="Link Building Services" />} />
        <Route path="/services/seo/seo-reseller-services" element={<PlaceholderPage title="SEO Reseller Services" />} />

        {/* Digital Marketing */}
        <Route path="/services/digital-marketing" element={<PlaceholderPage title="Digital Marketing" />} />
        <Route path="/services/digital-marketing/services" element={<PlaceholderPage title="Digital Marketing Services" />} />
        <Route path="/services/digital-marketing/affiliate-marketing" element={<PlaceholderPage title="Affiliate Marketing" />} />
        <Route path="/services/digital-marketing/email-marketing" element={<PlaceholderPage title="Email Marketing Services" />} />
        <Route path="/services/digital-marketing/orm-services" element={<PlaceholderPage title="ORM Services" />} />
        <Route path="/services/digital-marketing/ai-marketing" element={<PlaceholderPage title="AI Digital Marketing Services" />} />
        <Route path="/services/digital-marketing/agentic-ai" element={<PlaceholderPage title="Agentic AI Digital Marketing" />} />
        <Route path="/services/digital-marketing/youtube-marketing" element={<PlaceholderPage title="Youtube Video Marketing" />} />

        {/* Content Marketing */}
        <Route path="/services/content-marketing" element={<PlaceholderPage title="Content Marketing" />} />
        <Route path="/services/content-marketing/services" element={<PlaceholderPage title="Content Marketing Services" />} />
        <Route path="/services/content-marketing/guest-posting" element={<PlaceholderPage title="Guest Posting" />} />
        <Route path="/services/content-marketing/writing-services" element={<PlaceholderPage title="Content Writing Services" />} />
        <Route path="/services/content-marketing/digital-pr" element={<PlaceholderPage title="Digital PR" />} />
        <Route path="/services/content-marketing/seo-copywriting" element={<PlaceholderPage title="SEO Copywriting" />} />

        {/* Paid Marketing */}
        <Route path="/services/paid-marketing" element={<PlaceholderPage title="PPC/Paid Marketing" />} />
        <Route path="/services/paid-marketing/ppc-services" element={<PlaceholderPage title="PPC Services" />} />
        <Route path="/services/paid-marketing/mobile-advertising" element={<PlaceholderPage title="Mobile Advertising Services" />} />
        <Route path="/services/paid-marketing/amazon-advertising" element={<PlaceholderPage title="Amazon Advertising" />} />
        <Route path="/services/paid-marketing/ppc-reseller" element={<PlaceholderPage title="PPC Reseller Services" />} />
        <Route path="/services/paid-marketing/social-media-advertising" element={<PlaceholderPage title="Social Media Advertising" />} />

        {/* App Marketing */}
        <Route path="/services/app-marketing" element={<PlaceholderPage title="App Marketing" />} />
        <Route path="/services/app-marketing/aso" element={<PlaceholderPage title="ASO Services" />} />
        <Route path="/services/app-marketing/mobile-app-marketing" element={<PlaceholderPage title="Mobile App Marketing Services" />} />
        <Route path="/services/app-marketing/app-cro" element={<PlaceholderPage title="App CRO" />} />

        {/* Marketing Technology / Data Analytics */}
        <Route path="/services/martech" element={<PlaceholderPage title="MarTech / Data Analytics" />} />
        <Route path="/services/martech/cro-services" element={<PlaceholderPage title="CRO Services" />} />
        <Route path="/services/martech/ecommerce-cro" element={<PlaceholderPage title="Ecommerce CRO" />} />
        <Route path="/services/martech/ga4-consulting" element={<PlaceholderPage title="GA 4 Consulting" />} />
        <Route path="/services/martech/shopify-cro" element={<PlaceholderPage title="Shopify CRO" />} />
        <Route path="/services/martech/martech-services" element={<PlaceholderPage title="Martech Services" />} />
        <Route path="/services/martech/cdp-services" element={<PlaceholderPage title="CDP Services" />} />
        <Route path="/services/martech/b2b-cro" element={<PlaceholderPage title="B2B CRO" />} />

        {/* Work Subpages */}
        <Route path="/work" element={<PlaceholderPage title="Our Work" />} />
        <Route path="/work/portfolio" element={<PlaceholderPage title="Portfolio" />} />
        <Route path="/work/case-study" element={<PlaceholderPage title="Case Studies" />} />
        <Route path="/work/testimonial" element={<PlaceholderPage title="Testimonials" />} />

        {/* Industry Subpages */}
        <Route path="/industry" element={<PlaceholderPage title="Industries" />} />
        <Route path="/industry/bfsi" element={<PlaceholderPage title="BFSI" />} />
        <Route path="/industry/b2b" element={<PlaceholderPage title="B2B" />} />
        <Route path="/industry/healthcare" element={<PlaceholderPage title="Healthcare" />} />
        <Route path="/industry/education" element={<PlaceholderPage title="Education" />} />
        <Route path="/industry/ecommerce" element={<PlaceholderPage title="Ecommerce" />} />

        <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
        <Route path="/request-quote" element={<PlaceholderPage title="Request a Quote" />} />
      </Routes>
    </Layout>
  );
}

export default App;
