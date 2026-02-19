import React from 'react';
import { Link } from 'react-router-dom';
import {
    Brain,
    Search,
    Zap,
    Target,
    BarChart3,
    Shield,
    ArrowRight,
    Globe,
    Settings,
    Cpu,
    Database,
    Network,
    MessageSquare,
    CheckCircle2,
    TrendingUp,
    LineChart
} from 'lucide-react';
import aiseo from '../../../assets/SEO/aiseohero.jpeg';
const AISEO = () => {

    const aiFramework = [
        {
            title: "AI-Powered Search Intelligence & Audit",
            icon: <Database size={32} />,
            desc: "Before scaling traffic, we decode your search ecosystem.",
            points: [
                "AI-driven keyword clustering & semantic mapping",
                "Entity-based search analysis",
                "SERP volatility tracking",
                "Competitor AI visibility audit",
                "Search intent heat mapping"
            ],
            extra: "We analyze how AI engines interpret your niche and uncover ranking gaps your competitors haven’t identified yet."
        },
        {
            title: "Predictive Keyword & Topic Engineering",
            icon: <TrendingUp size={32} />,
            desc: "We move beyond static keywords using machine learning insights.",
            points: [
                "Conversational query targeting",
                "Long-tail predictive keyword models",
                "Topic clusters built around user journeys",
                "Voice-search optimization mapping",
                "Featured snippet & AI summary targeting"
            ],
            extra: "This ensures your content ranks not just today — but adapts to tomorrow’s search patterns."
        },
        {
            title: "AI-Optimized Content Architecture",
            icon: <Network size={32} />,
            desc: "Modern SEO is about structured intelligence.",
            points: [
                "NLP-optimized content creation",
                "Entity-driven internal linking systems",
                "Topical authority building",
                "Structured data & schema implementation",
                "AI-readability & answer extraction optimization"
            ],
            extra: "We design content frameworks that make it easier for AI systems to understand, rank, and extract your brand as a trusted source."
        },
        {
            title: "Technical AI SEO Optimization",
            icon: <Settings size={32} />,
            desc: "Search engines prioritize experience signals and AI interpretability.",
            points: [
                "Core Web Vitals & UX signals",
                "Crawl budget intelligence",
                "AI-friendly site architecture",
                "Log file analysis",
                "Indexation strategy modeling",
                "Programmatic SEO systems"
            ],
            extra: "Our technical layer ensures your website is not just fast — but machine-intelligent."
        },
        {
            title: "Authority & Digital Entity Building",
            icon: <Shield size={32} />,
            desc: "AI search values trusted digital entities.",
            points: [
                "Brand entity recognition",
                "E-E-A-T optimization",
                "AI-driven digital PR",
                "Data-backed backlink acquisition",
                "Knowledge panel enhancement",
                "Semantic citation ecosystem"
            ],
            extra: "This strengthens your brand presence across AI knowledge graphs and organic search networks."
        }
    ];

    const aiServices = [
        { title: "Enterprise AI SEO", desc: "Scalable, data-driven organic strategies for large websites with complex architecture.", icon: <Globe size={24} /> },
        { title: "E-commerce AI SEO", desc: "Optimized product visibility across AI summaries, shopping search, and voice commerce.", icon: <Search size={24} /> },
        { title: "Local AI SEO", desc: "Hyper-local semantic optimization for maps, voice queries, and near-me searches.", icon: <Target size={24} /> },
        { title: "B2B AI SEO", desc: "Decision-journey-based optimization to attract high-intent corporate audiences.", icon: <BarChart3 size={24} /> },
        { title: "Generative Search Optimization (GSO)", desc: "Position your content for AI-generated answers and zero-click environments.", icon: <Cpu size={24} /> }
    ];

    const workingModel = [
        { step: "Step 1: Discovery & Data Mapping", desc: "We decode your market, competition, and AI search behavior." },
        { step: "Step 2: Strategy Blueprint", desc: "Custom AI SEO roadmap aligned with business objectives." },
        { step: "Step 3: Intelligent Implementation", desc: "On-page, technical, and authority-building executed through AI-enhanced processes." },
        { step: "Step 4: Continuous Optimization", desc: "We refine strategies using real-time analytics, machine learning insights, and performance modeling." },
        { step: "Step 5: Transparent Reporting", desc: "Actionable dashboards, predictive metrics, and measurable ROI tracking." }
    ];

    return (
        <div>
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
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1px] text-white">
                            AI SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Rank Beyond Keywords. Dominate AI-Driven Search Ecosystems.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            Search is no longer just about Google rankings. It’s about visibility across AI engines, voice assistants, zero-click results, and generative search experiences.
                        </p>
                        <div className="p-0  mb-4">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span> delivers next-generation AI SEO solutions that help businesses become discoverable across modern search landscapes.
                            </p>
                        </div>
                        {/* <p className="text-[16px] md:text-[18px] mb-6 font-medium text-white">
                            We combine human expertise with machine intelligence to build scalable, future-ready SEO systems.
                        </p> */}

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
                                src={aiseo}
                                alt="AI SEO Services"
                                className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why AI SEO Section */}
            <section className="py-[80px] bg-white">
                <div className="container">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[50px] items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">
                                Why AI SEO is the Future of Organic Growth
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                Search behavior has fundamentally changed. Traditional SEO focuses on ranking pages. AI SEO focuses on becoming the answer.
                            </p>
                            <div className="flex flex-col gap-[20px]">
                                {[
                                    "AI-powered search engines summarize answers.",
                                    "Users rely on voice queries and conversational search.",
                                    "Google’s Search Generative Experience (SGE) reshapes rankings.",
                                    "Content is evaluated through semantic relevance, not just keywords."
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[15px] items-start">
                                        <div className="w-6 h-6 bg-[#eff6ff] rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]">
                                            <Zap size={14} className="text-[#3b82f6]" />
                                        </div>
                                        <p className="text-[16px] font-medium text-[#334155] m-0">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#f8fafc] p-[40px] rounded-[30px] border border-[#e2e8f0] text-center shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
                            <Brain size={64} className="text-[#3b82f6] mb-[24px] mx-auto" />
                            <p className="text-[18px] text-[#475569] leading-[1.8] m-0 font-medium">
                                At Adkryoss managed by Clink Consultancy Services pvt.ltd, we engineer SEO strategies that align with how AI algorithms interpret, rank, and recommend content in real time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-[80px] bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-[#0f172a]">
                            Our AI SEO Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            We don’t run campaigns. We build intelligent organic growth systems.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {aiFramework.map((step, i) => (
                            <div key={i} className="bg-white p-[40px] rounded-[24px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-[#e2e8f0] w-[calc(33.333%-20px)] min-w-[320px] flex-grow max-w-[400px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer group hover:-translate-y-[12px] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] hover:border-[#3b82f6]">
                                <div className="text-[#3b82f6] mb-[20px]">{step.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-[15px] text-[#0f172a]">
                                    {i + 1}. {step.title}
                                </h3>
                                <p className="text-[15px] text-[#64748b] mb-[20px] leading-[1.6] font-medium">{step.desc}</p>
                                <ul className="list-none p-0 mb-[20px]">
                                    {step.points.map((pt, idx) => (
                                        <li key={idx} className="flex gap-[10px] mb-[20px] text-[14px] text-[#334155]">
                                            <CheckCircle2 size={16} className="text-[#3b82f6] flex-shrink-0 mt-[2px]" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[14px] text-[#3b82f6] font-medium p-[15px] bg-[#eff6ff] rounded-[12px] m-0">
                                    {step.extra}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI SEO Services List */}
            <section className="py-[80px] bg-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-[#0f172a]">
                        AI SEO Services We Offer
                    </h2>
                    <div className="flex flex-wrap justify-center gap-[20px]">
                        {aiServices.map((service, i) => (
                            <div key={i} className="p-[30px] bg-[#f8fafc] rounded-[20px] border border-[#e2e8f0] w-[calc(33.333%-14px)] min-w-[300px] flex-grow max-w-[380px] transition-all duration-300 group hover:bg-white hover:border-[#3b82f6] hover:-translate-y-[10px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                                <div className="text-[#3b82f6] mb-[15px]">{service.icon}</div>
                                <h3 className="text-[20px] font-semibold mb-[12px] text-[#0f172a]">{service.title}</h3>
                                <p className="text-[#475569] text-[15px] leading-[1.6] m-0 font-medium">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Model */}
            <section className="py-[80px] bg-[#0f172a] text-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-white">How We Work</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium">
                            At Adkryoss managed by Clink Consultancy Services Private Limited, our working model is structured, transparent, and performance-led.
                        </p>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[20px]">
                        {workingModel.map((item, i) => (
                            <div key={i} className="p-[30px] bg-[rgba(255,255,255,0.05)] rounded-[15px] border border-[rgba(255,255,255,0.1)] text-center">
                                <h3 className="text-[18px] font-semibold mb-[15px] text-[#3b82f6]">{item.step}</h3>
                                <p className="text-[#cbd5e1] text-[14px] leading-[1.6] m-0 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[80px] bg-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-[#0f172a]">
                        Why Choose Adkryoss for AI SEO?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-[20px]">
                        {[
                            "AI-first strategy, not traditional SEO repackaged",
                            "Data-backed decision making",
                            "Enterprise-grade analytics tools",
                            "Performance-driven execution",
                            "Continuous algorithm adaptation",
                            "Scalable growth systems"
                        ].map((item, i) => (
                            <div key={i} className="py-[20px] px-[30px] bg-[#f8fafc] rounded-[12px] flex items-center gap-[15px] w-[calc(33.333%-14px)] min-w-[280px] flex-grow max-w-[380px] border border-[#e2e8f0] transition-all duration-300 group hover:border-[#3b82f6] hover:scale-[1.03] hover:bg-white">
                                <CheckCircle2 size={20} className="text-[#3b82f6]" />
                                <span className="font-semibold text-[#0f172a]">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-[50px]">
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            We don’t chase algorithm updates. We build systems that evolve with them.
                        </p>
                    </div>
                </div>
            </section>

            {/* Future of SEO */}
            <section className="py-[80px] bg-[#f1f5f9]">
                <div className="container">
                    <div className="max-w-[900px] mx-auto text-center">
                        <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">
                            The Future of SEO is Intelligent
                        </h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[20px] mb-[40px]">
                            {["Context over keywords", "Authority over volume", "Experience over density", "Entities over isolated pages"].map((txt, i) => (
                                <div key={i} className="p-[20px] bg-white rounded-[12px] font-semibold text-[#0f172a] shadow-[0_4px_6px_rgba(0,0,0,0.05)]">
                                    {txt}
                                </div>
                            ))}
                        </div>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                            Businesses that adapt early dominate visibility. If your SEO strategy still relies on outdated tactics, your growth will plateau.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-[100px] text-center bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-[24px] text-white">
                        Let’s Build AI-Powered Organic Growth
                    </h2>
                    <p className="text-[22px] mb-[40px] max-w-[800px] mx-auto text-[#eff6ff] font-medium">
                        Search is evolving. Your strategy should too. Partner with Adkryoss managed by Clink Consultancy Services Private Limited, to future-proof your organic presence.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-[12px] bg-white text-[#2563eb] py-[20px] px-[50px] rounded-[50px] text-[18px] font-bold no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-[5px] hover:scale-[1.05]">
                        Start Your AI SEO Journey
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AISEO;
