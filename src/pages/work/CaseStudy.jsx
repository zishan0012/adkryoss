import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import caseStudiesData from '../../data/caseStudiesData';
import casestudyhero from '../../assets/work/casestudyhero.png';

gsap.registerPlugin(ScrollTrigger);

const CaseStudy = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Section
            gsap.fromTo(".hero-content",
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 1, delay: 0.2,
                    scrollTrigger: {
                        trigger: ".hero-content",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo(".hero-image",
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1, scale: 1, duration: 1, delay: 0.4,
                    scrollTrigger: {
                        trigger: ".hero-image",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Case Studies Grid
            gsap.fromTo(".casestudy-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".casestudy-grid",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // CTA Section
            gsap.fromTo(".cta-content",
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1, scale: 1, duration: 1,
                    scrollTrigger: {
                        trigger: ".cta-section",
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-white" ref={mainRef}>
            {/* Hero Section */}

            
            {/* <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
                 
                    <div className="text-left text-white">
                        
                    
                    <div className="text-left text-white hero-content">

                        <h1 className="text-[32px] md:text-[48px] font-bold mb-4 leading-tight">
                            Our Case Studies
                        </h1>
                        <p className="text-[18px] md:text-[20px] mb-8 text-white/90 leading-relaxed">
                            Real Growth. Real Results. Explore how we transform businesses through performance-driven digital marketing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                to="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </Link>
                        </div>
                    </div>
                    
                    <div className="flex justify-center md:justify-end relative z-10">
                  
                    <div className="flex justify-center md:justify-end relative z-10 hero-image">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={casestudyhero}
                                alt="Case Studies"
                                className="max-w-[300px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section> */}


<section
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px]">

      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Our Case Studies
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        Real Growth. Real Results. Explore how we transform businesses 
        through performance-driven digital marketing.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">

      <div className="relative group w-full max-w-[420px]">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={casestudyhero}
          alt="Case Studies"
          className="relative w-full rounded-2xl shadow-2xl 
                     transform group-hover:-translate-y-2 transition duration-500"
        />

      </div>

    </div>

  </div>

  {/* Floating Animation */}
  <style>
    {`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(30px); }
      }
    `}
  </style>

</section>



            {/* Case Studies Grid */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 casestudy-grid">
                        {caseStudiesData.map((study, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group casestudy-card">
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
            <section className="py-20 bg-gradient-to-br from-[#0066cc] to-[#00458a] cta-section">
                <div className="max-w-4xl mx-auto px-6 text-center cta-content">
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
