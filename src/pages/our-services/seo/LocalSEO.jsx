import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const LocalSEO = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (i) => {
        setOpenFaq(openFaq === i ? null : i);
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
        { name: "Home Services  ", icon: <Home size={24} />, desc: "Home services business." },
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
        <div style={{ backgroundColor: '#fff' }}>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-16 h-120 md:py-20 flex items-center relative overflow-hidden text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[48px] font-bold mb-[16px] tracking-[-1.5px] text-white leading-[1.1]">
                            Local SEO Optimization
                        </h1>
                        <h3 className="text-[24px] font-medium mb-[24px] text-white">
                            Turning Local Searches into Real Customers
                        </h3>
                        <p className="text-[18px] leading-[1.8] text-white mb-[32px]">
                            Today’s customers don’t browse directories—they search on Google. 70%+ of local searches result in a visit or inquiry within 24 hours. If you're not in the Top 3 Map Pack, you're invisible. We help you dominate your geography.
                        </p>
                        <div className="bg-[rgba(255,255,255,0.05)] p-[24px] rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px]">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we help businesses dominate local search ecosystems and drive consistent foot traffic.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10">
                        <img
                            src="https://www.techmagnate.com/wp-content/uploads/2026/01/Local-SEO.webp"
                            alt="Local SEO"
                            className="max-w-[450px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </div>
                </div>
            </section>

            {/* Why Matters */}
            <section className="py-[80px] bg-white">
                <div className="container">
                    <div className="grid grid-cols-[minmax(300px,1fr)_1.2fr] gap-[60px] items-center">
                        <div>
                            <h2 className="text-[42px] font-bold mb-[30px] text-[#0f172a]">
                                Why Local SEO Matters
                            </h2>
                            <p className="text-[18px] text-[#475569] leading-[1.8] mb-[24px]">
                                Customers are searching for your services right now. If your business is not ranking in the Google Local Pack or Maps, you are losing ready-to-buy customers to your competitors.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: "Google Local Pack (Top 3)", d: "Highest conversion area on the SERP." },
                                    { t: "Google Maps Results", d: "Dominating on-the-go searches." },
                                    { t: "Geo-Organic Rankings", d: "Ranking for 'near me' intent queries." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[15px]">
                                        <div className="text-[#0066cc] mt-[4px]"><MapPin size={24} /></div>
                                        <div>
                                            <h4 className="text-[18px] font-bold text-[#0f172a] mb-[4px]">{item.t}</h4>
                                            <p className="text-[15px] text-[#64748b]">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#f8fafc] p-[40px] rounded-[30px] border border-[#e2e8f0]">
                            <h3 className="text-[24px] font-bold mb-[30px] text-[#0f172a]">Industries We Dominate:</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {industries.map((ind, i) => (
                                    <div key={i} className="p-[20px] bg-white rounded-[15px] flex gap-[12px] items-center border border-[#e2e8f0]">
                                        <div className="text-[#0066cc]">{ind.icon}</div>
                                        <span className="font-semibold text-[15px] text-[#0f172a]">{ind.name}</span>
                                    </div>
                                ))}
                            </div>
                            {/* <div style={{ marginTop: '30px', padding: '20px', background: '#0066cc', borderRadius: '15px', color: '#fff', textAlign: 'center' }}>
                                <p style={{ fontWeight: '600', margin: 0 }}>Multi-location Enterprises & Franchises Specialists</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-[80px] bg-[#f8fafc]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[42px] font-bold mb-[20px] text-[#0f172a]">Our Local SEO Approach</h2>
                        <p className="text-[20px] text-[#64748b] font-medium">We don't just optimize listings. We build local authority.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[40px]">
                        {approach.map((pillar, i) => (
                            <div key={i} className="w-[calc(33.333%-27px)] min-w-[350px] bg-white p-[50px_40px] rounded-[24px] border border-[#e2e8f0] transition-all duration-300 grow max-w-[380px] hover:-translate-y-[10px] hover:border-[#0066cc] hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)]">
                                <div className="text-[#0066cc] mb-[24px]">{pillar.icon}</div>
                                <h3 className="text-[24px] font-bold mb-[20px] text-[#0f172a]">{pillar.title}</h3>
                                <p className="text-[16px] text-[#475569] mb-[30px] leading-[1.6]">{pillar.desc}</p>
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
            <section className="py-[80px] bg-white">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[42px] font-bold mb-[20px] text-[#0f172a]">Our Local SEO Process</h2>
                        <p className="text-[20px] text-[#64748b]">We don’t just list you. We lead you to the top.</p>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]">
                        {localSEOProcess.map((step, i) => (
                            <div key={i} className="p-[40px] bg-[#f8fafc] rounded-[30px] border border-[#e2e8f0] transition-all duration-300 hover:border-[#0066cc]">
                                <h4 className="text-[18px] font-bold text-[#0066cc] mb-[15px]">{step.t}</h4>
                                <p className="text-[15px] text-[#475569] leading-[1.6]">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-[80px] bg-[#0f172a] text-white">
                <div className="container">
                    <h2 className="text-[42px] font-bold text-center mb-[60px] text-white">What Makes Our Local SEO Different?</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]">
                        {[
                            { t: "Data-Driven Geo Targeting", d: "Precision mapping of profitable neighborhoods." },
                            { t: "Advanced Schema Implementation", d: "Rich results that drive higher map CTR." },
                            { t: "Multi-Location Frameworks", d: "Unified strategy for businesses with 1 to 100+ stores." },
                            { t: "AI-Assisted Management", d: "Smart analysis of reviews and GMB engagement data." }
                        ].map((item, i) => (
                            <div key={i} className="p-[30px] bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-[rgba(255,255,255,0.1)]">
                                <h4 className="text-[20px] font-bold text-[#60a5fa] mb-[12px]">{item.t}</h4>
                                <p className="text-[15px] text-[#cbd5e1]">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-[80px] bg-white">
                <div className="container">
                    <h2 className="text-[42px] font-bold text-center mb-[60px] text-[#0f172a]">Local SEO Intelligence (FAQs)</h2>
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
                                        <p className="m-0 text-[#475569] leading-[1.7] text-[16px]">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-[100px] text-center bg-gradient-to-br from-[#0066cc] to-[#00458a] text-white">
                <div className="container">
                    <h2 className="text-[56px] font-bold mb-[24px]">Ready to Dominate Local Search?</h2>
                    <p className="text-[22px] mb-[40px] max-w-[800px] mx-auto text-white">
                        Your competitors are investing in local visibility. It's time you outrank them. Partner with Adkryoss and turn local searches into real customers.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-[12px] bg-white text-[#0066cc] p-[20px_60px] rounded-[50px] text-[20px] font-bold transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                        Start Your Local Strategy Today <ArrowRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LocalSEO;
