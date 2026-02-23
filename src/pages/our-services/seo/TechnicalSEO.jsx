import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Settings,
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
    Code,
    Smartphone,
    Layers,
    Lock,
    RefreshCcw,
    Gauge,
    TrendingUp,
    Building2,
    ShoppingCart,
    FileText,
    Rocket,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import technicalseo from '../../../assets/SEO/technicalseohero.png';
const TechnicalSEO = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (i) => {
        setOpenFaq(openFaq === i ? null : i);
    };

    const technicalFramework = [
        {
            title: "1. Comprehensive Technical Audit",
            icon: <Search size={32} />,
            desc: "We conduct deep-dive audits using advanced SEO tools and manual analysis to uncover hidden obstacles.",
            points: [
                "Crawl errors & indexation issues",
                "Core Web Vitals performance gaps",
                "Broken links & redirect chains",
                "XML sitemap & robots.txt errors",
                "Canonicalization conflicts",
                "JavaScript rendering problems",
                "Duplicate content signals"
            ],
            extra: "We don’t just identify issues — we prioritize them based on business impact."
        },
        {
            title: "2. Website Architecture Optimization",
            icon: <Layers size={32} />,
            desc: "Search engines rank structure before content. We ensure your site is easy to navigate and crawl.",
            points: [
                "Logical URL hierarchy",
                "Internal linking strategy",
                "Silo structuring for topical authority",
                "Breadcrumb implementation",
                "Crawl depth optimization"
            ],
            extra: "This ensures search bots can discover and understand every valuable page."
        },
        {
            title: "3. Core Web Vitals & Performance",
            icon: <Zap size={32} />,
            desc: "Speed is ranking power. Our team optimizes every aspect of your site's performance.",
            points: [
                "Largest Contentful Paint (LCP)",
                "Interaction to Next Paint (INP)",
                "Cumulative Layout Shift (CLS)",
                "Server response time",
                "Image compression & next-gen formats",
                "Lazy loading & code minification"
            ],
            extra: "Faster load times lead to improved engagement and lower bounce rates."
        }
    ];

    const additionalServices = [
        {
            title: "4. Mobile-First Optimization",
            icon: <Smartphone size={32} />,
            desc: "Google indexes the mobile version first. We ensure your website is fully responsive and touch-optimized.",
            points: [
                "Fully responsive design",
                "Mobile speed optimization",
                "Intrusive interstitial removal",
                "Touch-target optimization"
            ],
            extra: "Your website will perform seamlessly across devices."

        },
        {
            title: "5. Advanced Schema & Data",
            icon: <Code size={32} />,
            desc: "Structured data enhances your search visibility with rich snippets and higher CTR.",
            points: [
                "Organization & Service Schema",
                "FAQ Schema",

                "Breadcrumb Schema",
                "Product & Review Schema"
            ],
            extra: "This increases your chances of earning rich snippets and higher CTR."
        },
        {
            title: "6. Crawl Budget Optimization",
            icon: <Network size={32} />,
            desc: "Large websites often waste crawl budget. We ensure bots focus on your high-impact pages.",
            points: [
                "Block low-value pages",
                "Optimize pagination",
                "Improve internal linking ",
                "Remove thin & duplicate URLs",
                "Consolidate redundant pages"
            ],
            extra: "This ensures Google focuses only on your high-impact pages."
        },
        {
            title: "7. Secure & Clean Infrastructure",
            icon: <Lock size={32} />,
            desc: "Technical SEO also protects your brand reputation.",
            points: [
                "HTTPS implementation ",
                "Mixed content fixes ",
                "Malware & spam checks  ",
                "Log file analysis ",
                "404 & 410 management "
            ],
            extra: "A clean website builds search engine trust."
        }
    ];

    const workingApproach = [
        { step: "Step 1", title: "Audit & Benchmarking", desc: "We evaluate current technical health and define growth benchmarks." },
        { step: "Step 2", title: "Roadmap Development", desc: "We create a prioritized implementation roadmap aligned with business goals." },
        { step: "Step 3", title: "Implementation", desc: "We work alongside developers to ensure flawless execution." },
        { step: "Step 4", title: "Testing & Validation", desc: "We validate improvements using performance monitoring tools." },
        { step: "Step 5", title: "Continuous Monitoring", desc: "SEO is ongoing. We track, refine, and optimize continuously." }
    ];

    const faqs = [
        {
            question: "How long does Technical SEO take to show results?",
            answer: "Initial improvements can be visible within 4–8 weeks, depending on site complexity."
        },
        {
            question: "Is Technical SEO a one-time process?",
            answer: "No. Websites evolve. Continuous monitoring ensures long-term growth."
        },
        {
            question: "Can Technical SEO improve conversions?",
            answer: "Yes. Faster speed and better usability directly impact user experience and conversion rates."
        }
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
                            Technical SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            The Foundation of Your Digital Growth
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Technical SEO is not just about fixing errors. It’s about engineering <br />a website that search engines trust, crawl efficiently, and rank confidently.
                        </p>
                        <div className="p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we build technical frameworks that ensure search engines crawl, index, and rank your website with maximum efficiency.
                            </p>
                        </div>

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
                                src={technicalseo}
                                alt="Technical SEO Services"
                                className="max-w-[450px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Technical SEO Section */}
            <section className="pt-32 pb-24 bg-white relative">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">
                            Why Technical SEO Is Non-Negotiable in 2026
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 max-w-[800px] mx-auto font-medium">
                            Search engines have evolved. Core Web Vitals, crawl efficiency, structured data, and mobile-first indexing are no longer optional.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                If your technical infrastructure is weak, your entire SEO strategy suffers:
                            </p>
                            {[
                                "Rankings stagnate despite great content",
                                "Crawl budget gets wasted on low-value pages",
                                "New pages remain undiscovered for weeks",
                                "Conversions silently drop due to poor performance"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="bg-[#0066cc] text-white rounded-full p-1">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-[18px] font-medium text-slate-900">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-slate-50 p-10 rounded-[30px] border border-slate-100 italic transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
                            <Lock size={48} className="text-[#0066cc] mb-5" />
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed font-medium">
                                "Technical SEO ensures your website performs flawlessly — for both users and search engines. "
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">
                            Our Technical SEO Framework
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 font-medium">
                            We follow a strategic, data-backed and scalable methodology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {technicalFramework.map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-[#0066cc] group">
                                <div className="text-[#0066cc] mb-5">{item.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 mb-5 leading-relaxed font-medium">{item.desc}</p>
                                <ul className="list-none p-0 space-y-3">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-2 text-[15px] text-slate-700">
                                            <div className="text-[#0066cc] mt-1 shrink-0"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[14px] font-medium text-[#0066cc] mt-6">{item.extra}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {additionalServices.map((item, i) => (
                            <div key={i} className="w-full md:w-[calc(33.333%-22px)] min-w-[300px] bg-white p-10 rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-[#0066cc]">
                                <div className="text-[#0066cc] mb-5">{item.icon}</div>
                                <h3 className="text-[24px] font-semibold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 mb-5 leading-relaxed font-medium">{item.desc}</p>
                                <ul className="list-none p-0 space-y-3">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex gap-2 text-[15px] text-slate-700">
                                            <div className="text-[#0066cc] mt-1 shrink-0"><CheckCircle2 size={14} /></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[14px] font-medium text-[#0066cc] mt-6">{item.extra}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Approach */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5">Our Working Approach</h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 font-medium">
                            We combine strategic planning with technical execution.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {workingApproach.map((item, i) => (
                            <div key={i} className="flex-1 min-w-[240px] max-w-[300px] bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 group">
                                <div className="text-[14px] font-bold text-[#0066cc] mb-3 uppercase tracking-wider">{item.step}</div>
                                <h4 className="text-[18px] font-bold text-slate-900 mb-3">{item.title}</h4>
                                <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Who Needs Technical SEO & Why Choose Us */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-[36px] font-bold mb-10 text-white leading-tight">Who Needs Technical SEO?</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: "Enterprise websites", icon: <Building2 size={18} /> },
                                    { name: "E-commerce stores", icon: <ShoppingCart size={18} /> },
                                    { name: "SaaS platforms", icon: <Cpu size={18} /> },
                                    { name: "Content-heavy portals", icon: <FileText size={18} /> },
                                    { name: "Startups preparing for scale", icon: <Rocket size={18} /> },
                                    { name: "Websites facing ranking drops", icon: <TrendingUp size={18} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 p-5 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50">
                                        <span className="text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                                        <span className="text-[15px] font-medium">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[16px] md:text-[18px] mb-6 mt-8 text-slate-300 italic font-medium">
                                If your site has more than 50 pages, technical SEO is critical.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-[36px] font-bold mb-10 text-white leading-tight">Why Choose Us</h2>
                            <div className="space-y-8">
                                {[
                                    { t: "Data-driven execution", d: "Every fix is backed by hard search data." },
                                    { t: "Transparent reporting", d: "No technical jargon, just clear results." },
                                    { t: "Enterprise-level tools", d: "We use the same tech as global giants." },
                                    { t: "Agile implementation", d: "Faster deployment of critical fixes." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="mt-1 shrink-0"><ArrowRight size={24} className="text-blue-400 group-hover:translate-x-1 transition-transform" /></div>
                                        <div>
                                            <h4 className="text-[20px] font-bold text-white mb-2">{item.t}</h4>
                                            <p className="text-slate-300 leading-relaxed text-[16px] font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: Tools & Results */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="md:border-r border-slate-100 md:pr-16">
                            <h2 className="text-[36px] font-bold mb-8 text-slate-900 leading-tight">What Makes Our Technical SEO Different?</h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "GSC", "GA4", "Screaming Frog", "Ahrefs", "SEMrush", "PageSpeed Insights", "GTmetrix", "Schema Generators", "CDN Tools"
                                ].map((tool, i) => (
                                    <span key={i} className="px-5 py-2 bg-slate-50 text-slate-800 rounded-full text-[14px] font-bold border border-slate-100 transition-all hover:bg-white hover:border-[#0066cc] hover:text-[#0066cc]">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-8 text-slate-600 leading-relaxed text-[16px] font-medium">We combine automation with expert analysis for precision results.</p>
                        </div>
                        <div>
                            <h3 className="text-[28px] font-semibold mb-10 text-slate-900">Results You Can Expect</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    "Improved crawl efficiency",
                                    "Faster indexing",
                                    "Higher keyword rankings",
                                    "Better Core Web Vitals",
                                    "Increased organic traffic",
                                    "Higher user engagement"
                                ].map((res, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="bg-green-50 p-2 rounded-lg text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                                            <TrendingUp size={18} />
                                        </div>
                                        <span className="font-bold text-slate-800">{res}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <h2 className="text-[36px] font-bold text-center mb-16 text-slate-900">Frequently Asked Questions</h2>
                    <div className="max-w-[800px] mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className="mb-[15px] border border-slate-200 rounded-[15px] overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className={`w-full p-[20px_30px] flex justify-between items-center transition-all duration-300 border-none cursor-pointer ${openFaq === i ? 'bg-[#f8fafc]' : 'bg-white'}`}
                                >
                                    <span className="text-[18px] font-bold text-slate-900 text-left">{faq.question}</span>
                                    {openFaq === i ? <ChevronUp size={20} className="text-[#0066cc]" /> : <ChevronDown size={20} className="text-slate-400" />}
                                </button>
                                {openFaq === i && (
                                    <div className="p-[20px_30px] bg-white border-t border-slate-100">
                                        <p className="m-0 text-slate-600 leading-[1.7] text-[16px] font-medium">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center bg-gradient-to-br from-[#0066cc] to-[#004999] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-6 text-white leading-tight">Let’s Strengthen Your Digital Foundation</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 opacity-90 max-w-[800px] mx-auto leading-relaxed font-medium">
                        Partner with Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span> and build a website that search engines trust — and customers love.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066cc] py-5 px-12 rounded-full text-[18px] font-bold no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 hover:scale-[1.05] hover:shadow-white/20">
                        Unlock Your Search Potential
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TechnicalSEO;
