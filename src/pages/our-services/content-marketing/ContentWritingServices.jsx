import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    Target,
    BarChart3,
    Search,
    Zap,
    Users,
    Globe,
    Shield,
    CheckCircle2,
    ArrowRight,
    MessageCircle,
    TrendingUp,
    Bookmark,
    Layers,
    ShoppingCart,
    GraduationCap,
    Heart,
    Building2,
    Briefcase,
    Rocket,
    Brain,
    MousePointer2,
    PenTool,
    Layout,
    Cpu
} from 'lucide-react';
import contentwriting from "../../../assets/content-marketing/contentwritinghero.png";
const ContentWritingServices = () => {
    const expertise = [
        {
            icon: <Search size={32} />,
            title: "1. SEO Content Writing",
            desc: "Search-first content designed to rank and sustain authority.",
            points: [
                "Keyword strategy & search intent mapping",
                "Pillar pages & topic clusters",
                "On-page optimization (EEAT aligned)",
                "Schema-ready content structures",
                "Featured snippet targeting"
            ]
        },
        {
            icon: <Layout size={32} />,
            title: "2. Website Content Development",
            desc: "High-impact web content that communicates value instantly.",
            points: [
                "Homepage & service pages",
                "About us & brand story",
                "Landing pages for paid campaigns",
                "Conversion-focused CTAs",
                "UX-driven microcopy"
            ]
        },
        {
            icon: <PenTool size={32} />,
            title: "3. Blog & Thought Leadership Content",
            desc: "Authority-building articles that position your brand as an industry voice.",
            points: [
                "Industry insights & trend analysis",
                "Data-backed long-form content",
                "Educational & evergreen resources",
                "B2B & B2C thought leadership"
            ]
        },
        {
            icon: <ShoppingCart size={32} />,
            title: "4. Product & E-commerce Content",
            desc: "Optimized for discoverability and conversions.",
            points: [
                "Product descriptions",
                "Category pages",
                "Buying guides",
                "Comparison pages"
            ]
        },
        {
            icon: <Zap size={32} />,
            title: "5. Social & Performance Content",
            desc: "Content built for engagement and paid amplification.",
            points: [
                "Ad copies (Meta, Google, LinkedIn)",
                "Social captions & scripts",
                "Video & reel scripts",
                "Performance-driven messaging"
            ]
        }
    ];

    const steps = [
        {
            step: "Step 1",
            title: "Research & Competitive Benchmarking",
            points: [
                "Competitor content gap analysis",
                "SERP analysis",
                "Audience persona mapping",
                "Intent-based keyword clustering"
            ]
        },
        {
            step: "Step 2",
            title: "Content Architecture & Planning",
            points: [
                "Funnel-based content mapping",
                "Pillar-cluster structure",
                "Editorial calendar creation",
                "Content KPI alignment"
            ]
        },
        {
            step: "Step 3",
            title: "Creation & Optimization",
            points: [
                "SEO-driven drafting",
                "Readability & engagement optimization",
                "Internal linking strategy",
                "Conversion optimization (CRO) alignment"
            ]
        },
        {
            step: "Step 4",
            title: "Distribution & Performance Tracking",
            points: [
                "Publishing optimization",
                "Ranking & traffic tracking",
                "Engagement metrics analysis",
                "Continuous content refinement"
            ]
        }
    ];

    const industries = [
        "Education & EdTech",
        "Healthcare & Wellness",
        "E-commerce & D2C",
        "IT & SaaS",
        "Real Estate",
        "Finance & FinTech",
        "Recruitment & HR"
    ];

    const differentiators = [
        {
            icon: <Brain size={24} />,
            title: "Data-Led Creativity",
            desc: "Creativity backed by analytics, not assumptions."
        },
        {
            icon: <Target size={24} />,
            title: "Search + Conversion Synergy",
            desc: "Content that ranks and converts—simultaneously."
        },
        {
            icon: <Layers size={24} />,
            title: "Integrated Marketing Alignment",
            desc: "SEO, PPC, Social Media, and Content operate under one cohesive strategy at Adkryoss managed by Clink Consultancy Services Private Limited."
        },
        {
            icon: <Cpu size={24} />,
            title: "Future-Ready Content",
            subtitle: "Optimized for:",
            items: ["Voice search", "AI-driven search algorithms", "Zero-click searches", "Generative search experiences"]
        }
    ];

    return (
        <div className="bg-white text-slate-900">
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
                            Content Writing Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Words That Don’t Just Rank. They Convert.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white font-medium">
                            Strategic, search-optimized and conversion-driven content crafted to build authority, attract the right audience, and turn attention into measurable growth.
                        </p>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            At Adkryoss managed by <span className="font-semibold text-white">Clink Consultancy Services Private Limited</span>, we create high-performance content ecosystems that fuel SEO, paid campaigns, social media, and brand positioning—under one unified strategy.
                        </p>

                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={contentwriting}
                                alt="Content Writing Services"
                                className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Content is Growth Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">
                            Why Content is the Growth Engine of Modern Brands
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            In today’s digital economy, content is not just communication—it’s infrastructure.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 mb-12 transition-all duration-300 hover:shadow-xl">
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                It influences search visibility, buyer trust, conversion rates, retention, and even investor perception. Businesses that treat content as a strategic asset dominate search results and customer conversations.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                At Adkryoss managed by <span className="font-semibold text-[#0066CC]">Clink Consultancy Services Private Limited</span>, we design content frameworks aligned with search intent, audience psychology, and funnel stages—so every piece has a purpose.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 bg-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">Our Content Writing Expertise</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            We don’t write for word count. We write for performance.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {expertise.map((item, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 rounded-2xl p-8 transition-all duration-300 w-full md:w-[calc(33.333%-27px)] min-w-[300px] max-w-[400px] grow cursor-pointer group hover:border-[#0066CC] hover:-translate-y-3 hover:shadow-[0_20px_40_rgba(0,102,204,0.15)] flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#004999] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="text-4xl font-semibold text-slate-100 group-hover:text-blue-50 transition-colors">0{index + 1}</span>
                                </div>
                                <h3 className="text-[22px] font-semibold text-slate-900 mb-4 group-hover:text-[#0066CC] transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 mb-6 font-medium italic leading-relaxed">
                                    "{item.desc}"
                                </p>
                                <div className="space-y-3 mt-auto">
                                    {item.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-[15px] text-slate-600 leading-relaxed">
                                            <CheckCircle2 size={18} className="text-[#0066CC] mt-0.5 shrink-0" />
                                            <span className="font-semibold">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold mb-5 leading-tight text-white">Our Approach: Strategy First. Words Next.</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-blue-400 font-medium italic">
                            Unlike traditional content agencies, we operate on a performance marketing framework.
                        </p>
                        <p className="text-[16px] md:text-[18px] mb-6 text-white max-w-3xl mx-auto font-medium">
                            At Adkryoss managed by <span className="font-semibold text-blue-400">Clink Consultancy Services Private Limited</span>, every content project follows a structured methodology:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((item, index) => (
                            <div key={index} className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="text-blue-500 font-extrabold text-xl mb-4 group-hover:scale-110 transition-transform">{item.step}</div>
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <div className="space-y-3">
                                    {item.points.map((p, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-white leading-relaxed">
                                            <Bookmark size={14} className="text-blue-500 mt-1 shrink-0" />
                                            <span>{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center text-white/20 text-white font-semibold italic">
                        "Content is not a one-time activity—it’s an ongoing growth engine."
                    </div>
                </div>
            </section>

            {/* Industry Section */}
            <section className="py-24 bg-white">
                <div className="container px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-8 leading-tight">Industries We Serve</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 font-medium">
                            We deliver domain-specific content expertise across:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {industries.map((industry, index) => (
                                <div key={index} className="px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-slate-900 transition-all hover:border-[#0066CC] hover:text-[#0066CC] hover:-translate-y-1">
                                    {industry}
                                </div>
                            ))}
                        </div>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 italic font-medium leading-[1.8]">
                            Our writers understand industry nuances, compliance sensitivity, and audience behavior across sectors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Differentiators Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6">What Makes Us Different</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {differentiators.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_4px_15_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-14 h-14 bg-blue-50 text-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0066CC] group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed mb-4 font-medium">
                                    {item.desc}
                                </p>
                                {item.subtitle && (
                                    <div className="mt-4 pt-4 border-t border-slate-100">
                                        <p className="text-xs font-medium text-slate-400 uppercase mb-3">{item.subtitle}</p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {item.items.map((it, idx) => (
                                                <span key={idx} className="bg-slate-50 text-[11px] font-bold px-2 py-1 rounded text-[#0066CC] border border-blue-100">✔ {it}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authority Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container px-6">
                    <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-br from-[#0066CC] to-[#004999] p-12 text-white relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <h2 className="text-[36px] font-bold mb-10 leading-tight">Content That Builds Authority, Not Just Traffic</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-xl font-medium text-white italic">
                                    "Ranking is important. But authority sustains growth."
                                </p>
                                <p className="text-[16px] md:text-[18px] mb-6 text-lg opacity-90 leading-relaxed text-white font-medium">
                                    We build topical authority through structured content clusters, semantic keyword integration, and value-first writing aligned with Google’s EEAT principles.
                                </p>
                                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                                    <p className="text-[22px] font-medium italic m-0 text-white">When your content educates, solves, and persuades—growth becomes predictable.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="bg-white/10 p-4 rounded-xl flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-black">✔</div>
                                    <span className="font-bold">Topical Dominance</span>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-black">✔</div>
                                    <span className="font-bold">Semantic Clustering</span>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-black">✔</div>
                                    <span className="font-bold">EEAT Alignment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white text-center relative px-6">
                <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-16 rounded-[40px] shadow-2xl group hover:border-blue-500/50 transition-all">
                    <h2 className="text-[36px] font-bold text-white mb-8 leading-tight">Let’s Build Your Content Engine</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white max-w-2xl mx-auto leading-[1.8] font-medium">
                        If your website is not converting traffic into revenue, the problem isn’t traffic. <br />
                        <span className="text-white font-bold italic">It’s messaging, structure, and strategic alignment.</span>
                    </p>
                    <p className="text-[16px] md:text-[18px] mb-6 text-lg text-white italic font-medium">
                        Partner with <span className="font-black text-blue-400">Adkryoss managed by Clink Consultancy Services Private Limited</span> and transform your content into a scalable growth asset.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-12 border-t border-white/10">
                        <div className="text-left md:text-right">
                            <p className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-2">Next Step</p>
                            <h3 className="text-[20px] md:text-[24px] mb-4 text-2xl font-semibold text-white leading-tight">
                                Ready to dominate search and influence decisions?
                            </h3>
                        </div>
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-blue-600 text-white py-6 px-12 rounded-2xl text-[20px] font-black transition-all duration-300 hover:bg-blue-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)]">
                            Create Content That Works
                            <ArrowRight size={22} />
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ContentWritingServices;
