import React from 'react';
import {
    Settings,
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
    Code,
    Smartphone,
    Layers,
    Lock,
    RefreshCcw,
    Gauge,
    TrendingUp,
    Building2,
    ShoppingCart,
    FileText,
    Rocket
} from 'lucide-react';

const TechnicalSEO = () => {
    const technicalFramework = [
        {
            title: "1. Comprehensive Technical Audit",
            icon: <Search size={32} />,
            desc: "We conduct deep-dive audits using advanced SEO tools and manual analysis to uncover hidden obstacles.",
            points: [
                "Crawl errors & indexation issues",
                "Core Web Vitals performance gaps",
                "Broken links & redirect chains",
                "XML sitemap & robots.txt errors",
                "Canonicalization conflicts",
                "JavaScript rendering problems",
                "Duplicate content signals"
            ],
            extra: "We don’t just identify issues — we prioritize them based on business impact."
        },
        {
            title: "2. Website Architecture Optimization",
            icon: <Layers size={32} />,
            desc: "Search engines rank structure before content. We ensure your site is easy to navigate and crawl.",
            points: [
                "Logical URL hierarchy",
                "Internal linking strategy",
                "Silo structuring for topical authority",
                "Breadcrumb implementation",
                "Crawl depth optimization"
            ],
            extra: "This ensures search bots can discover and understand every valuable page."
        },
        {
            title: "3. Core Web Vitals & Performance",
            icon: <Zap size={32} />,
            desc: "Speed is ranking power. Our team optimizes every aspect of your site's performance.",
            points: [
                "Largest Contentful Paint (LCP)",
                "Interaction to Next Paint (INP)",
                "Cumulative Layout Shift (CLS)",
                "Server response time",
                "Image compression & next-gen formats",
                "Lazy loading & code minification"
            ],
            extra: "Faster load times lead to improved engagement and lower bounce rates."
        }
    ];

    const additionalServices = [
        {
            title: "4. Mobile-First Optimization",
            icon: <Smartphone size={32} />,
            desc: "Google indexes the mobile version first. We ensure your website is fully responsive and touch-optimized.",
            points: [
                "Fully responsive design",
                "Mobile speed optimization",
                "Intrusive interstitial removal",
                "Touch-target optimization"
            ],
            extra: "Your website will perform seamlessly across devices."

        },
        {
            title: "5. Advanced Schema & Data",
            icon: <Code size={32} />,
            desc: "Structured data enhances your search visibility with rich snippets and higher CTR.",
            points: [
                "Organization & Service Schema",
                "FAQ Schema",
                "Artical & Blog Schema",
                "Breadcrumb Schema",
                "Product & Review Schema"
            ],
            extra: "This increases your chances of earning rich snippets and higher CTR."
        },
        {
            title: "6. Crawl Budget Optimization",
            icon: <Network size={32} />,
            desc: "Large websites often waste crawl budget. We ensure bots focus on your high-impact pages.",
            points: [
                "Block low-value pages",
                "Optimize pagination",
                "Improve internal linking ",
                "Remove thin & duplicate URLs",
                "Consolidate redundant pages"
            ],
            extra: "This ensures Google focuses only on your high-impact pages."
        },
        {
            title: "7. Secure & Clean Infrastructure",
            icon: <Lock size={32} />,
            desc: "Technical SEO also protects your brand reputation.",
            points: [
                "HTTPS implementation ",
                "Mixed content fixes ",
                "Malware & spam checks  ",
                "Log file analysis ",
                "404 & 410 management "
            ],
            extra: "A clean website builds search engine trust."
        }
    ];

    const workingApproach = [
        { step: "Step 1", title: "Audit & Benchmarking", desc: "We evaluate current technical health and define growth benchmarks." },
        { step: "Step 2", title: "Roadmap Development", desc: "We create a prioritized implementation roadmap aligned with business goals." },
        { step: "Step 3", title: "Implementation", desc: "We work alongside developers to ensure flawless execution." },
        { step: "Step 4", title: "Testing & Validation", desc: "We validate improvements using performance monitoring tools." },
        { step: "Step 5", title: "Continuous Monitoring", desc: "SEO is ongoing. We track, refine, and optimize continuously." }
    ];

    const faqs = [
        {
            question: "How long does Technical SEO take to show results?",
            answer: "Initial improvements can be visible within 4–8 weeks, depending on site complexity."
        },
        {
            question: "Is Technical SEO a one-time process?",
            answer: "No. Websites evolve. Continuous monitoring ensures long-term growth."
        },
        {
            question: "Can Technical SEO improve conversions?",
            answer: "Yes. Faster speed and better usability directly impact user experience and conversion rates."
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
                        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1px', color: '#000' }}>
                            Technical SEO Services
                        </h1>
                        <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                            Build a Search-Ready Foundation that Scales
                        </h3>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '32px' }}>
                            Technical SEO is not just about fixing errors. It’s about engineering <br />a website that search engines trust, crawl efficiently, and rank confidently.
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
                                At Adkryoss managed by <span style={{ fontWeight: '700', color: '#000' }}>Clink Consultancy Services Private Limited</span>, we transform your website into a high-performance digital asset built for visibility, speed, scalability, and long-term organic growth.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Technical-SEO.webp"
                            alt="Technical SEO"
                            style={{
                                maxWidth: '500px',
                                width: '100%',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Why Technical SEO Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff', position: 'relative' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            Why Technical SEO Is Non-Negotiable in 2026
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                            Search engines have evolved. Core Web Vitals, crawl efficiency, structured data, and mobile-first indexing are no longer optional.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.8' }}>
                                If your technical infrastructure is weak, your entire SEO strategy suffers:
                            </p>
                            {[
                                "Rankings stagnate despite great content",
                                "Crawl budget gets wasted on low-value pages",
                                "New pages remain undiscovered for weeks",
                                "Conversions silently drop due to poor performance"
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <div style={{ background: '#0066cc', color: '#fff', borderRadius: '50%', padding: '4px' }}>

                                    </div>
                                    <span style={{ fontSize: '18px', fontWeight: '500', color: '#1a1a1a' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ background: '#f8f9fa', padding: '40px', borderRadius: '30px', border: '1px solid #eee' }}>
                            <Lock size={48} style={{ color: '#0066cc', marginBottom: '20px' }} />
                            <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.8', fontStyle: 'italic' }}>
                                "Technical SEO ensures your website performs flawlessly — for both users and search engines. "
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>
                            Our Technical SEO Framework
                        </h2>
                        <p style={{ fontSize: '20px', color: '#666' }}>
                            We follow a strategic, data-backed and scalable methodology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {technicalFramework.map((item, i) => (
                            <div key={i} className="group" style={{
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
                                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>{item.title}</h3>
                                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                                    {item.points.map((p, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '8px', marginBottom: '10px', color: '#444', fontSize: '15px' }}>
                                            <div style={{ color: '#0066cc', marginTop: '4px' }}><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#0066cc', marginTop: '20px' }}>{item.extra}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        {additionalServices.map((item, i) => (
                            <div key={i} className="w-full md:w-[calc(33.333%-22px)] min-w-[300px]" style={{
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
                                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>{item.title}</h3>
                                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{item.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {item.points.map((p, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '8px', marginBottom: '10px', color: '#444', fontSize: '15px' }}>
                                            <div style={{ color: '#0066cc', marginTop: '4px' }}><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#0066cc', marginTop: '20px' }}>{item.extra}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Approach */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Our Working Approach</h2>
                        <p style={{ fontSize: '20px', color: '#666' }}>We combine strategic planning with technical execution.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {workingApproach.map((item, i) => (
                            <div key={i} style={{
                                flex: '1 1 200px',
                                maxWidth: '300px',
                                background: '#f8f9fa',
                                padding: '30px',
                                borderRadius: '20px',
                                border: '1px solid #eee',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0066cc', marginBottom: '10px', textTransform: 'uppercase' }}>{item.step}</div>
                                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '10px' }}>{item.title}</h4>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Who Needs Technical SEO & Why Choose Us */}
            <section style={{ padding: '100px 0', backgroundColor: '#0f172a', color: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '40px', color: '#fff' }}>Who Needs Technical SEO?</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: "Enterprise websites", icon: <Building2 size={18} /> },
                                    { name: "E-commerce stores", icon: <ShoppingCart size={18} /> },
                                    { name: "SaaS platforms", icon: <Cpu size={18} /> },
                                    { name: "Content-heavy portals", icon: <FileText size={18} /> },
                                    { name: "Startups preparing for scale", icon: <Rocket size={18} /> },
                                    { name: "Websites facing ranking drops", icon: <TrendingUp size={18} /> }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px' }}>
                                        <span className="text-blue-400">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ marginTop: '30px', color: '#e2e8f0', fontSize: '18px' }}>
                                If your site has more than 50 pages, technical SEO is critical.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '40px', color: '#fff' }}>Why Choose Us</h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Data-driven execution", d: "Every fix is backed by hard search data." },
                                    { t: "Transparent reporting", d: "No technical jargon, just clear results." },
                                    { t: "Enterprise-level tools", d: "We use the same tech as global giants." },
                                    { t: "Agile implementation", d: "Faster deployment of critical fixes." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ marginTop: '4px' }}><ArrowRight size={20} className="text-blue-400" /></div>
                                        <div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '600' }}>{item.t}</h4>
                                            <p style={{ color: '#e2e8f0', lineHeight: '1.7' }}>{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: Tools & Results */}
            <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div style={{ borderRight: '1px solid #eee', paddingRight: '40px' }}>
                            <h2 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '20px', color: '#000' }}>What Makes Our Technical SEO Different?</h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "GSC", "GA4", "Screaming Frog", "Ahrefs", "SEMrush", "PageSpeed Insights", "GTmetrix", "Schema Generators", "CDN Tools"
                                ].map((tool, i) => (
                                    <span key={i} style={{ padding: '8px 20px', background: '#f1f5f9', color: '#1a1a1a', borderRadius: '50px', fontSize: '14px', fontWeight: '500' }}>{tool}</span>
                                ))}
                            </div>
                            <p style={{ marginTop: '20px', color: '#666' }}>We combine automation with expert analysis for precision results.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '30px' }}>Results You Can Expect</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "Improved crawl efficiency",
                                    "Faster indexing",
                                    "Higher keyword rankings",
                                    "Better Core Web Vitals",
                                    "Increased organic traffic",
                                    "Higher user engagement"
                                ].map((res, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <TrendingUp size={18} className="text-green-500" />
                                        <span style={{ fontWeight: '500', color: '#333' }}>{res}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '36px', fontWeight: '600', textAlign: 'center', marginBottom: '50px' }}>Frequently Asked Questions</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} style={{ marginBottom: '20px', background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>{faq.question}</h4>
                                <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Let’s Strengthen Your Digital Foundation</h2>
                    <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: '#fff' }}>
                        Partner with Adkryoss managed by Clink Consultancy Services Private Limited and build a website that search engines trust — and customers love.
                    </p>
                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#0066cc', padding: '18px 40px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Unlock Your Search Potential <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TechnicalSEO;
