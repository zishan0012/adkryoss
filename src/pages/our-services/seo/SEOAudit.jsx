import React from 'react';
import { Link } from 'react-router-dom';
import {
    Settings,
    FileText,
    Link2,
    MousePointer2,
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Building2,
    ShoppingBag,
    GraduationCap,
    Heart,
    Code,
    Globe,
    Zap
} from 'lucide-react';

const SEOAudit = () => {
    const auditFramework = [
        {
            title: "1. Technical SEO Audit",
            icon: <Settings size={32} />,
            desc: "We examine your website architecture from the search engine’s perspective.",
            points: [
                "Crawlability & indexability analysis",
                "XML sitemap & robots.txt validation",
                "Core Web Vitals & speed diagnostics",
                "Mobile-first optimization review",
                "Schema & structured data evaluation",
                "Canonicalization & duplicate content checks",
                "Redirect chains & broken links"
            ],
            footer: "We ensure your website is technically engineered for search dominance."
        },
        {
            title: "2. On-Page & Content Audit",
            icon: <FileText size={32} />,
            desc: "Content without structure is invisible. Structure without intent is ineffective.",
            points: [
                "Keyword mapping & search intent alignment",
                "Meta titles & descriptions optimization",
                "Header hierarchy & content depth",
                "Internal linking architecture",
                "Thin, duplicate & outdated content",
                "Content gap vs competitors",
                "E-E-A-T signals enhancement"
            ],
            footer: "Our goal is to align your content with how modern search engines interpret relevance and authority."
        },
        {
            title: "3. Off-Page & Authority Audit",
            icon: <Link2 size={32} />,
            desc: "Authority determines ranking power.",
            points: [
                "Backlink quality & toxicity",
                "Domain authority benchmarks",
                "Anchor text distribution",
                "Referring domain analysis",
                "Competitor link profile comparison"
            ],
            footer: "At Adkryoss managed by Clink Consultancy Services Private Limited, we don’t just analyze links — we map authority-building opportunities."
        },
        {
            title: "4. UX & Conversion Audit",
            icon: <MousePointer2 size={32} />,
            desc: "SEO is no longer just about rankings. It’s about behavior.",
            points: [
                "Bounce rate patterns",
                "User journey mapping",
                "CTA placements",
                "Page engagement metrics",
                "Conversion funnel gaps"
            ],
            footer: "Because traffic without conversion is wasted visibility."
        }
    ];

    const differentiators = [
        "Action-priority roadmap",
        "Revenue-impact scoring",
        "Competitive benchmarking",
        "90-day optimization plan",
        "Scalability recommendations"
    ];

    const tools = [
        "Google Search Console",
        "Google Analytics 4",
        "Screaming Frog",
        "SEMrush / Ahrefs",
        "PageSpeed Insights",
        "Schema Validators",
        "Heatmap & Behavior Tracking Tools"
    ];

    const industries = [
        { name: "E-commerce & D2C", icon: <ShoppingBag size={24} /> },
        { name: "Healthcare & Pharma", icon: <Heart size={24} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={24} /> },
        { name: "Real Estate", icon: <Building2 size={24} /> },
        { name: "SaaS & Tech", icon: <Code size={24} /> },
        { name: "Corporate Enterprises", icon: <Globe size={24} /> }
    ];

    const auditProcess = [
        "Discovery & Business Understanding",
        "Full-Site Data Crawl",
        "Competitor Intelligence Mapping",
        "Multi-Layered Audit Execution",
        "Strategic Presentation & Roadmap Discussion"
    ];

    const deliverables = [
        "Comprehensive SEO Audit Report (Technical + Content + Authority)",
        "Issue Severity Classification",
        "Keyword Opportunity Matrix",
        "Competitor SWOT Snapshot",
        "Page-Level Optimization Recommendations",
        "Actionable Fix Roadmap"
    ];

    const whenToAudit = [
        "Traffic decline after algorithm update",
        "Website redesign or migration",
        "Launching a new SEO campaign",
        "Poor keyword rankings",
        "Low conversions despite traffic",
        "Preparing for aggressive scaling"
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
                        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1.5px', color: '#000', lineHeight: '1.1' }}>
                            SEO Audit Services
                        </h1>
                        <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                            Uncover. Fix. Outrank.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Your traffic drop isn’t random. Your competitors aren’t lucky. Growth starts with clarity — and clarity starts with a powerful SEO Audit.
                        </p>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', margin: 0 }}>
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we go beyond surface-level checks. We uncover hidden technical issues, content gaps, structural weaknesses, and authority leaks that silently block your rankings.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Search-Engine-Optimization-1.webp"
                            alt="SEO Audit"
                            style={{
                                maxWidth: '450px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why Audit Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '30px', color: '#0f172a' }}>
                                Why Your Website Needs an Advanced SEO Audit
                            </h2>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                Search engines evolve constantly. Algorithms shift. User behavior changes. Competitors optimize daily.
                            </p>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                If your website isn’t technically sound, strategically structured, and content-optimized, you are leaving revenue on the table.
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', marginBottom: '20px' }}>
                                An in-depth SEO audit helps you:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Identify ranking barriers",
                                    "Fix crawl and indexing issues",
                                    "Improve page speed & Core Web Vitals",
                                    "Strengthen keyword targeting",
                                    "Enhance user experience signals",
                                    "Discover missed traffic opportunities"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <CheckCircle2 size={20} style={{ color: '#0066cc' }} />
                                        <span style={{ fontSize: '16px', fontWeight: '500', color: '#334155' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '30px', padding: '20px', background: '#e0f2fe', borderRadius: '12px', color: '#0284c7', fontWeight: '500' }}>
                                This isn’t a checklist audit. It’s a performance blueprint.
                            </div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '30px', color: '#0f172a' }}>Deliverables You Receive</h3>
                            <ul className="space-y-4">
                                {deliverables.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '16px', color: '#475569', fontWeight: '500' }}>
                                        <CheckCircle2 size={20} style={{ color: '#0066cc' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '30px', textAlign: 'center', fontWeight: '600', color: '#0f172a' }}>
                                No fluff. No generic PDFs. Only actionable insights.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#0f172a' }}>Our Strategic SEO Audit Framework</h2>
                        <p style={{ fontSize: '20px', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
                            We follow a data-first, performance-driven methodology inspired by enterprise-grade digital agencies — but tailored for scalable growth.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                        {auditFramework.map((phase, i) => (
                            <div key={i} style={{
                                width: 'calc(50% - 20px)',
                                minWidth: '320px',
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s',
                                flexGrow: 1,
                                maxWidth: '550px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,102,204,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{phase.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#0f172a' }}>{phase.title}</h3>
                                <p style={{ fontSize: '16px', color: '#475569', marginBottom: '24px', fontWeight: '500' }}>{phase.desc}</p>
                                <ul className="space-y-3 mb-6">
                                    {phase.points.map((pt, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '10px', fontSize: '15px', color: '#334155' }}>
                                            <div style={{ width: '6px', height: '6px', background: '#0066cc', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '15px', color: '#0066cc', fontStyle: 'italic', fontWeight: '500' }}>{phase.footer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>What Makes Our SEO Audit Different</h2>
                        <p style={{ fontSize: '20px', color: '#cbd5e1' }}>Most agencies generate automated reports. We deliver strategic intelligence.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '50px' }}>
                        {differentiators.map((diff, i) => (
                            <div key={i} style={{
                                padding: '24px 32px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '15px',
                                fontSize: '18px',
                                fontWeight: '500',
                                color: '#60a5fa'
                            }}>
                                {diff}
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '18px', color: '#fff', fontStyle: 'italic' }}>
                            Adkryoss managed by Clink Consultancy Services Private Limited approaches SEO as a growth system — not a one-time activity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries We Audit */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#0f172a' }}>Industries We Audit</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
                        {industries.map((ind, i) => (
                            <div key={i} style={{
                                padding: '24px 40px',
                                background: '#f8fafc',
                                borderRadius: '15px',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#0066cc';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                <div style={{ color: '#0066cc' }}>{ind.icon}</div>
                                <span style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a' }}>{ind.name}</span>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '18px', color: '#64748b', fontWeight: '500' }}>Every industry has unique search behavior. Our audit frameworks adapt accordingly.</p>
                </div>
            </section>

            {/* When to Audit */}
            <section style={{ padding: '80px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#0f172a' }}>When Should You Get an SEO Audit?</h2>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
                        {whenToAudit.map((item, i) => (
                            <div key={i} style={{
                                padding: '20px 30px',
                                background: '#fff',
                                borderRadius: '12px',
                                border: '1px solid #cbd5e1',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#334155',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <Zap size={20} style={{ color: '#ef4444' }} />
                                {item}
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a' }}>
                            If any of these sound familiar, your website needs immediate evaluation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px', color: '#0f172a' }}>Tools We Use</h2>
                    <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '40px' }}>
                        We combine industry-leading platforms with manual expertise:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
                        {tools.map((tool, i) => (
                            <span key={i} style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                color: '#0f172a',
                                padding: '15px 30px',
                                background: '#f8fafc',
                                borderRadius: '50px',
                                border: '1px solid #e2e8f0'
                            }}>{tool}</span>
                        ))}
                    </div>
                    <p style={{ fontSize: '18px', fontWeight: '600', color: '#0066cc' }}>
                        Data is powerful — but interpretation drives results.
                    </p>
                </div>
            </section>


            {/* Process Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#0f172a' }}>Our Process</h2>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
                        {auditProcess.map((step, i) => (
                            <div key={i} style={{
                                padding: '30px 40px',
                                background: '#fff',
                                borderRadius: '20px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '30px',
                                    background: '#0066cc',
                                    color: '#fff',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '600'
                                }}>{i + 1}</div>
                                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a' }}>{step}</h4>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '18px', color: '#475569', fontStyle: 'italic' }}>
                            At Adkryoss managed by Clink Consultancy Services Private Limited, we collaborate, explain, and guide — not just report.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '24px', color: '#fff' }}>Let’s Diagnose Before You Invest More</h2>
                    <p style={{ fontSize: '22px', marginBottom: '20px', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto' }}>
                        Stop spending on ads while your foundation leaks traffic.
                    </p>
                    <p style={{ fontSize: '22px', marginBottom: '20px', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto' }}>
                        Stop publishing content without structural clarity.
                    </p>
                    <p style={{ fontSize: '22px', marginBottom: '40px', color: '#fff', fontWeight: '600', maxWidth: '800px', margin: '0 auto 40px' }}>
                        Stop guessing. Get a data-backed SEO audit that reveals what's holding your growth back.
                    </p>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#0066cc', color: '#fff', padding: '20px 60px', borderRadius: '50px', fontSize: '20px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                        Book Your SEO Audit Consultation Today <ArrowRight size={24} />
                    </Link>
                    <p style={{ fontSize: '18px', marginTop: '40px', color: '#94a3b8' }}>
                        Your competitors are optimizing daily. The question is — are you?
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SEOAudit;
