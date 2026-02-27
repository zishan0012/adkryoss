import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cdpservicehero from "../../../assets/martech/cdpservicehero.png";
import {
    Database,
    Users,
    Target,
    Zap,
    ShieldCheck,
    Layers,
    Activity,
    Brain,
    Rocket,
    Globe,
    ArrowRight,
    Search,
    Monitor,
    CheckCircle2,
    Workflow,
    TrendingUp,
    Shield,
    Cpu,
    Fingerprint,
    Share2,
    Settings,
    MessageSquare,
    Smartphone
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CDPServices = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const needsTitleRef = useRef(null);
    const needsCardsRef = useRef([]);
    const whatCdpBoxRef = useRef(null);
    const whatCdpTextRef = useRef(null);
    const serviceCardsRef = useRef([]);
    const diffCardsRef = useRef([]);
    const industryTagsRef = useRef([]);
    const benefitsBoxRef = useRef(null);
    const frameworkStepsRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - 3D Flip/Slide
            gsap.fromTo(heroContentRef.current, {
                rotateX: -45,
                y: 100,
                opacity: 0
            }, {
                rotateX: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroContentRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            gsap.fromTo(heroImageRef.current, {
                x: 100,
                opacity: 0,
                scale: 0.8
            }, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroImageRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Needs Section - Staggered Fall-in
            gsap.fromTo(needsTitleRef.current, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: needsTitleRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            needsCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    y: -50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "bounce.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // What is CDP - Perspective Reveal
            gsap.fromTo(whatCdpBoxRef.current, {
                rotateY: 90,
                opacity: 0
            }, {
                rotateY: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: whatCdpBoxRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            gsap.fromTo(whatCdpTextRef.current, {
                x: 50,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: whatCdpTextRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Services - Spiral Entrance
            serviceCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    scale: 0,
                    rotation: 180,
                    opacity: 0
                }, {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
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

            // Differentiators - Side Slide
            diffCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    x: i % 2 === 0 ? -100 : 100,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Industries & Benefits
            industryTagsRef.current.forEach((tag, i) => {
                gsap.fromTo(tag, {
                    scale: 0.5,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: tag,
                        start: "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });
            gsap.fromTo(benefitsBoxRef.current, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: benefitsBoxRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Framework Steps - Sequential
            frameworkStepsRef.current.forEach((step, i) => {
                gsap.fromTo(step, {
                    x: 50,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Final CTA
            gsap.fromTo(ctaRef.current, {
                scale: 0.8,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Floating effect for hero image
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
            boxShadow: isEnter ? "0 20px 40px rgba(0,0,0,0.1)" : "0 0px 0px rgba(0,0,0,0)",
            backgroundColor: isEnter ? "rgba(255,255,255,0.08)" : "transparent",
            duration: 0.3
        });
        const icon = e.currentTarget.querySelector('.card-icon');
        if (icon) {
            gsap.to(icon, {
                scale: isEnter ? 1.2 : 1,
                rotation: isEnter ? 360 : 0,
                duration: 0.5
            });
        }
    };

    const needsCDP = [
        { title: "Eliminate data silos", icon: <Layers size={24} /> },
        { title: "Create a single customer view", icon: <Users size={24} /> },
        { title: "Deliver hyper-personalized experiences", icon: <Target size={24} /> },
        { title: "Improve campaign ROI", icon: <TrendingUp size={24} /> },
        { title: "Strengthen compliance & governance", icon: <ShieldCheck size={24} /> }
    ];

    const services = [
        {
            title: "1. CDP Consulting & Strategy",
            desc: "We define how your CDP aligns with business goals — not just technology goals.",
            points: [
                "Data maturity assessment",
                "Technology evaluation & selection",
                "Use-case roadmap creation",
                "Compliance planning (GDPR-ready architecture)"
            ],
            icon: <Search size={32} />
        },
        {
            title: "2. CDP Implementation & Integration",
            desc: "We ensure seamless deployment with zero disruption to your marketing operations.",
            points: [
                "Platform setup & configuration",
                "API and data source integration",
                "CRM, ERP, POS & marketing tool sync",
                "Identity resolution & data normalization"
            ],
            icon: <Monitor size={32} />
        },
        {
            title: "3. Customer Data Unification",
            desc: "Your customers are no longer scattered across platforms — they exist as one actionable profile.",
            points: [
                "360° profile building",
                "Cross-device identity stitching",
                "Behavioral + transactional mapping",
                "Real-time data ingestion"
            ],
            icon: <Fingerprint size={32} />
        },
        {
            title: "4. Advanced Segmentation & Personalization",
            desc: "Every campaign becomes precision-driven with intelligent segmentation.",
            points: [
                "AI-driven audience clusters",
                "Predictive scoring models",
                "Dynamic content personalization",
                "Lifecycle-based targeting"
            ],
            icon: <Brain size={32} />
        },
        {
            title: "5. Marketing Automation Activation",
            desc: "Our implementation ensures your CDP activates data across paid, owned, and earned channels.",
            points: [
                "Omnichannel journey orchestration",
                "Trigger-based communication",
                "Cross-channel campaign sync",
                "Performance tracking dashboards"
            ],
            icon: <Zap size={32} />
        },
        {
            title: "6. Data Governance & Compliance",
            desc: "Trust and compliance are critical in the era of first-party data dominance.",
            points: [
                "Consent management frameworks",
                "Data privacy compliance architecture",
                "Secure data storage standards",
                "Risk mitigation strategies"
            ],
            icon: <Shield size={32} />
        }
    ];

    const industries = ["BFSI", "E-commerce & Retail", "Healthcare", "Real Estate", "Education", "Travel & Hospitality"];

    const differentiators = [
        {
            title: "Strategic Approach",
            desc: "We align CDP architecture with your growth roadmap.",
            icon: <Workflow size={24} />
        },
        {
            title: "Performance-Driven Execution",
            desc: "Every implementation is mapped to measurable KPIs.",
            icon: <Activity size={24} />
        },
        {
            title: "Technology-Agnostic Expertise",
            desc: "We recommend what fits your ecosystem, working with leading platforms.",
            icon: <Cpu size={24} />
        },
        {
            title: "Future-Ready Infrastructure",
            desc: "Scalable, AI-compatible, and automation-driven solutions.",
            icon: <Settings size={24} />
        }
    ];

    const framework = [
        { title: "Step 1: Discover & Audit", desc: "We evaluate your existing martech stack and data maturity." },
        { title: "Step 2: Design Architecture", desc: "We blueprint an integrated ecosystem connecting all touchpoints." },
        { title: "Step 3: Deploy & Integrate", desc: "We implement, test, and unify your data infrastructure." },
        { title: "Step 4: Activate & Optimize", desc: "We create intelligent segments and drive ROI-focused campaigns." }
    ];

    const benefits = [
        "Unified Customer View",
        "Higher Personalization Accuracy",
        "Increased Conversion Rates",
        "Improved Retention & Loyalty",
        "Reduced Customer Acquisition Cost",
        "Enhanced Marketing ROI"
    ];

    return (
        <div ref={pageRef} className="bg-white text-slate-900 overflow-hidden" style={{ perspective: "1000px" }}>
            {/* Hero Section */}
            {/* <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                   
                    <div className="text-left relative z-10 animate-fade-in-up text-white">
                  
                    <div ref={heroContentRef} className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-tight leading-[1.1] text-white">
                            Customer Data Platform (CDP) Services
                        </h1>
                        <h2 className="text-[32px] font-medium mb-2 text-white">
                            Unify. Understand. Activate.
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-[16px] md:text-[18px] mb-2 font-bold text-white leading-relaxed">
                                Turn fragmented customer data into revenue-driving intelligence.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-2 text-white font-medium opacity-95 text-justify">
                                Build a 360° customer view, personalize every interaction, and activate real-time journeys with advanced CDP solutions. At Adkryoss managed by <span className="font-bold ">Clink Consultancy Services Private Limited</span>, we help you master your first-party data.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                           
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                   
                    <div className="flex justify-center md:justify-end relative z-10">
                   
                    <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={cdpservicehero}
                                alt="CDP Services"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl"
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

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div ref={heroContentRef} className="text-left max-w-[600px] space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Customer Data Platform (CDP) Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Unify. Understand. Activate.
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-semibold">
        Turn fragmented customer data into revenue-driving intelligence.
      </p>
      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-medium text-justify">
        Build a 360° customer view, personalize every interaction, and activate real-time journeys with advanced CDP solutions. At <span className="font-bold">Adkryoss managed by Clink Consultancy Services Private Limited</span>, we help you master your first-party data.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-full 
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Speak to Our Expert →
        </a>

        <a
          href="#services"
          className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold 
                     transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
        >
          Our Services →
        </a>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end relative z-10">
      <div ref={heroImageRef} className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={cdpservicehero}
          alt="CDP Services"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
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

</motion.section>


            {/* Why Your Business Needs a CDP Now */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 ref={needsTitleRef} className="text-[36px] font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                Why Your Business Needs a CDP Now
                            </h2>
                            <div className="space-y-6 text-justify">
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                    Data is everywhere — website analytics, CRM, mobile apps, ad platforms, email tools, offline stores. But without integration, it's just noise.
                                </p>
                                <div className="p-8 bg-white border-l-8 border-blue-600 rounded-r-2xl shadow-sm leading-relaxed text-slate-700 font-medium italic">
                                    "A modern Customer Data Platform connects and unifies first-party data, enabling businesses to lead with intelligence."
                                </div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium mt-6">
                                    At Adkryoss managed by <span className="font-bold text-blue-600 underline">Clink Consultancy Services Private Limited</span>, we architect CDP ecosystems that transform raw data into measurable business growth.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {needsCDP.map((item, index) => (
                                <div
                                    key={index}
                                    ref={el => needsCardsRef.current[index] = el}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-4 text-center group hover:shadow-xl hover:-translate-y-2 transition-all w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
                                >
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-slate-900 leading-tight">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What Is a Customer Data Platform? */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div ref={whatCdpBoxRef} className="bg-slate-900 p-12 rounded-[50px] text-white relative shadow-2xl">
                                <h3 className="text-2xl font-semibold mb-6 text-blue-400 tracking-tighter uppercase">Beyond CRM & DMP</h3>
                                <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white font-medium leading-relaxed italic border-l-4 border-blue-600 pl-6 text-justify">
                                    "A CDP becomes the backbone of your personalization and performance marketing strategy."
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Integrates structured & unstructured data",
                                        "Unifies identities across devices",
                                        "Enables real-time segmentation",
                                        "Activates data across marketing channels"
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-blue-500" size={20} />
                                            <span className="font-bold text-white/90">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div ref={whatCdpTextRef} className="order-1 md:order-2 text-justify">
                            <h2 className="text-[36px] font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                What Is a Customer Data Platform?
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                A Customer Data Platform (CDP) is a centralized system that collects, organizes, and activates customer data across all touchpoints.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium mt-6">
                                Unlike traditional CRMs or DMPs, a CDP unifies data from all sources to create a complete, real-time profile of every individual customer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our CDP Services */}
            <section id="services" className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto text-center mb-16">
                    <h2 className="text-[36px] font-bold mb-6 tracking-tight text-white">Our CDP Services</h2>
                    <p className="text-blue-200/80 max-w-2xl mx-auto font-medium mb-10">We deliver end-to-end CDP consulting, implementation, and optimization solutions tailored to your business objectives.</p>
                    <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="container px-6 mx-auto flex flex-wrap justify-center gap-10">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            ref={el => serviceCardsRef.current[index] = el}
                            onMouseEnter={(e) => handleHover(e, true)}
                            onMouseLeave={(e) => handleHover(e, false)}
                            className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)] cursor-pointer"
                        >
                            <div className="card-icon text-blue-400 mb-8 group-hover:scale-110 transition-transform inline-block">
                                {item.icon}
                            </div>
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-blue-200/80 mb-6 font-medium italic">"{item.desc}"</p>
                            <div className="space-y-3 flex-grow">
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

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto text-justify">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-16 text-center leading-tight tracking-tight">
                        Why Choose Us for CDP Services?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                ref={el => diffCardsRef.current[index] = el}
                                className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-6 group hover:shadow-2xl hover:-translate-y-2 transition-all w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] cursor-default"
                            >
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:bg-slate-900 transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-[20px] font-semibold text-slate-900 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Framework */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Industries */}
                        <div>
                            <h2 className="text-[36px] font-bold mb-10 text-slate-900 tracking-tight">Industries We Empower</h2>
                            <p className="text-slate-600 mb-10 font-medium">We customize CDP implementations for high-growth sectors:</p>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((item, index) => (
                                    <div
                                        key={index}
                                        ref={el => industryTagsRef.current[index] = el}
                                        className="px-8 py-5 bg-white text-slate-800 rounded-2xl font-semibold border-2 border-slate-100 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 shadow-sm cursor-default"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div ref={benefitsBoxRef} className="mt-16 bg-slate-900 p-10 rounded-[40px] text-white shadow-2xl">
                                <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight text-center">Key Benefits</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {benefits.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 group">
                                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform text-xs">
                                                ✔
                                            </div>
                                            <span className="font-semibold text-white/90 group-hover:text-white transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 text-center text-blue-400 font-medium italic text-sm">Adkryoss focuses on building long-term scalable data ecosystems.</p>
                            </div>
                        </div>
                        {/* Framework */}
                        <div className="flex flex-col gap-12">
                            <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-xl">
                                <h2 className="text-[36px] font-bold mb-10 text-slate-900 tracking-tight">Implementation Framework</h2>
                                <div className="space-y-8 text-justify">
                                    {framework.map((item, index) => (
                                        <div key={index} ref={el => frameworkStepsRef.current[index] = el} className="flex gap-6 items-start group">
                                            <div className="text-blue-600 font-black text-lg py-1 min-w-[60px]">{index + 1}.</div>
                                            <div className="flex-1 border-l-2 border-slate-100 pl-6 py-1 group-hover:border-blue-600 transition-colors">
                                                <h3 className="font-semibold text-xl text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-[40px] text-white text-center">
                                <h2 className="text-[34px] font-bold mb-6 leading-tight">Ready to build your customer intelligence engine?</h2>
                                <p className="text-[16px] md:text-[18px] mb-6 text-white/80 font-medium">
                                    Move from fragmented campaigns to predictive personalization.
                                </p>
                                <Link to="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-black hover:scale-105 transition-all shadow-lg uppercase text-sm tracking-widest">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section ref={ctaRef} className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-center px-6">
                <div className="container max-w-4xl mx-auto  pt-24">
                    <h2 className="text-[36px] font-bold mb-8 leading-tight text-slate-900 tracking-tight">Transform Data into Competitive Advantage</h2>
                    <div className="space-y-8">
                        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto text-white leading-relaxed text-justify px-2">
                            The future of marketing belongs to businesses that own, understand, and activate their first-party data intelligently. The businesses that harness this power will thrive, while others struggle with fragmented insights.
                        </p>
                        <p className="text-2xl font-medium text-white  tracking-tighter leading-tight">
                            Partner with Adkryoss managed by Clink Consultancy Services Private Limited.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white py-6 px-16 rounded-[25px] text-[22px] font-bold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                                Build My Intelligence Engine
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CDPServices;
