import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ROICalculatorPopup from '../../components/tools/ROICalculatorPopup';
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
    Zap
} from 'lucide-react';

const SEOROICalculator = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our SEO ROI Calculator Works</h1>
                        <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
                            The calculator uses performance-based inputs to project your potential earnings from SEO.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="bg-[#0066cc] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                Calculate Your ROI Now <ArrowRight className="inline ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 1 – Enter Your Website Data</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Current monthly website traffic</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Targeted traffic growth (%)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Average conversion rate</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Average order value or customer lifetime value</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Estimated SEO investment</li>
                            </ul>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <BarChart size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 2 – Revenue Projection</h3>
                            <p className="text-gray-600 mb-4 font-medium">Based on your inputs, the calculator estimates:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Projected organic traffic</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Expected conversions</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Potential monthly & yearly revenue</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Net ROI percentage</li>
                            </ul>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <PieChart size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 3 – ROI Analysis</h3>
                            <p className="text-gray-600 mb-4 font-medium">You receive a simplified financial projection showing:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Total SEO investment</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Estimated revenue generated</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Profit margin</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Break-even timeline</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-700 italic max-w-3xl mx-auto">
                            This structured approach helps businesses evaluate SEO as a long-term growth asset, not just a marketing expense.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Factors */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Key Factors That Impact SEO ROI</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "1. Keyword Intent", desc: "High-intent commercial keywords generate better ROI than informational queries.", icon: <MousePointer2 /> },
                            { title: "2. Conversion Rate Optimization (CRO)", desc: "Traffic alone doesn’t guarantee revenue. Optimized landing pages increase ROI significantly.", icon: <LineChart /> },
                            { title: "3. Industry Competition", desc: "Highly competitive niches may require longer timelines and larger investments.", icon: <Briefcase /> },
                            { title: "4. Customer Lifetime Value (CLV)", desc: "Businesses with repeat customers often see exponentially higher SEO returns.", icon: <Users /> },
                            { title: "5. SEO Timeline", desc: "SEO is a long-term growth strategy. Most businesses begin seeing measurable ROI within 4–6 months, with significant scaling after 8–12 months.", icon: <Clock /> }
                        ].map((factor, i) => (
                            <div key={i} className="p-6 rounded-xl border border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-md bg-gray-50/50">
                                <div className="text-blue-600 mb-4">{factor.icon}</div>
                                <h4 className="text-xl font-bold mb-2">{factor.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{factor.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 bg-blue-50 p-8 rounded-3xl border border-blue-100">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900">Who Should Use This SEO ROI Calculator?</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["E-commerce businesses", "SaaS companies", "Local service providers", "Startup founders", "Digital marketing managers", "Enterprise brands"].map((item, i) => (
                                <div key={i} className="bg-white px-6 py-3 rounded-full shadow-sm font-medium text-blue-800 border border-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-8 text-gray-700 font-medium">
                            Whether you are launching a new website or scaling an existing one, this tool provides financial clarity before you invest.
                        </p>
                    </div>
                </div>
            </section>

            {/* SEO vs Paid Ads */}
            <section className="py-20 bg-[#0f172a] text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">SEO vs Paid Ads – Long-Term ROI Perspective</h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Unlike paid advertising where traffic stops once spending stops, SEO compounds over time.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="mt-1 text-red-400"><Zap size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Paid Ads</h4>
                                        <p className="text-blue-200">Immediate traffic, continuous cost</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="mt-1 text-green-400"><TrendingUp size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">SEO</h4>
                                        <p className="text-blue-200">Gradual growth, long-term asset creation</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-8 text-blue-200 leading-relaxed font-medium">
                                Businesses that invest in SEO strategically often see stronger long-term ROI compared to paid-only strategies.
                            </p>
                            <div className="mt-8 p-4 bg-[#0066cc]/20 border border-[#0066cc]/30 rounded-lg">
                                <p className="text-sm italic text-blue-100">
                                    Adkryoss managed by Clink Consultancy Services Private Limited focuses on sustainable search growth models that prioritize revenue over rankings.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 bg-blue-500/20 rounded-full animate-pulse blur-3xl absolute"></div>
                                <Calculator size={250} className="text-blue-500/40 relative z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Benefits of Using Our SEO ROI Calculator</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "Data-driven decision making",
                            "Investment clarity before campaign launch",
                            "Realistic goal setting",
                            "Budget optimization",
                            "Performance forecasting",
                            "Risk minimization"
                        ].map((benefit, i) => (
                            <div key={i} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="text-green-500" />
                                </div>
                                <p className="text-center font-bold text-gray-800">{benefit}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-12 text-xl font-bold text-blue-600">
                        This tool is built to support serious growth-focused businesses.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How accurate is the SEO ROI Calculator?", a: "It provides a realistic estimate based on your inputs. Actual results may vary depending on competition, execution quality, and market conditions." },
                            { q: "Is SEO better than paid advertising?", a: "Both have their place. However, SEO typically delivers stronger long-term ROI due to its compounding nature." },
                            { q: "How long does it take to see ROI from SEO?", a: "Most industries see early traction within 3–6 months, with stronger ROI scaling after consistent optimization." },
                            { q: "Can small businesses benefit from SEO?", a: "Absolutely. SEO levels the playing field by allowing smaller brands to compete through strategic targeting." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-500 transition-colors group">
                                <h4 className="text-xl font-bold mb-3 flex items-start gap-3">
                                    <HelpCircle className="text-blue-500 shrink-0 mt-1" />
                                    {faq.q}
                                </h4>
                                <p className="text-gray-600 leading-relaxed pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white text-center rounded-t-[50px]">
                <div className="container mx-auto px-6">
                    <Rocket size={60} className="mx-auto mb-8 animate-bounce" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Calculate Your SEO Growth Potential?</h2>
                    <p className="text-2xl mb-12 text-blue-100 max-w-2xl mx-auto">
                        Stop investing blindly. <br />
                        Start forecasting intelligently.
                    </p>
                    <div className="grid md:grid-cols-1 gap-8 mb-12 max-w-3xl mx-auto">
                        <p className="text-xl text-white">
                            Use our SEO ROI Calculator and discover how organic search can become your highest-performing revenue channel.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="inline-block bg-white text-blue-700 px-12 py-5 rounded-full text-2xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                        Calculate Your ROI Now
                    </button>
                    <p className="mt-12 text-blue-200 font-medium opacity-80">
                        Adkryoss managed by Clink Consultancy Services Private Limited helps businesses turn search visibility into measurable profit.
                    </p>
                </div>
            </section>

            {/* ROI Calculator Popup */}
            <ROICalculatorPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    );
};

export default SEOROICalculator;
