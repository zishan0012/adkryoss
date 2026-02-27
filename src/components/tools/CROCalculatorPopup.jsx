import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Info, TrendingUp, Users, MousePointer2, Calculator, IndianRupee, ArrowRight, RefreshCw, BarChart, RotateCcw } from 'lucide-react';

const CROCalculatorPopup = ({ isOpen, onClose }) => {
    // State for inputs
    const [visitors, setVisitors] = useState(10000);
    const [conversions, setConversions] = useState(300);
    const [orderValue, setOrderValue] = useState(1500);
    const [improvement, setImprovement] = useState(20); // 20% improvement goal

    // Reset handler
    const handleReset = () => {
        setVisitors(0);
        setConversions(0);
        setOrderValue(0);
        setImprovement(0);
    };

    // State for results
    const [results, setResults] = useState({
        currentRate: 0,
        currentRevenue: 0,
        targetRate: 0,
        targetConversions: 0,
        targetRevenue: 0,
        revenueLift: 0
    });

    // Calculation logic
    useEffect(() => {
        const currentRate = visitors > 0 ? (conversions / visitors) * 100 : 0;
        const currentRevenue = conversions * orderValue;

        const targetRate = currentRate * (1 + improvement / 100);
        const targetConversions = Math.round(visitors * (targetRate / 100));
        const targetRevenue = targetConversions * orderValue;
        const revenueLift = targetRevenue - currentRevenue;

        setResults({
            currentRate: currentRate.toFixed(2),
            currentRevenue,
            targetRate: targetRate.toFixed(2),
            targetConversions,
            targetRevenue,
            revenueLift
        });
    }, [visitors, conversions, orderValue, improvement]);

    if (!isOpen) return null;

    const formatNumber = (num) => new Intl.NumberFormat('en-IN').format(num);

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
                <div className="w-full md:w-2/3 p-8 md:p-14 bg-white overflow-y-auto max-h-[90vh]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-1 tracking-tight">CRO Impact Calculator</h2>
                            <p className="text-gray-500 text-lg font-light leading-relaxed">Adjust your metrics to see the transformation.</p>
                        </div>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all duration-300 font-bold text-sm whitespace-nowrap shadow-sm"
                        >
                            <RotateCcw size={18} />
                            Reset to Zero
                        </button>
                    </div>

                    <div className="space-y-10">
                        {/* Field 1: Monthly Visitors */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                    Total Monthly Visitors
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    value={visitors}
                                    onChange={(e) => setVisitors(Number(e.target.value))}
                                    className="w-28 px-4 py-2 bg-blue-50 border-none rounded-xl text-right font-black text-blue-600 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                step="100"
                                value={visitors}
                                onChange={(e) => setVisitors(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <span>0</span>
                                <span>1M</span>
                            </div>
                        </div>

                        {/* Field 2: Monthly Conversions */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                    Monthly Conversions
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    value={conversions}
                                    onChange={(e) => setConversions(Number(e.target.value))}
                                    className="w-28 px-4 py-2 bg-blue-50 border-none rounded-xl text-right font-black text-blue-600 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max={visitors || 1000}
                                value={conversions}
                                onChange={(e) => setConversions(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <span>0</span>
                                <span>{formatNumber(visitors || 1000)}</span>
                            </div>
                        </div>

                        {/* Field 3: Average Order Value */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                    Avg Order / Lead Value (₹)
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    value={orderValue}
                                    onChange={(e) => setOrderValue(Number(e.target.value))}
                                    className="w-28 px-4 py-2 bg-blue-50 border-none rounded-xl text-right font-black text-blue-600 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100000"
                                step="10"
                                value={orderValue}
                                onChange={(e) => setOrderValue(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <span>₹0</span>
                                <span>₹1L</span>
                            </div>
                        </div>

                        {/* Field 4: Improvement Goal */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                    Optimization Lift (%)
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        value={improvement}
                                        onChange={(e) => setImprovement(Number(e.target.value))}
                                        className="w-20 px-4 py-2 bg-green-50 border-none rounded-xl text-right font-black text-green-600 focus:ring-2 focus:ring-green-500/20"
                                    />
                                    <span className="text-green-600 font-bold">%</span>
                                </div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="500"
                                value={improvement}
                                onChange={(e) => setImprovement(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <span>0%</span>
                                <span>500% Lift</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Results */}
                <div className="w-full md:w-1/3 bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-between">
                    <div className="space-y-10">
                        <div className="space-y-2">
                            <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em]">Current Performance</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black">{results.currentRate}%</span>
                                <span className="text-blue-300 font-medium">Conv. Rate</span>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-white/10">
                            <div className="flex justify-between items-center font-bold">
                                <span className="text-blue-200 text-sm">Target Conv. Rate</span>
                                <span className="text-xl text-white">{results.targetRate}%</span>
                            </div>
                            <div className="flex justify-between items-center font-bold">
                                <span className="text-blue-200 text-sm">Target Monthly Conv.</span>
                                <span className="text-xl text-white">{formatNumber(results.targetConversions)}</span>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/10 shadow-inner group transition-all duration-500 hover:bg-white/15">
                            <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center">Potential Monthly Lift</p>
                            <div className="text-4xl font-black text-center mb-2 flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
                                <IndianRupee size={28} />
                                {formatNumber(results.revenueLift)}
                            </div>
                            <p className="text-xs text-blue-200/80 text-center font-medium">Pure profit from optimization</p>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        <Link
                            to="/contact"
                            onClick={onClose}
                            className="w-full flex items-center justify-center gap-3 bg-white text-blue-600 font-black py-5 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl"
                        >
                            Start Optimizing <ArrowRight size={20} />
                        </Link>
                        <p className="text-[10px] text-white text-center font-medium leading-relaxed uppercase tracking-widest mt-2">
                            Managed by Clink Consultancy Service Pvt. Ltd.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CROCalculatorPopup;
