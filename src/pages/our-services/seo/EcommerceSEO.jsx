import React from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart,
    Zap,
    BarChart3,
    Search,
    ArrowRight,
    Settings,
    CheckCircle2,
    TrendingUp,
    Globe,
    Layers,
    Layout,
    Link2,
    Users,
    FileText,
    PieChart
} from 'lucide-react';

const EcommerceSEO = () => {
    const framework = [
        {
            title: "Ecommerce SEO Audit & Growth Blueprint",
            icon: <Search size={32} />,
            desc: "We conduct a deep technical and commercial audit covering all growth roadblocks.",
            points: [
                "Crawlability & indexation issues",
                "Site architecture & category depth",
                "Product page optimization gaps",
                "Core Web Vitals & speed performance",
                "Structured data & schema gaps",
                "Competitor visibility mapping"
            ],
            extra: "This becomes your actionable growth roadmap."
        },
        {
            title: "Keyword Intelligence & Intent Mapping",
            icon: <TrendingUp size={32} />,
            desc: "Ranking for random keywords doesn’t generate revenue. We map intent.",
            points: [
                "Transactional keywords",
                "Commercial investigation terms",
                "Category-level search clusters",
                "Long-tail product modifiers",
                "Seasonal & trend-based demand"
            ],
            extra: "Each keyword is aligned to revenue potential, not just volume."
        },
        {
            title: "Technical Ecommerce SEO",
            icon: <Settings size={32} />,
            desc: "Your site structure defines your ranking potential in search engines.",
            points: [
                "Faceted navigation & filter handling",
                "Pagination strategy",
                "Canonicalization",
                "XML sitemap hierarchy",
                "Robots.txt optimization",
                "Internal linking architecture",
                "Mobile-first indexing readiness"
            ],
            extra: "We ensure your site is built for search engines and seamless user experience."
        },
        {
            title: "Category & Product Page Optimization",
            icon: <Layout size={32} />,
            desc: "Your product pages should sell and rank simultaneously.",
            points: [
                "SEO-optimized product descriptions",
                "Conversion-focused meta tags",
                "Structured schema (Product, Review, FAQ)",
                "Image alt tags & visual search signals",
                "User-generated content integration",
                "Trust-building elements"
            ],
            extra: "We transform static listings into search-optimized sales assets."
        },
        {
            title: "Content Commerce Strategy",
            icon: <FileText size={32} />,
            desc: "Content drives organic authority and assisted conversions.",
            points: [
                "Buying guides",
                "Comparison pages",
                "SEO landing pages",
                "FAQ clusters",
                "Seasonal campaign pages",
                "Blog-to-product internal funnels"
            ],
            extra: "This builds topical authority and drives ecommerce sales."
        },
        {
            title: "Ecommerce Link Building & Authority",
            icon: <Link2 size={32} />,
            desc: "Authority drives ranking dominance in competitive niches.",
            points: [
                "Digital PR outreach",
                "High-quality backlink acquisition",
                "Industry mentions",
                "Influencer collaborations",
                "Marketplace & partner citations"
            ],
            extra: "We build brand authority that translates into sustainable rankings."
        },
        {
            title: "CRO Integration",
            icon: <PieChart size={32} />,
            desc: "Traffic without conversions is wasted opportunity. We maximize impact.",
            points: [
                "User journey behavior",
                "Heatmaps & session insights",
                "Drop-off points",
                "CTA placement",
                "Product page UX"
            ],
            extra: "SEO and CRO must work together to maximize revenue impact."
        }
    ];

    const platforms = ["Shopify SEO", "WooCommerce SEO", "Magento SEO", "Custom Ecommerce Frameworks", "Headless Commerce Architecture"];
    const industries = ["Fashion & Apparel", "Electronics & Gadgets", "Beauty & Wellness", "Home & Lifestyle", "D2C Brands", "B2B Ecommerce"];

    const workingModel = [
        "Discovery & Business Understanding",
        "Competitive Benchmarking",
        "Technical & Commercial Audit",
        "Strategy Roadmap Development",
        "Execution & Optimization",
        "Continuous Performance Tracking",
        "Scale & Expansion"
    ];

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#fff',
                padding: '120px 0 80px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px' }}>
                            Ecommerce SEO Services
                        </h1>
                        <p style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px', color: '#0066cc' }}>
                            Turn Product Pages into Revenue Engines
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '40px' }}>
                            Ecommerce is no longer about just listing products. It’s about owning high-intent search moments. When customers search with buying intent, your store must appear first — not just visible, but irresistible.
                        </p>
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '30px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', margin: 0 }}>
                                At Adkryoss managed by Clink Consultancy Services Private Limited, we build performance-driven Ecommerce SEO strategies designed to increase visibility, improve product discoverability, and maximize conversion value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Ecommerce SEO */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '40px', color: '#0f172a' }}>
                        Why Ecommerce SEO is a Growth Multiplier
                    </h2>
                    <p style={{ fontSize: '18px', color: '#475569', maxWidth: '800px', margin: '0 auto 50px' }}>
                        Online stores face complex SEO challenges. Without a structured SEO framework, even the best products stay invisible.
                    </p>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '60px'
                    }}>
                        {[
                            "Thousands of dynamic URLs",
                            "Duplicate product descriptions",
                            "Technical crawl inefficiencies",
                            "Category cannibalization",
                            "Seasonal ranking volatility"
                        ].map((challenge, i) => (
                            <div key={i} style={{
                                padding: '24px',
                                background: '#eff6ff',
                                borderRadius: '15px',
                                borderLeft: '5px solid #0066cc',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                transition: 'all 0.3s',
                                width: 'calc(33.333% - 14px)',
                                minWidth: '280px',
                                flexGrow: 1,
                                maxWidth: '380px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,102,204,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <Zap size={20} style={{ color: '#0066cc' }} />
                                <span style={{ fontWeight: '700', color: '#1e293b' }}>{challenge}</span>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '20px', fontWeight: '700', color: '#0066cc' }}>
                        Our approach blends technical precision, content depth, search intent mapping, and conversion intelligence to build scalable ecommerce growth.
                    </p>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>
                        Our Ecommerce SEO Framework
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        {framework.map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                width: 'calc(33.333% - 20px)',
                                minWidth: '320px',
                                flexGrow: 1,
                                maxWidth: '400px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.1)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#0f172a' }}>
                                    {i + 1}. {item.title}
                                </h3>
                                <p style={{ fontSize: '15px', color: '#475569', marginBottom: '20px', lineHeight: '1.6' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                                    {item.points.map((pt, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '12px', fontSize: '14px', color: '#334155' }}>
                                            <CheckCircle2 size={16} style={{ color: '#0066cc', flexShrink: 0, marginTop: '2px' }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '14px', color: '#0066cc', fontWeight: '600', padding: '15px', background: '#eff6ff', borderRadius: '12px', margin: 0 }}>
                                    {item.extra}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms & Industries */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>Platforms We Work With</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {platforms.map((plat, i) => (
                                    <div key={i} style={{ padding: '12px 24px', background: '#f8fafc', borderRadius: '50px', fontWeight: '700', color: '#1e293b', border: '1px solid #e2e8f0' }}>{plat}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>Industries We Serve</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {industries.map((ind, i) => (
                                    <div key={i} style={{ padding: '12px 24px', background: '#0066cc', color: '#fff', borderRadius: '50px', fontWeight: '700' }}>{ind}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Approach */}
            <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '50px', color: '#fff' }}>Why Choose Our Ecommerce SEO Approach?</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                        {[
                            "Revenue-first SEO strategy",
                            "Data-driven keyword targeting",
                            "Full-funnel search optimization",
                            "Technical + Content + Authority integration",
                            "Transparent reporting & measurable KPIs"
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: '20px 40px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '15px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                fontWeight: '700',
                                fontSize: '18px',
                                color: '#fff',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#0066cc';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}>
                                ✔ {item}
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: '50px', fontSize: '20px', color: '#cbd5e1', maxWidth: '900px', margin: '50px auto 0' }}>
                        Adkryoss managed by Clink Consultancy Services Private Limited doesn’t offer isolated SEO services — we build organic revenue ecosystems.
                    </p>
                </div>
            </section>

            {/* Working Model */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>Our Working Model</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                        {workingModel.map((model, i) => (
                            <div key={i} style={{
                                padding: '20px 30px',
                                background: '#f8fafc',
                                borderRadius: '12px',
                                fontWeight: '700',
                                color: '#1e293b',
                                border: '1px solid #e2e8f0',
                                textAlign: 'center',
                                flexGrow: 1,
                                minWidth: '200px'
                            }}>
                                {model}
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#475569' }}>We operate as your extended growth partner — not just a vendor.</p>
                    </div>
                </div>
            </section>

            {/* Results You Can Expect */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '50px', color: '#0f172a' }}>Results You Can Expect</h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '40px'
                    }}>
                        {[
                            { title: "Organic Visibility", txt: "Higher organic product visibility" },
                            { title: "Rankings", txt: "Improved category rankings" },
                            { title: "Traffic", txt: "Increased non-branded traffic" },
                            { title: "Conversions", txt: "Better conversion rates" },
                            { title: "Cost Savings", txt: "Reduced dependency on paid ads" },
                            { title: "Revenue", txt: "Long-term scalable revenue growth" }
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: '30px',
                                background: '#fff',
                                borderRadius: '20px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                width: 'calc(33.333% - 14px)',
                                minWidth: '250px',
                                flexGrow: 1,
                                maxWidth: '350px'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px', color: '#0066cc' }}>{item.title}</h3>
                                <p style={{ color: '#334155', fontWeight: '600', margin: 0 }}>{item.txt}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '20px', color: '#475569', fontStyle: 'italic' }}>
                        Ecommerce SEO is not a one-time fix. It’s a continuous growth engine.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0066cc 0%, #004e92 100%)', color: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>
                        Ready to Scale Your Ecommerce Revenue?
                    </h2>
                    <p style={{ fontSize: '22px', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', color: '#eff6ff' }}>
                        If you want to dominate high-intent search and build sustainable organic revenue, it’s time to implement a strategic ecommerce SEO framework. Partner with Adkryoss and turn your store into a revenue powerhouse.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#fff',
                        color: '#0066cc',
                        padding: '20px 50px',
                        borderRadius: '50px',
                        fontSize: '18px',
                        fontWeight: '800',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                        Start Your Growth Now
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EcommerceSEO;
