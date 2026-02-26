import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import martechhero from "../../../assets/martech/martechhero.png";
import {
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Zap,
    Layers,
    Brain,
    Rocket,
    Settings,
    Database,
    Cpu
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MartechServices = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const futureTextRef = useRef(null);
    const futureCardsRef = useRef([]);
    const capabilityCardsRef = useRef([]);
    const bannerRef = useRef(null);
    const diffCardsRef = useRef([]);
    const processStepsRef = useRef([]);
    const industryTagsRef = useRef([]);
    const advantageItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animations
            gsap.fromTo(heroContentRef.current, {
                y: -50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroContentRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            gsap.fromTo(heroImageRef.current, {
                x: 50,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: heroImageRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Future Section
            gsap.fromTo(futureTextRef.current, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: futureTextRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            futureCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    scale: 0.8,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Capability Cards - 3D Rotation
            capabilityCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    rotationY: 45,
                    opacity: 0,
                    y: 50
                }, {
                    rotationY: 0,
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Banner Section
            gsap.fromTo(bannerRef.current, {
                scale: 0.9,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Differentiators
            diffCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Process Steps
            processStepsRef.current.forEach((step, i) => {
                gsap.fromTo(step, {
                    y: 40,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Industries
            industryTagsRef.current.forEach((tag, i) => {
                gsap.fromTo(tag, {
                    scale: 0,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: tag,
                        start: "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Advantages
            advantageItemsRef.current.forEach((item, i) => {
                gsap.fromTo(item, {
                    x: 20,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.4,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Hero Image Floating
            gsap.to(heroImageRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleHover = (e, isEnter) => {
        gsap.to(e.currentTarget, {
            scale: isEnter ? 1.05 : 1,
            y: isEnter ? -10 : 0,
            duration: 0.3,
            ease: "power2.out"
        });
        const iconContainer = e.currentTarget.querySelector('.icon-container');
        if (iconContainer) {
            gsap.to(iconContainer, {
                rotate: isEnter ? 10 : 0,
                scale: isEnter ? 1.1 : 1,
                duration: 0.3
            });
        }
    };

    const capabilities = [
        {
            icon: <Settings size={32} />,
            title: "Martech Strategy & Stack Consulting",
            desc: "Technology without strategy creates chaos. We audit your current ecosystem and design a scalable Martech blueprint.",
            points: [
                "Martech stack audit & gap analysis",
                "Platform selection & vendor evaluation",
                "Cost-performance optimization",
                "Martech roadmap planning",
                "Integration architecture design"
            ]
        },
        {
            icon: <Cpu size={32} />,
            title: "Marketing Automation Implementation",
            desc: "Automation should feel intelligent — not robotic. We deploy workflows that nurture and retain customers.",
            points: [
                "Lead nurturing journeys",
                "Drip & lifecycle campaigns",
                "Behavioral segmentation",
                "Email & WhatsApp automation",
                "Sales pipeline automation",
                "Retention & re-engagement workflows"
            ]
        },
        {
            icon: <Database size={32} />,
            title: "CRM & Customer Data Platforms (CDP)",
            desc: "Your CRM should be a revenue engine. We integrate and optimize to ensure real-time visibility.",
            points: [
                "CRM implementation & migration",
                "CDP setup & configuration",
                "Sales & marketing alignment",
                "Lead scoring frameworks",
                "Data hygiene & enrichment"
            ]
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Analytics, Tracking & Attribution",
            desc: "If you cannot measure it, you cannot scale it. We build frameworks that provide ROI clarity.",
            points: [
                "GA4 & Tag Manager setup",
                "Conversion tracking & event mapping",
                "Multi-touch attribution models",
                "Dashboard & BI reporting",
                "Funnel & cohort analysis"
            ]
        },
        {
            icon: <Brain size={32} />,
            title: "Personalization & AI-Driven Marketing",
            desc: "Generic messaging is outdated. We implement AI engines for dynamic content delivery.",
            points: [
                "Dynamic website personalization",
                "Predictive lead scoring",
                "AI-based segmentation",
                "Recommendation engines",
                "Machine learning insights"
            ]
        },
        {
            icon: <Layers size={32} />,
            title: "Performance & Martech Integration",
            desc: "Ensuring seamless data flow and centralized reporting across disconnected platforms.",
            points: [
                "CRM & Ad platforms",
                "Email & E-commerce tools",
                "Analytics & Automation",
                "Centralized reporting setup",
                "Unified customer views"
            ]
        }
    ];

    const differentiators = [
        { title: "Strategy-Led Implementation", desc: "We begin with business objectives — not tools." },
        { title: "Revenue-Centric Approach", desc: "Aligned with measurable growth metrics." },
        { title: "Scalable Architecture", desc: "Frameworks that grow with your business." },
        { title: "Cross-Platform Expertise", desc: "Enterprise, mid-market, and startup experience." },
        { title: "Data Security & Compliance", desc: "GDPR-ready, privacy-compliant implementations." }
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Audit",
            desc: "We analyze your marketing maturity, data flow, and current stack performance."
        },
        {
            step: "02",
            title: "Strategy & Architecture",
            desc: "We design a scalable ecosystem aligned with revenue and growth goals."
        },
        {
            step: "03",
            title: "Implementation & Integration",
            desc: "Seamless deployment across CRM, automation, analytics, and personalization tools."
        },
        {
            step: "04",
            title: "Optimization & Scaling",
            desc: "Continuous monitoring, A/B testing, performance tuning, and refinement."
        }
    ];

    const industries = ["BFSI", "E-commerce", "EdTech", "Healthcare", "SaaS", "Real Estate", "Manufacturing"];
    const advantages = ["360° customer visibility", "Faster lead-to-sale cycles", "Higher marketing ROI", "Reduced operational cost", "Improved campaign efficiency", "Predictive revenue growth"];

    return (
        <div ref={pageRef} className="bg-white text-slate-900 overflow-hidden">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div ref={heroContentRef} className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-tight leading-[1.1] text-white">
                            Engineer Your Marketing. Accelerate Your Growth.
                        </h1>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-relaxed text-white font-medium">
                            Transform disconnected tools into a high-performance marketing engine. We design, integrate, and optimize Martech ecosystems that convert data into predictable revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
                    {/* RIGHT IMAGE */}
                    <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={martechhero}
                                alt="Martech Services"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl"
                            /></div>
                    </div>
                </div>
            </section>

            {/* The Future of Marketing is Martech-Led */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div ref={futureTextRef}>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                The Future of Marketing is Martech-Led
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                    Modern marketing is no longer campaign-first — it is technology-first. Growth-driven organizations win because their systems talk to each other, data flows seamlessly, and automation works 24/7.
                                </p>
                                <div className="p-8 bg-white border-l-8 border-blue-600 rounded-r-2xl shadow-sm italic text-slate-600 font-semibold">
                                    "We don’t just implement tools. We design growth infrastructure."
                                </div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                    At Adkryoss managed by <span className="text-blue-600 font-semibold">Clink Consultancy Services Private Limited</span>, we architect Martech ecosystems that unify CRM, automation, analytics, personalization, and AI — enabling measurable, scalable, and revenue-focused marketing.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Unify Data", icon: <Database /> },
                                { title: "Automate All", icon: <Ship /> },
                                { title: "Scale Fast", icon: <Rocket /> },
                                { title: "AI Powered", icon: <Brain /> }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    ref={el => futureCardsRef.current[index] = el}
                                    onMouseEnter={(e) => handleHover(e, true)}
                                    onMouseLeave={(e) => handleHover(e, false)}
                                    className="cursor-pointer bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-4 text-center group hover:shadow-xl hover:-translate-y-2 transition-all transition-duration-300"
                                >
                                    <div className="icon-container w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all transition-duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Martech Capabilities */}
            <section id="services" className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto text-center mb-16">
                    <h2 className="text-[36px] font-bold mb-6 tracking-tight text-white">Our Martech Capabilities</h2>
                    <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="container px-6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {capabilities.map((item, index) => (
                        <div
                            key={index}
                            ref={el => capabilityCardsRef.current[index] = el}
                            onMouseEnter={(e) => handleHover(e, true)}
                            onMouseLeave={(e) => handleHover(e, false)}
                            className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="icon-container text-blue-400 mb-8 transition-transform inline-block">
                                {item.icon}
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">"{item.desc}"</p>
                            <div className="space-y-3">
                                {item.points.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Performance & Martech Integration Banner */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div ref={bannerRef} className="max-w-6xl mx-auto rounded-[50px] bg-gradient-to-br from-[#0066CC] to-[#004999] p-16 text-white relative shadow-[0_30px_60px_-12px_rgba(0,102,204,0.4)] overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                        <h2 className="text-[36px] font-bold mb-10 leading-tight text-white tracking-tight">Performance & Martech Integration</h2>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-lg opacity-90 leading-relaxed text-white font-medium">
                                    Disconnected platforms reduce efficiency and distort reporting. At Adkryoss managed by <span className="font-semibold">Clink Consultancy Services Private Limited</span>, our integration frameworks ensure centralized reporting, unified customer views, and operational efficiency across CRM, Ad platforms, E-commerce systems, and more.
                                </p>
                                <div className="inline-flex items-center gap-4 bg-white/10 px-8 py-4 rounded-full text-white font-semibold text-sm tracking-tighter shadow-inner">
                                    Synced Data. Scalable Growth.
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {["CRM Integration", "Ad System Sync", "E-com Bridging", "Automation Hub"].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 p-5 rounded-2xl flex items-center justify-center text-center font-semibold backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Businesses Choose Us */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-16 text-center leading-tight tracking-tight">
                        Why Businesses Choose Our Martech Expertise
                    </h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                ref={el => diffCardsRef.current[index] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="cursor-pointer bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 group hover:shadow-xl hover:-translate-y-2 transition-all transition-duration-300"
                            >
                                <div className="icon-container w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all transition-duration-300">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Implementation Process */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4 leading-tight tracking-tight">Our Martech Implementation Process</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {process.map((item, index) => (
                            <div
                                key={index}
                                ref={el => processStepsRef.current[index] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="cursor-pointer relative p-10 bg-slate-50 rounded-[40px] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl group transition-duration-300"
                            >
                                <div className="text-[48px] font-extrabold text-blue-600/10 absolute top-6 right-8 leading-none group-hover:text-blue-600/20 transition-all italic">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4 pr-10">{item.title}</h3>
                                <p className="text-slate-600 font-medium text-[16px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Advantages */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Industries */}
                        <div>
                            <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Industries We Empower</h2>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((item, index) => (
                                    <div
                                        key={index}
                                        ref={el => industryTagsRef.current[index] = el}
                                        onMouseEnter={(e) => handleHover(e, true)}
                                        onMouseLeave={(e) => handleHover(e, false)}
                                        className="cursor-pointer px-8 py-5 bg-white text-slate-900 rounded-2xl font-semibold transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-duration-300"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-blue-300 font-medium italic opacity-90 leading-relaxed">
                                Every industry demands a different data architecture — we build accordingly.
                            </p>
                        </div>
                        {/* Advantages */}
                        <div className="bg-white/5 p-12 rounded-[50px] border border-white/10 shadow-2xl">
                            <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">The Martech Advantage</h2>
                            <div className="space-y-6">
                                {advantages.map((item, index) => (
                                    <div
                                        key={index}
                                        ref={el => advantageItemsRef.current[index] = el}
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">
                                            ✔
                                        </div>
                                        <span className="font-semibold text-lg text-white opacity-90 group-hover:opacity-100 transition-opacity">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-12 text-blue-400 font-medium italic text-xl">
                                This is digital growth engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto text-left md:text-center">
                    <h2 className="text-[36px] font-bold mb-10 leading-tight text-white tracking-tight">Ready to Build a Smarter Marketing Engine?</h2>
                    <div className="space-y-12">
                        <div className="text-2xl font-bold opacity-90 max-w-3xl text-white mx-auto leading-relaxed">
                            <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium">
                                Technology is only powerful when it is structured.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium">
                                Automation is only effective when it is strategic.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium">
                                Data is only valuable when it drives revenue.
                            </p>
                        </div>
                        <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white font-medium opacity-80 max-w-3xl mx-auto italic">
                            At Adkryoss managed by <span className="font-bold">Clink Consultancy Services Private Limited</span>, we help businesses move from scattered tools to synchronized growth systems.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <p className="text-[16px] md:text-[18px] mb-6 text-3xl font-medium text-white italic tracking-tighter leading-none pb-4">
                                Let’s architect your Martech ecosystem for success.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#0066CC] py-6 px-16 rounded-[25px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                                Connect With Our Experts Today
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Ship = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.25.94 4.31 2.42 5.8" />
        <path d="M19 13V9" />
        <path d="M12 9V5" />
        <path d="M5 13V9" />
        <path d="M12 3 9 5h6z" />
    </svg>
);

export default MartechServices;

