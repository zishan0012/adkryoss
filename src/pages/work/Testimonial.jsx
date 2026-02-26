import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Rocket,
    TrendingUp,
    Target,
    BarChart3,
    Zap,
    CheckCircle2,
    ArrowRight,
    MessageSquare,
    Quote
} from 'lucide-react';
import testimonialhero from '../../assets/work/testimonialhero.png';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Section
            gsap.fromTo(".hero-content",
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 1, delay: 0.2,
                    scrollTrigger: {
                        trigger: ".hero-content",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo(".hero-image",
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1, scale: 1, duration: 1, delay: 0.4,
                    scrollTrigger: {
                        trigger: ".hero-image",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Testimonials Grid
            gsap.fromTo(".testimonial-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".testimonial-grid",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Why Clients Choose Us
            gsap.fromTo(".why-choose-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8,
                    scrollTrigger: {
                        trigger: ".why-choose-header",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo(".choice-point",
                { opacity: 0, x: -30 },
                {
                    opacity: 1, x: 0, duration: 0.6, stagger: 0.1,
                    scrollTrigger: {
                        trigger: ".choice-grid",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo(".why-choose-quote",
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1, scale: 1, duration: 1,
                    scrollTrigger: {
                        trigger: ".why-choose-quote",
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Final CTA
            gsap.fromTo(".cta-content",
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1, scale: 1, duration: 1,
                    scrollTrigger: {
                        trigger: ".cta-section",
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const testimonials = [
        {
            title: "Performance Marketing Transformation",
            icon: <Rocket className="text-blue-500" />,
            quote: "Our paid media campaigns were underperforming for months. After partnering with Adkryoss managed by Clink Consultancy Services Private Limited, we saw a 3.2X increase in ROAS within the first quarter. Their performance team doesn't just optimize ads — they optimize business outcomes. From audience structuring to creative intelligence and AI-driven bidding, everything was strategic and data-backed.",
            author: "E-commerce Brand, India"
        },
        {
            title: "SEO That Drives Revenue, Not Just Rankings",
            icon: <TrendingUp className="text-emerald-500" />,
            quote: "We were ranking for keywords, but traffic wasn't converting. The team at Adkryoss managed by Clink Consultancy Services Private Limited completely restructured our SEO strategy — focusing on search intent, technical SEO, and conversion optimization. Within 6 months, organic revenue increased by 78%. Their approach is structured, transparent, and ROI-focused.",
            author: "SaaS Company, Bengaluru"
        },
        {
            title: "Full-Funnel Digital Strategy",
            icon: <Target className="text-amber-500" />,
            quote: "What stood out was their clarity in execution. From competitor analysis to funnel mapping and attribution modeling, Adkryoss managed by Clink Consultancy Services Private Limited delivered a complete 360° digital ecosystem for our brand. Our lead quality improved significantly and cost-per-acquisition reduced by 41%.",
            author: "Real Estate Developer, Mumbai"
        },
        {
            title: "Social Media That Converts",
            icon: <MessageSquare className="text-purple-500" />,
            quote: "We wanted more than engagement — we wanted measurable growth. Their social media team built a performance-led content strategy combining trend intelligence, short-form video marketing, and paid amplification. Engagement increased by 150% and inbound inquiries doubled in 4 months.",
            author: "D2C Fashion Brand"
        },
        {
            title: "Data-Driven Decision Making",
            icon: <BarChart3 className="text-indigo-500" />,
            quote: "Their reporting system is unlike traditional agencies. With real-time dashboards, predictive analytics, and transparent KPIs, Adkryoss managed by Clink Consultancy Services Private Limited gave us complete visibility into campaign performance. It feels like having an in-house growth team.",
            author: "EdTech Platform"
        },
        {
            title: "Branding + Performance = Scalable Growth",
            icon: <Zap className="text-rose-500" />,
            quote: "Most agencies focus on either branding or performance. What we experienced here was both. Strategic storytelling combined with conversion-focused media buying helped us build authority and scale revenue simultaneously.",
            author: "Healthcare Brand"
        }
    ];

    const whyChooseUs = [
        "AI-Powered Campaign Optimization",
        "Conversion-First Strategy Framework",
        "Performance Marketing Experts",
        "Advanced SEO & Technical Audits",
        "Transparent Reporting & ROI Tracking",
        "Industry-Specific Digital Growth Models"
    ];

    return (
        <div className="bg-white text-slate-900" ref={mainRef}>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div className="text-left relative z-10 text-white hero-content">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            Client Testimonials
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Real Results. Real Growth. Real Partnerships.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white">
                            We don’t just deliver campaigns — we build measurable growth engines. Here’s what our clients say about working with us.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                to="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative z-10 hero-image">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={testimonialhero}
                                alt="Client Success"
                                className="max-w-[300px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] rounded-2xl"
                            /></div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 testimonial-grid">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-[30px] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group testimonial-card"
                            >
                                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(t.icon, { size: 36 })}
                                </div>
                                <h3 className="text-[22px] font-bold text-slate-900 mb-4 leading-tight">
                                    {t.title}
                                </h3>
                                <div className="flex-grow">
                                    <p className="text-[16px] text-slate-700 leading-relaxed font-medium italic mb-6">
                                        "{t.quote}"
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-slate-100 italic font-bold text-slate-900">
                                    {t.author}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Clients Choose Us */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-8 why-choose-header">
                            Why Clients Choose Us
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left choice-grid">
                            {whyChooseUs.map((point, i) => (
                                <div key={i} className="flex gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100 choice-point">
                                    <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                                    <span className="font-bold text-slate-800">{point}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[18px] leading-[1.8] text-slate-700 font-medium italic mb-8 why-choose-quote">
                            Adkryoss managed by <span className="font-bold text-blue-600">Clink Consultancy Services Private Limited</span> operates as a strategic growth partner — not just a digital marketing agency. We combine analytics, creativity, automation, and performance intelligence to build scalable digital ecosystems for ambitious brands.
                        </p>
                    </div>
                </div>
            </section>

            {/* Let's Build Your Growth Story Next */}
            <section className="py-24 bg-gradient-to-br from-[#0066cc] to-[#00458a] text-white text-center cta-section">
                <div className="container px-6 mx-auto cta-content">
                    <h2 className="text-[36px] font-bold mb-6">Let’s Build Your Growth Story Next</h2>
                    <p className="text-[18px] mb-4 font-bold text-white">Results are not accidental. They are engineered.</p>
                    <p className="text-[18px] mb-8 opacity-90 font-medium text-white">Partner with a team that treats your growth like their own.</p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066cc] py-5 px-12 rounded-full text-[18px] font-bold transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                        Contact Us Today <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
