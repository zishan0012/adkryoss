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
    Layers,
    Cpu,
    Share2,
    PenTool,
    Lightbulb,
    Video,
    ShoppingCart,
    GraduationCap,
    Heart,
    Building2,
    Briefcase,
    Rocket
} from 'lucide-react';
import contentmarketing from "../../../assets/content-marketing/contentmarketinghero.png";
const ContentMarketingServices = () => {
    const approaches = [
        {
            icon: <Search size={32} />,
            title: "1. Research & Strategic Planning",
            desc: "We build a content roadmap aligned with business goals, not guesswork.",
            points: [
                "Audience persona mapping",
                "Search intent & keyword cluster analysis",
                "Competitor content gap audit",
                "Funnel-based content architecture",
                "Topic authority mapping"
            ]
        },
        {
            icon: <PenTool size={32} />,
            title: "2. Content Creation & Optimization",
            desc: "Our editorial team ensures tone consistency, readability, and conversion-focused storytelling.",
            points: [
                "SEO blog articles",
                "Website copy & landing pages",
                "Thought leadership content",
                "Case studies & whitepapers",
                "Social-first content assets",
                "Email content & automation flows"
            ],
            extraDesc: "Every piece is optimized for:",
            optimizations: [
                "Search visibility",
                "Engagement depth",
                "Conversion triggers",
                "Semantic SEO",
                "Featured snippets"
            ]
        },
        {
            icon: <Share2 size={32} />,
            title: "3. Distribution & Amplification",
            desc: "At Adkryoss managed by Clink Consultancy Services Private Limited, we ensure your content reaches the right audience across the right channels at the right time.",
            subtitle: "Creating content is only half the job. Visibility multiplies impact.",
            points: [
                "Organic search optimization",
                "LinkedIn & social media amplification",
                "Email marketing distribution",
                "Influencer & PR outreach",
                "Paid content promotion",
                "Content repurposing strategy"
            ]
        },
        {
            icon: <BarChart3 size={32} />,
            title: "4. Performance Measurement & Scaling",
            desc: "Using analytics-driven insights, we continuously optimize content clusters for higher ROI.",
            subtitle: "We track performance beyond vanity metrics.",
            points: [
                "Organic traffic growth",
                "Keyword ranking improvements",
                "Engagement signals",
                "Lead generation metrics",
                "Conversion rate impact",
                "Assisted revenue attribution"
            ]
        }
    ];

    const contentTypes = [
        {
            icon: <Search size={24} />,
            title: "SEO Content Marketing",
            desc: "Search-optimized content structured for long-term organic growth and topic authority."
        },
        {
            icon: <Users size={24} />,
            title: "B2B Content Marketing",
            desc: "High-value thought leadership and lead nurturing frameworks designed for complex buyer journeys."
        },
        {
            icon: <ShoppingCart size={24} />,
            title: "E-commerce Content",
            desc: "Product storytelling, buying guides, and transactional content designed to increase conversions."
        },
        {
            icon: <Video size={24} />,
            title: "Video & Visual Content Strategy",
            desc: "Short-form videos, explainers, and visual storytelling tailored for modern consumption patterns."
        },
        {
            icon: <Layers size={24} />,
            title: "Pillar & Cluster Strategy",
            desc: "Build topical dominance with structured pillar pages supported by keyword-driven clusters."
        }
    ];

    const differentiators = [
        "Performance-led storytelling",
        "Advanced keyword clustering",
        "AI-assisted research with human creativity",
        "Conversion-focused content design",
        "Full-funnel integration",
        "Continuous optimization model"
    ];

    const impactPoints = [
        "Increased organic visibility",
        "Stronger domain authority",
        "Higher quality inbound leads",
        "Reduced paid dependency",
        "Long-term brand credibility",
        "Compounding digital growth"
    ];

    const industries = [
        { icon: <GraduationCap size={24} />, name: "Education & EdTech" },
        { icon: <Heart size={24} />, name: "Healthcare" },
        { icon: <Building2 size={24} />, name: "Real Estate" },
        { icon: <ShoppingCart size={24} />, name: "E-commerce" },
        { icon: <Briefcase size={24} />, name: "B2B Services" },
        { icon: <Rocket size={24} />, name: "Startups & SaaS" }
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
                            Content Marketing Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Content That Builds Authority. Drives Traffic. Converts.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Smart storytelling powered by strategy, SEO, and performance data. We create content ecosystems that don’t just attract attention — they generate measurable business growth.
                        </p>
                        {/* 
                        { CTA Buttons — uncomment when ready to use} */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/contact"
                                className="bg-white 
                                text-black font-semibold
                                px-8 py-4 rounded-full
                                transition-all duration-300
                                hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </a>

                            <a
                                href="#services"
                                className="border-2 border-blue-500
                                text-white
                                px-8 py-4 rounded-full font-semibold
                                transition-all duration-300
                                 hover:text-black  hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </a>
                        </div>


                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={contentmarketing}
                                alt="Content Marketing Services"
                                className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Why content matters Section */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">
                            Why Content Marketing Matters Today
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Search engines reward expertise. Audiences demand authenticity. Algorithms prioritize relevance.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 mb-12 transition-all duration-300 hover:shadow-xl">
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                In this dynamic digital ecosystem, content marketing is no longer optional — it’s your competitive advantage.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                At Adkryoss managed by <span className="font-semibold text-[#0066CC]">Clink Consultancy Services Private Limited</span>, we design content strategies that position businesses as industry authorities while driving qualified leads through every stage of the buyer journey.
                            </p>
                            <div className="p-8 bg-blue-500 rounded-xl text-white shadow-lg">
                                <p className="text-[16px] md:text-[18px] mb-6 font-medium text-white leading-relaxed italic">
                                    "We blend creativity with search intelligence, audience psychology, and performance analytics to turn content into a scalable growth engine."
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Approaches Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">
                            Our Content Marketing Approach
                        </h2>
                        <p className="text-[16px] text-slate-600 mt-3 max-w-[800px] mx-auto font-medium">
                            We follow a structured, data-first, ROI-driven methodology inspired by enterprise-level digital frameworks — but tailored for agile and growing brands.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {approaches.map((item, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 rounded-2xl p-8 transition-all duration-300 w-full md:w-[calc(50%-20px)] min-w-[300px] max-w-[550px] grow cursor-pointer group hover:border-[#0066CC] hover:-translate-y-3 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)]">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#004999] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="text-5xl font-semibold text-slate-100 group-hover:text-blue-50 transition-colors">0{index + 1}</span>
                                </div>
                                <h3 className="text-[22px] font-semibold text-slate-900 mb-4 group-hover:text-[#0066CC] transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                {item.subtitle && (
                                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                                        {item.subtitle}
                                    </p>
                                )}
                                <p className="text-slate-500 mb-8 font-medium italic leading-relaxed">
                                    "{item.desc}"
                                </p>
                                <div className="space-y-3">
                                    {item.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-[15px] text-slate-600 leading-relaxed">
                                            <CheckCircle2 size={18} className="text-[#0066CC] mt-0.5 shrink-0" />
                                            <span className="font-semibold">{point}</span>
                                        </div>
                                    ))}
                                </div>
                                {item.optimizations && (
                                    <div className="mt-8 pt-8 border-t border-slate-100">
                                        <p className="text-sm font-medium text-slate-900 mb-4">{item.extraDesc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.optimizations.map((opt, idx) => (
                                                <div key={idx} className="bg-slate-50 text-[#0066CC] border border-blue-100 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-[#0066CC] hover:text-white transition-colors">
                                                    ✔ {opt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Types Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold mb-5 leading-tight text-white">Types of Content We Specialize In</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium italic">
                            Bespoke content ecosystems for every industry.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {contentTypes.map((type, index) => (
                            <div key={index} className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:-translate-y-2 w-full md:w-[calc(33.333%-22px)] min-w-[300px] max-w-[380px] grow">
                                <div className="text-[#0066CC] mb-6 group-hover:scale-110 transition-transform">
                                    {type.icon}
                                </div>
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
                                    {type.title}
                                </h3>
                                <p className="text-white leading-relaxed font-medium m-0">
                                    {type.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Content Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-8">Our Content Philosophy</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                        Content should:
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {["Educate before it sells", "Solve before it promotes", "Inspire before it converts"].map((item, index) => (
                            <div key={index} className="px-10 py-8 bg-slate-50 rounded-2xl border-2 border-slate-100 text-2xl font-black text-[#0066CC] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="max-w-4xl mx-auto p-10 bg-blue-500 rounded-3xl text-white shadow-2xl shadow-blue-600/30">
                        <p className="text-xl leading-relaxed italic m-0  text-white font-medium">
                            "At Adkryoss managed by <span className="font-black">Clink Consultancy Services Private Limited</span>, we don’t produce content for algorithms alone — we create authority assets that compound value over time."
                        </p>
                    </div>

                </div>
            </section>

            {/* Differentiators & Industry Section */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* What Makes Us Different */}
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-10 leading-tight">What Makes Us Different</h2>
                            <div className="grid gap-6">
                                {differentiators.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-lg hover:translate-x-2 border border-transparent hover:border-blue-100 group">
                                        <div className="text-[#0066CC] group-hover:scale-110 transition-transform">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <span className="text-[18px] font-bold text-slate-900">✔ {item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[16px] md:text-[18px] mb-6 mt-10 font-medium italic leading-tight">
                                "We operate at the intersection of SEO, psychology, data science, and creative communication."
                            </p>
                        </div>

                        {/* Industries */}
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-10 leading-tight">Industries We Serve</h2>
                            <div className="grid grid-cols-2 gap-6">
                                {industries.map((item, index) => (
                                    <div key={index} className="p-8 bg-white rounded-xl border-2 border-transparent transition-all duration-300 cursor-pointer hover:border-[#0066CC] hover:-translate-y-1.5 hover:shadow-lg group text-center">
                                        <div className="text-[#0066CC] text-center flex justify-center mb-4 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <p className="text-[16px] font-medium text-slate-900 m-0 group-hover:text-[#0066CC] transition-colors">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[16px] md:text-[18px] mb-6 mt-10 text-slate-600 font-medium italic text-right leading-tight">
                                "Our adaptive content models ensure niche-specific relevance and industry authority."
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6">The Impact You Can Expect</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {impactPoints.map((point, index) => (
                            <div key={index} className="px-8 py-5 bg-blue-500 text-white rounded-xl shadow-xl shadow-blue-600/20 font-black text-lg transform transition hover:scale-105">
                                {point}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xl text-[#0066CC] font-medium mt-12 italic">
                        "Content is not an expense. It is a long-term business asset."
                    </p>

                    <div className="mt-20 p-10 bg-slate-900 rounded-[40px] text-center text-white relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-blue-600 rounded-full"></div>
                        <h2 className="text-[36px] font-bold text-white mb-8">Let’s Build Your Content Engine</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
                            If your business is ready to move beyond random posting and start building structured authority, it’s time to implement a scalable content system.
                        </p>
                        <p className="text-[16px] md:text-[18px] mb-6 text-lg font-medium text-white max-w-2xl mx-auto leading-relaxed">
                            Adkryoss managed by <span className="text-blue-500">Clink Consultancy Services Private Limited</span> partners with ambitious brands that want measurable digital growth powered by strategic content marketing.
                        </p>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-6 text-white leading-tight">
                        Ready to Turn Content into Conversions?
                    </h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-white max-w-3xl mx-auto font-medium">
                        Connect with our strategy team and let’s design a content ecosystem tailored to your business goals.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066CC] py-5 px-12 rounded-xl text-[18px] font-bold transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105">
                        Start Your Content Engine
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ContentMarketingServices;

