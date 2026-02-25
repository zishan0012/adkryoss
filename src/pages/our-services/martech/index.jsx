import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MarTech = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.from(heroRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }, []);

    return (
        <div ref={heroRef} className="container py-20">
            <div className="text-center mb-[60px]">
                <h1 className="text-5xl text-[#0066cc] mb-5 font-bold">
                    MarTech / Data Analytics
                </h1>
                <p className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed">
                    Leverage marketing technology and data analytics to drive business growth.
                </p>
            </div>
        </div>
    );
};

export default MarTech;
