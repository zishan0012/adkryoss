import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Search,
    Store,
    Smartphone,
    CheckCircle2,
    ArrowRight,
    Star,
    Shield,
    Globe,
    Zap,
    Users,
    Activity,
    FileText,
    Settings,
    Layers,
    Binary,
    MessageCircle,
    Navigation,
    Home,
    Heart,
    GraduationCap,
    Utensils,
    Scale,
    ShoppingBag,
    Building2,
    HelpCircle,
    ChevronDown,
    ChevronUp,
    BarChart3,
    Microscope,
    Lightbulb,
    HomeIcon
} from 'lucide-react';

const LocalSEO = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (i) => {
        setOpenFaq(openFaq === i ? null : i);
    };

    const approach = [
        {
            title: "1. Local & Competitor Intel",
            icon: <Search size={32} />,
            desc: "Identifying exactly where your local competitors are winning.",
            points: [
                "Geo-targeted keyword research",
                "Hyperlocal search intent mapping",
                "Local competitor gap analysis",
                "Map performance benchmarking"
            ]
        },
        {
            title: "2. Profile Optimization (GMB)",
            icon: <Store size={32} />,
            desc: "Optimizing your digital storefront for maximum conversion.",
            points: [
                "Category & service optimization",
                "NAP consistency across web",
                "Geo-tagged image management",
                "Review strategy & response"
            ]
        },
        {
            title: "3. Local Landing Pages",
            icon: <Layers size={32} />,
            desc: "Dedicated location pages built for search and users.",
            points: [
                "City-specific keyword integration",
                "Local schema implementation",
                "Conversion-focused local content",
                "Internal linking for geo-authority"
            ]
        },
        {
            title: "4. Citation Management",
            icon: <FileText size={32} />,
            desc: "Strengthening trust signals through consistent listings.",
            points: [
                "Local business directory listings",
                "High-authority niche citations",
                "NAP correction & duplicate removal",
                "Data aggregator updates"
            ]
        },
        {
            title: "5. Review & Reputation",
            icon: <Star size={32} />,
            desc: "Building the credibility that drives local rankings.",
            points: [
                "Review acquisition strategy",
                "Automated review funnel systems",
                "Sentiment analysis tracking",
                "Negative review mitigation"
            ]
        },
        {
            title: "6. Local Link Building",
            icon: <Navigation size={32} />,
            desc: "Authority + Relevance = Sustainable Local Rankings.",
            points: [
                "Local publication outreach",
                "Regional PR & partnership links",
                "Hyperlocal community mentions",
                "Local media alignment"
            ]
        }
    ];

    const industries = [
        { name: "Healthcare Clinics", icon: <Heart size={24} />, desc: "Managing multiple practices and specialized treatments." },
        { name: "Real Estate Agents", icon: <Home size={24} />, desc: "Dominating local property and neighborhood searches." },
        { name: "Education & EdTech", icon: <GraduationCap size={24} />, desc: "Local visibility for campuses and training centers." },
        { name: "Restaurants & Cafés", icon: <Utensils size={24} />, desc: "Driving table bookings and on-the-go foot traffic." },
        { name: "Legal & Law Firms", icon: <Scale size={24} />, desc: "Establishing local authority for practice areas." },
        { name: "Retail & Franchises", icon: <ShoppingBag size={24} />, desc: "Unified local strategy for national brands." },
        { name: "Multi-location Enterprises ", icon: <Building2 size={24} />, desc: "Mulitple location business." },
        { name: "Home Services  ", icon: <Home size={24} />, desc: "Home services business." },
    ];

    const localSEOProcess = [
        { t: "1. Audit & Discovery", d: "Evaluating your current local presence and map standings." },
        { t: "2. Strategic Roadmap", d: "A 90-day plan focusing on high-ROI local keywords." },
        { t: "3. Profile Dominance", d: "Optimizing every aspect of your Google My Business profile." },
        { t: "4. Authority Growth", d: "Building local citations and high-quality regional links." },
        { t: "5. Periodic Reporting", d: "Monthly tracking of map views, calls, and store visits." }
    ];

    const faqs = [
        { q: "How long does Local SEO take to show results?", a: "Most businesses begin seeing measurable improvement within 8–12 weeks, depending on competition and location density." },
        { q: "Can you help multi-location businesses?", a: "Yes. We implement structured local SEO frameworks for single-location, multi-location, and franchise models to ensure cross-location authority." },
        { q: "Do reviews really impact rankings?", a: "Absolutely. Reviews are a top ranking factor for the Google Local Pack and influence trust signals and click-through rates significantly." },
        { q: "Will Local SEO increase store visits?", a: "Yes. Our strategies are built around conversion-focused local intent searches, leading directly to calls, directions, and foot traffic." }
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
                            Local SEO Optimization
                        </h1>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px', color: '#000' }}>
                            Turning Local Searches into Real Customers
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Today’s customers don’t browse directories—they search on Google. 70%+ of local searches result in a visit or inquiry within 24 hours. If you're not in the Top 3 Map Pack, you're invisible. We help you dominate your geography.
                        </p>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', margin: 0 }}>
                                At Adkryoss managed by <span style={{ fontWeight: '800', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we build local authority that drives foot traffic and inquiries.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Local-SEO.webp"
                            alt="Local SEO"
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>
                                Why Local SEO Matters
                            </h2>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                Customers are searching for your services right now. If your business is not ranking in the Google Local Pack or Maps, you are losing ready-to-buy customers to your competitors.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: "Google Local Pack (Top 3)", d: "Highest conversion area on the SERP." },
                                    { t: "Google Maps Results", d: "Dominating on-the-go searches." },
                                    { t: "Geo-Organic Rankings", d: "Ranking for 'near me' intent queries." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ color: '#0066cc', marginTop: '4px' }}><MapPin size={24} /></div>
                                        <div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>{item.t}</h4>
                                            <p style={{ fontSize: '15px', color: '#64748b' }}>{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>Industries We Dominate:</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {industries.map((ind, i) => (
                                    <div key={i} style={{ padding: '20px', background: '#fff', borderRadius: '15px', display: 'flex', gap: '12px', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                                        <div style={{ color: '#0066cc' }}>{ind.icon}</div>
                                        <span style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a' }}>{ind.name}</span>
                                    </div>
                                ))}
                            </div>
                            {/* <div style={{ marginTop: '30px', padding: '20px', background: '#0066cc', borderRadius: '15px', color: '#fff', textAlign: 'center' }}>
                                <p style={{ fontWeight: '700', margin: 0 }}>Multi-location Enterprises & Franchises Specialists</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>Our Local SEO Approach</h2>
                        <p style={{ fontSize: '20px', color: '#64748b', fontWeight: '600' }}>We don't just optimize listings. We build local authority.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                        {approach.map((pillar, i) => (
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
                                    e.currentTarget.style.borderColor = '#0066cc';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '24px' }}>{pillar.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>{pillar.title}</h3>
                                <p style={{ fontSize: '16px', color: '#475569', marginBottom: '30px', lineHeight: '1.6' }}>{pillar.desc}</p>
                                <ul className="space-y-6">
                                    {pillar.points.map((pt, idx) => (
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

            {/* Our Process Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>Our Local SEO Process</h2>
                        <p style={{ fontSize: '20px', color: '#64748b' }}>A methodical approach to geography-based growth.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {localSEOProcess.map((step, i) => (
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
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#fff' }}>What Makes Our Local SEO Different?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {[
                            { t: "Data-Driven Geo Targeting", d: "Precision mapping of profitable neighborhoods." },
                            { t: "Advanced Schema Implementation", d: "Rich results that drive higher map CTR." },
                            { t: "Multi-Location Frameworks", d: "Unified strategy for businesses with 1 to 100+ stores." },
                            { t: "AI-Assisted Management", d: "Smart analysis of reviews and GMB engagement data." }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#60a5fa', marginBottom: '12px' }}>{item.t}</h4>
                                <p style={{ fontSize: '15px', color: '#cbd5e1' }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>Local SEO Intelligence (FAQs)</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} style={{ marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '15px', overflow: 'hidden' }}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    style={{ width: '100%', padding: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: openFaq === i ? '#f8fafc' : '#fff', transition: 'all 0.3s', border: 'none', cursor: 'pointer' }}
                                >
                                    <span style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', textAlign: 'left' }}>{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openFaq === i && (
                                    <div style={{ padding: '20px 30px', background: '#fff', borderTop: '1px solid #e2e8f0' }}>
                                        <p style={{ margin: 0, color: '#475569', lineHeight: '1.7', fontSize: '16px' }}>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0066cc 0%, #00458a 100%)', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px' }}>Ready to Dominate Local Search?</h2>
                    <p style={{ fontSize: '22px', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', color: '#fff' }}>
                        Your competitors are investing in local visibility. It's time you outrank them. Partner with Adkryoss and turn local searches into real customers.
                    </p>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#fff', color: '#0066cc', padding: '20px 60px', borderRadius: '50px', fontSize: '20px', fontWeight: '800', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                        Start Your Local Strategy Today <ArrowRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LocalSEO;
