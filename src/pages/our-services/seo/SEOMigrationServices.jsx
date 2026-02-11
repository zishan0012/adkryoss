import React from 'react';
import { Link } from 'react-router-dom';
import {
    Shield,
    Zap,
    ArrowRight,
    Search,
    Layout,
    Link2,
    Settings,
    Rocket,
    BarChart3,
    RefreshCcw,
    Globe,
    Server,
    Smartphone,
    ShoppingCart,
    Building2,
    CheckCircle2,
    AlertTriangle,
    Activity,
    Users
} from 'lucide-react';

const SEOMigrationServices = () => {
    const migrationSteps = [
        {
            icon: <Search size={32} />,
            title: "Pre-Migration SEO Audit & Strategy Blueprint",
            points: [
                "Complete URL inventory & performance mapping",
                "Backlink analysis & equity preservation strategy",
                "Traffic & keyword benchmarking",
                "Crawl diagnostics & technical health audit",
                "Risk assessment & migration roadmap"
            ]
        },
        {
            icon: <Layout size={32} />,
            title: "SEO-Safe Architecture Planning",
            points: [
                "URL restructuring strategy",
                "Internal linking preservation",
                "Canonical mapping",
                "XML sitemap planning",
                "Robots.txt validation",
                "Structured data planning"
            ]
        },
        {
            icon: <Link2 size={32} />,
            title: "Redirect Mapping & Equity Transfer",
            points: [
                "Preserve link authority",
                "Prevent traffic leakage",
                "Maintain keyword rankings",
                "Eliminate redirect chains",
                "Protect high-performing pages"
            ]
        },
        {
            icon: <Settings size={32} />,
            title: "Technical SEO Implementation",
            points: [
                "Page speed & Core Web Vitals",
                "Mobile-first indexing readiness",
                "HTTPS configuration",
                "JavaScript SEO validation",
                "Server log analysis",
                "Schema & structured data migration"
            ]
        },
        {
            icon: <Rocket size={32} />,
            title: "Controlled Launch & Live Monitoring",
            points: [
                "Indexation behavior",
                "Crawl errors",
                "Redirect validations",
                "Keyword movement",
                "Traffic fluctuations"
            ]
        },
        {
            icon: <Activity size={32} />,
            title: "Post-Migration Performance Stabilization",
            points: [
                "Keyword recovery tracking",
                "Authority rebuilding strategy",
                "Technical refinement",
                "Conversion optimization alignment",
                "Ongoing SEO enhancements"
            ]
        }
    ];

    const migrationTypes = [
        { icon: <Layout size={24} />, name: "Website Redesign Migration" },
        { icon: <Globe size={24} />, name: "Domain Change Migration" },
        { icon: <Shield size={24} />, name: "HTTP to HTTPS Migration" },
        { icon: <Settings size={24} />, name: "CMS Migration (WordPress, Shopify, etc.)" },
        { icon: <Server size={24} />, name: "Server Migration" },
        { icon: <Globe size={24} />, name: "International / Multi-Language Migration" },
        { icon: <ShoppingCart size={24} />, name: "E-commerce SEO Migration" },
        { icon: <Building2 size={24} />, name: "Enterprise-Level Platform Migration" }
    ];

    const differentiators = [
        {
            title: "Performance-Led Execution",
            description: "Every decision is backed by search data, not assumptions."
        },
        {
            title: "Cross-Functional Expertise",
            description: "SEO strategists + technical developers + analytics experts work together."
        },
        {
            title: "Zero-Drop Philosophy",
            description: "Our mission: maintain or improve traffic within 90 days post-migration."
        },
        {
            title: "Enterprise-Grade Tools",
            description: "Advanced crawling tools and log analyzers for accuracy."
        }
    ];

    return (
        <div style={{ backgroundColor: '#fff' }}>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #2D3436 0%, #000000 100%)',
                color: '#fff',
                padding: '100px 0 80px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px', color: '#fff' }}>
                            SEO Migration Services
                        </h1>
                        <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#0066CC' }}>
                            Safeguard Rankings. Preserve Traffic. Accelerate Growth.
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '30px' }}>
                            When websites evolve, rankings shouldn't collapse. Redesigns, domain changes, platform shifts, or international expansion — every structural change impacts visibility.
                        </p>
                        <div style={{
                            background: 'rgba(255,255,255,0.12)',
                            padding: '30px',
                            borderRadius: '15px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', margin: 0, color: '#fff' }}>
                                Adkryoss managed by Clink Consultancy Services pvt.ltd delivers precision-driven SEO Migration Services that protect your organic equity while unlocking future scalability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>
                        Why SEO Migration Is High-Risk Without Strategy
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '40px'
                    }}>
                        {[
                            "Broken redirects & crawl errors",
                            "Loss of backlink equity",
                            "Indexation issues",
                            "Keyword cannibalization",
                            "Drop in domain authority",
                            "Traffic and revenue decline"
                        ].map((risk, i) => (
                            <div key={i} style={{
                                padding: '24px',
                                background: '#FFF5F5',
                                borderRadius: '12px',
                                borderLeft: '5px solid #F87171',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                width: 'calc(33.333% - 14px)',
                                minWidth: '280px',
                                flexGrow: 1,
                                maxWidth: '380px',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(248,113,113,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <AlertTriangle size={20} style={{ color: '#F87171' }} />
                                <span style={{ fontWeight: '600', color: '#B91C1C' }}>{risk}</span>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '20px', fontWeight: '700', color: '#0066CC' }}>
                        We don't just "move" your website. We engineer a seamless search transition.
                    </p>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', textAlign: 'center', marginBottom: '60px' }}>
                        Our SEO Migration Framework
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        {migrationSteps.map((step, index) => (
                            <div key={index} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '20px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                border: '1px solid #eee',
                                width: 'calc(33.333% - 20px)',
                                minWidth: '320px',
                                flexGrow: 1,
                                maxWidth: '400px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.15)';
                                    e.currentTarget.style.borderColor = '#0066CC';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                                    e.currentTarget.style.borderColor = '#eee';
                                }}>
                                <div style={{ color: '#0066CC', marginBottom: '20px' }}>{step.icon}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a' }}>
                                    {index + 1}. {step.title}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {step.points.map((pt, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            gap: '10px',
                                            marginBottom: '12px',
                                            color: '#555',
                                            fontSize: '15px'
                                        }}>
                                            <CheckCircle2 size={18} style={{ color: '#0066CC', flexShrink: 0, marginTop: '3px' }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Types */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '50px' }}>
                        Types of SEO Migration We Handle
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px'
                    }}>
                        {migrationTypes.map((type, i) => (
                            <div key={i} style={{
                                padding: '24px',
                                background: '#f8f9fa',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                transition: 'all 0.3s',
                                width: 'calc(25% - 15px)',
                                minWidth: '250px',
                                flexGrow: 1,
                                maxWidth: '300px',
                                cursor: 'pointer',
                                border: '1px solid transparent'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#fff';
                                    e.currentTarget.style.borderColor = '#0066CC';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,102,204,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#f8f9fa';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ color: '#0066CC' }}>{type.icon}</div>
                                <span style={{ fontWeight: '700', color: '#1a1a1a' }}>{type.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Different Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#0066CC', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#fff' }}>
                        What Makes Us Different?
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        {differentiators.map((diff, i) => (
                            <div key={i} style={{
                                padding: '30px',
                                background: 'rgba(255,255,255,0.12)',
                                borderRadius: '15px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                                width: 'calc(25% - 23px)',
                                minWidth: '260px',
                                flexGrow: 1,
                                maxWidth: '350px',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                                }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#fff' }}>{diff.title}</h3>
                                <p style={{ color: '#fff', opacity: 1, lineHeight: '1.6', fontSize: '15px' }}>{diff.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '24px', color: '#1a1a1a' }}>
                        Let's Migrate Without Losing Momentum
                    </h2>
                    <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
                        Your website growth shouldn't reset to zero. Partner with Adkryoss and transform your migration into a scalable search growth opportunity.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#0066CC',
                        color: '#fff',
                        padding: '18px 45px',
                        borderRadius: '10px',
                        fontSize: '18px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.3s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,102,204,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                        Start Your Migration Safely
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SEOMigrationServices;
