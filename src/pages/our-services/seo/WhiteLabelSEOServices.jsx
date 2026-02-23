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
    TrendingUp
} from 'lucide-react';
import whitelevelseoservices from '../../../assets/SEO/whitelevelseohero.jpeg';
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
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            White Label SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Scale Faster. Deliver Better. Grow Without Hiring.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            Looking to expand your digital marketing offerings without building <br />an in-house SEO team?
                        </p>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span> delivers fully managed White Label SEO solutions for agencies and consultants who want to scale revenue without operational complexity.
                        </p>

                        {/* <div className="flex gap-5 flex-wrap">
                            <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                                <CheckCircle2 size={20} className="text-black" /> <span className="text-white font-medium">100% Confidential</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                                <CheckCircle2 size={20} className="text-black" /> <span className="text-white font-medium">Scalable Models</span>
                            </div>
                        </div> */}

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
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={whitelevelseoservices}
                                alt="White Label SEO Services"
                                className="max-w-[500px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-6 leading-tight">
                                Why Choose White Label SEO?
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8 text-[17px] font-medium">
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
                            <p className="text-[24px] font-medium text-slate-900 leading-tight m-0">
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
                    <h2 className="text-[36px] font-bold text-center mb-16 text-slate-900 leading-tight">
                        Our White Label SEO Framework
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {framework.map((step, i) => (
                            <div key={i} className="bg-white p-10 border border-slate-100 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.12)] hover:border-[#0066CC] group w-full md:w-[calc(33.333%-22px)] min-w-[320px] max-w-[400px]">
                                <div className="text-[#0066CC] mb-6 group-hover:scale-110 transition-transform">{step.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-6 text-slate-900 group-hover:text-[#0066CC] transition-colors">{step.title}</h3>
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
                    <h2 className="text-[36px] font-bold text-center mb-16 text-slate-900 leading-tight">Why Partner with Adkryoss?</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "Strategic, Not Just Executional", desc: "We think like growth consultants — not task executors." },
                            { title: "Algorithm-Aware & AI-Ready", desc: "Aligning with SGE trends, AI search, and semantic indexing." },
                            { title: "Dedicated Account Managers", desc: "Dedicated strategist to streamline communication." },
                            { title: "100% Confidentiality", desc: "Strict NDA-backed operations. Complete brand invisibility." }
                        ].map((item, i) => (
                            <div key={i} className="flex-1 min-w-[280px] max-w-[350px] p-10 bg-slate-50 rounded-3xl border border-transparent transition-all duration-300 hover:bg-white hover:border-[#0066CC] hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10 group text-center">
                                <h3 className="text-[20px] font-semibold mb-4 text-slate-900 group-hover:text-[#0066CC] transition-colors">{item.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed m-0 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Working Model */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-16 text-slate-900 leading-tight">
                        Our Working Model
                    </h2>
                    <div className="flex flex-wrap justify-center gap-0">
                        {[
                            { step: "Onboard Client", desc: "You onboard the client" },
                            { step: "Share Details", desc: "You share project details" },
                            { step: "Strategy & Roadmap", desc: "We create strategy & execution roadmap" },
                            { step: "Implementation", desc: "We implement SEO tasks" },
                            { step: "Branded Reports", desc: "You receive white-labeled reports" },
                            { step: "Client Results", desc: "Client sees results — under your brand" }
                        ].map((item, i, arr) => (
                            <div key={i} className="flex items-center">
                                <div className="flex flex-col items-center text-center p-6 w-[180px]">
                                    <div className="w-14 h-14 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold text-lg mb-4 shrink-0 shadow-lg shadow-blue-600/20">
                                        {i + 1}
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-[15px] mb-2">{item.step}</h4>
                                    <p className="text-[13px] text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                                {i < arr.length - 1 && (
                                    <ArrowRight size={20} className="text-[#0066CC]/30 mb-12 hidden lg:block" />
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-[20px] font-bold text-[#0066CC] mt-16 italic">
                        Simple. Structured. Scalable.
                    </p>
                </div>
            </section>

            {/* Technology & Tools */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-6 leading-tight">
                                Technology & Tools We Leverage
                            </h2>
                            <p className="text-slate-600 mb-8 text-[17px] font-medium leading-relaxed">
                                To ensure performance precision, we work with industry-leading technology that powers data-driven decisions.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Advanced SEO intelligence tools", icon: <Search size={20} /> },
                                    { title: "AI-powered keyword analysis systems", icon: <Cpu size={20} /> },
                                    { title: "Competitive SERP tracking platforms", icon: <TrendingUp size={20} /> },
                                    { title: "Technical auditing software", icon: <Settings size={20} /> },
                                    { title: "Analytics & conversion tracking integrations", icon: <BarChart3 size={20} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-transparent transition-all duration-300 hover:border-[#0066CC] hover:bg-white hover:shadow-lg hover:shadow-blue-900/5">
                                        <div className="text-[#0066CC]">{item.icon}</div>
                                        <span className="font-bold text-slate-800">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-[16px] font-semibold text-slate-900 border-l-4 border-[#0066CC] pl-4">
                                Data-driven decisions power every campaign.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-100/50 rounded-[40px] blur-2xl"></div>
                            <div className="relative bg-slate-900 rounded-[32px] p-10 overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-xl"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full -ml-16 -mb-16 blur-xl"></div>
                                <div className="space-y-6 relative">
                                    <h3 className="text-white text-xl font-bold mb-4">Precision Performance</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Our tech stack is designed to identify small shifts in search algorithms before they become major drops, ensuring your clients stay ahead of the curve.
                                    </p>
                                    <div className="pt-4 border-t border-slate-800">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-300 text-xs font-semibold">Crawl Efficiency</span>
                                            <span className="text-blue-400 text-xs font-bold">99.8%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-blue-600 h-full w-[99.8%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-300 text-xs font-semibold">Data Accuracy</span>
                                            <span className="text-blue-400 text-xs font-bold">100%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-blue-600 h-full w-[100%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-4 text-slate-900 leading-tight">
                        Results You Can Expect
                    </h2>
                    <p className="text-center text-slate-600 mb-16 text-[17px] font-medium max-w-[700px] mx-auto leading-relaxed">
                        With our White Label SEO partnership, agencies typically see measurable impact across their business and client portfolios.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Increased Client Retention", desc: "Keep clients longer with consistent search performance." },
                            { title: "Improved Search Visibility", desc: "Higher rankings across thousands of relevant keywords." },
                            { title: "Higher Organic Traffic", desc: "Sustainable growth in high-intent website visitors." },
                            { title: "Better Lead Generation", desc: "Transform search traffic into qualified business inquiries." },
                            { title: "Long-Term Ranking Stability", desc: "Protection against algorithm updates and competitors." },
                            { title: "Increased Recurring Revenue", desc: "Boost your agency's MRR with higher-value SEO packages." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#0066CC] group">
                                <CheckCircle2 size={24} className="text-[#0066CC] mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-[18px] font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-600 text-[14px] leading-relaxed m-0 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20 p-10 bg-white rounded-[32px] border border-blue-100 shadow-xl shadow-blue-900/5 text-center max-w-[900px] mx-auto">
                        <p className="text-[18px] text-slate-700 italic font-medium leading-relaxed m-0">
                            "SEO is not a short-term tactic. It's a long-term asset — and we build it strategically."
                        </p>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-24 text-center bg-gradient-to-br from-[#0066CC] to-[#004999] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-6 text-white leading-tight">
                        Ready to Scale Without Expanding Your Team?
                    </h2>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-90 max-w-[800px] mx-auto leading-relaxed font-medium text-white">
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
