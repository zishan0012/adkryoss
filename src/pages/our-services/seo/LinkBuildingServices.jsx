import React from 'react';
import {
    Link2,
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
    FileText,
    MessageSquare,
    Trash2,
    TrendingUp,
    Briefcase,
    ShoppingCart,
    GraduationCap,
    Heart,
    Home,
    DollarSign
} from 'lucide-react';

const LinkBuildingServices = () => {
    const linkFramework = [
        {
            title: "1. Authority & Competitor Gap Analysis",
            icon: <Database size={32} />,
            desc: "We conduct in-depth backlink audits to identify opportunities and risks.",
            points: [
                "Domain authority gaps",
                "Toxic link risks",
                "Competitor backlink sources",
                "Anchor text distribution imbalance"
            ],
            extra: "This ensures your link profile grows strategically—not randomly."
        },
        {
            title: "2. Editorial Outreach & Digital PR",
            icon: <Users size={32} />,
            desc: "We secure placements on industry-relevant and high-authority publications.",
            points: [
                "Industry-relevant blogs",
                "High-authority publications",
                "Trusted news portals",
                "Niche-specific websites"
            ],
            extra: "Through relationship-driven outreach, we earn contextual backlinks that boost trust and traffic."
        },
        {
            title: "3. Content-Led Link Acquisition",
            icon: <FileText size={32} />,
            desc: "Links are earned through value. We create assets that naturally attract authoritative links.",
            points: [
                "Data-driven articles",
                "Insightful guest contributions",
                "Thought leadership pieces",
                "Resource-based content assets"
            ],
            extra: "We integrate SEO-driven content marketing to naturally attract high-value links."
        }
    ];

    const additionalFramework = [
        {
            title: "4. High-Quality Guest Posting",
            icon: <Briefcase size={32} />,
            desc: "Strategic guest blogging on niche-relevant domains to enhance authority and rankings.",
            points: [
                "Brand authority enhancement",
                "Organic keyword rankings boost",
                "Referral traffic growth",
                "Strategic industry positioning"
            ],
            extra: "Each placement is manually reviewed for relevance and editorial standards."
        },
        {
            title: "5. Broken Link Building",
            icon: <Trash2 size={32} />,
            desc: "We turn missed opportunities on other sites into ranking power for your domain.",
            points: [
                "Identify broken links on high-authority sites",
                "Replace them with your relevant content",
                "Value-driven outreach to webmasters",
                "Turn 404s into 200 OK authority"
            ]
        },
        {
            title: "6. Toxic Link Cleanup",
            icon: <Shield size={32} />,
            desc: "We protect your domain from harmful backlink practices and penalties.",
            points: [
                "Audit spammy domains",
                "Remove harmful backlinks",
                "Submit structured disavow files",
                "Rebuild a clean authority profile"
            ],
            extra: "We focus on recovery with sustainable growth."
        }
    ];

    const differentiators = [
        { title: "Data-Driven Targeting", desc: "We use competitive intelligence tools to identify link opportunities that directly impact rankings.", icon: <Search size={24} /> },
        { title: "Relevance-First Strategy", desc: "Links are built within your industry ecosystem—not generic directories.", icon: <Globe size={24} /> },
        { title: "Ethical & White-Hat", desc: "No shortcuts. No PBN risks. Only compliant strategies aligned with Google’s latest guidelines.", icon: <Shield size={24} /> },
        { title: "Measurable ROI Tracking", desc: "Transparent monthly reports including domain rating improvements and organic keyword movement.", icon: <TrendingUp size={24} /> }
    ];

    const faqs = [
        {
            question: "How long does link building take to show results?",
            answer: "Typically, measurable ranking improvements appear within 3–6 months depending on competition and domain strength."
        },
        {
            question: "Are backlinks still important in 2026?",
            answer: "Yes. High-quality, relevant backlinks remain one of the top ranking signals in search engine algorithms."
        },
        {
            question: "Do you guarantee links from specific websites?",
            answer: "We guarantee quality standards and authority metrics, but placements depend on editorial approval and relevance."
        }
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
                        <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1px', color: '#000' }}>
                            Link Building Services
                        </h1>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px', color: '#000' }}>
                            Authority That Ranks. Links That Convert.
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Build powerful, high-authority backlinks that strengthen search visibility, improve domain credibility, and drive consistent organic growth. We create link ecosystems that search engines trust—and competitors struggle to match.
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
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we don’t chase links. We build digital authority.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Link-Building.webp"
                            alt="Link Building Services"
                            style={{
                                maxWidth: '500px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why Link Building Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>
                            Why Link Building Still Defines SEO Success
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666', maxWidth: '850px', margin: '0 auto' }}>
                            Search engines evaluate trust through signals. Authoritative backlinks remain one of the strongest indicators of credibility and relevance in 2026.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div style={{ background: '#0066cc', color: '#fff', padding: '50px', borderRadius: '40px', boxShadow: '0 20px 40px rgba(0,102,204,0.15)' }}>
                            <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px' }}>Modern Link Building Strategy</h3>
                            <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.8', marginBottom: '30px', color: '#fff' }}>
                                It’s no longer about volume—it’s about context, quality, and strategic placement. Adkryoss designs link acquisition frameworks that focus on:
                            </p>
                            <div className="space-y-6">
                                {[
                                    "High-authority editorial placements",
                                    "Niche-relevant contextual backlinks",
                                    "Digital PR-driven authority growth",
                                    "Organic anchor text diversification",
                                    "Sustainable long-term ranking stability"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px', borderRadius: '50%' }}>
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span style={{ fontSize: '17px', fontWeight: '600' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div style={{ padding: '30px', borderLeft: '4px solid #0066cc', background: '#f8f9fa' }}>
                                <p style={{ fontSize: '20px', color: '#1a1a1a', fontWeight: '700', marginBottom: '10px' }}>Contextual Relevance</p>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>We ensure links come from pages related to your business to maximize ranking power.</p>
                            </div>
                            <div style={{ padding: '30px', borderLeft: '4px solid #0066cc', background: '#f8f9fa' }}>
                                <p style={{ fontSize: '20px', color: '#1a1a1a', fontWeight: '700', marginBottom: '10px' }}>Authority Growth</p>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>Every link we build aims to increase your overall domain rating and trust score.</p>
                            </div>
                            <div style={{ padding: '30px', borderLeft: '4px solid #0066cc', background: '#f8f9fa' }}>
                                <p style={{ fontSize: '20px', color: '#1a1a1a', fontWeight: '700', marginBottom: '10px' }}>Risk Management</p>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>We strictly follow white-hat practices to ensure long-term visibility without penalties.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>
                            Our Strategic Link Building Framework
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666' }}>
                            A high-authority approach to earning digital trust.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {linkFramework.map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                transition: 'all 0.3s',
                                border: '1px solid #e2e8f0'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a' }}>{item.title}</h3>
                                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                                    {item.points.map((p, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '8px', marginBottom: '10px', color: '#444', fontSize: '15px' }}>
                                            <div style={{ color: '#0066cc', marginTop: '4px' }}><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '14px', fontWeight: '600', color: '#0066cc', marginTop: '20px' }}>{item.extra}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {additionalFramework.map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                transition: 'all 0.3s',
                                border: '1px solid #e2e8f0'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a' }}>{item.title}</h3>
                                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {item.points.map((p, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '8px', marginBottom: '10px', color: '#444', fontSize: '15px' }}>
                                            <div style={{ color: '#0066cc', marginTop: '4px' }}><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                {item.extra && <p style={{ fontSize: '14px', fontWeight: '600', color: '#0066cc', marginTop: '20px' }}>{item.extra}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>What Makes Our Link Building Different?</h2>
                        <p style={{ fontSize: '20px', color: '#666' }}>We focus on domain authority growth and measurable ranking movement.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {differentiators.map((item, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '20px', border: '1px solid #eee' }}>
                                <div style={{ color: '#0066cc', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>{item.title}</h4>
                                <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Integration */}
            <section style={{ padding: '100px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px', color: '#fff' }}>Industries We Build Authority For</h2>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { name: "E-commerce & D2C", icon: <ShoppingCart size={18} /> },
                                    { name: "SaaS & Tech", icon: <Cpu size={18} /> },
                                    { name: "Education & EdTech", icon: <GraduationCap size={18} /> },
                                    { name: "Healthcare & Wellness", icon: <Heart size={18} /> },
                                    { name: "Real Estate", icon: <Home size={18} /> },
                                    { name: "Finance & BFSI", icon: <DollarSign size={18} /> },
                                    { name: "Corporate Enterprises", icon: <Briefcase size={18} /> }
                                ].map((item, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '15px',
                                        borderRadius: '12px',
                                        width: i === 6 ? '100%' : 'calc(50% - 8px)',
                                        justifyContent: i === 6 ? 'center' : 'flex-start'
                                    }}>
                                        <span className="text-blue-400">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px', color: '#fff' }}>SEO + Link Building = Scalable Growth</h2>
                            <p style={{ color: '#e2e8f0', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
                                Link building works best when integrated with complete SEO architecture. At Adkryoss, we align link acquisition with:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Technical SEO",
                                    "On-Page Optimization",
                                    "Content Marketing",
                                    "Digital PR",
                                    "Performance Analytics"
                                ].map((tag, i) => (
                                    <span key={i} style={{ padding: '8px 20px', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderRadius: '50px', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(59, 130, 246, 0.2)' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>Results You Can Expect</h2>
                        <p style={{ fontSize: '20px', color: '#666' }}>High-authority links that compound your digital equity over time.</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            { label: "Improved DA", val: "Domain Authority" },
                            { label: "Higher Rankings", val: "SERP Dominance" },
                            { label: "Organic Traffic", val: "Consistent Growth" },
                            { label: "Brand Credibility", val: "Industry Trust" },
                            { label: "Long-Term ROI", val: "SEO Momentum" }
                        ].map((res, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '24px', border: '1px solid #eee' }}>
                                <div style={{ fontSize: '24px', fontWeight: '800', color: '#0066cc', marginBottom: '5px' }}>{res.label}</div>
                                <div style={{ fontSize: '14px', color: '#666', fontWeight: '600' }}>{res.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '50px' }}>Frequently Asked Questions</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} style={{ marginBottom: '20px', background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#1a1a1a' }}>{faq.question}</h4>
                                <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>Let’s Build Authority That Compounds</h2>
                    <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: '#fff' }}>
                        Partner with Adkryoss managed by Clink Consultancy Services Private Limited to build a powerful link ecosystem that drives sustainable SEO growth.
                    </p>
                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#0066cc', padding: '18px 40px', borderRadius: '50px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Start Building Smarter Links Today <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default LinkBuildingServices;
