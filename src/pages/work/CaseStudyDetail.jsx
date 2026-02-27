import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import caseStudiesData from '../../data/caseStudiesData';

const CaseStudyDetail = () => {
    const { slug } = useParams();
    const study = caseStudiesData.find(s => s.slug === slug);

    if (!study) {
        return <Navigate to="/work/case-study" replace />;
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
                    {/* LEFT CONTENT */}
                    <div className="text-left text-white">
                        <div className="mb-6">
                            <Link to="/work/case-study" className="text-white/70 hover:text-white flex items-center gap-2 font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Case Studies
                            </Link>
                        </div>
                        <h1 className="text-[28px] md:text-[42px] font-bold mb-4 leading-tight">
                            {study.title}
                        </h1>
                        <p className="text-[18px] md:text-[22px] font-medium text-white/90 mb-2">
                            {study.hero.title}
                        </p>
                        <p className="text-white/70 italic">{study.hero.subtitle}</p>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={study.hero.bgImage}
                            alt={study.title}
                            className="max-w-[450px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Client Snapshot & Challenge */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    {/* Left: Snapshot */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">Client Snapshot</h2>
                        <div className="bg-slate-50 rounded-2xl p-8 grid grid-cols-2 gap-8">
                            {Object.entries(study.snapshot).map(([key, value], i) => {
                                if (key === 'cardSummary' || key === 'image') return null;
                                return (
                                    <div key={i}>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{key}</p>
                                        <p className="text-slate-900 font-semibold">{value}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Challenge */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">The Challenge</h2>
                        <ul className="space-y-4">
                            {study.challenge.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-600 leading-relaxed font-normal">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Strategy */}
            <section className="py-20 bg-[#0f172a] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">The Strategic Approach</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {study.strategy.map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="text-blue-400 font-black text-3xl mb-4 opacity-30">0{i + 1}</div>
                                <p className="text-lg font-medium leading-relaxed text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Execution Framework */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Execution Framework</h2>
                    <div className="space-y-12">
                        {study.execution.map((phase, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                                    <div className="md:w-1/3">
                                        <h3 className="text-2xl font-bold text-blue-600 mb-4">{phase.phase}</h3>
                                        <div className="h-1 w-20 bg-blue-600/20 rounded-full"></div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <ul className="grid md:grid-cols-2 gap-6">
                                            {phase.steps.map((step, si) => (
                                                <li key={si} className="flex items-start gap-4">
                                                    <div className="mt-1 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                                    <span className="text-slate-600 font-medium">{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Mapping */}
            <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-16">Results Delivered</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {study.results.map((result, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20">
                                <p className="text-4xl font-black mb-2 tracking-tight">{result.split(' ')[0]}</p>
                                <p className="text-white/90 font-medium uppercase text-xs tracking-widest leading-relaxed">
                                    {result.split(' ').slice(1).join(' ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study 6 Transformation Specific Section */}
            {study.transformation && (
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 pb-4">The Transformation</h2>
                        <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-100">
                            <table className="w-full text-left">
                                <thead className="bg-[#0f172a] text-white">
                                    <tr>
                                        <th className="p-6 font-bold">Performance Metric</th>
                                        <th className="p-6 font-bold">Initial State</th>
                                        <th className="p-6 font-bold text-blue-400">Post-Optimization</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {study.transformation.map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-6 font-bold text-slate-700">{row.metric}</td>
                                            <td className="p-6 text-slate-500 font-medium">{row.before}</td>
                                            <td className="p-6 text-blue-600 font-black">{row.after}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* Key Takeaway */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 bg-blue-600/10 text-blue-600 font-black rounded-full mb-8 text-sm uppercase tracking-widest">
                        Strategic Takeaway
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 italic leading-relaxed">
                        "{study.takeaway}"
                    </blockquote>
                    <div className="mt-12 h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
                </div>
            </section>

            {/* Footer Navigation */}
            <section className="py-16 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <Link to="/work/case-study" className="flex items-center gap-3 font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        All Case Studies
                    </Link>
                    <Link to="/contact" className="bg-[#0f172a] text-white px-10 py-5 rounded-full font-black hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1">
                        START YOUR SUCCESS STORY
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyDetail;
