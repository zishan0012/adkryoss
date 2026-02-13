<<<<<<< Updated upstream
import React from 'react';

const SEOResellerServices = () => {
    return (
        <div className="container" style={{ padding: '80px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '20px' }}>
                    SEO Reseller Services
                </h1>
                <p style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                    Partner with us to offer SEO services to your clients under your brand.
                </p>
            </div>
=======
import React from "react";
import { Link } from "react-router-dom";
import {
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Shield,
    Users,
    Settings,
    Target,
    Search,
} from "lucide-react";

const SEOResellerServices = () => {
    const offerings = [
        {
            title: "White-Label SEO Execution",
            icon: <Settings size={32} />,
            desc: "End-to-end SEO delivered under your agency’s brand — from strategy to reporting.",
        },
        {
            title: "Dedicated SEO Team",
            icon: <Users size={32} />,
            desc: "Access SEO strategists, technical experts, content specialists, and link-building professionals.",
        },
        {
            title: "Transparent Reporting",
            icon: <BarChart3 size={32} />,
            desc: "Custom-branded reports with real metrics — rankings, traffic growth, leads, and performance insights.",
        },
        {
            title: "Scalable Delivery Model",
            icon: <Target size={32} />,
            desc: "From 1 client to 100+ clients — our systems scale as your agency grows.",
        },
    ];

    const whoItsFor = [
        "Digital marketing agencies",
        "Web development companies",
        "Freelancers managing multiple SEO clients",
        "Branding agencies adding SEO services",
        "International agencies outsourcing SEO",
    ];
    const resellerSolutions = [
        {
            title: "SEO Strategy & Roadmap",
            points: [
                "Competitor benchmarking",
                "Keyword gap analysis",
                "Search intent mapping",
                "Custom SEO growth plan",
            ],
        },
        {
            title: "On-Page SEO",
            points: [
                "Technical optimization",
                "Schema implementation",
                "Content structuring",
                "Internal linking frameworks",
            ],
        },
        {
            title: "Technical SEO",
            points: [
                "Site audits & error fixes",
                "Core Web Vitals optimization",
                "Crawlability & indexability",
                "Site architecture improvements",
            ],
        },
        {
            title: "Content Marketing",
            points: [
                "SEO-optimized blog creation",
                "Landing page content",
                "Topic cluster strategy",
                "AI-assisted + human-optimized writing",
            ],
        },
        {
            title: "Authority Building",
            points: [
                "High-quality backlinks",
                "Digital PR outreach",
                "Niche edits & guest posts",
                "Brand mentions",
            ],
        },
        {
            title: "Local & Enterprise SEO",
            points: [
                "Google Business Profile optimization",
                "Multi-location SEO",
                "Enterprise site management",
                "Large-scale technical implementation",
            ],
        },
    ];
    const resellerWorkflow = [
        {
            step: "Onboarding & Discovery",
            desc: "We understand your agency goals, client niche, and pricing model.",
        },
        {
            step: "Strategy Development",
            desc: "A custom SEO roadmap is prepared for each client.",
        },
        {
            step: "Execution",
            desc: "Our team handles audits, content, links, and optimization.",
        },
        {
            step: "Reporting & Scaling",
            desc: "Branded monthly reports with clear KPIs and strategic recommendations.",
        },
    ];
    const differentiators = [
        {
            title: "Performance-First Approach",
            desc: "We track rankings, traffic, leads, and ROI — not vanity metrics.",
        },
        {
            title: "Process-Driven Execution",
            desc: "Clear SOPs, defined timelines, and measurable milestones.",
        },
        {
            title: "Ethical SEO Only",
            desc: "White-hat techniques aligned with Google’s latest updates.",
        },
        {
            title: "Modern SEO Stack",
            desc: "AI insights, automation tools, and real-time analytics to stay ahead of algorithm shifts.",
        },
        {
            title: "Complete Confidentiality",
            desc: "100% white-label delivery. Your brand always stays in front.",
        },
    ];
    const seoTools = [
        "Google Search Console & Analytics 4",
        "SEMrush / Ahrefs",
        "Screaming Frog",
        "Surfer SEO",
        "AI-driven content research tools",
        "Advanced reporting dashboards",
    ];

    return (
        <div>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-16 h-120 md:py-20 flex items-center relative overflow-hidden text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[48px] font-bold mb-[22px] tracking-[-1.5px] leading-none text-white">
                            SEO Reseller Services
                        </h1>

                        <h3 className="text-[24px] font-medium mb-6 text-white">
                            Scale Your Agency. Deliver Results. Stay Invisible.
                        </h3>

                        <p className="text-[18px] leading-[1.8] text-white mb-10 max-w-[540px]">
                            White-label SEO solutions designed to help agencies expand revenue,
                            retain clients, and dominate search — without hiring an in-house team.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2.5 bg-[#3b82f6] text-white py-4 px-10 rounded-full text-[17px] font-bold no-underline transition-all duration-300 hover:bg-[#22c55e] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(34,197,94,0.4)]"
                            >
                                Speak to an Expert <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                    {/* RIGHT IMAGE (Add placeholder if needed) */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        {/* You can add a relevant image here later if available */}
                    </div>
                </div>
            </section>

            {/* WHY */}
            <section className="py-20 bg-white">
                <div className="container">
                    {/* Heading */}
                    <div className="max-w-[900px] mx-auto mb-[60px] text-center">
                        <h2 className="text-[42px] font-bold mb-6 text-[#0f172a]">
                            Why SEO Reseller Services?
                        </h2>

                        <p className="text-[18px] leading-[1.8] text-[#475569]">
                            The demand for SEO is exploding — but building an expert team,
                            investing in tools, and managing execution can slow down your
                            growth.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-[1000px] mx-auto bg-[#f8fafc] p-10 md:p-[50px] rounded-[24px] border border-[#e2e8f0]">
                        <p className="text-[18px] leading-[1.8] text-[#334155] mb-8">
                            That’s where{" "}
                            <span className="font-bold text-[#0f172a]">
                                Adkryoss managed by Clink Consultancy Services Private Limited
                            </span>{" "}
                            steps in as your strategic backend SEO partner. We work silently
                            in the background while you take full credit in front of your
                            clients.
                        </p>

                        {/* Focus Split */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-10">
                            {/* You */}
                            <div className="bg-white p-[35px] rounded-[20px] border border-[#e2e8f0] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.18)]">
                                <h3 className="text-[22px] font-bold mb-4 text-[#2563eb]">
                                    You Focus On
                                </h3>

                                <p className="text-[17px] leading-[1.7] text-[#0f172a] m-0">
                                    Acquiring and managing clients.
                                </p>
                            </div>

                            {/* Us */}
                            <div className="bg-white p-[35px] rounded-[20px] border border-[#e2e8f0] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_34px_rgba(30,64,175,0.25)] border-l-4 border-l-[#16a34a]">
                                <h3 className="text-[22px] font-bold mb-4 text-[#16a34a]">
                                    We Focus On
                                </h3>

                                <p className="text-[17px] leading-[1.7] text-[#0f172a] m-0">
                                    Rankings, traffic, and measurable ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE OFFER */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[42px] font-bold text-center mb-[60px] text-[#0f172a]">
                        What We Offer
                    </h2>

                    <div className="flex flex-wrap gap-[30px] justify-center">
                        {offerings.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-10 rounded-[24px] w-[320px] border border-[#e2e8f0] transition-all duration-300 cursor-pointer hover:bg-[#0066cc] hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] group"
                            >
                                <div className="text-[#0066cc] mb-6 transition-colors group-hover:text-white">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] font-bold mb-4 text-[#0f172a] transition-colors group-hover:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-base text-[#64748b] leading-relaxed transition-colors group-hover:text-white/90">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* SOLUTIONS */}
            <section id="solutions" className="py-24 bg-[#eff6ff]">
                <div className="container">
                    {/* Heading */}
                    <div className="max-w-[900px] mx-auto mb-[70px] text-center">
                        <h2 className="text-[42px] font-bold mb-5 text-[#0f172a]">
                            Our SEO Reseller Solutions
                        </h2>

                        <p className="text-[18px] leading-[1.8] text-[#334155]">
                            We don’t just offer SEO services. We offer structured growth
                            systems.
                        </p>
                    </div>

                    {/* Solution Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                        {resellerSolutions.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-10 rounded-[30px] border border-[#dbeafe] shadow-[0_12px_30px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(59,130,246,0.15)]"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold mb-6">
                                    {index + 1}
                                </div>

                                <h3 className="text-[22px] font-bold mb-5 text-[#0f172a]">
                                    {item.title}
                                </h3>

                                <ul className="space-y-3 p-0 list-none">
                                    {item.points.map((pt, i) => (
                                        <li key={i} className="text-base leading-relaxed text-[#475569] flex gap-2.5">
                                            <CheckCircle2 size={18} className="text-[#3b82f6] shrink-0 mt-1" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* WORKFLOW */}
            <section className="py-24 bg-[#f9fafb]">
                <div className="container">
                    {/* Heading */}
                    <div className="max-w-[900px] mx-auto mb-[80px] text-center">
                        <h2 className="text-[42px] font-bold mb-5 text-[#0f172a]">
                            How Our Reseller Model Works
                        </h2>

                        <p className="text-[18px] leading-[1.8] text-[#475569]">
                            A structured, system-driven SEO workflow designed for scale and
                            consistency.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1200px] mx-auto relative">
                        {resellerWorkflow.map((item, index) => (
                            <div
                                key={index}
                                className="text-center relative group"
                            >
                                {/* Step Circle */}
                                <div className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-[0_10px_25px_rgba(37,99,235,0.3)] transition-all group-hover:scale-110">
                                    {index + 1}
                                </div>

                                <h3 className="text-[20px] font-bold mb-4 text-[#0f172a]">
                                    {item.step}
                                </h3>

                                <p className="text-base leading-[1.7] text-[#64748b]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Closing Statement */}
                    <div className="max-w-[1000px] mx-auto mt-20 p-10 bg-white rounded-[30px] border border-[#e5e7eb] text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3b82f6]/20">
                        <p className="text-[18px] leading-[1.8] text-[#334155] m-0">
                            Through{" "}
                            <span className="font-bold text-[#0f172a]">
                                Adkryoss managed by Clink Consultancy Services Private Limited
                            </span>
                            , agencies get a structured, system-driven SEO workflow that
                            ensures consistency and predictable outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHO ITS FOR */}
            <section className="py-20 bg-white">
                <div className="container">
                    <h2 className="text-[42px] font-bold text-center mb-10 text-[#0f172a]">
                        Who Is This For?
                    </h2>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {whoItsFor.map((item, i) => (
                            <div
                                key={i}
                                className="py-4 px-10 bg-[#f8fafc] rounded-full font-bold text-[#0066cc] border border-[#e2e8f0] transition-all duration-300 hover:bg-[#0066cc] hover:text-white hover:-translate-y-2 hover:shadow-lg"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATORS */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container">
                    {/* Heading */}
                    <div className="max-w-[900px] mx-auto mb-[70px] text-center">
                        <h2 className="text-[42px] font-bold mb-5 text-[#0f172a]">
                            What Makes Us Different
                        </h2>

                        <p className="text-[18px] leading-[1.8] text-[#64748b]">
                            Built for agencies that value performance, transparency, and
                            long-term growth.
                        </p>
                    </div>

                    {/* Differentiator Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-10 rounded-[28px] border border-[#e2e8f0] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                            >
                                {/* Accent bar */}
                                <div className="w-12 h-1.5 bg-[#0066cc] rounded-full mb-6 transition-all group-hover:w-20"></div>

                                <h3 className="text-[22px] font-bold mb-4 text-[#0f172a]">
                                    {item.title}
                                </h3>

                                <p className="text-base leading-[1.7] text-[#64748b] m-0">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* INDUSTRIES */}
            <section className="py-24 bg-white">
                <div className="container">
                    {/* Heading */}
                    <div className="max-w-[880px] mx-auto mb-16 text-center">
                        <h2 className="text-[40px] font-bold mb-4 text-[#0f172a]">
                            Industries We Serve
                        </h2>

                        <p className="text-[18px] leading-[1.8] text-[#64748b]">
                            Every industry has unique search behavior. Our strategies adapt
                            accordingly.
                        </p>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 max-w-[1100px] mx-auto">
                        {[
                            "E-commerce",
                            "SaaS & Tech",
                            "Healthcare",
                            "Real Estate",
                            "Education",
                            "Finance",
                            "B2B Services",
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className="bg-[#f8fafc] py-6 px-4 rounded-[18px] border border-[#e2e8f0] text-center text-base font-bold text-[#0f172a] transition-all duration-300 hover:border-[#0066cc] hover:text-[#0066cc] hover:bg-white hover:shadow-md cursor-default"
                            >
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* TOOLS */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container">
                    {/* Heading */}
                    <div className="max-w-[900px] mx-auto mb-16 text-center">
                        <h2 className="text-[40px] font-bold mb-4 text-[#0f172a]">
                            Tools & Technologies We Leverage
                        </h2>

                        <p className="text-[18px] leading-[1.8] text-[#64748b]">
                            We use industry-leading tools combined with proven SEO processes to
                            deliver measurable results at scale.
                        </p>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
                        {seoTools.map((tool, index) => (
                            <div
                                key={index}
                                className="bg-white py-6 px-8 rounded-2xl border border-[#e2e8f0] text-base font-bold text-[#0f172a] shadow-sm transition-all duration-300 hover:border-[#0066cc] hover:shadow-lg flex items-center gap-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#0066cc]"></div>
                                {tool}
                            </div>
                        ))}
                    </div>

                    {/* Closing Statement */}
                    <div className="max-w-[1000px] mx-auto mt-20 p-10 bg-white rounded-[30px] border border-[#e2e8f0] text-center shadow-lg shadow-gray-200/50">
                        <p className="text-[18px] leading-[1.8] text-[#334155] m-0">
                            <span className="font-bold text-[#0f172a]">
                                Adkryoss managed by Clink Consultancy Services Private Limited
                            </span>{" "}
                            blends human strategy with automation to create sustainable organic
                            growth systems.
                        </p>
                    </div>
                </div>
            </section>
            {/* BENEFITS */}
            <section className="py-24 bg-[#0f172a] text-white">
                <div className="container">
                    {/* Heading */}
                    <div className="max-w-[1000px] mx-auto mb-16 text-center">
                        <h2 className="text-white text-[44px] font-bold mb-5 leading-tight">
                            Benefits of Partnering With Us
                        </h2>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
                        {[
                            "Increase recurring revenue",
                            "Reduce operational costs",
                            "Deliver faster results",
                            "Improve client retention",
                            "Expand service offerings",
                            "Scale without overhead",
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-2xl py-6 px-8 flex items-center gap-4 text-base font-bold transition-all duration-300 hover:bg-[#16a34a]/20 hover:border-[#16a34a] hover:-translate-y-1"
                            >
                                {/* Check Icon */}
                                <div className="w-7 h-7 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                                    ✓
                                </div>

                                {benefit}
                            </div>
                        ))}
                    </div>

                    {/* Closing Statement */}
                    <div className="max-w-[1000px] mx-auto mt-20 text-center opacity-80 italic">
                        <p className="text-[18px] leading-[1.8] text-[#cbd5e1] m-0">
                            SEO isn’t a one-time campaign. It’s a long-term growth engine. With the
                            right backend partner, it becomes your most profitable service.
                        </p>
                    </div>
                </div>
            </section>
            {/* FINAL CTA */}
            <section className="py-24 text-center bg-gradient-to-br from-[#3b82f6] to-[#1e40af] text-white">
                <div className="container">
                    <h2 className="text-[56px] font-bold text-white mb-6 leading-tight">
                        Ready to Scale Your Agency?
                    </h2>

                    <p className="text-[22px] mb-12 max-w-[800px] mx-auto text-white opacity-90 leading-relaxed">
                        Turn SEO into your most profitable service — without hiring or
                        overhead.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3.5 bg-white text-[#1e40af] py-5 px-14 rounded-full text-[20px] font-bold no-underline transition-all duration-300 hover:bg-[#22c55e] hover:text-white hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#22c55e]/40"
                    >
                        Partner With Us <ArrowRight size={24} />
                    </Link>
                </div>
            </section>

>>>>>>> Stashed changes
        </div>
    );
};

export default SEOResellerServices;
