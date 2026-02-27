import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import agenticaihero from "../../../assets/SEO/agenticaihero.jpeg";
import {
    Search,
    Zap,
    Target,
    ArrowRight,
    Cpu,
    CheckCircle2,
    TrendingUp,
    Sparkles,
    BrainCircuit,
    ShoppingCart,
    Heart,
    GraduationCap,
    Home,
    DollarSign
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AgenticAISEO = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whatRef = useRef(null);
    const whatCard1Ref = useRef(null);
    const whatCard2Ref = useRef(null);
    const frameworkRef = useRef(null);
    const frameworkCardsRef = useRef([]);
    const servicesListRef = useRef(null);
    const serviceItemsRef = useRef([]);
    const hybridCardRef = useRef(null);
    const industriesRef = useRef(null);
    const industryBadgesRef = useRef([]);
    const futureRef = useRef(null);
    const futureCardRef = useRef(null);
    const futureContentRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Autonomous assembly
            gsap.from(heroContentRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out"
            });
            gsap.from(heroImageRef.current, {
                x: 100,
                opacity: 0,
                scale: 0.9,
                duration: 1.2,
                ease: "power4.out"
            });

            // What is Agentic - Branched reveal
            gsap.from(whatRef.current.querySelector('h2'), {
                opacity: 0,
                y: 30,
                scrollTrigger: {
                    trigger: whatRef.current,
                    start: "top 80%"
                }
            });
            gsap.from(whatCard1Ref.current, {
                x: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: whatCard1Ref.current,
                    start: "top 85%"
                }
            });
            gsap.from(whatCard2Ref.current, {
                x: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: whatCard2Ref.current,
                    start: "top 85%"
                }
            });

            // Framework - Self-organizing nodes
            frameworkCardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%"
                    }
                });
            });

            // Services List - Growing branches
            serviceItemsRef.current.forEach((item, i) => {
                gsap.from(item, {
                    x: -20,
                    opacity: 0,
                    duration: 0.4,
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 95%"
                    }
                });
            });
            gsap.from(hybridCardRef.current, {
                scale: 0.95,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: hybridCardRef.current,
                    start: "top 85%"
                }
            });

            // Industries - Distributed nodes
            industryBadgesRef.current.forEach((badge, i) => {
                gsap.from(badge, {
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.5,
                    delay: i * 0.08,
                    scrollTrigger: {
                        trigger: badge,
                        start: "top 95%"
                    }
                });
            });

            // Future - Matrix transition
            gsap.from(futureCardRef.current, {
                x: -40,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: futureCardRef.current,
                    start: "top 85%"
                }
            });
            gsap.from(futureContentRef.current, {
                x: 40,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: futureContentRef.current,
                    start: "top 85%"
                }
            });

            // CTA - Final pulse
            gsap.from(ctaRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 90%"
                }
            });

            // Perpetual brain drift
            gsap.to('.node-icon', {
                y: -8,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleHover = (e, isEnter) => {
        gsap.to(e.currentTarget, {
            y: isEnter ? -12 : 0,
            scale: isEnter ? 1.03 : 1,
            backgroundColor: isEnter ? "#f0f9ff" : "white",
            borderColor: isEnter ? "#0066CC" : "#e2e8f0",
            boxShadow: isEnter ? "0 20px 40px rgba(0,102,204,0.12)" : "0 4px 6px -1px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "back.out(1.5)"
        });
        const icon = e.currentTarget.querySelector('.card-icon');
        if (icon) {
            gsap.to(icon, {
                rotateY: isEnter ? 180 : 0,
                scale: isEnter ? 1.2 : 1,
                duration: 0.6
            });
        }
    };

    const agenticFramework = [
        {
            title: "1. AI-Driven Discovery",
            icon: <Search size={32} />,
            desc: "Discovery and opportunity mapping via intelligent agents.",
            points: [
                "Search intent cluster analysis",
                "High-impact semantic gap identification",
                "Competitor AI visibility mapping",
                "Algorithmic volatility detection"
            ]
        },
        {
            title: "2. Predictive Modeling",
            icon: <Target size={32} />,
            desc: "Modeling search behavior instead of just chasing keywords.",
            points: [
                "Emerging query identification",
                "Topical authority mapping",
                "Conversational & generative search optimization",
                "AI Overviews & snippet structuring"
            ]
        },
        {
            title: "3. Autonomous Technical SEO",
            icon: <Cpu size={32} />,
            desc: "Self-healing technical SEO monitoring and optimization.",
            points: [
                "Crawl inefficiency detection",
                "Auto-Core Web Vitals improvements",
                "Indexing anomaly identification",
                "Dynamic structured data optimization"
            ]
        },
        {
            title: "4. AI Content Engineering",
            icon: <Sparkles size={32} />,
            desc: "Augmented content that satisfies both users and algorithms.",
            points: [
                "Semantic NLP analysis",
                "Topic depth scoring",
                "AI readability & engagement optimization",
                "Internal linking automation"
            ]
        },
        {
            title: "5. Performance Scaling",
            icon: <TrendingUp size={32} />,
            desc: "Continuous learning and automatic strategy recalibration.",
            points: [
                "Ranking fluctuation monitoring",
                "User behavior signal tracking",
                "Conversion pathway analysis",
                "ROI-focused strategy recalibration"
            ]
        }
    ];

    const agenticServices = [
        "AI-Powered SEO Strategy",
        "Predictive Topic Clustering",
        "Generative Search Optimization",
        "Technical SEO Automation",
        "AI-Based Content Optimization",
        "Entity & Schema Engineering",
        "SERP Feature Optimization",
        "Conversational Search SEO",
        "Data-Driven Link Building",
        "Enterprise SEO Frameworks"
    ];

    const industriesEmpowered = [
        { name: "E-Commerce & D2C", icon: <ShoppingCart size={18} /> },
        { name: "Healthcare & MedTech", icon: <Heart size={18} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={18} /> },
        { name: "Real Estate", icon: <Home size={18} /> },
        { name: "BFSI & FinTech", icon: <DollarSign size={18} /> },
        { name: "SaaS & Tech", icon: <Cpu size={18} /> },
        { name: "Growth Startups", icon: <Zap size={18} /> }
    ];

    return (
        <div ref={pageRef} className="overflow-hidden bg-white">
            {/* Hero Section */}
            {/* <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div ref={heroContentRef} className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            Agentic AI SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            The Search for Tomorrow. Driven by Autonomous Intelligence.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white/90 font-medium">
                            Search is evolving from keywords to intelligence. We build AI-driven SEO systems that don’t just optimize pages — they think, learn, and adapt in real time to dominate modern search ecosystems.
                        </p>
<<<<<<< HEAD
                       
=======
>>>>>>> 922f380df18904cf5a3a42a379c62f3138b85665

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link
                                to="/contact"
                                className="bg-white text-black font-bold px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-blue-50 text-center"
                            >
                                Speak to Our Expert →
                            </Link>
                            <Link
                                to="#services"
                                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-blue-900 hover:-translate-y-1 hover:shadow-2xl text-center"
                            >
                                Our Services →
                            </Link>
                        </div>
                    </div>
                    <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm p-4 border border-white/20">
                            <img
                                src={agenticaihero}
                                alt="Agentic AI SEO Services"
                                className="max-w-[450px] w-full rounded-2xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] "
                            />
                        </div>
                    </div>
                </div>
            </section> */}


<motion.section
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Floating Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left relative z-10 max-w-[600px] space-y-6">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-1px] leading-[1.1]">
        Agentic AI SEO Services
      </h1>

      <h3 className="text-xl md:text-2xl font-medium text-blue-100">
        The Search for Tomorrow. Driven by Autonomous Intelligence.
      </h3>

      <p className="text-base md:text-lg font-medium text-gray-200 leading-relaxed">
        Search is evolving from keywords to intelligence. We build AI-driven SEO systems that don’t just optimize pages — they think, learn, and adapt in real time to dominate modern search ecosystems.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Link to="/contact">
          <button className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            Speak to Our Expert →
          </button>
        </Link>

        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl">
          Our Services →
        </button>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end relative z-10">
      <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm w-full max-w-[450px] h-[260px] sm:h-[320px] md:h-[360px] flex items-center justify-center">
        <img
          src={agenticaihero}
          alt="Agentic AI SEO Services"
          className="max-w-full max-h-full object-contain rounded-xl drop-shadow-2xl"
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

</motion.section>




            {/* What is Agentic SEO Section */}
            <section ref={whatRef} className="pt-32 pb-24 bg-white">
                <div className="container">
                    <div className="text-center mb-[70px]">
                        <h2 className="text-[36px] font-bold text-[#0f172a] mb-[20px]">
                            What is Agentic AI SEO?
                        </h2>
                        <p className="text-[16px] md:text-[18px] text-slate-600 mb-6 max-w-[850px] mx-auto font-medium leading-relaxed">
                            Agentic AI SEO is the next evolution of search optimization — powered by autonomous AI agents that continuously analyze data and execute improvements without constant manual intervention.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-stretch">
                        <div ref={whatCard1Ref} className="bg-[#f8fafc] p-[50px] rounded-[48px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                            <p className="text-[18px] md:text-[20px] mb-6 leading-[1.8] font-medium text-slate-700">
                                Unlike traditional SEO that reacts to algorithm updates, Agentic AI anticipates shifts and adapts strategies instantly to scale performance intelligently.
                            </p>
                            <p className="text-[18px] md:text-[20px] mb-6 font-bold leading-[1.8] text-[#0f172a]">
                                At Adkryoss managed by <span className="text-blue-600 underline decoration-blue-200">Clink Consultancy Services Private Limited</span>, we build self-learning systems that transform your website into an organic growth machine.
                            </p>
                        </div>
                        <div ref={whatCard2Ref} className="bg-[#0f172a] p-[50px] rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <h3 className="text-[20px] md:text-[24px] mb-8 font-semibold text-white flex items-center gap-3">
                                <Sparkles className="text-blue-400" />
                                Traditional vs Agentic SEO
                            </h3>
                            <div className="space-y-6 relative z-10">
                                {[
                                    { t: "Traditional:", v: "Manual audits & reactive strategies", c: "text-slate-400" },
                                    { t: "Agentic:", v: "Autonomous optimization & predictive modeling", c: "text-blue-400" },
                                    { t: "Agentic:", v: "Continuous technical fixes & real-time intelligence", c: "text-blue-400" },
                                    { t: "Agentic:", v: "Multi-platform visibility (Search, AI, Voice)", c: "text-blue-400" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[16px] items-start group/item">
                                        <div className="bg-blue-600 rounded-full p-1.5 mt-1 group-hover/item:scale-125 transition-transform"><CheckCircle2 size={16} color="#fff" /></div>
                                        <div>
                                            <span className={`font-semibold text-blue-400 mr-[10px] text-lg uppercase tracking-wider`}>{item.t}</span>
                                            <span className="text-[17px] font-medium text-slate-200">{item.v}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section id="services" ref={frameworkRef} className="py-[100px] bg-slate-50">
                <div className="container">
                    <div className="text-center mb-[70px]">
                        <h2 className="text-[36px] font-bold text-[#0f172a] mb-[20px]">
                            Our Agentic AI SEO Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] text-slate-600 mb-6 font-medium max-w-2xl mx-auto">
                            A structured yet adaptive methodology designed for performance and long-term authority.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {agenticFramework.map((item, i) => (
                            <div
                                key={i}
                                ref={el => frameworkCardsRef.current[i] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="flex-1 min-w-[350px] max-w-[380px] bg-white p-[40px] rounded-[32px] border border-slate-100 shadow-lg relative overflow-hidden flex-grow transition-all duration-500 cursor-pointer group"
                            >
                                <div className="text-blue-600 mb-[24px] card-icon inline-block bg-blue-50 p-4 rounded-2xl">{item.icon}</div>
                                <h3 className="text-[22px] font-bold mb-[18px] text-[#0f172a] leading-tight group-hover:text-blue-700 transition-colors">{item.title}</h3>
                                <p className="text-slate-500 mb-[24px] leading-[1.7] text-[16px] font-medium">{item.desc}</p>
                                <ul className="list-none p-0 space-y-4">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-[12px] mb-[10px] text-slate-700 text-[15px] items-start font-medium group-hover:translate-x-1 transition-transform">
                                            <div className="text-blue-600 mt-[4px] shrink-0"><CheckCircle2 size={18} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-blue-500/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section ref={servicesListRef} className="py-[120px] bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[42px] font-black text-[#0f172a] mb-[30px] tracking-tight leading-tight">Our Agentic AI SEO Services</h2>
                            <p className="text-[18px] md:text-[20px] text-slate-600 mb-10 leading-[1.8] font-medium">
                                We don't just use AI tools; we build intelligent SEO ecosystems that evolve with search engine expectations.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                {agenticServices.map((service, i) => (
                                    <div key={i} ref={el => serviceItemsRef.current[i] = el} className="flex gap-[12px] items-center group/service">
                                        <div className="bg-blue-100 p-2 rounded-xl group-hover/service:bg-blue-600 transition-colors duration-300">
                                            <ArrowRight size={16} className="text-blue-600 group-hover/service:text-white transition-colors" />
                                        </div>
                                        <span className="font-medium text-slate-800 text-lg group-hover/service:translate-x-2 transition-transform duration-300">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={hybridCardRef} className="bg-[#0f172a] p-[60px] rounded-[56px] text-white shadow-2xl relative overflow-hidden border border-white/5">
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-900/40 rounded-full -ml-24 -mb-24 blur-3xl"></div>
                            <h3 className="text-[28px] font-black mb-[40px] text-white flex items-center gap-3">
                                <Cpu className="text-blue-400" />
                                The Hybrid Advantage
                            </h3>
                            <div className="space-y-10 relative z-10">
                                {[
                                    { t: "Strategic Oversight", d: "Human expertise guiding AI execution.", i: <BrainCircuit size={20} /> },
                                    { t: "Deep Data Science", d: "Search psychology combined with algorithm data.", i: <TrendingUp size={20} /> },
                                    { t: "Scale + Creativity", d: "Autonomous scale with creative brand storytelling.", i: <Zap size={20} /> },
                                    { t: "Technical Precision", d: "Error-free technical maintenance at any scale.", i: <Target size={20} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group/hybrid">
                                        <div className="mt-1 text-blue-400 group-hover/hybrid:scale-150 transition-transform duration-500">{item.i}</div>
                                        <div>
                                            <h4 className="text-[20px] font-semibold text-blue-400 mb-[6px] tracking-wide">{item.t}</h4>
                                            <p className="text-slate-300 text-[15px] font-medium leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section ref={industriesRef} className="py-[100px] bg-slate-50">
                <div className="container">
                    <div className="text-center mb-[70px]">
                        <h2 className="text-[36px] font-bold text-[#0f172a] mb-[20px]">Industries We Empower</h2>
                        <p className="text-[16px] md:text-[18px] text-slate-600 mb-6 font-medium max-w-2xl mx-auto">
                            Every industry requires intelligent visibility — and we build it strategically.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[20px]">
                        {industriesEmpowered.map((item, i) => (
                            <div
                                key={i}
                                ref={el => industryBadgesRef.current[i] = el}
                                className="flex items-center gap-[12px] bg-white px-[32px] py-[20px] rounded-[24px] border border-slate-100 font-medium text-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-[8px] cursor-default group"
                            >
                                <span className="text-blue-600 group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                                <span className="text-lg">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Future Section */}
            <section ref={futureRef} className="py-[120px] bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div ref={futureCardRef} className="bg-[#0f172a] p-[60px] rounded-[56px] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <BrainCircuit size={64} className="text-blue-400 mb-8 node-icon" />
                            <h3 className="text-[20px] md:text-[24px] mb-6 text-white font-semibold">
                                The Future is Autonomous
                            </h3>
                            <p className="text-[16px] md:text-[18px] text-slate-300 mb-6 leading-[1.8] font-medium">
                                Search engines are integrating AI at their core. Brands that rely on manual SEO will struggle to scale. <span className="text-white font-bold">Adkryoss managed by Clink Consultancy Services Private Limited</span> helps you transition to a system that learns faster, executes smarter, and delivers ROI predictably.
                            </p>
                        </div>
                        <div ref={futureContentRef}>
                            <h2 className="text-[36px] font-black text-[#0f172a] mb-[30px] tracking-tight leading-tight">Lead the AI Search Revolution</h2>
                            <p className="text-[18px] md:text-[20px] text-slate-600 mb-10 leading-[1.8] font-medium">
                                The next era of SEO isn’t about ranking pages. It’s about building intelligent digital authority.
                            </p>
                            <div className="p-[45px] bg-blue-50 rounded-[40px] border-l-[12px] border-blue-600 shadow-inner group hover:bg-blue-100 transition-colors duration-500">
                                <p className="m-0 font-bold text-[#0f172a] text-[20px] leading-relaxed italic group-hover:scale-105 transition-transform">
                                    "Partner with us to create a self-optimizing search ecosystem that drives consistent organic growth."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-[120px] bg-gradient-to-br from-[#0066cc] to-[#003366] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                <div className="container relative z-10">
                    <h2 className="text-[36px] font-black mb-[30px] text-white tracking-tight leading-tight">Ready to Build Your AI-Driven Advantage?</h2>
                    <p className="text-[22px] md:text-[24px] mb-12 opacity-90 text-blue-50 font-medium max-w-3xl mx-auto leading-relaxed">
                        The future of search is now. Let's build your intelligent growth engine.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-[15px] bg-white text-[#0066cc] py-[24px] px-[60px] rounded-full font-black text-[20px] no-underline transition-all duration-300 shadow-2xl hover:scale-[1.05] hover:bg-blue-50 hover:shadow-white/20 active:scale-95 group">
                        Start Your Agentic Strategy
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AgenticAISEO;

