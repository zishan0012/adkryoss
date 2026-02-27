import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import seocopywritinghero from "../../../assets/content-marketing/seocopywritinghero.png";
import {
    PenTool,
    Target,
    BarChart3,
    Search,
    Zap,
    Users,
    ArrowRight,
    CheckCircle2,
    Layout,
    Layers,
    ShoppingCart,
    MessageSquare,
    Globe,
    FileText,
    Settings,
    ChevronDown,
    ChevronUp,
    Brain,
    Rocket,
    ShieldCheck
} from 'lucide-react';

const SEOCopywriting = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const services = [
        {
            icon: <Layout size={32} />,
            title: "Website Copy",
            desc: "Conversion-driven landing pages, service pages, and homepage content built with structured SEO architecture."
        },
        {
            icon: <FileText size={32} />,
            title: "Blog & Thought Leadership",
            desc: "High-authority blog content aligned with search intent, topical clusters, and semantic relevance."
        },
        {
            icon: <ShoppingCart size={32} />,
            title: "Product & E-commerce Copy",
            desc: "Optimized product descriptions that increase discoverability and improve purchase decisions."
        },
        {
            icon: <Search size={32} />,
            title: "SEO Content Strategy",
            desc: "Keyword mapping, search intent research, content gap analysis, and competitor benchmarking."
        },
        {
            icon: <Settings size={32} />,
            title: "Technical SEO Copy Alignment",
            desc: "Optimized meta tags, schema-informed content structuring, internal linking architecture, and snippet optimization."
        }
    ];

    const strategySteps = [
        {
            step: "01",
            title: "Search Intelligence",
            desc: "We analyze search behavior, keyword clusters, competitor positioning, and content gaps."
        },
        {
            step: "02",
            title: "Intent Mapping",
            desc: "Every page is mapped to transactional, informational, or navigational intent for clarity and ranking precision."
        },
        {
            step: "03",
            title: "Authority-Driven Writing",
            desc: "We create content aligned with EEAT principles (Experience, Expertise, Authoritativeness, Trustworthiness)."
        },
        {
            step: "04",
            title: "Conversion Engineering",
            desc: "Clear CTAs, psychological triggers, structured formatting, and persuasive storytelling."
        },
        {
            step: "05",
            title: "Continuous Optimization",
            desc: "Performance tracking, SERP monitoring, and content refresh cycles for sustained ranking growth."
        }
    ];

    const differentiators = [
        {
            title: "Data-First Framework",
            desc: "Every word is backed by research — no guesswork, no fluff."
        },
        {
            title: "AI + Human Synergy",
            desc: "We combine advanced SEO tools with strategic human creativity to maintain originality and performance."
        },
        {
            title: "Topical Authority Building",
            desc: "Cluster-based content ecosystems that dominate niche search landscapes."
        },
        {
            title: "Conversion-Centric Writing",
            desc: "Not just impressions — measurable business outcomes."
        }
    ];

    const industries = [
        "E-commerce & Retail",
        "EdTech & Online Learning",
        "Healthcare & Wellness",
        "SaaS & Technology",
        "Real Estate & Infrastructure",
        "Professional Services"
    ];

    const results = [
        "Improved keyword rankings",
        "Higher organic visibility",
        "Better engagement metrics",
        "Increased conversion rates",
        "Stronger domain authority"
    ];

    const faqs = [
        {
            q: "How is SEO copywriting different from regular content writing?",
            a: "SEO copywriting aligns content with search intent, keyword strategy, and technical optimization while maintaining persuasive communication."
        },
        {
            q: "How long does it take to see results?",
            a: "Organic growth typically begins within 3–4 months, depending on competition and domain strength."
        },
        {
            q: "Do you optimize existing content?",
            a: "Yes. We conduct content audits and re-optimization strategies to improve underperforming pages."
        }
    ];

    return (
        <div className="bg-white text-slate-900">
            {/* Hero Section */}
            {/* <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            SEO Copywriting Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Write to Rank. Write to Convert.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-2 leading-[1.8] font-medium text-white">
                            Search engines read structure. Humans read stories. <br />
                            We craft SEO copy that speaks to both — strategically optimized, conversion-focused, and built for long-term organic growth.
                        </p>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            Adkryoss managed by <span className="font-semibold text-white">Clink Consultancy Services Private Limited</span> delivers data-backed SEO copywriting that drives rankings, authority, and revenue — not just traffic.
                        </p>

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
                                src={seocopywritinghero}
                                alt="SEO Copywriting"
                                className="max-w-[450px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] rounded-2xl"
                            /></div>
                    </div>
                </div>
            </section> */}


            <section
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px] space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          SEO Copywriting Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-blue-100">
        Write to Rank. Write to Convert.
      </h3>

      <p className="text-gray-200 leading-relaxed font-medium">
        Search engines read structure. Humans read stories. <br />
        We craft SEO copy that speaks to both — strategically optimized, conversion-focused, and built for long-term organic growth.
      </p>

      <p className="text-gray-200 leading-relaxed">
        Adkryoss managed by <span className="font-semibold text-white">Clink Consultancy Services Private Limited</span> delivers data-backed SEO copywriting that drives rankings, authority, and revenue — not just traffic.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-full 
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Speak to Our Expert →
        </a>

        <a
          href="#services"
          className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold 
                     transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
        >
          Our Services →
        </a>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end relative z-10">
      <div className="relative group w-full max-w-[450px]">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <img
          src={seocopywritinghero}
          alt="SEO Copywriting"
          className="relative w-full object-contain rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
        />
      </div>
    </div>

  </div>
</section>

            {/* Why SEO Copywriting Section */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-8 leading-tight">
                            Why SEO Copywriting Is a Growth Engine
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-relaxed max-w-4xl mx-auto font-medium">
                            Today’s search ecosystem is smarter than ever. With AI-powered search models, semantic indexing, and intent-based ranking signals, content must go beyond keywords.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                        {[
                            "Match search intent precisely",
                            "Demonstrate expertise and credibility",
                            "Answer real user questions comprehensively",
                            "Guide visitors toward meaningful action"
                        ].map((point, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 font-semibold text-slate-900 group transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-2">
                                <CheckCircle2 className="mx-auto mb-4 text-[#0066CC] group-hover:text-white transition-colors" size={28} />
                                {point}
                            </div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto p-10 bg-white rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#0066CC]"></div>
                        <p className="text-xl italic font-medium leading-relaxed m-0 text-slate-800">
                            Adkryoss managed by <span className="font-semibold text-[#0066CC]">Clink Consultancy Services Private Limited</span> blends search intelligence with persuasive storytelling to create content that ranks sustainably and converts consistently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">Our SEO Copywriting Services</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {services.map((item, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 rounded-2xl p-8 transition-all duration-300 w-full md:w-[calc(33.333%-27px)] min-w-[300px] max-w-[400px] grow cursor-pointer group hover:border-[#0066CC] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] flex flex-col shadow-sm">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#004999] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform mb-8 shadow-md">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] font-semibold text-slate-900 mb-4 group-hover:text-[#0066CC] transition-colors leading-tight uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed font-medium m-0">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Approach Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold mb-6 leading-tight text-white">Our Strategic Approach</h2>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {strategySteps.map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="text-blue-500 font-extrabold text-4xl mb-6 group-hover:scale-110 transition-transform opacity-50">{item.step}</div>
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white text-sm leading-relaxed m-0 font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center text-blue-400 font-extrabold relative italic">
                        "Adkryoss managed by Clink Consultancy Services Private Limited ensures that content is not published and forgotten — it is monitored, optimized, and scaled."
                    </div>
                </div>
            </section>

            {/* Differentiators Section */}
            <section className="py-24 bg-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6">What Makes Our SEO Copy Different</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {differentiators.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-xl transition-all duration-300 group text-center flex flex-col">
                                <div className="w-14 h-14 bg-blue-50 text-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0066CC] group-hover:text-white transition-all shadow-sm">
                                    <ShieldCheck size={28} />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed m-0 font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 max-w-5xl mx-auto">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-10 text-center leading-tight">Industries We Serve</h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {industries.map((industry, index) => (
                            <div key={index} className="px-8 py-5 bg-white border-2 border-slate-100 rounded-xl font-semibold text-slate-900 transition-all hover:border-[#0066CC] hover:text-[#0066CC] hover:-translate-y-1 shadow-sm">
                                {industry}
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-6 text-center text-slate-600 italic font-medium max-w-3xl mx-auto leading-relaxed">
                        Adkryoss managed by <span className="font-semibold text-[#0066CC]">Clink Consultancy Services Private Limited</span> adapts SEO copy frameworks according to industry search behavior and buyer journey complexity.
                    </p>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                <div className="container px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold mb-6 text-white">Results You Can Expect</h2>
                        <p className="text-xl text-blue-400 font-medium italic">"We don’t chase traffic. We build organic revenue channels."</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {results.map((point, index) => (
                            <div key={index} className="px-10 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl font-black text-xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 max-w-4xl mx-auto">
                    <h2 className="text-[36px] font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-blue-100 transition-colors">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-8 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                                >
                                    <span className="text-[20px] font-black text-slate-700">{faq.q}</span>
                                    {openFaq === index ? <ChevronUp className="text-[#0066CC]" /> : <ChevronDown className="text-slate-400" />}
                                </button>
                                {openFaq === index && (
                                    <div className="p-8 pt-0 bg-white text-[18px] text-slate-600 leading-relaxed font-medium">
                                        <div className="w-full h-px bg-slate-100 mb-8"></div>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-[36px] font-bold mb-8 leading-tight">Let’s Build Content That Compounds</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
                        Search visibility is not accidental — it’s engineered. <br />
                        Let <span className="font-black">Adkryoss managed by Clink Consultancy Services Private Limited</span> craft content assets that rank, resonate, and convert.
                    </p>
                    <div className="flex flex-col items-center gap-10">
                        <div className="text-2xl font-black italic">Ready to dominate organic search? Let’s get started.</div>
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066CC] py-6 px-16 rounded-[20px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:scale-105 active:scale-95">
                            Engineer My Success
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SEOCopywriting;