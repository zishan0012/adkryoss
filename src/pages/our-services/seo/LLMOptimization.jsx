import React from 'react';
import { Link } from 'react-router-dom';
import {
    Brain,
    Search,
    Cpu,
    Network,
    MessageSquare,
    Database,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Shield,
    Globe,
    Zap,
    Users,
    Activity,
    FileText,
    Settings,
    Layers,
    Binary,
    Bot,
    BarChart3,
    Microscope,
    Lightbulb
} from 'lucide-react';

const LLMOptimization = () => {
    const approach = [
        {
            title: "1. AI Visibility Audit",
            icon: <Search size={32} />,
            desc: "Analyzing how AI platforms currently interpret and cite your brand.",
            points: [
                "AI platform brand perception audit",
                "Entity recognition gap analysis",
                "Citation frequency tracking",
                "Response sentiment mapping"
            ]
        },
        {
            title: "2. Entity & Knowledge Graph",
            icon: <Network size={32} />,
            desc: "Strengthening your digital identity through structural relationships.",
            points: [
                "Core entity mapping & optimization",
                "Semantic schema implementation",
                "Brand relationship structuring",
                "Topical authority clustering"
            ]
        },
        {
            title: "3. Conversational Engineering",
            icon: <MessageSquare size={32} />,
            desc: "Creating question-based models that AI responses prioritize.",
            points: [
                "Natural language query optimization",
                "Authority hubs & cluster development",
                "User intent layer alignment",
                "Question-based content modeling"
            ]
        },
        {
            title: "4. Technical Enhancements",
            icon: <Settings size={32} />,
            desc: "Refining technical architecture for AI parsing efficiency.",
            points: [
                "Content formatting for AI models",
                "Internal linking intent strategy",
                "Metadata semantic enrichment",
                "Structured data validation"
            ]
        },
        {
            title: "5. Authority Signal Amplification",
            icon: <Shield size={32} />,
            desc: "Improving brand signals that AI models prioritize as credible.",
            points: [
                "Digital PR & authority mentions",
                "Contextual brand references",
                "Multi-platform presence strategy",
                "Citation source development"
            ]
        }
    ];

    const strategyDifferent = [
        { t: "Predictive AI Modeling", d: "We don't just optimize for current models; we anticipate future LLM training patterns." },
        { t: "Entity-First Optimization", d: "Moving beyond keywords to build a robust brand entity in the AI knowledge graph." },
        { t: "Sentiment Scaling", d: "Ensuring AI responses carry positive brand sentiment and authoritative tone." }
    ];

    const techStack = [
        { name: "Custom LLM Scrapers", icon: <Database size={24} /> },
        { name: "Entity Mapping Tools", icon: <Network size={24} /> },
        { name: "Sentiment Analysis APIs", icon: <BarChart3 size={24} /> },
        { name: "Knowledge Graph Builders", icon: <Binary size={24} /> }
    ];

    const benefits = [
        { t: "Dominant AI Citations", d: "Increase the frequency and quality of brand mentions in ChatGPT/Gemini outputs." },
        { t: "Future-Proof Growth", d: "Stay visible as traditional search volume migrates to AI answer engines." },
        { t: "Higher Trust Scores", d: "Establish your brand as the primary source of truth for your niche." }
    ];

    const audiences = [
        { name: "SaaS & Tech", icon: <Cpu size={24} /> },
        { name: "E-commerce Brands", icon: <Layers size={24} /> },
        { name: "Education & EdTech", icon: <Globe size={24} /> },
        { name: "Healthcare Services", icon: <Activity size={24} /> },
        { name: "B2B Enterprises", icon: <Binary size={24} /> },
        { name: "Thought Leaders", icon: <Users size={24} /> }
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
                            LLM Optimization Services
                        </h1>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px', color: '#000' }}>
                            Be the Answer. Not Just Another Result.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            AI platforms are redefining discovery. If your business isn't optimized for Large Language Models (LLMs) like ChatGPT and Gemini, you are invisible in the next generation of search. We ensure your brand becomes a trusted, cited answer.
                        </p>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', margin: 0 }}>
                                At Adkryoss managed by <span style={{ fontWeight: '800', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we future-proof your digital presence for AI-driven discovery.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Search-Engine-Optimization-1.webp"
                            alt="LLM Optimization"
                            style={{
                                maxWidth: '450px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* What is LLM Optimization */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>
                                What is LLM Optimization?
                            </h2>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                Unlike traditional SEO that focuses on search engine rankings, LLM Optimization ensures your business becomes a trusted, contextually relevant answer inside AI-generated responses.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { t: "Semantic SEO", i: <Zap size={20} /> },
                                    { t: "Entity Optimization", i: <Network size={20} /> },
                                    { t: "Knowledge Graphs", i: <Database size={20} /> },
                                    { t: "AI Authority Hubs", i: <Shield size={20} /> }
                                ].map((item, i) => (
                                    <div key={i} style={{ padding: '15px', background: '#f8fafc', borderRadius: '12px', display: 'flex', gap: '10px', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                                        <div style={{ color: '#0066cc' }}>{item.i}</div>
                                        <span style={{ fontWeight: '700', fontSize: '14px', color: '#0f172a' }}>{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '30px', color: '#0f172a' }}>Why It Matters Now:</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Users ask full questions, not keywords", d: "Conversational queries are replacing short phrases." },
                                    { t: "AI summarizes instead of listing links", d: "Being 'cited' is the new 'ranking first'." },
                                    { t: "Brand mentions matter more than backlinks", d: "Co-occurrence in AI training data drives recommendations." },
                                    { t: "Authority and trust signals drive recommendations", d: "AI models prioritize high-E-E-A-T sources for summaries." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ width: '30px', height: '30px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', flexShrink: 0 }}>
                                            <span style={{ fontWeight: '800', color: '#0066cc' }}>{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>{item.t}</h4>
                                            <p style={{ fontSize: '15px', color: '#64748b' }}>{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>Our LLM Optimization Approach</h2>
                        <p style={{ fontSize: '20px', color: '#64748b', fontWeight: '600' }}>Structured. Data-Driven. AI-First.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                        {approach.map((step, i) => (
                            <div key={i} style={{
                                width: 'calc(33.333% - 27px)',
                                minWidth: '350px',
                                background: '#fff',
                                padding: '50px 40px',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s',
                                flexGrow: 1,
                                maxWidth: '380px'
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
                                <div style={{ color: '#0066cc', marginBottom: '24px' }}>{step.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>{step.title}</h3>
                                <p style={{ fontSize: '16px', color: '#475569', marginBottom: '30px', lineHeight: '1.6' }}>{step.desc}</p>
                                <ul className="space-y-6">
                                    {step.points.map((pt, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                                            <CheckCircle2 size={20} style={{ color: '#0066cc', flexShrink: 0, marginTop: '2px' }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators & Technology Stack */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div style={{ background: '#f8fafc', padding: '50px', borderRadius: '40px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <Microscope size={32} style={{ color: '#0066cc' }} />
                                <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>What Makes Our Strategy Different</h3>
                            </div>
                            <div className="space-y-8">
                                {strategyDifferent.map((item, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>{item.t}</h4>
                                        <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '50px', borderRadius: '40px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <Cpu size={32} style={{ color: '#0066cc' }} />
                                <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>Technology & Research Stack</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {techStack.map((item, i) => (
                                    <div key={i} style={{ padding: '25px', background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', textAlign: 'center', transition: 'all 0.3s' }}>
                                        <div style={{ color: '#0066cc', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of LLM Optimization */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>Benefits of LLM Optimization</h2>
                    <p style={{ fontSize: '20px', color: '#64748b', marginBottom: '60px' }}>Future-proofing your brand's presence in the AI era.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                        {benefits.map((item, i) => (
                            <div key={i} style={{ width: 'calc(33.333% - 20px)', minWidth: '300px', padding: '40px', background: '#fff', borderRadius: '30px', border: '1px solid #e2e8f0', textAlign: 'left', transition: 'all 0.3s' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}>
                                <div style={{ background: '#e0f2fe', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                    <CheckCircle2 size={24} style={{ color: '#0066cc' }} />
                                </div>
                                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>{item.t}</h4>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Needs LLM Optimization */}
            <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#fff' }}>Who Needs LLM Optimization?</h2>
                    <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
                        If your audience is asking AI for recommendations, your brand must be optimized for it.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        {audiences.map((aud, i) => (
                            <div key={i} style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                                <div style={{ color: '#60a5fa', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{aud.icon}</div>
                                <h4 style={{ fontSize: '18px', fontWeight: '700' }}>{aud.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ background: '#f8fafc', padding: '80px 40px', borderRadius: '40px', border: '1px solid #e2e8f0' }}>
                        <Bot size={60} style={{ color: '#0066cc', margin: '0 auto 24px' }} />
                        <h2 style={{ fontSize: '48px', fontWeight: '800', color: '#0f172a', marginBottom: '24px' }}>Ready to Become AI-Discoverable?</h2>
                        <p style={{ fontSize: '20px', color: '#64748b', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
                            Search engines are evolving into answer engines. Businesses that adapt now will dominate tomorrow. Let's optimize your presence for the next generation of discovery.
                        </p>
                        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#0066cc', color: '#fff', padding: '20px 60px', borderRadius: '50px', fontSize: '20px', fontWeight: '800', textDecoration: 'none', transition: 'all 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            Future-Proof Your Visibility <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LLMOptimization;
