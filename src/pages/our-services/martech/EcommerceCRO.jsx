import React, { useState } from 'react';
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
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const EcommerceCRO = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const framework = [
        {
            title: "1. Deep Data & Behavior Analysis",
            desc: "This helps us uncover friction points that impact conversions.",
            points: [
                "Google Analytics 4 insights",
                "Heatmaps & session recordings",
                "Funnel drop-offs",
                "User flow behavior",
                "Device-level performance"
            ],
            icon: <Search size={32} />
        },
        {
            title: "2. UX & Conversion Audit",
            desc: "We create a prioritized CRO roadmap based on impact vs effort.",
            points: [
                "Homepage effectiveness",
                "Category & product page performance",
                "Search functionality",
                "Checkout usability",
                "Mobile responsiveness",
                "Trust signals & social proof"
            ],
            icon: <Monitor size={32} />
        },
        {
            title: "3. Hypothesis & Experimentation",
            desc: "No guesswork. Only measurable impact.",
            points: [
                "A/B Testing & Multivariate Testing",
                "CTA optimization & Placement tests",
                "Pricing & offer experiments",
                "Checkout redesign tests",
                "Layout restructuring"
            ],
            icon: <Zap size={32} />
        },
        {
            title: "4. Personalization & Smart Targeting",
            desc: "Modern ecommerce CRO is beyond button color changes.",
            points: [
                "Behavior-based personalization",
                "Geo-targeted content & offers",
                "Dynamic product recommendations",
                "Returning user experiences",
                "Cart abandonment recovery journeys"
            ],
            icon: <Target size={32} />
        },
        {
            title: "5. Continuous Optimization Cycle",
            desc: "CRO is not a one-time project.",
            points: [
                "Monthly experiment pipeline",
                "Performance reporting dashboards",
                "Incremental revenue tracking",
                "Iterative improvement strategy"
            ],
            icon: <RotateCcw size={32} />
        }
    ];

    const services = [
        {
            title: "Conversion Audit & Strategy",
            desc: "A detailed 360° analysis of your ecommerce store with actionable recommendations and growth forecasting.",
            icon: <BarChart3 size={24} />
        },
        {
            title: "Landing Page Optimization",
            desc: "High-converting landing pages aligned with user intent and paid campaigns.",
            icon: <Layout size={24} />
        },
        {
            title: "Product Page Optimization",
            desc: "Improving product storytelling, visuals, reviews, trust badges, and CTA placements.",
            icon: <ShoppingBag size={24} />
        },
        {
            title: "Checkout Optimization",
            desc: "Reducing cart abandonment through simplified checkout, trust elements, and UX enhancements.",
            icon: <ShoppingCart size={24} />
        },
        {
            title: "A/B & Multivariate Testing",
            desc: "Scientific experimentation framework to improve conversion rate, AOV, and revenue per visitor.",
            icon: <Activity size={24} />
        },
        {
            title: "Funnel Optimization",
            desc: "Optimizing every stage from awareness to purchase and repeat buying.",
            icon: <Layers size={24} />
        },
        {
            title: "Mobile CRO",
            desc: "Optimizing speed, UX, and friction points specifically for mobile users.",
            icon: <Smartphone size={24} />
        },
        {
            title: "Retention & Upsell Optimization",
            desc: "Increasing Average Order Value (AOV), Repeat purchase rate, and CLV.",
            icon: <TrendingUp size={24} />
        }
    ];

    const differentiators = [
        {
            title: "Performance-First Mindset",
            desc: "Every strategy is aligned with revenue impact — not vanity metrics.",
            icon: <Rocket size={24} />
        },
        {
            title: "Integrated Marketing Intelligence",
            desc: "We align CRO with SEO, Paid Media, and Email automation.",
            icon: <Brain size={24} />
        },
        {
            title: "Data + Psychology",
            desc: "Behavioral science meets persuasion principles to influence buying decisions.",
            icon: <Users size={24} />
        },
        {
            title: "Transparent Reporting",
            desc: "Clear dashboards showing real experiment results and revenue impact.",
            icon: <ShieldCheck size={24} />
        }
    ];

    const industries = ["Fashion & Apparel", "Beauty & Skincare", "Electronics", "D2C Brands", "Healthcare Products", "Home & Lifestyle", "B2B Ecommerce"];

    const tools = ["Google Analytics 4", "Google Tag Manager", "Hotjar", "Microsoft Clarity", "VWO", "Optimizely", "Shopify", "WooCommerce", "Magento"];

    const roiPoints = [
        "Increase conversion rates by 20–60%",
        "Reduce cost per acquisition",
        "Improve AOV (Average Order Value)",
        "Increase repeat purchases",
        "Boost profitability without increasing ad spend"
    ];

    const timeline = [
        { period: "Week 1–2", task: "Audit & Research" },
        { period: "Week 3–4", task: "Strategy & Hypothesis Planning" },
        { period: "Month 2–3", task: "Experiment Execution" },
        { period: "Ongoing", task: "Continuous Testing & Scaling" }
    ];

    const faqs = [
        {
            q: "How long does it take to see results?",
            a: "Initial uplift can be observed within 30–60 days depending on traffic volume and testing frequency."
        },
        {
            q: "Do you work with all ecommerce platforms?",
            a: "Yes. Adkryoss managed by Clink Consultancy Services Private Limited works across Shopify, WooCommerce, Magento, and custom-built platforms."
        },
        {
            q: "Is CRO better than running more ads?",
            a: "CRO improves revenue from existing traffic, making paid ads more profitable. Ideally, both should work together."
        }
    ];

    return (
        <div className="bg-white text-slate-900 overflow-hidden">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-16 h-120 md:py-20 flex items-center relative overflow-hidden text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10 animate-fade-in-up text-white">
                        <h1 className="text-[48px] font-extrabold mb-6 tracking-tight leading-[1.1] text-white">
                            Ecommerce CRO Services
                        </h1>
                        <h2 className="text-[32px] font-semibold mb-6 text-white">
                            Turn Traffic Into Revenue. Not Just Visits.
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-[20px] font-semibold text-white leading-relaxed">
                                Your ecommerce store doesn’t need more traffic. It needs higher conversions, smarter journeys, and frictionless buying experiences.
                            </p>
                            <p className="text-[18px] text-white font-medium opacity-95">
                                At Adkryoss managed by <span className="font-semibold underline decoration-blue-400">Clink Consultancy Services Private Limited</span>, we help ecommerce businesses unlock hidden revenue through data-driven CRO.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl flex items-center gap-3">
                                <Zap className="text-blue-400" size={24} />
                                <span className="font-semibold text-white text-sm tracking-widest uppercase">Maximize Your ROI</span>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Service-CRO.webp"
                            alt="Ecommerce CRO"
                            className="max-w-[500px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl"
                        />
                    </div>
                </div>
            </section>

            {/* Why Ecommerce CRO Is No Longer Optional */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[42px] font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                                Why Ecommerce CRO Is No Longer Optional
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[18px] text-slate-700 leading-relaxed font-medium">
                                    Driving traffic without optimizing conversion is like pouring water into a leaking bucket. In today's landscape, optimization is the only way to scale sustainably.
                                </p>
                                <div className="p-8 bg-white border-l-8 border-blue-600 rounded-r-2xl shadow-sm leading-relaxed text-slate-700 font-medium italic">
                                    "Adkryoss managed by <span className="font-semibold text-blue-600 underline">Clink Consultancy Services Private Limited</span> focuses on identifying revenue leaks, improving buying journeys, and increasing customer lifetime value."
                                </div>
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <h3 className="text-xl font-semibold mb-6 text-slate-900">The Challenges We Solve:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Paid media costs are rising",
                                            "User attention spans are shrinking",
                                            "Customers expect seamless experiences",
                                            "70%+ carts are abandoned"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 group">
                                                <CheckCircle2 className="text-blue-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                                <span className="font-semibold text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 h-lg">
                            {[
                                { title: "Rising Costs", icon: <TrendingUp /> },
                                { title: "Short Attention", icon: <Activity /> },
                                { title: "Seamless UX", icon: <Monitor /> },
                                { title: "Cart Recovery", icon: <ShoppingCart /> }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-4 text-center group hover:shadow-xl hover:-translate-y-2 transition-all">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 leading-tight">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Ecommerce CRO Framework */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto text-center mb-16">
                    <h2 className="text-[42px] font-extrabold mb-6 tracking-tight text-white">Our Ecommerce CRO Framework</h2>
                    <p className="text-blue-200/80 max-w-2xl mx-auto font-medium mb-10">We follow a performance-first, experimentation-led methodology inspired by global best practices.</p>
                    <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="container px-6 mx-auto flex flex-wrap justify-center gap-10">
                    {framework.map((item, index) => (
                        <div key={index} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)]">
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                {item.icon}
                            </div>
                            <h3 className="text-[22px] font-semibold mb-4 text-white tracking-tight">{item.title}</h3>
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

            {/* Ecommerce CRO Services We Offer */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[42px] font-black text-slate-900 mb-16 text-center leading-tight tracking-tight">
                        Ecommerce CRO Services We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((item, index) => (
                            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-4 group hover:shadow-2xl hover:-translate-y-2 transition-all hover:bg-white">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[42px] font-extrabold text-slate-900 mb-16 text-center leading-tight tracking-tight">
                        What Makes Our CRO Approach Different?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {differentiators.map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex items-start gap-8 group hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl shrink-0 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-[22px] font-black mb-4 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed text-lg">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Timeline */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Industries */}
                        <div>
                            <h2 className="text-[32px] font-black mb-10 text-white tracking-tight">Industries We Serve</h2>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((item, index) => (
                                    <div key={index} className="px-8 py-5 bg-white text-slate-900 rounded-2xl font-black transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16 bg-white/5 p-10 rounded-[40px] border border-white/10 shadow-2xl">
                                <h2 className="text-[32px] font-black mb-10 text-white tracking-tight text-center">ROI of Ecommerce CRO</h2>
                                <div className="space-y-6">
                                    {roiPoints.map((item, index) => (
                                        <div key={index} className="flex items-center gap-5 group">
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">
                                                ✔
                                            </div>
                                            <span className="font-bold text-lg text-white opacity-90 group-hover:opacity-100 transition-opacity tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Process & Tools */}
                        <div className="flex flex-col gap-12">
                            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 shadow-2xl">
                                <h2 className="text-[32px] font-black mb-10 text-white tracking-tight">Our Process Timeline</h2>
                                <div className="space-y-8">
                                    {timeline.map((item, index) => (
                                        <div key={index} className="flex gap-6 items-start group">
                                            <div className="text-blue-400 font-black text-lg py-2 min-w-[120px] uppercase tracking-wider">{item.period}</div>
                                            <div className="flex-1 border-l-2 border-white/10 pl-6 py-2 group-hover:border-blue-500 transition-colors">
                                                <h3 className="font-bold text-xl text-white opacity-95 group-hover:text-white transition-colors tracking-tight">{item.task}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 p-10 rounded-[42px] border border-white/10 shadow-2xl">
                                <h2 className="text-[32px] font-black mb-10 text-white tracking-tight">Tools & Technologies We Leverage</h2>
                                <div className="flex flex-wrap gap-3">
                                    {tools.map((tool, index) => (
                                        <span key={index} className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-sm font-bold text-blue-200 group hover:bg-blue-600 hover:text-white transition-all">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-8 text-blue-400 font-bold italic text-sm opacity-80">Our tech-agnostic approach ensures compatibility with your ecommerce stack.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[42px] font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">Frequently Asked Questions</h2>
                        <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="max-w-[800px] mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-200 transition-colors shadow-sm bg-white">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className={`w-full p-8 text-left flex justify-between items-center transition-all duration-300 ${openFaq === index ? 'bg-slate-50' : 'bg-white'}`}
                                >
                                    <span className="text-xl font-bold text-slate-900 tracking-tight pr-8">{faq.q}</span>
                                    {openFaq === index ? <ChevronUp className="text-blue-600 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                                </button>
                                {openFaq === index && (
                                    <div className="p-8 pt-0 bg-slate-50 text-lg text-slate-600 leading-relaxed font-medium">
                                        <div className="w-full h-px bg-slate-200 mb-8 opacity-50"></div>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto animate-fade-in text-left md:text-center">
                    <h2 className="text-[42px] font-black mb-10 leading-tight text-white tracking-tight">Ready to Turn Clicks Into Customers?</h2>
                    <div className="space-y-12">
                        <div className="text-2xl font-bold opacity-90 max-w-3xl text-white mx-auto leading-relaxed">
                            <p className="mb-4 text-white">Stop leaking revenue. Start optimizing every interaction.</p>
                        </div>
                        <p className="text-xl text-white font-medium opacity-90 max-w-3xl mx-auto italic">
                            Adkryoss managed by <span className="font-bold underline decoration-blue-300">Clink Consultancy Services Private Limited</span> helps ecommerce brands build conversion-driven ecosystems that scale sustainably.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <p className="text-[32px] font-black text-white italic tracking-tighter leading-tight pb-4">
                                Let’s transform your store into a high-converting revenue engine.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#0066CC] py-6 px-16 rounded-[25px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                                Transform My Store
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EcommerceCRO;
