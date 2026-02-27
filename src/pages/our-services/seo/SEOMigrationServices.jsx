import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Shield,
    Zap,
    ArrowRight,
    Search,
    Layout,
    Link2,
    Settings,
    Rocket,
    BarChart3,
    RefreshCcw,
    Globe,
    Server,
    Smartphone,
    ShoppingCart,
    Building2,
    CheckCircle2,
    AlertTriangle,
    Activity,
    Users
} from 'lucide-react';
import seomigrationservices from '../../../assets/SEO/seomigrationhero.jpeg';

gsap.registerPlugin(ScrollTrigger);

const SEOMigrationServices = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const riskRef = useRef(null);
    const riskCardsRef = useRef([]);
    const frameworkRef = useRef(null);
    const frameworkCardsRef = useRef([]);
    const typesRef = useRef(null);
    const typesCardsRef = useRef([]);
    const diffRef = useRef(null);
    const diffCardsRef = useRef([]);
    const metricsRef = useRef(null);
    const metricsCardsRef = useRef([]);
    const considerRef = useRef(null);
    const approachRef = useRef(null);
    const approachStepsRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Shield surge
            gsap.fromTo(heroContentRef.current,
                { x: -100, opacity: 0 },
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
                { x: 100, opacity: 0, scale: 0.8 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: heroImageRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Risks - Alert pulse
            riskCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { scale: 0.9, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Framework - Defensive shield reveals
            frameworkCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.15,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Migration Types - Smooth transition
            typesCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { x: -30, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Differentiators - Glass reveal
            diffCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        delay: i * 0.2,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Metrics - Flowing lines
            metricsCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Approach - Connected path
            approachStepsRef.current.forEach((step, i) => {
                gsap.fromTo(step,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.2,
                        scrollTrigger: {
                            trigger: step,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // CTA
            gsap.fromTo(ctaRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Floating animation for hero image
            gsap.to(heroImageRef.current, {
                y: -15,
                duration: 4,
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
            scale: isEnter ? 1.02 : 1,
            backgroundColor: isEnter ? "#f0f9ff" : "white",
            borderColor: isEnter ? "#0066CC" : "#e2e8f0",
            duration: 0.3
        });
        const icon = e.currentTarget.querySelector('.card-icon');
        if (icon) {
            gsap.to(icon, {
                scale: isEnter ? 1.2 : 1,
                rotate: isEnter ? 360 : 0,
                duration: 0.5
            });
        }
    };

    const migrationSteps = [
        {
            icon: <Search size={32} />,
            title: "Pre-Migration SEO Audit & Strategy Blueprint",
            points: [
                "Complete URL inventory & performance mapping",
                "Backlink analysis & equity preservation strategy",
                "Traffic & keyword benchmarking",
                "Crawl diagnostics & technical health audit",
                "Risk assessment & migration roadmap"
            ]
        },
        {
            icon: <Layout size={32} />,
            title: "SEO-Safe Architecture Planning",
            points: [
                "URL restructuring strategy",
                "Internal linking preservation",
                "Canonical mapping",
                "XML sitemap planning",
                "Robots.txt validation",
                "Structured data planning"
            ]
        },
        {
            icon: <Link2 size={32} />,
            title: "Redirect Mapping & Equity Transfer",
            points: [
                "Preserve link authority",
                "Prevent traffic leakage",
                "Maintain keyword rankings",
                "Eliminate redirect chains",
                "Protect high-performing pages"
            ]
        },
        {
            icon: <Settings size={32} />,
            title: "Technical SEO Implementation",
            points: [
                "Page speed & Core Web Vitals",
                "Mobile-first indexing readiness",
                "HTTPS configuration",
                "JavaScript SEO validation",
                "Server log analysis",
                "Schema & structured data migration"
            ]
        },
        {
            icon: <Rocket size={32} />,
            title: "Controlled Launch & Live Monitoring",
            points: [
                "Indexation behavior",
                "Crawl errors",
                "Redirect validations",
                "Keyword movement",
                "Traffic fluctuations"
            ]
        },
        {
            icon: <Activity size={32} />,
            title: "Post-Migration Performance Stabilization",
            points: [
                "Keyword recovery tracking",
                "Authority rebuilding strategy",
                "Technical refinement",
                "Conversion optimization alignment",
                "Ongoing SEO enhancements"
            ]
        }
    ];

    const migrationTypes = [
        { icon: <Layout size={24} />, name: "Website Redesign Migration" },
        { icon: <Globe size={24} />, name: "Domain Change Migration" },
        { icon: <Shield size={24} />, name: "HTTP to HTTPS Migration" },
        { icon: <Settings size={24} />, name: "CMS Migration (WordPress, Shopify, etc.)" },
        { icon: <Server size={24} />, name: "Server Migration" },
        { icon: <Globe size={24} />, name: "International / Multi-Language Migration" },
        { icon: <ShoppingCart size={24} />, name: "E-commerce SEO Migration" },
        { icon: <Building2 size={24} />, name: "Enterprise-Level Platform Migration" }
    ];

    const differentiators = [
        {
            title: "Performance-Led Execution",
            description: "Every decision is backed by search data, not assumptions."
        },
        {
            title: "Cross-Functional Expertise",
            description: "SEO strategists + technical developers + analytics experts work together."
        },
        {
            title: "Zero-Drop Philosophy",
            description: "Our mission: maintain or improve traffic within 90 days post-migration."
        },
        {
            title: "Enterprise-Grade Tools",
            description: "Advanced crawling tools and log analyzers for accuracy."
        }
    ];

    return (
        <div ref={pageRef} className="bg-white overflow-hidden">
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
                            SEO Migration Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Safeguard Rankings. Preserve Traffic. Accelerate Growth.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            When websites evolve, rankings shouldn't collapse. Redesigns, domain changes, platform shifts, or international expansion — every structural change impacts visibility.
                        </p>
                        <div className="p-0 mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we deliver a zero-drop migration framework to protect your organic authority during transition.
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
                                src={seomigrationservices}
                                alt="SEO Migration Services"
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

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div ref={heroContentRef} className="text-left max-w-[600px]">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          SEO Migration Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Safeguard Rankings. Preserve Traffic. Accelerate Growth.
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed mb-4">
        When websites evolve, rankings shouldn't collapse.
        Redesigns, domain changes, platform shifts, or international expansion —
        every structural change impacts visibility.
      </p>

      <p className="text-lg leading-relaxed text-white font-medium mb-6">
        At Adkryoss managed by{" "}
        <span className="font-bold text-white">
          Clink Consultancy Services Private Limited
        </span>, we deliver a zero-drop migration framework
        to protect your organic authority during transition.
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

      <div ref={heroImageRef}
      className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={seomigrationservices}
          alt="SEO Migration Services"
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

            {/* Risk Section */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-10 text-slate-900">
                        Why SEO Migration Is High-Risk Without Strategy
                    </h2>
                    <div className="flex flex-wrap justify-center gap-5 mb-10">
                        {[
                            "Broken redirects & crawl errors",
                            "Loss of backlink equity",
                            "Indexation issues",
                            "Keyword cannibalization",
                            "Drop in domain authority",
                            "Traffic and revenue decline"
                        ].map((risk, i) => (
                            <div key={i} ref={el => riskCardsRef.current[i] = el} className="p-6 bg-red-50 rounded-xl border-l-[5px] border-l-red-400 flex items-center gap-[15px] w-[calc(33.333%-14px)] min-w-[280px] grow max-w-[380px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-400/10">
                                <AlertTriangle size={20} className="text-red-400" />
                                <span className="font-bold text-red-700">{risk}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                        We don't just "move" your website. We engineer a seamless search transition.
                    </p>
                </div>
            </section>

            {/* Framework Section */}
            <section id="services" ref={frameworkRef} className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-slate-900">
                        Our SEO Migration Framework
                    </h2>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {migrationSteps.map((step, index) => (
                            <div
                                key={index}
                                ref={el => frameworkCardsRef.current[index] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="bg-white p-10 rounded-[20px] shadow-sm border border-slate-100 w-[calc(33.333%-20px)] min-w-[320px] grow max-w-[400px] transition-all duration-300 group cursor-pointer"
                            >
                                <div className="text-[#0066cc] mb-5 card-icon">{step.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-5 text-slate-900">
                                    {index + 1}. {step.title}
                                </h3>
                                <ul className="list-none p-0 space-y-4">
                                    {step.points.map((pt, i) => (
                                        <li key={i} className="flex gap-2.5 text-[15px] text-slate-600 leading-relaxed">
                                            <CheckCircle2 size={18} className="text-[#0066cc] shrink-0 mt-1" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Types */}
            <section className="py-20 bg-white" ref={typesRef}>
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[50px] text-slate-900">
                        Types of SEO Migration We Handle
                    </h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {migrationTypes.map((type, i) => (
                            <div key={i} ref={el => typesCardsRef.current[i] = el} className="p-6 bg-slate-50 rounded-xl flex items-center gap-4 transition-all duration-300 w-[calc(25%-15px)] min-w-[250px] grow max-w-[300px] border border-transparent hover:bg-white hover:border-[#0066cc] hover:scale-105 hover:shadow-xl hover:shadow-blue-900/5 group">
                                <div className="text-[#0066cc] group-hover:scale-110 transition-transform">{type.icon}</div>
                                <span className="font-bold text-slate-900">{type.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Different Section */}
            <section className="py-20 bg-[#0066cc] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-white">
                        What Makes Us Different?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {differentiators.map((diff, i) => (
                            <div key={i} ref={el => diffCardsRef.current[i] = el} className="p-8 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-lg w-[calc(25%-23px)] min-w-[260px] grow max-w-[350px] transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white">
                                    {diff.title}
                                </h3>
                                <p className="text-[16px] md:text-[18px] mb-6 text-white/90 leading-relaxed font-medium">
                                    {diff.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Success Metrics */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-4 text-slate-900">
                        Our Migration Success Metrics
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-center text-slate-600 font-medium mb-[50px] max-w-[700px] mx-auto">
                        We measure impact across:
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        {[
                            { label: "Organic Traffic Retention Rate", icon: <BarChart3 size={24} /> },
                            { label: "Keyword Ranking Stability", icon: <Activity size={24} /> },
                            { label: "Domain Authority Preservation", icon: <Shield size={24} /> },
                            { label: "Crawl Efficiency", icon: <Zap size={24} /> },
                            { label: "Conversion Performance", icon: <Users size={24} /> },
                        ].map((metric, i) => (
                            <div key={i} ref={el => metricsCardsRef.current[i] = el} className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm min-w-[260px] grow max-w-[320px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0066cc] hover:shadow-[0_10px_30px_rgba(0,102,204,0.1)]">
                                <div className="text-[#0066cc] shrink-0">{metric.icon}</div>
                                <span className="font-semibold text-slate-800">{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to Consider SEO Migration */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-6 text-slate-900">
                                When Should You Consider SEO Migration Services?
                            </h2>
                            <p className="text-[16px] md:text-[18px] font-medium text-slate-600 mb-8">
                                If structural changes are involved, SEO migration is non-negotiable.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Planning a website redesign",
                                    "Moving to a new CMS",
                                    "Changing domain name",
                                    "Expanding internationally",
                                    "Shifting hosting/server",
                                    "Experiencing unexplained ranking drops after launch",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 transition-transform hover:translate-x-2">
                                        <CheckCircle2 size={20} className="text-[#0066cc] shrink-0 mt-1" />
                                        <span className="text-[16px] text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#0066cc] text-white p-10 rounded-2xl shadow-2xl hover:shadow-blue-400/20 transition-shadow duration-500">
                            <AlertTriangle size={40} className="text-yellow-300 mb-5 animate-pulse" />
                            <h3 className="text-[24px] font-bold mb-4">Don't Risk It</h3>
                            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-medium">
                                Even a well-designed website can lose 30–60% of organic traffic after migration without a structured SEO strategy. Protect your investment with a proven migration framework.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working Approach */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-4 text-slate-900">
                        Our Working Approach
                    </h2>
                    <div className="flex flex-wrap justify-center gap-0 mt-[50px]">
                        {[
                            { step: "Discovery", desc: "Audit, benchmarking & risk assessment" },
                            { step: "Strategy", desc: "Roadmap, URL mapping & architecture planning" },
                            { step: "Execution", desc: "Technical implementation & redirect setup" },
                            { step: "Monitoring", desc: "Live tracking of crawl, index & rankings" },
                            { step: "Optimization", desc: "Refinement, recovery & authority rebuilding" },
                        ].map((item, i, arr) => (
                            <div key={i} ref={el => approachStepsRef.current[i] = el} className="flex items-center">
                                <div className="flex flex-col items-center text-center p-6 w-[170px]">
                                    <div className="w-14 h-14 rounded-full bg-[#0066cc] text-white flex items-center justify-center font-bold text-lg mb-3 shrink-0 shadow-lg">
                                        {i + 1}
                                    </div>
                                    <span className="font-bold text-slate-900 text-[15px]">{item.step}</span>
                                    <p className="text-[13px] text-slate-500 mt-1 font-medium">{item.desc}</p>
                                </div>
                                {i < arr.length - 1 && (
                                    <ArrowRight size={20} className="text-[#0066cc] mx-[-10px] shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[900px] mx-auto">
                        {[
                            "Transparent timelines",
                            "Structured documentation",
                            "Dedicated SEO migration specialist",
                            "Clear reporting dashboard",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-[#0066cc] hover:shadow-md transition-all">
                                <CheckCircle2 size={18} className="text-[#0066cc] shrink-0" />
                                <span className="text-[14px] font-semibold text-slate-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future-Ready Migration Strategy */}
            <section className="py-20 bg-[#0f172a] text-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-[36px] font-bold mb-6 text-white">
                                Future-Ready Migration Strategy
                            </h2>
                            <p className="text-[16px] md:text-[18px] text-white/80 font-medium mb-6 leading-relaxed">
                                Search algorithms evolve constantly. Migration is no longer just preservation —{" "}
                                <span className="text-white font-semibold">it's strategic SEO modernization.</span>
                            </p>
                            <p className="text-[16px] text-white/70 font-medium">
                                We integrate the latest advancements to ensure your migrated site is built for tomorrow's search landscape.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[18px] font-semibold text-[#60a5fa] mb-4">We Integrate:</p>
                            {[
                                { label: "AI-driven keyword clustering", icon: <Zap size={18} /> },
                                { label: "Search intent restructuring", icon: <Search size={18} /> },
                                { label: "Semantic content alignment", icon: <RefreshCcw size={18} /> },
                                { label: "Entity-based optimization", icon: <Globe size={18} /> },
                                { label: "Core Web Vitals performance engineering", icon: <Rocket size={18} /> },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#60a5fa] cursor-default">
                                    <div className="text-[#60a5fa] shrink-0">{item.icon}</div>
                                    <span className="font-medium text-white/90">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-24 text-center bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-6 text-slate-900 leading-tight">
                        Let's Migrate Without Losing Momentum
                    </h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 max-w-[800px] mx-auto leading-relaxed font-medium">
                        Your website growth shouldn't reset to zero. Partner with Adkryoss and transform your migration into a scalable search growth opportunity.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-[#0066cc] text-white py-5 px-12 rounded-full text-[18px] font-bold no-underline transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,102,204,0.3)] hover:scale-[1.02]">
                        Start Your Migration Safely
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SEOMigrationServices;

