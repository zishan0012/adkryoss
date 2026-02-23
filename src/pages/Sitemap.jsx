import React from 'react';
import { Link } from 'react-router-dom';
import {
    Home, Info, Briefcase, Settings, Globe, PieChart, Clock, Mail,
    Shield, Scale, FileText, Layout, Users, Megaphone, PenTool,
    Zap, Database, BarChart, Smartphone, ShoppingCart, Lock,
    CheckCircle, MessageSquare, Image, Star, Target, BookOpen
} from 'lucide-react';

const Sitemap = () => {
    const SitemapSection = ({ title, icon: Icon, links }) => (
        <div className="bg-slate-50 border border-slate-200 rounded-[32px] p-8 md:p-10 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 hover:border-blue-400 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                    <Icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {title}
                </h2>
            </div>
            <ul className="grid gap-3 list-none p-0">
                {links.map((link, idx) => (
                    <li key={idx}>
                        <Link
                            to={link.path}
                            className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium py-1 group/link"
                        >
                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover/link:bg-blue-600 transition-colors"></div>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    const sitemapData = [
        {
            title: "Main Pages",
            icon: Home,
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/company/about-us" },
                { name: "Contact Us", path: "/contact" },
                { name: "Request a Quote", path: "/request-quote" },
                { name: "Blog", path: "/blog" }
            ]
        },
        {
            title: "Company",
            icon: Users,
            links: [
                { name: "About Us", path: "/company/about-us" },
                { name: "Careers", path: "/company/careers" },
                { name: "Press Releases", path: "/company/press-releases" },
                { name: "Best Place to Work in India", path: "/company/best-place-to-work" }
            ]
        },
        {
            title: "SEO Services",
            icon: Search, // Search is not imported, let's use Target
            links: [
                { name: "SEO Services", path: "/services/seo/seo-services" },
                { name: "Enterprise SEO", path: "/services/seo/enterprise-seo" },
                { name: "SEO Migration", path: "/services/seo/seo-migration-services" },
                { name: "Vernacular SEO", path: "/services/seo/vernacular-seo-services" },
                { name: "White Label SEO", path: "/services/seo/white-label-seo-services" },
                { name: "Hyperlocal Marketing", path: "/services/seo/hyperlocal-marketing" },
                { name: "AI SEO", path: "/services/seo/ai-seo" },
                { name: "Agentic AI SEO", path: "/services/seo/agentic-ai-seo" },
                { name: "Ecommerce SEO", path: "/services/seo/ecommerce-seo" },
                { name: "Javascript SEO", path: "/services/seo/javascript-seo" },
                { name: "Multilingual SEO", path: "/services/seo/multilingual-seo-services" },
                { name: "SEO Audit", path: "/services/seo/seo-audit" },
                { name: "Google Penalty Recovery", path: "/services/seo/google-penalty-recovery" },
                { name: "LLM Optimization", path: "/services/seo/llm-optimization" },
                { name: "Technical SEO", path: "/services/seo/technical-seo" },
                { name: "Local SEO", path: "/services/seo/local-seo" },
                { name: "Link Building", path: "/services/seo/link-building-services" },
                { name: "SEO Reseller", path: "/services/seo/seo-reseller-services" }
            ]
        },
        {
            title: "Digital & Paid Marketing",
            icon: Megaphone,
            links: [
                { name: "Digital Marketing Services", path: "/services/digital-marketing/services" },
                { name: "Affiliate Marketing", path: "/services/digital-marketing/affiliate-marketing" },
                { name: "Email Marketing", path: "/services/digital-marketing/email-marketing" },
                { name: "ORM Services", path: "/services/digital-marketing/orm-services" },
                { name: "AI Marketing", path: "/services/digital-marketing/ai-marketing" },
                { name: "Agentic AI", path: "/services/digital-marketing/agentic-ai" },
                { name: "Youtube Marketing", path: "/services/digital-marketing/youtube-marketing" },
                { name: "PPC Services", path: "/services/paid-marketing/ppc-services" },
                { name: "Mobile Advertising", path: "/services/paid-marketing/mobile-advertising" },
                { name: "Amazon Advertising", path: "/services/paid-marketing/amazon-advertising" },
                { name: "PPC Reseller", path: "/services/paid-marketing/ppc-reseller" },
                { name: "Social Media Advertising", path: "/services/paid-marketing/social-media-advertising" }
            ]
        },
        {
            title: "Content & MarTech",
            icon: PenTool,
            links: [
                { name: "Content Marketing Services", path: "/services/content-marketing/services" },
                { name: "Guest Posting", path: "/services/content-marketing/guest-posting" },
                { name: "Content Writing Services", path: "/services/content-marketing/writing-services" },
                { name: "Digital PR", path: "/services/content-marketing/digital-pr" },
                { name: "SEO Copywriting", path: "/services/content-marketing/seo-copywriting" },
                { name: "CRO Services", path: "/services/martech/cro-services" },
                { name: "GA4 Consulting", path: "/services/martech/ga4-consulting" },
                { name: "CDP Services", path: "/services/martech/cdp-services" },
                { name: "Martech Services", path: "/services/martech/martech-services" }
            ]
        },
        {
            title: "App Marketing & Ecomm",
            icon: Smartphone,
            links: [
                { name: "ASO Services", path: "/services/app-marketing/aso" },
                { name: "Mobile App Marketing", path: "/services/app-marketing/mobile-app-marketing" },
                { name: "App CRO", path: "/services/app-marketing/app-cro" },
                { name: "Ecommerce CRO", path: "/services/martech/ecommerce-cro" },
                { name: "Shopify CRO", path: "/services/martech/shopify-cro" },
                { name: "B2B CRO", path: "/services/martech/b2b-cro" }
            ]
        },
        {
            title: "Our Work & Industries",
            icon: Briefcase,
            links: [
                { name: "Portfolio", path: "/work/portfolio" },
                { name: "Case Studies", path: "/work/case-study" },
                { name: "Testimonials", path: "/work/testimonial" },
                { name: "BFSI Industry", path: "/industry/bfsi" },
                { name: "B2B Industry", path: "/industry/b2b" },
                { name: "Healthcare Industry", path: "/industry/healthcare" },
                { name: "Education Industry", path: "/industry/education" },
                { name: "Ecommerce Industry", path: "/industry/ecommerce" }
            ]
        },
        {
            title: "Partners & Blog",
            icon: Users,
            links: [
                { name: "IPP Program", path: "/partners/ipp" },
                { name: "IBP Program", path: "/partners/ibp" },
                { name: "Blog: Future of Marketing", path: "/blog/future" },
                { name: "Blog: AI in Marketing", path: "/blog/ai" },
                { name: "Blog: Performance Marketing", path: "/blog/performance" },
                { name: "Blog: Content Strategy", path: "/blog/content" },
                { name: "Blog: Social Media", path: "/blog/social" },
                { name: "Blog: Conversion Rate", path: "/blog/conversion" },
                { name: "Blog: Local SEO", path: "/blog/local" },
                { name: "Blog: Data Analytics", path: "/blog/data" }
            ]
        },
        {
            title: "Legal & Info",
            icon: Lock,
            links: [
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-conditions" },
                { name: "Refund & Cancellation", path: "/refund-cancellation" }
            ]
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

                <div className="container px-6 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Sitemap</h1>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                            Explore our comprehensive digital ecosystem. Find every page and service we offer in one organized place.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sitemap Grid */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {sitemapData.map((section, idx) => (
                            <SitemapSection
                                key={idx}
                                title={section.title}
                                icon={section.icon}
                                links={section.links}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Can't find what you're looking for?</h2>
                    <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                        Our team is here to help you navigate your digital transformation. Reach out to us for any queries.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

// Internal icon correction: Search is missing from imports
import { Search } from 'lucide-react';

export default Sitemap;
