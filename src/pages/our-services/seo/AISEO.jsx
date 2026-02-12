import React from 'react';
import { Link } from 'react-router-dom';
import {
    Brain,
    Search,
    Zap,
    Target,
    BarChart3,
    Shield,
    ArrowRight,
    Globe,
    Settings,
    Cpu,
    Database,
    Network,
    MessageSquare,
    CheckCircle2,
    TrendingUp,
    LineChart
} from 'lucide-react';

const AISEO = () => {
    const aiFramework = [
        {
            title: "AI-Powered Search Intelligence & Audit",
            icon: <Database size={32} />,
            desc: "Before scaling traffic, we decode your search ecosystem.",
            points: [
                "AI-driven keyword clustering & semantic mapping",
                "Entity-based search analysis",
                "SERP volatility tracking",
                "Competitor AI visibility audit",
                "Search intent heat mapping"
            ],
            extra: "We analyze how AI engines interpret your niche and uncover ranking gaps your competitors haven’t identified yet."
        },
        {
            title: "Predictive Keyword & Topic Engineering",
            icon: <TrendingUp size={32} />,
            desc: "We move beyond static keywords using machine learning insights.",
            points: [
                "Conversational query targeting",
                "Long-tail predictive keyword models",
                "Topic clusters built around user journeys",
                "Voice-search optimization mapping",
                "Featured snippet & AI summary targeting"
            ],
            extra: "This ensures your content ranks not just today — but adapts to tomorrow’s search patterns."
        },
        {
            title: "AI-Optimized Content Architecture",
            icon: <Network size={32} />,
            desc: "Modern SEO is about structured intelligence.",
            points: [
                "NLP-optimized content creation",
                "Entity-driven internal linking systems",
                "Topical authority building",
                "Structured data & schema implementation",
                "AI-readability & answer extraction optimization"
            ],
            extra: "We design content frameworks that make it easier for AI systems to understand, rank, and extract your brand as a trusted source."
        },
        {
            title: "Technical AI SEO Optimization",
            icon: <Settings size={32} />,
            desc: "Search engines prioritize experience signals and AI interpretability.",
            points: [
                "Core Web Vitals & UX signals",
                "Crawl budget intelligence",
                "AI-friendly site architecture",
                "Log file analysis",
                "Indexation strategy modeling",
                "Programmatic SEO systems"
            ],
            extra: "Our technical layer ensures your website is not just fast — but machine-intelligent."
        },
        {
            title: "Authority & Digital Entity Building",
            icon: <Shield size={32} />,
            desc: "AI search values trusted digital entities.",
            points: [
                "Brand entity recognition",
                "E-E-A-T optimization",
                "AI-driven digital PR",
                "Data-backed backlink acquisition",
                "Knowledge panel enhancement",
                "Semantic citation ecosystem"
            ],
            extra: "This strengthens your brand presence across AI knowledge graphs and organic search networks."
        }
    ];

    const aiServices = [
        { title: "Enterprise AI SEO", desc: "Scalable, data-driven organic strategies for large websites with complex architecture.", icon: <Globe size={24} /> },
        { title: "E-commerce AI SEO", desc: "Optimized product visibility across AI summaries, shopping search, and voice commerce.", icon: <Search size={24} /> },
        { title: "Local AI SEO", desc: "Hyper-local semantic optimization for maps, voice queries, and near-me searches.", icon: <Target size={24} /> },
        { title: "B2B AI SEO", desc: "Decision-journey-based optimization to attract high-intent corporate audiences.", icon: <BarChart3 size={24} /> },
        { title: "Generative Search Optimization (GSO)", desc: "Position your content for AI-generated answers and zero-click environments.", icon: <Cpu size={24} /> }
    ];

    const workingModel = [
        { step: "Step 1: Discovery & Data Mapping", desc: "We decode your market, competition, and AI search behavior." },
        { step: "Step 2: Strategy Blueprint", desc: "Custom AI SEO roadmap aligned with business objectives." },
        { step: "Step 3: Intelligent Implementation", desc: "On-page, technical, and authority-building executed through AI-enhanced processes." },
        { step: "Step 4: Continuous Optimization", desc: "We refine strategies using real-time analytics, machine learning insights, and performance modeling." },
        { step: "Step 5: Transparent Reporting", desc: "Actionable dashboards, predictive metrics, and measurable ROI tracking." }
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
                <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10">
                        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1px', color: '#000' }}>
                            AI SEO Services
                        </h1>
                        <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                            Rank Beyond Keywords. Dominate AI-Driven Search Ecosystems.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Search is no longer just about Google rankings. It’s about visibility across AI engines, voice assistants, zero-click results, and generative search experiences.
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
                                Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span> delivers next-generation AI SEO solutions that help businesses become discoverable across modern search landscapes.
                            </p>
                        </div>
                        <p style={{ fontSize: '20px', fontWeight: '500', color: '#fff' }}>
                            We combine human expertise with machine intelligence to build scalable, future-ready SEO systems.
                        </p>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/11/AI-SEO.webp"
                            alt="AI SEO"
                            style={{
                                maxWidth: '450px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why AI SEO Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', color: '#0f172a' }}>
                                Why AI SEO is the Future of Organic Growth
                            </h2>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                Search behavior has fundamentally changed. Traditional SEO focuses on ranking pages. AI SEO focuses on becoming the answer.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    "AI-powered search engines summarize answers.",
                                    "Users rely on voice queries and conversational search.",
                                    "Google’s Search Generative Experience (SGE) reshapes rankings.",
                                    "Content is evaluated through semantic relevance, not just keywords."
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '24px', height: '24px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                            <Zap size={14} style={{ color: '#3b82f6' }} />
                                        </div>
                                        <p style={{ fontSize: '16px', fontWeight: '500', color: '#334155', margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{
                            background: '#f8fafc',
                            padding: '40px',
                            borderRadius: '30px',
                            border: '1px solid #e2e8f0',
                            textAlign: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
                        }}>
                            <Brain size={64} style={{ color: '#3b82f6', marginBottom: '24px' }} />
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', margin: 0 }}>
                                At Adkryoss managed by Clink Consultancy Services pvt.ltd, we engineer SEO strategies that align with how AI algorithms interpret, rank, and recommend content in real time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#0f172a' }}>
                            Our AI SEO Framework
                        </h2>
                        <p style={{ fontSize: '20px', color: '#64748b' }}>
                            We don’t run campaigns. We build intelligent organic growth systems.
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        {aiFramework.map((step, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                                border: '1px solid #e2e8f0',
                                width: 'calc(33.333% - 20px)',
                                minWidth: '320px',
                                flexGrow: 1,
                                maxWidth: '400px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.12)';
                                    e.currentTarget.style.borderColor = '#3b82f6';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#3b82f6', marginBottom: '20px' }}>{step.icon}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px', color: '#0f172a' }}>
                                    {i + 1}. {step.title}
                                </h3>
                                <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>{step.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                                    {step.points.map((pt, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '20px', fontSize: '14px', color: '#334155' }}>
                                            <CheckCircle2 size={16} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '500', padding: '15px', background: '#eff6ff', borderRadius: '12px', margin: 0 }}>
                                    {step.extra}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI SEO Services List */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>
                        AI SEO Services We Offer
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px'
                    }}>
                        {aiServices.map((service, i) => (
                            <div key={i} style={{
                                padding: '30px',
                                background: '#f8fafc',
                                borderRadius: '20px',
                                border: '1px solid #e2e8f0',
                                width: 'calc(33.333% - 14px)',
                                minWidth: '300px',
                                flexGrow: 1,
                                maxWidth: '380px',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#fff';
                                    e.currentTarget.style.borderColor = '#3b82f6';
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#f8fafc';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ color: '#3b82f6', marginBottom: '15px' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#0f172a' }}>{service.title}</h3>
                                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Model */}
            <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>How We Work</h2>
                        <p style={{ fontSize: '18px', color: '#94a3b8' }}>
                            At Adkryoss managed by Clink Consultancy Services Private Limited, our working model is structured, transparent, and performance-led.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                        {workingModel.map((item, i) => (
                            <div key={i} style={{
                                padding: '30px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '15px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '15px', color: '#3b82f6' }}>{item.step}</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>
                        Why Choose Adkryoss for AI SEO?
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px'
                    }}>
                        {[
                            "AI-first strategy, not traditional SEO repackaged",
                            "Data-backed decision making",
                            "Enterprise-grade analytics tools",
                            "Performance-driven execution",
                            "Continuous algorithm adaptation",
                            "Scalable growth systems"
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: '20px 30px',
                                background: '#f8fafc',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                width: 'calc(33.333% - 14px)',
                                minWidth: '280px',
                                flexGrow: 1,
                                maxWidth: '380px',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#3b82f6';
                                    e.currentTarget.style.transform = 'scale(1.03)';
                                    e.currentTarget.style.background = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.background = '#f8fafc';
                                }}>
                                <CheckCircle2 size={20} style={{ color: '#3b82f6' }} />
                                <span style={{ fontWeight: '600', color: '#0f172a' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <p style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a' }}>
                            We don’t chase algorithm updates. We build systems that evolve with them.
                        </p>
                    </div>
                </div>
            </section>

            {/* Future of SEO */}
            <section style={{ padding: '80px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', color: '#0f172a' }}>
                            The Future of SEO is Intelligent
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                            {["Context over keywords", "Authority over volume", "Experience over density", "Entities over isolated pages"].map((txt, i) => (
                                <div key={i} style={{ padding: '20px', background: '#fff', borderRadius: '12px', fontWeight: '600', color: '#0f172a', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    {txt}
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: '20px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                            Businesses that adapt early dominate visibility. If your SEO strategy still relies on outdated tactics, your growth will plateau.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '24px', color: '#fff' }}>
                        Let’s Build AI-Powered Organic Growth
                    </h2>
                    <p style={{ fontSize: '22px', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', color: '#eff6ff' }}>
                        Search is evolving. Your strategy should too. Partner with Adkryoss managed by Clink Consultancy Services Private Limited, to future-proof your organic presence.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#fff',
                        color: '#2563eb',
                        padding: '20px 50px',
                        borderRadius: '50px',
                        fontSize: '18px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                        Start Your AI SEO Journey
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AISEO;
