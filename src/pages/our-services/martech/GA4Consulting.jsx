import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ga4hero from "../../../assets/martech/ga4hero.png";
import {
    CheckCircle2,
    ArrowRight,
    Zap,
    Search,
    Smartphone,
    Monitor,
    Activity,
    Brain,
    Rocket,
    LineChart,
    ChevronDown,
    ChevronUp,
    Target,
    ShoppingCart
} from 'lucide-react';

const GA4Consulting = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const setupServices = [
        "Property & Data Stream Setup",
        "Enhanced Measurement Configuration",
        "Custom Event & Parameter Tracking",
        "Cross-Domain Tracking",
        "Ecommerce Tracking Implementation"
    ];

    const migrationSteps = [
        "Auditing your existing UA setup",
        "Rebuilding event tracking logic",
        "Recreating goals as conversions",
        "Validating data accuracy post-migration"
    ];

    const trackingTools = [
        "Google Tag Manager (GTM)",
        "Scroll & Engagement Tracking",
        "Button & Form Submission Tracking",
        "Video & Dynamic Element Tracking",
        "Custom Funnel Mapping"
    ];

    const ecommerceOptimization = [
        "Product View & Add-to-Cart Tracking",
        "Purchase & Revenue Attribution",
        "Checkout Funnel Analysis",
        "Refund & Subscription Tracking",
        "Enhanced Ecommerce Reporting"
    ];

    const reportingTools = [
        "Custom Exploration Reports",
        "Funnel & Path Analysis",
        "Cohort Analysis",
        "Predictive Metrics (Purchase Probability, Churn Risk)",
        "Looker Studio Integration"
    ];

    const croInsights = [
        "Landing Page Drop-Off Analysis",
        "User Journey Mapping",
        "Heatmap & Behavioral Tool Integration",
        "A/B Testing Insights Support"
    ];

    const approach = [
        {
            step: "01",
            title: "Discovery & Audit",
            desc: "We analyze your current analytics setup, campaign tracking structure, and business objectives."
        },
        {
            step: "02",
            title: "Strategy & Architecture",
            desc: "We design a scalable event-based tracking framework aligned with your marketing and sales funnels."
        },
        {
            step: "03",
            title: "Implementation",
            desc: "Our experts configure GA4, GTM, and integrations with CRM, Ads, and ecommerce platforms."
        },
        {
            step: "04",
            title: "Validation & Testing",
            desc: "We ensure tracking accuracy with real-time debugging and data verification."
        },
        {
            step: "05",
            title: "Optimization & Reporting",
            desc: "We continuously refine tracking parameters and provide insights that drive growth."
        }
    ];

    const differentiators = [
        "Event-Based Data Precision",
        "Custom Business-Aligned Dashboards",
        "Privacy-First Tracking Strategy",
        "Cross-Platform Attribution",
        "Predictive Analytics Insights"
    ];

    const industries = [
        "Ecommerce & Retail", "BFSI", "EdTech & Education",
        "Healthcare", "Real Estate", "SaaS & Tech Startups"
    ];

    const tools = [
        "Google Analytics 4", "Google Tag Manager", "Google Ads",
        "Looker Studio", "BigQuery", "Meta Ads", "CRM Integrations"
    ];

    const faqs = [
        {
            q: "What is the difference between GA4 and Universal Analytics?",
            a: "GA4 uses event-based tracking instead of session-based tracking, enabling better cross-device insights and predictive analytics."
        },
        {
            q: "Can GA4 track ecommerce sales accurately?",
            a: "Yes, with proper enhanced ecommerce implementation and validation."
        },
        {
            q: "How long does GA4 implementation take?",
            a: "Depending on complexity, it can take 1–3 weeks including testing and validation."
        },
        {
            q: "Do you provide custom dashboards?",
            a: "Yes, we create tailored dashboards aligned with business KPIs and reporting needs."
        }
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
                            GA4 Consulting Services
                        </h1>
                        <h2 className="text-[24px] font-medium mb-8 text-white">
                            Unlock Accurate, Actionable Insights with Advanced GA4 Consulting
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-relaxed text-white font-medium">
                            Data is powerful—only when it’s accurate, structured, and aligned with business goals. Our GA4 Consulting Services help you transform raw analytics into measurable growth strategies. From seamless migration to advanced event tracking and cross-channel attribution, we ensure your analytics ecosystem drives real ROI.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl flex items-center gap-3">
                                <Activity className="text-blue-400" size={24} />
                                <span className="font-semibold text-white text-sm tracking-widest">Actionable Data ROI</span>
                            </div> */}
                        </div>

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
                                src={ga4hero}
                                alt="GA4 Consulting"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl"
                            /></div>
                    </div>
                </div>
            </section>

            {/* Why Your Business Needs GA4 Expertise */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-8 leading-tight">
                                Why Your Business Needs GA4 Expertise
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                    Google Analytics 4 is not just an upgrade—it’s a completely new measurement framework built on event-based tracking, predictive insights, and cross-device analytics.
                                </p>
                                <div className="p-8 bg-white border-l-8 border-blue-600 rounded-r-2xl shadow-sm italic text-slate-600 font-semibold">
                                    "Without the right configuration, businesses risk inaccurate data, broken funnels, and lost insights."
                                </div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                    Adkryoss managed by <span className="font-semibold text-blue-600">Clink Consultancy Services Private Limited</span> helps organizations implement, optimize, and leverage GA4 to unlock powerful customer intelligence across websites, apps, and digital campaigns.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            {[
                                { title: "Event-Based Tracking", icon: <Target className="text-blue-600" /> },
                                { title: "Predictive Insights", icon: <Brain className="text-blue-600" /> },
                                { title: "Cross-Device Analytics", icon: <Smartphone className="text-blue-600" /> }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-6 group hover:translate-x-2 transition-transform">
                                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our GA4 Consulting Services */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-[36px] font-bold mb-6 tracking-tight text-white">Our GA4 Consulting Services</h2>
                        <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Setup & Config */}
                        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                GA4 Setup & Configuration
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">We design a customized GA4 architecture aligned with your KPIs.</p>
                            <div className="space-y-3">
                                {setupServices.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Migration */}
                        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                <Rocket size={32} />
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                GA4 Migration from UA
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">Ensuring a smooth transition from Universal Analytics.</p>
                            <div className="space-y-3">
                                {migrationSteps.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Event Tracking */}
                        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                <Monitor size={32} />
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                Advanced Event Tracking
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">Precision tracking for modern marketing demands.</p>
                            <div className="space-y-3">
                                {trackingTools.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ecommerce */}
                        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                <ShoppingCart size={32} />
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                Ecommerce & Conversion Optimization
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">Because every micro-conversion matters.</p>
                            <div className="space-y-3">
                                {ecommerceOptimization.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Analysis & Reporting */}
                        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                <LineChart size={32} />
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                GA4 Data Analysis & Reporting
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">Transforming noise into actionable interpretation.</p>
                            <div className="space-y-3">
                                {reportingTools.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CRO Insights */}
                        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                <Search size={32} />
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                CRO Insights
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">Identifying friction points and growth opportunities.</p>
                            <div className="space-y-3">
                                {croInsights.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our GA4 Consulting Approach */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4 leading-tight">Our GA4 Consulting Approach</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 font-medium max-w-2xl mx-auto">
                            A structured engineering process to ensure data integrity and growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {approach.map((item, index) => (
                            <div key={index} className="p-8 bg-slate-50 border border-slate-100 rounded-[30px] transition-all hover:shadow-xl hover:-translate-y-2 group flex flex-col">
                                <div className="text-[48px] font-black text-blue-600/10 leading-none mb-6 group-hover:text-blue-600/20 transition-all italic">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 font-medium text-[15px] leading-relaxed flex-grow">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different & Industries */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Differentiators */}
                        <div>
                            <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">What Makes Us Different?</h2>
                            <div className="space-y-6">
                                {differentiators.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-colors">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">
                                            ✔
                                        </div>
                                        <span className="font-bold text-lg text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-blue-300 font-medium italic opacity-90 leading-relaxed">
                                Adkryoss managed by <span className="font-bold">Clink Consultancy Services Private Limited</span> focuses on measurable performance rather than vanity metrics.
                            </p>
                        </div>

                        {/* Industries */}
                        <div className="bg-white/5 p-12 rounded-[50px] border border-white/10">
                            <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Industries We Serve</h2>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((industry, index) => (
                                    <div key={index} className="px-8 py-5 bg-white text-slate-900 rounded-2xl font-black transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                        {industry}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools We Work With */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-12 leading-tight">Tools & Platforms We Work With</h2>
                    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                        {tools.map((tool, index) => (
                            <div key={index} className="px-10 py-6 bg-slate-50 border border-slate-100 rounded-3xl flex items-center gap-4 font-bold text-slate-900 group hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md">
                                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                                <span className="text-lg">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4 leading-tight">GA4 Consulting Intelligence (FAQs)</h2>
                        <p className="text-xl text-blue-600 font-medium italic">Answers to help you navigate your analytics transition.</p>
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
                    <h2 className="text-[36px] font-bold mb-10 leading-tight text-white tracking-tight">Ready to Turn Data into Revenue?</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-2xl text-white font-medium opacity-90 max-w-3xl mx-auto leading-relaxed">
                        Analytics should empower decisions—not confuse them.
                    </p>
                    <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white font-medium opacity-80 max-w-3xl mx-auto italic">
                        Partner with Adkryoss managed by <span className="font-bold">Clink Consultancy Services Private Limited</span> to build a robust, scalable, and future-ready GA4 framework that fuels measurable digital growth.
                    </p>
                    <div className="flex flex-col items-center gap-10">
                        <p className="text-[16px] md:text-[18px] mb-6 text-3xl font-medium text-white italic tracking-tighter leading-none pb-4">
                            Let’s build smarter analytics today.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#0066CC] py-6 px-16 rounded-[25px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                            Start Growth Journey
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GA4Consulting;

