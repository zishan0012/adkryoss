import React from 'react';
import { Link } from 'react-router-dom';
import {
    Users,
    Shield,
    Zap,
    BarChart3,
    Cog,
    CheckCircle2,
    Globe,
    ArrowRight,
    Search,
    Settings,
    FileText,
    Link2,
    MapPin,
    Cpu,
    TrendingUp,
    Briefcase
} from 'lucide-react';

const WhiteLabelSEOServices = () => {
    const framework = [
        {
            icon: <Search size={32} />,
            title: "Strategic SEO Audit & Opportunity Mapping",
            points: ["Technical health analysis", "Competitor benchmarking", "Keyword opportunity clusters", "SERP intent mapping", "Content gap analysis", "Authority profiling"]
        },
        {
            icon: <Zap size={32} />,
            title: "Advanced Keyword & Intent Strategy",
            points: ["Search intent clusters", "Semantic SEO", "Topic authority building", "Entity optimization", "Conversational and AI search readiness"]
        },
        {
            icon: <Settings size={32} />,
            title: "Technical SEO Optimization",
            points: ["Core Web Vitals", "Crawlability & Indexation", "Structured Data (Schema)", "Mobile-first performance", "URL structures", "Server log analysis"]
        },
        {
            icon: <FileText size={32} />,
            title: "On-Page & Content Optimization",
            points: ["SEO-optimized landing pages", "Conversion-focused content", "Content silos & clusters", "E-E-A-T alignment", "Internal linking architecture"]
        },
        {
            icon: <Link2 size={32} />,
            title: "Ethical & Authority Link Building",
            points: ["Niche authority outreach", "Editorial placements", "Digital PR-driven mentions", "Contextual backlinks", "Anchor text strategy"]
        },
        {
            icon: <MapPin size={32} />,
            title: "Local SEO & Multi-Location",
            points: ["Google Business Profile", "Local citation building", "Location page strategy", "Reputation signals", "Hyperlocal keyword mapping"]
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Transparent White Label Reporting",
            points: ["Branded SEO reports", "Keyword ranking dashboards", "Traffic growth tracking", "Conversion metrics", "Backlink acquisition reports"]
        }
    ];

    const audiences = [
        "Digital Marketing Agencies",
        "Web Development Companies",
        "Branding Agencies",
        "Performance Marketing Firms",
        "Freelance Consultants",
        "SaaS Growth Teams"
    ];

    return (
        <div className="bg-white text-slate-900">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-16 h-120 md:py-20 flex items-center relative overflow-hidden text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[48px] font-bold mb-4 tracking-[-1.5px] text-white leading-[1.1]">
                            White Label SEO Services
                        </h1>
                        <h3 className="text-[24px] font-medium mb-6 text-white">
                            Scale Faster. Deliver Better. Grow Without Hiring.
                        </h3>
                        <p className="text-[18px] leading-[1.8] text-white mb-8">
                            Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span> delivers fully managed White Label SEO solutions for agencies and consultants who want to scale revenue without operational complexity.
                        </p>
                        <div className="flex gap-5 flex-wrap">
                            <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                                <CheckCircle2 size={20} className="text-black" /> <span className="text-white font-medium">100% Confidential</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                                <CheckCircle2 size={20} className="text-black" /> <span className="text-white font-medium">Scalable Models</span>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/11/white-Label-seo-services.webp"
                            alt="White Label SEO"
                            className="max-w-[450px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-6 leading-tight">
                                Why Choose White Label SEO?
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8 text-[17px]">
                                Building a skilled in-house SEO team requires senior strategists, technical experts, and content teams. That's expensive and slow.
                            </p>
                            <ul className="list-none p-0 space-y-4">
                                {[
                                    "Expand service offerings instantly",
                                    "Deliver enterprise-grade SEO under your brand",
                                    "Increase profit margins",
                                    "Reduce operational overhead",
                                    "Focus on client acquisition"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-[16px] font-bold text-slate-800 transition-all duration-300 hover:translate-x-2 group">
                                        <Shield size={20} className="text-[#0066CC] shrink-0 transition-transform group-hover:scale-110" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-12 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
                            <p className="text-[24px] font-bold text-slate-900 leading-tight m-0">
                                We handle execution.<br />
                                <span className="text-[#0066CC] text-[32px] block mt-2">You own the client.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <h2 className="text-[42px] font-bold text-center mb-16 text-slate-900 leading-tight">
                        Our White Label SEO Framework
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {framework.map((step, i) => (
                            <div key={i} className="bg-white p-10 border border-slate-100 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.12)] hover:border-[#0066CC] group w-full md:w-[calc(33.333%-22px)] min-w-[320px] max-w-[400px]">
                                <div className="text-[#0066CC] mb-6 group-hover:scale-110 transition-transform">{step.icon}</div>
                                <h3 className="text-[22px] font-bold mb-6 text-slate-900 group-hover:text-[#0066CC] transition-colors">{step.title}</h3>
                                <ul className="list-none p-0 space-y-4">
                                    {step.points.map((pt, idx) => (
                                        <li key={idx} className="text-[15px] text-slate-600 flex gap-3 leading-relaxed">
                                            <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform"></div>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-12 text-white leading-tight">Who We Work With</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {audiences.map((aud, i) => (
                            <div key={i} className="px-10 py-4 bg-white/5 rounded-full border border-white/10 font-bold transition-all duration-300 hover:bg-[#0066CC] hover:border-[#0066CC] hover:scale-105 hover:shadow-xl hover:shadow-blue-600/20 cursor-default">
                                {aud}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner */}
            <section className="py-24 bg-white">
                <div className="container">
                    <h2 className="text-[42px] font-bold text-center mb-16 text-slate-900 leading-tight">Why Partner with Adkryoss?</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "Strategic, Not Just Executional", desc: "We think like growth consultants — not task executors." },
                            { title: "Algorithm-Aware & AI-Ready", desc: "Aligning with SGE trends, AI search, and semantic indexing." },
                            { title: "Dedicated Account Managers", desc: "Dedicated strategist to streamline communication." },
                            { title: "100% Confidentiality", desc: "Strict NDA-backed operations. Complete brand invisibility." }
                        ].map((item, i) => (
                            <div key={i} className="flex-1 min-w-[280px] max-w-[350px] p-10 bg-slate-50 rounded-3xl border border-transparent transition-all duration-300 hover:bg-white hover:border-[#0066CC] hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10 group text-center">
                                <h3 className="text-[20px] font-bold mb-4 text-slate-900 group-hover:text-[#0066CC] transition-colors">{item.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed m-0">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-center bg-gradient-to-br from-[#0066CC] to-[#004999] text-white">
                <div className="container">
                    <h2 className="text-[42px] font-bold mb-6 text-white leading-tight">
                        Ready to Scale Without Expanding Your Team?
                    </h2>
                    <p className="text-[20px] mb-12 text-[#eff6ff] opacity-90 max-w-[800px] mx-auto leading-relaxed font-medium">
                        Partner with Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span> and transform your agency into a scalable digital powerhouse.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066CC] py-5 px-12 rounded-xl text-[18px] font-bold no-underline transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:scale-105 hover:shadow-white/20">
                        Become a Partner
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WhiteLabelSEOServices;
