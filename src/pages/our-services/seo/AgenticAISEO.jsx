import React from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    Zap,
    Target,
    ArrowRight,
    Cpu,
    CheckCircle2,
    TrendingUp,
    Sparkles,
    BrainCircuit,
    ShoppingCart,
    Heart,
    GraduationCap,
    Home,
    DollarSign
} from 'lucide-react';

const AgenticAISEO = () => {

    const agenticFramework = [
        {
            title: "1. AI-Driven Discovery",
            icon: <Search size={32} />,
            desc: "Discovery and opportunity mapping via intelligent agents.",
            points: [
                "Search intent cluster analysis",
                "High-impact semantic gap identification",
                "Competitor AI visibility mapping",
                "Algorithmic volatility detection"
            ]
        },
        {
            title: "2. Predictive Modeling",
            icon: <Target size={32} />,
            desc: "Modeling search behavior instead of just chasing keywords.",
            points: [
                "Emerging query identification",
                "Topical authority mapping",
                "Conversational & generative search optimization",
                "AI Overviews & snippet structuring"
            ]
        },
        {
            title: "3. Autonomous Technical SEO",
            icon: <Cpu size={32} />,
            desc: "Self-healing technical SEO monitoring and optimization.",
            points: [
                "Crawl inefficiency detection",
                "Auto-Core Web Vitals improvements",
                "Indexing anomaly identification",
                "Dynamic structured data optimization"
            ]
        },
        {
            title: "4. AI Content Engineering",
            icon: <Sparkles size={32} />,
            desc: "Augmented content that satisfies both users and algorithms.",
            points: [
                "Semantic NLP analysis",
                "Topic depth scoring",
                "AI readability & engagement optimization",
                "Internal linking automation"
            ]
        },
        {
            title: "5. Performance Scaling",
            icon: <TrendingUp size={32} />,
            desc: "Continuous learning and automatic strategy recalibration.",
            points: [
                "Ranking fluctuation monitoring",
                "User behavior signal tracking",
                "Conversion pathway analysis",
                "ROI-focused strategy recalibration"
            ]
        }
    ];

    const agenticServices = [
        "AI-Powered SEO Strategy",
        "Predictive Topic Clustering",
        "Generative Search Optimization",
        "Technical SEO Automation",
        "AI-Based Content Optimization",
        "Entity & Schema Engineering",
        "SERP Feature Optimization",
        "Conversational Search SEO",
        "Data-Driven Link Building",
        "Enterprise SEO Frameworks"
    ];

    const industriesEmpowered = [
        { name: "E-Commerce & D2C", icon: <ShoppingCart size={18} /> },
        { name: "Healthcare & MedTech", icon: <Heart size={18} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={18} /> },
        { name: "Real Estate", icon: <Home size={18} /> },
        { name: "BFSI & FinTech", icon: <DollarSign size={18} /> },
        { name: "SaaS & Tech", icon: <Cpu size={18} /> },
        { name: "Growth Startups", icon: <Zap size={18} /> }
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
                            Agentic AI SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            The Search for Tomorrow. Driven by Autonomous Intelligence.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Search is evolving from keywords to intelligence. We build AI-driven SEO systems that don’t just optimize pages — they think, learn, and adapt in real time to dominate modern search ecosystems.
                        </p>
                        {/* <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we deploy autonomous search agents that continuously monitor, analyze, and optimize your website for maximum organic output.
                            </p>
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
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/11/agentic-ai-seo-services.webp"
                            alt="Agentic AI SEO Services"
                            className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </div>
                </div>
            </section>

            {/* What is Agentic SEO Section */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">
                            What is Agentic AI SEO?
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 max-w-[850px] mx-auto font-medium">
                            Agentic AI SEO is the next evolution of search optimization — powered by autonomous AI agents that continuously analyze data and execute improvements without constant manual intervention.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-[#f8f9fa] p-[50px] rounded-[40px] border border-[#eee]">
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                Unlike traditional SEO that reacts to algorithm updates, Agentic AI anticipates shifts and adapts strategies instantly to scale performance intelligently.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 font-medium leading-[1.8]">
                                At Adkryoss managed by Clink Consultancy Services Private Limited, we build self-learning systems that transform your website into an organic growth machine.
                            </p>
                        </div>
                        <div className="bg-[#0f172a] p-[50px] rounded-[40px] text-white">
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white">
                                Traditional vs Agentic SEO
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Traditional:", v: "Manual audits & reactive strategies" },
                                    { t: "Agentic:", v: "Autonomous optimization & predictive modeling" },
                                    { t: "Agentic:", v: "Continuous technical fixes & real-time intelligence" },
                                    { t: "Agentic:", v: "Multi-platform visibility (Search, AI, Voice)" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[12px] items-start">
                                        <div className="bg-blue-500 rounded-full p-1 mt-1"><CheckCircle2 size={14} color="#fff" /></div>
                                        <div>
                                            <span className="font-semibold text-[#3b82f6] mr-[8px]">{item.t}</span>
                                            <span className="text-[15px]">{item.v}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-[100px] bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">
                            Our Agentic AI SEO Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            A structured yet adaptive methodology designed for performance and long-term authority.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {agenticFramework.map((item, i) => (
                            <div key={i} className="flex-1 min-w-[350px] max-w-[380px] bg-white p-[40px] rounded-[24px] border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden border border-[#e2e8f0] flex-grow max-w-[450px] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] hover:border-[#0066cc]">
                                <div className="text-[#0066cc] mb-[20px]">{item.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-[15px] text-[#1a1a1a]">{item.title}</h3>
                                <p className="text-[#666] mb-[20px] leading-[1.6] text-[15px] font-medium">{item.desc}</p>
                                <ul className="list-none p-0">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-[8px] mb-[10px] text-[#444] text-[14px]">
                                            <div className="text-[#0066cc] mt-[4px]"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[30px]">Our Agentic AI SEO Services</h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                We don't just use AI tools; we build intelligent SEO ecosystems that evolve with search engine expectations.
                            </p>
                            <div className="grid grid-cols-2 gap-y-4">
                                {agenticServices.map((service, i) => (
                                    <div key={i} className="flex gap-[10px] items-center">
                                        <div className="bg-blue-100 p-1 rounded-full"><ArrowRight size={14} className="text-blue-600" /></div>
                                        <span className="font-medium text-[#1e293b]">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#0f172a] p-[60px] rounded-[40px] text-white">
                            <h3 className="text-[28px] font-semibold mb-[30px]">The Hybrid Advantage</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Strategic Oversight", d: "Human expertise guiding AI execution." },
                                    { t: "Deep Data Science", d: "Search psychology combined with algorithm data." },
                                    { t: "Scale + Creativity", d: "Autonomous scale with creative brand storytelling." },
                                    { t: "Technical Precision", d: "Error-free technical maintenance at any scale." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 className="font-semibold text-[#3b82f6] mb-[4px]">{item.t}</h4>
                                        <p className="text-[#e2e8f0] text-[15px] font-medium">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-[100px] bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">Industries We Empower</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Every industry requires intelligent visibility — and we build it strategically.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[16px]">
                        {industriesEmpowered.map((item, i) => (
                            <div key={i} className="flex items-center gap-[10px] bg-white px-[25px] py-[15px] rounded-[12px] border border-[#e2e8f0] font-medium text-[#1e293b] transition-all duration-300 hover:border-[#0066cc] hover:-translate-y-[5px]">
                                <span className="text-blue-500">{item.icon}</span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Future Section */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="bg-[#0f172a] p-[60px] rounded-[40px] border border-[#eee]">
                            <BrainCircuit size={48} className="text-blue-400 mb-6" />
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white">
                                The Future is Autonomous
                            </h3>
                            <p className="text-[16px] md:text-[18px] text-white mb-6 leading-[1.8] font-medium">
                                Search engines are integrating AI at their core. Brands that rely on manual SEO will struggle to scale. Adkryoss managed by Clink Consultancy Services Private Limited helps you transition to a system that learns faster, executes smarter, and delivers ROI predictably.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[30px]">Lead the AI Search Revolution</h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                The next era of SEO isn’t about ranking pages. It’s about building intelligent digital authority.
                            </p>
                            <div className="p-[30px] bg-[rgba(59,130,246,0.1)] rounded-[20px] border-l-4 border-[#3b82f6]">
                                <p className="m-0 font-medium text-[#1a1a1a]">"Partner with us to create a self-optimizing search ecosystem that drives consistent organic growth."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA */}
            <section className="py-[80px] bg-gradient-to-br from-[#0066cc] to-[#004999] text-white text-center">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-[20px] text-white">Ready to Build Your AI-Driven Advantage?</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-100 text-white font-medium">
                        The future of search is now. Let's build your intelligent growth engine.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-[10px] bg-white text-[#0066cc] py-[18px] px-[40px] rounded-[50px] font-semibold no-underline transition-all duration-300 hover:scale-[1.05]">
                        Start Your Agentic Strategy <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AgenticAISEO;
