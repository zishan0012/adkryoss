import React from 'react';
import {
    Languages,
    Search,
    Zap,
    Target,
    BarChart3,
    Shield,
    ArrowRight,
    Globe,
    Cpu,
    Database,
    Network,
    CheckCircle2,
    Users,
    FileText,
    MessageCircle,
    Smartphone,
    TrendingUp,
    Map,
    ShoppingCart,
    Building2,
    Heart,
    GraduationCap,
    Home,
    Package,
    Film,
    DollarSign
} from 'lucide-react';

const VernacularSEOServices = () => {
    const vernacularFramework = [
        {
            title: "1. Regional Search Intelligence",
            icon: <Search size={32} />,
            desc: "We conduct deep keyword research in native languages, analyzing real demand—not assumptions.",
            points: [
                "Local search patterns",
                "Transliteration behavior (Hindi in English script)",
                "Voice search trends",
                "Regional competitor mapping",
                "Search intent segmentation"
            ],
            extra: "Focuses on how users actually think and search, not just dictionary translations."
        },
        {
            title: "2. Multilingual Content Strategy",
            icon: <MessageCircle size={32} />,
            desc: "We create high-quality, SEO-optimized content that is strategically localized.",
            points: [
                "Reflects cultural tone and local sentiment",
                "Matches user intent precisely",
                "Google multilingual indexing standards",
                "Brand voice consistency across languages"
            ],
            extra: "Content is transcreated by native experts to resonate with regional hearts."
        },
        {
            title: "3. Multilingual Website Optimization",
            icon: <Cpu size={32} />,
            desc: "Technical execution is critical for vernacular rankings. We ensure flawless structure.",
            points: [
                "Hreflang architecture",
                "Multilingual URL structuring",
                "Language-specific meta tags",
                "Structured data and Schema optimization",
                "Core Web Vitals & Mobile-first indexing"
            ],
            extra: "Ensures search engines correctly understand and rank your regional pages."
        },
        {
            title: "4. Localized On-Page & Entity SEO",
            icon: <Target size={32} />,
            desc: "We build authority in each language ecosystem through granular on-page signals.",
            points: [
                "Region-specific landing pages",
                "Native-language FAQs",
                "Google Business Profiles in regional formats",
                "Entity-based content clusters"
            ],
            extra: "Connects your local presence with regional search intent."
        },
        {
            title: "5. Regional Link Building & Digital PR",
            icon: <Network size={32} />,
            desc: "Authority building requires localized outreach and regional publisher collaborations.",
            points: [
                "Regional publisher collaborations",
                "Native language guest articles",
                "Local citation building",
                "Influencer mentions in regional media"
            ],
            extra: "Strengthens domain authority within specific regional search ecosystems."
        }
    ];

    const targetingIndustries = [
        { name: "E-commerce & D2C", icon: <ShoppingCart size={18} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={18} /> },
        { name: "Healthcare & Hospitals", icon: <Heart size={18} /> },
        { name: "Real Estate Developers", icon: <Home size={18} /> },
        { name: "BFSI & Fintech", icon: <DollarSign size={18} /> },
        { name: "Govt & Public Sector", icon: <Building2 size={18} /> },
        { name: "FMCG & Consumer Brands", icon: <Package size={18} /> }
    ];

    const ourProcess = [
        { step: "01", title: "Discover", desc: "Market & Language Opportunity Analysis." },
        { step: "02", title: "Strategize", desc: "Multilingual Keyword & Intent Mapping." },
        { step: "03", title: "Localize", desc: "High-quality content transcreation." },
        { step: "04", title: "Optimize", desc: "Technical & On-Page Deployment." },
        { step: "05", title: "Amplify", desc: "Authority & Trust Building." },
        { step: "06", title: "Scale", desc: "Data Monitoring & Continuous Growth." }
    ];

    return (
        <div style={{ backgroundColor: '#fff' }}>
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
                <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div className="text-left relative z-10">
                        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1px', color: '#000' }}>
                            Vernacular SEO Services
                        </h1>
                        <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                            India Doesn’t Search in One Language. We Help You Rank in All of Them.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            India’s digital growth is happening beyond English. From Hindi and Tamil to Bengali, Marathi, Telugu and more — regional language searches are exploding across Google, YouTube, and voice platforms.
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
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we help brands unlock massive untapped regional search demand with precision-driven Vernacular SEO strategies that drive traffic, trust, and transactions.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Vernacular-SEO.webp"
                            alt="Vernacular SEO Services"
                            style={{
                                maxWidth: '500px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why Vernacular SEO Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            Why Vernacular SEO is the Next Growth Engine
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666', maxWidth: '850px', margin: '0 auto' }}>
                            Over 75% of new internet users in India prefer consuming content in their native language. Regional searches are increasing year after year.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div style={{ background: '#f8f9fa', padding: '50px', borderRadius: '40px', border: '1px solid #eee' }}>
                            <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.8', marginBottom: '24px' }}>
                                If your brand communicates only in English, you are invisible to millions of ready-to-buy customers in Tier 2 and Tier 3 cities where buying intent is high but competition is still low.
                            </p>
                            <p style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: '500', lineHeight: '1.8' }}>
                                Vernacular SEO bridges this gap by optimizing your digital presence for multiple regional languages — ensuring discoverability, cultural relevance, and conversion power.
                            </p>
                        </div>
                        <div className="relative">
                            <img src="https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/vernacular-seo-side.webp" alt="Market Opportunity" style={{ width: '100%', borderRadius: '30px' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            Our Vernacular SEO Framework
                        </h2>
                        <p style={{ fontSize: '18px', color: '#666' }}>
                            We combine linguistic intelligence, search data science, and cultural nuance.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {vernacularFramework.map((item, i) => (
                            <div key={i} style={{
                                flex: '1 1 350px',
                                maxWidth: '400px',
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                transition: 'all 0.3s',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>{item.title}</h3>
                                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6', fontSize: '15px' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {item.points.map((p, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '8px', marginBottom: '10px', color: '#444', fontSize: '14px' }}>
                                            <div style={{ color: '#0066cc', marginTop: '4px' }}><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '13px', fontWeight: '500', color: '#0066cc', marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>{item.extra}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '30px' }}>Our Approach: Data + Culture + Performance</h2>
                            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                                Unlike traditional SEO that focuses only on keywords, we blend search insights with cultural messaging frameworks to build scalable multilingual ecosystems.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { t: "Data Insights", d: "Deep behavioral and demographic search analytics." },
                                    { t: "Cultural Magic", d: "Linguistic nuance for local resonance." },
                                    { t: "Performance UX", d: "Conversion-focused user experience." },
                                    { t: "Continuous Growth", d: "Ongoing SERP and ROI optimization." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontWeight: '600', color: '#0066cc', marginBottom: '5px' }}>{item.t}</h4>
                                        <p style={{ fontSize: '14px', color: '#666' }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#0f172a', padding: '60px', borderRadius: '40px', color: '#fff' }}>
                            <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '30px' }}>Why Choose Us?</h3>
                            <div className="space-y-6">
                                {[
                                    "Native-language research specialists",
                                    "AI-powered keyword mapping tools",
                                    "Technical SEO for multilingual sites",
                                    "Performance tracking by region",
                                    "ROI-driven strategy with KPIs",
                                    "Continuous algorithm updates"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <div className=" text-blue-500 rounded-full p-1"><CheckCircle2 size={16} color="#fff" /></div>
                                        <span style={{ fontSize: '16px', fontWeight: '500' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Industries */}
            <section style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Industries We Empower</h2>
                        <p style={{ fontSize: '18px', color: '#666' }}>If your growth plan includes Bharat — vernacular SEO is not optional.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                        {targetingIndustries.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '15px 25px', borderRadius: '12px', border: '1px solid #e2e8f0', fontWeight: '500', color: '#1e293b' }}>
                                <span className="text-blue-500">{item.icon}</span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Our Process</h2>
                        <p style={{ fontSize: '18px', color: '#666' }}>Each step is aligned with measurable performance metrics.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {ourProcess.map((item, i) => (
                            <div key={i} style={{
                                flex: '1 1 200px',
                                maxWidth: '280px',
                                background: '#f8f9fa',
                                padding: '30px',
                                borderRadius: '24px',
                                textAlign: 'center',
                                border: '1px solid #eee',
                            }}>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0066cc', marginBottom: '10px' }}>{item.step}</div>
                                <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '10px' }}>{item.title}</h4>
                                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Advantage */}
            <section style={{ padding: '100px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '60px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <TrendingUp size={48} className="text-blue-400 mb-6" />
                            <h3 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '20px' }}>The Competitive Advantage</h3>
                            <p style={{ fontSize: '18px', color: '#e2e8f0', marginBottom: '30px' }}>Brands that invest in vernacular SEO today will dominate tomorrow’s digital India. Early adoption means:</p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Lower competition", "Higher engagement", "Stronger trust", "Better conversions"].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <CheckCircle2 size={16} className="text-blue-400" />
                                        <span style={{ fontWeight: '500' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#fff', marginBottom: '30px' }}>Move Before Your Competitors</h2>
                            <p style={{ fontSize: '18px', color: '#e2e8f0', lineHeight: '1.8', marginBottom: '32px' }}>
                                Adkryoss managed by Clink Consultancy Services Private Limited helps you move before your competitors realize the opportunity.
                            </p>
                            <div style={{ padding: '30px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '20px', borderLeft: '4px solid #3b82f6' }}>
                                <p style={{ margin: 0, fontWeight: '500', color: '#fff' }}>"Regional search is not the future. It is happening now."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Let’s Build Your Multilingual Growth Engine</h2>
                    <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 1, color: '#fff', fontWeight: '500' }}>
                        Speak every language your customers speak. Connect with us today and unlock Bharat.
                    </p>
                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#0066cc', padding: '18px 40px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Unlock Your Regional Growth <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default VernacularSEOServices;
