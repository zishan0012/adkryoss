import React from 'react';
import { Link } from 'react-router-dom';
import portfoliohero from '../../assets/work/portfoliohero.png';
import { motion } from "framer-motion";
import { useState } from 'react';
import {
    CheckCircle2,
    ArrowRight,
    Target,
    Zap,
    TrendingUp,
    Globe,
    MousePointer2,
    Rocket,
    BarChart3,
    Search,
    Brain,
    LineChart,
    Layers,
    Activity,
    Smartphone,
    Monitor,
    Shield,
    FileText,
    Settings,
    MessageSquare,
    Cpu,
    Briefcase,
    Building2,
    GraduationCap,
    Home,
    Heart,
    ShoppingCart,
    MapPin,
    PenTool
} from 'lucide-react';

const Portfolio = () => {
    const industries = [
        { name: "Corporate & B2B Services", icon: <Briefcase size={24} /> },
        { name: "HR & Recruitment Ecosystems", icon: <Target size={24} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={24} /> },
        { name: "Real Estate & Infrastructure", icon: <Home size={24} /> },
        { name: "Interior & Architecture", icon: <PenTool size={24} /> },
        { name: "Healthcare & Wellness", icon: <Heart size={24} /> },
        { name: "Local & Hyperlocal Businesses", icon: <MapPin size={24} /> },
        { name: "Emerging D2C Brands", icon: <ShoppingCart size={24} /> }
    ];

    const caseStudies = [
        {
            title: "HR & Recruitment Growth Acceleration",
            objective: "Generate qualified B2B leads while building authority in the HR ecosystem.",
            strategy: "SEO + LinkedIn Content + Performance Ads Funnel",
            impact: [
                "3X increase in inbound leads",
                "62% drop in cost per lead",
                "180% growth in organic traffic within 6 months"
            ],
            desc: "By aligning positioning, authority content, and retargeting funnels, Adkryoss managed by Clink Consultancy Services Private Limited transformed brand perception into revenue opportunity."
        },
        {
            title: "Education Brand – Digital Launch & Lead Engine",
            objective: "Launch online education platform and scale admissions digitally.",
            strategy: "Paid Ads + Conversion Landing Pages + Funnel Optimization",
            impact: [
                "4.5X ROAS within first 90 days",
                "38% improvement in landing page conversion",
                "High-intent lead segmentation through automation"
            ],
            desc: "We created a structured acquisition journey — from awareness to enrollment."
        },
        {
            title: "Interior Design Brand – Organic Visibility Domination",
            objective: "Improve Google visibility and generate local leads.",
            strategy: "Technical SEO + High-Intent Blog Strategy + Local SEO",
            impact: [
                "Ranked on Page 1 for 25+ commercial keywords",
                "220% organic traffic growth",
                "3X increase in website enquiries"
            ],
            desc: "Search is no longer optional — it's the foundation of long-term brand growth."
        },
        {
            title: "Real Estate Campaign – Performance Scaling",
            objective: "Drive site visits and reduce CPL.",
            strategy: "Meta & Google Ads + High-Converting Ad Creatives + Retargeting",
            impact: [
                "55% reduction in CPL",
                "2.8X increase in qualified enquiries",
                "Advanced audience segmentation for better ROI"
            ],
            desc: "Our data-first execution ensured consistent optimization at every stage."
        }
    ];

    const model = [
        { step: "01", title: "Discover & Audit", desc: "We deep-dive into your business, market landscape, and current digital footprint." },
        { step: "02", title: "Strategy Formulation", desc: "Building a data-backed roadmap aligned with your ROI and growth goals." },
        { step: "03", title: "Execution & Launch", desc: "Seamless deployment of campaigns across SEO, Ads, and Content channels." },
        { step: "04", title: "Analyze & Optimize", desc: "Continuous monitoring and A/B testing to refine performance and reduce costs." },
        { step: "05", title: "Scale & Dominate", desc: "Ramping up successful funnels to maximize reach and market share." }
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="bg-white">
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
                    <div className="text-left relative z-10 text-white">
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1px] text-white leading-[1.1]">
                            Portfolio
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Real Work. Real Numbers. Real Growth.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white/90">
                            We don’t just run campaigns — we build scalable digital growth engines. Explore how strategy, creativity, and performance marketing come together to deliver measurable business impact.
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

                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={portfoliohero}
                                alt="Portfolio"
                                className="max-w-[300px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] rounded-2xl"
                            /></div>
                    </div>
                </div>
            </section>

            {/* Our Work Philosophy */}
            <section className="py-24 bg-white" >
                <div className="container px-6 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0f172a] mb-6">Our Work Philosophy</h2>
                        <p className="text-[16px] md:text-[18px] text-[#475569] leading-[1.8]">
                            Every project at Adkryoss managed by <span className="font-bold text-[#0066cc]">Clink Consultancy Services Private Limited</span> begins with one goal — sustainable digital growth backed by data.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            { title: "Performance Marketing Precision", icon: <Target className="text-blue-600" /> },
                            { title: "SEO-led Organic Visibility", icon: <Search className="text-blue-600" /> },
                            { title: "Creative Storytelling", icon: <PenTool className="text-blue-600" /> },
                            { title: "Conversion-Focused Design", icon: <MousePointer2 className="text-blue-600" /> },
                            { title: "Marketing Automation Intelligence", icon: <Cpu className="text-blue-600" /> }
                        ].map((item, i) => (
                            // <div key={i} className="p-6 bg-[#f8fafc] rounded-24 border border-[#e2e8f0] text-center hover:shadow-lg transition-all duration-300">
                            //     <div className="mb-4 flex justify-center">{item.icon}</div>
                            //     <h4 className="text-[16px] font-bold text-[#0f172a]">{item.title}</h4>
                            // </div>


                            <div
                                key={i}
                                className="group relative overflow-hidden p-6 rounded-24 
             border border-[#e2e8f0] text-center cursor-pointer"
                            >

                                {/* Sliding Background */}
                                <span className="absolute inset-0 bg-blue-600 
                   -translate-x-full 
                   group-hover:translate-x-0 
                   transition-transform duration-500 ease-out" />

                                {/* Content */}
                                <div className="relative z-10 transition-colors duration-300 
                  text-[#0f172a] group-hover:text-white">

                                    <div className="mb-4 flex justify-center 
                    transition-colors duration-300">
                                        {React.cloneElement(item.icon, {
                                            className: "text-blue-600 group-hover:text-white"
                                        })}
                                    </div>

                                    <h4 className="text-[16px] font-bold">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>


                        ))}
                    </div>
                    <div className="mt-16 bg-[#0f172a] p-10 rounded-40 text-center text-white">
                        <p className="text-[18px] md:text-[20px] font-medium max-w-4xl mx-auto opacity-90 leading-relaxed text-white">
                            "Our portfolio reflects a structured, ROI-driven approach inspired by modern performance agencies — blending consulting mindset with execution excellence."
                        </p>
                    </div>
                </div>
            </section >

            {/* Industries We’ve Empowered */}
            <section className="py-24 bg-[#f8fafc]" >
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0f172a] mb-4">Industries We’ve Empowered</h2>
                        <p className="text-[#64748b]">We work across diverse sectors with tailored digital strategies</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {industries.map((ind, i) => (
                            <div key={i} className="bg-white p-8 rounded-24 border border-[#e2e8f0] flex flex-col items-center text-center group hover:bg-[#0066cc] hover:border-[#0066cc] transition-all duration-300">
                                <div className="text-[#0066cc] group-hover:text-white mb-4 transition-colors">
                                    {ind.icon}
                                </div>
                                <span className="text-[15px] font-bold text-[#0f172a] group-hover:text-white transition-colors">{ind.name}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-12 text-[18px] font-bold text-[#0066cc] italic">
                        Each campaign is custom-built — no recycled templates, no generic playbooks.
                    </p>
                </div>
            </section >

            {/* Case Studies */}
            <section className="py-24 bg-white" >
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0f172a] mb-4">Featured Case Studies</h2>
                        <p className="text-[#64748b]">Real impact across diverse business objectives</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* {caseStudies.map((caseStudy, i) => (
                            <div key={i} className="bg-white rounded-32 border border-[#e2e8f0] overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#0066cc] transition-colors">{caseStudy.title}</h3>
                                    </div>
                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <span className="text-[12px] uppercase tracking-wider font-bold text-blue-600">Objective</span>
                                            <p className="text-[#0f172a] font-medium mt-1">{caseStudy.objective}</p>
                                        </div>
                                        <div>
                                            <span className="text-[12px] uppercase tracking-wider font-bold text-blue-600">Strategy</span>
                                            <p className="text-[#0f172a] font-medium mt-1">{caseStudy.strategy}</p>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-24 mb-6">
                                        <span className="text-[12px] uppercase tracking-wider font-bold text-blue-600 mb-4 block">Impact</span>
                                        <ul className="space-y-3">
                                            {caseStudy.impact.map((point, idx) => (
                                                <li key={idx} className="flex gap-3 text-[15px] font-bold text-[#0f172a]">
                                                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-[#64748b] leading-relaxed text-[15px]">
                                        {caseStudy.desc}
                                    </p>
                                </div>
                            </div>
                        ))} */}




                        {caseStudies.map((caseStudy, i) => {
                            const isActive = activeIndex === i;
                            const isInactive = activeIndex !== null && activeIndex !== i;

                            return (
                                <motion.div
                                    key={i}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                    animate={{
                                        scale: isActive ? 1.08 : 1,
                                        opacity: isInactive ? 0.5 : 1,
                                        y: isActive ? -10 : 0,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="relative bg-white rounded-32 border border-[#e2e8f0] 
                 overflow-hidden hover:shadow-2xl 
                 transition-all duration-500"
                                    style={{ zIndex: isActive ? 20 : 1 }}
                                >
                                    <div className="p-8 md:p-12">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">
                                                {i + 1}
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#0066cc] transition-colors">{caseStudy.title}</h3>
                                        </div>
                                        <div className="space-y-6 mb-8">
                                            <div>
                                                <span className="text-[12px] uppercase tracking-wider font-bold text-blue-600">Objective</span>
                                                <p className="text-[#0f172a] font-medium mt-1">{caseStudy.objective}</p>
                                            </div>
                                            <div>
                                                <span className="text-[12px] uppercase tracking-wider font-bold text-blue-600">Strategy</span>
                                                <p className="text-[#0f172a] font-medium mt-1">{caseStudy.strategy}</p>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 p-6 rounded-24 mb-6">
                                            <span className="text-[12px] uppercase tracking-wider font-bold text-blue-600 mb-4 block">Impact</span>
                                            <ul className="space-y-3">
                                                {caseStudy.impact.map((point, idx) => (
                                                    <li key={idx} className="flex gap-3 text-[15px] font-bold text-[#0f172a]">
                                                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="text-[#64748b] leading-relaxed text-[15px]">
                                            {caseStudy.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}





                    </div>
                </div>
            </section >

            {/* Working Model */}
            <section className="py-24 bg-[#0f172a] text-white" >
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-4">Our Working Model</h2>
                        <p className="text-white/60">A structured approach to consistent growth</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-0">
                        {model.map((step, i) => (
                            <div key={i} className="flex-1 min-w-[240px] px-6 relative group">
                                <div className="mb-6">
                                    <span className="text-[48px] font-black text-white group-hover:text-blue-500/30 transition-colors duration-500 leading-none">
                                        {step.step}
                                    </span>
                                </div>
                                <h4 className="text-[20px] font-bold mb-4 text-blue-400">{step.title}</h4>
                                <p className="text-white/70 text-[15px] leading-relaxed">{step.desc}</p>
                                {i < model.length - 1 && (
                                    <div className="hidden lg:block absolute top-[60px] -right-[10px] text-white/10">
                                        <ArrowRight size={40} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Tools & Technologies We Leverage */}
            <section className="py-24 bg-white" >
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0f172a] mb-4">Tools & Technologies We Leverage</h2>
                        <p className="text-[#64748b]">Technology empowers us — but strategy drives results.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {[
                            { name: "Google Analytics 4", icon: <BarChart3 /> },
                            { name: "Google Tag Manager", icon: <Settings /> },
                            { name: "Meta Business Suite", icon: <Target /> },
                            { name: "SEMrush & Ahrefs", icon: <Search /> },
                            { name: "HubSpot & CRM Automations", icon: <Activity /> },
                            { name: "AI-powered Content & Predictive Analytics", icon: <Brain /> }
                        ].map((tool, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 text-center">
                                <div className="p-6 bg-blue-50 text-blue-600 rounded-full transition-transform hover:scale-110">
                                    {tool.icon}
                                </div>
                                <span className="text-[14px] font-bold text-[#0f172a]">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* What Makes Our Portfolio Different? */}
            <section className="py-24 bg-[#0f172a] text-white" >
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-[32px] md:text-[42px] font-bold mb-6 text-white">What Makes Our Portfolio Different?</h2>
                        <p className="text-white/70 text-lg">
                            Unlike agencies that focus only on impressions and clicks, Adkryoss managed by <span className="text-white font-bold">Clink Consultancy Services Private Limited</span> focuses on revenue impact and scalable digital assets.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            "ROI-Focused Campaign Architecture",
                            "Conversion-Driven Design Thinking",
                            "Integrated Multi-Channel Strategy",
                            "Performance Reporting Transparency",
                            "Continuous Testing & Optimization"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600/20 transition-all">
                                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                                <span className="font-bold text-[17px]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Results That Matter */}
            <section className="py-24 bg-[#f8fafc]" >
                <div className="container px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0f172a] mb-6">Results That Matter</h2>
                            <p className="text-[18px] text-[#475569] leading-relaxed mb-8">
                                Numbers define credibility. Strategy defines sustainability. We don’t chase short-term spikes. We build long-term digital authority.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Consistent ROAS improvement",
                                    "Sustainable organic growth",
                                    "High-quality lead generation",
                                    "Strong brand positioning",
                                    "Reduced acquisition cost"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-[17px] font-bold text-[#0f172a]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Growth Delivered", val: "250%+" },
                                { label: "Lower CPL", val: "45%" },
                                { label: "ROAS Range", val: "4X-8X" },
                                { label: "Client Retentions", val: "95%" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-8 rounded-32 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all">
                                    <div className="text-3xl font-bold text-[#0066cc] mb-1">{stat.val}</div>
                                    <div className="text-[14px] font-bold text-[#0f172a] opacity-60 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Let’s Build the Next Success Story */}
            <section className="py-24 text-center bg-gradient-to-br from-[#0066cc] to-[#004e92] text-white" >
                <div className="container px-6 mx-auto">
                    <h2 className="text-[32px] md:text-[48px] font-bold mb-6 text-white leading-tight">
                        Let’s Build the Next Success Story
                    </h2>
                    <p className="text-[18px] md:text-[22px] mb-10 max-w-[800px] mx-auto text-[#eff6ff] opacity-90 leading-relaxed">
                        Your brand could be the next case study in our portfolio. If you're ready to move from random marketing efforts to structured digital growth — let’s build a measurable success story together.
                    </p>
                    <div className="text-[20px] font-bold mb-10 text-white animate-pulse">
                        Connect. Strategize. Scale.
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-[#0066cc] py-5 px-12 rounded-full text-[18px] font-bold no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-white/20">
                            Start Your Success Story
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Portfolio;
