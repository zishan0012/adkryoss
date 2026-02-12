import React from 'react';
import { Link } from 'react-router-dom';
import {
    Users,
    Shield,
    Zap,
    BarChart3,
    Cog,
    CheckCircle2,
    Globe,
    ArrowRight,
    Search,
    Settings,
    FileText,
    Link2,
    MapPin,
    Cpu,
    TrendingUp,
    Briefcase
} from 'lucide-react';

const WhiteLabelSEOServices = () => {
    const framework = [
        {
            icon: <Search size={32} />,
            title: "Strategic SEO Audit & Opportunity Mapping",
            points: ["Technical health analysis", "Competitor benchmarking", "Keyword opportunity clusters", "SERP intent mapping", "Content gap analysis", "Authority profiling"]
        },
        {
            icon: <Zap size={32} />,
            title: "Advanced Keyword & Intent Strategy",
            points: ["Search intent clusters", "Semantic SEO", "Topic authority building", "Entity optimization", "Conversational and AI search readiness"]
        },
        {
            icon: <Settings size={32} />,
            title: "Technical SEO Optimization",
            points: ["Core Web Vitals", "Crawlability & Indexation", "Structured Data (Schema)", "Mobile-first performance", "URL structures", "Server log analysis"]
        },
        {
            icon: <FileText size={32} />,
            title: "On-Page & Content Optimization",
            points: ["SEO-optimized landing pages", "Conversion-focused content", "Content silos & clusters", "E-E-A-T alignment", "Internal linking architecture"]
        },
        {
            icon: <Link2 size={32} />,
            title: "Ethical & Authority Link Building",
            points: ["Niche authority outreach", "Editorial placements", "Digital PR-driven mentions", "Contextual backlinks", "Anchor text strategy"]
        },
        {
            icon: <MapPin size={32} />,
            title: "Local SEO & Multi-Location",
            points: ["Google Business Profile", "Local citation building", "Location page strategy", "Reputation signals", "Hyperlocal keyword mapping"]
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Transparent White Label Reporting",
            points: ["Branded SEO reports", "Keyword ranking dashboards", "Traffic growth tracking", "Conversion metrics", "Backlink acquisition reports"]
        }
    ];

    const audiences = [
        "Digital Marketing Agencies",
        "Web Development Companies",
        "Branding Agencies",
        "Performance Marketing Firms",
        "Freelance Consultants",
        "SaaS Growth Teams"
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
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10">
                        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1px', color: '#000' }}>
                            White Label SEO Services
                        </h1>
                        <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                            Scale Faster. Deliver Better. Grow Without Hiring.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span> delivers fully managed White Label SEO solutions for agencies and consultants who want to scale revenue without operational complexity.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <CheckCircle2 size={20} style={{ color: '#000' }} /> <span style={{ color: '#fff' }}>100% Confidential</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <CheckCircle2 size={20} style={{ color: '#000' }} /> <span style={{ color: '#fff' }}>Scalable Models</span>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/11/white-Label-seo-services.webp"
                            alt="White Label SEO"
                            style={{
                                maxWidth: '450px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '24px', color: '#1a1a1a' }}>
                                Why Choose White Label SEO?
                            </h2>
                            <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px', fontSize: '17px' }}>
                                Building a skilled in-house SEO team requires senior strategists, technical experts, and content teams. That's expensive and slow.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Expand service offerings instantly",
                                    "Deliver enterprise-grade SEO under your brand",
                                    "Increase profit margins",
                                    "Reduce operational overhead",
                                    "Focus on client acquisition"
                                ].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        gap: '12px',
                                        marginBottom: '18px',
                                        fontWeight: '500',
                                        color: '#333',
                                        fontSize: '16px',
                                        transition: 'transform 0.3s'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                                        <Shield size={20} style={{ color: '#0066CC', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{
                            background: '#fff',
                            padding: '50px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                            border: '1px solid #eee',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.4' }}>
                                We handle execution.<br />
                                <span style={{ color: '#0066CC', fontSize: '32px' }}>You own the client.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#1a1a1a' }}>
                        Our White Label SEO Framework
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        {framework.map((step, i) => (
                            <div key={i} style={{
                                padding: '40px',
                                border: '1px solid #eee',
                                borderRadius: '20px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                background: '#fff',
                                width: 'calc(33.333% - 20px)',
                                minWidth: '320px',
                                flexGrow: 1,
                                maxWidth: '400px',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.12)';
                                    e.currentTarget.style.borderColor = '#0066CC';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#eee';
                                }}>
                                <div style={{ color: '#0066CC', marginBottom: '20px' }}>{step.icon}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '20px', color: '#1a1a1a' }}>{step.title}</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {step.points.map((pt, idx) => (
                                        <li key={idx} style={{ fontSize: '15px', color: '#555', marginBottom: '20px', display: 'flex', gap: '10px', lineHeight: '1.5' }}>
                                            <div style={{ width: '6px', height: '6px', background: '#0066CC', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section style={{ padding: '80px 0', backgroundColor: '#111', color: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '50px', color: '#fff' }}>Who We Work With</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                        {audiences.map((aud, i) => (
                            <div key={i} style={{
                                padding: '15px 35px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '50px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'all 0.3s',
                                fontWeight: '500'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#0066CC';
                                    e.currentTarget.style.borderColor = '#0066CC';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}>
                                {aud}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#1a1a1a' }}>Why Partner with Adkryoss?</h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        {[
                            { title: "Strategic, Not Just Executional", desc: "We think like growth consultants — not task executors." },
                            { title: "Algorithm-Aware & AI-Ready", desc: "Aligning with SGE trends, AI search, and semantic indexing." },
                            { title: "Dedicated Account Managers", desc: "Dedicated strategist to streamline communication." },
                            { title: "100% Confidentiality", desc: "Strict NDA-backed operations. Complete brand invisibility." }
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: '40px',
                                background: '#f8f9fa',
                                borderRadius: '20px',
                                border: '1px solid transparent',
                                width: 'calc(25% - 23px)',
                                minWidth: '260px',
                                flexGrow: 1,
                                maxWidth: '350px',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#fff';
                                    e.currentTarget.style.borderColor = '#0066CC';
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#f8f9fa';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>{item.title}</h3>
                                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '100px 0',
                background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                color: '#fff',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '24px', color: '#fff' }}>
                        Ready to Scale Without Expanding Your Team?
                    </h2>
                    <p style={{ fontSize: '20px', marginBottom: '40px', color: '#fff', opacity: 1, fontWeight: '500' }}>
                        Partner with Adkryoss managed by Clink Consultancy Services pvt.ltd and transform your agency into a scalable digital powerhouse.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#fff',
                        color: '#0066CC',
                        padding: '20px 50px',
                        borderRadius: '12px',
                        fontSize: '18px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.3s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                        Become a Partner
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WhiteLabelSEOServices;
