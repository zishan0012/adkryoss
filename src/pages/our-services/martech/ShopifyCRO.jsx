import React from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart,
    CheckCircle2,
    ArrowRight,
    Zap,
    Search,
    ShoppingBag,
    TrendingUp,
    MousePointer2,
    BarChart3,
    Smartphone,
    Monitor,
    ShieldCheck,
    RotateCcw,
    Users,
    Activity,
    Brain,
    Rocket,
    Globe,
    Target,
    Layout,
    Layers,
    Type,
    Package,
    Settings,
    Database,
    PenTool
} from 'lucide-react';

const ShopifyCRO = () => {
    const approach = [
        {
            title: "1. Conversion Audit & Data Intelligence",
            desc: "We analyze your store’s performance across critical data points to identify what’s blocking conversions.",
            points: [
                "Heatmaps & user session recordings",
                "Funnel drop-off points",
                "Cart abandonment behavior",
                "Mobile vs desktop performance",
                "Page speed & Core Web Vitals",
                "Checkout friction analysis"
            ],
            icon: <Search size={32} />
        },
        {
            title: "2. UX & UI Optimization",
            desc: "A strategic store converts better than a just beautiful one.",
            points: [
                "Homepage messaging hierarchy",
                "Product page structure",
                "CTA placement & micro copy",
                "Trust elements & social proof",
                "Navigation architecture",
                "Mobile-first design experience"
            ],
            icon: <Monitor size={32} />
        },
        {
            title: "3. A/B & Multivariate Testing",
            desc: "Growth comes from testing, not assumptions.",
            points: [
                "Headlines & value propositions",
                "Product descriptions",
                "Pricing display strategies",
                "CTA color, placement & wording",
                "Checkout optimization elements"
            ],
            icon: <Zap size={32} />
        },
        {
            title: "4. Shopify Checkout Optimization",
            desc: "We reduce friction at the most critical revenue stage.",
            points: [
                "Simplified checkout flows",
                "Guest checkout optimization",
                "Auto-fill & smart validation",
                "Payment method enhancement",
                "Trust badge placement",
                "Shipping & return clarity"
            ],
            icon: <ShoppingCart size={32} />
        },
        {
            title: "5. Mobile Conversion Enhancement",
            desc: "Optimizing for the 70%+ of traffic that comes from mobile.",
            points: [
                "Thumb-friendly navigation",
                "Faster loading pages",
                "Mobile product image hierarchy",
                "Sticky add-to-cart buttons",
                "One-click checkout experience"
            ],
            icon: <Smartphone size={32} />
        }
    ];

    const services = [
        "Complete Shopify Conversion Audit",
        "Landing Page Optimization",
        "Product Page Optimization",
        "Cart & Checkout Optimization",
        "Funnel Optimization Strategy",
        "A/B Testing Management",
        "Customer Journey Mapping",
        "Behavioral Analytics Setup",
        "Retention & Repeat Purchase Optimization",
        "Shopify Speed & Performance Optimization"
    ];

    const industries = [
        "Fashion & Apparel",
        "Beauty & Skincare",
        "Electronics & Gadgets",
        "Health & Wellness",
        "D2C Brands",
        "Luxury Retail",
        "Subscription-Based Stores"
    ];

    const differentiators = [
        {
            title: "Performance Marketing Intelligence",
            desc: "We align CRO with your traffic source for maximum relevance.",
            icon: <TrendingUp size={24} />
        },
        {
            title: "Advanced Analytics Integration",
            desc: "Deep tracking setup to measure every micro-interaction.",
            icon: <Database size={24} />
        },
        {
            title: "Funnel Engineering",
            desc: "Architecting journeys that naturally lead to conversions.",
            icon: <Layers size={24} />
        },
        {
            title: "Psychological Triggers",
            desc: "Leveraging behavior principles to influence buying decisions.",
            icon: <Brain size={24} />
        },
        {
            title: "Revenue-Focused Experimentation",
            desc: "Every test is measured against profit, not just clicks.",
            icon: <Rocket size={24} />
        }
    ];

    const tools = [
        { title: "Advanced Analytics Platforms", icon: <BarChart3 /> },
        { title: "Heatmapping & Session Recording Tools", icon: <Target /> },
        { title: "A/B Testing Software", icon: <Zap /> },
        { title: "Funnel Tracking Systems", icon: <Layers /> },
        { title: "Shopify Performance Enhancers", icon: <Activity /> },
        { title: "UX Research Tools", icon: <Users /> }
    ];

    const impact = [
        "Higher Conversion Rate",
        "Reduced Cart Abandonment",
        "Increased Average Order Value",
        "Better Customer Retention",
        "Improved Return on Ad Spend",
        "Stronger Revenue Growth"
    ];

    const steps = [
        "Audit & Identify Revenue Gaps",
        "Prioritize High-Impact Opportunities",
        "Implement & Test",
        "Measure & Scale Winning Variations",
        "Continuous Optimization Loop"
    ];

    return (
        <div className="bg-white text-slate-900 overflow-hidden">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10 animate-fade-in-up text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-tight leading-[1.1] text-white">
                            Shopify CRO Services
                        </h1>
                        <h2 className="text-[32px] font-medium mb-6 text-white">
                            Turn More Traffic Into Revenue
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-[16px] md:text-[18px] mb-6 font-semibold text-white leading-relaxed">
                                High traffic. Low conversions. That’s where growth gets stuck.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium opacity-95">
                                We transform your Shopify store into a high-performing sales engine with data-driven CRO strategies, behavioral insights, and continuous experimentation. At Adkryoss managed by <span className="font-semibold underline decoration-blue-400">Clink Consultancy Services Private Limited</span>, we deliver measurable revenue lift.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl flex items-center gap-3">
                                <Zap className="text-blue-400" size={24} />
                                <span className="font-semibold text-white text-sm tracking-widest uppercase">Optimize. Test. Scale. Repeat.</span>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/05/Shopify-CRO1.webp"
                            alt="Shopify CRO"
                            className="max-w-[350px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl"
                        />
                    </div>
                </div>
            </section>

            {/* Why Shopify CRO Matters */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[42px] font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                                Why Shopify CRO Matters
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                    Running ads and driving traffic is only half the battle. If your Shopify store isn’t optimized for conversion, you’re leaking revenue every single day.
                                </p>
                                <div className="p-8 bg-white border-l-8 border-blue-600 rounded-r-2xl shadow-sm leading-relaxed text-slate-700 font-medium italic">
                                    "At Adkryoss managed by <span className="font-semibold text-blue-600 underline">Clink Consultancy Services Private Limited</span>, we approach Shopify CRO as a science, not a design tweak."
                                </div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium mt-6">
                                    We combine analytics, psychology, UX intelligence, and A/B experimentation to build conversion-focused digital storefronts.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 h-full">
                            {[
                                { title: "Improve Conversion %", icon: <TrendingUp /> },
                                { title: "Add to Cart Rate", icon: <ShoppingBag /> },
                                { title: "Checkout Success", icon: <CheckCircle2 /> },
                                { title: "Revenue Growth", icon: <RotateCcw /> }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-4 text-center group hover:shadow-xl hover:-translate-y-2 transition-all">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-slate-900 leading-tight">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Shopify CRO Approach */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto text-center mb-16">
                    <h2 className="text-[42px] font-extrabold mb-6 tracking-tight text-white">Our Shopify CRO Approach</h2>
                    <p className="text-blue-200/80 max-w-2xl mx-auto font-medium mb-10">We don’t believe in random “best practices.” We build structured, insight-driven frameworks that maximize performance.</p>
                    <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="container px-6 mx-auto flex flex-wrap justify-center gap-10">
                    {approach.map((item, index) => (
                        <div key={index} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)]">
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                {item.icon}
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">"{item.desc}"</p>
                            <div className="space-y-3 flex-grow">
                                {item.points.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[42px] font-extrabold text-slate-900 mb-16 text-center leading-tight tracking-tight">
                        What Makes Our Shopify CRO Different?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {differentiators.map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-6 group hover:shadow-2xl hover:-translate-y-2 transition-all w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] font-extrabold text-slate-900 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-16 text-center text-xl font-semibold text-blue-600">We don’t optimize for clicks. We optimize for profit.</p>
                </div>
            </section>

            {/* Shopify CRO Services We Offer */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[42px] font-extrabold text-slate-900 mb-16 text-center leading-tight tracking-tight">
                        Shopify CRO Services We Offer
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-50 hover:border-blue-100 transition-all w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black shrink-0">
                                    {index + 1}
                                </div>
                                <span className="text-[17px] font-semibold text-slate-800 tracking-tight">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Execution Framework */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Industries */}
                        <div>
                            <h2 className="text-[32px] font-extrabold mb-10 text-white tracking-tight">Industries We Serve</h2>
                            <p className="text-blue-200/80 mb-10 font-medium">We optimize Shopify stores across high-growth categories:</p>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((item, index) => (
                                    <div key={index} className="px-8 py-5 bg-white text-slate-900 rounded-2xl font-black transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16 bg-white/5 p-10 rounded-[40px] border border-white/10 shadow-2xl">
                                <h2 className="text-[32px] font-extrabold mb-10 text-white tracking-tight text-center">Impact You Can Expect</h2>
                                <div className="space-y-6">
                                    {impact.map((item, index) => (
                                        <div key={index} className="flex items-center gap-5 group">
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-extrabold group-hover:scale-110 transition-transform">
                                                ✔
                                            </div>
                                            <span className="font-bold text-lg text-white opacity-90 group-hover:opacity-100 transition-opacity tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 text-center text-blue-400 font-bold italic">When optimization meets strategy, growth becomes predictable.</p>
                            </div>
                        </div>
                        {/* Execution Framework */}
                        <div className="flex flex-col gap-12">
                            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 shadow-2xl">
                                <h2 className="text-[32px] font-extrabold mb-10 text-white tracking-tight">Our CRO Execution Framework</h2>
                                <div className="space-y-8">
                                    {steps.map((step, index) => (
                                        <div key={index} className="flex gap-6 items-start group">
                                            <div className="text-blue-400 font-extrabold text-lg py-2 min-w-[100px] uppercase tracking-wider">Step {index + 1}</div>
                                            <div className="flex-1 border-l-2 border-white/10 pl-6 py-2 group-hover:border-blue-500 transition-colors">
                                                <h3 className="text-[20px] md:text-[24px] mb-4 font-bold text-xl text-white opacity-95 group-hover:text-white transition-colors tracking-tight">
                                                    {step}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 text-blue-300 font-bold italic text-center">CRO is not a one-time fix. It’s a growth system.</p>
                            </div>

                            {/* Tools section */}
                            <div className="bg-white/5 p-10 rounded-[42px] border border-white/10 shadow-2xl">
                                <h2 className="text-[32px] font-extrabold mb-10 text-white tracking-tight">Tools & Technologies We Use</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {tools.map((tool, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 group hover:bg-blue-600 transition-all">
                                            <div className="text-blue-400 group-hover:text-white">
                                                {tool.icon}
                                            </div>
                                            <span className="text-sm font-bold text-white tracking-tight">{tool.title}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-blue-400 font-bold italic text-sm opacity-80 text-center">We integrate the right tech stack to ensure peak performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto animate-fade-in text-left md:text-center">
                    <h2 className="text-[42px] font-extrabold mb-10 leading-tight text-white tracking-tight">Ready to Unlock Hidden Revenue?</h2>
                    <div className="space-y-12">
                        <div className="text-2xl font-semibold opacity-90 max-w-3xl text-white mx-auto leading-relaxed">
                            <p className="text-[16px] md:text-[18px] mb-6 text-white">
                                Your Shopify store already has traffic. <br /> Let’s convert it into profit.
                            </p>
                        </div>
                        <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white font-medium opacity-90 max-w-3xl mx-auto italic">
                            Partner with Adkryoss managed by <span className="font-semibold underline decoration-blue-300">Clink Consultancy Services Private Limited</span> and turn your Shopify store into a scalable, conversion-focused revenue machine.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <p className="text-[16px] md:text-[18px] mb-6 font-black text-white italic tracking-tighter leading-tight pb-4">
                                Start optimizing today.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#0066CC] py-6 px-16 rounded-[25px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                                Transform My Shopify Store
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopifyCRO;
