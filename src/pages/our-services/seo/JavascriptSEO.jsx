import React from 'react';
import { Link } from 'react-router-dom';
import {
    Code2,
    Search,
    RefreshCcw,
    Zap,
    Layout,
    Link2,
    Settings,
    CheckCircle2,
    ArrowRight,
    Cpu,
    Target,
    Users,
    Activity,
    Smartphone,
    Database,
    Globe,
    FileText,
    Layers,
    Binary,
    BarChart3,
    Briefcase,
    Lightbulb,
    Puzzle,
    ShoppingBag,
    Building2
} from 'lucide-react';

const JavascriptSEO = () => {
    const reasons = [
        { title: "Delayed Rendering", desc: "Search engines struggle with content hidden in the second wave of indexing.", icon: <Activity size={24} /> },
        { title: "Missing Content", desc: "Dynamically injected elements are often missed by traditional crawlers.", icon: <FileText size={24} /> },
        { title: "Crawl Budget Waste", desc: "Heavy script execution burns through crawl efficiency.", icon: <Zap size={24} /> },
        { title: "Complex Structures", desc: "Single Page Application (SPA) routes can be invisible without proper setup.", icon: <Layers size={24} /> }
    ];

    const framework = [
        {
            title: "1. Technical JS Audit",
            icon: <Search size={32} />,
            desc: "A deep forensic review of how search engines process your dynamic code.",
            points: [
                "Crawlability testing (Googlebot simulation)",
                "Comparison: Client-side vs Server-side rendering",
                "Log file & Core Web Vitals assessment",
                "JS execution error tracking"
            ]
        },
        {
            title: "2. Rendering Optimization",
            icon: <Cpu size={32} />,
            desc: "Optimizing the 'Two Waves of Indexing' for maximum coverage.",
            points: [
                "Server-Side Rendering (SSR) implementation",
                "Dynamic Rendering configuration",
                "Static Site Generation (SSG) / Pre-rendering",
                "Hydration performance optimization"
            ]
        },
        {
            title: "3. Crawl & Index Control",
            icon: <Link2 size={32} />,
            desc: "Ensuring discovery and interpretation of every critical route.",
            points: [
                "Robots.txt & meta directive handling",
                "Canonicalization for SPA routes",
                "JS navigation & internal link optimization",
                "XML sitemap sync for dynamic pages"
            ]
        },
        {
            title: "4. Web Vitals & Performance",
            icon: <Binary size={32} />,
            desc: "Speed is a ranking factor; JS websites need leaner performance.",
            points: [
                "LCP, INP, and CLS optimization",
                "Code splitting & Lazy loading",
                "Script defer/async configuration",
                "Rendering path optimization"
            ]
        },
        {
            title: "5. Structured Data Rendering",
            icon: <Layers size={32} />,
            desc: "Ensuring AI and search engines get your metadata accurately.",
            points: [
                "Schema markup in initial HTML",
                "Meta tags & Social Open Graph loads",
                "Dynamic content crawlability verification",
                "Rich results eligibility tracking"
            ]
        }
    ];

    const techExpertise = [
        { name: "React SEO", icon: <Code2 size={24} /> },
        { name: "Next.js Optimization", icon: <Cpu size={24} /> },
        { name: "Angular SEO", icon: <Settings size={24} /> },
        { name: "Vue.js SEO", icon: <Layout size={24} /> },
        { name: "Headless CMS", icon: <Database size={24} /> },
        { name: "PWA SEO", icon: <Smartphone size={24} /> }
    ];

    const industries = [
        { name: "ECommerce & D2C Brands", desc: "Handling dynamic product grids and faceted search.", icon: <ShoppingBag size={24} /> },
        { name: "SaaS Platforms", desc: "Optimizing SPA routes and complex user dashboards.", icon: <Cpu size={24} /> },
        { name: "FinTech Applications", desc: "Secure, compliant rendering for financial tools.", icon: <Activity size={24} /> },
        { name: "Enterprise Portals", desc: "Scaling visibility for heavy, high-performance apps.", icon: <Building2 size={24} /> },
        { name: "EdTech & Media Platforms", desc: "Ensuring video and interactive content is indexed.", icon: <Globe size={24} /> }
    ];

    const workingModelSteps = [
        "Discovery", "Audit", "Technical Roadmap", "Implementation Support", "Performance Monitoring"
    ];

    const whyChooseUs = [
        "Deep technical SEO specialization",
        "Strong developer collaboration approach",
        "Data-driven testing methodology",
        "Performance-first mindset",
        "Enterprise-ready scalability"
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
                            JavaScript SEO Services
                        </h1>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px', color: '#000' }}>
                            Make Your Dynamic Website Search-Ready
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Modern websites run on JavaScript. Google doesn't always. If your content loads after rendering, search engines might never see it. We ensure your JS-driven website is fully crawlable, indexable, and optimized for maximum visibility.
                        </p>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', margin: 0 }}>
                                At Adkryoss managed by <span style={{ fontWeight: '800', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we bridge the gap between advanced development and search engine accessibility.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/11/javascript-seo-img.webp"
                            alt="JavaScript SEO"
                            style={{
                                maxWidth: '500px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why Matters Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>
                                Why JavaScript SEO Matters
                            </h2>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                Today's websites rely heavily on frameworks like React, Angular, and Vue. While they deliver speed and user experience, they often create invisible barriers for search engines.
                            </p>
                            <div className="space-y-4">
                                {reasons.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                        <div style={{ color: '#0066cc', marginTop: '4px' }}>{item.icon}</div>
                                        <div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>{item.title}</h4>
                                            <p style={{ fontSize: '15px', color: '#64748b' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src="https://www.techmagnate.com/wp-content/uploads/2026/01/Java-Script-SEO-Strategy.webp" alt="JS SEO Strategy" style={{ borderRadius: '30px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>
                </div>
            </section>



            {/* Approach Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>
                            Our JavaScript SEO Approach
                        </h2>
                        <p style={{ fontSize: '20px', color: '#64748b', fontWeight: '600' }}>Technical Precision. Strategic SEO Engineering.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                        {framework.map((phase, i) => (
                            <div key={i} style={{
                                width: 'calc(33.333% - 27px)',
                                minWidth: '350px',
                                background: '#fff',
                                padding: '50px 40px',
                                borderRadius: '24px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid #e2e8f0',
                                flexGrow: 1,
                                maxWidth: '450px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,0.15)';
                                    e.currentTarget.style.borderColor = '#0066cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}>
                                <div style={{ color: '#0066cc', marginBottom: '24px' }}>{phase.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>{phase.title}</h3>
                                <p style={{ fontSize: '16px', color: '#475569', marginBottom: '30px', lineHeight: '1.7' }}>{phase.desc}</p>
                                <ul className="space-y-6">
                                    {phase.points.map((pt, idx) => (
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

            {/* Framework Expertise */}
            <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#fff' }}>Framework-Specific Expertise</h2>
                    <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
                        Whether you're running eCommerce, SaaS, or an Enterprise app, we align SEO with your development stack.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {techExpertise.map((tech, i) => (
                            <div key={i} style={{
                                padding: '30px 40px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px',
                                minWidth: 'auto',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}>
                                <div style={{ color: '#60a5fa' }}>{tech.icon}</div>
                                <span style={{ fontWeight: '700', fontSize: '16px' }}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries we support */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>Industries We Support</h2>
                    <p style={{ fontSize: '20px', color: '#64748b', marginBottom: '60px' }}>
                        Each industry demands a custom rendering and crawl strategy, which we design with long-term scalability in mind.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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

            {/* Working Model & Why Choose Us */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Working Model */}
                        <div style={{ background: '#fff', padding: '50px', borderRadius: '40px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <BarChart3 size={32} style={{ color: '#0066cc' }} />
                                <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>Our Working Model</h3>
                            </div>
                            <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
                                We don’t treat JavaScript SEO as a one-time fix. It’s an ongoing technical alignment process.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                                {workingModelSteps.map((step, i) => (
                                    <React.Fragment key={i}>
                                        <span style={{ padding: '8px 16px', background: '#f0f9ff', color: '#0066cc', borderRadius: '20px', fontWeight: '700', fontSize: '14px', border: '1px solid #bae6fd' }}>
                                            {step}
                                        </span>
                                        {i < workingModelSteps.length - 1 && <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center' }}>→</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#0f172a' }}>Clink Consultancy Services Private Limited</span>, we collaborate with your developers, track rendering performance after deployment, and continuously optimize based on real search data.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div style={{ background: '#fff', padding: '50px', borderRadius: '40px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <Lightbulb size={32} style={{ color: '#0066cc' }} />
                                <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>Why Choose Us</h3>
                            </div>
                            <div className="space-y-6">
                                {whyChooseUs.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ width: '8px', height: '8px', background: '#0066cc', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>{item}</h4>
                                    </div>
                                ))}
                            </div>
                            <p style={{ marginTop: '30px', fontSize: '16px', color: '#64748b', fontStyle: 'italic', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                                "We combine strategy, engineering precision, and performance marketing to deliver measurable ranking improvements."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>
                                What Results You Can Expect
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Improved Crawl Coverage", d: "Ensure 100% of your critical pages are reached by search engines." },
                                    { t: "Faster Indexing", d: "Content appears in search results hours or days faster." },
                                    { t: "Enhanced Core Web Vitals", d: "Leaner JS execution for better user experience scores." },
                                    { t: "Higher Organic Visibility", d: "Unblock rankings held back by technical rendering issues." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <CheckCircle2 size={24} style={{ color: '#0066cc', flexShrink: 0, marginTop: '4px' }} />
                                        <div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>{item.t}</h4>
                                            <p style={{ fontSize: '15px', color: '#475569' }}>{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '50px', borderRadius: '30px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                            <Activity size={60} style={{ color: '#0066cc', margin: '0 auto 24px' }} />
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>Ready to Scale?</h3>
                            <p style={{ color: '#64748b', fontSize: '17px', marginBottom: '32px' }}>
                                JavaScript should power your growth — not block it. Let's make your dynamic website search-ready.
                            </p>
                            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#0066cc', color: '#fff', padding: '15px 40px', borderRadius: '50px', fontWeight: '700', textDecoration: 'none' }}>
                                Talk to JS SEO Experts <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JavascriptSEO;
