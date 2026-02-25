import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import b2bservicehero from "../../../assets/martech/b2bservicehero.png";
import {
    CheckCircle2,
    ArrowRight,
    Zap,
    Search,
    ShieldCheck,
    Monitor,
    TrendingUp,
    Layers,
    Activity,
    Brain,
    Globe,
    Target
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const B2BCRO = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whyTitleRef = useRef(null);
    const whyContentRef = useRef(null);
    const whyBoxRef = useRef(null);
    const whyGridCardsRef = useRef([]);
    const frameworkCardsRef = useRef([]);
    const diffCardsRef = useRef([]);
    const industriesTagsRef = useRef([]);
    const processStepsRef = useRef([]);
    const toolsTagsRef = useRef([]);
    const chooseCardsRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Precision Reveal
            gsap.from(heroContentRef.current, {
                filter: "blur(15px)",
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power2.out"
            });
            gsap.from(heroImageRef.current, {
                clipPath: "inset(0% 100% 0% 0%)",
                opacity: 0,
                duration: 1.2,
                ease: "power3.inOut",
                delay: 0.3
            });

            // Why B2B - Unveiling
            gsap.from(whyTitleRef.current, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: whyTitleRef.current,
                    start: "top 85%"
                }
            });
            gsap.from(whyContentRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: whyContentRef.current,
                    start: "top 85%"
                }
            });
            whyGridCardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    scale: 0.8,
                    rotateY: 20,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%"
                    }
                });
            });

            // Framework - Staggered Fall-in
            frameworkCardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%"
                    }
                });
            });

            // Differentiators
            diffCardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.5,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%"
                    }
                });
            });

            // Industries
            industriesTagsRef.current.forEach((tag, i) => {
                gsap.from(tag, {
                    y: 20,
                    opacity: 0,
                    duration: 0.4,
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: tag,
                        start: "top 95%"
                    }
                });
            });

            // Process
            processStepsRef.current.forEach((step, i) => {
                gsap.from(step, {
                    x: -30,
                    opacity: 0,
                    duration: 0.5,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 90%"
                    }
                });
            });

            // Tools
            toolsTagsRef.current.forEach((tool, i) => {
                gsap.from(tool, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.4,
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: tool,
                        start: "top 95%"
                    }
                });
            });

            // Choose Us - Building Blocks
            chooseCardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    rotateX: -45,
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%"
                    }
                });
            });

            // Final CTA
            gsap.from(ctaRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 85%"
                }
            });

            // Floating hero image
            gsap.to(heroImageRef.current, {
                y: -15,
                duration: 3,
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
            backgroundColor: isEnter ? "rgba(59, 130, 246, 0.05)" : "#f8fafc",
            borderColor: isEnter ? "rgba(59, 130, 246, 0.4)" : "rgba(241, 245, 249, 1)",
            duration: 0.3
        });
        const icon = e.currentTarget.querySelector('.card-icon');
        if (icon) {
            gsap.to(icon, {
                scale: isEnter ? 1.2 : 1,
                rotation: isEnter ? 15 : 0,
                duration: 0.3
            });
        }
    };

    const handleDarkHover = (e, isEnter) => {
        gsap.to(e.currentTarget, {
            scale: isEnter ? 1.05 : 1,
            backgroundColor: isEnter ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
            duration: 0.3
        });
    };

    const framework = [
        {
            title: "1. Deep Funnel & Audience Audit",
            desc: "We identify where you lose revenue before you scale traffic.",
            points: [
                "Traffic quality & channel mix",
                "Landing page performance",
                "Form friction & abandonment rates",
                "Heatmaps, session recordings, scroll depth",
                "CRM conversion gaps"
            ],
            icon: <Search size={32} />
        },
        {
            title: "2. B2B Buyer Journey Optimization",
            desc: "Enterprise buyers need clarity, not clutter.",
            points: [
                "Landing pages for industry-specific personas",
                "Value propositions aligned to buying committees",
                "Lead magnets that attract decision-makers",
                "Multi-step forms for qualification"
            ],
            icon: <Globe size={32} />
        },
        {
            title: "3. Landing Page & UX Redesign",
            desc: "Every design decision is backed by user behavior data.",
            points: [
                "Message-market fit positioning",
                "Trust signals (case studies, client logos)",
                "Strong CTAs with behavioral triggers",
                "Responsive UX across devices",
                "Fast-loading, SEO-optimized structure"
            ],
            icon: <Monitor size={32} />
        },
        {
            title: "4. A/B Testing & Experimentation Engine",
            desc: "Optimization is a continuous growth loop.",
            points: [
                "Headlines & messaging angles",
                "CTA placements & copy",
                "Page layouts",
                "Social proof positioning",
                "Pricing & offer structures"
            ],
            icon: <Zap size={32} />
        },
        {
            title: "5. Lead Qualification & Revenue Alignment",
            desc: "Adkryoss managed by Clink Consultancy Services Private Limited aligns marketing performance with revenue metrics.",
            points: [
                "Smart form logic",
                "CRM-based funnel tracking",
                "Retargeting workflows",
                "Marketing automation sequences"
            ],
            icon: <Target size={32} />
        }
    ];

    const differentiators = [
        {
            title: "Strategy Before Design",
            desc: "We map conversion architecture before redesigning pages."
        },
        {
            title: "Revenue-Focused Metrics",
            desc: "We optimize for: Cost per SQL, Pipeline value, Customer acquisition cost, Conversion velocity"
        },
        {
            title: "Data + Psychology Blend",
            desc: "Behavioural science meets performance marketing."
        },
        {
            title: "SEO + CRO Alignment",
            desc: "We ensure technical SEO and conversion paths work together seamlessly."
        }
    ];

    const process = [
        { title: "Conversion Audit", step: "Discover" },
        { title: "Hypothesis Development", step: "Diagnose" },
        { title: "Page Optimization & Testing", step: "Design" },
        { title: "Data Monitoring", step: "Deploy" },
        { title: "Scaling Winning Variants", step: "Double Down" }
    ];

    const industries = ["BFSI & FinTech", "SaaS & Technology", "Healthcare & Pharma", "Manufacturing & Industrial", "Education & EdTech", "Real Estate & Infrastructure"];

    const tools = ["Google Analytics 4", "Heatmap & session tracking platforms", "CRM integrations", "A/B testing platforms", "Marketing automation systems"];

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
                            B2B CRO Services
                        </h1>
                        <h2 className="text-[32px] font-medium mb-6 text-white leading-tight">
                            Turn Clicks Into Qualified B2B Revenue
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-[16px] md:text-[18px] mb-6 font-semibold text-white leading-relaxed text-justify px-1">
                                Data-led experimentation. Intent-driven journeys. Measurable growth.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium opacity-90 text-justify px-1">
                                We don’t guess. We test, optimize, and scale what drives pipeline.
                            </p>
                        </div>

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
                    {/* RIGHT IMAGE */}
                    <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={b2bservicehero}
                                alt="B2B CRO Services"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why B2B CRO Is Different */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 ref={whyTitleRef} className="text-[36px] font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                Why B2B CRO Is Different
                            </h2>
                            <div ref={whyContentRef} className="space-y-6">
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium text-justify">
                                    B2B conversion is not about impulse—it’s about trust, authority, and decision cycles. Multiple stakeholders. Longer sales funnels. High-ticket values.
                                </p>
                                <div className="p-8 bg-white border-l-8 border-blue-600 rounded-r-2xl shadow-sm leading-relaxed text-slate-700 font-medium text-justify px-6">
                                    "That’s why Adkryoss managed by <span className="font-semibold text-blue-600">Clink Consultancy Services Private Limited</span> builds CRO systems tailored for B2B brands that need predictable pipeline growth, not just form submissions."
                                </div>
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <h3 className="text-xl font-semibold mb-6 text-slate-900">We align:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "User intent + buying stage",
                                            "Messaging + industry pain points",
                                            "UX + lead qualification",
                                            "Data + business KPIs"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                                                <span className="font-semibold text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-blue-600 font-medium italic">
                                    The result? Higher MQL-to-SQL conversion, improved deal velocity, and scalable ROI.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Trust Signals", icon: <ShieldCheck /> },
                                { title: "Authority", icon: <Award /> },
                                { title: "Sales Funnel", icon: <Ship /> },
                                { title: "Decision Cycles", icon: <Activity /> }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    ref={el => whyGridCardsRef.current[index] = el}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-4 text-center group hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
                                    onMouseEnter={(e) => handleHover(e, true)}
                                    onMouseLeave={(e) => handleHover(e, false)}
                                >
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all card-icon">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-slate-900 leading-tight">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our B2B CRO Framework */}
            <section id="services" className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto text-center mb-16">
                    <h2 className="text-[36px] font-bold mb-6 tracking-tight text-white">Our B2B CRO Framework</h2>
                    <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="container px-6 mx-auto flex flex-wrap justify-center gap-10">
                    {framework.map((item, index) => (
                        <div
                            key={index}
                            ref={el => frameworkCardsRef.current[index] = el}
                            onMouseEnter={(e) => handleDarkHover(e, true)}
                            onMouseLeave={(e) => handleDarkHover(e, false)}
                            className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)] cursor-pointer"
                        >
                            <div className="text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block card-icon">
                                {item.icon}
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">"{item.desc}"</p>
                            <div className="space-y-3 flex-grow">
                                {item.points.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80 group-hover:translate-x-1 transition-transform">
                                        <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-16 text-center leading-tight tracking-tight">
                        What Makes Our B2B CRO Different
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                ref={el => diffCardsRef.current[index] = el}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-4 group hover:shadow-2xl hover:-translate-y-2 transition-all hover:bg-white cursor-default"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {index === 0 ? <Layers size={24} /> : index === 1 ? <TrendingUp size={24} /> : index === 2 ? <Brain size={24} /> : <Target size={24} />}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Process */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Industries */}
                        <div>
                            <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Industries We Drive B2B Growth For</h2>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((item, index) => (
                                    <div
                                        key={index}
                                        ref={el => industriesTagsRef.current[index] = el}
                                        className="px-8 py-5 bg-white text-slate-900 rounded-2xl font-extrabold transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1 cursor-default"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Our B2B CRO Process */}
                        <div className="bg-white/5 p-12 rounded-[50px] border border-white/10 shadow-2xl">
                            <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight text-center">Our B2B CRO Process</h2>
                            <div className="text-center mb-10 overflow-hidden">
                                <span className="text-xl font-extrabold text-blue-400 italic inline-block whitespace-nowrap">Discover → Diagnose → Design → Deploy → Double Down</span>
                            </div>
                            <div className="space-y-6">
                                {process.map((item, index) => (
                                    <div
                                        key={index}
                                        ref={el => processStepsRef.current[index] = el}
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-extrabold group-hover:scale-110 transition-transform">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <span className="font-extrabold text-blue-300 mr-2 uppercase text-sm tracking-widest">{item.step}:</span>
                                            <span className="font-semibold text-lg text-white opacity-90 group-hover:opacity-100 transition-opacity">{item.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-12 text-blue-400 font-medium italic text-center">
                                This structured growth loop ensures consistent improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools We Work With */}
            <section className="py-24 bg-white text-center">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-12 leading-tight">Tools & Technology Stack</h2>
                    <p className="text-xl text-slate-500 font-medium mb-12 max-w-3xl mx-auto">We leverage enterprise-grade tools for data accuracy and performance insights.</p>
                    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                ref={el => toolsTagsRef.current[index] = el}
                                className="px-10 py-6 bg-slate-50 border border-slate-100 rounded-3xl flex items-center gap-4 font-bold text-slate-900 group hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md cursor-default"
                            >
                                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                                <span className="text-lg">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-12 leading-tight tracking-tight px-1">Why Choose Us for B2B CRO?</h2>
                        <div className="grid md:grid-cols-2 gap-10 mb-12">
                            <div
                                ref={el => chooseCardsRef.current[0] = el}
                                className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-center items-center gap-4 group hover:shadow-xl transition-all cursor-default"
                            >
                                <p className="text-2xl font-medium text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-[4px]">Because traffic is easy</p>
                                <p className="text-[48px] font-medium text-blue-500 tracking-tighter">Pipeline is hard.</p>
                            </div>
                            <div
                                ref={el => chooseCardsRef.current[1] = el}
                                className="flex flex-col gap-6 text-left"
                            >
                                <p className="text-xl text-slate-700 leading-relaxed font-medium italic text-justify px-1">
                                    Adkryoss managed by <span className="font-bold">Clink Consultancy Services Private Limited</span> focuses on building revenue-generating digital ecosystems for B2B organizations that want measurable growth.
                                </p>
                                <div className="p-6 bg-blue-600 rounded-3xl text-white font-black text-xl italic shadow-lg">
                                    We don’t chase vanity metrics. We optimize decision-making journeys.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section ref={ctaRef} className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-[36px] font-bold mb-10 leading-tight text-white tracking-tight px-1">Let’s Build a High-Converting B2B Funnel</h2>
                    <div className="space-y-12">
                        <div className="text-2xl font-bold opacity-90 max-w-3xl text-white mx-auto leading-relaxed">
                            <p className="text-[20px] mb-6 text-white font-medium">
                                If your website generates traffic but not revenue, it’s time to optimize intelligently.
                            </p>
                        </div>
                        <p className="text-[18px] mb-6 text-xl text-white font-medium opacity-80 max-w-3xl mx-auto italic">
                            Partner with Adkryoss managed by <span className="font-bold">Clink Consultancy Services Private Limited</span> and transform your digital presence into a high-performing B2B conversion engine.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <p className="text-[24px] mb-6 text-3xl font-medium text-white italic tracking-tighter leading-tight">
                                Ready to increase qualified leads and accelerate pipeline growth? <br />
                                Let’s optimize your funnel. 🚀
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#0066CC] py-6 px-16 rounded-[25px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                                Optimize My Funnel
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

const Award = ({ size = 24 }) => (
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
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

export default B2BCRO;
