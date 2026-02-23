import React from 'react';
import { Link } from 'react-router-dom';
import seoaudithero from "../../../assets/SEO/seoaudithero.png";
import {
    Settings,
    FileText,
    Link2,
    MousePointer2,
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Building2,
    ShoppingBag,
    GraduationCap,
    Heart,
    Code,
    Globe,
    Zap
} from 'lucide-react';

const SEOAudit = () => {

    const auditFramework = [
        {
            title: "1. Technical SEO Audit",
            icon: <Settings size={32} />,
            desc: "We examine your website architecture from the search engine’s perspective.",
            points: [
                "Crawlability & indexability analysis",
                "XML sitemap & robots.txt validation",
                "Core Web Vitals & speed diagnostics",
                "Mobile-first optimization review",
                "Schema & structured data evaluation",
                "Canonicalization & duplicate content checks",
                "Redirect chains & broken links"
            ],
            footer: "We ensure your website is technically engineered for search dominance."
        },
        {
            title: "2. On-Page & Content Audit",
            icon: <FileText size={32} />,
            desc: "Content without structure is invisible. Structure without intent is ineffective.",
            points: [
                "Keyword mapping & search intent alignment",
                "Meta titles & descriptions optimization",
                "Header hierarchy & content depth",
                "Internal linking architecture",
                "Thin, duplicate & outdated content",
                "Content gap vs competitors",
                "E-E-A-T signals enhancement"
            ],
            footer: "Our goal is to align your content with how modern search engines interpret relevance and authority."
        },
        {
            title: "3. Off-Page & Authority Audit",
            icon: <Link2 size={32} />,
            desc: "Authority determines ranking power.",
            points: [
                "Backlink quality & toxicity",
                "Domain authority benchmarks",
                "Anchor text distribution",
                "Referring domain analysis",
                "Competitor link profile comparison"
            ],
            footer: "At Adkryoss managed by Clink Consultancy Services Private Limited, we don’t just analyze links — we map authority-building opportunities."
        },
        {
            title: "4. UX & Conversion Audit",
            icon: <MousePointer2 size={32} />,
            desc: "SEO is no longer just about rankings. It’s about behavior.",
            points: [
                "Bounce rate patterns",
                "User journey mapping",
                "CTA placements",
                "Page engagement metrics",
                "Conversion funnel gaps"
            ],
            footer: "Because traffic without conversion is wasted visibility."
        }
    ];

    const differentiators = [
        "Action-priority roadmap",
        "Revenue-impact scoring",
        "Competitive benchmarking",
        "90-day optimization plan",
        "Scalability recommendations"
    ];

    const tools = [
        "Google Search Console",
        "Google Analytics 4",
        "Screaming Frog",
        "SEMrush / Ahrefs",
        "PageSpeed Insights",
        "Schema Validators",
        "Heatmap & Behavior Tracking Tools"
    ];

    const industries = [
        { name: "E-commerce & D2C", icon: <ShoppingBag size={24} /> },
        { name: "Healthcare & Pharma", icon: <Heart size={24} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={24} /> },
        { name: "Real Estate", icon: <Building2 size={24} /> },
        { name: "SaaS & Tech", icon: <Code size={24} /> },
        { name: "Corporate Enterprises", icon: <Globe size={24} /> }
    ];

    const auditProcess = [
        "Discovery & Business Understanding",
        "Full-Site Data Crawl",
        "Competitor Intelligence Mapping",
        "Multi-Layered Audit Execution",
        "Strategic Presentation & Roadmap Discussion"
    ];

    const deliverables = [
        "Comprehensive SEO Audit Report (Technical + Content + Authority)",
        "Issue Severity Classification",
        "Keyword Opportunity Matrix",
        "Competitor SWOT Snapshot",
        "Page-Level Optimization Recommendations",
        "Actionable Fix Roadmap"
    ];

    const whenToAudit = [
        "Traffic decline after algorithm update",
        "Website redesign or migration",
        "Launching a new SEO campaign",
        "Poor keyword rankings",
        "Low conversions despite traffic",
        "Preparing for aggressive scaling"
    ];

    return (
        <div style={{ backgroundColor: '#fff' }}>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            SEO Audit Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Uncover. Fix. Outrank.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            Your traffic drop isn’t random. Your competitors aren’t lucky. Growth starts with clarity — and clarity starts with a powerful SEO Audit.
                        </p>
                        <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we go beyond surface-level checks. We uncover hidden technical issues, content gaps, structural weaknesses, and authority leaks that silently block your rankings.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </a>
                            <a
                                href="#services"
                                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={seoaudithero}
                                alt="SEO Audit"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Audit Section */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">
                                Why Your Website Needs an Advanced SEO Audit
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                Search engines evolve constantly. Algorithms shift. User behavior changes. Competitors optimize daily.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                If your website isn’t technically sound, strategically structured, and content-optimized, you are leaving revenue on the table.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                                An in-depth SEO audit helps you:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Identify ranking barriers",
                                    "Fix crawl and indexing issues",
                                    "Improve page speed & Core Web Vitals",
                                    "Strengthen keyword targeting",
                                    "Enhance user experience signals",
                                    "Discover missed traffic opportunities"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[12px] items-center">
                                        <CheckCircle2 size={20} className="text-[#0066cc]" />
                                        <span className="text-[16px] font-medium text-[#334155]">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-[30px] p-[20px] bg-[#e0f2fe] rounded-[12px] text-[#0284c7] font-medium">
                                This isn’t a checklist audit. It’s a performance blueprint.
                            </div>
                        </div>
                        <div className="bg-[#f8fafc] p-[40px] rounded-[30px] border border-[#e2e8f0]">
                            <h3 className="text-[24px] font-semibold mb-[30px] text-[#0f172a]">Deliverables You Receive</h3>
                            <ul className="space-y-4">
                                {deliverables.map((item, i) => (
                                    <li key={i} className="flex gap-[10px] text-[16px] text-[#475569] font-medium">
                                        <CheckCircle2 size={20} className="text-[#0066cc]" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-[30px] text-center font-semibold text-[#0f172a]">
                                No fluff. No generic PDFs. Only actionable insights.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-[80px] bg-[#f8fafc]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-[#0f172a]">Our Strategic SEO Audit Framework</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 max-w-[800px] mx-auto font-medium">
                            We follow a data-first, performance-driven methodology inspired by enterprise-grade digital agencies — but tailored for scalable growth.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[40px]">
                        {auditFramework.map((phase, i) => (
                            <div
                                key={i}
                                className="w-[calc(50%-20px)] min-w-[320px] bg-white p-[40px] rounded-[24px] border border-[#e2e8f0] transition-all duration-300 grow max-w-[550px] group hover:-translate-y-[5px] hover:border-[#0066cc] hover:shadow-[0_10px_30px_rgba(0,102,204,0.1)]"
                            >
                                <div className="text-[#0066cc] mb-[20px]">{phase.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-[16px] text-[#0f172a]">{phase.title}</h3>
                                <p className="text-[16px] text-[#475569] mb-[24px] font-medium">{phase.desc}</p>
                                <ul className="space-y-3 mb-6">
                                    {phase.points.map((pt, idx) => (
                                        <li key={idx} className="flex gap-[10px] text-[15px] text-[#334155]">
                                            <div className="w-[6px] h-[6px] bg-[#0066cc] rounded-full mt-[8px] shrink-0"></div>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[15px] text-[#0066cc] italic font-medium">{phase.footer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-[80px] bg-[#0f172a] text-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-white">What Makes Our SEO Audit Different</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium">
                            Most agencies generate automated reports. We deliver strategic intelligence.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[30px] mb-[50px]">
                        {differentiators.map((diff, i) => (
                            <div
                                key={i}
                                className="px-[32px] py-[24px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[15px] text-[18px] font-medium text-[#60a5fa] transition-all duration-300 hover:border-[#fff] hover:-translate-y-[5px]"
                            >
                                {diff}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] md:text-[18px] mb-6 text-white italic font-medium">
                            Adkryoss managed by Clink Consultancy Services Private Limited approaches SEO as a growth system — not a one-time activity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries We Audit */}
            <section className="py-[80px] bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-[20px] text-[#0f172a]">Industries We Audit</h2>
                    <div className="flex flex-wrap justify-center gap-[30px] mb-[40px]">
                        {industries.map((ind, i) => (
                            <div
                                key={i}
                                className="px-[40px] py-[24px] bg-[#f8fafc] rounded-[15px] border border-[#e2e8f0] flex items-center gap-[15px] transition-all duration-300 hover:border-[#0066cc] hover:-translate-y-[5px]"
                            >
                                <div className="text-[#0066cc]">{ind.icon}</div>
                                <span className="text-[18px] font-semibold text-[#0f172a]">{ind.name}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                        Every industry has unique search behavior. Our audit frameworks adapt accordingly.
                    </p>
                </div>
            </section>

            {/* When to Audit */}
            <section className="py-[80px] bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-[#0f172a]">When Should You Get an SEO Audit?</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[30px] mb-[40px]">
                        {whenToAudit.map((item, i) => (
                            <div
                                key={i}
                                className="px-[30px] py-[20px] bg-white rounded-[12px] border border-[#cbd5e1] text-[16px] font-medium text-[#334155] flex items-center gap-[10px] transition-all duration-300 hover:border-[#0066cc] hover:-translate-y-[5px]"
                            >
                                <Zap size={20} className="text-[#ef4444]" />
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            If any of these sound familiar, your website needs immediate evaluation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-[80px] bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-[40px] text-[#0f172a]">Tools We Use</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                        We combine industry-leading platforms with manual expertise:
                    </p>
                    <div className="flex flex-wrap justify-center gap-[30px] mb-[40px]">
                        {tools.map((tool, i) => (
                            <span
                                key={i}
                                className="text-[18px] font-medium text-[#0f172a] px-[30px] py-[15px] bg-[#f8fafc] rounded-[50px] border border-[#e2e8f0] transition-all duration-300 hover:border-[#0066cc] hover:-translate-y-[5px]"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                        Data is powerful — but interpretation drives results.
                    </p>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-[80px] bg-[#f8fafc]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-[#0f172a]">Our Process</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[30px] mb-[40px]">
                        {auditProcess.map((step, i) => (
                            <div
                                key={i}
                                className="px-[40px] py-[30px] bg-white rounded-[20px] border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] relative"
                            >
                                <div className="absolute top-[-15px] left-[30px] bg-[#0066cc] text-white w-[30px] h-[30px] rounded-full flex items-center justify-center font-semibold">
                                    {i + 1}
                                </div>
                                <h4 className="text-[18px] font-semibold text-[#0f172a]">{step}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] md:text-[18px] mb-6 italic text-black font-medium">
                            At Adkryoss managed by Clink Consultancy Services Private Limited, we collaborate, explain, and guide — not just report.
                        </p>
                    </div>
                </div>
            </section>



            {/* CTA */}
            <section className="py-[100px] text-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-[24px] text-white">Let’s Diagnose Before You Invest More</h2>
                    <p className="text-[22px] mb-[20px] text-[#cbd5e1] max-w-[800px] mx-auto font-medium">
                        Stop spending on ads while your foundation leaks traffic.
                    </p>
                    <p className="text-[22px] mb-[20px] text-[#cbd5e1] max-w-[800px] mx-auto font-medium">
                        Stop publishing content without structural clarity.
                    </p>
                    <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium max-w-[800px] mx-auto">
                        Stop guessing. Get a data-backed SEO audit that reveals what's holding your growth back.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-[12px] bg-[#0066cc] text-white py-[20px] px-[60px] rounded-[50px] text-[20px] font-bold no-underline transition-all duration-300 hover:-translate-y-[5px] hover:scale-[1.05]"
                    >
                        Book Your SEO Audit Consultation Today <ArrowRight size={24} />
                    </Link>
                    <p className="text-[16px] md:text-[18px] mb-6 mt-[40px] text-white font-medium">
                        Your competitors are optimizing daily. The question is — are you?
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SEOAudit;
