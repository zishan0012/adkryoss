import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { motion, AnimatePresence } from 'framer-motion';


// Services Pages
import Services from './pages/our-services';

// SEO Services (18 pages)
import SEO from './pages/our-services/seo';
import SEOServices from './pages/our-services/seo/SEOServices';
import EnterpriseSEO from './pages/our-services/seo/EnterpriseSEO';
import SEOMigrationServices from './pages/our-services/seo/SEOMigrationServices';
import VernacularSEOServices from './pages/our-services/seo/VernacularSEOServices';
import WhiteLabelSEOServices from './pages/our-services/seo/WhiteLabelSEOServices';
import HyperLocalMarketing from './pages/our-services/seo/HyperLocalMarketing';
import AISEO from './pages/our-services/seo/AISEO';
import AgenticAISEO from './pages/our-services/seo/AgenticAISEO';
import EcommerceSEO from './pages/our-services/seo/EcommerceSEO';
import JavascriptSEO from './pages/our-services/seo/JavascriptSEO';
import MultilingualSEOServices from './pages/our-services/seo/MultilingualSEOServices';
import SEOAudit from './pages/our-services/seo/SEOAudit';
import GooglePenaltyRecovery from './pages/our-services/seo/GooglePenaltyRecovery';
import LLMOptimization from './pages/our-services/seo/LLMOptimization';
import TechnicalSEO from './pages/our-services/seo/TechnicalSEO';
import LocalSEO from './pages/our-services/seo/LocalSEO';
import LinkBuildingServices from './pages/our-services/seo/LinkBuildingServices';
import SEOResellerServices from './pages/our-services/seo/SEOResellerServices';

// Digital Marketing Services
import DigitalMarketing from './pages/our-services/digital-marketing';
import DigitalMarketingServices from './pages/our-services/digital-marketing/DigitalMarketingServices';
import AffiliateMarketing from './pages/our-services/digital-marketing/AffiliateMarketing';
import EmailMarketing from './pages/our-services/digital-marketing/EmailMarketing';
import ORMServices from './pages/our-services/digital-marketing/ORMServices';
import AIMarketing from './pages/our-services/digital-marketing/AIMarketing';
import AgenticAI from './pages/our-services/digital-marketing/AgenticAI';
import YoutubeMarketing from './pages/our-services/digital-marketing/YoutubeMarketing';

// Content Marketing Services
import ContentMarketing from './pages/our-services/content-marketing';
import ContentMarketingServices from './pages/our-services/content-marketing/ContentMarketingServices';
import GuestPosting from './pages/our-services/content-marketing/GuestPosting';
import ContentWritingServices from './pages/our-services/content-marketing/ContentWritingServices';
import DigitalPR from './pages/our-services/content-marketing/DigitalPR';
import SEOCopywriting from './pages/our-services/content-marketing/SEOCopywriting';

// Paid Marketing Services
import PaidMarketing from './pages/our-services/paid-marketing';
import PPCServices from './pages/our-services/paid-marketing/PPCServices';
import MobileAdvertising from './pages/our-services/paid-marketing/MobileAdvertising';
import AmazonAdvertising from './pages/our-services/paid-marketing/AmazonAdvertising';
import PPCReseller from './pages/our-services/paid-marketing/PPCReseller';
import SocialMediaAdvertising from './pages/our-services/paid-marketing/SocialMediaAdvertising';

// App Marketing Services
import AppMarketing from './pages/our-services/app-marketing';
import ASOServices from './pages/our-services/app-marketing/ASOServices';
import MobileAppMarketing from './pages/our-services/app-marketing/MobileAppMarketing';
import AppCRO from './pages/our-services/app-marketing/AppCRO';

// MarTech Services
import MarTech from './pages/our-services/martech';
import CROServices from './pages/our-services/martech/CROServices';
import EcommerceCRO from './pages/our-services/martech/EcommerceCRO';
import GA4Consulting from './pages/our-services/martech/GA4Consulting';
import ShopifyCRO from './pages/our-services/martech/ShopifyCRO';
import MartechServices from './pages/our-services/martech/MartechServices';
import CDPServices from './pages/our-services/martech/CDPServices';
import B2BCRO from './pages/our-services/martech/B2BCRO';

// Company Pages
import Company from './pages/company';
import AboutUs from './pages/company/AboutUs';
import Careers from './pages/company/Careers';
import Awards from './pages/company/Awards';
import PressReleases from './pages/company/PressReleases';
import BestPlaceToWork from './pages/company/BestPlaceToWork';

// Work Pages
import Work from './pages/work';
import Portfolio from './pages/work/Portfolio';
import CaseStudy from './pages/work/CaseStudy';
import CaseStudyDetail from './pages/work/CaseStudyDetail';
import Testimonial from './pages/work/Testimonial';

// Industry Pages
import Industry from './pages/industry';
import BFSI from './pages/industry/BFSI';
import B2B from './pages/industry/B2B';
import Healthcare from './pages/industry/Healthcare';
import Education from './pages/industry/Education';
import Ecommerce from './pages/industry/Ecommerce';

// Standalone Pages
import Partners from './pages/partners/Partners';
import IPP from './pages/partners/IPP';
import IBP from './pages/partners/IBP';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundAndCancellation from './pages/RefundAndCancellation';
import Sitemap from './pages/Sitemap';

import Future from "./pages/blog/Future";
import Perfomance from './pages/blog/Perfomance';
import AI from './pages/blog/AI';
import Content from './pages/blog/Content'
import Social from './pages/blog/Social';
import Conversion from './pages/blog/Conversion';
import Marketing from './pages/blog/Marketing';
import ECOmmerce from './pages/blog/Ecommerce';
import Local from './pages/blog/Local';
import Data from './pages/blog/Data';
// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};


const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};


function App() {

  return (
    <Layout>
      <ScrollToTop />



      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* ==================== COMPANY ROUTES ==================== */}
        <Route path="/company" element={<PageWrapper><Company /></PageWrapper>} />
        <Route path="/company/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/company/careers" element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/company/awards" element={<Awards />} />
        <Route path="/company/press-releases" element={<PageWrapper><PressReleases /></PageWrapper>} />
        <Route path="/company/best-place-to-work" element={<PageWrapper><BestPlaceToWork /></PageWrapper>} />

        {/* ==================== SERVICES ROUTES ==================== */}
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />


        {/* SEO Services (18 pages) */}
        <Route path="/services/seo" element={<PageWrapper><SEO /></PageWrapper>} />
        <Route path="/services/seo/seo-services" element={<PageWrapper><SEOServices /></PageWrapper>} />
        <Route path="/services/seo/enterprise-seo" element={<EnterpriseSEO />} />
        <Route path="/services/seo/seo-migration-services" element={<SEOMigrationServices />} />
        <Route path="/services/seo/vernacular-seo-services" element={<VernacularSEOServices />} />
        <Route path="/services/seo/white-label-seo-services" element={<WhiteLabelSEOServices />} />
        <Route path="/services/seo/hyperlocal-marketing" element={<HyperLocalMarketing />} />
        <Route path="/services/seo/ai-seo" element={<AISEO />} />
        <Route path="/services/seo/agentic-ai-seo" element={<AgenticAISEO />} />
        <Route path="/services/seo/ecommerce-seo" element={<EcommerceSEO />} />
        <Route path="/services/seo/javascript-seo" element={<JavascriptSEO />} />
        <Route path="/services/seo/multilingual-seo-services" element={<MultilingualSEOServices />} />
        <Route path="/services/seo/seo-audit" element={<SEOAudit />} />
        <Route path="/services/seo/google-penalty-recovery" element={<GooglePenaltyRecovery />} />
        <Route path="/services/seo/llm-optimization" element={<LLMOptimization />} />
        <Route path="/services/seo/technical-seo" element={<TechnicalSEO />} />
        <Route path="/services/seo/local-seo" element={<LocalSEO />} />
        <Route path="/services/seo/link-building-services" element={<LinkBuildingServices />} />
        <Route path="/services/seo/seo-reseller-services" element={<SEOResellerServices />} />

        {/* Digital Marketing Services */}
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/digital-marketing/services" element={<DigitalMarketingServices />} />
        <Route path="/services/digital-marketing/affiliate-marketing" element={<AffiliateMarketing />} />
        <Route path="/services/digital-marketing/email-marketing" element={<EmailMarketing />} />
        <Route path="/services/digital-marketing/orm-services" element={<ORMServices />} />
        <Route path="/services/digital-marketing/ai-marketing" element={<AIMarketing />} />
        <Route path="/services/digital-marketing/agentic-ai" element={<AgenticAI />} />
        <Route path="/services/digital-marketing/youtube-marketing" element={<YoutubeMarketing />} />

        {/* Content Marketing Services */}
        <Route path="/services/content-marketing" element={<ContentMarketing />} />
        <Route path="/services/content-marketing/services" element={<ContentMarketingServices />} />
        <Route path="/services/content-marketing/guest-posting" element={<GuestPosting />} />
        <Route path="/services/content-marketing/writing-services" element={<ContentWritingServices />} />
        <Route path="/services/content-marketing/digital-pr" element={<DigitalPR />} />
        <Route path="/services/content-marketing/seo-copywriting" element={<SEOCopywriting />} />

        {/* Paid Marketing Services */}
        <Route path="/services/paid-marketing" element={<PaidMarketing />} />
        <Route path="/services/paid-marketing/ppc-services" element={<PPCServices />} />
        <Route path="/services/paid-marketing/mobile-advertising" element={<MobileAdvertising />} />
        <Route path="/services/paid-marketing/amazon-advertising" element={<AmazonAdvertising />} />
        <Route path="/services/paid-marketing/ppc-reseller" element={<PPCReseller />} />
        <Route path="/services/paid-marketing/social-media-advertising" element={<SocialMediaAdvertising />} />

        {/* App Marketing Services */}
        <Route path="/services/app-marketing" element={<AppMarketing />} />
        <Route path="/services/app-marketing/aso" element={<ASOServices />} />
        <Route path="/services/app-marketing/mobile-app-marketing" element={<MobileAppMarketing />} />
        <Route path="/services/app-marketing/app-cro" element={<AppCRO />} />

        {/* MarTech / Data Analytics Services */}
        <Route path="/services/martech" element={<MarTech />} />
        <Route path="/services/martech/cro-services" element={<CROServices />} />
        <Route path="/services/martech/ecommerce-cro" element={<EcommerceCRO />} />
        <Route path="/services/martech/ga4-consulting" element={<GA4Consulting />} />
        <Route path="/services/martech/shopify-cro" element={<ShopifyCRO />} />
        <Route path="/services/martech/martech-services" element={<MartechServices />} />
        <Route path="/services/martech/cdp-services" element={<CDPServices />} />
        <Route path="/services/martech/b2b-cro" element={<B2BCRO />} />

        {/* ==================== WORK ROUTES ==================== */}
        <Route path="/work" element={<Work />} />
        <Route path="/work/portfolio" element={<Portfolio />} />
        <Route path="/work/case-study" element={<CaseStudy />} />
        <Route path="/work/case-study/:slug" element={<CaseStudyDetail />} />
        <Route path="/work/testimonial" element={<Testimonial />} />

        {/* ==================== INDUSTRY ROUTES ==================== */}
        <Route path="/industry" element={<Industry />} />
        <Route path="/industry/bfsi" element={<BFSI />} />
        <Route path="/industry/b2b" element={<B2B />} />
        <Route path="/industry/healthcare" element={<Healthcare />} />
        <Route path="/industry/education" element={<Education />} />
        <Route path="/industry/ecommerce" element={<Ecommerce />} />

        {/* ==================== STANDALONE ROUTES ==================== */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/ipp" element={<IPP />} />
        <Route path="/partners/ibp" element={<IBP />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        {/* ==================== BLOG PAGES ==================== */}
        <Route path="/blog/future" element={<Future />} />
        <Route path="/blog/performance" element={<Perfomance />} />
        <Route path="/blog/ai" element={<AI />} />
        <Route path="/blog/content" element={<Content />} />
        <Route path="/blog/social" element={<Social />} />
        <Route path="/blog/conversion" element={<Conversion />} />
        <Route path="/blog/marketing" element={<Marketing />} />
        <Route path="/blog/Ecommerce" element={<ECOmmerce />} />
        <Route path="/blog/local" element={<Local />} />
        <Route path="/blog/data" element={<Data />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancellation" element={<RefundAndCancellation />} />
        <Route path="/sitemap" element={<Sitemap />} />


      </Routes>




    </Layout>
  );
}

export default App;
