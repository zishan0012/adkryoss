import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CROCalculatorPopup from '../../components/tools/CROCalculatorPopup';
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
    Gauge
} from 'lucide-react';

const CROCalculator = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">CRO Calculator – Instantly Measure & Improve Your Conversion Performance</h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
                            Turn traffic into tangible growth. Use our smart CRO Calculator to evaluate how effectively your website converts visitors into leads, customers, or revenue — and discover the true impact of optimization.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2"
                            >
                                Calculate Your Conversion Rate <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Definition Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
                                Definitions
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">What is a CRO Calculator?</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                A Conversion Rate Optimization (CRO) Calculator helps you determine the percentage of website visitors who complete a desired action — whether it’s filling out a form, making a purchase, downloading a resource, or booking a consultation.
                            </p>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Instead of guessing performance, this tool gives you measurable clarity.
                            </p>
                            <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-blue-600 italic text-gray-700">
                                "At Adkryoss managed by Clink Consultancy Services Private Limited, we believe every click should have purpose. Your traffic is valuable — conversion is what drives business growth."
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-8 rounded-3xl text-center flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                                <Users size={40} className="text-blue-600 mb-4" />
                                <span className="text-sm font-semibold text-blue-800 uppercase">Traffic</span>
                            </div>
                            <div className="bg-green-50 p-8 rounded-3xl text-center flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                                <RefreshCw size={40} className="text-green-600 mb-4" />
                                <span className="text-sm font-semibold text-green-800 uppercase">Optimization</span>
                            </div>
                            <div className="bg-purple-50 p-8 rounded-3xl text-center flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md col-span-2">
                                <Zap size={40} className="text-purple-600 mb-4" />
                                <span className="text-sm font-semibold text-purple-800 uppercase">Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formula Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-gray-900">How to Calculate Conversion Rate?</h2>
                        <div className="bg-blue-900 text-white p-12 rounded-[2rem] shadow-2xl relative overflow-hidden mb-12 transform transition-transform hover:scale-[1.01]">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Calculator size={120} />
                            </div>
                            <p className="text-2xl font-light text-white mb-8 opacity-80">The formula is simple:</p>
                            <div className="text-3xl md:text-5xl font-mono font-semibold tracking-tighter mb-4">
                                Conversion Rate (%) = (Total Conversions ÷ Total Visitors) × 100
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
                            <h4 className="text-xl font-bold mb-6 text-gray-800 italic">Example Scenario:</h4>
                            <p className="text-2xl text-gray-600 leading-relaxed">
                                If your website had <span className="font-bold text-gray-900">10,000 visitors</span> and <span className="font-bold text-gray-900">300 conversions</span>:
                            </p>
                            <div className="text-3xl font-bold text-blue-600 mt-6 bg-blue-50 py-4 px-8 rounded-full inline-block">
                                (300 ÷ 10,000) × 100 = 3% Conversion Rate
                            </div>
                            <p className="mt-8 text-lg text-gray-500 font-medium max-w-2xl mx-auto">
                                Even a small improvement — say from 3% to 4% — can significantly increase revenue without increasing traffic spend.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why CRO Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">Why Conversion Rate Matters More Than Traffic</h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                Driving traffic is only half the equation. Sustainable digital growth depends on how efficiently you convert that traffic.
                            </p>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {[
                                    { text: "Lower cost per acquisition (CPA)", icon: <Target className="text-blue-500" /> },
                                    { text: "Better ROI on paid campaigns", icon: <TrendingUp className="text-blue-500" /> },
                                    { text: "Improved user experience", icon: <MousePointer2 className="text-blue-500" /> },
                                    { text: "Higher revenue without extra ad spend", icon: <LineChart className="text-blue-500" /> },
                                    { text: "Stronger sales funnel performance", icon: <BarChart className="text-blue-500" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group">
                                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <span className="text-lg font-bold text-gray-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 bg-[#0f172a] p-12 rounded-[3rem] text-white">
                            <div className="text-center space-y-8">
                                <Gauge size={100} className="mx-auto text-blue-500 animate-pulse" />
                                <h3 className="text-3xl font-bold">Conversion Intelligence</h3>
                                <p className="text-lg text-blue-200 font-light leading-relaxed italic">
                                    "Modern digital marketing is not just about visibility — it’s about conversion intelligence."
                                </p>
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="w-full py-5 bg-white text-[#0f172a] font-extrabold rounded-2xl hover:bg-blue-100 transition-colors shadow-xl"
                                >
                                    Measure Yours Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Help Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How Our CRO Calculator Helps You</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Calculate Rate", desc: "Instantly calculate your current conversion rate", icon: <Calculator /> },
                            { title: "Revenue Impact", desc: "Estimate potential revenue impact", icon: <TrendingUp /> },
                            { title: "Performance Gaps", desc: "Identify performance gaps", icon: <Search /> },
                            { title: "Improvement Opps", desc: "Benchmark improvement opportunities", icon: <LineChart /> },
                            { title: "Budget Planning", desc: "Understand ROI before increasing ad budgets", icon: <PieChart /> }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20 p-12 bg-white rounded-[3rem] shadow-xl border border-blue-50">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-2xl text-gray-700 leading-relaxed text-center mb-10 font-light">
                                <span className="font-bold text-gray-900">At Adkryoss managed by Clink Consultancy Services Private Limited</span>, we integrate data-backed CRO strategies including A/B testing, heatmap analysis, funnel optimization, UX enhancement, behavioral targeting, and AI-driven personalization.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["A/B Testing", "Heatmaps", "Funnel Optimization", "UX Enhancement", "AI Personalization", "Behavioral Targeting"].map((tag, i) => (
                                    <span key={i} className="px-6 py-3 bg-blue-50 text-blue-800 rounded-full font-bold text-sm border border-blue-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benchmarks Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">What is a Good Conversion Rate?</h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Conversion rates vary by industry, device, and traffic source. The real benchmark is continuous improvement.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { industry: "E-commerce", range: "1% – 3%", color: "blue" },
                            { industry: "Lead Generation", range: "2% – 5%", color: "indigo" },
                            { industry: "SaaS & B2B", range: "3% – 7%", color: "purple" }
                        ].map((item, i) => (
                            <div key={i} className={`p-10 rounded-[2.5rem] bg-${item.color}-50 border border-${item.color}-100 text-center transform hover:scale-105 transition-all duration-300`}>
                                <h3 className={`text-2xl font-extrabold text-${item.color}-900 mb-4`}>{item.industry}</h3>
                                <div className={`text-5xl font-black text-${item.color}-600 mb-4 tracking-tighter`}>{item.range}</div>
                                <p className={`text-${item.color}-800/60 text-sm font-semibold uppercase tracking-widest`}>Average Benchmark</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-12 text-2xl font-bold text-blue-600 italic">
                        "The best-performing brands don’t chase averages — they optimize relentlessly."
                    </p>
                </div>
            </section>

            {/* Improvement Section */}
            <section className="py-24 bg-[#0f172a] text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-bold mb-10 text-white leading-tight">How to Improve Your Conversion Rate</h2>
                            <p className="text-blue-100/70 text-lg mb-12">
                                If your current rate is underperforming, here’s where optimization starts. Modern CRO combines behavioral psychology, UX science, and performance marketing strategy.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    "Improve page load speed",
                                    "Simplify CTAs and forms",
                                    "Optimize landing page design",
                                    "Use persuasive copywriting",
                                    "Add social proof & trust signals",
                                    "Optimize for mobile-first experience",
                                    "Run structured A/B tests",
                                    "Align messaging with search intent"
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center text-blue-400 font-bold group-hover:scale-110 transition-transform">
                                            {i + 1}
                                        </div>
                                        <span className="font-semibold text-blue-50 transition-colors group-hover:text-white leading-tight">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>
                                <div className="relative bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl shadow-2xl">
                                    <Gauge size={200} className="text-blue-500/50" />
                                    <div className="mt-8 space-y-4">
                                        <div className="h-4 w-48 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-blue-600 rounded-full animate-pulse"></div>
                                        </div>
                                        <div className="h-4 w-32 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-1/2 bg-blue-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="bg-blue-600 rounded-[3.5rem] p-12 md:p-24 text-white relative shadow-2xl shadow-blue-500/30">
                        {/* <div className="absolute bottom-0 right-0 p-12 opacity-10 hidden lg:block">
                            <Calculator size={300} />
                        </div> */}
                        <h2 className="text-4xl font-bold mb-16 text-center text-white">Who Should Use This CRO Calculator?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                { name: "Business Owners", icon: <Briefcase /> },
                                { name: "Digital Marketers", icon: <Search /> },
                                { name: "E-commerce Brands", icon: <Zap /> },
                                { name: "Startups", icon: <Rocket /> },
                                { name: "Performance Teams", icon: <LineChart /> }
                            ].map((audience, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-8 bg-black/10 rounded-3xl backdrop-blur-md hover:bg-black/20 transition-all duration-300 transform hover:scale-105">
                                    <div className="mb-4">{React.cloneElement(audience.icon, { size: 36 })}</div>
                                    <span className="font-extrabold text-sm text-center tracking-tight leading-tight uppercase">{audience.name}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-16 text-2xl font-bold italic text-white opacity-90">
                            "If you invest in traffic — this tool is essential."
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-extrabold mb-16 text-center text-gray-900 tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "1. Is conversion rate the same for all industries?", a: "No. It varies depending on business model, pricing, audience intent, and acquisition channels." },
                            { q: "2. Does higher traffic guarantee more conversions?", a: "Not always. Without optimization, more traffic can mean higher costs without better results." },
                            { q: "3. How often should I monitor conversion rate?", a: "Ideally weekly for active campaigns and monthly for long-term strategy." },
                            { q: "4. Can CRO reduce ad spend?", a: "Yes. Improving conversion rate lowers acquisition cost and increases revenue per visitor." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-200 hover:border-blue-500 transition-all duration-500 group">
                                <h4 className="text-xl font-extrabold mb-4 flex items-start gap-4">
                                    <HelpCircle className="text-blue-500 shrink-0 mt-1" />
                                    {faq.q}
                                </h4>
                                <p className="text-gray-600 leading-relaxed pl-10 text-lg font-light leading-[1.8]">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-blue-700 to-indigo-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center space-y-12 relative z-10">
                    <Rocket size={80} className="mx-auto text-blue-300 animate-bounce" />
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Optimize Before You Scale</h2>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        Before increasing marketing budgets, understand how efficiently your website converts. Small optimization changes can unlock exponential growth.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="w-full md:w-auto px-12 py-5 bg-white text-blue-900 font-extrabold text-2xl rounded-full shadow-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                        >
                            Open CRO Calculator
                        </button>
                    </div>
                    <div className="space-y-4 max-w-2xl mx-auto pt-10">
                        <div className="h-0.5 w-24 bg-blue-400 mx-auto rounded-full"></div>
                        <p className="text-blue-300 text-lg italic font-light opacity-80  tracking-widest">
                            Measure performance. Optimize strategically. Scale confidently.
                        </p>
                        <p className="text-white text-sm font-semibold  pt-4">
                            With Adkryoss managed by Clink Consultancy Services Private Limited, performance isn’t guessed — it’s engineered.
                        </p>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-1/3 h-full bg-white opacity-[0.02] transform -skew-x-[30deg] -translate-x-full animate-marquee"></div>
            </section>

            {/* CRO Calculator Popup */}
            <CROCalculatorPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    );
};

export default CROCalculator;
