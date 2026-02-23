import React from 'react';
import { Link } from 'react-router-dom';
import guestpostinghero from "../../../assets/content-marketing/guestpostinghero.png";
import {
    Award,
    LineChart,
    PenTool,
    Share2,
    Target,
    Users,
    ArrowRight,
    CheckCircle2,
    Globe,
    FileText,
    TrendingUp,
    ShieldCheck,
    SearchCode
} from 'lucide-react';

const GuestPosting = () => {
    const strategySteps = [
        {
            step: "01",
            title: "Strategic Niche & Competitor Analysis",
            desc: "We identify where your competitors are earning links and discover authority gaps you can capitalize on."
        },
        {
            step: "02",
            title: "Publisher Qualification & Outreach",
            desc: "We connect with genuine editorial websites with real traffic, high domain metrics, and niche relevance."
        },
        {
            step: "03",
            title: "Content That Builds Authority",
            desc: "Our team develops high-quality, value-driven, editorial content that aligns with the publisher’s audience while naturally integrating contextual backlinks."
        },
        {
            step: "04",
            title: "Quality & Compliance Audit",
            desc: "Every placement goes through strict quality checks to ensure: No PBNs, No spammy directories, No AI-generated low-value blogs, No link farms."
        },
        {
            step: "05",
            title: "Reporting & Performance Tracking",
            desc: "You receive transparent reporting with live URLs, domain metrics, and SEO impact insights."
        }
    ];

    const offeringTypes = [
        { icon: <Award className="text-blue-500" />, title: "High Authority Editorial Placements" },
        { icon: <Globe className="text-blue-500" />, title: "Niche-Specific Industry Blogs" },
        { icon: <Target className="text-blue-500" />, title: "Local Market Guest Posting" },
        { icon: <Globe className="text-blue-500" />, title: "International Authority Outreach" },
        { icon: <FileText className="text-blue-500" />, title: "Thought Leadership Content Publishing" }
    ];

    const differentiators = [
        "Manual outreach only",
        "Real websites with genuine traffic",
        "Contextual do-follow placements",
        "Industry-relevant content angles",
        "SEO-aligned anchor strategy",
        "White-hat, Google-compliant techniques"
    ];

    const integrationPoints = [
        { icon: <Target size={20} />, title: "On-Page Optimization" },
        { icon: <SearchCode size={20} />, title: "Technical SEO" },
        { icon: <FileText size={20} />, title: "Content Marketing" },
        { icon: <Share2 size={20} />, title: "Digital PR" },
        { icon: <Award size={20} />, title: "Authority Building Campaigns" }
    ];

    const industries = [
        "Technology & SaaS",
        "E-commerce & Retail",
        "Healthcare & Wellness",
        "Finance & Fintech",
        "Real Estate",
        "Education & EdTech",
        "Corporate & B2B Services"
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
                            Guest Posting Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Authority That Ranks. Visibility That Converts.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-gray-200 font-medium">
                            Guest posting is no longer about backlinks — it’s about building digital authority, trust, and sustainable organic growth. <br />
                            We craft strategic, niche-relevant, high-authority guest posting campaigns that improve rankings, drive referral traffic, and strengthen your brand credibility in competitive markets.
                        </p>

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
                                src={guestpostinghero}
                                alt="Guest Posting"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] rounded-2xl"
                            /></div>
                    </div>
                </div>
            </section>

            {/* Why Guest Posting Section */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">
                            Why Guest Posting Still Dominates SEO
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Search engines prioritize trust signals, relevance, and authority. Guest posting helps you build all three.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 mb-12 transition-all duration-300 hover:shadow-xl">
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                A well-executed guest posting strategy can:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Improve keyword rankings",
                                    "Strengthen domain authority",
                                    "Drive qualified referral traffic",
                                    "Build brand credibility",
                                    "Support long-term SEO performance"
                                ].map((point, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <CheckCircle2 size={20} className="text-[#0066CC] shrink-0" />
                                        <span className="font-semibold text-slate-800">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                At Adkryoss managed by <span className="font-semibold text-[#0066CC]">Clink Consultancy Services Private Limited</span>, guest posting is not treated as a link-buying activity — it is positioned as a strategic authority-building framework aligned with your SEO roadmap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategy Framework Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">Our Guest Posting Strategy Framework</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            We follow a research-driven, compliance-focused, and ROI-oriented process.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {strategySteps.map((item, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 rounded-2xl p-8 transition-all duration-300 hover:border-[#0066CC] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] flex flex-col group">
                                <div className="text-[#0066CC] font-extrabold text-4xl mb-6 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-[18px] font-semibold text-slate-900 mb-4 group-hover:text-[#0066CC] transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types of Guest Posting Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold mb-5 leading-tight text-white">Types of Guest Posting We Offer</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-blue-400 font-medium italic">
                            We design campaigns based on your growth stage and industry competition.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {offeringTypes.map((item, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 w-full md:w-[calc(33.33%-22px)] min-w-[300px] flex items-center gap-6 group shadow-sm">
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    {React.cloneElement(item.icon, { size: 24, className: "group-hover:text-white" })}
                                </div>
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 mt-12 text-center text-white max-w-2xl mx-auto italic font-medium">
                        Each campaign is structured to align with your keyword strategy and long-term ranking goals.
                    </p>
                </div>
            </section>

            {/* What Makes Us Different Section */}
            <section className="py-24 bg-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">What Makes Our Guest Posting Different?</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium italic text-slate-600">
                            Unlike bulk link sellers, Adkryoss managed by <span className="text-[#0066CC]">Clink Consultancy Services Private Limited</span> focuses on:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                        {differentiators.map((point, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                                <ShieldCheck size={28} className="text-[#0066CC] shrink-0" />
                                <span className="font-semibold text-slate-800 leading-tight">{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto p-10 bg-blue-600 rounded-[30px] text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <p className="text-2xl font-medium text-white italic m-0">
                            "We build links that search engines reward — not penalize."
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-8 leading-tight">Industries We Serve</h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {industries.map((industry, index) => (
                                <div key={index} className="px-8 py-4 bg-white border-2 border-slate-100 rounded-xl font-extrabold text-slate-900 transition-all hover:border-[#0066CC] hover:text-[#0066CC] hover:-translate-y-1 shadow-sm">
                                    {industry}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-[36px] font-bold mb-8 leading-tight">Ready to Build Authority That Ranks?</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
                        Let’s create a guest posting strategy that positions your brand as an industry leader. <br />
                        Connect with our SEO strategists today and scale your organic visibility with confidence.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066CC] py-6 px-16 rounded-[20px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:scale-105 active:scale-95">
                        Build My Authority Placements
                        <ArrowRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GuestPosting;
