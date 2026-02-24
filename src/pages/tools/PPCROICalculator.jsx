import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PPCROICalculatorPopup from '../../components/tools/PPCROICalculatorPopup';
import {
    Calculator,
    TrendingUp,
    BarChart,
    Target,
    Clock,
    PieChart,
    ArrowRight,
    HelpCircle,
    ShieldCheck,
    MousePointer2,
    Users,
    Briefcase,
    Rocket,
    LineChart,
    Zap,
    Scale,
    Search,
    RefreshCw,
    Gauge,
    DollarSign,
    AlertTriangle,
    CheckCircle2
} from 'lucide-react';

const PPCROICalculator = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">PPC ROI Calculator – Instantly Measure the Real Profit Behind Your Ads</h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
                            Stop guessing. Start calculating. Our PPC ROI Calculator helps you estimate how much revenue your paid campaigns can generate — before you scale your budget.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="bg-[#0066cc] hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2"
                            >
                                Start Calculating Now <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Clarity Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        Whether you’re running Google Ads, social media ads, or display campaigns, this tool gives you quick clarity on performance potential and profitability.
                    </p>
                </div>
            </section>

            {/* Definition Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
                                Definitions
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">What is a PPC ROI Calculator?</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                A PPC ROI Calculator is a performance estimation tool that helps businesses measure the return on investment from paid advertising campaigns. It calculates expected revenue, cost per acquisition, profit margin, and overall ROI based on your ad spend and conversion metrics.
                            </p>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Instead of relying on assumptions, you get a data-backed projection that supports smarter budgeting and scaling decisions.
                            </p>
                            <div className="p-8 bg-white rounded-3xl border border-blue-100 shadow-sm font-medium text-gray-700 italic">
                                "This tool is designed for founders, marketers, and performance-driven brands that want clarity before increasing ad spend."
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                                <DollarSign size={40} className="text-green-600 mb-4" />
                                <span className="font-bold text-gray-900">Revenue</span>
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                                <Scale size={40} className="text-blue-600 mb-4" />
                                <span className="font-bold text-gray-900">Profit Margin</span>
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center col-span-2">
                                <PieChart size={40} className="text-purple-600 mb-4" />
                                <span className="font-bold text-gray-900">ROI Analytics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Matters Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Why PPC ROI Calculation Matters</h2>
                        <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed">
                            Running ads without calculating ROI is like investing without tracking returns. Understanding your projected ROI helps you:
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {[
                                { text: "Identify profitable budgets", icon: <Target className="text-blue-500" /> },
                                { text: "Optimize bidding strategies", icon: <TrendingUp className="text-blue-500" /> },
                                { text: "Forecast revenue growth", icon: <LineChart className="text-blue-500" /> },
                                { text: "Reduce wasted ad spend", icon: <AlertTriangle className="text-red-500" /> },
                                { text: "Improve scalability", icon: <Rocket className="text-blue-500" /> }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group">
                                    <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <span className="text-lg font-bold text-gray-800">{item.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                            <p className="text-xl text-blue-900 font-bold italic">
                                "At Adkryoss managed by Clink Consultancy Services Private Limited, we strongly believe performance marketing should always be backed by measurable data — not guesswork."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">How the PPC ROI Calculator Works</h2>
                            <p className="text-xl text-blue-200/70 font-light">Our calculator uses core PPC metrics to estimate profitability.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold flex items-center gap-3"><RefreshCw className="text-blue-400" /> You simply enter:</h3>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {["Total ad spend", "Expected cost per click (CPC)", "Conversion rate (%)", "Average order value (AOV)", "Profit margin (%)"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span className="font-semibold text-blue-50">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-green-400"><BarChart /> Instantly estimates:</h3>
                                <div className="space-y-6">
                                    {["Total clicks generated", "Expected conversions", "Revenue projection", "Net profit", "ROI percentage"].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center text-lg pb-4 border-b border-white/5">
                                            <span className="text-blue-200">{item}</span>
                                            <CheckCircle2 size={24} className="text-green-500" />
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-sm italic text-blue-300 opacity-60 text-center">
                                    This structured approach ensures that your paid campaigns are aligned with business profitability, not just traffic growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/[0.02] -skew-x-12 translate-x-1/2"></div>
            </section>

            {/* Audience Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Who Should Use This Tool?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Startups", icon: <Rocket /> },
                            { name: "E-commerce", icon: <Zap /> },
                            { name: "Service Brands", icon: <Briefcase /> },
                            { name: "Marketing Managers", icon: <Search /> },
                            { name: "Founders", icon: <Users /> }
                        ].map((audience, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-3xl text-center hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue-100 group">
                                <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                                    {React.cloneElement(audience.icon, { size: 32 })}
                                </div>
                                <h4 className="font-bold text-gray-800 leading-tight">{audience.name}</h4>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-16 text-2xl font-bold text-blue-600 max-w-3xl mx-auto italic">
                        "If you want predictable growth from paid campaigns, calculating ROI before scaling is non-negotiable."
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-blue-600 text-white rounded-t-[4rem]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-10">Benefits of Using Our PPC ROI Calculator</h2>
                            <div className="space-y-6">
                                {[
                                    "Quick and easy projections",
                                    "No complex formulas required",
                                    "Strategic budget planning",
                                    "Profit-first campaign approach",
                                    "Data-driven decision making"
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-4 text-xl">
                                        <ShieldCheck className="text-blue-300" size={28} />
                                        <span className="font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-12 bg-white rounded-[3rem] text-[#0f172a] shadow-2xl">
                            <p className="text-2xl leading-relaxed italic font-light">
                                "At Adkryoss managed by Clink Consultancy Services Private Limited, we use ROI-first frameworks to design performance marketing strategies that focus on long-term profitability, not short-term vanity metrics."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Key Metrics That Influence PPC ROI</h2>
                        <p className="text-xl text-gray-600 font-light italic">To maximize your ROI, focus on optimizing these core performance factors:</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Click-Through Rate (CTR)", desc: "The percentage of people who click your ad after seeing it.", icon: <MousePointer2 /> },
                            { name: "Cost Per Click (CPC)", desc: "The average price you pay for each click on your advertisement.", icon: <DollarSign /> },
                            { name: "Conversion Rate (CVR)", desc: "The rate at which clicks turn into measurable business outcomes.", icon: <RefreshCw /> },
                            { name: "Customer Lifetime Value (CLV)", desc: "The total revenue a single customer generates over time.", icon: <Users /> },
                            { name: "Quality Score", desc: "Google's assessment of the quality and relevance of your ads.", icon: <Gauge /> },
                            { name: "Landing Page Optimization", desc: "Ensuring your destination page maximizes conversion potential.", icon: <LineChart /> }
                        ].map((metric, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-500 transition-all group">
                                <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform">{metric.icon}</div>
                                <h4 className="text-xl font-bold mb-3">{metric.name}</h4>
                                <p className="text-gray-600 leading-relaxed font-light">{metric.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-16 text-lg text-gray-500 font-bold max-w-2xl mx-auto">
                        Modern PPC success depends on smart targeting, AI-powered bidding strategies, and continuous conversion rate optimization.
                    </p>
                </div>
            </section>

            {/* Common Mistakes Section */}
            <section className="py-24 bg-gray-50 overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-gray-100">
                        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Common Mistakes That Reduce PPC ROI</h2>
                        <div className="grid sm:grid-cols-2 gap-8 mb-12">
                            {[
                                "Ignoring landing page experience",
                                "Scaling budget without validating rate",
                                "Poor keyword intent targeting",
                                "Not tracking micro-conversions",
                                "Overlooking customer lifetime value"
                            ].map((mistake, i) => (
                                <div key={i} className="flex gap-4 items-start border-l-4 border-red-500 pl-6 py-2">
                                    <span className="text-lg font-bold text-gray-800 leading-tight">{mistake}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-xl font-bold text-blue-600 italic">
                            Avoiding these mistakes can dramatically improve profitability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choice Adkryoss */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-10 text-gray-900 leading-tight">Why Choose Adkryoss for PPC Campaign Management?</h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                                While this calculator gives you projections, real performance requires strategic execution. <span className="font-bold text-[#0f172a]">Adkryoss managed by Clink Consultancy Services Private Limited</span> combines:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Advanced audience research",
                                    "AI-driven bidding strategies",
                                    "High-converting landing pages",
                                    "Funnel-based campaign structuring",
                                    "Continuous A/B testing",
                                    "Performance tracking & reporting"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                        <CheckCircle2 className="text-blue-600 shadow-sm" />
                                        <span className="font-bold text-blue-900">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full"></div>
                            <div className="relative p-12 bg-white rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center">
                                <Rocket size={120} className="text-blue-600 mb-8 animate-bounce" />
                                <h3 className="text-3xl font-bold mb-4 text-[#0f172a]">Let's Build Your Engine</h3>
                                <p className="text-lg text-gray-600 font-light mb-8 italic">
                                    "We don’t just run ads. We build scalable revenue engines."
                                </p>
                                <button

                                    onClick={() => {
                                        window.location.href = "/contact";
                                    }}
                                    className="w-full py-5 bg-[#0f172a] text-white font-extrabold rounded-2xl hover:bg-blue-900 transition-all shadow-xl">
                                    Book Performance Strategy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-blue-700 to-indigo-900 text-white">
                <div className="container mx-auto px-6 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Take Control of Your Ad Profitability</h2>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        Use our PPC ROI Calculator to estimate your campaign potential today. Want expert-backed execution? Let’s build campaigns that deliver measurable returns and sustainable growth.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="px-14 py-6 bg-white text-blue-900 font-black text-2xl rounded-full shadow-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                        >
                            Open Calculator
                        </button>
                    </div>
                    <div className="pt-12 text-blue-300/80 font-extrabold uppercase tracking-[0.3em] text-sm animate-pulse">
                        Start Calculating. Start Scaling.
                    </div>
                </div>
            </section>

            {/* PPC ROI Calculator Popup */}
            <PPCROICalculatorPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    );
};

export default PPCROICalculator;
