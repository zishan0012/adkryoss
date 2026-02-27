import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import localseohero from "../../../assets/SEO/localseohero.png";
import {
    MapPin,
    Search,
    Store,
    Smartphone,
    CheckCircle2,
    ArrowRight,
    Star,
    Shield,
    Globe,
    Zap,
    Users,
    Activity,
    FileText,
    Settings,
    Layers,
    Binary,
    MessageCircle,
    Navigation,
    Home,
    Heart,
    GraduationCap,
    Utensils,
    Scale,
    ShoppingBag,
    Building2,
    HelpCircle,
    ChevronDown,
    ChevronUp,
    BarChart3,
    Microscope,
    Lightbulb,
    HomeIcon
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LocalSEO = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const mattersRef = useRef(null);
    const matterPointsRef = useRef([]);
    const industryCardsRef = useRef([]);
    const approachCardsRef = useRef([]);
    const processStepsRef = useRef([]);
    const diffCardsRef = useRef([]);
    const faqRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Radial Expand
            gsap.fromTo(heroContentRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heroContentRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
            gsap.fromTo(heroImageRef.current,
                { scale: 0.5, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "expo.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: heroImageRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Why Matters - Ripple Reveal
            gsap.fromTo(mattersRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: mattersRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
            matterPointsRef.current.forEach((point, i) => {
                gsap.fromTo(point,
                    { x: -30, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: point,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Industries - Circular Entrance
            industryCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        delay: i * 0.05,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Approach - Orbiting reveal
            approachCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Process - Step by step
            processStepsRef.current.forEach((step, i) => {
                gsap.fromTo(step,
                    { scale: 0.9, opacity: 0 },
                    {
                        scale: 1,
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

            // Differentiators - Pop out
            diffCardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
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

            // FAQ
            gsap.fromTo(faqRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: faqRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // CTA
            gsap.fromTo(ctaRef.current,
                { scale: 0.95, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Image Float (Orbit style)
            gsap.to(heroImageRef.current, {
                y: -10,
                x: 5,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const toggleFaq = (i) => {
        setOpenFaq(openFaq === i ? null : i);
    };

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
                rotation: isEnter ? 360 : 0,
                duration: 0.6,
                ease: "back.out"
            });
        }
    };

    const handleDarkHover = (e, isEnter) => {
        gsap.to(e.currentTarget, {
            backgroundColor: isEnter ? "#1e293b" : "rgba(255,255,255,0.05)",
            y: isEnter ? -5 : 0,
            duration: 0.3
        });
    };

    const approach = [
        {
            title: "1. Local & Competitor Intel",
            icon: <Search size={32} />,
            desc: "Identifying exactly where your local competitors are winning.",
            points: [
                "Geo-targeted keyword research",
                "Hyperlocal search intent mapping",
                "Local competitor gap analysis",
                "Map performance benchmarking"
            ]
        },
        {
            title: "2. Profile Optimization (GMB)",
            icon: <Store size={32} />,
            desc: "Optimizing your digital storefront for maximum conversion.",
            points: [
                "Category & service optimization",
                "NAP consistency across web",
                "Geo-tagged image management",
                "Review strategy & response"
            ]
        },
        {
            title: "3. Local Landing Pages",
            icon: <Layers size={32} />,
            desc: "Dedicated location pages built for search and users.",
            points: [
                "City-specific keyword integration",
                "Local schema implementation",
                "Conversion-focused local content",
                "Internal linking for geo-authority"
            ]
        },
        {
            title: "4. Citation Management",
            icon: <FileText size={32} />,
            desc: "Strengthening trust signals through consistent listings.",
            points: [
                "Local business directory listings",
                "High-authority niche citations",
                "NAP correction & duplicate removal",
                "Data aggregator updates"
            ]
        },
        {
            title: "5. Review & Reputation",
            icon: <Star size={32} />,
            desc: "Building the credibility that drives local rankings.",
            points: [
                "Review acquisition strategy",
                "Automated review funnel systems",
                "Sentiment analysis tracking",
                "Negative review mitigation"
            ]
        },
        {
            title: "6. Local Link Building",
            icon: <Navigation size={32} />,
            desc: "Authority + Relevance = Sustainable Local Rankings.",
            points: [
                "Local publication outreach",
                "Regional PR & partnership links",
                "Hyperlocal community mentions",
                "Local media alignment"
            ]
        }
    ];

    const industries = [
        { name: "Healthcare Clinics", icon: <Heart size={24} />, desc: "Managing multiple practices and specialized treatments." },
        { name: "Real Estate Agents", icon: <Home size={24} />, desc: "Dominating local property and neighborhood searches." },
        { name: "Education & EdTech", icon: <GraduationCap size={24} />, desc: "Local visibility for campuses and training centers." },
        { name: "Restaurants & Cafés", icon: <Utensils size={24} />, desc: "Driving table bookings and on-the-go foot traffic." },
        { name: "Legal & Law Firms", icon: <Scale size={24} />, desc: "Establishing local authority for practice areas." },
        { name: "Retail & Franchises", icon: <ShoppingBag size={24} />, desc: "Unified local strategy for national brands." },
        { name: "Multi-location Enterprises ", icon: <Building2 size={24} />, desc: "Mulitple location business." },
        { name: "Home Services  ", icon: <HomeIcon size={24} />, desc: "Home services business." },
    ];

    const localSEOProcess = [
        { t: "1. Discovery & Audit", d: "We analyze your current local footprint, competitor rankings, and citations to identify growth gaps." },
        { t: "2. Strategy & Planning", d: "We craft a roadmap tailored to your location, targeting high-intent keywords that drive foot traffic." },
        { t: "3. On-Page & Local Listing", d: "We optimize your GMB profile, website content, and directory listings for maximum visibility." },
        { t: "4. Review & Optimize", d: "We monitor performance, manage reviews, and refine strategies to ensure consistent top rankings." }
    ];

    const faqs = [
        { q: "How long does Local SEO take to show results?", a: "Most businesses begin seeing measurable improvement within 8–12 weeks, depending on competition and location density." },
        { q: "Can you help multi-location businesses?", a: "Yes. We implement structured local SEO frameworks for single-location, multi-location, and franchise models to ensure cross-location authority." },
        { q: "Do reviews really impact rankings?", a: "Absolutely. Reviews are a top ranking factor for the Google Local Pack and influence trust signals and click-through rates significantly." },
        { q: "Will Local SEO increase store visits?", a: "Yes. Our strategies are built around conversion-focused local intent searches, leading directly to calls, directions, and foot traffic." }
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
                            Local SEO Optimization
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Turning Local Searches into Real Customers
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            Today’s customers don’t browse directories—they search on Google. 70%+ of local searches result in a visit or inquiry within 24 hours. If you're not in the Top 3 Map Pack, you're invisible. We help you dominate your geography.
                        </p>
                        <div className="p-0 mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we help businesses dominate local search ecosystems and drive consistent foot traffic.
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
                                src={localseohero}
                                alt="Local SEO"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
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
          Local SEO Optimization
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Turning Local Searches into Real Customers
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed mb-4">
        Today’s customers don’t browse directories — they search on Google.
        70%+ of local searches result in a visit or inquiry within 24 hours.
        <br /><br />
        If you're not in the Top 3 Map Pack, you're invisible.
        We help you dominate your geography.
      </p>

      <p className="text-lg leading-relaxed text-white font-medium mb-6">
        At Adkryoss managed by{" "}
        <span className="font-bold text-white">
          Clink Consultancy Services Private Limited
        </span>, we help businesses dominate local search ecosystems and drive consistent foot traffic.
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
          src={localseohero}
          alt="Local SEO Optimization"
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

            {/* Why Matters */}
            <section className="pt-32 pb-24 md:py-[80px] bg-white">
                <div className="container px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-[60px] items-center">
                        <div ref={mattersRef}>
                            <h2 className="text-[28px] md:text-[36px] font-bold mb-[20px] md:mb-[30px] text-[#0f172a]">
                                Why Local SEO Matters
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                Customers are searching for your services right now. If your business is not ranking in the Google Local Pack or Maps, you are losing ready-to-buy customers to your competitors.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: "Google Local Pack (Top 3)", d: "Highest conversion area on the SERP." },
                                    { t: "Google Maps Results", d: "Dominating on-the-go searches." },
                                    { t: "Geo-Organic Rankings", d: "Ranking for 'near me' intent queries." }
                                ].map((item, i) => (
                                    <div key={i} ref={el => matterPointsRef.current[i] = el} className="flex gap-[15px]">
                                        <div className="text-[#0066cc] mt-[4px]"><MapPin size={24} /></div>
                                        <div>
                                            <h4 className="text-[18px] font-bold text-[#0f172a] mb-[4px]">{item.t}</h4>
                                            <p className="text-[15px] text-[#64748b] font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#f8fafc] p-6 md:p-[40px] rounded-[30px] border border-[#e2e8f0]">
                            <h3 className="text-[22px] md:text-[24px] font-semibold mb-6 md:mb-[30px] text-[#0f172a]">Industries We Dominate:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {industries.map((ind, i) => (
                                    <div key={i} ref={el => industryCardsRef.current[i] = el} className="p-4 md:p-[20px] bg-white rounded-[15px] flex gap-[12px] items-center border border-[#e2e8f0] transition-transform hover:scale-105">
                                        <div className="text-[#0066cc] shrink-0">{ind.icon}</div>
                                        <span className="font-semibold text-[14px] md:text-[15px] text-[#0f172a]">{ind.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section id="services" className="py-16 md:py-[80px] bg-[#f8fafc]">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-10 md:mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-[#0f172a]">Our Local SEO Approach</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            We don't just optimize listings. We build local authority.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-[40px]">
                        {approach.map((pillar, i) => (
                            <div key={i}
                                ref={el => approachCardsRef.current[i] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] bg-white p-8 md:p-[50px_40px] rounded-[24px] border border-[#e2e8f0] transition-all duration-300 grow max-w-[380px] cursor-pointer">
                                <div className="text-[#0066cc] mb-[24px] card-icon">{pillar.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-[20px] text-[#0f172a]">{pillar.title}</h3>
                                <p className="text-[16px] text-[#475569] mb-[30px] leading-[1.6] font-medium">{pillar.desc}</p>
                                <ul className="space-y-6">
                                    {pillar.points.map((pt, idx) => (
                                        <li key={idx} className="flex gap-[12px] text-[15px] text-[#334155] leading-[1.5]">
                                            <CheckCircle2 size={20} className="text-[#0066cc] shrink-0 mt-[2px]" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-16 md:py-[80px] bg-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-10 md:mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-[20px] text-[#0f172a]">Our Local SEO Process</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            We don’t just list you. We lead you to the top.
                        </p>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]">
                        {localSEOProcess.map((step, i) => (
                            <div key={i} ref={el => processStepsRef.current[i] = el} className="p-[40px] bg-[#f8fafc] rounded-[30px] border border-[#e2e8f0] transition-all duration-300 hover:border-[#0066cc] cursor-default">
                                <h4 className="text-[18px] font-bold text-[#0066cc] mb-[15px]">{step.t}</h4>
                                <p className="text-[15px] text-[#475569] leading-[1.6] font-medium">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-16 md:py-[80px] bg-[#0f172a] text-white">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-white">What Makes Our Local SEO Different?</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]">
                        {[
                            { t: "Data-Driven Geo Targeting", d: "Precision mapping of profitable neighborhoods." },
                            { t: "Advanced Schema Implementation", d: "Rich results that drive higher map CTR." },
                            { t: "Multi-Location Frameworks", d: "Unified strategy for businesses with 1 to 100+ stores." },
                            { t: "AI-Assisted Management", d: "Smart analysis of reviews and GMB engagement data." }
                        ].map((item, i) => (
                            <div key={i}
                                ref={el => diffCardsRef.current[i] = el}
                                onMouseEnter={(e) => handleDarkHover(e, true)}
                                onMouseLeave={(e) => handleDarkHover(e, false)}
                                className="p-[30px] bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-[rgba(255,255,255,0.1)] transition-all duration-300">
                                <h4 className="text-[20px] font-bold text-[#60a5fa] mb-[12px]">{item.t}</h4>
                                <p className="text-[15px] text-[#cbd5e1] font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section ref={faqRef} className="py-16 md:py-[80px] bg-white">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[28px] md:text-[36px] font-bold text-center mb-10 md:mb-[60px] text-[#0f172a]">Local SEO Intelligence (FAQs)</h2>
                    <div className="max-w-[800px] mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className="mb-[15px] border border-[#e2e8f0] rounded-[15px] overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className={`w-full p-[20px_30px] flex justify-between items-center transition-all duration-300 border-none cursor-pointer ${openFaq === i ? 'bg-[#f8fafc]' : 'bg-white'}`}
                                >
                                    <span className="text-[18px] font-bold text-[#0f172a] text-left">{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openFaq === i && (
                                    <div className="p-[20px_30px] bg-white border-t border-[#e2e8f0]">
                                        <p className="m-0 text-[#475569] leading-[1.7] text-[16px] font-medium">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-20 md:py-[100px] text-center bg-gradient-to-br from-[#0066cc] to-[#00458a] text-white">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[28px] md:text-[36px] font-bold mb-[24px]">Ready to Dominate Local Search?</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 max-w-[800px] mx-auto text-white font-medium">
                        Your competitors are investing in local visibility. It's time you outrank them. Partner with Adkryoss and turn local searches into real customers.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-[12px] bg-white text-[#0066cc] py-4 md:py-5 px-8 md:px-12 rounded-[50px] text-[18px] md:text-[20px] font-bold transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                        Start Your Local Strategy Today <ArrowRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LocalSEO;

