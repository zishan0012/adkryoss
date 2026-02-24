import React from 'react';
import { Link } from 'react-router-dom';
import croservicehero from "../../../assets/martech/croservicehero.png";
import {
    Target,
    Zap,
    Users,
    ArrowRight,
    CheckCircle2,
    Layout,
    Layers,
    ShoppingCart,
    Activity,
    LineChart,
    PieChart,
    Search,
    Brain,
    ShieldCheck,
    Smartphone,
    Monitor,
    Workflow,
    MessageSquare,
    TrendingUp
} from 'lucide-react';

const CROServices = () => {
    const philSteps = [
        {
            title: "1. Deep Conversion Audit",
            desc: "We analyze critical areas to find growth opportunities.",
            points: [
                "Traffic sources & intent mapping",
                "Funnel drop-off points",
                "Heatmaps & session recordings",
                "UX friction areas",
                "Page speed & mobile usability",
                "CTA positioning & copy gaps"
            ]
        },
        {
            title: "2. Behavior & Intent Analysis",
            desc: "We decode the 'why' behind user actions.",
            points: [
                "Why users hesitate",
                "Where trust breaks",
                "What objections stop conversions",
                "Which devices perform best",
                "Micro vs macro conversion patterns"
            ]
        },
        {
            title: "3. Hypothesis Development",
            desc: "Every change is backed by data.",
            points: [
                "Data-led decision making",
                "No random design tweaks",
                "No vanity improvements"
            ]
        },
        {
            title: "4. A/B & Multivariate Testing",
            desc: "We test variables to find the winning combination.",
            points: [
                "Headlines & copy",
                "Layout structures",
                "Visual hierarchy",
                "CTA colors & placements",
                "Forms & checkout flow",
                "Pricing presentation",
                "Trust signals & social proof"
            ]
        },
        {
            title: "5. Continuous Optimization",
            desc: "CRO is an iterative cycle that compounds results.",
            points: [
                "Performance monitoring",
                "Monthly growth reports",
                "Ongoing experimentation",
                "Iterative design cycles"
            ]
        }
    ];

    const services = [
        {
            icon: <Monitor size={32} />,
            title: "Website CRO",
            desc: "We optimize complete website journeys — homepage to checkout — ensuring a consistent and persuasive experience."
        },
        {
            icon: <Layout size={32} />,
            title: "Landing Page Optimization",
            desc: "High-converting, campaign-ready landing pages designed for performance marketing success."
        },
        {
            icon: <ShoppingCart size={32} />,
            title: "E-commerce Conversion Optimization",
            desc: "Reduce cart abandonment, improve checkout UX, increase average order value (AOV), and enhance product page persuasion."
        },
        {
            icon: <Users size={32} />,
            title: "Lead Generation Funnel Optimization",
            desc: "From form optimization to CRM integration — we improve both lead quality and volume."
        },
        {
            icon: <PieChart size={32} />,
            title: "UX & UI Performance Enhancement",
            desc: "We redesign for clarity, trust, and conversion — not just aesthetics."
        },
        {
            icon: <Smartphone size={32} />,
            title: "Mobile CRO",
            desc: "With mobile traffic dominating digital channels, we ensure frictionless mobile experiences that convert."
        }
    ];

    const alignment = [
        { title: "Paid Advertising Campaigns", icon: <TrendingUp size={24} /> },
        { title: "SEO Traffic", icon: <Search size={24} /> },
        { title: "Social Media Funnels", icon: <Layers size={24} /> },
        { title: "Remarketing Campaigns", icon: <Activity size={24} /> },
        { title: "Marketing Automation Workflows", icon: <Zap size={24} /> }
    ];

    const industries = [
        "E-commerce", "BFSI", "Real Estate", "Education & EdTech",
        "Healthcare", "SaaS & Tech Startups", "B2B Enterprises"
    ];

    const metrics = [
        "Conversion Rate", "Cost Per Acquisition (CPA)", "Customer Acquisition Cost (CAC)",
        "Average Order Value (AOV)", "Bounce Rate", "Cart Abandonment Rate",
        "Lead-to-Sales Ratio", "Revenue Per Visitor"
    ];

    const chooseUs = [
        { title: "Data-backed experimentation", icon: <Activity size={24} /> },
        { title: "AI-powered user behavior insights", icon: <Brain size={24} /> },
        { title: "Conversion copy expertise", icon: <MessageSquare size={24} /> },
        { title: "Funnel intelligence", icon: <Workflow size={24} /> },
        { title: "Transparent reporting dashboards", icon: <LineChart size={24} /> },
        { title: "ROI-focused execution", icon: <ShieldCheck size={24} /> }
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
                            CRO Services (CRO)?
                        </h1>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-relaxed text-white font-medium">
                            Conversion Rate Optimization (CRO) is the science of increasing the percentage of website visitors who take a desired action — whether it’s a purchase, form submission, demo booking, or app download.
                        </p>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-relaxed text-white font-medium">
                            At Adkryoss managed by <span className="font-semibold">Clink Consultancy Services Private Limited</span>, CRO is not about guesswork or random A/B tests. It’s about combining analytics, behavioral insights, UX strategy, and performance marketing intelligence to build a measurable growth engine.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl flex items-center gap-3">
                                <Zap className="text-yellow-400" size={24} />
                                <span className="font-semibold text-white text-sm tracking-widest">Transform Traffic to Revenue</span>
                            </div> */}
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
                                src={croservicehero}
                                alt="CRO Services"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Intro Section */}
            {/* <section className="py-20 bg-white border-b border-slate-100">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-6">
                        We transform traffic into revenue without increasing ad spend.
                    </h2>
                </div>
            </section> */}

            {/* Why Your Business Needs Section */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6 leading-tight">
                            Why Your Business Needs CRO Now
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                            Most businesses focus on generating traffic. Few focus on maximizing its value.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { title: "High ad spend delivers low ROI", icon: "💰" },
                            { title: "Visitors drop off at key funnel stages", icon: "📉" },
                            { title: "Landing pages underperform", icon: "📑" },
                            { title: "Leads don’t convert into sales", icon: "🤝" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2 group">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-slate-900 leading-tight">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto p-12 bg-white rounded-[40px] shadow-2xl border border-blue-50 relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-6">Turn Clicks Into Customers. Predictably.</h3>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 leading-relaxed font-medium">
                            Your traffic is growing. But are your conversions? <br />
                            We don’t just optimize pages — we engineer profitable user journeys.
                        </p>
                        <div className="inline-flex items-center gap-4 bg-blue-50 px-8 py-4 rounded-full text-blue-600 font-extrabold text-sm tracking-tighter shadow-inner">
                            Data. Psychology. Testing. Growth.
                        </div>
                    </div>
                </div>
            </section>

            {/* What is CRO Detailed */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-8 leading-tight">
                                What Is Conversion Rate Optimization
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium italic mb-8 border-l-8 border-blue-500 pl-8">
                                "Revenue growth stagnates without effective optimization."
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                CRO ensures every visitor has a seamless, persuasive, and frictionless journey — from first click to final conversion.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-12 rounded-[50px] text-white relative shadow-2xl">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-[50px]"></div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 text-2xl font-semibold text-white tracking-tighter">
                                Our CRO Philosophy:
                            </h3>
                            <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white font-medium italic leading-tight">
                                Data First. Decisions Later.
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-[16px] md:text-[18px] mb-6 text-white text-lg leading-relaxed opacity-90 italic font-medium">
                                    At Adkryoss managed by <span className="text-blue-400 font-semibold">Clink Consultancy Services Private Limited</span>, we follow a structured, performance-led approach inspired by global growth frameworks and enhanced with AI-driven insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy & Steps */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-wrap justify-center gap-10">
                        {philSteps.map((item, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 rounded-[32px] p-10 transition-all duration-300 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)] min-w-[300px] grow cursor-pointer group hover:border-blue-500 hover:-translate-y-3 hover:shadow-2xl">
                                <div className="text-blue-500 font-extrabold text-5xl mb-8 group-hover:scale-110 transition-transform opacity-30 tracking-tighter leading-none">
                                    Step 0{index + 1}
                                </div>
                                <h3 className="text-[24px] font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 mb-8 font-medium italic leading-relaxed text-xs tracking-widest">
                                    "{item.desc}"
                                </p>
                                <div className="space-y-4">
                                    {item.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-[15px] text-slate-700 leading-relaxed group-hover:translate-x-1 transition-transform">
                                            <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                                            <span className="font-semibold">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our CRO Services */}
            <section id="services" className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-[36px] font-bold mb-6 leading-tight text-white tracking-tight">
                            Our CRO Services
                        </h2>
                        <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <div key={index} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:-translate-y-2">
                                <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                    {service.icon}
                                </div>
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-white opacity-80 leading-relaxed font-medium m-0">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="max-w-5xl mx-auto rounded-[50px] bg-gradient-to-br from-[#0066CC] to-[#004999] p-16 text-white relative shadow-[0_30px_60px_-12px_rgba(0,102,204,0.4)] overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                        <h2 className="text-[36px] font-bold mb-10 leading-tight text-white tracking-tight">CRO + Performance Marketing = Maximum ROI</h2>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-xl font-medium italic text-white leading-relaxed">
                                    Traffic without optimization burns budget. <br />
                                    Optimization without traffic limits growth.
                                </p>
                                <p className="text-[16px] md:text-[18px] mb-6 text-lg opacity-90 leading-relaxed text-white font-medium">
                                    At Adkryoss managed by <span className="font-bold">Clink Consultancy Services Private Limited</span>, we align CRO with your entire marketing ecosystem to ensure that your acquisition strategy and conversion strategy work together — not in isolation.
                                </p>
                            </div>
                            <div className="grid gap-4">
                                {alignment.map((item, index) => (
                                    <div key={index} className="bg-white/10 p-5 rounded-2xl flex items-center gap-5 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:translate-x-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-lg text-white">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries & Metrics */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Industries */}
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-10 leading-tight tracking-tight">Industries We Optimize For</h2>
                            <p className="text-lg text-slate-600 font-medium mb-10 italic">
                                "Every industry has different user psychology. We adapt strategies accordingly."
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((item, index) => (
                                    <div key={index} className="px-8 py-5 bg-white border-2 border-slate-100 rounded-2xl font-black text-slate-900 shadow-sm transition-all hover:border-blue-500 hover:text-blue-600 hover:-translate-y-1">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Metrics */}
                        <div className="bg-slate-900 p-12 rounded-[50px] text-white shadow-2xl">
                            <h2 className="text-[36px] font-bold mb-8 text-white tracking-tight">Key Metrics We Improve</h2>
                            <div className="space-y-4">
                                {metrics.map((point, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-[3] transition-transform"></div>
                                        <span className="font-bold text-white text-lg opacity-90 transition-opacity group-hover:opacity-100">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-12 text-blue-400 font-medium italic text-xl">
                                We focus on metrics that directly impact profitability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6">Why Choose Us for CRO?</h2>
                        <p className="text-xl text-slate-600 font-medium italic inline-block pb-2">"Because we don’t treat CRO as a design upgrade — we treat it as a revenue multiplier."</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {chooseUs.map((item, index) => (
                            <div key={index} className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105 border border-transparent hover:border-blue-100 group">
                                <div className="text-blue-600 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-[18px] font-black text-slate-900 leading-tight tracking-tight">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-20 text-slate-900">
                        <h2 className="text-[36px] font-bold mb-6 tracking-tight">Our CRO Workflow</h2>
                        <div className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xl tracking-tighter shadow-2xl">
                            Discovery <ArrowRight size={24} className="text-blue-500" /> Audit <ArrowRight size={24} className="text-blue-500" /> Strategy <ArrowRight size={24} className="text-blue-500" /> Experimentation <ArrowRight size={24} className="text-blue-500" /> Validation <ArrowRight size={24} className="text-blue-500" /> Scale
                        </div>
                    </div>
                    <div className="text-center grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm font-bold">Each stage is measurable.</div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm font-bold">Each decision is trackable.</div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm font-bold">Each result is optimized for revenue growth.</div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto animate-fade-in">
                    <h2 className="text-[36px] font-bold mb-10 leading-tight text-white tracking-tight">Ready to Unlock Hidden Revenue?</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-2xl text-white font-medium opacity-90 max-w-3xl mx-auto leading-relaxed">
                        You don’t need more traffic. <br />
                        <span className="text-white">You need better conversions.</span>
                    </p>
                    <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white font-medium opacity-80 max-w-2xl mx-auto italic">
                        Let’s turn your existing visitors into consistent revenue streams.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#0066CC] py-6 px-16 rounded-[25px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                        Start Your CRO Growth Journey Today
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CROServices;

