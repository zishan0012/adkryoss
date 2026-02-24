import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Info, TrendingUp, Users, MousePointer2, Calculator, IndianRupee, ArrowRight, DollarSign, BarChart, Percent, CreditCard } from 'lucide-react';

const PPCROICalculatorPopup = ({ isOpen, onClose }) => {
    // State for inputs
    const [adSpend, setAdSpend] = useState(50000);
    const [cpc, setCpc] = useState(25);
    const [convRate, setConvRate] = useState(3.5);
    const [aov, setAov] = useState(2500);
    const [margin, setMargin] = useState(40);

    // State for results
    const [results, setResults] = useState({
        clicks: 0,
        conversions: 0,
        revenue: 0,
        netProfit: 0,
        roi: 0
    });

    // Calculation logic
    useEffect(() => {
        const clicks = Math.round(adSpend / cpc);
        const conversions = Math.round(clicks * (convRate / 100));
        const revenue = conversions * aov;
        const netProfit = (revenue * (margin / 100)) - adSpend;
        const roi = adSpend > 0 ? (netProfit / adSpend) * 100 : 0;

        setResults({
            clicks,
            conversions,
            revenue,
            netProfit,
            roi: roi.toFixed(1)
        });
    }, [adSpend, cpc, convRate, aov, margin]);

    if (!isOpen) return null;

    const formatNumber = (num) => new Intl.NumberFormat('en-IN').format(Math.round(num));

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 overflow-y-auto pt-24 md:pt-26">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white w-full max-w-5xl rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 border border-white/20">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-2.5 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-300 shadow-sm"
                >
                    <X size={20} />
                </button>

                {/* LEFT SIDE: Inputs */}
                <div className="w-full md:w-2/3 p-8 md:p-14 bg-white overflow-y-auto no-scrollbar">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-600 rounded-lg text-white">
                                <Calculator size={20} />
                            </div>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">PPC Profitability Lab</h2>
                        </div>
                        <p className="text-gray-500 text-lg font-light">Project your ad returns based on spend and conversion quality.</p>
                    </div>

                    <div className="space-y-12">
                        {/* Field 1: Ad Spend */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                    Total Monthly Ad Spend
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl">
                                    <span className="text-blue-600 font-black">₹</span>
                                    <input
                                        type="number"
                                        value={adSpend}
                                        onChange={(e) => setAdSpend(Number(e.target.value))}
                                        className="w-32 bg-transparent border-none text-right font-black text-blue-600 focus:ring-0"
                                    />
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1000"
                                max="10000000"
                                step="1000"
                                value={adSpend}
                                onChange={(e) => setAdSpend(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <span>₹1k</span>
                                <span>₹1Cr</span>
                            </div>
                        </div>

                        {/* Field 2: Avg CPC */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                    Expected CPC (₹)
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    value={cpc}
                                    onChange={(e) => setCpc(Number(e.target.value))}
                                    className="w-28 px-4 py-2 bg-blue-50 border-none rounded-xl text-right font-black text-blue-600 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="1000"
                                step="1"
                                value={cpc}
                                onChange={(e) => setCpc(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <span>₹1</span>
                                <span>₹1000</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Field 3: Conversion Rate */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                        Conv. Rate (%)
                                        <Info size={14} className="text-gray-400" />
                                    </label>
                                    <div className="flex items-center gap-1">
                                        <input
                                            type="number"
                                            value={convRate}
                                            step="0.1"
                                            onChange={(e) => setConvRate(Number(e.target.value))}
                                            className="w-20 px-4 py-2 bg-blue-50 border-none rounded-xl text-right font-black text-blue-600 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                        <span className="text-blue-600 font-bold">%</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="0.1"
                                    max="50"
                                    step="0.1"
                                    value={convRate}
                                    onChange={(e) => setConvRate(Number(e.target.value))}
                                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                            </div>

                            {/* Field 4: Profit Margin */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                        Profit Margin (%)
                                        <Info size={14} className="text-gray-400" />
                                    </label>
                                    <div className="flex items-center gap-1">
                                        <input
                                            type="number"
                                            value={margin}
                                            onChange={(e) => setMargin(Number(e.target.value))}
                                            className="w-20 px-4 py-2 bg-green-50 border-none rounded-xl text-right font-black text-green-600 focus:ring-2 focus:ring-green-500/20"
                                        />
                                        <span className="text-green-600 font-bold">%</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value={margin}
                                    onChange={(e) => setMargin(Number(e.target.value))}
                                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
                                />
                            </div>
                        </div>

                        {/* Field 5: AOV */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                    Average Order Value (₹)
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    value={aov}
                                    onChange={(e) => setAov(Number(e.target.value))}
                                    className="w-32 px-4 py-2 bg-blue-50 border-none rounded-xl text-right font-black text-blue-600 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="1000000"
                                step="100"
                                value={aov}
                                onChange={(e) => setAov(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Results */}
                <div className="w-full md:w-1/3 bg-[#0f172a] p-8 md:p-12 text-white flex flex-col justify-between">
                    <div className="space-y-8">
                        <div>
                            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Core Performance</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                    <p className="text-[10px] text-blue-200 uppercase font-black mb-1">Total Clicks</p>
                                    <p className="text-xl font-black">{formatNumber(results.clicks)}</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                    <p className="text-[10px] text-blue-200 uppercase font-black mb-1">Conversions</p>
                                    <p className="text-xl font-black">{formatNumber(results.conversions)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-white/10">
                            <div className="space-y-1">
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Revenue Projection</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-white">₹{formatNumber(results.revenue)}</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.03]">
                                <div className="absolute -right-4 -top-4 text-white/10 group-hover:scale-125 transition-transform duration-700">
                                    <TrendingUp size={100} />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-blue-100 text-xs font-bold uppercase tracking-[0.2em] mb-2">Net Profit Projection</p>
                                    <div className="flex items-center gap-1 text-4xl font-black mb-2">
                                        <span className="text-2xl">₹</span>
                                        {formatNumber(results.netProfit)}
                                    </div>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black ${Number(results.roi) >= 0 ? 'bg-green-400/20 text-green-300' : 'bg-red-400/20 text-red-300'}`}>
                                        <Percent size={12} />
                                        {results.roi}% ROI
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        <Link
                            to="/contact"
                            onClick={onClose}
                            className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-500 transition-all duration-300 shadow-xl"
                        >
                            Scale Your Ads <ArrowRight size={20} />
                        </Link>
                        <div className="text-center">
                            <p className="text-[10px] text-white font-medium uppercase mt-2 tracking-widest">
                                Adkryoss managed by Clink Consultancy Service
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PPCROICalculatorPopup;
