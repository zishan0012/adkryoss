import React from 'react';
import { Link } from 'react-router-dom';
import {
    AlertTriangle,
    Shield,
    Search,
    RefreshCcw,
    Zap,
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Activity,
    Lock,
    Globe,
    FileText,
    Target,
    Users,
    Settings,
    Database,
    LineChart,
    PieChart,
    Cpu,
    HelpCircle
} from 'lucide-react';

const GooglePenaltyRecovery = () => {
    const commonReasons = [
        { title: "Toxic Backlinks", desc: "Spammy or low-quality inbound links.", icon: <AlertTriangle size={24} /> },
        { title: "Unnatural Anchor Text", desc: "Over-optimized keyword patterns.", icon: <Target size={24} /> },
        { title: "AI/Thin Content", desc: "Duplicate or unhelpful AI-spam content.", icon: <FileText size={24} /> },
        { title: "Technical Malpractice", desc: "Cloaking or deceptive redirects.", icon: <Settings size={24} /> },
        { title: "Keyword Stuffing", desc: "Manipulative term frequency.", icon: <Zap size={24} /> },
        { title: "Poor E-E-A-T", desc: "Lacking Experience, Expertise, Authority, Trust.", icon: <Shield size={24} /> }
    ];

    const penaltyTypes = [
        {
            title: "Manual Action Penalty",
            desc: "Applied by human reviewers for guideline violations. Requires structured cleanup and reconsideration request.",
            icon: <Users size={32} />
        },
        {
            title: "Algorithmic Penalty",
            desc: "Triggered by core updates or spam filters. Requires strategic SEO recalibration and quality rebuilding.",
            icon: <Cpu size={32} />
        },
        {
            title: "Link-Based Penalty",
            desc: "Unnatural backlinks affecting trust and authority signals. Requires disavow and toxic link removal.",
            icon: <Activity size={32} />
        },
        {
            title: "Content Quality Penalty",
            desc: "Thin, low-value, or unhelpful content impacting performance. Requires content pruning and consolidation.",
            icon: <FileText size={32} />
        }
    ];

    const phases = [
        {
            title: "Phase 1: Deep Diagnostic Audit",
            desc: "We conduct a 360° forensic SEO audit to identify the exact trigger.",
            points: ["Backlink toxicity analysis", "Anchor text distribution mapping", "Content quality audit", "Technical SEO & E-E-A-T assessment"]
        },
        {
            title: "Phase 2: Toxic Cleanup & Rectification",
            desc: "We systematically repair violations and remove damage.",
            points: ["Link removal outreach", "Disavow file creation", "Content pruning & consolidation", "Technical corrections & UX enhancements"]
        },
        {
            title: "Phase 3: Authority Rebuilding",
            desc: "Recovery is incomplete without rebuilding search trust.",
            points: ["White-hat link acquisition", "Topical authority clustering", "Structured data optimization", "Digital PR integration"]
        },
        {
            title: "Phase 4: Reconsideration & Monitoring",
            desc: "Formal communication with Google and continuous tracking.",
            points: ["Reconsideration request drafting", "Cleanup documentation", "Ranking & update tracking", "Core update pulse monitoring"]
        }
    ];

    const signs = [
        "30%+ sudden organic traffic drop",
        "Keywords disappearing from SERP",
        "Manual action notification in Search Console",
        "Sharp fall after Google Core Update",
        "Traffic drop without technical errors",
        "Backlink spike from unknown sources"
    ];

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#fff',
                padding: '120px 0 80px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', background: '#e11d48', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2 }}></div>
                    <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '300px', height: '300px', background: '#0066cc', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.3 }}></div>
                </div>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '24px' }}>
                            <RefreshCcw size={16} className="text-blue-400" />
                            <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Forensic Search Recovery</span>
                        </div>
                        <h1 style={{ fontSize: '64px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-2px', lineHeight: '1.1' }}>
                            Google Penalty Recovery Services
                        </h1>
                        <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#0066cc' }}>
                            Recover Rankings. Restore Authority. Rebuild Growth.
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
                            When organic traffic drops overnight, revenue follows. A Google penalty can severely damage your visibility, but it's not the end. We diagnose, repair, and engineer long-term search resilience.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <a href="#audit" style={{ padding: '15px 40px', background: '#0066cc', color: '#fff', borderRadius: '50px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                Request Forensic Audit
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Message */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>
                                We Don't Just Remove Penalties. We Rebuild Your DNA.
                            </h2>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                Google's ecosystem evolves constantly. Updates like SpamCore, Helpful Content, and Core Algorithm changes are designed to reward quality. If you've been hit, it's a signal that your SEO foundation needs more than just a quick fix.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', fontWeight: '600', color: '#0066cc' }}>
                                At Adkryoss managed by Clink Consultancy Services Private Limited, we rebuild your SEO foundation stronger than before.
                            </p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>Why Penalties Happen:</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {commonReasons.map((reason, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ color: '#0066cc' }}>{reason.icon}</div>
                                        <div>
                                            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>{reason.title}</h4>
                                            <p style={{ fontSize: '13px', color: '#64748b' }}>{reason.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Penalty Types Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>
                        Types of Google Penalties We Handle
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                        {penaltyTypes.map((type, i) => (
                            <div key={i} style={{
                                width: 'calc(50% - 15px)',
                                minWidth: '320px',
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '24px' }}>{type.icon}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', color: '#0f172a' }}>{type.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7' }}>{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section id="audit" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>
                            Our Google Penalty Recovery Framework
                        </h2>
                        <p style={{ fontSize: '20px', color: '#64748b', fontWeight: '600' }}>Strategic. Data-Led. Transparent. Sustainable.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                        {phases.map((phase, i) => (
                            <div key={i} style={{
                                width: 'calc(25% - 23px)',
                                minWidth: '280px',
                                background: '#f8fafc',
                                padding: '30px',
                                borderRadius: '20px',
                                border: '1px solid #e2e8f0',
                                flexGrow: 1,
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#0066cc';
                                    e.currentTarget.style.background = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.background = '#f8fafc';
                                }}>
                                <span style={{ fontSize: '14px', fontWeight: '800', color: '#0066cc', marginBottom: '16px', display: 'block' }}>0{i + 1}</span>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px', color: '#0f172a' }}>{phase.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', marginBottom: '20px', lineHeight: '1.6' }}>{phase.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {phase.points.map((pt, idx) => (
                                        <li key={idx} style={{ fontSize: '14px', color: '#64748b', marginBottom: '10px', display: 'flex', gap: '8px' }}>
                                            <CheckCircle2 size={16} style={{ color: '#0066cc', flexShrink: 0 }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Signs You Need Recovery */}
            <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '30px' }}>
                                Signs You Need Immediate Penalty Recovery
                            </h2>
                            <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '30px' }}>
                                If your organic traffic vanishes or keywords disappear from the SERP, every day you wait is a day of lost revenue.
                            </p>
                            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#60a5fa', fontWeight: '700', textDecoration: 'none', fontSize: '18px' }}>
                                Get a Free Analysis <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {signs.map((sign, i) => (
                                <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '15px' }}>
                                    <AlertTriangle size={24} style={{ color: '#f59e0b', marginBottom: '15px' }} />
                                    <p style={{ fontSize: '16px', fontWeight: '700', color: '#fff', margin: 0 }}>{sign}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Working Approach Comparison */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '60px', color: '#0f172a' }}>
                        What Makes Our Recovery Approach Different?
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                        {[
                            "AI-driven SERP evolution analysis",
                            "Entity-based SEO cleanup",
                            "Search intent mapping",
                            "Semantic optimization",
                            "Core Web Vitals compliance",
                            "E-E-A-T reinforcement"
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '15px 30px', background: '#f8fafc', borderRadius: '50px', border: '1px solid #e2e8f0', fontWeight: '700', color: '#0f172a' }}>
                                ✔ {item}
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: '50px', fontSize: '20px', color: '#64748b', maxWidth: '900px', margin: '50px auto 0' }}>
                        Adkryoss managed by Clink Consultancy Services Private Limited doesn't just fix penalties temporarily. We build <strong>algorithm-proof digital ecosystems</strong>.
                    </p>
                </div>
            </section>

            {/* Expected Timeline */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '50px', color: '#0f172a' }}>Recovery Timeline</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div style={{ padding: '40px', background: '#fff', borderRadius: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0066cc', marginBottom: '15px' }}>Minor Algorithmic Issue</h3>
                            <p style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>4–8 Weeks</p>
                            <p style={{ color: '#64748b' }}>Focused cleanup and quality improvement.</p>
                        </div>
                        <div style={{ padding: '40px', background: '#fff', borderRadius: '24px', border: '2px solid #0066cc' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0066cc', marginBottom: '15px' }}>Manual Action</h3>
                            <p style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>2–4 Months</p>
                            <p style={{ color: '#64748b' }}>Outreach, cleanup, and reconsideration process.</p>
                        </div>
                        <div style={{ padding: '40px', background: '#fff', borderRadius: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0066cc', marginBottom: '15px' }}>Severe Link Penalty</h3>
                            <p style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>3–6 Months</p>
                            <p style={{ color: '#64748b' }}>Extensive forensic link audit and authority rebuilding.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>Recovery Intelligence (FAQs)</h2>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {[
                            { q: "How do I know if I've been penalized?", a: "Check Google Search Console for 'Manual Actions' and analyze traffic drop patterns aligned with known algorithm updates." },
                            { q: "Can you guarantee recovery?", a: "Ethical SEO cannot promise instant restoration, but a structured forensic cleanup significantly improves recovery probability and search trust." },
                            { q: "Will rankings return to previous levels?", a: "With correct authority rebuilding and compliance, many sites regain and eventually exceed their past performance." },
                            { q: "Should I disavow all backlinks?", a: "No. Only toxic, manipulative, or paid links should be disavowed after a careful forensic link audit." }
                        ].map((faq, i) => (
                            <div key={i} style={{ marginBottom: '24px', padding: '30px', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '10px', display: 'flex', gap: '10px' }}>
                                    <HelpCircle size={20} className="text-blue-500" /> {faq.q}
                                </h3>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '24px' }}>
                        Ready to Take Control of Your Rankings?
                    </h2>
                    <p style={{ fontSize: '22px', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', color: '#eff6ff' }}>
                        A penalty is a setback — not a failure. The faster you respond, the stronger your recovery. Request a comprehensive penalty audit today.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#0066cc',
                        color: '#fff',
                        padding: '20px 60px',
                        borderRadius: '50px',
                        fontSize: '20px',
                        fontWeight: '800',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                        Start Your Recovery Now
                        <ArrowRight size={22} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GooglePenaltyRecovery;
