import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import shopifyhero from "../../../assets/martech/shopifyhero.png";
import {
    ShoppingCart,
    CheckCircle2,
    ArrowRight,
    Zap,
    Search,
    ShoppingBag,
    TrendingUp,
    MousePointer2,
    BarChart3,
    Smartphone,
    Monitor,
    ShieldCheck,
    RotateCcw,
    Users,
    Activity,
    Brain,
    Rocket,
    Globe,
    Target,
    Layout,
    Layers,
    Type,
    Package,
    Settings,
    Database,
    PenTool
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShopifyCRO = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whyTitleRef = useRef(null);
    const whyCardsRef = useRef([]);
    const approachCardsRef = useRef([]);
    const diffCardsRef = useRef([]);
    const serviceTagsRef = useRef([]);
    const industryTagsRef = useRef([]);
    const impactBoxRef = useRef(null);
    const impactItemsRef = useRef([]);
    const frameworkBoxRef = useRef(null);
    const frameworkStepsRef = useRef([]);
    const toolsBoxRef = useRef(null);
    const toolsTagsRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Rapid Zoom
            gsap.fromTo(heroContentRef.current, {
                scale: 1.2,
                opacity: 0
            }, {
                scale: 1,
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
                scale: 0.8,
                opacity: 0
            }, {
                x: 0,
                scale: 1,
                opacity: 1,
                duration: 1.2,
                delay: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: heroImageRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Why Section - Bouncy Stagger
            gsap.fromTo(whyTitleRef.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: whyTitleRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            whyCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    scale: 0.5,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: "elastic.out(1, 0.5)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Approach - Diagonal Reveal
            approachCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    x: (i % 3 - 1) * 50,
                    y: 50,
                    opacity: 0
                }, {
                    x: 0,
                    y: 0,
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

            // Differentiators
            diffCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Services Tags - Sequential Pop
            serviceTagsRef.current.forEach((tag, i) => {
                gsap.fromTo(tag, {
                    scale: 0,
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

            // Industries & Impact
            industryTagsRef.current.forEach((tag, i) => {
                gsap.fromTo(tag, {
                    x: -20,
                    opacity: 0
                }, {
                    x: 0,
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
            gsap.fromTo(impactBoxRef.current, {
                scale: 0.9,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: impactBoxRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            impactItemsRef.current.forEach((item, i) => {
                gsap.fromTo(item, {
                    x: 30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.5 + i * 0.1,
                    scrollTrigger: {
                        trigger: impactBoxRef.current,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Framework
            gsap.fromTo(frameworkBoxRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: frameworkBoxRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            frameworkStepsRef.current.forEach((step, i) => {
                gsap.fromTo(step, {
                    x: -50,
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

            // Tools
            toolsBoxRef.current.childNodes.forEach((tool, i) => {
                gsap.fromTo(tool, {
                    scale: 0.8,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: tool,
                        start: "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Final CTA
            gsap.fromTo(ctaRef.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Floating hero effect
            gsap.to(heroImageRef.current, {
                y: -10,
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
            backgroundColor: isEnter ? "rgba(59, 130, 246, 0.05)" : "white",
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

    const approach = [
        {
            title: "1. Conversion Audit & Data Intelligence",
            desc: "We analyze your store’s performance across critical data points to identify what’s blocking conversions.",
            points: [
                "Heatmaps & user session recordings",
                "Funnel drop-off points",
                "Cart abandonment behavior",
                "Mobile vs desktop performance",
                "Page speed & Core Web Vitals",
                "Checkout friction analysis"
            ],
            icon: <Search size={32} />
        },
        {
            title: "2. UX & UI Optimization",
            desc: "A strategic store converts better than a just beautiful one.",
            points: [
                "Homepage messaging hierarchy",
                "Product page structure",
                "CTA placement & micro copy",
                "Trust elements & social proof",
                "Navigation architecture",
                "Mobile-first design experience"
            ],
            icon: <Monitor size={32} />
        },
        {
            title: "3. A/B & Multivariate Testing",
            desc: "Growth comes from testing, not assumptions.",
            points: [
                "Headlines & value propositions",
                "Product descriptions",
                "Pricing display strategies",
                "CTA color, placement & wording",
                "Checkout optimization elements"
            ],
            icon: <Zap size={32} />
        },
        {
            title: "4. Shopify Checkout Optimization",
            desc: "We reduce friction at the most critical revenue stage.",
            points: [
                "Simplified checkout flows",
                "Guest checkout optimization",
                "Auto-fill & smart validation",
                "Payment method enhancement",
                "Trust badge placement",
                "Shipping & return clarity"
            ],
            icon: <ShoppingCart size={32} />
        },
        {
            title: "5. Mobile Conversion Enhancement",
            desc: "Optimizing for the 70%+ of traffic that comes from mobile.",
            points: [
                "Thumb-friendly navigation",
                "Faster loading pages",
                "Mobile product image hierarchy",
                "Sticky add-to-cart buttons",
                "One-click checkout experience"
            ],
            icon: <Smartphone size={32} />
        }
    ];

    const services = [
        "Complete Shopify Conversion Audit",
        "Landing Page Optimization",
        "Product Page Optimization",
        "Cart & Checkout Optimization",
        "Funnel Optimization Strategy",
        "A/B Testing Management",
        "Customer Journey Mapping",
        "Behavioral Analytics Setup",
        "Retention & Repeat Purchase Optimization",
        "Shopify Speed & Performance Optimization"
    ];

    const industries = [
        "Fashion & Apparel",
        "Beauty & Skincare",
        "Electronics & Gadgets",
        "Health & Wellness",
        "D2C Brands",
        "Luxury Retail",
        "Subscription-Based Stores"
    ];

    const differentiators = [
        {
            title: "Performance Marketing Intelligence",
            desc: "We align CRO with your traffic source for maximum relevance.",
            icon: <TrendingUp size={24} />
        },
        {
            title: "Advanced Analytics Integration",
            desc: "Deep tracking setup to measure every micro-interaction.",
            icon: <Database size={24} />
        },
        {
            title: "Funnel Engineering",
            desc: "Architecting journeys that naturally lead to conversions.",
            icon: <Layers size={24} />
        },
        {
            title: "Psychological Triggers",
            desc: "Leveraging behavior principles to influence buying decisions.",
            icon: <Brain size={24} />
        },
        {
            title: "Revenue-Focused Experimentation",
            desc: "Every test is measured against profit, not just clicks.",
            icon: <Rocket size={24} />
        }
    ];

    const tools = [
        { title: "Advanced Analytics Platforms", icon: <BarChart3 /> },
        { title: "Heatmapping & Session Recording Tools", icon: <Target /> },
        { title: "A/B Testing Software", icon: <Zap /> },
        { title: "Funnel Tracking Systems", icon: <Layers /> },
        { title: "Shopify Performance Enhancers", icon: <Activity /> },
        { title: "UX Research Tools", icon: <Users /> }
    ];

    const impact = [
        "Higher Conversion Rate",
        "Reduced Cart Abandonment",
        "Increased Average Order Value",
        "Better Customer Retention",
        "Improved Return on Ad Spend",
        "Stronger Revenue Growth"
    ];

    const steps = [
        "Audit & Identify Revenue Gaps",
        "Prioritize High-Impact Opportunities",
        "Implement & Test",
        "Measure & Scale Winning Variations",
        "Continuous Optimization Loop"
    ];

    return (
        <div ref={pageRef} className="bg-white text-slate-900 overflow-hidden">
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
                            Shopify CRO Services
                        </h1>
                        <h2 className="text-[32px] font-medium mb-6 text-white leading-tight">
                            Turn More Traffic Into Revenue
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-[16px] md:text-[18px] mb-6 font-semibold text-white leading-relaxed text-justify px-1">
                                High traffic. Low conversions. That’s where growth gets stuck.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium opacity-95 text-justify px-1">
                                We transform your Shopify store into a high-performing sales engine with data-driven CRO strategies, behavioral insights, and continuous experimentation. At Adkryoss managed by <span className="font-semibold ">Clink Consultancy Services Private Limited</span>, we deliver measurable revenue lift.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            
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
                   
                    <div className="flex justify-center md:justify-end relative z-10">
                 
                    <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={shopifyhero}
                                alt="Shopify CRO"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl"
                            /></div>
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
          Shopify CRO Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Turn More Traffic Into Revenue
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-semibold">
        High traffic. Low conversions. That’s where growth gets stuck.
      </p>
      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-medium opacity-95">
        We transform your Shopify store into a high-performing sales engine with data-driven CRO strategies, behavioral insights, and continuous experimentation. At Adkryoss managed by <span className="font-semibold">Clink Consultancy Services Private Limited</span>, we deliver measurable revenue lift.
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
          src={shopifyhero}
          alt="Shopify CRO Services"
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

            {/* Why Shopify CRO Matters */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 ref={whyTitleRef} className="text-[36px] font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                Why Shopify CRO Matters
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium text-justify">
                                    Running ads and driving traffic is only half the battle. If your Shopify store isn’t optimized for conversion, you’re leaking revenue every single day.
                                </p>
                                <div className="p-8 bg-white border-l-8 border-blue-600 rounded-r-2xl shadow-sm leading-relaxed text-slate-700 font-medium italic text-justify px-6">
                                    "At Adkryoss managed by <span className="font-semibold text-blue-600 underline">Clink Consultancy Services Private Limited</span>, we approach Shopify CRO as a science, not a design tweak."
                                </div>
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium mt-6 text-justify">
                                    We combine analytics, psychology, UX intelligence, and A/B experimentation to build conversion-focused digital storefronts.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 h-full">
                            {[
                                { title: "Improve Conversion %", icon: <TrendingUp /> },
                                { title: "Add to Cart Rate", icon: <ShoppingBag /> },
                                { title: "Checkout Success", icon: <CheckCircle2 /> },
                                { title: "Revenue Growth", icon: <RotateCcw /> }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    ref={el => whyCardsRef.current[index] = el}
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

            {/* Our Shopify CRO Approach */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto text-center mb-16">
                    <h2 className="text-[36px] font-bold mb-6 tracking-tight text-white">Our Shopify CRO Approach</h2>
                    <p className="text-blue-200/80 max-w-2xl mx-auto font-medium mb-10 text-center">We don’t believe in random “best practices.” We build structured, insight-driven frameworks that maximize performance.</p>
                    <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="container px-6 mx-auto flex flex-wrap justify-center gap-10">
                    {approach.map((item, index) => (
                        <div
                            key={index}
                            ref={el => approachCardsRef.current[index] = el}
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
            <section className="py-24 bg-slate-50 text-center">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-16 text-center leading-tight tracking-tight px-1">
                        What Makes Our Shopify CRO Different?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                ref={el => diffCardsRef.current[index] = el}
                                className="bg-white p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-6 group hover:shadow-2xl hover:-translate-y-2 transition-all w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] cursor-default"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] font-semibold text-slate-900 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-16 text-center text-xl font-medium text-blue-600">We don’t optimize for clicks. We optimize for profit.</p>
                </div>
            </section>

            {/* Shopify CRO Services We Offer */}
            <section id="services" className="py-24 bg-white text-center">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-16 text-center leading-tight tracking-tight px-1">
                        Shopify CRO Services We Offer
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                ref={el => serviceTagsRef.current[index] = el}
                                className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-50 hover:border-blue-100 transition-all w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] cursor-default"
                            >
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black shrink-0">
                                    {index + 1}
                                </div>
                                <span className="text-[17px] font-semibold text-slate-800 tracking-tight text-left">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Execution Framework */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Industries */}
                        <div>
                            <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Industries We Serve</h2>
                            <p className="text-blue-200/80 mb-10 font-medium">We optimize Shopify stores across high-growth categories:</p>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((item, index) => (
                                    <div
                                        key={index}
                                        ref={el => industryTagsRef.current[index] = el}
                                        className="px-8 py-5 bg-white text-slate-900 rounded-2xl font-black font-semibold transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1 cursor-default"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div ref={impactBoxRef} className="mt-16 bg-white/5 p-10 rounded-[40px] border border-white/10 shadow-2xl">
                                <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight text-center">Impact You Can Expect</h2>
                                <div className="space-y-6">
                                    {impact.map((item, index) => (
                                        <div
                                            key={index}
                                            ref={el => impactItemsRef.current[index] = el}
                                            className="flex items-center gap-5 group"
                                        >
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                                                ✔
                                            </div>
                                            <span className="font-semibold text-lg text-white opacity-90 group-hover:opacity-100 transition-opacity tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 text-center text-blue-400 font-medium italic">When optimization meets strategy, growth becomes predictable.</p>
                            </div>
                        </div>
                        {/* Execution Framework */}
                        <div className="flex flex-col gap-12">
                            <div ref={frameworkBoxRef} className="bg-white/5 p-10 rounded-[40px] border border-white/10 shadow-2xl">
                                <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Our CRO Execution Framework</h2>
                                <div className="space-y-8">
                                    {steps.map((step, index) => (
                                        <div
                                            key={index}
                                            ref={el => frameworkStepsRef.current[index] = el}
                                            className="flex gap-6 items-start group"
                                        >
                                            <div className="text-blue-400 font-semibold text-lg py-2 min-w-[100px] uppercase tracking-wider">Step {index + 1}</div>
                                            <div className="flex-1 border-l-2 border-white/10 pl-6 py-2 group-hover:border-blue-500 transition-colors">
                                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white opacity-95 group-hover:text-white transition-colors tracking-tight leading-tight">
                                                    {step}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 text-blue-300 font-medium italic text-center text-sm">CRO is not a one-time fix. It’s a growth system.</p>
                            </div>

                            {/* Tools section */}
                            <div ref={toolsBoxRef} className="bg-white/5 p-10 rounded-[42px] border border-white/10 shadow-2xl">
                                <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Tools & Technologies We Use</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {tools.map((tool, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 group hover:bg-blue-600 transition-all cursor-default">
                                            <div className="text-blue-400 group-hover:text-white">
                                                {tool.icon}
                                            </div>
                                            <span className="text-sm font-semibold text-white tracking-tight">{tool.title}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-blue-400 font-medium italic text-sm opacity-80 text-center">We integrate the right tech stack to ensure peak performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section ref={ctaRef} className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-[36px] font-bold mb-10 leading-tight text-white tracking-tight px-1">Ready to Unlock Hidden Revenue?</h2>
                    <div className="space-y-12">
                        <div className="text-2xl font-semibold opacity-90 max-w-3xl text-white mx-auto leading-relaxed">
                            <p className="text-[20px] mb-6 text-white font-medium">
                                Your Shopify store already has traffic. <br /> Let’s convert it into profit.
                            </p>
                        </div>
                        <p className="text-[18px] mb-6 text-xl text-white font-medium opacity-90 max-w-3xl mx-auto italic">
                            Partner with Adkryoss managed by <span className="font-semibold underline decoration-blue-300">Clink Consultancy Services Private Limited</span> and turn your Shopify store into a scalable, conversion-focused revenue machine.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <p className="text-[24px] mb-6 font-medium text-white italic leading-tight">
                                Start optimizing today.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#0066CC] py-6 px-16 rounded-[25px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                                Transform My Shopify Store
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopifyCRO;
