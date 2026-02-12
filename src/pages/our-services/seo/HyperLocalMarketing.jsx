import React from 'react';
import {
    MapPin,
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
    Navigation,
    Smartphone,
    TrendingUp,
    Store,
    LocateFixed,
    ShoppingCart,
    Heart,
    Home,
    Utensils,
    GraduationCap,
    DollarSign
} from 'lucide-react';

const HyperLocalMarketing = () => {
    const hyperlocalSolutions = [
        {
            title: "Local SEO Optimization",
            icon: <Search size={32} />,
            desc: "Increase map pack rankings and organic local visibility.",
            points: [
                "Google Business Profile optimization",
                "Local citations & NAP consistency",
                "Geo-tagged content creation",
                "Location-specific landing pages"
            ]
        },
        {
            title: "Google Maps & Listings",
            icon: <Store size={32} />,
            desc: "Ensure your business stands out with accurate and compelling listings.",
            points: [
                "Listing creation & verification",
                "Map ranking optimization",
                "Reputation & review management",
                "Compelling business descriptions"
            ]
        },
        {
            title: "Hyperlocal Paid Advertising",
            icon: <Target size={32} />,
            desc: "Reach users within precise geographic boundaries with radius targeting.",
            points: [
                "Radius-targeted Google Ads",
                "Geo-targeted Meta Ads",
                "Programmatic local campaigns",
                "Proximity-based lead gen"
            ]
        },
        {
            title: "Location-Based Social Media",
            icon: <Navigation size={32} />,
            desc: "Engage neighborhood audiences and promote local offers.",
            points: [
                "Geo-targeted social campaigns",
                "Promote local store offers",
                "Increase in-store visits",
                "Neighborhood audience engagement"
            ]
        },
        {
            title: "Review & Reputation Management",
            icon: <Shield size={32} />,
            desc: "Build and manage local trust to drive conversions and rankings.",
            points: [
                "Strategic review building",
                "Reputation monitoring",
                "Strategic response management",
                "Local credibility enhancement"
            ]
        },
        {
            title: "Multi-Location Strategy",
            icon: <Network size={32} />,
            desc: "Scalable hyperlocal strategies for franchises and multi-outlet brands.",
            points: [
                "Independent location ranking",
                "Maintained brand consistency",
                "Scalable local SEO frameworks",
                "Franchise visibility management"
            ]
        }
    ];

    const targetingIndustries = [
        { name: "Restaurants & Cafés", icon: <Utensils size={18} /> },
        { name: "Healthcare & Hospitals", icon: <Heart size={18} /> },
        { name: "Retail Stores", icon: <ShoppingCart size={18} /> },
        { name: "Educational Institutes", icon: <GraduationCap size={18} /> },
        { name: "Real Estate & Builders", icon: <Home size={18} /> },
        { name: "Salons & Wellness", icon: <Zap size={18} /> },
        { name: "Local Service Providers", icon: <Users size={18} /> }
    ];

    const workingApproach = [
        { step: "01", title: "Geo-Intelligence Audit", desc: "Analyze local visibility and map ranking gaps." },
        { step: "02", title: "Localized Blueprint", desc: "Build a roadmap aligned with business objectives." },
        { step: "03", title: "Precision Execution", desc: "Execute geo-targeted ads and structured data." },
        { step: "04", title: "Continuous Optimization", desc: "Monitor insights and refine for performance." }
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
                            Hyperlocal Marketing Services
                        </h1>
                        <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                            Dominate Your Neighborhood. Be the first choice when your customers search “near me.”
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Turn proximity into profit with data-driven hyperlocal marketing strategies that put your business exactly where buying decisions happen — on local searches, maps, feeds, and mobile screens.
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
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we help businesses capture local intent and drive footfall, calls, and real-time conversions.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Hyperlocal-Marketing.webp"
                            alt="Hyperlocal Marketing Services"
                            style={{
                                maxWidth: '500px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* What is Hyperlocal Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            What is Hyperlocal Marketing?
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666', maxWidth: '850px', margin: '0 auto' }}>
                            Hyperlocal marketing focuses on targeting customers within a highly specific geographic area — a locality, pin code, or neighborhood.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div style={{ background: '#f8f9fa', padding: '50px', borderRadius: '40px', border: '1px solid #eee' }}>
                            <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.8', marginBottom: '24px' }}>
                                In today’s mobile-first world, search queries like “best café near me” or “plumber nearby” are high-intent and conversion-ready.
                            </p>
                            <p style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: '500', lineHeight: '1.8' }}>
                                Adkryoss managed by Clink Consultancy Services Private Limited helps businesses capture this intent by combining location intelligence and local SEO to drive transactions.
                            </p>
                        </div>
                        <div style={{ background: '#0f172a', padding: '50px', borderRadius: '40px', color: '#fff' }}>
                            <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '30px', color: '#fff' }}>Why It Matters Now</h3>
                            <div className="space-y-6">
                                {[
                                    "80%+ of local searches convert within 24h",
                                    "Google prioritizes map listings & local results",
                                    "Mobile users rely heavily on reviews & proximity",
                                    "Competition is shifting to local dominance"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <div className="bg-blue-500 rounded-full p-1"><CheckCircle2 size={16} color="#fff" /></div>
                                        <span style={{ fontSize: '16px', fontWeight: '500' }}>{item}</span>
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
                            Our Hyperlocal Marketing Solutions
                        </h2>
                        <p style={{ fontSize: '18px', color: '#666' }}>
                            Precision strategies designed to put your business exactly where buying decisions happen.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {hyperlocalSolutions.map((item, i) => (
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Differences Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '30px' }}>What Makes Our Strategy Different?</h2>
                            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                                We focus on driving actions — calls, direction requests, walk-ins, and bookings — not just simple impressions.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { t: "Geo Segmentation", d: "Data-backed micro-level geographic targeting." },
                                    { t: "Mobile-First", d: "Campaigns structured for high-intent mobile users." },
                                    { t: "AI Clustering", d: "AI-powered keyword grouping for local intent." },
                                    { t: "Heat Mapping", d: "Advanced competitor visibility heat mapping." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontWeight: '600', color: '#0066cc', marginBottom: '5px' }}>{item.t}</h4>
                                        <p style={{ fontSize: '14px', color: '#666' }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#0f172a', padding: '60px', borderRadius: '40px', color: '#fff' }}>
                            <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '30px' }}>Benefits You'll See</h3>
                            <div className="space-y-6">
                                {[
                                    "Increased physical foot traffic",
                                    "Higher local search organic rankings",
                                    "Better ROI from geo-targeted ads",
                                    "Stronger neighborhood engagement",
                                    "Improved brand trust in locality",
                                    "Faster lead-to-conversion cycle"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <div className="bg-blue-500 rounded-full p-1"><CheckCircle2 size={16} color="#fff" /></div>
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
                        <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Industries We Serve</h2>
                        <p style={{ fontSize: '18px', color: '#666' }}>Hyperlocal marketing bridges the gap between online discovery and offline conversion.</p>
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

            {/* Working Approach Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Our Working Approach</h2>
                        <p style={{ fontSize: '18px', color: '#666' }}>Adkryoss managed by Clink Consultancy Services Private Limited ensures you lead locally.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {workingApproach.map((item, i) => (
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

            {/* Competitive Advantage / Why We? */}
            <section style={{ padding: '100px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '60px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <TrendingUp size={48} className="text-blue-400 mb-6" />
                            <h3 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '20px' }}>Dominating Near-Me Search</h3>
                            <p style={{ fontSize: '18px', color: '#e2e8f0', marginBottom: '30px' }}>If your customers are searching nearby, your business should be visible instantly. Early adoption means:</p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Lower acquisition cost", "Higher community trust", "Hyper-targeted leads", "Instant map visibility"].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <CheckCircle2 size={16} className="text-blue-400" />
                                        <span style={{ fontWeight: '500' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#fff', marginBottom: '30px' }}>Ready to Own Your Local Market?</h2>
                            <p style={{ fontSize: '18px', color: '#e2e8f0', lineHeight: '1.8', marginBottom: '32px' }}>
                                Adkryoss managed by Clink Consultancy Services Private Limited helps you build a hyperlocal growth engine that drives results in your immediate market.
                            </p>
                            <div style={{ padding: '30px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '20px', borderLeft: '4px solid #3b82f6' }}>
                                <p style={{ margin: 0, fontWeight: '500', color: '#fff' }}>"Let’s make your business the most recommended name in your neighborhood."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Dominance Within Miles. Start Now.</h2>
                    <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 1, color: '#fff', fontWeight: '500' }}>
                        Turn proximity into profit. Partner with us and lead your local market.
                    </p>
                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#0066cc', padding: '18px 40px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Start Your Hyperlocal Growth <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HyperLocalMarketing;
