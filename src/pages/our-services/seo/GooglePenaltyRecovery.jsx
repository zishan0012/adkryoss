import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AlertTriangle,
    Shield,
    Search,
    RefreshCcw,
    Zap,
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Activity,
    Lock,
    Globe,
    FileText,
    Target,
    Users,
    Settings,
    Database,
    LineChart,
    PieChart,
    Cpu,
    HelpCircle,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import googlepenaltyrecovery from '../../../assets/SEO/googlepenaltyhero.png';
const GooglePenaltyRecovery = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (i) => {
        setOpenFaq(openFaq === i ? null : i);
    };

    const commonReasons = [
        { title: "Toxic Backlinks", desc: "Spammy or low-quality inbound links.", icon: <AlertTriangle size={24} /> },
        { title: "Unnatural Anchor Text", desc: "Over-optimized keyword patterns.", icon: <Target size={24} /> },
        { title: "AI/Thin Content", desc: "Duplicate or unhelpful AI-spam content.", icon: <FileText size={24} /> },
        { title: "Technical Malpractice", desc: "Cloaking or deceptive redirects.", icon: <Settings size={24} /> },
        { title: "Keyword Stuffing", desc: "Manipulative term frequency.", icon: <Zap size={24} /> },
        { title: "Poor E-E-A-T", desc: "Lacking Experience, Expertise, Authority, Trust.", icon: <Shield size={24} /> }
    ];

    const penaltyTypes = [
        {
            title: "Manual Action Penalty",
            desc: "Applied by human reviewers for guideline violations. Requires structured cleanup and reconsideration request.",
            icon: <Users size={32} />
        },
        {
            title: "Algorithmic Penalty",
            desc: "Triggered by core updates or spam filters. Requires strategic SEO recalibration and quality rebuilding.",
            icon: <Cpu size={32} />
        },
        {
            title: "Link-Based Penalty",
            desc: "Unnatural backlinks affecting trust and authority signals. Requires disavow and toxic link removal.",
            icon: <Activity size={32} />
        },
        {
            title: "Content Quality Penalty",
            desc: "Thin, low-value, or unhelpful content impacting performance. Requires content pruning and consolidation.",
            icon: <FileText size={32} />
        }
    ];

    const phases = [
        {
            title: "Phase 1: Deep Diagnostic Audit",
            desc: "We conduct a 360° forensic SEO audit to identify the exact trigger.",
            points: ["Backlink toxicity analysis", "Anchor text distribution mapping", "Content quality audit", "Technical SEO & E-E-A-T assessment"]
        },
        {
            title: "Phase 2: Toxic Cleanup & Rectification",
            desc: "We systematically repair violations and remove damage.",
            points: ["Link removal outreach", "Disavow file creation", "Content pruning & consolidation", "Technical corrections & UX enhancements"]
        },
        {
            title: "Phase 3: Authority Rebuilding",
            desc: "Recovery is incomplete without rebuilding search trust.",
            points: ["White-hat link acquisition", "Topical authority clustering", "Structured data optimization", "Digital PR integration"]
        },
        {
            title: "Phase 4: Reconsideration & Monitoring",
            desc: "Formal communication with Google and continuous tracking.",
            points: ["Reconsideration request drafting", "Cleanup documentation", "Ranking & update tracking", "Core update pulse monitoring"]
        }
    ];

    const signs = [
        "30%+ sudden organic traffic drop",
        "Keywords disappearing from SERP",
        "Manual action notification in Search Console",
        "Sharp fall after Google Core Update",
        "Traffic drop without technical errors",
        "Backlink spike from unknown sources"
    ];

    const faqs = [
        {
            q: "What is a Google Penalty?",
            a: "A Google penalty is a negative impact on a website's search rankings based on updates to Google's search algorithms or manual review. It's intended to lower the rankings of sites that violate search quality guidelines."
        },
        {
            q: "How do I know if my site has been penalized?",
            a: "Signs include a sudden and sharp drop in organic traffic, your website disappearing from search results for your brand name, and manual action notifications in Google Search Console."
        },
        {
            q: "Can you recover from a Manual Action?",
            a: "Yes. Manual actions require identifying the violation, fixing it across the entire site, and submitting a reconsideration request to Google with documentation of the cleanup."
        },
        {
            q: "How long does the recovery process take?",
            a: "Recovery timelines vary. Minor algorithmic issues can take 4-8 weeks, while manual actions or severe link penalties can take 2-6 months depending on the extent of the damage and cleanup required."
        },
        {
            q: "Do I need to delete my whole website and start over?",
            a: "Rarely. Most penalties can be recovered from by pruning toxic content, removing bad backlinks, and improving overall site quality and authority (E-E-A-T)."
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
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] leading-[1.1] text-white">
                            Google Penalty Recovery Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Recover Rankings. Restore Authority. Rebuild Growth.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            When organic traffic drops overnight, revenue follows. A Google penalty can severely damage your visibility, but it's not the end. We diagnose, repair, and engineer long-term search resilience.
                        </p>
                        <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="text-white font-bold">Clink Consultancy Services Private Limited</span>, we rebuild your SEO foundation stronger than before.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link
                                to="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </Link>
                            <Link
                                to="#services"
                                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </Link>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={googlepenaltyrecovery}
                                alt=" Google Penalty Recovery Services"
                                className="max-w-[450px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Message */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">
                                We Don't Just Remove Penalties. We Rebuild Your DNA.
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                Google's ecosystem evolves constantly. Updates like SpamCore, Helpful Content, and Core Algorithm changes are designed to reward quality. If you've been hit, it's a signal that your SEO foundation needs more than just a quick fix.
                            </p>
                        </div>
                        <div className="bg-[#f8fafc] p-10 rounded-[30px] border border-[#e2e8f0]">
                            <h3 className="text-[24px] font-semibold mb-[30px] text-[#0f172a]">Why Penalties Happen:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {commonReasons.map((reason, i) => (
                                    <div key={i} className="flex gap-[15px]">
                                        <div className="text-[#0066cc] p-0.5">{reason.icon}</div>
                                        <div>
                                            <h4 className="text-[16px] font-bold text-[#0f172a] mb-1">{reason.title}</h4>
                                            <p className="text-[13px] text-[#64748b] leading-[1.4] font-medium">{reason.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Penalty Types Section */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-[#0f172a]">
                        Types of Google Penalties We Handle
                    </h2>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {penaltyTypes.map((type, i) => (
                            <div key={i} className="w-[calc(50%-15px)] min-w-[320px] bg-white p-10 rounded-[24px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-[#0066cc] border border-transparent">
                                <div className="text-[#0066cc] mb-6">{type.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-4 text-[#0f172a]">{type.title}</h3>
                                <p className="text-base text-[#64748b] leading-[1.7] font-medium">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section id="services" className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-5 text-[#0f172a]">
                            Our Google Penalty Recovery Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Strategic. Data-Led. Transparent. Sustainable.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {phases.map((phase, i) => (
                            <div key={i} className="w-[calc(25%-23px)] min-w-[280px] bg-[#f8fafc] p-[30px] rounded-[20px] border border-[#e2e8f0] grow transition-all duration-300 hover:border-[#0066cc] hover:bg-white hover:shadow-lg">
                                <span className="text-sm font-bold text-[#0066cc] mb-4 block uppercase tracking-wider">Phase 0{i + 1}</span>
                                <h3 className="text-[20px] font-semibold mb-4 text-[#0f172a]">{phase.title}</h3>
                                <p className="text-[15px] text-[#475569] mb-5 leading-[1.6] font-medium">{phase.desc}</p>
                                <ul className="list-none p-0 space-y-4">
                                    {phase.points.map((pt, idx) => (
                                        <li key={idx} className="text-[14px] text-[#666] flex gap-2.5 leading-[1.5]">
                                            <CheckCircle2 size={16} className="text-[#0066cc] shrink-0 mt-0.5" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Signs You Need Recovery */}
            <section className="py-20 bg-[#0f172a] text-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[60px] items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-white mb-[30px]">
                                Signs You Need Immediate Penalty Recovery
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                If your organic traffic vanishes or keywords disappear from the SERP, every day you wait is a day of lost revenue.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2.5 text-[#60a5fa] font-bold no-underline text-[18px] transition-all hover:gap-4">
                                Get a Free Analysis <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {signs.map((sign, i) => (
                                <div key={i} className="p-6 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[20px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)]">
                                    <AlertTriangle size={24} className="text-[#f59e0b] mb-4" />
                                    <p className="text-base font-medium text-white m-0 leading-[1.4]">{sign}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Approach */}
            <section className="py-20 bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-[60px] text-[#0f172a]">
                        What Makes Our Recovery Approach Different?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {[
                            "AI-driven SERP evolution analysis",
                            "Entity-based SEO cleanup",
                            "Search intent mapping",
                            "Semantic optimization",
                            "Core Web Vitals compliance",
                            "E-E-A-T reinforcement"
                        ].map((item, i) => (
                            <div key={i} className="py-4 px-8 bg-[#f8fafc] rounded-full border border-[#e2e8f0] font-bold text-[#0f172a] shadow-sm transition-all hover:border-[#0066cc] hover:text-[#0066cc] cursor-default">
                                ✔ {item}
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 mt-[50px] max-w-[900px] mx-auto leading-relaxed font-medium">
                        Adkryoss managed by Clink Consultancy Services Private Limited doesn't just fix penalties temporarily. We build <strong className="text-[#0f172a]">algorithm-proof digital ecosystems</strong>.
                    </p>
                </div>
            </section>

            {/* Our Tools & Intelligence Stack */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-8 text-[#0f172a] leading-tight">
                                Our Tools & Intelligence Stack
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { name: "Google Search Console", icon: <Search size={20} /> },
                                    { name: "Ahrefs / SEMrush forensic analysis", icon: <BarChart3 size={20} /> },
                                    { name: "Screaming Frog crawl diagnostics", icon: <Activity size={20} /> },
                                    { name: "Toxic score & link velocity mapping", icon: <Database size={20} /> },
                                    { name: "AI-based content evaluation", icon: <Cpu size={20} /> },
                                    { name: "Core Web Vitals performance tracking", icon: <LineChart size={20} /> }
                                ].map((tool, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-transparent shadow-sm transition-all hover:border-[#0066cc] hover:shadow-md">
                                        <div className="text-[#0066cc]">{tool.icon}</div>
                                        <span className="font-bold text-[#334155]">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-[18px] font-bold text-[#0066cc] italic">
                                Every decision is backed by data.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-[30px] border border-[#e2e8f0] shadow-xl shadow-blue-900/5">
                            <h2 className="text-[32px] font-bold mb-8 text-[#0f172a] leading-tight">
                                Industries We've Supported in Recovery
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "E-commerce",
                                    "SaaS Platforms",
                                    "Healthcare",
                                    "Education",
                                    "Real Estate",
                                    "Fintech",
                                    "Enterprise Brands",
                                    "B2B Service Companies"
                                ].map((industry, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-[#f8fafc] rounded-xl border border-transparent transition-all hover:border-[#0066cc] group">
                                        <CheckCircle2 size={18} className="text-[#0066cc] shrink-0" />
                                        <span className="font-bold text-[#334155] group-hover:text-[#0066cc] transition-colors">{industry}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-[16px] font-semibold text-[#0f172a] border-l-4 border-[#0066cc] pl-4 italic">
                                Search penalties don’t discriminate — but recovery requires expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expected Timeline */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-[50px] text-[#0f172a]">Recovery Timeline</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                        <div className="p-10 bg-white rounded-[24px] shadow-[0_4px_6px_rgba(0,0,0,0.05)] border border-transparent transition-all hover:border-[#0066cc]/20">
                            <h3 className="text-[20px] font-semibold text-[#0066cc] mb-4">Minor Algorithmic Issue</h3>
                            <p className="text-[32px] font-medium text-[#0f172a] mb-2.5">4–8 Weeks</p>
                            <p className="text-[#64748b] leading-relaxed font-medium">Focused cleanup and quality improvement.</p>
                        </div>
                        <div className="p-10 bg-white rounded-[24px] border-2 border-[#0066cc] shadow-xl shadow-blue-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#0066cc] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest">Crucial</div>
                            <h3 className="text-[20px] font-semibold text-[#0066cc] mb-4">Manual Action</h3>
                            <p className="text-[32px] font-medium text-[#0f172a] mb-2.5">2–4 Months</p>
                            <p className="text-[#64748b] leading-relaxed font-medium">Outreach, cleanup, and reconsideration process.</p>
                        </div>
                        <div className="p-10 bg-white rounded-[24px] shadow-[0_4px_6px_rgba(0,0,0,0.05)] border border-transparent transition-all hover:border-[#0066cc]/20">
                            <h3 className="text-[20px] font-semibold text-[#0066cc] mb-4">Severe Link Penalty</h3>
                            <p className="text-[32px] font-medium text-[#0f172a] mb-2.5">3–6 Months</p>
                            <p className="text-[#64748b] leading-relaxed font-medium">Extensive forensic link audit and authority rebuilding.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-[#0f172a]">Recovery Intelligence (FAQs)</h2>
                    <div className="max-w-[800px] mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className="mb-[15px] border border-[#e2e8f0] rounded-[15px] overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className={`w-full p-[20px_30px] flex justify-between items-center transition-all duration-300 border-none cursor-pointer ${openFaq === i ? 'bg-[#f8fafc]' : 'bg-white'}`}
                                >
                                    <span className="text-[18px] font-bold text-[#0f172a] text-left">{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={20} className="text-[#0066cc]" /> : <ChevronDown size={20} className="text-slate-400" />}
                                </button>
                                {openFaq === i && (
                                    <div className="p-[20px_30px] bg-white border-t border-[#e2e8f0]">
                                        <p className="m-0 text-[#475569] leading-[1.7] text-[16px] font-medium">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-white mb-6 leading-tight">
                        Ready to Take Control of Your Rankings?
                    </h2>
                    <p className="text-[22px] mb-12 max-w-[800px] mx-auto text-[#eff6ff] opacity-90 leading-relaxed font-medium">
                        A penalty is a setback — not a failure. The faster you respond, the stronger your recovery. Request a comprehensive penalty audit today.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3.5 bg-[#0066cc] text-white py-5 px-[60px] rounded-full text-[20px] font-bold no-underline transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:scale-[1.05] hover:shadow-[#0066cc]/40">
                        Start Your Recovery Now
                        <ArrowRight size={22} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GooglePenaltyRecovery;
