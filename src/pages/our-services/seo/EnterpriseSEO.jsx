import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Globe,
    Search,
    Zap,
    Target,
    BarChart3,
    Shield,
    ArrowRight,
    Cpu,
    Database,
    Network,
    CheckCircle2,
    Users,
    FileText,
    Settings,
    Layout,
    TrendingUp,
    LineChart,
    PieChart,
    Workflow,
    Layers,
    ShoppingCart,
    GraduationCap,
    Home,
    Heart,
    DollarSign,
    Briefcase
} from 'lucide-react';
import enterpriseseo from '../../../assets/SEO/enterprisehero.png';

gsap.registerPlugin(ScrollTrigger);

const EnterpriseSEO = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whySectionRef = useRef(null);
    const whyItemsRef = useRef([]);
    const whyCardRef = useRef(null);
    const frameworkCardsRef = useRef([]);
    const solutionsRef = useRef(null);
    const solutionItemsRef = useRef([]);
    const diffCardsRef = useRef([]);
    const modelStepsRef = useRef([]);
    const industryCardsRef = useRef([]);
    const resultsRef = useRef(null);
    const resultsItemsRef = useRef([]);
    const resultsGraphicRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Structural Build
            gsap.fromTo(heroContentRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: heroContentRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
            gsap.fromTo(heroImageRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: heroImageRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Why Section - Grid Stagger
            gsap.fromTo(whySectionRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: whySectionRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
            whyItemsRef.current.forEach((item, i) => {
                gsap.fromTo(item,
                    { x: -20, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
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
            gsap.fromTo(whyCardRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: whyCardRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Framework - Building Blocks
            frameworkCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Solutions - Flowing Stagger
            gsap.fromTo(solutionsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: solutionsRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
            solutionItemsRef.current.forEach((item, i) => {
                gsap.fromTo(item,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
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

            // Differentiators - Precision Reveals
            diffCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { scale: 0.95, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.7,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Working Model - Sequential
            modelStepsRef.current.forEach((step, i) => {
                gsap.fromTo(step,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: step,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Industries - Grid Fade
            industryCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: i * 0.05,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Results - Data Reveal
            gsap.fromTo(resultsRef.current,
                { x: -40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: resultsRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
            resultsItemsRef.current.forEach((item, i) => {
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
            gsap.fromTo(resultsGraphicRef.current,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: resultsGraphicRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // CTA
            gsap.fromTo(ctaRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Hero Image Animation (Matrix style float)
            gsap.to(heroImageRef.current, {
                y: -10,
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
            y: isEnter ? -10 : 0,
            backgroundColor: isEnter ? "#f8fafc" : "white",
            borderColor: isEnter ? "#0066CC" : "#e2e8f0",
            shadow: isEnter ? "0 20px 40px rgba(0,102,204,0.1)" : "none",
            duration: 0.3
        });
        const icon = e.currentTarget.querySelector('.card-icon');
        if (icon) {
            gsap.to(icon, {
                scale: isEnter ? 1.1 : 1,
                rotationY: isEnter ? 180 : 0,
                duration: 0.6
            });
        }
    };

    const handleDarkHover = (e, isEnter) => {
        gsap.to(e.currentTarget, {
            backgroundColor: isEnter ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
            borderColor: isEnter ? "#3b82f6" : "rgba(255,255,255,0.1)",
            duration: 0.3
        });
    };

    const enterpriseFramework = [
        {
            title: "1. Enterprise SEO Audit",
            icon: <Search size={32} />,
            desc: "We conduct a 360° audit covering technical health, content gaps, and competitor intelligence at scale.",
            points: [
                "Technical SEO architecture",
                "Crawl efficiency & indexability",
                "Log file analysis",
                "Core Web Vitals & experience",
                "Content gaps & keyword clusters",
                "Competitor intelligence mapping"
            ],
            extra: "Identifies scalable growth opportunities across the entire domain ecosystem."
        },
        {
            title: "2. Scalable Technical SEO",
            icon: <Settings size={32} />,
            desc: "Enterprise success starts with technical dominance. We optimize structure for discovery.",
            points: [
                "Site architecture & internal linking",
                "Schema & structured data at scale",
                "Dynamic rendering & JavaScript SEO",
                "Crawl budget optimization",
                "Canonicalization & duplication control",
                "International SEO (Hreflang & localization)"
            ],
            extra: "Designed for large CMS platforms like Magento, Shopify Plus, and custom frameworks."
        },
        {
            title: "3. AI-Powered Content Strategy",
            icon: <Cpu size={32} />,
            desc: "We build intent-driven optimization models aligned with every stage of the buyer journey.",
            points: [
                "Topic clusters & semantic models",
                "Category-level optimization blueprints",
                "Product page scale optimization",
                "AI-assisted content expansion",
                "Automated meta & schema optimization",
                "Authority-building content hubs"
            ],
            extra: "Focus on revenue-driven content that scales across thousands of keywords."
        }
    ];

    const additionalFramework = [
        {
            title: "4. Content Governance",
            icon: <Layout size={32} />,
            desc: "Consistency is key in enterprise SEO. We implement frameworks to maintain quality across teams.",
            points: [
                "SEO content guidelines for internal teams",
                "Editorial workflow alignment",
                "Brand-safe optimization frameworks",
                "Conversion-optimized landing pages",
                "Structured internal linking automation"
            ]
        },
        {
            title: "5. Enterprise Link Authority",
            icon: <Network size={32} />,
            desc: "We build authority through digital PR and strategic outreach targeting high-trust domains.",
            points: [
                "Digital PR campaigns",
                "Data-driven content assets",
                "High-authority placements",
                "Industry-specific outreach",
                "Brand reputation management"
            ]
        },
        {
            title: "6. Performance Intelligence",
            icon: <BarChart3 size={32} />,
            desc: "Real-time data for decision making. We connect SEO performance directly to revenue and ROI.",
            points: [
                "Custom SEO dashboards",
                "Predictive growth modeling",
                "Revenue attribution tracking",
                "Keyword share-of-voice reports",
                "Competitor visibility benchmarking"
            ]
        }
    ];

    const solutionsOffered = [
        "Ecommerce Enterprise SEO", "International & Multi-Location SEO", "SaaS & Technology SEO",
        "BFSI & Finance SEO", "Healthcare & Compliance SEO", "Marketplace SEO Optimization",
        "B2B Enterprise SEO"
    ];

    const workingModel = [
        { step: "01", title: "Discovery", desc: "Alignment with business KPIs and stakeholders." },
        { step: "02", title: "Foundations", desc: "Technical architecture setup and audits." },
        { step: "03", title: "Expansion", desc: "Content and authority building at scale." },
        { step: "04", title: "Automation", desc: "Process integration and workflow AI." },
        { step: "05", title: "Growth", desc: "Continuous optimization and performance tracking." }
    ];

    return (
        <div ref={pageRef} style={{ backgroundColor: '#fff' }} className="overflow-hidden">
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
                            Enterprise SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            SEO for the Complex. Scalability for the Ambitious.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            Enterprise SEO turns complex websites into scalable growth engines. We build data-driven strategies that help enterprises win visibility across thousands of keywords, markets, and product categories.
                        </p>
                        <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we blend technical expertise, automation, and AI-led insights to drive measurable revenue growth.
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
                    <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={enterpriseseo}
                                alt="Entrprise SEO Services"
                                className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
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

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div ref={heroContentRef} className="text-left max-w-[600px]">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Enterprise SEO Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        SEO for the Complex. Scalability for the Ambitious.
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed mb-6">
        Enterprise SEO turns complex websites into scalable growth engines.
        We build data-driven strategies that help enterprises win visibility
        across thousands of keywords, markets, and product categories.
        <br /><br />
        At Adkryoss managed by <span className="font-semibold text-white">
        Clink Consultancy Services Private Limited</span>, we blend technical
        expertise, automation, and AI-led insights to drive measurable revenue growth.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          to="/contact"
          className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
        >
          Speak to Our Expert →
        </Link>

        <Link
          to="#services"
          className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:bg-blue-400 hover:-translate-y-1 hover:shadow-xl text-center"
        >
          Our Services →
        </Link>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">

      <div ref={heroImageRef} className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={enterpriseseo}
          alt="Enterprise SEO Services"
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

            {/* Why Enterprise Section */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]" ref={whySectionRef}>
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">
                            Why Enterprise SEO Demands a Different Approach
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 max-w-[850px] mx-auto font-medium">
                            Large organizations face challenges that traditional SEO agencies simply cannot handle. We approach enterprise SEO as a business transformation initiative.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {[
                                "Massive website architecture & thousands of indexed pages",
                                "Multiple stakeholders and approval layers",
                                "Legacy CMS limitations & technical constraints",
                                "International & multi-location targeting strategy",
                                "Frequent algorithm volatility & search shifts",
                                "Brand reputation & compliance sensitivity"
                            ].map((item, i) => (
                                <div key={i} ref={el => whyItemsRef.current[i] = el} className="flex gap-[15px] items-center bg-[#f8f9fa] p-[20px] rounded-[12px] border border-[#eee] transition-all hover:border-[#0066cc]">
                                    <div className="bg-[#0066cc] text-white p-1 rounded-full">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-[16px] font-medium text-[#1a1a1a]">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div ref={whyCardRef} className="bg-[#0f172a] text-white p-[50px] rounded-[40px] relative overflow-hidden group">
                            <div className="relative z-10 transition-transform group-hover:translate-x-2">
                                <TrendingUp size={48} className="text-blue-500 mb-6" />
                                <h3 className="text-[28px] font-semibold mb-[24px]">Strategic Integration</h3>
                                <p className="text-[16px] md:text-[18px] mb-6 opacity-80 leading-[1.8] text-white font-medium">
                                    We don't just optimize for bots. We integrate SEO with your technology, content, analytics, and CRO teams to build a sustainable visibility engine that drives business value.
                                </p>
                            </div>
                            <div className="absolute -bottom-[20px] -right-[20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <Globe size={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-[100px] bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">
                            Our Enterprise SEO Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Structured for performance, built for scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {enterpriseFramework.map((item, i) => (
                            <div key={i}
                                ref={el => frameworkCardsRef.current[i] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="bg-white p-[40px] rounded-[24px] border border-[#e2e8f0] transition-all duration-300 cursor-pointer">
                                <div className="text-[#0066cc] mb-[20px] card-icon">{item.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-[15px] text-[#1a1a1a]">{item.title}</h3>
                                <p className="text-[#666] mb-[20px] leading-[1.6] font-medium">{item.desc}</p>
                                <ul className="list-none p-0 mt-[20px]">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-[8px] mb-[10px] text-[#444] text-[15px]">
                                            <div className="text-[#0066cc] mt-[4px]"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[14px] font-medium text-[#0066cc] mt-[20px]">{item.extra}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {additionalFramework.map((item, i) => (
                            <div key={i}
                                ref={el => frameworkCardsRef.current[i + 3] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="bg-white p-[40px] rounded-[24px] border border-[#e2e8f0] transition-all duration-300 cursor-pointer">
                                <div className="text-[#0066cc] mb-[20px] card-icon">{item.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-[15px] text-[#1a1a1a]">{item.title}</h3>
                                <p className="text-[#666] mb-[20px] leading-[1.6] font-medium">{item.desc}</p>
                                <ul className="list-none p-0">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-[8px] mb-[10px] text-[#444] text-[15px]">
                                            <div className="text-[#0066cc] mt-[4px]"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section id="services" className="py-[100px] bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]" ref={solutionsRef}>
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">Enterprise SEO Solutions We Offer</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Tailored strategies for your industry dynamics and growth stage.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[16px]">
                        {solutionsOffered.map((sol, i) => (
                            <div key={i} ref={el => solutionItemsRef.current[i] = el} className="py-[20px] px-[40px] bg-[#f8f9fa] rounded-[50px] border border-[#eee] text-[18px] font-semibold text-[#1a1a1a] transition-all duration-300 cursor-pointer hover:bg-[#0066cc] hover:text-white hover:border-[#0066cc]">
                                {sol}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-[100px] bg-[#0f172a] text-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-white">What Makes Our Enterprise SEO Different?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { t: "Strategic Depth", d: "We align SEO with your business KPIs and long-term revenue goals.", i: <Target size={32} /> },
                            { t: "Technology-Led", d: "Automation & AI frameworks reduce inefficiencies in large site management.", i: <Cpu size={32} /> },
                            { t: "Cross-Functional", d: "We work alongside your internal marketing, tech, and leadership teams.", i: <Users size={32} /> },
                            { t: "Scalable Systems", d: "Our processes are built for 10,000+ pages and complex CMS environments.", i: <Layers size={32} /> },
                            { t: "Transparent Intelligence", d: "Clear, business-driven metrics and predictive growth modeling.", i: <BarChart3 size={32} /> },
                            { t: "Regulatory Alignment", d: "We ensure compliance with healthcare, finance, or brand standards.", i: <Shield size={32} /> }
                        ].map((item, i) => (
                            <div key={i}
                                ref={el => diffCardsRef.current[i] = el}
                                onMouseEnter={(e) => handleDarkHover(e, true)}
                                onMouseLeave={(e) => handleDarkHover(e, false)}
                                className="p-[40px] bg-[rgba(255,255,255,0.05)] rounded-[24px] border border-[rgba(255,255,255,0.1)] transition-all duration-300 cursor-default">
                                <div className="text-blue-500 mb-6">{item.i}</div>
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white">
                                    {item.t}
                                </h3>
                                <p className="text-[#e2e8f0] leading-[1.7] font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Model */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">Our Working Model</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Operating as an extended enterprise growth partner.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-[24px]">
                        {workingModel.map((item, i) => (
                            <div key={i} ref={el => modelStepsRef.current[i] = el} className="bg-[#f8f9fa] p-[30px] rounded-[24px] text-center border border-[#eee] transition-transform hover:-translate-y-2">
                                <div className="text-[32px] font-bold text-[rgba(0,102,204,0.1)] mb-[10px]">{item.step}</div>
                                <h4 className="text-[20px] font-semibold text-[#1a1a1a] mb-[10px]">{item.title}</h4>
                                <p className="text-[14px] text-[#666] leading-[1.6] font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-[100px] bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[20px]">Industries We Empower</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
                        {[
                            { name: "Ecommerce & Retail", icon: <ShoppingCart size={20} /> },
                            { name: "EdTech & Education", icon: <GraduationCap size={20} /> },
                            { name: "Real Estate", icon: <Home size={20} /> },
                            { name: "Healthcare", icon: <Heart size={20} /> },
                            { name: "BFSI", icon: <DollarSign size={20} /> },
                            { name: "Technology & SaaS", icon: <Cpu size={20} /> },
                            { name: "Corporate Enterprises", icon: <Briefcase size={20} /> },
                            { name: "Global Marketplaces", icon: <Globe size={20} /> }
                        ].map((item, i) => (
                            <div key={i} ref={el => industryCardsRef.current[i] = el} className="bg-white p-[24px_20px] rounded-[20px] text-center shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all duration-300 border border-[#f1f5f9] hover:-translate-y-[5px] hover:border-[#0066cc] hover:shadow-[0_15px_30px_rgba(0,102,204,0.1)]">
                                <div className="text-[#0066cc] mb-[15px] flex justify-center">{item.icon}</div>
                                <div className="font-semibold text-[#1e293b] text-[15px]">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div ref={resultsRef}>
                            <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-[30px]">Results You Can Expect</h2>
                            <div className="space-y-6">
                                {[
                                    "Increased organic visibility across thousands of high-value keywords",
                                    "Improved crawl efficiency & performance for complex domains",
                                    "Higher domain authority & trust across search ecosystems",
                                    "Scalable traffic growth that compounds quarter-over-quarter",
                                    "Stronger conversion rates through category-level optimization",
                                    "Long-term search dominance in your industry segment"
                                ].map((res, i) => (
                                    <div key={i} ref={el => resultsItemsRef.current[i] = el} className="flex gap-[15px] items-start">
                                        <div className="bg-[#e0f2fe] text-[#0369a1] p-1 rounded-[5px] mt-[4px]">
                                            <TrendingUp size={18} />
                                        </div>
                                        <p className="text-[17px] text-[#334155] font-medium m-0">{res}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={resultsGraphicRef} className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-[60px] rounded-[40px] text-white text-center group">
                            <PieChart size={64} className="text-blue-500 mb-8 mx-auto transition-transform group-hover:scale-110 duration-500" />
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white">
                                Dominance at Scale
                            </h3>
                            <p className="text-[16px] md:text-[18px] mb-6 opacity-80 leading-[1.8] text-white font-medium">
                                Enterprise SEO is not a campaign — it’s a competitive advantage that builds a wide moat around your digital presence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-[80px] bg-gradient-to-br from-[#0066cc] to-[#004999] text-white text-center">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-[20px] text-white">Ready to Lead Your Industry in Search?</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-90 text-white font-medium">
                        Partner with Adkryoss managed by Clink Consultancy Services Private Limited to build a scalable search growth engine.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-[10px] bg-white text-[#0066cc] py-[18px] px-[40px] rounded-[50px] font-semibold no-underline transition-all duration-300 hover:scale-[1.05] hover:shadow-xl">
                        Build Your Enterprise Dominance <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EnterpriseSEO;

