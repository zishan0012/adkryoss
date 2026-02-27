import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import llmoptimizationhero from "../../../assets/SEO/llmoptimizationhero.png";
import {
    Brain,
    Search,
    Cpu,
    Network,
    MessageSquare,
    Database,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Shield,
    Globe,
    Zap,
    Users,
    Activity,
    FileText,
    Settings,
    Layers,
    Binary,
    Bot,
    BarChart3,
    Microscope,
    Lightbulb
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LLMOptimization = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);
    const whatRef = useRef(null);
    const whatFeaturesRef = useRef([]);
    const whatImportanceRef = useRef(null);
    const approachCardsRef = useRef([]);
    const strategyRef = useRef(null);
    const techStackRef = useRef(null);
    const techItemsRef = useRef([]);
    const benefitCardsRef = useRef([]);
    const audienceBadgesRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - Semantic assembly
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
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.75)",
                    scrollTrigger: {
                        trigger: heroImageRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // What is LLM - Node reveals
            if (whatRef.current) {
                gsap.fromTo(whatRef.current.querySelector('h2'),
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        scrollTrigger: {
                            trigger: whatRef.current,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            }
            whatFeaturesRef.current.forEach((feat, i) => {
                if (!feat) return;
                gsap.fromTo(feat,
                    { scale: 0.9, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: feat,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });
            if (whatImportanceRef.current) {
                gsap.fromTo(whatImportanceRef.current,
                    { x: 40, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: whatImportanceRef.current,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            }

            // Approach - Flowing staggers
            approachCardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.fromTo(card,
                    { y: 60, opacity: 0 },
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

            // Strategy & Tech - Contextual connections
            if (strategyRef.current) {
                gsap.fromTo(strategyRef.current,
                    { x: -40, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: strategyRef.current,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            }
            if (techStackRef.current) {
                gsap.fromTo(techStackRef.current,
                    { x: 40, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: techStackRef.current,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            }
            techItemsRef.current.forEach((item, i) => {
                if (!item) return;
                gsap.fromTo(item,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.4,
                        delay: 0.2 + (i * 0.08),
                        scrollTrigger: {
                            trigger: techStackRef.current,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Benefits - Authority growth
            benefitCardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.fromTo(card,
                    { scale: 0.9, opacity: 0 },
                    {
                        scale: 1,
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

            // Audiences - Distributed signals
            audienceBadgesRef.current.forEach((badge, i) => {
                if (!badge) return;
                gsap.fromTo(badge,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        delay: i * 0.08,
                        scrollTrigger: {
                            trigger: badge,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // CTA - Neural pulse
            if (ctaRef.current) {
                gsap.fromTo(ctaRef.current,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
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
            }

            // Brain drift
            gsap.to('.brain-icon', {
                y: -10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const offerings = [
        {
            title: "1. AI Visibility Audit",
            icon: <Search size={32} />,
            desc: "Analyzing how AI platforms currently interpret and cite your brand.",
            points: [
                "AI platform brand perception audit",
                "Entity recognition gap analysis",
                "Citation frequency tracking",
                "Response sentiment mapping"
            ]
        },
        {
            title: "2. Entity & Knowledge Graph",
            icon: <Network size={32} />,
            desc: "Strengthening your digital identity through structural relationships.",
            points: [
                "Core entity mapping & optimization",
                "Semantic schema implementation",
                "Brand relationship structuring",
                "Topical authority clustering"
            ]
        },
        {
            title: "3. Conversational Engineering",
            icon: <MessageSquare size={32} />,
            desc: "Creating question-based models that AI responses prioritize.",
            points: [
                "Natural language query optimization",
                "Authority hubs & cluster development",
                "User intent layer alignment",
                "Question-based content modeling"
            ]
        },
        {
            title: "4. Technical Enhancements",
            icon: <Settings size={32} />,
            desc: "Refining technical architecture for AI parsing efficiency.",
            points: [
                "Content formatting for AI models",
                "Internal linking intent strategy",
                "Metadata semantic enrichment",
                "Structured data validation"
            ]
        },
        {
            title: "5. Authority Signal Amplification",
            icon: <Shield size={32} />,
            desc: "Improving brand signals that AI models prioritize as credible.",
            points: [
                "Digital PR & authority mentions",
                "Contextual brand references",
                "Multi-platform presence strategy",
                "Citation source development"
            ]
        }
    ];

    const strategyDifferent = [
        { t: "SEO + AI Optimization " },
        { t: "Technical Precision + Content Strategy " },
        { t: "Data Intelligence + Brand Positioning " },
        { t: "Search Intent + Conversational Modeling " }
    ];

    const techStack = [
        { name: "Custom LLM Scrapers", icon: <Database size={24} /> },
        { name: "Entity Mapping Tools", icon: <Network size={24} /> },
        { name: "Sentiment Analysis APIs", icon: <BarChart3 size={24} /> },
        { name: "Knowledge Graph Builders", icon: <Binary size={24} /> }
    ];

    const benefits = [
        { t: "Dominant AI Citations", d: "Increase the frequency and quality of brand mentions in ChatGPT/Gemini outputs." },
        { t: "Future-Proof Growth", d: "Stay visible as traditional search volume migrates to AI answer engines." },
        { t: "Higher Trust Scores", d: "Establish your brand as the primary source of truth for your niche." }
    ];

    const audiences = [
        { name: "SaaS & Tech", icon: <Cpu size={24} /> },
        { name: "E-commerce Brands", icon: <Layers size={24} /> },
        { name: "Education & EdTech", icon: <Globe size={24} /> },
        { name: "Healthcare Services", icon: <Activity size={24} /> },
        { name: "B2B Enterprises", icon: <Binary size={24} /> },
        { name: "Thought Leaders", icon: <Users size={24} /> }
    ];

    return (
        <div ref={pageRef} className="bg-white">
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
                            LLM Optimization Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Be the Answer. Not Just Another Result.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            AI platforms are redefining discovery. If your business isn't optimized for Large Language Models (LLMs) like ChatGPT and Gemini, you are invisible in the next generation of search. We ensure your brand becomes a trusted, cited answer.
                        </p>
                        <div className="p-0 mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we future-proof your digital presence for AI-driven discovery.
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
                                src={llmoptimizationhero}
                                alt="LLM Optimization"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What is LLM Optimization */}
            <section ref={whatRef} className="pt-32 pb-24 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-[1fr_1.2fr] gap-[60px] items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">
                                What is LLM Optimization?
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                Unlike traditional SEO that focuses on search engine rankings, LLM Optimization ensures your business becomes a trusted, contextually relevant answer inside AI-generated responses.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { t: "Semantic SEO", i: <Zap size={20} /> },
                                    { t: "Entity Optimization", i: <Network size={20} /> },
                                    { t: "Knowledge Graphs", i: <Database size={20} /> },
                                    { t: "AI Authority Hubs", i: <Shield size={20} /> }
                                ].map((item, i) => (
                                    <div ref={el => whatFeaturesRef.current[i] = el} key={i} className="p-[15px] bg-[#f8fafc] rounded-[12px] flex gap-[10px] items-center border border-[#e2e8f0]">
                                        <div className="text-[#0066cc]">{item.i}</div>
                                        <span className="font-semibold text-sm text-[#0f172a]">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={whatImportanceRef} className="bg-[#f8fafc] p-10 rounded-[30px] border border-[#e2e8f0]">
                            <h3 className="text-[24px] font-semibold mb-[30px] text-[#0f172a]">Why It Matters Now:</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Users ask full questions, not keywords", d: "Conversational queries are replacing short phrases." },
                                    { t: "AI summarizes instead of listing links", d: "Being 'cited' is the new 'ranking first'." },
                                    { t: "Brand mentions matter more than backlinks", d: "Co-occurrence in AI training data drives recommendations." },
                                    { t: "Authority and trust signals drive recommendations", d: "AI models prioritize high-E-E-A-T sources for summaries." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[15px]">
                                        <div className="w-[30px] h-[30px] bg-white rounded-[10px] flex items-center justify-center border border-[#e2e8f0] shrink-0">
                                            <span className="font-bold text-[#0066cc]">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[18px] font-medium text-[#0f172a] mb-1">{item.t}</h4>
                                            <p className="text-[15px] text-[#64748b] font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section id="services" className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-5 text-[#0f172a]">Our LLM Optimization Approach</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Structured. Data-Driven. AI-First.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        {offerings.map((step, i) => (
                            <div ref={el => approachCardsRef.current[i] = el} key={i} className="w-[calc(33.333%-27px)] min-w-[350px] bg-white p-[50px_40px] rounded-[24px] border border-[#e2e8f0] transition-all duration-300 flex-grow max-w-[380px] hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-[#0066cc]">
                                <div className="text-[#0066cc] mb-6">{step.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-5 text-[#0f172a]">{step.title}</h3>
                                <p className="text-[16px] text-[#475569] mb-[30px] leading-[1.6] font-medium">{step.desc}</p>
                                <ul className="space-y-6">
                                    {step.points.map((pt, idx) => (
                                        <li key={idx} className="flex gap-3 text-[15px] text-[#334155] leading-[1.5]">
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

            {/* Differentiators & Technology Stack */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div ref={strategyRef} className="bg-[#f8fafc] p-[50px] rounded-[40px] border border-[#e2e8f0]">
                            <div className="flex items-center gap-[15px] mb-[30px]">
                                <Microscope size={32} className="text-[#0066cc]" />
                                <h3 className="text-[28px] font-semibold text-[#0f172a]">What Makes Our Strategy Different</h3>
                            </div>
                            <div className="space-y-8">
                                {strategyDifferent.map((item, i) => (
                                    <div key={i}>
                                        <h4 className="text-[18px] font-semibold text-[#0f172a] mb-6">{item.t}</h4>
                                    </div>
                                ))}
                                <p className="text-[15px] text-[#475569] leading-[1.6] font-bold">We don't just optimize for clicks.
                                    We optimize for AI trust. </p>
                            </div>
                        </div>
                        <div ref={techStackRef} className="bg-[#f8fafc] p-[50px] rounded-[40px] border border-[#e2e8f0]">
                            <div className="flex items-center gap-[15px] mb-[30px]">
                                <Cpu size={32} className="text-[#0066cc]" />
                                <h3 className="text-[28px] font-semibold text-[#0f172a]">Technology & Research Stack</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {techStack.map((item, i) => (
                                    <div ref={el => techItemsRef.current[i] = el} key={i} className="p-[25px] bg-white rounded-[20px] border border-[#e2e8f0] text-center transition-all duration-300 hover:shadow-lg">
                                        <div className="text-[#0066cc] mb-[15px] flex justify-center">{item.icon}</div>
                                        <span className="text-sm font-semibold text-[#0f172a]">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of LLM Optimization */}
            <section className="py-20 bg-[#f8fafc] text-center">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-5 text-[#0f172a]">Benefits of LLM Optimization</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                        Future-proofing your brand's presence in the AI era.
                    </p>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {benefits.map((item, i) => (
                            <div ref={el => benefitCardsRef.current[i] = el} key={i} className="w-[calc(33.333%-20px)] min-w-[300px] p-10 bg-white rounded-[30px] border border-[#e2e8f0] text-left transition-all duration-300 hover:-translate-y-[5px] hover:border-[#0066cc]">
                                <div className="bg-[#e0f2fe] w-[50px] h-[50px] rounded-[15px] flex items-center justify-center mb-6">
                                    <CheckCircle2 size={24} className="text-[#0066cc]" />
                                </div>
                                <h4 className="text-[20px] font-bold text-[#0f172a] mb-3">{item.t}</h4>
                                <p className="text-[15px] text-[#475569] leading-[1.6] font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Needs LLM Optimization */}
            <section className="py-20 bg-[#0f172a] text-white text-center">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-5 text-white">Who Needs LLM Optimization?</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 max-w-[800px] mx-auto text-white font-medium">
                        If your audience is asking AI for recommendations, your brand must be optimized for it.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[30px]">
                        {audiences.map((aud, i) => (
                            <div ref={el => audienceBadgesRef.current[i] = el} key={i} className="p-[30px] bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)]">
                                <div className="text-[#60a5fa] mb-[15px] flex justify-center">{aud.icon}</div>
                                <h4 className="text-[18px] font-semibold">{aud.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-[100px] text-center bg-white">
                <div className="container">
                    <div ref={ctaRef} className="bg-[#f8fafc] p-[80px_40px] rounded-[40px] border border-[#e2e8f0]">
                        <Bot size={60} className="text-[#0066cc] mx-auto mb-6 brain-icon" />
                        <h2 className="text-[36px] font-bold text-[#0f172a] mb-6">Ready to Become AI-Discoverable?</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 max-w-[800px] mx-auto font-medium">
                            Search engines are evolving into answer engines. Businesses that adapt now will dominate tomorrow. Let's optimize your presence for the next generation of discovery.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-[#0066cc] text-white p-[20px_60px] rounded-[50px] text-[20px] font-bold no-underline transition-all duration-300 hover:-translate-y-[5px]">
                            Future-Proof Your Visibility <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LLMOptimization;
