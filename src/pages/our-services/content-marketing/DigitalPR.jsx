import React from 'react';
import { Link } from 'react-router-dom';
import digitalprhero from "../../../assets/content-marketing/digitalprhero.png";
import {
    Globe,
    Target,
    Zap,
    Users,
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    ShieldCheck,
    Megaphone,
    SearchCode,
    Award,
    PieChart,
    BarChart,
    Brain,
    Rocket,
    MessageCircle
} from 'lucide-react';

const DigitalPR = () => {
    const approachSteps = [
        {
            step: "01",
            title: "Authority-First Strategy",
            desc: "We identify high-impact publications, journalists, and digital media platforms aligned with your niche and audience intent."
        },
        {
            step: "02",
            title: "Data-Driven Story Creation",
            desc: "We craft stories backed by industry data, insights, and thought leadership that journalists actually want to publish."
        },
        {
            step: "03",
            title: "Strategic Media Outreach",
            desc: "Personalised pitching ensures your story reaches the right editors — not spam inboxes."
        },
        {
            step: "04",
            title: "SEO-Integrated Link Building",
            desc: "Every placement supports your broader SEO architecture, boosting domain authority and keyword rankings."
        },
        {
            step: "05",
            title: "Reputation & Brand Monitoring",
            desc: "We track mentions, sentiment, and media performance to optimise continuously."
        }
    ];

    const services = [
        {
            icon: <Megaphone size={32} />,
            title: "Media Relations & Outreach",
            desc: "Build relationships with top-tier journalists and industry publications to secure high-quality placements."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Online Reputation Management",
            desc: "Monitor, protect, and strengthen your brand presence across digital channels."
        },
        {
            icon: <Award size={32} />,
            title: "Thought Leadership Campaigns",
            desc: "Position founders and executives as credible voices through interviews, opinion pieces, and expert contributions."
        },
        {
            icon: <PieChart size={32} />,
            title: "Data-Led PR Campaigns",
            desc: "We create research-backed campaigns that naturally attract coverage and backlinks."
        },
        {
            icon: <Users size={32} />,
            title: "Influencer & Creator Collaborations",
            desc: "Strategic partnerships with credible digital creators to amplify brand visibility."
        },
        {
            icon: <MessageCircle size={32} />,
            title: "Crisis Communication Strategy",
            desc: "Proactive and reactive communication frameworks to protect brand integrity."
        }
    ];

    const differentiators = [
        "Advanced keyword intelligence",
        "AI-assisted content research",
        "Authority backlink acquisition",
        "Media analytics dashboards",
        "Performance-driven reporting"
    ];

    const impactPoints = [
        { title: "Higher Domain Authority", icon: <TrendingUp className="text-blue-500" /> },
        { title: "Improved Search Engine Rankings", icon: <Target className="text-blue-500" /> },
        { title: "Increased Organic Traffic", icon: <Globe className="text-blue-500" /> },
        { title: "Stronger Brand Credibility", icon: <ShieldCheck className="text-blue-500" /> },
        { title: "Better Investor & Customer Confidence", icon: <Award className="text-blue-500" /> }
    ];

    const processSteps = [
        "Research & Competitive Analysis",
        "PR Strategy & Story Mapping",
        "Content Development",
        "Journalist & Media Outreach",
        "Publication & Amplification",
        "Performance Tracking & Reporting"
    ];

    const industries = [
        "E-commerce & D2C",
        "SaaS & Technology",
        "Education & EdTech",
        "Healthcare",
        "Real Estate",
        "Finance & FinTech",
        "Startups & Enterprises"
    ];

    return (
        <div className="bg-white text-slate-900">
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
                        <h1 className="text-[28px] md:text-[36px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
                            Digital PR Services
                        </h1>
                        <h3 className="text-[20px] md:text-[24px] mb-4 font-medium text-white">
                            Earn Authority. Build Trust. Drive Real Impact.
                        </h3>
                        <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white font-medium">
                            Modern visibility is not about noise — it’s about influence. <br />
                            Our Digital PR strategies help you earn credible media coverage, high-quality backlinks, and powerful online authority that fuels long-term SEO growth and brand trust.
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
                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                            <img
                                src={digitalprhero}
                                alt="Digital PR"
                                className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] rounded-2xl"
                            /></div>
                    </div>
                </div>
            </section>

            {/* Why Digital PR Section */}
            <section className="py-24 bg-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">
                            Why Digital PR is Non-Negotiable in 2026
                        </h2>
                        <p className="text-[16px] md:text-[18px] mb-6 font-medium italic">
                            Search engines reward credibility. Audiences trust authority. Media coverage drives both.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 mb-12 transition-all duration-300 hover:shadow-xl">
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                Digital PR bridges SEO, content marketing, and reputation management into one strategic growth engine. It improves search rankings, strengthens brand perception, and generates referral traffic from trusted publications.
                            </p>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-900 font-medium">
                                When executed strategically, Digital PR:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-10">
                                {[
                                    "Builds high-authority backlinks",
                                    "Enhances E-E-A-T signals (Experience, Expertise, Authority, Trust)",
                                    "Improves organic visibility",
                                    "Increases brand mentions across media",
                                    "Positions you as a thought leader in your industry"
                                ].map((point, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <CheckCircle2 size={20} className="text-[#0066CC] shrink-0" />
                                        <span className="font-semibold text-slate-800 text-[15px]">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[16px] md:text-[18px] mb-6 text-slate-700 leading-[1.8] font-medium">
                                At Adkryoss managed by <span className="font-semibold text-[#0066CC]">Clink Consultancy Services Private Limited</span>, we don’t chase random coverage. We build digital authority ecosystems designed to compound over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Digital PR Approach Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-5 leading-tight">Our Digital PR Approach</h2>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {approachSteps.map((item, index) => (
                            <div key={index} className="bg-white border-2 border-slate-100 rounded-2xl p-8 transition-all duration-300 hover:border-[#0066CC] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] flex flex-col group">
                                <div className="text-[#0066CC] font-extrabold text-4xl mb-6 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-[18px] font-semibold text-slate-900 mb-4 group-hover:text-[#0066CC] transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Digital PR Services Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold mb-5 leading-tight text-white">Our Digital PR Services</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {services.map((item, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 w-full md:w-[calc(33.33%-22px)] min-w-[300px] flex flex-col group">
                                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors mb-8">
                                    {React.cloneElement(item.icon, { size: 28, className: "group-hover:text-white" })}
                                </div>
                                <h3 className="text-[20px] md:text-[24px] mb-4 font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white text-[15px] leading-relaxed font-medium m-0">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different Section */}
            <section className="py-24 bg-white">
                <div className="container px-6">
                    <div className="max-w-5xl mx-auto rounded-[40px] bg-white p-12 shadow-xl border border-slate-100">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-[36px] font-bold text-slate-900 mb-6 leading-tight">What Makes Our Digital PR Different</h2>
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-600 font-medium">
                                    Unlike traditional PR, our strategy is deeply integrated with SEO and performance marketing.
                                </p>
                                <p className="text-[16px] md:text-[18px] mb-6 text-slate-900 font-medium">
                                    At Adkryoss managed by <span className="text-[#0066CC]">Clink Consultancy Services Private Limited</span>, we combine:
                                </p>
                                <div className="space-y-4">
                                    {differentiators.map((point, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#0066CC]"></div>
                                            <span className="font-semibold text-slate-700">{point}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 text-[#0066CC] font-semibold italic">
                                    <BarChart />
                                    Every PR campaign is measurable. Every placement has strategic intent.
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="bg-gradient-to-br from-[#0066CC] to-[#004999] p-8 rounded-3xl text-white shadow-lg">
                                    <PieChart size={48} className="mb-6 text-blue-100" />
                                    <h3 className="text-xl font-semibold mb-4 uppercase">Advanced Analytics</h3>
                                    <p className="text-blue-50/80 leading-relaxed font-medium italic">
                                        Monitor mentions, sentiment, and media performance to optimise continuously.
                                    </p>
                                </div>
                                <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-lg">
                                    <Zap size={48} className="mb-6 text-blue-400" />
                                    <h3 className="text-xl font-semibold mb-4 uppercase">Strategic Impact</h3>
                                    <p className="text-[16px] md:text-[18px] mb-6 text-white leading-relaxed font-medium italic">
                                        PR that bridges SEO, content marketing, and reputation management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-12 leading-tight">Industries We Serve</h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {industries.map((industry, index) => (
                                <div key={index} className="px-8 py-4 bg-white border-2 border-slate-100 rounded-xl font-black text-slate-900 transition-all hover:border-[#0066CC] hover:text-[#0066CC] hover:-translate-y-1 shadow-sm">
                                    {industry}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                <div className="container px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold mb-6 text-white">The Impact You Can Expect</h2>
                        <p className="text-xl text-blue-400 font-medium italic max-w-2xl mx-auto">
                            Digital PR is not about short-term buzz. It’s about building a reputation that search engines and customers trust for years.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {impactPoints.map((point, index) => (
                            <div key={index} className="px-10 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl font-black text-xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 flex items-center gap-4">
                                {point.icon}
                                {point.title}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 bg-white">
                <div className="container px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-[36px] font-bold text-slate-900 mb-6">Our Process</h2>
                            <p className="text-[16px] md:text-[18px] mb-6 font-medium italic">
                                This structured execution ensures consistent and scalable growth.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {processSteps.map((step, index) => (
                                <div key={index} className="p-8 bg-slate-50 border-2 border-slate-100 rounded-2xl flex flex-col items-center text-center group hover:border-[#0066CC] transition-all">
                                    <div className="w-12 h-12 bg-[#0066CC] text-white rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </div>
                                    <span className="font-bold text-slate-900 text-[18px] group-hover:text-[#0066CC] transition-colors">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#004999] text-white text-center px-6">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-[36px] font-bold mb-8 leading-tight">Let’s Build Digital Authority That Converts</h2>
                    <p className="text-[16px] md:text-[18px] mb-6 text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
                        Visibility without credibility fades. Authority compounds. <br />
                        If you're ready to dominate search results and industry conversations, it’s time to invest in strategic Digital PR.
                    </p>
                    <div className="flex flex-col items-center gap-10">
                        <p className="text-[16px] md:text-[18px] mb-6 text-2xl font-medium italic text-white">
                            Partner with Adkryoss managed by Clink Consultancy Services Private Limited and transform your brand into a trusted digital leader.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#0066CC] py-6 px-16 rounded-[20px] text-[22px] font-black transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:scale-105 active:scale-95">
                            Start My Digital PR Campaign
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalPR;
