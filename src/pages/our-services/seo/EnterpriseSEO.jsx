import React from 'react';
import {
    Globe,
    Search,
    Zap,
    Target,
    BarChart3,
    Shield,
    ArrowRight,
    Cpu,
    Database,
    Network,
    CheckCircle2,
    Users,
    FileText,
    Settings,
    Layout,
    TrendingUp,
    LineChart,
    PieChart,
    Workflow,
    Layers,
    ShoppingCart,
    GraduationCap,
    Home,
    Heart,
    DollarSign,
    Briefcase
} from 'lucide-react';

const EnterpriseSEO = () => {
    const enterpriseFramework = [
        {
            title: "1. Enterprise SEO Audit",
            icon: <Search size={32} />,
            desc: "We conduct a 360° audit covering technical health, content gaps, and competitor intelligence at scale.",
            points: [
                "Technical SEO architecture",
                "Crawl efficiency & indexability",
                "Log file analysis",
                "Core Web Vitals & experience",
                "Content gaps & keyword clusters",
                "Competitor intelligence mapping"
            ],
            extra: "Identifies scalable growth opportunities across the entire domain ecosystem."
        },
        {
            title: "2. Scalable Technical SEO",
            icon: <Settings size={32} />,
            desc: "Enterprise success starts with technical dominance. We optimize structure for discovery.",
            points: [
                "Site architecture & internal linking",
                "Schema & structured data at scale",
                "Dynamic rendering & JavaScript SEO",
                "Crawl budget optimization",
                "Canonicalization & duplication control",
                "International SEO (Hreflang & localization)"
            ],
            extra: "Designed for large CMS platforms like Magento, Shopify Plus, and custom frameworks."
        },
        {
            title: "3. AI-Powered Content Strategy",
            icon: <Cpu size={32} />,
            desc: "We build intent-driven optimization models aligned with every stage of the buyer journey.",
            points: [
                "Topic clusters & semantic models",
                "Category-level optimization blueprints",
                "Product page scale optimization",
                "AI-assisted content expansion",
                "Automated meta & schema optimization",
                "Authority-building content hubs"
            ],
            extra: "Focus on revenue-driven content that scales across thousands of keywords."
        }
    ];

    const additionalFramework = [
        {
            title: "4. Content Governance",
            icon: <Layout size={32} />,
            desc: "Consistency is key in enterprise SEO. We implement frameworks to maintain quality across teams.",
            points: [
                "SEO content guidelines for internal teams",
                "Editorial workflow alignment",
                "Brand-safe optimization frameworks",
                "Conversion-optimized landing pages",
                "Structured internal linking automation"
            ]
        },
        {
            title: "5. Enterprise Link Authority",
            icon: <Network size={32} />,
            desc: "We build authority through digital PR and strategic outreach targeting high-trust domains.",
            points: [
                "Digital PR campaigns",
                "Data-driven content assets",
                "High-authority placements",
                "Industry-specific outreach",
                "Brand reputation management"
            ]
        },
        {
            title: "6. Performance Intelligence",
            icon: <BarChart3 size={32} />,
            desc: "Real-time data for decision making. We connect SEO performance directly to revenue and ROI.",
            points: [
                "Custom SEO dashboards",
                "Predictive growth modeling",
                "Revenue attribution tracking",
                "Keyword share-of-voice reports",
                "Competitor visibility benchmarking"
            ]
        }
    ];

    const solutionsOffered = [
        "Ecommerce Enterprise SEO", "International & Multi-Location SEO", "SaaS & Technology SEO",
        "BFSI & Finance SEO", "Healthcare & Compliance SEO", "Marketplace SEO Optimization",
        "B2B Enterprise SEO"
    ];

    const workingModel = [
        { step: "01", title: "Discovery", desc: "Alignment with business KPIs and stakeholders." },
        { step: "02", title: "Foundations", desc: "Technical architecture setup and audits." },
        { step: "03", title: "Expansion", desc: "Content and authority building at scale." },
        { step: "04", title: "Automation", desc: "Process integration and workflow AI." },
        { step: "05", title: "Growth", desc: "Continuous optimization and performance tracking." }
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
                            Enterprise SEO Services
                        </h1>
                        <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                            Scale Rankings. Accelerate Revenue. Dominate Your Category.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Enterprise SEO turns complex websites into scalable growth engines. We build data-driven strategies that help enterprises win visibility across thousands of keywords, markets, and product categories.
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
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we blend technical expertise, automation, and AI-led insights to drive measurable revenue growth.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Enterprise-SEO.webp"
                            alt="Enterprise SEO Services"
                            style={{
                                maxWidth: '500px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why Enterprise Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            Why Enterprise SEO Demands a Different Approach
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666', maxWidth: '850px', margin: '0 auto' }}>
                            Large organizations face challenges that traditional SEO agencies simply cannot handle. We approach enterprise SEO as a business transformation initiative.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {[
                                "Massive website architecture & thousands of indexed pages",
                                "Multiple stakeholders and approval layers",
                                "Legacy CMS limitations & technical constraints",
                                "International & multi-location targeting strategy",
                                "Frequent algorithm volatility & search shifts",
                                "Brand reputation & compliance sensitivity"
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center', background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #eee' }}>
                                    <div style={{ background: '#0066cc', color: '#fff', padding: '4px', borderRadius: '50%' }}>
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span style={{ fontSize: '16px', fontWeight: '500', color: '#1a1a1a' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ background: '#0f172a', color: '#fff', padding: '50px', borderRadius: '40px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <TrendingUp size={48} className="text-blue-500 mb-6" />
                                <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px' }}>Strategic Integration</h3>
                                <p style={{ fontSize: '18px', opacity: 0.8, lineHeight: '1.8', color: '#fff' }}>
                                    We don't just optimize for bots. We integrate SEO with your technology, content, analytics, and CRO teams to build a sustainable visibility engine that drives business value.
                                </p>
                            </div>
                            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.1 }}>
                                <Globe size={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            Our Enterprise SEO Framework
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666' }}>
                            Structured for performance, built for scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {enterpriseFramework.map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                transition: 'all 0.3s',
                                border: '1px solid #e2e8f0'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.1)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>{item.title}</h3>
                                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                                    {item.points.map((p, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '8px', marginBottom: '10px', color: '#444', fontSize: '15px' }}>
                                            <div style={{ color: '#0066cc', marginTop: '4px' }}><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#0066cc', marginTop: '20px' }}>{item.extra}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {additionalFramework.map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                transition: 'all 0.3s',
                                border: '1px solid #e2e8f0'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.1)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>{item.title}</h3>
                                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {item.points.map((p, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '8px', marginBottom: '10px', color: '#444', fontSize: '15px' }}>
                                            <div style={{ color: '#0066cc', marginTop: '4px' }}><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Enterprise SEO Solutions We Offer</h2>
                        <p style={{ fontSize: '20px', color: '#666' }}>Tailored strategies for your industry dynamics and growth stage.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {solutionsOffered.map((sol, i) => (
                            <div key={i} style={{ padding: '20px 40px', background: '#f8f9fa', borderRadius: '50px', border: '1px solid #eee', fontSize: '18px', fontWeight: '600', color: '#1a1a1a', transition: 'all 0.3s', cursor: 'pointer' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#0066cc';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#f8f9fa';
                                    e.currentTarget.style.color = '#1a1a1a';
                                    e.currentTarget.style.borderColor = '#eee';
                                }}>
                                {sol}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section style={{ padding: '100px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>What Makes Our Enterprise SEO Different?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { t: "Strategic Depth", d: "We align SEO with your business KPIs and long-term revenue goals.", i: <Target size={32} /> },
                            { t: "Technology-Led", d: "Automation & AI frameworks reduce inefficiencies in large site management.", i: <Cpu size={32} /> },
                            { t: "Cross-Functional", d: "We work alongside your internal marketing, tech, and leadership teams.", i: <Users size={32} /> },
                            { t: "Scalable Systems", d: "Our processes are built for 10,000+ pages and complex CMS environments.", i: <Layers size={32} /> },
                            { t: "Transparent Intelligence", d: "Clear, business-driven metrics and predictive growth modeling.", i: <BarChart3 size={32} /> },
                            { t: "Regulatory Alignment", d: "We ensure compliance with healthcare, finance, or brand standards.", i: <Shield size={32} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div className="text-blue-500 mb-6">{item.i}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#fff' }}>{item.t}</h3>
                                <p style={{ color: '#e2e8f0', lineHeight: '1.7' }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Model */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Our Working Model</h2>
                        <p style={{ fontSize: '20px', color: '#666' }}>Operating as an extended enterprise growth partner.</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-6">
                        {workingModel.map((item, i) => (
                            <div key={i} style={{
                                background: '#f8f9fa',
                                padding: '30px',
                                borderRadius: '24px',
                                textAlign: 'center',
                                border: '1px solid #eee',
                            }}>
                                <div style={{ fontSize: '32px', fontWeight: '700', color: 'rgba(0,102,204,0.1)', marginBottom: '10px' }}>{item.step}</div>
                                <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '10px' }}>{item.title}</h4>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Industries We Empower</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "Ecommerce & Retail", icon: <ShoppingCart size={20} /> },
                            { name: "EdTech & Education", icon: <GraduationCap size={20} /> },
                            { name: "Real Estate", icon: <Home size={20} /> },
                            { name: "Healthcare", icon: <Heart size={20} /> },
                            { name: "BFSI", icon: <DollarSign size={20} /> },
                            { name: "Technology & SaaS", icon: <Cpu size={20} /> },
                            { name: "Corporate Enterprises", icon: <Briefcase size={20} /> },
                            { name: "Global Marketplaces", icon: <Globe size={20} /> }
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '24px 20px',
                                borderRadius: '20px',
                                textAlign: 'center',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s',
                                border: '1px solid #f1f5f9'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,102,204,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '15px' }}>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '30px' }}>Results You Can Expect</h2>
                            <div className="space-y-6">
                                {[
                                    "Increased organic visibility across thousands of high-value keywords",
                                    "Improved crawl efficiency & performance for complex domains",
                                    "Higher domain authority & trust across search ecosystems",
                                    "Scalable traffic growth that compounds quarter-over-quarter",
                                    "Stronger conversion rates through category-level optimization",
                                    "Long-term search dominance in your industry segment"
                                ].map((res, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                        <div style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px', borderRadius: '5px', marginTop: '4px' }}>
                                            <TrendingUp size={18} />
                                        </div>
                                        <p style={{ fontSize: '17px', color: '#334155', fontWeight: '500', margin: 0 }}>{res}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '60px', borderRadius: '40px', color: '#fff', textAlign: 'center' }}>
                            <PieChart size={64} className="text-blue-500 mb-8 mx-auto" />
                            <h3 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Dominance at Scale</h3>
                            <p style={{ fontSize: '18px', opacity: 0.8, lineHeight: '1.8', color: '#fff' }}>
                                Enterprise SEO is not a campaign — it’s a competitive advantage that builds a wide moat around your digital presence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Ready to Lead Your Industry in Search?</h2>
                    <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: '#fff' }}>
                        Partner with Adkryoss managed by Clink Consultancy Services Private Limited to build a scalable search growth engine.
                    </p>
                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#0066cc', padding: '18px 40px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Build Your Enterprise Dominance <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default EnterpriseSEO;
