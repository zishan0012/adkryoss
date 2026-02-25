import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import javascripthero from "../../../assets/SEO/javascripthero.png";
import javascriptseo from "../../../assets/SEO/javascript/javascriptseo.jpg";
import {
    Code2,
    Search,
    RefreshCcw,
    Zap,
    Layout,
    Link2,
    Settings,
    CheckCircle2,
    ArrowRight,
    Cpu,
    Target,
    Users,
    Activity,
    Smartphone,
    Database,
    Globe,
    FileText,
    Layers,
    Binary,
    BarChart3,
    Briefcase,
    Lightbulb,
    Puzzle,
    ShoppingBag,
    Building2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const JavascriptSEO = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whyRef = useRef(null);
    const whyItemsRef = useRef([]);
    const whyImageRef = useRef(null);
    const frameworkRef = useRef(null);
    const frameworkCardsRef = useRef([]);
    const techRef = useRef(null);
    const techItemsRef = useRef([]);
    const industriesRef = useRef(null);
    const industryCardsRef = useRef([]);
    const modelRef = useRef(null);
    const modelCard1Ref = useRef(null);
    const modelCard2Ref = useRef(null);
    const resultsRef = useRef(null);
    const resultItemsRef = useRef([]);
    const resultsCardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Syntax reveal
            gsap.from(heroContentRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
            gsap.from(heroImageRef.current, {
                x: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            });

            // Why Matters - Character-style reveal
            gsap.from(whyRef.current.querySelector('h2'), {
                opacity: 0,
                x: -30,
                scrollTrigger: {
                    trigger: whyRef.current,
                    start: "top 80%"
                }
            });
            whyItemsRef.current.forEach((item, i) => {
                gsap.from(item, {
                    x: -20,
                    opacity: 0,
                    duration: 0.5,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%"
                    }
                });
            });
            gsap.from(whyImageRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: whyImageRef.current,
                    start: "top 85%"
                }
            });

            // Approach - Code block staggers
            frameworkCardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%"
                    }
                });
            });

            // Tech Expertise - Binary stagers
            techItemsRef.current.forEach((item, i) => {
                gsap.from(item, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.4,
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 95%"
                    }
                });
            });

            // Industries - Grid assembly
            industryCardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%"
                    }
                });
            });

            // Working Model & Why - Logic gates
            gsap.from(modelCard1Ref.current, {
                x: -40,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: modelCard1Ref.current,
                    start: "top 85%"
                }
            });
            gsap.from(modelCard2Ref.current, {
                x: 40,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: modelCard2Ref.current,
                    start: "top 85%"
                }
            });

            // Results - Execution flow
            resultItemsRef.current.forEach((item, i) => {
                gsap.from(item, {
                    x: -20,
                    opacity: 0,
                    duration: 0.5,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%"
                    }
                });
            });
            gsap.from(resultsCardRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: resultsCardRef.current,
                    start: "top 85%"
                }
            });

            // Continuous code blink
            gsap.to('.terminal-cursor', {
                opacity: 0,
                duration: 0.8,
                repeat: -1,
                ease: "steps(1)"
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleHover = (e, isEnter) => {
        gsap.to(e.currentTarget, {
            y: isEnter ? -10 : 0,
            scale: isEnter ? 1.02 : 1,
            backgroundColor: isEnter ? "#f8fafc" : "white",
            borderColor: isEnter ? "#0066cc" : "#e2e8f0",
            duration: 0.3
        });
        const icon = e.currentTarget.querySelector('.card-icon');
        if (icon) {
            gsap.to(icon, {
                rotateY: isEnter ? 180 : 0,
                scale: isEnter ? 1.2 : 1,
                duration: 0.6
            });
        }
    };

    const jsOfferings = [
        { title: "Delayed Rendering", desc: "Search engines struggle with content hidden in the second wave of indexing.", icon: <Activity size={24} /> },
        { title: "Missing Content", desc: "Dynamically injected elements are often missed by traditional crawlers.", icon: <FileText size={24} /> },
        { title: "Crawl Budget Waste", desc: "Heavy script execution burns through crawl efficiency.", icon: <Zap size={24} /> },
        { title: "Complex Structures", desc: "Single Page Application (SPA) routes can be invisible without proper setup.", icon: <Layers size={24} /> }
    ];

    const framework = [
        {
            title: "1. Technical JS Audit",
            icon: <Search size={32} />,
            desc: "A deep forensic review of how search engines process your dynamic code.",
            points: [
                "Crawlability testing (Googlebot simulation)",
                "Comparison: Client-side vs Server-side rendering",
                "Log file & Core Web Vitals assessment",
                "JS execution error tracking"
            ]
        },
        {
            title: "2. Rendering Optimization",
            icon: <Cpu size={32} />,
            desc: "Optimizing the 'Two Waves of Indexing' for maximum coverage.",
            points: [
                "Server-Side Rendering (SSR) implementation",
                "Dynamic Rendering configuration",
                "Static Site Generation (SSG) / Pre-rendering",
                "Hydration performance optimization"
            ]
        },
        {
            title: "3. Crawl & Index Control",
            icon: <Link2 size={32} />,
            desc: "Ensuring discovery and interpretation of every critical route.",
            points: [
                "Robots.txt & meta directive handling",
                "Canonicalization for SPA routes",
                "JS navigation & internal link optimization",
                "XML sitemap sync for dynamic pages"
            ]
        },
        {
            title: "4. Web Vitals & Performance",
            icon: <Binary size={32} />,
            desc: "Speed is a ranking factor; JS websites need leaner performance.",
            points: [
                "LCP, INP, and CLS optimization",
                "Code splitting & Lazy loading",
                "Script defer/async configuration",
                "Rendering path optimization"
            ]
        },
        {
            title: "5. Structured Data Rendering",
            icon: <Layers size={32} />,
            desc: "Ensuring AI and search engines get your metadata accurately.",
            points: [
                "Schema markup in initial HTML",
                "Meta tags & Social Open Graph loads",
                "Dynamic content crawlability verification",
                "Rich results eligibility tracking"
            ]
        }
    ];

    const techExpertise = [
        { name: "React SEO", icon: <Code2 size={24} /> },
        { name: "Next.js Optimization", icon: <Cpu size={24} /> },
        { name: "Angular SEO", icon: <Settings size={24} /> },
        { name: "Vue.js SEO", icon: <Layout size={24} /> },
        { name: "Headless CMS", icon: <Database size={24} /> },
        { name: "PWA SEO", icon: <Smartphone size={24} /> }
    ];

    const industries = [
        { name: "ECommerce & D2C Brands", desc: "Handling dynamic product grids and faceted search.", icon: <ShoppingBag size={24} /> },
        { name: "SaaS Platforms", desc: "Optimizing SPA routes and complex user dashboards.", icon: <Cpu size={24} /> },
        { name: "FinTech Applications", desc: "Secure, compliant rendering for financial tools.", icon: <Activity size={24} /> },
        { name: "Enterprise Portals", desc: "Scaling visibility for heavy, high-performance apps.", icon: <Building2 size={24} /> },
        { name: "EdTech & Media Platforms", desc: "Ensuring video and interactive content is indexed.", icon: <Globe size={24} /> }
    ];

    const workingModelSteps = [
        "Discovery", "Audit", "Technical Roadmap", "Implementation Support", "Performance Monitoring"
    ];

    const whyChooseUs = [
        "Deep technical SEO specialization",
        "Strong developer collaboration approach",
        "Data-driven testing methodology",
        "Performance-first mindset",
        "Enterprise-ready scalability"
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
                            JavaScript SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Make Your Dynamic Website Search-Ready
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white/90 font-medium">
                            Modern websites run on JavaScript. Google doesn't always. If your content loads after rendering, search engines might never see it. We ensure your JS-driven website is fully crawlable, indexable, and optimized for maximum visibility.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link
                                to="/contact"
                                className="bg-white text-black font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </Link>
                            <Link
                                to="#services"
                                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-blue-900 hover:scale-105 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </Link>
                        </div>
                    </div>
                    <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-4 border border-white/20">
                            <img
                                src={javascripthero}
                                alt="JavaScript SEO"
                                className="max-w-[400px] w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Matters Section */}
            <section ref={whyRef} className="pt-32 pb-24 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-[minmax(300px,1fr)_1.2fr] gap-[60px] items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a] tracking-tight">
                                Why JavaScript SEO Matters
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-10 leading-[1.8] font-medium text-slate-600">
                                Today's websites rely heavily on frameworks like React, Angular, and Vue. While they deliver speed and user experience, they often create invisible barriers for search engines.
                            </p>
                            <div className="space-y-6">
                                {jsOfferings.map((item, i) => (
                                    <div key={i} ref={el => whyItemsRef.current[i] = el} className="flex gap-[20px] items-start group">
                                        <div className="text-[#0066cc] mt-1 bg-blue-50 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">{item.icon}</div>
                                        <div>
                                            <h4 className="text-[18px] font-semibold text-[#0f172a] mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                            <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={whyImageRef} className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm p-4 border border-slate-100 shadow-2xl">
                            <img
                                src={javascriptseo}
                                alt="js seo strategy"
                                className="max-w-[450px] w-full rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section id="services" ref={frameworkRef} className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-[70px]">
                        <h2 className="text-[36px] font-bold mb-5 text-[#0f172a] tracking-tight">
                            Our JavaScript SEO Approach
                        </h2>
                        <p className="text-[16px] md:text-[18px] text-slate-600 mb-6 font-medium max-w-2xl mx-auto">
                            Technical Precision. Strategic SEO Engineering.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        {framework.map((phase, i) => (
                            <div
                                key={i}
                                ref={el => frameworkCardsRef.current[i] = el}
                                onMouseEnter={(e) => handleHover(e, true)}
                                onMouseLeave={(e) => handleHover(e, false)}
                                className="w-[calc(33.333%-27px)] min-w-[350px] bg-white p-[50px_40px] rounded-[32px] border border-slate-100 shadow-lg transition-all duration-500 relative overflow-hidden flex-grow max-w-[450px] cursor-pointer group"
                            >
                                <div className="text-[#0066cc] mb-6 card-icon inline-block bg-blue-50 p-4 rounded-2xl">{phase.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-5 text-[#0f172a] group-hover:text-blue-700 transition-colors">{phase.title}</h3>
                                <p className="text-[16px] text-slate-500 mb-[30px] leading-[1.8] font-medium">{phase.desc}</p>
                                <ul className="space-y-5">
                                    {phase.points.map((pt, idx) => (
                                        <li key={idx} className="flex gap-4 text-[15px] text-slate-700 leading-[1.6] group-hover:translate-x-1 transition-transform font-medium">
                                            <CheckCircle2 size={20} className="text-[#0066cc] shrink-0 mt-0.5" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Framework Expertise */}
            <section ref={techRef} className="py-24 bg-[#0f172a] text-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-6 text-white tracking-tight leading-tight">Framework-Specific Expertise</h2>
                    <p className="text-[16px] md:text-[18px] mb-12 max-w-[800px] mx-auto text-slate-300 font-medium leading-relaxed">
                        Whether you're running eCommerce, SaaS, or an Enterprise app, we align SEO with your development stack.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {techExpertise.map((tech, i) => (
                            <div key={i} ref={el => techItemsRef.current[i] = el} className="p-[40px_20px] bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-[20px] transition-all duration-500 hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-2 group">
                                <div className="text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{tech.icon}</div>
                                <span className="font-bold text-lg tracking-wide">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries we support */}
            <section ref={industriesRef} className="py-24 bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-6 text-black tracking-tight leading-tight">Industries We Support</h2>
                    <p className="text-[16px] md:text-[18px] mb-12 text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        Each industry demands a custom rendering and crawl strategy, which we design with long-term scalability in mind.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {industries.map((ind, i) => (
                            <div key={i} ref={el => industryCardsRef.current[i] = el} className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 text-left transition-all duration-500 hover:bg-white hover:border-blue-600 hover:-translate-y-3 hover:shadow-2xl group">
                                <div className="text-[#0066cc] mb-6 bg-blue-100 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">{ind.icon}</div>
                                <h4 className="text-[20px] font-bold text-[#0f172a] mb-3 leading-tight">{ind.name}</h4>
                                <p className="text-[15px] text-slate-500 leading-[1.7] font-medium">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Model & Why Choose Us */}
            <section ref={modelRef} className="py-24 bg-slate-50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Working Model */}
                        <div ref={modelCard1Ref} className="bg-white p-[60px] rounded-[56px] border border-slate-100 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="flex items-center gap-[20px] mb-[40px]">
                                <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg"><BarChart3 size={32} /></div>
                                <h3 className="text-[28px] font-semibold text-[#0f172a] tracking-tight">Our Working Model</h3>
                            </div>
                            <p className="text-[18px] text-slate-600 mb-8 leading-[1.8] font-medium">
                                We don’t treat JavaScript SEO as a one-time fix. It’s an ongoing technical alignment process.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-[40px]">
                                {workingModelSteps.map((step, i) => (
                                    <React.Fragment key={i}>
                                        <span className="px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full font-black text-[15px] border border-blue-100 shadow-sm hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default">
                                            {step}
                                        </span>
                                        {i < workingModelSteps.length - 1 && <ArrowRight size={20} className="text-slate-300 self-center" />}
                                    </React.Fragment>
                                ))}
                            </div>
                            <p className="text-[17px] text-slate-500 leading-[1.8] font-medium">
                                At Adkryoss managed by <span className="font-black text-[#0f172a] underline decoration-blue-200">Clink Consultancy Services Private Limited</span>, we collaborate with your developers, track rendering performance after deployment, and continuously optimize based on real search data.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div ref={modelCard2Ref} className="bg-white p-[60px] rounded-[56px] border border-slate-100 shadow-xl relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="flex items-center gap-[20px] mb-[40px]">
                                <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg"><Lightbulb size={32} /></div>
                                <h3 className="text-[28px] font-semibold text-[#0f172a] tracking-tight">Why Choose Us</h3>
                            </div>
                            <div className="space-y-6">
                                {whyChooseUs.map((item, i) => (
                                    <div key={i} className="flex gap-[20px] group/item">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                                        <h4 className="text-[18px] font-semibold text-[#0f172a] group-hover/item:text-blue-700 transition-colors uppercase tracking-tight">{item}</h4>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-[40px] pt-8 border-t border-slate-100">
                                <p className="text-[20px] text-blue-700 italic font-black leading-relaxed">
                                    "We combine strategy, engineering precision, and performance marketing to deliver measurable improvements."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section ref={resultsRef} className="py-24 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[40px] text-[#0f172a] tracking-tight leading-tight">
                                What Results You Can Expect
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { t: "Improved Crawl Coverage", d: "Ensure 100% of your critical pages are reached by search engines." },
                                    { t: "Faster Indexing", d: "Content appears in search results hours or days faster." },
                                    { t: "Enhanced Core Web Vitals", d: "Leaner JS execution for better user experience scores." },
                                    { t: "Higher Organic Visibility", d: "Unblock rankings held back by technical rendering issues." }
                                ].map((item, i) => (
                                    <div key={i} ref={el => resultItemsRef.current[i] = el} className="flex gap-[25px] group">
                                        <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-600 transition-all duration-500"><CheckCircle2 size={32} className="text-[#0066cc] group-hover:text-white transition-colors" /></div>
                                        <div>
                                            <h4 className="text-[18px] font-bold text-[#0f172a] mb-2 group-hover:text-blue-700 transition-colors">{item.t}</h4>
                                            <p className="text-[17px] text-slate-500 font-medium leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={resultsCardRef} className="bg-slate-900 p-[60px] rounded-[56px] text-center shadow-2xl relative overflow-hidden border border-white/5">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <Activity size={80} className="text-blue-400 mx-auto mb-8 animate-pulse" />
                            <h3 className="text-[24px] font-semibold text-white mb-6 tracking-tight">Ready to Scale?</h3>
                            <p className="text-slate-300 text-[16px] mb-10 font-medium leading-[1.8]">
                                JavaScript should power your growth — not block it. Let's make your dynamic website search-ready.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-blue-900 p-[20px_50px] rounded-full font-black text-[18px] no-underline transition-all duration-300 hover:scale-110 hover:shadow-white/20 active:scale-95 group shadow-2xl">
                                Talk to JS SEO Experts <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JavascriptSEO;

