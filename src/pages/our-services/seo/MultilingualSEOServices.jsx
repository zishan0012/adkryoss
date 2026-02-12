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
        <div>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
                    color: '#fff',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, pointerEvents: 'none', background: 'url("https://www.transparenttextures.com/patterns/world-map.png")' }}></div>
                <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10">
                        <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1px', color: '#000' }}>
                            Multilingual SEO Services
                        </h1>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px', color: '#000' }}>
                            Expand Beyond Borders. Rank in Every Language.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Your audience is no longer limited by geography. They search in their native language, expect localized experiences, and trust brands that speak to them naturally.
                        </p>
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '24px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            marginBottom: '32px'
                        }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', margin: 0 }}>
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span> delivers powerful multilingual SEO frameworks that help businesses rank across countries, languages, and search engines.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Multilingual-SEO.webp"
                            alt="Multilingual SEO"
                            style={{
                                maxWidth: '450px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why Multilingual SEO */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>
                            Why Multilingual SEO is a Growth Multiplier
                        </h2>
                        <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto' }}>
                            Global users don’t just translate keywords — they search differently. Search intent varies by culture, phrasing differs by region, and even buying behavior shifts across markets.
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '60px'
                    }}>
                        {[
                            "Higher visibility in international SERPs",
                            "Improved regional organic traffic",
                            "Better user engagement & lower bounce rates",
                            "Stronger brand credibility in local markets",
                            "Sustainable global expansion"
                        ].map((benefit, i) => (
                            <div key={i} style={{
                                padding: '24px',
                                background: '#eff6ff',
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                width: 'calc(33.333% - 14px)',
                                minWidth: '280px',
                                flexGrow: 1,
                                maxWidth: '350px',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.background = '#0066cc';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.background = '#eff6ff';
                                    e.currentTarget.style.color = '#0f172a';
                                }}>
                                <CheckCircle2 size={24} />
                                <span style={{ fontWeight: '700' }}>{benefit}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '20px', fontWeight: '700', color: '#0066cc' }}>
                            This isn’t translation. This is strategic localization powered by data.
                        </p>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>
                        Our Multilingual SEO Approach
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        {approach.map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                width: 'calc(33.333% - 20px)',
                                minWidth: '320px',
                                flexGrow: 1,
                                maxWidth: '400px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.1)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#0f172a' }}>
                                    {i + 1}. {item.title}
                                </h3>
                                <p style={{ fontSize: '15px', color: '#475569', marginBottom: '20px', lineHeight: '1.6' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                                    {item.points.map((pt, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '20px', fontSize: '14px', color: '#334155' }}>
                                            <div style={{ width: '6px', height: '6px', background: '#0066cc', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '14px', color: '#0066cc', fontWeight: '600', padding: '15px', background: '#eff6ff', borderRadius: '12px', margin: 0 }}>
                                    {item.extra}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Needs Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>Who Needs Multilingual SEO?</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                        {needsMultilingual.map((need, i) => (
                            <div key={i} style={{
                                padding: '15px 35px',
                                background: '#eff6ff',
                                color: '#0f172a',
                                borderRadius: '50px',
                                fontWeight: '700',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#0066cc';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#eff6ff';
                                    e.currentTarget.style.color = '#0f172a';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}>
                                {need}
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '18px', color: '#475569', fontWeight: '600' }}>
                        If your audience speaks more than one language, your SEO strategy should too.
                    </p>
                </div>
            </section>

            {/* Why Choose Our Multilingual SEO Services? */}
            <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#fff' }}>Why Choose Our Multilingual SEO Services?</h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px'
                    }}>
                        {[
                            "Data-driven international strategy",
                            "Native-language SEO specialists",
                            "Technical SEO expertise",
                            "Scalable global frameworks",
                            "Conversion-first content localization",
                            "Transparent performance tracking"
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: '24px 30px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '15px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                width: 'calc(33.333% - 14px)',
                                minWidth: '300px',
                                flexGrow: 1,
                                maxWidth: '380px'
                            }}>
                                <CheckCircle2 size={24} style={{ color: '#0066cc' }} />
                                <span style={{ fontWeight: '700', fontSize: '16px' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Model */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '60px', color: '#0f172a' }}>Our Working Model</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        {["Discover", "Strategize", "Localize", "Optimize", "Scale"].map((step, i) => (
                            <React.Fragment key={i}>
                                <div style={{
                                    padding: '25px 45px',
                                    background: '#0066cc',
                                    color: '#fff',
                                    borderRadius: '12px',
                                    fontWeight: '800',
                                    fontSize: '20px',
                                    boxShadow: '0 10px 20px rgba(0, 102, 204, 0.2)'
                                }}>
                                    {step}
                                </div>
                                {i < 4 && <ArrowRight size={30} style={{ color: '#0066cc', opacity: 0.5 }} />}
                            </React.Fragment>
                        ))}
                    </div>
                    <p style={{ maxWidth: '900px', margin: '50px auto 0', fontSize: '18px', color: '#4b5563', lineHeight: '1.8' }}>
                        We begin with market understanding, implement structured multilingual SEO systems, optimize continuously, and scale performance based on real-time data. This ensures your brand ranks globally — without losing local relevance.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0066cc 0%, #004e92 100%)', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px', color: '#fff' }}>
                        Ready to Go Global?
                    </h2>
                    <p style={{ fontSize: '22px', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', color: '#eff6ff' }}>
                        Your next customer may not speak your language — but your website should speak theirs. Let’s build a multilingual SEO strategy that expands your reach and increases international traffic.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#fff',
                        color: '#0066cc',
                        padding: '20px 50px',
                        borderRadius: '50px',
                        fontSize: '18px',
                        fontWeight: '800',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                        Connect With Us Today
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MultilingualSEOServices;
