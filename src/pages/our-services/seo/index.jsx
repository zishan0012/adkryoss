import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SEO = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(containerRef.current.children, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="container py-20 text-slate-900">
            <div className="text-center mb-[60px]">
                <h1 className="text-5xl text-[#0066cc] mb-5 font-black uppercase tracking-tighter">
                    Search Engine Optimization
                </h1>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-bold italic">
                    Comprehensive SEO services to boost your online visibility and drive organic traffic to your website.
                </p>
            </div>

            <div className="mt-10 p-10 bg-slate-50 rounded-[40px] border border-slate-100">
                <p className="text-lg leading-[1.8] text-slate-700 font-bold italic m-0">
                    Our SEO services are designed to help your business rank higher in search engine results,
                    attract more qualified leads, and achieve sustainable growth in the digital landscape.
                </p>
            </div>
        </div>
    );
};

export default SEO;
