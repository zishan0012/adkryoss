import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ecommercecrohero from "../../../assets/martech/ecommercecrohero.png";
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
    ChevronDown,
    ChevronUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EcommerceCRO = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whyTitleRef = useRef(null);
    const whyContentRef = useRef(null);
    const challengesCardsRef = useRef([]);
    const whyStatsCardsRef = useRef([]);
    const frameworkCardsRef = useRef([]);
    const serviceCardsRef = useRef([]);
    const diffBoxRef = useRef(null);
    const diffCardsRef = useRef([]);
    const industryTagsRef = useRef([]);
    const roiBoxRef = useRef(null);
    const roiPointsRef = useRef([]);
    const timelineBoxRef = useRef(null);
    const timelineItemsRef = useRef([]);
    const toolsBoxRef = useRef(null);
    const faqBoxRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Panoramic Slide
            gsap.fromTo(heroContentRef.current, {
                x: -100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
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
                scale: 1.1
            }, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "expo.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: heroImageRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Why Section - Smooth Flow
            gsap.fromTo(whyTitleRef.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: whyTitleRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            gsap.fromTo(whyContentRef.current, {
                x: 50,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: whyContentRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            challengesCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    y: 30,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
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
            whyStatsCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    rotateY: 90,
                    opacity: 0
                }, {
                    rotateY: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Framework - Enterprise Stagger
            frameworkCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    y: 100,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Services Grid
            serviceCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    scale: 0.9,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Differentiators
            gsap.fromTo(diffBoxRef.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: diffBoxRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            diffCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card, {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Industries & ROI
            industryTagsRef.current.forEach((tag, i) => {
                gsap.fromTo(tag, {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
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
            gsap.fromTo(roiBoxRef.current, {
                scale: 0.95,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: roiBoxRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
            roiPointsRef.current.forEach((point, i) => {
                gsap.fromTo(point, {
                    x: 20,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.5 + i * 0.1,
                    scrollTrigger: {
                        trigger: roiBoxRef.current,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Timeline
            timelineItemsRef.current.forEach((item, i) => {
                gsap.fromTo(item, {
                    x: 50,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // Tools
            toolsBoxRef.current.childNodes.forEach((tool, i) => {
                gsap.fromTo(tool, {
                    scale: 0,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: tool,
                        start: "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });

            // FAQ
            gsap.fromTo(faqBoxRef.current, {
                y: 40,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: faqBoxRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Final CTA
            gsap.fromTo(ctaRef.current, {
                scale: 0.9,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // Subtle hero movement
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

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

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

    const framework = [
        {
            title: "1. Deep Data & Behavior Analysis",
            desc: "This helps us uncover friction points that impact conversions.",
            points: [
                "Google Analytics 4 insights",
                "Heatmaps & session recordings",
                "Funnel drop-offs",
                "User flow behavior",
                "Device-level performance"
            ],
            icon: <Search size={32} />
        },
        {
            title: "2. UX & Conversion Audit",
            desc: "We create a prioritized CRO roadmap based on impact vs effort.",
            points: [
                "Homepage effectiveness",
                "Category & product page performance",
                "Search functionality",
                "Checkout usability",
                "Mobile responsiveness",
                "Trust signals & social proof"
            ],
            icon: <Monitor size={32} />
        },
        {
            title: "3. Hypothesis & Experimentation",
            desc: "No guesswork. Only measurable impact.",
            points: [
                "A/B Testing & Multivariate Testing",
                "CTA optimization & Placement tests",
                "Pricing & offer experiments",
                "Checkout redesign tests",
                "Layout restructuring"
            ],
            icon: <Zap size={32} />
        },
        {
            title: "4. Personalization & Smart Targeting",
            desc: "Modern ecommerce CRO is beyond button color changes.",
            points: [
                "Behavior-based personalization",
                "Geo-targeted content & offers",
                "Dynamic product recommendations",
                "Returning user experiences",
                "Cart abandonment recovery journeys"
            ],
            icon: <Target size={32} />
        },
        {
            title: "5. Continuous Optimization Cycle",
            desc: "CRO is not a one-time project.",
            points: [
                "Monthly experiment pipeline",
                "Performance reporting dashboards",
                "Incremental revenue tracking",
                "Iterative improvement strategy"
            ],
            icon: <RotateCcw size={32} />
        }
    ];

    const services = [
        {
            title: "Conversion Audit & Strategy",
            desc: "A detailed 360° analysis of your ecommerce store with actionable recommendations and growth forecasting.",
            icon: <BarChart3 size={24} />
        },
        {
            title: "Landing Page Optimization",
            desc: "High-converting landing pages aligned with user intent and paid campaigns.",
            icon: <Layout size={24} />
        },
        {
            title: "Product Page Optimization",
            desc: "Improving product storytelling, visuals, reviews, trust badges, and CTA placements.",
            icon: <ShoppingBag size={24} />
        },
        {
            title: "Checkout Optimization",
            desc: "Reducing cart abandonment through simplified checkout, trust elements, and UX enhancements.",
            icon: <ShoppingCart size={24} />
        },
        {
            title: "A/B & Multivariate Testing",
            desc: "Scientific experimentation framework to improve conversion rate, AOV, and revenue per visitor.",
            icon: <Activity size={24} />
        },
        {
            title: "Funnel Optimization",
            desc: "Optimizing every stage from awareness to purchase and repeat buying.",
            icon: <Layers size={24} />
        },
        {
            title: "Mobile CRO",
            desc: "Optimizing speed, UX, and friction points specifically for mobile users.",
            icon: <Smartphone size={24} />
        },
        {
            title: "Retention & Upsell Optimization",
            desc: "Increasing Average Order Value (AOV), Repeat purchase rate, and CLV.",
            icon: <TrendingUp size={24} />
        }
    ];

    const differentiators = [
        {
            title: "Performance-First Mindset",
            desc: "Every strategy is aligned with revenue impact — not vanity metrics.",
            icon: <Rocket size={24} />
        },
        {
            title: "Integrated Marketing Intelligence",
            desc: "We align CRO with SEO, Paid Media, and Email automation.",
            icon: <Brain size={24} />
        },
        {
            title: "Data + Psychology",
            desc: "Behavioral science meets persuasion principles to influence buying decisions.",
            icon: <Users size={24} />
        },
        {
            title: "Transparent Reporting",
            desc: "Clear dashboards showing real experiment results and revenue impact.",
            icon: <ShieldCheck size={24} />
        }
    ];

    const industries = ["Fashion & Apparel", "Beauty & Skincare", "Electronics", "D2C Brands", "Healthcare Products", "Home & Lifestyle", "B2B Ecommerce"];

    const tools = ["Google Analytics 4", "Google Tag Manager", "Hotjar", "Microsoft Clarity", "VWO", "Optimizely", "Shopify", "WooCommerce", "Magento"];

    const roiPoints = [
        "Increase conversion rates by 20–60%",
        "Reduce cost per acquisition",
        "Improve AOV (Average Order Value)",
        "Increase repeat purchases",
        "Boost profitability without increasing ad spend"
    ];

    const timeline = [
        { period: "Week 1–2", task: "Audit & Research" },
        { period: "Week 3–4", task: "Strategy & Hypothesis Planning" },
        { period: "Month 2–3", task: "Experiment Execution" },
        { period: "Ongoing", task: "Continuous Testing & Scaling" }
    ];

    const faqs = [
        {
            q: "How long does it take to see results?",
            a: "Initial uplift can be observed within 30–60 days depending on traffic volume and testing frequency."
        },
        {
            q: "Do you work with all ecommerce platforms?",
            a: "Yes. Adkryoss managed by Clink Consultancy Services Private Limited works across Shopify, WooCommerce, Magento, and custom-built platforms."
        },
        {
            q: "Is CRO better than running more ads?",
            a: "CRO improves revenue from existing traffic, making paid ads more profitable. Ideally, both should work together."
        }
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
                            Ecommerce CRO Services
                        </h1>
                        <h2 className="text-[32px] font-medium mb-6 text-white leading-tight">
                            Turn Traffic Into Revenue. Not Just Visits.
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-[16px] md:text-[18px] mb-6 font-semibold text-white leading-relaxed text-justify px-1">
                                Your ecommerce store doesn’t need more traffic. It needs higher conversions, smarter journeys, and frictionless buying experiences.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium opacity-95 text-justify px-1">
                                At Adkryoss managed by <span className="font-semibold">Clink Consultancy Services Private Limited</span>, we help ecommerce businesses unlock hidden revenue through data-driven CRO.
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
                                src={ecommercecrohero}
                                alt="Ecommerce CRO"
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
          Ecommerce CRO Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Turn Traffic Into Revenue. Not Just Visits.
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-semibold">
        Your ecommerce store doesn’t need more traffic. It needs higher conversions, smarter journeys, and frictionless buying experiences.
      </p>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-medium">
        At <span className="font-bold underline decoration-blue-400">Adkryoss managed by Clink Consultancy Services Private Limited</span>, we help ecommerce businesses unlock hidden revenue through data-driven CRO.
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
          src={ecommercecrohero}
          alt="Ecommerce CRO Services"
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


            {/* Why Ecommerce CRO Is No Longer Optional */}
            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 ref={whyTitleRef} className="text-[36px] font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                Why Ecommerce CRO Is No Longer Optional
                            </h2>
                            <div ref={whyContentRef} className="space-y-6">
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium text-justify">
                                    Driving traffic without optimizing conversion is like pouring water into a leaking bucket. In today's landscape, optimization is the only way to scale sustainably.
                                </p>
                                <div className="p-8 bg-white border-l-8 border-blue-600 rounded-r-2xl shadow-sm leading-relaxed text-slate-700 font-medium italic text-justify px-6">
                                    "Adkryoss managed by <span className="font-semibold text-blue-600 underline">Clink Consultancy Services Private Limited</span> focuses on identifying revenue leaks, improving buying journeys, and increasing customer lifetime value."
                                </div>
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <h3 className="text-xl font-semibold mb-6 text-slate-900">The Challenges We Solve:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Paid media costs are rising",
                                            "User attention spans are shrinking",
                                            "Customers expect seamless experiences",
                                            "70%+ carts are abandoned"
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                ref={el => challengesCardsRef.current[index] = el}
                                                className="flex items-center gap-3 group"
                                            >
                                                <CheckCircle2 className="text-blue-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                                <span className="font-semibold text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 h-lg">
                            {[
                                { title: "Rising Costs", icon: <TrendingUp /> },
                                { title: "Short Attention", icon: <Activity /> },
                                { title: "Seamless UX", icon: <Monitor /> },
                                { title: "Cart Recovery", icon: <ShoppingCart /> }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    ref={el => whyStatsCardsRef.current[index] = el}
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

            {/* Our Ecommerce CRO Framework */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto text-center mb-16">
                    <h2 className="text-[36px] font-bold mb-6 tracking-tight text-white">Our Ecommerce CRO Framework</h2>
                    <p className="text-blue-200/80 max-w-2xl mx-auto font-medium mb-10 text-center">We follow a performance-first, experimentation-led methodology inspired by global best practices.</p>
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

            {/* Ecommerce CRO Services We Offer */}
            <section id="services" className="py-24 bg-white text-center">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-16 text-center leading-tight tracking-tight px-1">
                        Ecommerce CRO Services We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                ref={el => serviceCardsRef.current[index] = el}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-4 group hover:shadow-2xl hover:-translate-y-2 transition-all hover:bg-white cursor-default"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-16 text-center leading-tight tracking-tight px-1">
                        What Makes Our CRO Approach Different?
                    </h2>
                    <div ref={diffBoxRef} className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                ref={el => diffCardsRef.current[index] = el}
                                className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex items-start gap-8 group hover:shadow-xl transition-all text-left cursor-default"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl shrink-0 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-[22px] font-semibold mb-4 text-slate-900 leading-tight">{item.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed text-lg">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Timeline */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Industries */}
                        <div>
                            <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Industries We Serve</h2>
                            <div className="flex flex-wrap gap-4">
                                {industries.map((item, index) => (
                                    <div
                                        key={index}
                                        ref={el => industryTagsRef.current[index] = el}
                                        className="px-8 py-5 bg-white text-slate-900 rounded-2xl font-semibold transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1 cursor-default"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div ref={roiBoxRef} className="mt-16 bg-white/5 p-10 rounded-[40px] border border-white/10 shadow-2xl">
                                <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight text-center">ROI of Ecommerce CRO</h2>
                                <div className="space-y-6">
                                    {roiPoints.map((item, index) => (
                                        <div
                                            key={index}
                                            ref={el => roiPointsRef.current[index] = el}
                                            className="flex items-center gap-5 group"
                                        >
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform">
                                                ✔
                                            </div>
                                            <span className="font-semibold text-lg text-white opacity-90 group-hover:opacity-100 transition-opacity tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Process & Tools */}
                        <div className="flex flex-col gap-12">
                            <div ref={timelineBoxRef} className="bg-white/5 p-10 rounded-[40px] border border-white/10 shadow-2xl">
                                <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Our Process Timeline</h2>
                                <div className="space-y-8">
                                    {timeline.map((item, index) => (
                                        <div
                                            key={index}
                                            ref={el => timelineItemsRef.current[index] = el}
                                            className="flex gap-6 items-start group"
                                        >
                                            <div className="text-blue-400 font-semibold text-lg py-2 min-w-[120px] uppercase tracking-wider">{item.period}</div>
                                            <div className="flex-1 border-l-2 border-white/10 pl-6 py-2 group-hover:border-blue-500 transition-colors">
                                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white opacity-95 group-hover:text-white transition-colors tracking-tight leading-tight">
                                                    {item.task}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div ref={toolsBoxRef} className="bg-white/5 p-10 rounded-[42px] border border-white/10 shadow-2xl">
                                <h2 className="text-[36px] font-bold mb-10 text-white tracking-tight">Tools & Technologies We Leverage</h2>
                                <div className="flex flex-wrap gap-3">
                                    {tools.map((tool, index) => (
                                        <span key={index} className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-sm font-semibold text-blue-200 group hover:bg-blue-600 hover:text-white transition-all cursor-default">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-8 text-blue-400 font-medium italic text-sm opacity-80">Our tech-agnostic approach ensures compatibility with your ecommerce stack.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section ref={faqBoxRef} className="py-24 bg-slate-50 text-center">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4 leading-tight tracking-tight px-1">Frequently Asked Questions</h2>
                        <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="max-w-[800px] mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-200 transition-colors shadow-sm bg-white text-left">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className={`w-full p-8 text-left flex justify-between items-center transition-all duration-300 ${openFaq === index ? 'bg-slate-50' : 'bg-white'}`}
                                >
                                    <span className="text-xl font-bold text-slate-900 tracking-tight pr-8 leading-tight">{faq.q}</span>
                                    {openFaq === index ? <ChevronUp className="text-blue-600 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                                </button>
                                {openFaq === index && (
                                    <div className="p-8 pt-0 bg-slate-50 text-lg text-slate-600 leading-relaxed font-medium">
                                        <div className="w-full h-px bg-slate-200 mb-8 opacity-50"></div>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section ref={ctaRef} className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-[36px] font-bold mb-10 leading-tight text-white tracking-tight px-1">Ready to Turn Clicks Into Customers?</h2>
                    <div className="space-y-12">
                        <div className="text-2xl font-bold opacity-90 max-w-3xl text-white mx-auto leading-relaxed">
                            <p className="text-[20px] mb-6 text-white font-medium">
                                Stop leaking revenue. Start optimizing every interaction.
                            </p>
                        </div>
                        <p className="text-[18px] mb-6 text-xl text-white font-medium opacity-90 max-w-3xl mx-auto italic">
                            Adkryoss managed by <span className="font-bold underline decoration-blue-300">Clink Consultancy Services Private Limited</span> helps ecommerce brands build conversion-driven ecosystems that scale sustainably.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <p className="text-[24px] mb-6 font-medium text-white italic tracking-tighter leading-tight">
                                Let’s transform your store into a high-converting revenue engine.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#0066CC] py-6 px-16 rounded-[25px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-105 active:scale-95 group tracking-tight">
                                Transform My Store
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EcommerceCRO;
