import React from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    Shield,
    Zap,
    Layout,
    Link2,
    Settings,
    CheckCircle2,
    ArrowRight,
    FileText,
    BarChart3,
    Activity,
    LineChart,
    PieChart,
    Users,
    MousePointer2,
    Database,
    Binary,
    Globe,
    HelpCircle,
    Building2,
    Heart,
    GraduationCap,
    Utensils,
    Scale,
    ShoppingBag
} from 'lucide-react';

const SEOAudit = () => {
    const auditFramework = [
        {
            title: "1. Technical SEO Audit",
            icon: <Settings size={32} />,
            desc: "Examining your website architecture from the search engine's perspective.",
            points: [
                "Crawlability & indexability analysis",
                "XML sitemap & robots.txt validation",
                "Core Web Vitals & speed diagnostics",
                "Schema & structured data evaluation",
                "Redirect chains & duplicate content checks"
            ]
        },
        {
            title: "2. On-Page & Content Audit",
            icon: <FileText size={32} />,
            desc: "Aligning content with how search engines interpret relevance and authority.",
            points: [
                "Keyword mapping & search intent alignment",
                "Header hierarchy & content depth",
                "Internal linking architecture",
                "Thin, duplicate & outdated content",
                "E-E-A-T signals enhancement"
            ]
        },
        {
            title: "3. Off-Page & Authority Audit",
            icon: <Link2 size={32} />,
            desc: "Mapping authority-building opportunities beyond your website.",
            points: [
                "Backlink quality & toxicity analysis",
                "Domain authority benchmarks",
                "Anchor text distribution review",
                "Competitor link profile comparison",
                "Referring domain health analysis"
            ]
        },
        {
            title: "4. UX & Conversion Audit",
            icon: <MousePointer2 size={32} />,
            desc: "Because traffic without conversion is wasted visibility.",
            points: [
                "Bounce rate pattern analysis",
                "User journey mapping",
                "CTA placement & effectiveness",
                "Page engagement metrics",
                "Conversion funnel gap discovery"
            ]
        }
    ];

    const differentiators = [
        { title: "Action-Priority Roadmap", desc: "We don't just find issues; we tell you exactly what to fix first for maximum impact." },
        { title: "Revenue-Impact Scoring", desc: "Every recommendation is weighted by its potential to drive business growth." },
        { title: "90-Day Plan", desc: "A concrete, month-by-month execution strategy following the audit." },
        { title: "Competitive Benchmarking", desc: "See exactly where you stand against your top 5 digital rivals." }
    ];

    const tools = [
        "Google Search Console", "Google Analytics 4", "Screaming Frog", "Ahrefs", "SEMrush", "PageSpeed Insights", "Hotjar"
    ];

    const industries = [
        { name: "SaaS & Enterprise", icon: <Building2 size={24} />, desc: "Auditing complex architectures and lead generation funnels." },
        { name: "E-commerce & Retail", icon: <ShoppingBag size={24} />, desc: "Identifying issues in faceted nav and product indexing." },
        { name: "Education & EdTech", icon: <GraduationCap size={24} />, desc: "Optimizing course pages and campus-wide visibility." },
        { name: "Legal & Professional", icon: <Scale size={24} />, desc: "Ensuring E-E-A-T compliance for sensitive niches." }
    ];

    const auditProcess = [
        { t: "Discovery", d: "Understanding your business goals and search history." },
        { t: "Full-Site Crawl", d: "Forensic data extraction from every URL." },
        { t: "Competitor Intelligence", d: "Deconstructing the strategies of your search rivals." },
        { t: "Strategic Execution", d: "Compiling raw data into actionable intelligence." },
        { t: "Presentation", d: "Roadmap discussion and implementation guidance." }
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
                        <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-1.5px', color: '#000', lineHeight: '1.1' }}>
                            SEO Audit Services
                        </h1>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px', color: '#000' }}>
                            Uncover. Fix. Outrank.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Your traffic drop isn't random. Your competitors aren't lucky. Growth starts with clarity — and clarity starts with a powerful SEO Audit. We uncover hidden technical issues and authority leaks that silently block your rankings.
                        </p>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', margin: 0 }}>
                                At Adkryoss managed by <span style={{ fontWeight: '800', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we go beyond surface-level checks to deliver a performance blueprint.
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

            {/* Why Matters */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>
                                Why Your Website Needs an Advanced SEO Audit
                            </h2>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                If your website isn't technically sound, strategically structured, and content-optimized, you are leaving revenue on the table.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Identify ranking barriers",
                                    "Fix crawl and indexing issues",
                                    "Improve page speed & Core Web Vitals",
                                    "Enhance user experience signals"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <CheckCircle2 size={24} style={{ color: '#0066cc' }} />
                                        <span style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>Deliverables You Receive:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Comprehensive Technical + Content Report",
                                    "Issue Severity Classification (Critical/High/Low)",
                                    "Keyword Opportunity Matrix",
                                    "Competitor SWOT Snapshot",
                                    "Actionable 90-Day Roadmap"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '16px', color: '#475569', fontWeight: '500' }}>
                                        <BarChart3 size={20} style={{ color: '#0066cc' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>Our Strategic SEO Audit Framework</h2>
                    <p style={{ fontSize: '20px', color: '#64748b', marginBottom: '60px', fontWeight: '600' }}>Data-First. Performance-Driven. Scalable.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                        {auditFramework.map((phase, i) => (
                            <div key={i} style={{
                                width: 'calc(25% - 30px)',
                                minWidth: '320px',
                                background: '#fff',
                                padding: '50px 40px',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                textAlign: 'left',
                                transition: 'all 0.3s',
                                flexGrow: 1,
                                maxWidth: '380px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '24px' }}>{phase.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>{phase.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '30px', lineHeight: '1.6' }}>{phase.desc}</p>
                                <ul className="space-y-6">
                                    {phase.points.map((pt, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                                            <div style={{ width: '8px', height: '8px', background: '#0066cc', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Our Process Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>Our SEO Audit Process</h2>
                        <p style={{ fontSize: '20px', color: '#64748b' }}>From data extraction to strategic roadmap.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {auditProcess.map((step, i) => (
                            <div key={i} style={{ padding: '40px', background: '#f8fafc', borderRadius: '30px', border: '1px solid #e2e8f0', transition: 'all 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0066cc'}>
                                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0066cc', marginBottom: '15px' }}>{step.t}</h4>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#fff' }}>What Makes Our SEO Audit Different</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {differentiators.map((diff, i) => (
                            <div key={i} style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px' }}>
                                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#60a5fa', marginBottom: '12px' }}>{diff.title}</h4>
                                <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6' }}>{diff.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries we audit */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>Industries We Audit</h2>
                    <p style={{ fontSize: '20px', color: '#64748b', marginBottom: '60px' }}>Tailored audits for specific business goals.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {industries.map((ind, i) => (
                            <div key={i} style={{ padding: '40px', background: '#f8fafc', borderRadius: '30px', border: '1px solid #e2e8f0', textAlign: 'left', transition: 'all 0.3s' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#0066cc';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{ind.icon}</div>
                                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>{ind.name}</h4>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section style={{ padding: '60px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container text-center">
                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#64748b', marginBottom: '40px', letterSpacing: '2px', textTransform: 'uppercase' }}>Expert-Level Tool Stack</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                        {tools.map((tool, i) => (
                            <span key={i} style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', opacity: 0.6 }}>{tool}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px' }}>Ready to Scale Your Rankings?</h2>
                    <p style={{ fontSize: '22px', marginBottom: '40px', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 40px' }}>
                        Stop guessing why your traffic is stagnant. Get a data-backed SEO audit that reveals what's holding your growth back.
                    </p>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#0066cc', color: '#fff', padding: '20px 60px', borderRadius: '50px', fontSize: '20px', fontWeight: '800', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                        Book Your SEO Audit Today <ArrowRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SEOAudit;
