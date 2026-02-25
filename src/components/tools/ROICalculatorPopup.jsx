import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Info, TrendingUp, Users, MousePointer2, Calculator, IndianRupee, ArrowRight } from 'lucide-react';

const ROICalculatorPopup = ({ isOpen, onClose }) => {
    // State for inputs
    const [keywords, setKeywords] = useState(145);
    const [searchVolume, setSearchVolume] = useState(434);
    const [visitPercent, setVisitPercent] = useState(62);
    const [conversionRate, setConversionRate] = useState(2);
    const [leadValue, setLeadValue] = useState(23);

    // State for results
    const [results, setResults] = useState({
        estimatedTraffic: 0,
        expectedTraffic: 0,
        totalConversions: 0,
        estimatedRevenue: 0
    });

    // Calculation logic
    useEffect(() => {
        const estimatedTraffic = keywords * searchVolume;
        const expectedTraffic = Math.round(estimatedTraffic * (visitPercent / 100));
        const totalConversions = Math.round(expectedTraffic * (conversionRate / 100));
        const estimatedRevenue = Math.round(totalConversions * leadValue);

        setResults({
            estimatedTraffic,
            expectedTraffic,
            totalConversions,
            estimatedRevenue
        });
    }, [keywords, searchVolume, visitPercent, conversionRate, leadValue]);

    if (!isOpen) return null;

    const formatNumber = (num) => new Intl.NumberFormat('en-IN').format(num);

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 overflow-y-auto pt-24 md:pt-26">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                >
                    <X size={20} />
                </button>

                {/* LEFT SIDE: Inputs */}
                <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Input your data to calculate your monthly SEO ROI.</h2>
                    <p className="text-gray-500 mb-8">Adjust the sliders or type directly to see real-time projections.</p>

                    <div className="space-y-8">
                        {/* Field 1: Keywords */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    No of keywords ranking on the first page:*
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    value={keywords}
                                    onChange={(e) => setKeywords(Number(e.target.value))}
                                    className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-right font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="1000"
                                value={keywords}
                                onChange={(e) => setKeywords(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                                <span>0</span>
                                <span>1k</span>
                            </div>
                        </div>

                        {/* Field 2: Search Volume */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    Estimated average monthly search volume (SV) of a keyword:*
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    value={searchVolume}
                                    onChange={(e) => setSearchVolume(Number(e.target.value))}
                                    className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-right font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="10000"
                                value={searchVolume}
                                onChange={(e) => setSearchVolume(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                                <span>0</span>
                                <span>10k</span>
                            </div>
                        </div>

                        {/* Field 3: Site Visits % */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    Estimated percentage (%) of site visits:*
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    max="100"
                                    value={visitPercent}
                                    onChange={(e) => setVisitPercent(Number(e.target.value))}
                                    className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-right font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={visitPercent}
                                onChange={(e) => setVisitPercent(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                                <span>0</span>
                                <span>100</span>
                            </div>
                        </div>

                        {/* Field 4: Conversion Rate */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    Estimated conversion rate (%):*
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    max="100"
                                    value={conversionRate}
                                    onChange={(e) => setConversionRate(Number(e.target.value))}
                                    className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-right font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={conversionRate}
                                onChange={(e) => setConversionRate(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                                <span>0</span>
                                <span>100</span>
                            </div>
                        </div>

                        {/* Field 5: Lead Value */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    Average value of leads/sales (INR):*
                                    <Info size={14} className="text-gray-400" />
                                </label>
                                <input
                                    type="number"
                                    value={leadValue}
                                    onChange={(e) => setLeadValue(Number(e.target.value))}
                                    className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-right font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="100000"
                                value={leadValue}
                                onChange={(e) => setLeadValue(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                                <span>0</span>
                                <span>1L</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Results */}
                <div className="w-full md:w-1/3 bg-[#E0F2FE] p-8 md:p-10 flex flex-col justify-between border-l border-white/20">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Monthly SEO ROI</h3>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center text-sm font-medium text-gray-600 border-b border-blue-200 pb-3">
                                <span>Estimated Traffic:</span>
                                <span className="text-gray-900">{formatNumber(results.estimatedTraffic)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium text-gray-600 border-b border-blue-200 pb-3">
                                <span>Expected Traffic:</span>
                                <span className="text-gray-900">{formatNumber(results.expectedTraffic)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium text-gray-600 border-b border-blue-200 pb-3">
                                <span>Total Conversions:</span>
                                <span className="text-gray-900">{formatNumber(results.totalConversions)}</span>
                            </div>
                        </div>

                        <div className="mt-10 bg-[#0066cc] p-6 rounded-2xl text-center shadow-lg transform transition-all hover:scale-[1.02]">
                            <p className="text-blue-100 text-sm font-medium mb-1">Estimated Revenue:</p>
                            <div className="text-3xl font-bold text-white flex items-center justify-center gap-1">
                                <IndianRupee size={24} />
                                {formatNumber(results.estimatedRevenue)}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-white/60 p-6 rounded-2xl text-center">
                        <h4 className="font-bold text-gray-900 mb-4">Discover Your SEO ROI – Let Us Drive Your Growth!</h4>
                        <Link
                            to="/contact"
                            onClick={onClose}
                            className="w-full inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            Talk to an Expert <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculatorPopup;
