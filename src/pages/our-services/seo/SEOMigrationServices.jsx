import React from 'react';
import { Link } from 'react-router-dom';
import {
    Shield,
    Zap,
    ArrowRight,
    Search,
    Layout,
    Link2,
    Settings,
    Rocket,
    BarChart3,
    RefreshCcw,
    Globe,
    Server,
    Smartphone,
    ShoppingCart,
    Building2,
    CheckCircle2,
    AlertTriangle,
    Activity,
    Users
} from 'lucide-react';

const SEOMigrationServices = () => {
    const migrationSteps = [
        {
            icon: <Search size={32} />,
            title: "Pre-Migration SEO Audit & Strategy Blueprint",
            points: [
                "Complete URL inventory & performance mapping",
                "Backlink analysis & equity preservation strategy",
                "Traffic & keyword benchmarking",
                "Crawl diagnostics & technical health audit",
                "Risk assessment & migration roadmap"
            ]
        },
        {
            icon: <Layout size={32} />,
            title: "SEO-Safe Architecture Planning",
            points: [
                "URL restructuring strategy",
                "Internal linking preservation",
                "Canonical mapping",
                "XML sitemap planning",
                "Robots.txt validation",
                "Structured data planning"
            ]
        },
        {
            icon: <Link2 size={32} />,
            title: "Redirect Mapping & Equity Transfer",
            points: [
                "Preserve link authority",
                "Prevent traffic leakage",
                "Maintain keyword rankings",
                "Eliminate redirect chains",
                "Protect high-performing pages"
            ]
        },
        {
            icon: <Settings size={32} />,
            title: "Technical SEO Implementation",
            points: [
                "Page speed & Core Web Vitals",
                "Mobile-first indexing readiness",
                "HTTPS configuration",
                "JavaScript SEO validation",
                "Server log analysis",
                "Schema & structured data migration"
            ]
        },
        {
            icon: <Rocket size={32} />,
            title: "Controlled Launch & Live Monitoring",
            points: [
                "Indexation behavior",
                "Crawl errors",
                "Redirect validations",
                "Keyword movement",
                "Traffic fluctuations"
            ]
        },
        {
            icon: <Activity size={32} />,
            title: "Post-Migration Performance Stabilization",
            points: [
                "Keyword recovery tracking",
                "Authority rebuilding strategy",
                "Technical refinement",
                "Conversion optimization alignment",
                "Ongoing SEO enhancements"
            ]
        }
    ];

    const migrationTypes = [
        { icon: <Layout size={24} />, name: "Website Redesign Migration" },
        { icon: <Globe size={24} />, name: "Domain Change Migration" },
        { icon: <Shield size={24} />, name: "HTTP to HTTPS Migration" },
        { icon: <Settings size={24} />, name: "CMS Migration (WordPress, Shopify, etc.)" },
        { icon: <Server size={24} />, name: "Server Migration" },
        { icon: <Globe size={24} />, name: "International / Multi-Language Migration" },
        { icon: <ShoppingCart size={24} />, name: "E-commerce SEO Migration" },
        { icon: <Building2 size={24} />, name: "Enterprise-Level Platform Migration" }
    ];

    const differentiators = [
        {
            title: "Performance-Led Execution",
            description: "Every decision is backed by search data, not assumptions."
        },
        {
            title: "Cross-Functional Expertise",
            description: "SEO strategists + technical developers + analytics experts work together."
        },
        {
            title: "Zero-Drop Philosophy",
            description: "Our mission: maintain or improve traffic within 90 days post-migration."
        },
        {
            title: "Enterprise-Grade Tools",
            description: "Advanced crawling tools and log analyzers for accuracy."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            SEO Migration Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Safeguard Rankings. Preserve Traffic. Accelerate Growth.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            When websites evolve, rankings shouldn't collapse. Redesigns, domain changes, platform shifts, or international expansion — every structural change impacts visibility.
                        </p>
                        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px] mb-8">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we deliver a zero-drop migration framework to protect your organic authority during transition.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/03/SEO-Migration-Services.png"
                            alt="SEO Migration"
                            className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </div>
                </div>
            </section>

            {/* Risk Section */}
            <section className="py-20 bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-10 text-slate-900">
                        Why SEO Migration Is High-Risk Without Strategy
                    </h2>
                    <div className="flex flex-wrap justify-center gap-5 mb-10">
                        {[
                            "Broken redirects & crawl errors",
                            "Loss of backlink equity",
                            "Indexation issues",
                            "Keyword cannibalization",
                            "Drop in domain authority",
                            "Traffic and revenue decline"
                        ].map((risk, i) => (
                            <div key={i} className="p-6 bg-red-50 rounded-xl border-l-[5px] border-l-red-400 flex items-center gap-[15px] w-[calc(33.333%-14px)] min-w-[280px] grow max-w-[380px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-400/10">
                                <AlertTriangle size={20} className="text-red-400" />
                                <span className="font-bold text-red-700">{risk}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 font-bold">
                        We don't just "move" your website. We engineer a seamless search transition.
                    </p>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[42px] font-bold text-center mb-[60px] text-slate-900">
                        Our SEO Migration Framework
                    </h2>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {migrationSteps.map((step, index) => (
                            <div key={index} className="bg-white p-10 rounded-[20px] shadow-sm border border-slate-100 w-[calc(33.333%-20px)] min-w-[320px] grow max-w-[400px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-[#0066cc]">
                                <div className="text-[#0066cc] mb-5">{step.icon}</div>
                                <h3 className="text-[22px] font-bold mb-5 text-slate-900">
                                    {index + 1}. {step.title}
                                </h3>
                                <ul className="list-none p-0 space-y-4">
                                    {step.points.map((pt, i) => (
                                        <li key={i} className="flex gap-2.5 text-[15px] text-slate-600 leading-relaxed">
                                            <CheckCircle2 size={18} className="text-[#0066cc] shrink-0 mt-1" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Types */}
            <section className="py-20 bg-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[50px] text-slate-900">
                        Types of SEO Migration We Handle
                    </h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {migrationTypes.map((type, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-xl flex items-center gap-4 transition-all duration-300 w-[calc(25%-15px)] min-w-[250px] grow max-w-[300px] border border-transparent hover:bg-white hover:border-[#0066cc] hover:scale-105 hover:shadow-xl hover:shadow-blue-900/5 group">
                                <div className="text-[#0066cc] group-hover:scale-110 transition-transform">{type.icon}</div>
                                <span className="font-bold text-slate-900">{type.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Different Section */}
            <section className="py-20 bg-[#0066cc] text-white">
                <div className="container">
                    <h2 className="text-[42px] font-bold text-center mb-[60px] text-white">
                        What Makes Us Different?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {differentiators.map((diff, i) => (
                            <div key={i} className="p-8 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-lg w-[calc(25%-23px)] min-w-[260px] grow max-w-[350px] transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-bold text-white">
                                    {diff.title}
                                </h3>
                                <p className="text-[16px] md:text-[18px] mb-6 text-white/90 leading-relaxed">
                                    {diff.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[42px] font-bold mb-6 text-slate-900 leading-tight">
                        Let's Migrate Without Losing Momentum
                    </h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 max-w-[800px] mx-auto leading-relaxed">
                        Your website growth shouldn't reset to zero. Partner with Adkryoss and transform your migration into a scalable search growth opportunity.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-[#0066cc] text-white py-5 px-12 rounded-full text-[18px] font-bold no-underline transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,102,204,0.3)] hover:scale-[1.02]">
                        Start Your Migration Safely
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SEOMigrationServices;
