import React from 'react';
import {
    Search,
    Zap,
    Target,
    ArrowRight,
    Cpu,
    CheckCircle2,
    TrendingUp,
    Sparkles,
    BrainCircuit,
    ShoppingCart,
    Heart,
    GraduationCap,
    Home,
    DollarSign
} from 'lucide-react';

const AgenticAISEO = () => {
    const agenticFramework = [
        {
            title: "1. AI-Driven Discovery",
            icon: <Search size={32} />,
            desc: "Discovery and opportunity mapping via intelligent agents.",
            points: [
                "Search intent cluster analysis",
                "High-impact semantic gap identification",
                "Competitor AI visibility mapping",
                "Algorithmic volatility detection"
            ]
        },
        {
            title: "2. Predictive Modeling",
            icon: <Target size={32} />,
            desc: "Modeling search behavior instead of just chasing keywords.",
            points: [
                "Emerging query identification",
                "Topical authority mapping",
                "Conversational & generative search optimization",
                "AI Overviews & snippet structuring"
            ]
        },
        {
            title: "3. Autonomous Technical SEO",
            icon: <Cpu size={32} />,
            desc: "Self-healing technical SEO monitoring and optimization.",
            points: [
                "Crawl inefficiency detection",
                "Auto-Core Web Vitals improvements",
                "Indexing anomaly identification",
                "Dynamic structured data optimization"
            ]
        },
        {
            title: "4. AI Content Engineering",
            icon: <Sparkles size={32} />,
            desc: "Augmented content that satisfies both users and algorithms.",
            points: [
                "Semantic NLP analysis",
                "Topic depth scoring",
                "AI readability & engagement optimization",
                "Internal linking automation"
            ]
        },
        {
            title: "5. Performance Scaling",
            icon: <TrendingUp size={32} />,
            desc: "Continuous learning and automatic strategy recalibration.",
            points: [
                "Ranking fluctuation monitoring",
                "User behavior signal tracking",
                "Conversion pathway analysis",
                "ROI-focused strategy recalibration"
            ]
        }
    ];

    const agenticServices = [
        "AI-Powered SEO Strategy",
        "Predictive Topic Clustering",
        "Generative Search Optimization",
        "Technical SEO Automation",
        "AI-Based Content Optimization",
        "Entity & Schema Engineering",
        "SERP Feature Optimization",
        "Conversational Search SEO",
        "Data-Driven Link Building",
        "Enterprise SEO Frameworks"
    ];

    const industriesEmpowered = [
        { name: "E-Commerce & D2C", icon: <ShoppingCart size={18} /> },
        { name: "Healthcare & MedTech", icon: <Heart size={18} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={18} /> },
        { name: "Real Estate", icon: <Home size={18} /> },
        { name: "BFSI & FinTech", icon: <DollarSign size={18} /> },
        { name: "SaaS & Tech", icon: <Cpu size={18} /> },
        { name: "Growth Startups", icon: <Zap size={18} /> }
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
                            Agentic AI SEO Services
                        </h1>
                        <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                            Smarter Search. Autonomous Growth.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Search is evolving from keywords to intelligence. We build AI-driven SEO systems that don’t just optimize pages — they think, learn, and adapt in real time to dominate modern search ecosystems.
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
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we combine deep SEO expertise with advanced AI frameworks to create performance-driven growth engines.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Agentic-AI-SEO.webp"
                            alt="Agentic AI SEO Services"
                            style={{
                                maxWidth: '500px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* What is Agentic SEO Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            What is Agentic AI SEO?
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666', maxWidth: '850px', margin: '0 auto' }}>
                            Agentic AI SEO is the next evolution of search optimization — powered by autonomous AI agents that continuously analyze data and execute improvements without constant manual intervention.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div style={{ background: '#f8f9fa', padding: '50px', borderRadius: '40px', border: '1px solid #eee' }}>
                            <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.8', marginBottom: '24px' }}>
                                Unlike traditional SEO that reacts to algorithm updates, Agentic AI anticipates shifts and adapts strategies instantly to scale performance intelligently.
                            </p>
                            <p style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: '500', lineHeight: '1.8' }}>
                                At Adkryoss managed by Clink Consultancy Services Private Limited, we build self-learning systems that transform your website into an organic growth machine.
                            </p>
                        </div>
                        <div style={{ background: '#0f172a', padding: '50px', borderRadius: '40px', color: '#fff' }}>
                            <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '30px', color: '#fff' }}>Traditional vs Agentic SEO</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Traditional:", v: "Manual audits & reactive strategies" },
                                    { t: "Agentic:", v: "Autonomous optimization & predictive modeling" },
                                    { t: "Agentic:", v: "Continuous technical fixes & real-time intelligence" },
                                    { t: "Agentic:", v: "Multi-platform visibility (Search, AI, Voice)" }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div className="bg-blue-500 rounded-full p-1 mt-1"><CheckCircle2 size={14} color="#fff" /></div>
                                        <div>
                                            <span style={{ fontWeight: '600', color: '#3b82f6', marginRight: '8px' }}>{item.t}</span>
                                            <span style={{ fontSize: '15px' }}>{item.v}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            Our Agentic AI SEO Framework
                        </h2>
                        <p style={{ fontSize: '18px', color: '#666' }}>
                            A structured yet adaptive methodology designed for performance and long-term authority.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {agenticFramework.map((item, i) => (
                            <div key={i} style={{
                                flex: '1 1 350px',
                                maxWidth: '380px',
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '30px' }}>Our Agentic AI SEO Services</h2>
                            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                                We don't just use AI tools; we build intelligent SEO ecosystems that evolve with search engine expectations.
                            </p>
                            <div className="grid grid-cols-2 gap-y-4">
                                {agenticServices.map((service, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <div className="bg-blue-100 p-1 rounded-full"><ArrowRight size={14} className="text-blue-600" /></div>
                                        <span style={{ fontWeight: '500', color: '#1e293b' }}>{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#0f172a', padding: '60px', borderRadius: '40px', color: '#fff' }}>
                            <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '30px' }}>The Hybrid Advantage</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Strategic Oversight", d: "Human expertise guiding AI execution." },
                                    { t: "Deep Data Science", d: "Search psychology combined with algorithm data." },
                                    { t: "Scale + Creativity", d: "Autonomous scale with creative brand storytelling." },
                                    { t: "Technical Precision", d: "Error-free technical maintenance at any scale." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontWeight: '600', color: '#3b82f6', marginBottom: '4px' }}>{item.t}</h4>
                                        <p style={{ color: '#e2e8f0', fontSize: '15px' }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Industries We Empower</h2>
                        <p style={{ fontSize: '18px', color: '#666' }}>Every industry requires intelligent visibility — and we build it strategically.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                        {industriesEmpowered.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '15px 25px', borderRadius: '12px', border: '1px solid #e2e8f0', fontWeight: '500', color: '#1e293b' }}>
                                <span className="text-blue-500">{item.icon}</span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Future Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div style={{ background: '#0f172a', padding: '60px', borderRadius: '40px', border: '1px solid #eee' }}>
                            <BrainCircuit size={48} className="text-blue-400 mb-6" />
                            <h3 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>The Future is Autonomous</h3>
                            <p style={{ fontSize: '18px', color: '#e2e8f0', lineHeight: '1.8' }}>
                                Search engines are integrating AI at their core. Brands that rely on manual SEO will struggle to scale. Adkryoss managed by Clink Consultancy Services Private Limited helps you transition to a system that learns faster, executes smarter, and delivers ROI predictably.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '30px' }}>Lead the AI Search Revolution</h2>
                            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', marginBottom: '32px' }}>
                                The next era of SEO isn’t about ranking pages. It’s about building intelligent digital authority.
                            </p>
                            <div style={{ padding: '30px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '20px', borderLeft: '4px solid #3b82f6' }}>
                                <p style={{ margin: 0, fontWeight: '500', color: '#1a1a1a' }}>"Partner with us to create a self-optimizing search ecosystem that drives consistent organic growth."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Ready to Build Your AI-Driven Advantage?</h2>
                    <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 1, color: '#fff', fontWeight: '500' }}>
                        The future of search is now. Let's build your intelligent growth engine.
                    </p>
                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#0066cc', padding: '18px 40px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Start Your Agentic Strategy <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AgenticAISEO;
