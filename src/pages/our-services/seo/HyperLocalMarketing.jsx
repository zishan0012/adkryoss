import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hyperlocalhero from "../../../assets/SEO/hyperlocalhero.jpeg";
import {
    MapPin,
    Search,
    Zap,
    Target,
    BarChart3,
    Shield,
    ArrowRight,
    Globe,
    Cpu,
    Database,
    Network,
    CheckCircle2,
    Users,
    Navigation,
    Smartphone,
    TrendingUp,
    Store,
    LocateFixed,
    ShoppingCart,
    Heart,
    Home,
    Utensils,
    GraduationCap,
    DollarSign
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HyperLocalMarketing = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whatRef = useRef(null);
    const whatItemsRef = useRef([]);
    const solutionsRef = useRef(null);
    const solutionsCardsRef = useRef([]);
    const differenceRef = useRef(null);
    const differenceItemsRef = useRef([]);
    const benefitCardRef = useRef(null);
    const industriesRef = useRef(null);
    const industryItemsRef = useRef([]);
    const approachRef = useRef(null);
    const approachStepsRef = useRef([]);
    const advantageRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Local reveal
            gsap.fromTo(heroContentRef.current,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heroContentRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
            gsap.fromTo(heroImageRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heroImageRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // What is Hyperlocal - Expanding pulse
            gsap.fromTo(whatRef.current.querySelector('h2'),
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: whatRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
            whatItemsRef.current.forEach((item, i) => {
                gsap.fromTo(item,
                    { scale: i === 0 ? 0.95 : 1.05, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.2,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Solutions - Map pin drops
            solutionsCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: -40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "bounce.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Difference - Pulse staggers
            differenceItemsRef.current.forEach((item, i) => {
                gsap.fromTo(item,
                    { x: -20, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });
            gsap.fromTo(benefitCardRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: benefitCardRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Industries - Neighborhood spread
            industryItemsRef.current.forEach((item, i) => {
                gsap.fromTo(item,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        delay: i * 0.05,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Approach - Connecting the dots
            approachStepsRef.current.forEach((step, i) => {
                gsap.fromTo(step,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.15,
                        scrollTrigger: {
                            trigger: step,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Advantage
            gsap.fromTo(advantageRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: advantageRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // CTA
            gsap.fromTo(ctaRef.current,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Global pulse for all card icons
            const icons = document.querySelectorAll('.card-icon');
            icons.forEach(icon => {
                gsap.to(icon, {
                    scale: 1.1,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
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
            duration: 0.4,
            ease: "back.out(2)"
        });
        const icon = e.currentTarget.querySelector('.card-icon');
        if (icon) {
            gsap.to(icon, {
                scale: isEnter ? 1.3 : 1,
                color: isEnter ? "#0066CC" : "#666",
                duration: 0.3
            });
        }
    };

    const hyperlocalSolutions = [
        {
            title: "Local SEO Optimization",
            icon: <Search size={32} />,
            desc: "Increase map pack rankings and organic local visibility.",
            points: [
                "Google Business Profile optimization",
                "Local citations & NAP consistency",
                "Geo-tagged content creation",
                "Location-specific landing pages"
            ]
        },
        {
            title: "Google Maps & Listings",
            icon: <Store size={32} />,
            desc: "Ensure your business stands out with accurate and compelling listings.",
            points: [
                "Listing creation & verification",
                "Map ranking optimization",
                "Reputation & review management",
                "Compelling business descriptions"
            ]
        },
        {
            title: "Hyperlocal Paid Advertising",
            icon: <Target size={32} />,
            desc: "Reach users within precise geographic boundaries with radius targeting.",
            points: [
                "Radius-targeted Google Ads",
                "Geo-targeted Meta Ads",
                "Programmatic local campaigns",
                "Proximity-based lead gen"
            ]
        },
        {
            title: "Location-Based Social Media",
            icon: <Navigation size={32} />,
            desc: "Engage neighborhood audiences and promote local offers.",
            points: [
                "Geo-targeted social campaigns",
                "Promote local store offers",
                "Increase in-store visits",
                "Neighborhood audience engagement"
            ]
        },
        {
            title: "Review & Reputation Management",
            icon: <Shield size={32} />,
            desc: "Build and manage local trust to drive conversions and rankings.",
            points: [
                "Strategic review building",
                "Reputation monitoring",
                "Strategic response management",
                "Local credibility enhancement"
            ]
        },
        {
            title: "Multi-Location Strategy",
            icon: <Network size={32} />,
            desc: "Scalable hyperlocal strategies for franchises and multi-outlet brands.",
            points: [
                "Independent location ranking",
                "Maintained brand consistency",
                "Scalable local SEO frameworks",
                "Franchise visibility management"
            ]
        }
    ];

    const targetingIndustries = [
        { name: "Restaurants & Cafés", icon: <Utensils size={18} /> },
        { name: "Healthcare & Hospitals", icon: <Heart size={18} /> },
        { name: "Retail Stores", icon: <ShoppingCart size={18} /> },
        { name: "Educational Institutes", icon: <GraduationCap size={18} /> },
        { name: "Real Estate & Builders", icon: <Home size={18} /> },
        { name: "Salons & Wellness", icon: <Zap size={18} /> },
        { name: "Local Service Providers", icon: <Users size={18} /> }
    ];

    const workingApproach = [
        { step: "01", title: "Geo-Intelligence Audit", desc: "Analyze local visibility and map ranking gaps." },
        { step: "02", title: "Localized Blueprint", desc: "Build a roadmap aligned with business objectives." },
        { step: "03", title: "Precision Execution", desc: "Execute geo-targeted ads and structured data." },
        { step: "04", title: "Continuous Optimization", desc: "Monitor insights and refine for performance." }
    ];

    return (
        <div ref={pageRef} className="bg-white overflow-hidden">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div ref={heroContentRef} className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            Hyperlocal Marketing Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Dominate Your Neighborhood. Be the first choice when your customers search “near me.”
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white font-medium">
                            Turn proximity into profit with data-driven hyperlocal marketing strategies that put your business exactly where buying decisions happen — on local searches, maps, feeds, and mobile screens.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link
                                to="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </Link>
                            <Link
                                to="#services"
                                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </Link>
                        </div>
                    </div>
                    <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={hyperlocalhero}
                                alt="Hyperlocal Marketing Services"
                                className="max-w-[350px] w-full rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Hyperlocal Section */}
            <section ref={whatRef} className="pt-28 pb-20 bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-5">
                            What is Hyperlocal Marketing?
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 max-w-[850px] mx-auto font-medium">
                            Hyperlocal marketing focuses on targeting customers within a highly specific geographic area — a locality, pin code, or neighborhood.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div ref={el => whatItemsRef.current[0] = el} className="bg-[#f8f9fa] p-[50px] rounded-[40px] border border-[#eee] transition-all hover:shadow-inner hover:bg-slate-50">
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                In today’s mobile-first world, search queries like “best café near me” or “plumber nearby” are high-intent and conversion-ready.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 font-medium leading-[1.8]">
                                Adkryoss managed by Clink Consultancy Services Private Limited helps businesses capture this intent by combining location intelligence and local SEO to drive transactions.
                            </p>
                        </div>
                        <div ref={el => whatItemsRef.current[1] = el} className="bg-[#0f172a] p-[50px] rounded-[40px] text-white shadow-2xl">
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white">
                                Why It Matters Now
                            </h3>
                            <div className="space-y-6">
                                {[
                                    "80%+ of local searches convert within 24h",
                                    "Google prioritizes map listings & local results",
                                    "Mobile users rely heavily on reviews & proximity",
                                    "Competition is shifting to local dominance"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center group">
                                        <div className="bg-blue-500 rounded-full p-1 group-hover:scale-125 transition-transform"><CheckCircle2 size={16} className="text-white" /></div>
                                        <span className="text-base font-medium group-hover:translate-x-1 transition-transform">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section id="services" ref={solutionsRef} className="py-20 bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-5">
                            Our Hyperlocal Marketing Solutions
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium max-w-2xl mx-auto">
                            Precision strategies designed to put your business exactly where buying decisions happen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hyperlocalSolutions.map((item, i) => (
                            <div
                                key={i}
                                ref={el => solutionsCardsRef.current[i] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="flex-auto max-w-[400px] bg-white p-10 rounded-[24px] transition-all duration-300 border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden group"
                            >
                                <div className="text-[#0066cc] mb-5 card-icon inline-block">{item.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-[15px] text-[#1a1a1a]">{item.title}</h3>
                                <p className="text-[#666] mb-5 leading-[1.6] text-[15px] font-medium">{item.desc}</p>
                                <ul className="list-none p-0 overflow-hidden">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-2 mb-2.5 text-[#444] text-[14px] items-start">
                                            <div className="text-[#0066cc] mt-1 shrink-0"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Differences Section */}
            <section ref={differenceRef} className="py-20 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-8 leading-tight">What Makes Our Strategy Different?</h2>
                            <p className="text-[16px] md:text-[18px] mb-8 leading-[1.8] font-medium text-slate-600">
                                We focus on driving actions — calls, direction requests, walk-ins, and bookings — not just simple impressions.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { t: "Geo Segmentation", d: "Data-backed micro-level geographic targeting." },
                                    { t: "Mobile-First", d: "Campaigns structured for high-intent mobile users." },
                                    { t: "AI Clustering", d: "AI-powered keyword grouping for local intent." },
                                    { t: "Heat Mapping", d: "Advanced competitor visibility heat mapping." }
                                ].map((item, i) => (
                                    <div key={i} ref={el => differenceItemsRef.current[i] = el} className="p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                        <h4 className="font-bold text-[#0066cc] mb-2">{item.t}</h4>
                                        <p className="text-[14px] text-[#666] font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={benefitCardRef} className="bg-[#0f172a] p-10 md:p-[60px] rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white relative z-10">
                                Benefits You'll See
                            </h3>
                            <div className="space-y-6 relative z-10">
                                {[
                                    "Increased physical foot traffic",
                                    "Higher local search organic rankings",
                                    "Better ROI from geo-targeted ads",
                                    "Stronger neighborhood engagement",
                                    "Improved brand trust in locality",
                                    "Faster lead-to-conversion cycle"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center group/item hover:translate-x-2 transition-transform">
                                        <div className="bg-blue-500 rounded-full p-1 shrink-0"><CheckCircle2 size={16} className="text-white" /></div>
                                        <span className="text-base font-medium text-white/90 group-hover/item:text-white transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Industries */}
            <section ref={industriesRef} className="py-20 bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-5">Industries We Serve</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium max-w-2xl mx-auto">
                            Hyperlocal marketing bridges the gap between online discovery and offline conversion.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-5">
                        {targetingIndustries.map((item, i) => (
                            <div key={i} ref={el => industryItemsRef.current[i] = el} className="flex items-center gap-3 bg-white p-[18px_32px] rounded-2xl border border-[#e2e8f0] font-bold text-[#1e293b] shadow-sm hover:shadow-md hover:border-[#0066cc] hover:-translate-y-1 transition-all cursor-default">
                                <span className="text-blue-500 card-icon">{item.icon}</span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Approach Section */}
            <section ref={approachRef} className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-5">Our Working Approach</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Adkryoss managed by Clink Consultancy Services Private Limited ensures you lead locally.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {workingApproach.map((item, i) => (
                            <div key={i} ref={el => approachStepsRef.current[i] = el} className="flex-auto max-w-[280px] bg-[#f8f9fa] p-[40px] rounded-[32px] text-center border border-[#eee] hover:bg-white hover:shadow-xl transition-all duration-300 group">
                                <div className="text-lg font-black text-[#0066cc]/20 group-hover:text-[#0066cc] transition-colors mb-4">{item.step}</div>
                                <h4 className="text-[20px] font-bold text-[#1a1a1a] mb-4 group-hover:translate-y-[-5px] transition-transform">{item.title}</h4>
                                <p className="text-[14px] text-[#666] leading-[1.8] font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Advantage / Why We? */}
            <section ref={advantageRef} className="py-20 bg-[#0f172a] text-white overflow-hidden">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="bg-white/[0.03] p-10 md:p-[60px] rounded-[40px] border border-white/10 backdrop-blur-sm relative group overflow-hidden">
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>
                            <TrendingUp size={48} className="text-blue-400 mb-8 card-icon" />
                            <h3 className="text-[32px] font-bold mb-6">Dominating Near-Me Search</h3>
                            <p className="text-[16px] md:text-[18px] mb-8 text-white/80 font-medium leading-relaxed">
                                If your customers are searching nearby, your business should be visible instantly. Early adoption means:
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {["Lower acquisition cost", "Higher community trust", "Hyper-targeted leads", "Instant map visibility"].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center group/feat">
                                        <CheckCircle2 size={18} className="text-blue-400 shrink-0 group-hover/feat:scale-125 transition-transform" />
                                        <span className="font-bold text-[15px]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]"></div>
                            <h2 className="text-[36px] font-bold text-white mb-8 leading-tight">Ready to Own Your Local Market?</h2>
                            <p className="text-[16px] md:text-[18px] mb-8 leading-[1.9] text-white/80 font-medium">
                                Adkryoss managed by Clink Consultancy Services Private Limited helps you build a hyperlocal growth engine that drives results in your immediate market.
                            </p>
                            <div className="p-10 bg-blue-500/10 rounded-[28px] border-l-8 border-[#3b82f6] shadow-2xl relative z-10 hover:bg-blue-500/15 transition-colors">
                                <p className="m-0 font-bold text-[18px] italic leading-relaxed text-blue-100">"Let’s make your business the most recommended name in your neighborhood."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-24 bg-gradient-to-br from-[#0066cc] to-[#004999] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="container relative z-10">
                    <h2 className="text-[42px] font-black mb-6 text-white leading-tight">Dominance Within Miles. Start Now.</h2>
                    <p className="text-[18px] md:text-[20px] mb-10 opacity-90 text-white font-medium max-w-2xl mx-auto leading-relaxed">
                        Turn proximity into profit. Partner with us and lead your local market with precision-engineered neighborhood strategies.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066cc] py-[20px] px-12 rounded-[50px] font-bold no-underline transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group">
                        Start Your Hyperlocal Growth <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HyperLocalMarketing;

