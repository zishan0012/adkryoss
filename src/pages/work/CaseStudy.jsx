import React from 'react';
import { Link } from 'react-router-dom';
import caseStudiesData from '../../data/caseStudiesData';

const CaseStudy = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
                    {/* LEFT CONTENT */}
                    <div className="text-left text-white">
                        
                        <h1 className="text-[32px] md:text-[48px] font-bold mb-4 leading-tight">
                            Our Case Studies
                        </h1>
                        <p className="text-[18px] md:text-[20px] mb-8 text-white/90 leading-relaxed">
                            Real Growth. Real Results. Explore how we transform businesses through performance-driven digital marketing.
                        </p>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2025/10/Case-Studies.webp"
                            alt="Case Studies"
                            className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudiesData.map((study, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group">
                                {/* IMAGE CONTAINER */}
                                <div className="relative overflow-hidden aspect-[16/10]">
                                    <img
                                        src={study.snapshot.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>

                                <div className="p-8 flex-grow">
                                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-4 uppercase tracking-[1px]">
                                        {study.snapshot.industry}
                                    </div>
                                    <h3 className="text-[18px] md:text-[20px] font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                        {study.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        {study.cardSummary}
                                    </p>
                                </div>
                                <div className="px-8 pb-8">
                                    <Link
                                        to={`/work/case-study/${study.slug}`}
                                        className="inline-flex items-center justify-center px-6 py-2.5 border border-blue-600 text-blue-600 font-bold text-xs rounded-full group/btn hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase tracking-wider"
                                    >
                                        View Case Study
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#0066cc] to-[#00458a]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to see similar growth for your brand?</h2>
                    <p className="text-white/80 text-lg mb-10">Let's discuss how our data-driven strategies can scale your business.</p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
                    >
                        GET IN TOUCH
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudy;
