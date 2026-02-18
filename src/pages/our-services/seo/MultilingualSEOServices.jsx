import React from 'react';
import { Link } from 'react-router-dom';
import {
    Globe,
    Languages,
    Search,
    Zap,
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Shield,
    Settings,
    Globe2,
    MessageSquare,
    Users,
    MousePointer2,
    Target
} from 'lucide-react';
import multilingualseoservices from '../../../assets/SEO/multilingualhero.png';
const MultilingualSEOServices = () => {
    const approach = [
        {
            title: "International SEO Strategy & Market Research",
            icon: <Globe2 size={32} />,
            desc: "We analyze target countries and languages to build a customized international roadmap.",
            points: [
                "Target countries and languages identification",
                "Local search behavior & intent analysis",
                "Regional competitor benchmarking",
                "Search engine preferences (Google, Bing, Baidu, etc.)",
                "Cultural nuances impacting conversion"
            ],
            extra: "Adkryoss builds a roadmap aligned with your business goals and expansion strategy."
        },
        {
            title: "Multilingual Keyword Intelligence",
            icon: <Search size={32} />,
            desc: "Direct translation of keywords doesn’t work. We conduct native-language research.",
            points: [
                "Native-language keyword research",
                "Semantic & contextual search mapping",
                "Local intent clustering",
                "Regional trend analysis",
                "Long-tail keyword targeting"
            ],
            extra: "We ensure your content aligns with how real users search in each market."
        },
        {
            title: "Technical International SEO Implementation",
            icon: <Settings size={32} />,
            desc: "A strong technical foundation ensures search engines understand your multilingual structure.",
            points: [
                "Hreflang tag implementation",
                "International URL structures (ccTLDs, subdirectories, subdomains)",
                "Geo-targeting in Google Search Console",
                "Language-based XML sitemaps",
                "Indexation management",
                "Core Web Vitals optimization across regions"
            ],
            extra: "We ensure flawless technical execution that eliminates duplicate content risks."
        },
        {
            title: "Content Localization & Optimization",
            icon: <Languages size={32} />,
            desc: "Translation alone doesn’t convert. Localization does. Every piece is optimized for engagement.",
            points: [
                "Culturally adapted website content",
                "Region-specific landing pages",
                "Localized blog strategy",
                "On-page SEO optimization in native languages",
                "Conversion-focused content structuring"
            ],
            extra: "Every piece of content is optimized for search engines and written for human engagement."
        },
        {
            title: "International Link Building & Authority",
            icon: <Shield size={32} />,
            desc: "Authority varies by region. We build trust signals locally to strengthen relevance.",
            points: [
                "Country-specific backlink outreach",
                "Local digital PR",
                "Regional directory submissions",
                "Influencer & publisher collaborations",
                "Contextual authority building"
            ],
            extra: "This strengthens your domain relevance in each targeted market."
        },
        {
            title: "Performance Tracking & Market-Level Reporting",
            icon: <BarChart3 size={32} />,
            desc: "We provide transparent reporting that measures growth market by market.",
            points: [
                "Country-wise ranking reports",
                "Language-based traffic insights",
                "Conversion tracking per region",
                "Behavioral analytics",
                "ROI-focused performance dashboards"
            ],
            extra: "Measure growth market by market with actionable insights."
        }
    ];

    const needsMultilingual = [
        "E-commerce brands expanding internationally",
        "SaaS companies targeting global users",
        "Educational institutions attracting overseas students",
        "Healthcare & travel brands serving multiple regions",
        "Enterprises entering new international markets"
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            Multilingual SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Global Reach. Local Trust. Multilingual Search Dominance.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Your audience is no longer limited by geography. They search in their native language, expect localized experiences, and trust brands that speak to them naturally.
                        </p>
                        <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we deliver powerful multilingual SEO frameworks that help businesses rank across countries, languages, and search engines.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={multilingualseoservices}
                                alt=" Multilingual SEO Services"
                                className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Multilingual SEO */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">
                            Why Multilingual SEO is a Growth Multiplier
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] max-w-[900px] mx-auto font-medium">
                            Global users don’t just translate keywords — they search differently. Search intent varies by culture, phrasing differs by region, and even buying behavior shifts across markets.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-5 mb-[60px]">
                        {[
                            "Higher visibility in international SERPs",
                            "Improved regional organic traffic",
                            "Better user engagement & lower bounce rates",
                            "Stronger brand credibility in local markets",
                            "Sustainable global expansion"
                        ].map((benefit, i) => (
                            <div key={i} className="p-6 bg-[#eff6ff] rounded-[15px] flex items-center gap-[15px] w-[calc(33.333%-14px)] min-w-[280px] grow max-w-[350px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0066cc] hover:text-white group">
                                <CheckCircle2 size={24} className="text-[#0066cc] group-hover:text-white" />
                                <span className="font-bold">{benefit}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            This isn’t translation. This is strategic localization powered by data.
                        </p>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-[#0f172a]">
                        Our Multilingual SEO Approach
                    </h2>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {approach.map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[24px] border border-[#e2e8f0] w-[calc(33.333%-20px)] min-w-[320px] grow max-w-[400px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-[#0066cc]">
                                <div className="text-[#0066cc] mb-5">{item.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-[15px] text-[#0f172a]">
                                    {i + 1}. {item.title}
                                </h3>
                                <p className="text-[15px] text-[#475569] mb-5 leading-[1.6] font-medium">{item.desc}</p>
                                <ul className="list-none p-0 mb-5 space-y-4">
                                    {item.points.map((pt, idx) => (
                                        <li key={idx} className="flex gap-2.5 text-[14px] text-[#334155] leading-[1.6]">
                                            <div className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 shrink-0"></div>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-[14px] text-[#0066cc] font-bold p-[15px] bg-[#eff6ff] rounded-[12px]">
                                    {item.extra}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Needs Section */}
            <section className="py-20 bg-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-[#0f172a]">Who Needs Multilingual SEO?</h2>
                    <div className="flex flex-wrap justify-center gap-[15px]">
                        {needsMultilingual.map((need, i) => (
                            <div key={i} className="py-4 px-10 bg-[#eff6ff] text-[#0f172a] rounded-full font-bold border border-[#e2e8f0] transition-all duration-300 hover:bg-[#0066cc] hover:text-white hover:scale-105 cursor-default">
                                {need}
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 text-center mt-10 font-medium italic">
                        If your audience speaks more than one language, your SEO strategy should too.
                    </p>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 bg-[#0f172a] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-white">Why Choose Our Multilingual SEO Services?</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {[
                            "Data-driven international strategy",
                            "Native-language SEO specialists",
                            "Technical SEO expertise",
                            "Scalable global frameworks",
                            "Conversion-first content localization",
                            "Transparent performance tracking"
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white/5 rounded-[15px] border border-white/10 flex items-center gap-[15px] w-[calc(33.333%-14px)] min-w-[300px] grow max-w-[380px] transition-all duration-300 hover:bg-[#0066cc]/20 hover:border-[#0066cc]">
                                <CheckCircle2 size={24} className="text-[#0066cc]" />
                                <span className="font-bold text-[16px]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Model */}
            <section className="py-20 bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-[60px] text-[#0f172a]">Our Working Model</h2>
                    <div className="flex justify-center items-center flex-wrap gap-5">
                        {["Discover", "Strategize", "Localize", "Optimize", "Scale"].map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="py-6 px-12 bg-[#0066cc] text-white rounded-[12px] font-bold text-[20px] shadow-[0_10px_20px_rgba(0,102,204,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,102,204,0.3)]">
                                    {step}
                                </div>
                                {i < 4 && <ArrowRight size={30} className="text-[#0066cc] opacity-50 hidden md:block" />}
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 max-w-[900px] mx-auto mt-[50px] leading-[1.8] font-medium">
                        We begin with market understanding, implement structured multilingual SEO systems, optimize continuously, and scale performance based on real-time data. This ensures your brand ranks globally — without losing local relevance.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center bg-gradient-to-br from-[#0066cc] to-[#004e92] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-6 text-white leading-tight">
                        Ready to Go Global?
                    </h2>
                    <p className="text-[22px] mb-10 max-w-[800px] mx-auto text-[#eff6ff] opacity-90 leading-relaxed font-medium">
                        Your next customer may not speak your language — but your website should speak theirs. Let’s build a multilingual SEO strategy that expands your reach and increases international traffic.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3.5 bg-white text-[#0066cc] py-5 px-12 rounded-full text-[18px] font-bold no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:scale-[1.05] hover:shadow-white/20">
                        Connect With Us Today
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MultilingualSEOServices;
