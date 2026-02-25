import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ContentMarketing = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.from(headerRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    }, []);

    return (
        <div className="container py-20 min-h-[60vh] flex items-center justify-center">
            <div ref={headerRef} className="text-center mb-[60px]">
                <h1 className="text-5xl text-[#0066cc] mb-5 font-bold">
                    Content Marketing
                </h1>
                <p className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed">
                    Create compelling content that engages your audience and drives conversions.
                </p>
            </div>
        </div>
    );
};

export default ContentMarketing;
