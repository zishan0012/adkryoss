import React from 'react';
import { Link } from 'react-router-dom';
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

const JavascriptSEO = () => {

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
                            JavaScript SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Make Your Dynamic Website Search-Ready
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Modern websites run on JavaScript. Google doesn't always. If your content loads after rendering, search engines might never see it. We ensure your JS-driven website is fully crawlable, indexable, and optimized for maximum visibility.
                        </p>
                        {/* <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we bridge the gap between advanced development and search engine accessibility.
                            </p>
                        </div> */}

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
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={javascripthero}
                                alt="JavaScript SEO"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Matters Section */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-[minmax(300px,1fr)_1.2fr] gap-[60px] items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">
                                Why JavaScript SEO Matters
                            </h2>
                            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] font-medium">
                                Today's websites rely heavily on frameworks like React, Angular, and Vue. While they deliver speed and user experience, they often create invisible barriers for search engines.
                            </p>
                            <div className="space-y-4">
                                {jsOfferings.map((item, i) => (
                                    <div key={i} className="flex gap-[15px] items-start">
                                        <div className="text-[#0066cc] mt-1">{item.icon}</div>
                                        <div>
                                            <h4 className="text-[18px] font-semibold text-[#0f172a] mb-1">{item.title}</h4>
                                            <p className="text-[15px] text-[#64748b] font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm translate-x-20">
                            <img
                                src={javascriptseo}
                                alt="js seo strategy"
                                className="max-w-[350px] w-full rounded-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* Approach Section */}
            <section id="services" className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[36px] font-bold mb-5 text-[#0f172a]">
                            Our JavaScript SEO Approach
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                            Technical Precision. Strategic SEO Engineering.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        {framework.map((phase, i) => (
                            <div key={i} className="w-[calc(33.333%-27px)] min-w-[350px] bg-white p-[50px_40px] rounded-[24px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden border border-[#e2e8f0] flex-grow max-w-[450px] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] hover:border-[#0066cc]">
                                <div className="text-[#0066cc] mb-6">{phase.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-5 text-[#0f172a]">{phase.title}</h3>
                                <p className="text-[16px] text-[#475569] mb-[30px] leading-[1.7] font-medium">{phase.desc}</p>
                                <ul className="space-y-6">
                                    {phase.points.map((pt, idx) => (
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

            {/* Framework Expertise */}
            <section className="py-20 bg-[#0f172a] text-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-5 text-white">Framework-Specific Expertise</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 max-w-[800px] mx-auto text-white font-medium">
                        Whether you're running eCommerce, SaaS, or an Enterprise app, we align SEO with your development stack.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {techExpertise.map((tech, i) => (
                            <div key={i} className="p-[30px_40px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[20px] flex flex-col items-center gap-[15px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:-translate-y-[5px]">
                                <div className="text-[#60a5fa]">{tech.icon}</div>
                                <span className="font-semibold text-base">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries we support */}
            <section className="py-20 bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-5 text-[#0f172a]">Industries We Support</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                        Each industry demands a custom rendering and crawl strategy, which we design with long-term scalability in mind.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {industries.map((ind, i) => (
                            <div key={i} className="p-10 bg-[#f8fafc] rounded-[30px] border border-[#e2e8f0] text-left transition-all duration-300 hover:border-[#0066cc] hover:-translate-y-1.5 ">
                                <div className="text-[#0066cc] mb-5">{ind.icon}</div>
                                <h4 className="text-[20px] font-bold text-[#0f172a] mb-2.5">{ind.name}</h4>
                                <p className="text-[15px] text-[#475569] leading-[1.6] font-medium">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Model & Why Choose Us */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Working Model */}
                        <div className="bg-white p-[50px] rounded-[40px] border border-[#e2e8f0]">
                            <div className="flex items-center gap-[15px] mb-[30px]">
                                <BarChart3 size={32} className="text-[#0066cc]" />
                                <h3 className="text-[28px] font-semibold text-[#0f172a]">Our Working Model</h3>
                            </div>
                            <p className="text-base text-[#64748b] mb-6 leading-[1.6] font-medium">
                                We don’t treat JavaScript SEO as a one-time fix. It’s an ongoing technical alignment process.
                            </p>
                            <div className="flex flex-wrap gap-2.5 mb-[30px]">
                                {workingModelSteps.map((step, i) => (
                                    <React.Fragment key={i}>
                                        <span className="p-[8px_16px] bg-[#f0f9ff] text-[#0066cc] rounded-[20px] font-semibold text-sm border border-[#bae6fd]">
                                            {step}
                                        </span>
                                        {i < workingModelSteps.length - 1 && <span className="text-[#94a3b8] flex items-center">→</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                            <p className="text-[15px] text-[#475569] leading-[1.6] font-medium">
                                At Adkryoss managed by <span className="font-semibold text-[#0f172a]">Clink Consultancy Services Private Limited</span>, we collaborate with your developers, track rendering performance after deployment, and continuously optimize based on real search data.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-white p-[50px] rounded-[40px] border border-[#e2e8f0]">
                            <div className="flex items-center gap-[15px] mb-[30px]">
                                <Lightbulb size={32} className="text-[#0066cc]" />
                                <h3 className="text-[28px] font-semibold text-[#0f172a]">Why Choose Us</h3>
                            </div>
                            <div className="space-y-6">
                                {whyChooseUs.map((item, i) => (
                                    <div key={i} className="flex gap-[15px]">
                                        <div className="w-2 h-2 bg-[#0066cc] rounded-full mt-2.5 shrink-0"></div>
                                        <h4 className="text-[18px] font-semibold text-[#0f172a]">{item}</h4>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-[30px] text-base text-[#64748b] italic border-t border-[#f1f5f9] pt-5 font-medium">
                                "We combine strategy, engineering precision, and performance marketing to deliver measurable ranking improvements."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">
                                What Results You Can Expect
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Improved Crawl Coverage", d: "Ensure 100% of your critical pages are reached by search engines." },
                                    { t: "Faster Indexing", d: "Content appears in search results hours or days faster." },
                                    { t: "Enhanced Core Web Vitals", d: "Leaner JS execution for better user experience scores." },
                                    { t: "Higher Organic Visibility", d: "Unblock rankings held back by technical rendering issues." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[15px]">
                                        <CheckCircle2 size={24} className="text-[#0066cc] shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-[18px] font-bold text-[#0f172a] mb-1">{item.t}</h4>
                                            <p className="text-[15px] text-[#475569] font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#f8fafc] p-[50px] rounded-[30px] border border-[#e2e8f0] text-center">
                            <Activity size={60} className="text-[#0066cc] mx-auto mb-6" />
                            <h3 className="text-[24px] font-semibold text-[#0f172a] mb-4">Ready to Scale?</h3>
                            <p className="text-[#64748b] text-[17px] mb-8 font-medium">
                                JavaScript should power your growth — not block it. Let's make your dynamic website search-ready.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2.5 bg-[#0066cc] text-white p-[15px_40px] rounded-[50px] font-semibold no-underline transition-all duration-300 hover:scale-105">
                                Talk to JS SEO Experts <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JavascriptSEO;
