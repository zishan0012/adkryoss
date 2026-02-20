import React from 'react';
import { Link } from 'react-router-dom';
import hyperlocalhero from "../../../assets/SEO/hyperlocalhero.jpeg";
import {
    MapPin,
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
    Navigation,
    Smartphone,
    TrendingUp,
    Store,
    LocateFixed,
    ShoppingCart,
    Heart,
    Home,
    Utensils,
    GraduationCap,
    DollarSign
} from 'lucide-react';

const HyperLocalMarketing = () => {

    const hyperlocalSolutions = [
        {
            title: "Local SEO Optimization",
            icon: <Search size={32} />,
            desc: "Increase map pack rankings and organic local visibility.",
            points: [
                "Google Business Profile optimization",
                "Local citations & NAP consistency",
                "Geo-tagged content creation",
                "Location-specific landing pages"
            ]
        },
        {
            title: "Google Maps & Listings",
            icon: <Store size={32} />,
            desc: "Ensure your business stands out with accurate and compelling listings.",
            points: [
                "Listing creation & verification",
                "Map ranking optimization",
                "Reputation & review management",
                "Compelling business descriptions"
            ]
        },
        {
            title: "Hyperlocal Paid Advertising",
            icon: <Target size={32} />,
            desc: "Reach users within precise geographic boundaries with radius targeting.",
            points: [
                "Radius-targeted Google Ads",
                "Geo-targeted Meta Ads",
                "Programmatic local campaigns",
                "Proximity-based lead gen"
            ]
        },
        {
            title: "Location-Based Social Media",
            icon: <Navigation size={32} />,
            desc: "Engage neighborhood audiences and promote local offers.",
            points: [
                "Geo-targeted social campaigns",
                "Promote local store offers",
                "Increase in-store visits",
                "Neighborhood audience engagement"
            ]
        },
        {
            title: "Review & Reputation Management",
            icon: <Shield size={32} />,
            desc: "Build and manage local trust to drive conversions and rankings.",
            points: [
                "Strategic review building",
                "Reputation monitoring",
                "Strategic response management",
                "Local credibility enhancement"
            ]
        },
        {
            title: "Multi-Location Strategy",
            icon: <Network size={32} />,
            desc: "Scalable hyperlocal strategies for franchises and multi-outlet brands.",
            points: [
                "Independent location ranking",
                "Maintained brand consistency",
                "Scalable local SEO frameworks",
                "Franchise visibility management"
            ]
        }
    ];

    const targetingIndustries = [
        { name: "Restaurants & Cafés", icon: <Utensils size={18} /> },
        { name: "Healthcare & Hospitals", icon: <Heart size={18} /> },
        { name: "Retail Stores", icon: <ShoppingCart size={18} /> },
        { name: "Educational Institutes", icon: <GraduationCap size={18} /> },
        { name: "Real Estate & Builders", icon: <Home size={18} /> },
        { name: "Salons & Wellness", icon: <Zap size={18} /> },
        { name: "Local Service Providers", icon: <Users size={18} /> }
    ];

    const workingApproach = [
        { step: "01", title: "Geo-Intelligence Audit", desc: "Analyze local visibility and map ranking gaps." },
        { step: "02", title: "Localized Blueprint", desc: "Build a roadmap aligned with business objectives." },
        { step: "03", title: "Precision Execution", desc: "Execute geo-targeted ads and structured data." },
        { step: "04", title: "Continuous Optimization", desc: "Monitor insights and refine for performance." }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            Hyperlocal Marketing Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Dominate Your Neighborhood. Be the first choice when your customers search “near me.”
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Turn proximity into profit with data-driven hyperlocal marketing strategies that put your business exactly where buying decisions happen — on local searches, maps, feeds, and mobile screens.
                        </p>
                        {/* <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we help businesses capture local intent and drive footfall, calls, and real-time conversions.
                            </p>
                        </div> */}

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </a>
                            <a
                                href="#services"
                                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={hyperlocalhero}
                                alt="Hyperlocal Marketing Services"
                                className="max-w-[350px] w-full rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Hyperlocal Section */}
            <section className="py-[100px] bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-5">
                            What is Hyperlocal Marketing?
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 max-w-[850px] mx-auto font-medium">
                            Hyperlocal marketing focuses on targeting customers within a highly specific geographic area — a locality, pin code, or neighborhood.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-[#f8f9fa] p-[50px] rounded-[40px] border border-[#eee]">
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                In today’s mobile-first world, search queries like “best café near me” or “plumber nearby” are high-intent and conversion-ready.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 font-medium leading-[1.8]">
                                Adkryoss managed by Clink Consultancy Services Private Limited helps businesses capture this intent by combining location intelligence and local SEO to drive transactions.
                            </p>
                        </div>
                        <div className="bg-[#0f172a] p-[50px] rounded-[40px] text-white">
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white">
                                Why It Matters Now
                            </h3>
                            <div className="space-y-6">
                                {[
                                    "80%+ of local searches convert within 24h",
                                    "Google prioritizes map listings & local results",
                                    "Mobile users rely heavily on reviews & proximity",
                                    "Competition is shifting to local dominance"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="bg-blue-500 rounded-full p-1"><CheckCircle2 size={16} className="text-white" /></div>
                                        <span className="text-base font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-20 bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-5">
                            Our Hyperlocal Marketing Solutions
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Precision strategies designed to put your business exactly where buying decisions happen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hyperlocalSolutions.map((item, i) => (
                            <div key={i} className="flex-auto max-w-[400px] bg-white p-10 rounded-[24px] transition-all duration-300 border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#0066cc]">
                                <div className="text-[#0066cc] mb-5">{item.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-[15px] text-[#1a1a1a]">{item.title}</h3>
                                <p className="text-[#666] mb-5 leading-[1.6] text-[15px] font-medium">{item.desc}</p>
                                <ul className="list-none p-0">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-2 mb-2.5 text-[#444] text-[14px]">
                                            <div className="text-[#0066cc] mt-1"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Differences Section */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-8">What Makes Our Strategy Different?</h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                We focus on driving actions — calls, direction requests, walk-ins, and bookings — not just simple impressions.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { t: "Geo Segmentation", d: "Data-backed micro-level geographic targeting." },
                                    { t: "Mobile-First", d: "Campaigns structured for high-intent mobile users." },
                                    { t: "AI Clustering", d: "AI-powered keyword grouping for local intent." },
                                    { t: "Heat Mapping", d: "Advanced competitor visibility heat mapping." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 className="font-bold text-[#0066cc] mb-1">{item.t}</h4>
                                        <p className="text-[14px] text-[#666] font-medium">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#0f172a] p-10 md:p-[60px] rounded-[40px] text-white">
                            <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white">
                                Benefits You'll See
                            </h3>
                            <div className="space-y-6">
                                {[
                                    "Increased physical foot traffic",
                                    "Higher local search organic rankings",
                                    "Better ROI from geo-targeted ads",
                                    "Stronger neighborhood engagement",
                                    "Improved brand trust in locality",
                                    "Faster lead-to-conversion cycle"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="bg-blue-500 rounded-full p-1"><CheckCircle2 size={16} className="text-white" /></div>
                                        <span className="text-base font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Industries */}
            <section className="py-20 bg-[#f1f5f9]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-5">Industries We Serve</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Hyperlocal marketing bridges the gap between online discovery and offline conversion.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {targetingIndustries.map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5 bg-white p-[15px_25px] rounded-[12px] border border-[#e2e8f0] font-medium text-[#1e293b]">
                                <span className="text-blue-500">{item.icon}</span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Approach Section */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-5">Our Working Approach</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Adkryoss managed by Clink Consultancy Services Private Limited ensures you lead locally.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {workingApproach.map((item, i) => (
                            <div key={i} className="flex-auto max-w-[280px] bg-[#f8f9fa] p-[30px] rounded-[24px] text-center border border-[#eee]">
                                <div className="text-sm font-bold text-[#0066cc] mb-2.5">{item.step}</div>
                                <h4 className="text-[20px] font-bold text-[#1a1a1a] mb-2.5">{item.title}</h4>
                                <p className="text-[13px] text-[#666] leading-[1.6] font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Advantage / Why We? */}
            <section className="py-20 bg-[#0f172a] text-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="bg-[rgba(255,255,255,0.05)] p-10 md:p-[60px] rounded-[40px] border border-[rgba(255,255,255,0.1)]">
                            <TrendingUp size={48} className="text-blue-400 mb-6" />
                            <h3 className="text-[32px] font-semibold mb-5">Dominating Near-Me Search</h3>
                            <p className="text-[16px] md:text-[18px] mb-6 text-white font-medium">
                                If your customers are searching nearby, your business should be visible instantly. Early adoption means:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Lower acquisition cost", "Higher community trust", "Hyper-targeted leads", "Instant map visibility"].map((item, i) => (
                                    <div key={i} className="flex gap-2.5 items-center">
                                        <CheckCircle2 size={16} className="text-blue-400" />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[36px] font-bold text-white mb-8">Ready to Own Your Local Market?</h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white font-medium">
                                Adkryoss managed by Clink Consultancy Services Private Limited helps you build a hyperlocal growth engine that drives results in your immediate market.
                            </p>
                            <div className="p-[30px] bg-[rgba(59,130,246,0.1)] rounded-[20px] border-l-[4px] border-[#3b82f6]">
                                <p className="m-0 font-medium text-white">"Let’s make your business the most recommended name in your neighborhood."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#0066cc] to-[#004999] text-white text-center">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-5 text-white">Dominance Within Miles. Start Now.</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-100 text-white font-medium">
                        Turn proximity into profit. Partner with us and lead your local market.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2.5 bg-white text-[#0066cc] py-[18px] px-10 rounded-[50px] font-bold no-underline transition-all duration-300 hover:scale-[1.05]">
                        Start Your Hyperlocal Growth <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HyperLocalMarketing;
