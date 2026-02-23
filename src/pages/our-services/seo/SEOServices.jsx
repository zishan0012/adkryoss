import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Zap, BarChart3, Users, Globe, Shield, Award, CheckCircle2, ArrowRight, Search, Code, FileText, Link2, MapPin, Building2, Heart, GraduationCap, ShoppingCart, Briefcase, ChevronRight, PieChart, ChevronDown, ChevronUp } from 'lucide-react';
import seoservices from '../../../assets/SEO/seoserviceshero.jpeg';
const SEOServices = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (i) => {
        setOpenFaq(openFaq === i ? null : i);
    };

    const approaches = [
        {
            icon: <Search size={32} />,
            title: "SEO Audit & Competitive Intelligence",
            points: [
                "Technical health analysis",
                "Crawl & index evaluation",
                "Site architecture review",
                "Competitor gap analysis",
                "Keyword opportunity mapping",
                "Search intent segmentation"
            ]
        },
        {
            icon: <Target size={32} />,
            title: "Keyword Strategy & Search Intent Mapping",
            points: [
                "Commercial intent keywords",
                "Transactional & high-conversion queries",
                "Informational clusters",
                "Topic authority mapping",
                "Long-tail & semantic variations",
                "AI-driven search behavior trends"
            ]
        },
        {
            icon: <Code size={32} />,
            title: "Technical SEO Optimization",
            points: [
                "Core Web Vitals optimization",
                "Site speed enhancement",
                "Mobile-first optimization",
                "Structured data & schema implementation",
                "Crawl budget optimization",
                "XML sitemap & robots.txt refinement",
                "Canonical & duplicate issue resolution",
                "HTTPS & security configuration"
            ]
        },
        {
            icon: <FileText size={32} />,
            title: "On-Page SEO & Content Optimization",
            points: [
                "Meta titles & descriptions",
                "Header architecture",
                "Internal linking frameworks",
                "Image optimization",
                "Semantic keyword placement",
                "Conversion-focused content structure",
                "UX-aligned content formatting"
            ]
        },
        {
            icon: <FileText size={32} />,
            title: "Content Strategy & Authority Building",
            points: [
                "Topic clusters & pillar pages",
                "Thought leadership blogs",
                "Industry-specific landing pages",
                "Data-driven content assets",
                "Evergreen resource hubs",
                "SEO-friendly service pages"
            ]
        },
        {
            icon: <Link2 size={32} />,
            title: "High-Quality Link Building & Digital PR",
            points: [
                "Niche-relevant backlinks",
                "Editorial placements",
                "Industry citations",
                "Guest publications",
                "Digital PR campaigns",
                "Strategic partnerships"
            ]
        },
        {
            icon: <MapPin size={32} />,
            title: "Local SEO Services",
            points: [
                "Google Business Profile",
                "Local citations",
                "NAP consistency",
                "Location-based landing pages",
                "Hyperlocal keyword targeting",
                "Reputation & review management"
            ]
        },
        {
            icon: <Building2 size={32} />,
            title: "Enterprise SEO Solutions",
            points: [
                "Large-scale site architecture optimization",
                "Automation-driven SEO processes",
                "Multi-location SEO",
                "Multi-language SEO",
                "International SEO strategies",
                "Advanced analytics & dashboards"
            ]
        }
    ];

    const industries = [
        { icon: <ShoppingCart size={24} />, name: "E-commerce" },
        { icon: <GraduationCap size={24} />, name: "Education & EdTech" },
        { icon: <Heart size={24} />, name: "Healthcare" },
        { icon: <Building2 size={24} />, name: "Real Estate" },
        { icon: <Briefcase size={24} />, name: "Finance & FinTech" },
        { icon: <Code size={24} />, name: "SaaS & Technology" },
        { icon: <Building2 size={24} />, name: "Manufacturing" },
        { icon: <Users size={24} />, name: "Professional Services" }
    ];

    const processSteps = [
        "Business Discovery & Goal Mapping",
        "SEO Blueprint Development",
        "Execution & Technical Implementation",
        "Content & Authority Building",
        "Performance Monitoring & Optimization",
        "Monthly Reporting & Strategic Refinement"
    ];

    const differentiators = [
        {
            icon: <Target size={28} />,
            title: "Performance-Focused SEO",
            description: "We align rankings with revenue, not vanity metrics."
        },
        {
            icon: <BarChart3 size={28} />,
            title: "Data-Led Decision Making",
            description: "Every action is backed by analytics and search insights."
        },
        {
            icon: <Zap size={28} />,
            title: "AI & Future-Ready Optimization",
            description: "We optimize for evolving search technologies and generative AI visibility."
        },
        {
            icon: <Globe size={28} />,
            title: "Integrated Marketing Thinking",
            description: "SEO works best when aligned with content, UX, CRO, and branding."
        }
    ];

    const metrics = [
        "Organic Traffic Growth",
        "Keyword Ranking Movement",
        "Conversion Rate from Organic",
        "Bounce Rate & Engagement",
        "Backlink Authority Score",
        "Domain Growth Metrics",
        "Lead & Revenue Attribution"
    ];

    const faqs = [
        {
            question: "How long does SEO take to show results?",
            answer: "SEO is a long-term strategy. Initial improvements can be visible within 3–4 months, while sustainable growth builds over 6–12 months depending on competition."
        },
        {
            question: "Do you guarantee rankings?",
            answer: "No ethical agency guarantees rankings. We guarantee strategic execution, transparency, and measurable growth."
        },
        {
            question: "Is SEO better than paid ads?",
            answer: "SEO builds sustainable, long-term traffic. Paid ads deliver instant results. The best strategy integrates both."
        }
    ];

    return (
        <div className="bg-white text-slate-900">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Drive Organic Growth. Build Authority. Dominate Search.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            In today's search-first world, visibility is not optional — it's survival. Customers don't scroll endlessly; they click what ranks, what builds trust, and what delivers value instantly.
                        </p>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span> delivers data-driven, performance-focused SEO services designed to increase traffic, improve rankings, and convert search intent into measurable revenue.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </a>
                            <a
                                href="#services"
                                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </a>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={seoservices}
                                alt="SEO Services"
                                className="max-w-[450px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SEO Section */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">
                            Why SEO is a Growth Multiplier
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 max-w-[800px] mx-auto leading-relaxed font-medium">
                            Search engines are evolving. AI-driven search, zero-click results, voice search, semantic intent mapping — the game has changed.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 mt-10">
                        {[
                            { icon: <Users size={32} />, text: "Understanding user intent, not just keywords" },
                            { icon: <Award size={32} />, text: "Creating topical authority, not random blogs" },
                            { icon: <Globe size={32} />, text: "Building search ecosystems, not isolated pages" },
                            { icon: <Zap size={32} />, text: "Optimizing for AI & search experience" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 w-full md:w-[calc(25%-24px)] min-w-[250px] max-w-[300px] grow cursor-pointer group hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,102,204,0.18)] border border-transparent hover:border-[#0066CC]">
                                <div className="text-[#0066CC] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                                    {item.icon}
                                </div>
                                <p className="text-[16px] font-medium text-slate-900 leading-relaxed m-0">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 text-[20px] font-bold text-[#0066CC]">
                        That's exactly how we approach it.
                    </div>
                </div>
            </section>

            {/* Our SEO Approach */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">
                            Our SEO Approach
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Strategic. Technical. Performance-Oriented.
                        </p>
                        <p className="text-[16px] text-slate-600 mt-3 max-w-[700px] mx-auto font-medium">
                            We follow a structured, insight-led methodology aligned with modern search algorithms and business goals.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {approaches.map((approach, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 rounded-2xl p-8 transition-all duration-300 w-full md:w-[calc(33.333%-27px)] min-w-[300px] max-w-[380px] grow cursor-pointer group hover:border-[#0066CC] hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)]">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#004999] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                    {approach.icon}
                                </div>
                                <h3 className="text-[20px] font-semibold text-slate-900 mb-5 group-hover:text-[#0066CC] transition-colors leading-tight">
                                    {index + 1}. {approach.title}
                                </h3>
                                <ul className="list-none p-0 m-0 space-y-3">
                                    {approach.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-600 leading-relaxed">
                                            <CheckCircle2 size={18} className="text-[#0066CC] mt-0.5 shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-slate-50 rounded-2xl text-center border border-slate-100">
                        <p className="text-[18px] font-medium text-slate-900 m-0">
                            Every keyword is aligned to business outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">
                            Industries We Serve
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 max-w-[700px] mx-auto font-medium">
                            We adapt SEO frameworks to industry-specific buying behavior and search patterns.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {industries.map((industry, index) => (
                            <div key={index} className="bg-white p-7 rounded-2xl text-center transition-all duration-300 cursor-pointer border-2 border-transparent w-full md:w-[calc(25%-18px)] min-w-[200px] max-w-[280px] grow hover:border-[#0066CC] hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(0,102,204,0.1)] group">
                                <div className="text-[#0066CC] mb-3 flex justify-center group-hover:scale-110 transition-transform">
                                    {industry.icon}
                                </div>
                                <p className="text-[16px] font-medium text-slate-900 m-0 group-hover:text-[#0066CC] transition-colors">
                                    {industry.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Framework */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">
                            Our Process Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Discover → Strategize → Optimize → Scale → Measure
                        </p>
                        <p className="text-[16px] text-slate-600 font-medium">
                            Transparent dashboards. Clear KPIs. Measurable growth.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-gradient-to-br from-[#0066CC] to-[#004999] text-white p-10 rounded-2xl relative overflow-hidden w-full md:w-[calc(33.333%-16px)] min-w-[250px] max-w-[350px] grow transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                                <div className="absolute top-4 right-4 text-[48px] font-bold opacity-[0.15] group-hover:scale-125 transition-transform duration-500">
                                    {index + 1}
                                </div>
                                <p className="text-[18px] font-medium relative z-[2] text-white leading-tight m-0">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 leading-tight">
                            What Makes Us Different?
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {differentiators.map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 w-full md:w-[calc(50%-16px)] min-w-[300px] max-w-[550px] grow cursor-pointer group hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,102,204,0.18)] border border-transparent hover:border-[#0066CC]">
                                <div className="text-[#0066CC] mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-[20px] font-semibold text-slate-900 mb-4 group-hover:text-[#0066CC] transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 leading-relaxed m-0 font-medium">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Metrics */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">
                            SEO Metrics We Track
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Growth is measurable. And we prove it.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-5">
                        {metrics.map((metric, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 w-full md:w-[calc(25%-15px)] min-w-[250px] max-w-[300px] grow cursor-pointer group hover:bg-[#0066CC] hover:text-white hover:-translate-y-1.5 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 border border-slate-100">
                                <BarChart3 size={24} className="shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-[16px] font-bold">
                                    {metric}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[28px] md:text-[36px] font-bold text-center mb-10 md:mb-[60px] text-slate-900 leading-tight">Frequently Asked Questions</h2>
                    <div className="max-w-[800px] mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className="mb-[15px] border border-slate-200 rounded-[15px] overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className={`w-full p-[20px_30px] flex justify-between items-center transition-all duration-300 border-none cursor-pointer ${openFaq === i ? 'bg-[#f8fafc]' : 'bg-white'}`}
                                >
                                    <span className="text-[18px] font-bold text-slate-900 text-left">{faq.question}</span>
                                    {openFaq === i ? <ChevronUp size={20} className="text-[#0066cc]" /> : <ChevronDown size={20} className="text-slate-400" />}
                                </button>
                                {openFaq === i && (
                                    <div className="p-[20px_30px] bg-white border-t border-slate-100">
                                        <p className="m-0 text-slate-600 leading-[1.7] text-[16px] font-medium">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-6 text-white leading-tight">
                        Ready to Dominate Search?
                    </h2>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-90 font-medium text-white">
                        Organic traffic is the most powerful digital asset you can build.
                    </p>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-90 text-white font-medium">
                        If you're ready to move beyond temporary boosts and build long-term digital authority,
                    </p>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium text-white">
                        Partner with Adkryoss managed by <span className="text-white font-black">Clink Consultancy Services Private Limited</span>
                    </p>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-90 text-white font-medium">
                        Let's transform search visibility into consistent business growth.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066CC] py-5 px-12 rounded-xl text-[18px] font-bold transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105">
                        Get Started Today
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SEOServices;
