import React from 'react';
import { Link } from 'react-router-dom';
import {
    Link2,
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
    Users,
    FileText,
    MessageSquare,
    Trash2,
    TrendingUp,
    Briefcase,
    ShoppingCart,
    GraduationCap,
    Heart,
    Home,
    DollarSign
} from 'lucide-react';

const LinkBuildingServices = () => {
    const linkFramework = [
        {
            title: "1. Authority & Competitor Gap Analysis",
            icon: <Database size={32} />,
            desc: "We conduct in-depth backlink audits to identify opportunities and risks.",
            points: [
                "Domain authority gaps",
                "Toxic link risks",
                "Competitor backlink sources",
                "Anchor text distribution imbalance"
            ],
            extra: "This ensures your link profile grows strategically—not randomly."
        },
        {
            title: "2. Editorial Outreach & Digital PR",
            icon: <Users size={32} />,
            desc: "We secure placements on industry-relevant and high-authority publications.",
            points: [
                "Industry-relevant blogs",
                "High-authority publications",
                "Trusted news portals",
                "Niche-specific websites"
            ],
            extra: "Through relationship-driven outreach, we earn contextual backlinks that boost trust and traffic."
        },
        {
            title: "3. Content-Led Link Acquisition",
            icon: <FileText size={32} />,
            desc: "Links are earned through value. We create assets that naturally attract authoritative links.",
            points: [
                "Data-driven articles",
                "Insightful guest contributions",
                "Thought leadership pieces",
                "Resource-based content assets"
            ],
            extra: "We integrate SEO-driven content marketing to naturally attract high-value links."
        }
    ];

    const additionalFramework = [
        {
            title: "4. High-Quality Guest Posting",
            icon: <Briefcase size={32} />,
            desc: "Strategic guest blogging on niche-relevant domains to enhance authority and rankings.",
            points: [
                "Brand authority enhancement",
                "Organic keyword rankings boost",
                "Referral traffic growth",
                "Strategic industry positioning"
            ],
            extra: "Each placement is manually reviewed for relevance and editorial standards."
        },
        {
            title: "5. Broken Link Building",
            icon: <Trash2 size={32} />,
            desc: "We turn missed opportunities on other sites into ranking power for your domain.",
            points: [
                "Identify broken links on high-authority sites",
                "Replace them with your relevant content",
                "Value-driven outreach to webmasters",
                "Turn 404s into 200 OK authority"
            ]
        },
        {
            title: "6. Toxic Link Cleanup",
            icon: <Shield size={32} />,
            desc: "We protect your domain from harmful backlink practices and penalties.",
            points: [
                "Audit spammy domains",
                "Remove harmful backlinks",
                "Submit structured disavow files",
                "Rebuild a clean authority profile"
            ],
            extra: "We focus on recovery with sustainable growth."
        }
    ];

    const differentiators = [
        { title: "Data-Driven Targeting", desc: "We use competitive intelligence tools to identify link opportunities that directly impact rankings.", icon: <Search size={24} /> },
        { title: "Relevance-First Strategy", desc: "Links are built within your industry ecosystem—not generic directories.", icon: <Globe size={24} /> },
        { title: "Ethical & White-Hat", desc: "No shortcuts. No PBN risks. Only compliant strategies aligned with Google’s latest guidelines.", icon: <Shield size={24} /> },
        { title: "Measurable ROI Tracking", desc: "Transparent monthly reports including domain rating improvements and organic keyword movement.", icon: <TrendingUp size={24} /> }
    ];

    const faqs = [
        {
            question: "How long does link building take to show results?",
            answer: "Typically, measurable ranking improvements appear within 3–6 months depending on competition and domain strength."
        },
        {
            question: "Are backlinks still important in 2026?",
            answer: "Yes. High-quality, relevant backlinks remain one of the top ranking signals in search engine algorithms."
        },
        {
            question: "Do you guarantee links from specific websites?",
            answer: "We guarantee quality standards and authority metrics, but placements depend on editorial approval and relevance."
        }
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
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1px] text-white">
                            Link Building Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Authority That Ranks. Links That Convert.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Build powerful, high-authority backlinks that strengthen search visibility, improve domain credibility, and drive consistent organic growth. We create link ecosystems that search engines trust—and competitors struggle to match.
                        </p>
                        <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we don’t chase links. We build digital authority.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/03/Link-Building-SEO-Services.webp"
                            alt="Link Building Services"
                            className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </div>
                </div>
            </section>

            {/* Why Link Building Section */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">
                            Why Link Building Still Defines SEO Success
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 max-w-[850px] mx-auto font-medium">
                            Search engines evaluate trust through signals. Authoritative backlinks remain one of the strongest indicators of credibility and relevance in 2026.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-[#0066cc] text-white p-[50px] rounded-[40px] shadow-[0_20px_40px_rgba(0,102,204,0.15)]">
                            <h3 className="text-[28px] font-semibold mb-[30px]">Modern Link Building Strategy</h3>
                            <p className="text-[16px] md:text-[18px] mb-6 opacity-90 leading-[1.8] text-white font-medium">
                                It’s no longer about volume—it’s about context, quality, and strategic placement. Adkryoss designs link acquisition frameworks that focus on:
                            </p>
                            <div className="space-y-6">
                                {[
                                    "High-authority editorial placements",
                                    "Niche-relevant contextual backlinks",
                                    "Digital PR-driven authority growth",
                                    "Organic anchor text diversification",
                                    "Sustainable long-term ranking stability"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[15px] items-center">
                                        <div className="bg-[rgba(255,255,255,0.2)] p-[5px] rounded-full">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-[17px] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="p-[30px] border-l-4 border-[#0066cc] bg-[#f8f9fa]">
                                <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                                    Contextual Relevance
                                </p>
                                <p className="text-[#666] leading-[1.6] font-medium">We ensure links come from pages related to your business to maximize ranking power.</p>
                            </div>
                            <div className="p-[30px] border-l-4 border-[#0066cc] bg-[#f8f9fa]">
                                <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                                    Authority Growth
                                </p>
                                <p className="text-[#666] leading-[1.6] font-medium">Every link we build aims to increase your overall domain rating and trust score.</p>
                            </div>
                            <div className="p-[30px] border-l-4 border-[#0066cc] bg-[#f8f9fa]">
                                <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                                    Risk Management
                                </p>
                                <p className="text-[#666] leading-[1.6] font-medium">We strictly follow white-hat practices to ensure long-term visibility without penalties.</p>
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
                            Our Strategic Link Building Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            A high-authority approach to earning digital trust.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {linkFramework.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-[40px] rounded-[24px] border border-[#e2e8f0] transition-all duration-300 group hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#0066cc]"
                            >
                                <div className="text-[#0066cc] mb-[20px]">{item.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-[15px] text-[#1a1a1a]">{item.title}</h3>
                                <p className="text-[#666] mb-[20px] leading-[1.6] font-medium">{item.desc}</p>
                                <ul className="list-none p-0 mt-[20px]">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-[8px] mb-[10px] text-[#444] text-[15px]">
                                            <div className="text-[#0066cc] mt-[4px]"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[14px] font-medium text-[#0066cc] mt-[20px]">{item.extra}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {additionalFramework.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-[40px] rounded-[24px] border border-[#e2e8f0] transition-all duration-300 group hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#0066cc]"
                            >
                                <div className="text-[#0066cc] mb-[20px]">{item.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-[15px] text-[#1a1a1a]">{item.title}</h3>
                                <p className="text-[#666] mb-[20px] leading-[1.6] font-medium">{item.desc}</p>
                                <ul className="list-none p-0">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-[8px] mb-[10px] text-[#444] text-[15px]">
                                            <div className="text-[#0066cc] mt-[4px]"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                {item.extra && <p className="text-[14px] font-medium text-[#0066cc] mt-[20px]">{item.extra}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">What Makes Our Link Building Different?</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            We focus on domain authority growth and measurable ranking movement.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {differentiators.map((item, i) => (
                            <div key={i} className="text-center p-[30px] bg-[#f8f9fa] rounded-[20px] border border-[#eee]">
                                <div className="text-[#0066cc] mb-[15px] flex justify-center">{item.icon}</div>
                                <h4 className="text-[20px] font-semibold text-[#1a1a1a] mb-[10px]">{item.title}</h4>
                                <p className="text-[15px] text-[#666] leading-[1.6] font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Integration */}
            <section className="py-[100px] bg-[#0f172a] text-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[40px] text-white">Industries We Build Authority For</h2>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { name: "E-commerce & D2C", icon: <ShoppingCart size={18} /> },
                                    { name: "SaaS & Tech", icon: <Cpu size={18} /> },
                                    { name: "Education & EdTech", icon: <GraduationCap size={18} /> },
                                    { name: "Healthcare & Wellness", icon: <Heart size={18} /> },
                                    { name: "Real Estate", icon: <Home size={18} /> },
                                    { name: "Finance & BFSI", icon: <DollarSign size={18} /> },
                                    { name: "Corporate Enterprises", icon: <Briefcase size={18} /> }
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-[10px] bg-[rgba(255,255,255,0.05)] p-[15px] rounded-[12px] ${i === 6 ? 'w-full justify-center' : 'w-[calc(50%-8px)] justify-start'}`}
                                    >
                                        <span className="text-blue-400">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[36px] font-bold mb-[40px] text-white">SEO + Link Building = Scalable Growth</h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                Link building works best when integrated with complete SEO architecture. At Adkryoss, we align link acquisition with:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Technical SEO",
                                    "On-Page Optimization",
                                    "Content Marketing",
                                    "Digital PR",
                                    "Performance Analytics"
                                ].map((tag, i) => (
                                    <span key={i} className="py-[8px] px-[20px] bg-[rgba(59,130,246,0.1)] text-[#60a5fa] rounded-[50px] text-[14px] font-semibold border border-[rgba(59,130,246,0.2)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">Results You Can Expect</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            High-authority links that compound your digital equity over time.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            { label: "Improved DA", val: "Domain Authority" },
                            { label: "Higher Rankings", val: "SERP Dominance" },
                            { label: "Organic Traffic", val: "Consistent Growth" },
                            { label: "Brand Credibility", val: "Industry Trust" },
                            { label: "Long-Term ROI", val: "SEO Momentum" }
                        ].map((res, i) => (
                            <div key={i} className="text-center p-[30px] bg-[#f8f9fa] rounded-[24px] border border-[#eee]">
                                <div className="text-[24px] font-bold text-[#0066cc] mb-[5px]">{res.label}</div>
                                <div className="text-[14px] text-[#666] font-medium">{res.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-[100px] bg-[#f8f9fa]">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[50px]">Frequently Asked Questions</h2>
                    <div className="max-w-[800px] mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className="mb-[20px] bg-white p-[24px] rounded-[16px] border border-[#eee]">
                                <h4 className="text-[18px] font-semibold mb-[10px] text-[#1a1a1a]">{faq.question}</h4>
                                <p className="text-[#666] leading-[1.6] m-0 font-medium">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-[80px] bg-gradient-to-br from-[#0066cc] to-[#004999] text-white text-center">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-[20px] text-white">Let’s Build Authority That Compounds</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-90 text-white font-medium">
                        Partner with Adkryoss managed by Clink Consultancy Services Private Limited to build a powerful link ecosystem that drives sustainable SEO growth.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-[10px] bg-white text-[#0066cc] py-[18px] px-[40px] rounded-[50px] font-semibold no-underline transition-all duration-300 hover:scale-[1.05]"
                    >
                        Start Building Smarter Links Today <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LinkBuildingServices;
