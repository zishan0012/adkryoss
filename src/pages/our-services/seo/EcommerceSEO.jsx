import React from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart,
    Zap,
    BarChart3,
    Search,
    ArrowRight,
    Settings,
    CheckCircle2,
    TrendingUp,
    Globe,
    Layers,
    Layout,
    Link2,
    Users,
    FileText,
    PieChart
} from 'lucide-react';
import ecommerceseo from '../../../assets/SEO/ecommercehero.png';
const EcommerceSEO = () => {

    const framework = [
        {
            title: "Ecommerce SEO Audit & Growth Blueprint",
            icon: <Search size={32} />,
            desc: "We conduct a deep technical and commercial audit covering all growth roadblocks.",
            points: [
                "Crawlability & indexation issues",
                "Site architecture & category depth",
                "Product page optimization gaps",
                "Core Web Vitals & speed performance",
                "Structured data & schema gaps",
                "Competitor visibility mapping"
            ],
            extra: "This becomes your actionable growth roadmap."
        },
        {
            title: "Keyword Intelligence & Intent Mapping",
            icon: <TrendingUp size={32} />,
            desc: "Ranking for random keywords doesn’t generate revenue. We map intent.",
            points: [
                "Transactional keywords",
                "Commercial investigation terms",
                "Category-level search clusters",
                "Long-tail product modifiers",
                "Seasonal & trend-based demand"
            ],
            extra: "Each keyword is aligned to revenue potential, not just volume."
        },
        {
            title: "Technical Ecommerce SEO",
            icon: <Settings size={32} />,
            desc: "Your site structure defines your ranking potential in search engines.",
            points: [
                "Faceted navigation & filter handling",
                "Pagination strategy",
                "Canonicalization",
                "XML sitemap hierarchy",
                "Robots.txt optimization",
                "Internal linking architecture",
                "Mobile-first indexing readiness"
            ],
            extra: "We ensure your site is built for search engines and seamless user experience."
        },
        {
            title: "Category & Product Page Optimization",
            icon: <Layout size={32} />,
            desc: "Your product pages should sell and rank simultaneously.",
            points: [
                "SEO-optimized product descriptions",
                "Conversion-focused meta tags",
                "Structured schema (Product, Review, FAQ)",
                "Image alt tags & visual search signals",
                "User-generated content integration",
                "Trust-building elements"
            ],
            extra: "We transform static listings into search-optimized sales assets."
        },
        {
            title: "Content Commerce Strategy",
            icon: <FileText size={32} />,
            desc: "Content drives organic authority and assisted conversions.",
            points: [
                "Buying guides",
                "Comparison pages",
                "SEO landing pages",
                "FAQ clusters",
                "Seasonal campaign pages",
                "Blog-to-product internal funnels"
            ],
            extra: "This builds topical authority and drives ecommerce sales."
        },
        {
            title: "Ecommerce Link Building & Authority",
            icon: <Link2 size={32} />,
            desc: "Authority drives ranking dominance in competitive niches.",
            points: [
                "Digital PR outreach",
                "High-quality backlink acquisition",
                "Industry mentions",
                "Influencer collaborations",
                "Marketplace & partner citations"
            ],
            extra: "We build brand authority that translates into sustainable rankings."
        },
        {
            title: "CRO Integration",
            icon: <PieChart size={32} />,
            desc: "Traffic without conversions is wasted opportunity. We maximize impact.",
            points: [
                "User journey behavior",
                "Heatmaps & session insights",
                "Drop-off points",
                "CTA placement",
                "Product page UX"
            ],
            extra: "SEO and CRO must work together to maximize revenue impact."
        }
    ];

    const platforms = ["Shopify SEO", "WooCommerce SEO", "Magento SEO", "Custom Ecommerce Frameworks", "Headless Commerce Architecture"];
    const industries = ["Fashion & Apparel", "Electronics & Gadgets", "Beauty & Wellness", "Home & Lifestyle", "D2C Brands", "B2B Ecommerce"];

    const workingModel = [
        "Discovery & Business Understanding",
        "Competitive Benchmarking",
        "Technical & Commercial Audit",
        "Strategy Roadmap Development",
        "Execution & Optimization",
        "Continuous Performance Tracking",
        "Scale & Expansion"
    ];

    return (
        <div>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    {/* LEFT CONTENT */}
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1px] text-white">
                            Ecommerce SEO Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Turn Product Pages into Revenue Engines
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] text-white">
                            Ecommerce is no longer about just listing products. It’s about owning high-intent search moments. When customers search with buying intent, your store must appear first — not just visible, but irresistible.
                        </p>
                        <div className=" p-0  mb-6">
                            <p className="text-[18px] leading-[1.8] text-white m-0">
                                At Adkryoss managed by <span className="font-bold text-white">Clink Consultancy Services Private Limited</span>, we build performance-driven Ecommerce SEO strategies designed to increase visibility, improve product discoverability, and maximize conversion value.
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
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={ecommerceseo}
                                alt="Ecommerce SEO Services"
                                className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Ecommerce SEO */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-[40px] text-[#0f172a]">
                        Why Ecommerce SEO is a Growth Multiplier
                    </h2>
                    <p className="text-[16px] md:text-[18px] mb-6 max-w-[800px] mx-auto font-medium">
                        Online stores face complex SEO challenges. Without a structured SEO framework, even the best products stay invisible.
                    </p>
                    <div className="flex flex-wrap justify-center gap-[20px] mb-[60px]">
                        {[
                            "Thousands of dynamic URLs",
                            "Duplicate product descriptions",
                            "Technical crawl inefficiencies",
                            "Category cannibalization",
                            "Seasonal ranking volatility"
                        ].map((challenge, i) => (
                            <div key={i} className="p-[24px] bg-[#eff6ff] rounded-[15px] border-l-[5px] border-[#0066cc] flex items-center gap-[15px] transition-all duration-300 w-[calc(33.333%-14px)] min-w-[280px] flex-grow max-w-[380px] hover:-translate-y-[5px] hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(0,102,204,0.1)]">
                                <Zap size={20} className="text-[#0066cc]" />
                                <span className="font-semibold text-[#1e293b]">{challenge}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 font-medium">
                        Our approach blends technical precision, content depth, search intent mapping, and conversion intelligence to build scalable ecommerce growth.
                    </p>
                </div>
            </section>

            {/* Framework Section */}
            <section id="services" className="py-[80px] bg-[#f8fafc]">
                <div className="container">
                    <h2 className="text-[36px] font-bold text-center mb-[60px] text-[#0f172a]">
                        Our Ecommerce SEO Framework
                    </h2>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {framework.map((item, i) => (
                            <div key={i} className="bg-white p-[40px] rounded-[24px] border border-[#e2e8f0] w-[calc(33.333%-20px)] min-w-[320px] flex-grow max-w-[400px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer hover:-translate-y-[12px] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-[#0066cc]">
                                <div className="text-[#0066cc] mb-[20px]">{item.icon}</div>
                                <h3 className="text-[22px] font-semibold mb-[15px] text-[#0f172a]">
                                    {i + 1}. {item.title}
                                </h3>
                                <p className="text-[15px] text-[#475569] mb-[20px] leading-[1.6] font-medium">{item.desc}</p>
                                <ul className="list-none p-0 mb-[20px]">
                                    {item.points.map((pt, idx) => (
                                        <li key={idx} className="flex gap-[10px] mb-[20px] text-[14px] text-[#334155]">
                                            <CheckCircle2 size={16} className="text-[#0066cc] shrink-0 mt-[2px]" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[14px] text-[#0066cc] font-medium p-[15px] bg-[#eff6ff] rounded-[12px] m-0">
                                    {item.extra}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms & Industries */}
            <section className="py-[80px] bg-white">
                <div className="container">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[40px]">
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">Platforms We Work With</h2>
                            <div className="flex flex-wrap gap-[12px]">
                                {platforms.map((plat, i) => (
                                    <div key={i} className="py-[12px] px-[24px] bg-[#f8fafc] rounded-[50px] font-semibold text-[#1e293b] border border-[#e2e8f0]">{plat}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[36px] font-bold mb-[30px] text-[#0f172a]">Industries We Serve</h2>
                            <div className="flex flex-wrap gap-[12px]">
                                {industries.map((ind, i) => (
                                    <div key={i} className="py-[12px] px-[24px] bg-[#0066cc] text-white rounded-[50px] font-semibold">{ind}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Approach */}
            <section className="py-[80px] bg-[#0f172a] text-white">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-[50px] text-white">Why Choose Our Ecommerce SEO Approach?</h2>
                    <div className="flex flex-wrap justify-center gap-[20px]">
                        {[
                            "Revenue-first SEO strategy",
                            "Data-driven keyword targeting",
                            "Full-funnel search optimization",
                            "Technical + Content + Authority integration",
                            "Transparent reporting & measurable KPIs"
                        ].map((item, i) => (
                            <div key={i} className="py-[20px] px-[40px] bg-[rgba(255,255,255,0.05)] rounded-[15px] border border-[rgba(255,255,255,0.1)] font-semibold text-[18px] text-white transition-all duration-300 hover:bg-[#0066cc] hover:scale-[1.05]">
                                ✔ {item}
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 mt-[50px] max-w-[900px] text-white mx-auto font-medium">
                        Adkryoss managed by Clink Consultancy Services Private Limited doesn’t offer isolated SEO services — we build organic revenue ecosystems.
                    </p>
                </div>
            </section>

            {/* Our Working Model */}
            <section className="py-24 bg-slate-50">
                <div className="container overflow-x-auto lg:overflow-x-visible">
                    <h2 className="text-[36px] font-bold text-center mb-16 text-slate-900 leading-tight">
                        Our Working Model
                    </h2>
                    <div className="flex flex-nowrap lg:justify-center items-start gap-0 min-w-max lg:min-w-0 pb-6 lg:pb-0">
                        {workingModel.map((model, i) => (
                            <div key={i} className="flex items-start">
                                <div className="flex flex-col items-center text-center p-4 w-[145px] md:w-[160px]">
                                    <div className="flex items-center justify-center gap-3 mb-4 w-full">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold text-lg md:text-xl shrink-0 shadow-lg shadow-blue-600/20">
                                            {i + 1}
                                        </div>
                                        {i < workingModel.length - 1 && (
                                            <ArrowRight size={20} className="text-[#0066CC]/30 hidden lg:block" />
                                        )}
                                    </div>
                                    <span className="font-bold text-slate-900 text-[13px] md:text-[14px] leading-tight text-center">{model}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-[20px] font-bold text-[#0066CC] mt-16 italic">
                        We operate as your extended growth partner — not just a vendor
                    </p>
                </div>
            </section>

            {/* Results You Can Expect */}
            <section className="py-[80px] bg-[#f8fafc]">
                <div className="container text-center">
                    <h2 className="text-[36px] font-bold mb-[50px] text-[#0f172a]">Results You Can Expect</h2>
                    <div className="flex flex-wrap justify-center gap-[20px] mb-[40px]">
                        {[
                            { title: "Organic Visibility", txt: "Higher organic product visibility" },
                            { title: "Rankings", txt: "Improved category rankings" },
                            { title: "Traffic", txt: "Increased non-branded traffic" },
                            { title: "Conversions", txt: "Better conversion rates" },
                            { title: "Cost Savings", txt: "Reduced dependency on paid ads" },
                            { title: "Revenue", txt: "Long-term scalable revenue growth" }
                        ].map((item, i) => (
                            <div key={i} className="p-[30px] bg-white rounded-[20px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] w-[calc(33.333%-14px)] min-w-[250px] flex-grow max-w-[350px]">
                                <h3 className="text-[18px] font-semibold mb-[10px] text-[#0066cc]">{item.title}</h3>
                                <p className="text-[#334155] font-medium m-0">{item.txt}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 italic font-medium">
                        Ecommerce SEO is not a one-time fix. It’s a continuous growth engine.
                    </p>
                </div>
            </section>


            {/* Final CTA */}
            <section className="py-[100px] text-center bg-gradient-to-br from-[#0066cc] to-[#004e92] text-white">
                <div className="container">
                    <h2 className="text-[36px] font-bold mb-[24px] text-white">
                        Ready to Scale Your Ecommerce Revenue?
                    </h2>
                    <p className="text-[22px] mb-[40px] max-w-[800px] mx-auto text-[#eff6ff] font-medium">
                        If you want to dominate high-intent search and build sustainable organic revenue, it’s time to implement a strategic ecommerce SEO framework. Partner with Adkryoss and turn your store into a revenue powerhouse.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-[12px] bg-white text-[#0066cc] py-[20px] px-[50px] rounded-[50px] text-[18px] font-bold no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-[5px] hover:scale-[1.05]">
                        Start Your Growth Now
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EcommerceSEO;
