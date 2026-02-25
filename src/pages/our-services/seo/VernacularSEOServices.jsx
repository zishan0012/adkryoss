import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Languages,
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
    FileText,
    MessageCircle,
    Smartphone,
    TrendingUp,
    Map,
    ShoppingCart,
    Building2,
    Heart,
    GraduationCap,
    Home,
    Package,
    Film,
    DollarSign
} from 'lucide-react';
import vernacularseo from '../../../assets/SEO/vernacularhero.png';

gsap.registerPlugin(ScrollTrigger);

const VernacularSEOServices = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whyRef = useRef(null);
    const whyImageRef = useRef(null);
    const frameworkCardsRef = useRef([]);
    const approachRef = useRef(null);
    const industryBadgesRef = useRef([]);
    const processStepsRef = useRef([]);
    const advantageRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Rhythmic Expansion
            gsap.from(heroContentRef.current, {
                x: -60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
            gsap.from(heroImageRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 1.5,
                ease: "back.out(1.7)"
            });

            // Why Section - Heartbeat reveal
            if (whyRef.current) {
                gsap.from(whyRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: whyRef.current,
                        start: "top 80%"
                    }
                });
            }
            if (whyImageRef.current) {
                gsap.from(whyImageRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: whyImageRef.current,
                        start: "top 85%"
                    }
                });
            }

            // Framework - Pulse staggers
            frameworkCardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.from(card, {
                    scale: 0.95,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%"
                    }
                });
            });

            // Approach - Slide in connections
            if (approachRef.current) {
                gsap.from(approachRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: approachRef.current,
                        start: "top 85%"
                    }
                });
            }

            // Industry Badges - Bouncing reveal
            industryBadgesRef.current.forEach((badge, i) => {
                if (!badge) return;
                gsap.from(badge, {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    delay: i * 0.08,
                    scrollTrigger: {
                        trigger: badge,
                        start: "top 95%"
                    }
                });
            });

            // Process - Sequential flow
            processStepsRef.current.forEach((step, i) => {
                if (!step) return;
                gsap.from(step, {
                    x: -30,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 90%"
                    }
                });
            });

            // Advantage - Connection pulses
            if (advantageRef.current) {
                gsap.from(advantageRef.current, {
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: advantageRef.current,
                        start: "top 80%"
                    }
                });
            }

            // CTA - Final Expansion
            if (ctaRef.current) {
                gsap.from(ctaRef.current, {
                    scale: 0.95,
                    opacity: 0,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 90%"
                    }
                });
            }
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const vernacularFramework = [
        {
            title: "1. Regional Search Intelligence",
            icon: <Search size={32} />,
            desc: "We conduct deep keyword research in native languages, analyzing real demand—not assumptions.",
            points: [
                "Local search patterns",
                "Transliteration behavior (Hindi in English script)",
                "Voice search trends",
                "Regional competitor mapping",
                "Search intent segmentation"
            ],
            extra: "Focuses on how users actually think and search, not just dictionary translations."
        },
        {
            title: "2. Multilingual Content Strategy",
            icon: <MessageCircle size={32} />,
            desc: "We create high-quality, SEO-optimized content that is strategically localized.",
            points: [
                "Reflects cultural tone and local sentiment",
                "Matches user intent precisely",
                "Google multilingual indexing standards",
                "Brand voice consistency across languages"
            ],
            extra: "Content is transcreated by native experts to resonate with regional hearts."
        },
        {
            title: "3. Multilingual Website Optimization",
            icon: <Cpu size={32} />,
            desc: "Technical execution is critical for vernacular rankings. We ensure flawless structure.",
            points: [
                "Hreflang architecture",
                "Multilingual URL structuring",
                "Language-specific meta tags",
                "Structured data and Schema optimization",
                "Core Web Vitals & Mobile-first indexing"
            ],
            extra: "Ensures search engines correctly understand and rank your regional pages."
        },
        {
            title: "4. Localized On-Page & Entity SEO",
            icon: <Target size={32} />,
            desc: "We build authority in each language ecosystem through granular on-page signals.",
            points: [
                "Region-specific landing pages",
                "Native-language FAQs",
                "Google Business Profiles in regional formats",
                "Entity-based content clusters"
            ],
            extra: "Connects your local presence with regional search intent."
        },
        {
            title: "5. Regional Link Building & Digital PR",
            icon: <Network size={32} />,
            desc: "Authority building requires localized outreach and regional publisher collaborations.",
            points: [
                "Regional publisher collaborations",
                "Native language guest articles",
                "Local citation building",
                "Influencer mentions in regional media"
            ],
            extra: "Strengthens domain authority within specific regional search ecosystems."
        }
    ];

    const targetingIndustries = [
        { name: "E-commerce & D2C", icon: <ShoppingCart size={18} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={18} /> },
        { name: "Healthcare & Hospitals", icon: <Heart size={18} /> },
        { name: "Real Estate Developers", icon: <Home size={18} /> },
        { name: "BFSI & Fintech", icon: <DollarSign size={18} /> },
        { name: "Govt & Public Sector", icon: <Building2 size={18} /> },
        { name: "FMCG & Consumer Brands", icon: <Package size={18} /> }
    ];

    const ourProcess = [
        { step: "01", title: "Discover", desc: "Market & Language Opportunity Analysis." },
        { step: "02", title: "Strategize", desc: "Multilingual Keyword & Intent Mapping." },
        { step: "03", title: "Localize", desc: "High-quality content transcreation." },
        { step: "04", title: "Optimize", desc: "Technical & On-Page Deployment." },
        { step: "05", title: "Amplify", desc: "Authority & Trust Building." },
        { step: "06", title: "Scale", desc: "Data Monitoring & Continuous Growth." }
    ];

    return (
        <div ref={pageRef} className="bg-white text-slate-900">
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
                            Vernacular SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            India Doesn't Search in One Language. We Help You Rank in All of Them.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            India's digital growth is happening beyond English. From Hindi and Tamil to Bengali, Marathi, Telugu and more — regional language searches are exploding across Google, YouTube, and voice platforms.
                        </p>
                        <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we help brands unlock massive untapped regional search demand with precision-driven Vernacular SEO strategies that drive traffic, trust, and transactions.
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
                                src={vernacularseo}
                                alt="Vernacular SEO Services"
                                className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Vernacular SEO Section */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">
                            Why Vernacular SEO is the Next Growth Engine
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 max-w-[850px] mx-auto leading-relaxed font-medium">
                            Over 75% of new internet users in India prefer consuming content in their native language. Regional searches are increasing year after year.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div ref={whyRef} className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 italic transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                If your brand communicates only in English, you are invisible to millions of ready-to-buy customers in Tier 2 and Tier 3 cities where buying intent is high but competition is still low.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-900 font-medium leading-[1.8] not-italic">
                                Vernacular SEO bridges this gap by optimizing your digital presence for multiple regional languages — ensuring discoverability, cultural relevance, and conversion power.
                            </p>
                        </div>
                        <div ref={whyImageRef} className="relative group overflow-hidden rounded-[30px]">
                            <img src="https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/vernacular-seo-side.webp" alt="Market Opportunity" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section id="services" className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">
                            Our Vernacular SEO Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 font-medium">
                            We combine linguistic intelligence, search data science, and cultural nuance.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {vernacularFramework.map((item, i) => (
                            <div ref={el => frameworkCardsRef.current[i] = el} key={i} className="flex-1 min-w-[320px] max-w-[400px] bg-white p-10 rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-[#0066cc] group">
                                <div className="text-[#0066cc] mb-5">{item.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 mb-5 leading-relaxed text-[15px] font-medium">{item.desc}</p>
                                <ul className="list-none p-0 space-y-3">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-2 text-[14px] text-slate-700">
                                            <div className="text-[#0066cc] mt-1 shrink-0"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[13px] font-medium text-[#0066cc] mt-6 pt-4 border-t border-slate-100">{item.extra}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div ref={approachRef} className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-8 leading-tight">Our Approach: Data + Culture + Performance</h2>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 leading-relaxed font-medium">
                                Unlike traditional SEO that focuses only on keywords, we blend search insights with cultural messaging frameworks to build scalable multilingual ecosystems.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { t: "Data Insights", d: "Deep behavioral and demographic search analytics." },
                                    { t: "Cultural Magic", d: "Linguistic nuance for local resonance." },
                                    { t: "Performance UX", d: "Conversion-focused user experience." },
                                    { t: "Continuous Growth", d: "Ongoing SERP and ROI optimization." }
                                ].map((item, i) => (
                                    <div key={i} className="group">
                                        <h4 className="font-bold text-[#0066cc] mb-2 text-[18px] group-hover:translate-x-1 transition-transform">{item.t}</h4>
                                        <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-900 p-12 rounded-[40px] text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
                            <h3 className="text-[28px] font-semibold mb-8">Why Choose Us?</h3>
                            <div className="space-y-6">
                                {[
                                    "Native-language research specialists",
                                    "AI-powered keyword mapping tools",
                                    "Technical SEO for multilingual sites",
                                    "Performance tracking by region",
                                    "ROI-driven strategy with KPIs",
                                    "Continuous algorithm updates"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center group">
                                        <div className="bg-blue-600/20 text-blue-400 rounded-full p-1.5 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="text-[16px] font-medium text-slate-100">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Industries */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">Industries We Empower</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 font-medium">
                            If your growth plan includes Bharat — vernacular SEO is not optional.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {targetingIndustries.map((item, i) => (
                            <div ref={el => industryBadgesRef.current[i] = el} key={i} className="flex items-center gap-3 bg-white px-8 py-5 rounded-xl border border-slate-200 font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#0066cc] hover:text-[#0066cc] group">
                                <span className="text-blue-500 group-hover:scale-110 transition-transform">{item.icon}</span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">Our Process</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 font-medium">
                            Each step is aligned with measurable performance metrics.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {ourProcess.map((item, i) => (
                            <div ref={el => processStepsRef.current[i] = el} key={i} className="flex-1 min-w-[240px] max-w-[280px] bg-slate-50 p-10 rounded-3xl text-center border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 group">
                                <div className="text-[14px] font-bold text-[#0066cc] mb-3 group-hover:scale-110 transition-transform">{item.step}</div>
                                <h4 className="text-[20px] font-bold text-slate-900 mb-3">{item.title}</h4>
                                <p className="text-[14px] text-slate-600 leading-relaxed m-0 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Advantage */}
            <section ref={advantageRef} className="py-24 bg-slate-900 text-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="bg-white/5 p-12 rounded-[40px] border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50">
                            <TrendingUp size={48} className="text-blue-400 mb-8" />
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white leading-tight">
                                The Competitive Advantage
                            </h3>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-300 leading-relaxed font-medium">
                                Brands that invest in vernacular SEO today will dominate tomorrow's digital India. Early adoption means:
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {["Lower competition", "Higher engagement", "Stronger trust", "Better conversions"].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center group">
                                        <CheckCircle2 size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                                        <span className="font-bold text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[36px] font-bold text-white mb-8 leading-tight">Move Before Your Competitors</h2>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-300 leading-relaxed font-medium">
                                Adkryoss managed by <span className="text-white font-bold">Clink Consultancy Services Private Limited</span> helps you move before your competitors realize the opportunity.
                            </p>
                            <div className="p-10 bg-blue-600/10 rounded-2xl border-l-4 border-blue-500 italic">
                                <p className="m-0 font-medium text-white text-[18px]">"Regional search is not the future. It is happening now."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-24 text-center bg-gradient-to-br from-[#0066cc] to-[#004999] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-6 text-white leading-tight">Let's Build Your Multilingual Growth Engine</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-white opacity-90 max-w-[800px] mx-auto leading-relaxed font-medium">
                        Speak every language your customers speak. Connect with us today and unlock Bharat.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066cc] py-5 px-12 rounded-full text-[18px] font-bold no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 hover:scale-[1.05] hover:shadow-white/20">
                        Unlock Your Regional Growth
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default VernacularSEOServices;
