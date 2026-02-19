
import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Megaphone,
    TrendingUp,
    Users,
    Globe,
    Zap,
    BarChart3,
    Layers,
    Target,
    Settings,
    ShieldCheck,
    Rocket,
    Award,
    Building2,
    UserCheck,
    Network,
    LineChart,
    Lightbulb,
    PhoneCall,
    Star,
    HandCoins,
    BrainCircuit,
    Handshake,
    MonitorSmartphone
} from 'lucide-react';
import approach from "../../assets/approach.jpg";

const IBP = () => {

    const services = [
        { icon: <Zap size={28} />, title: "Performance Marketing (Google & Meta Ads)" },
        { icon: <TrendingUp size={28} />, title: "Search Engine Optimization (SEO)" },
        { icon: <Megaphone size={28} />, title: "Social Media Marketing & Branding" },
        { icon: <Target size={28} />, title: "Lead Generation Funnels" },
        { icon: <Globe size={28} />, title: "Website & Landing Page Development" },
        { icon: <BarChart3 size={28} />, title: "E-commerce Growth Marketing" },
        { icon: <Settings size={28} />, title: "Marketing Automation & CRM Integration" },
        { icon: <Lightbulb size={28} />, title: "Content Marketing & Video Campaigns" },
        { icon: <Layers size={28} />, title: "Data & Analytics Reporting" }
    ];

    const steps = [
        {
            step: "Step 1",
            icon: <Award size={28} />,
            title: "Onboarding & Training",
            desc: "We align you with our systems, processes, service structure, and pricing framework."
        },
        {
            step: "Step 2",
            icon: <Users size={28} />,
            title: "Sales & Client Acquisition",
            desc: "You identify and close clients using your network, outreach, or strategic prospecting."
        },
        {
            step: "Step 3",
            icon: <BrainCircuit size={28} />,
            title: "Strategy & Execution",
            desc: "Our expert team at Adkryoss managed by Clink Consultancy Services Private Limited handles strategy, execution, optimization, and reporting."
        },
        {
            step: "Step 4",
            icon: <HandCoins size={28} />,
            title: "Revenue Sharing",
            desc: "You earn attractive margins and recurring revenue without managing delivery."
        }
    ];

    const trends = [
        { icon: <Zap size={20} />, text: "Performance-first campaigns" },
        { icon: <BrainCircuit size={20} />, text: "AI-powered ad optimization" },
        { icon: <BarChart3 size={20} />, text: "Data-driven decision making" },
        { icon: <MonitorSmartphone size={20} />, text: "Multi-platform brand presence" },
        { icon: <TrendingUp size={20} />, text: "ROI transparency" }
    ];

    const whoShouldJoin = [
        { icon: <Rocket size={20} />, text: "Aspiring entrepreneurs" },
        { icon: <UserCheck size={20} />, text: "Freelancers & consultants" },
        { icon: <Building2 size={20} />, text: "Corporate professionals seeking additional income" },
        { icon: <LineChart size={20} />, text: "Sales professionals" },
        { icon: <Network size={20} />, text: "Business networkers" },
        { icon: <Layers size={20} />, text: "Existing agencies wanting backend support" },
        { icon: <Star size={20} />, text: "Influencers with a business audience" }
    ];

    const advantages = [
        { icon: <Award size={22} />, text: "Strong brand positioning" },
        { icon: <Rocket size={22} />, text: "Scalable digital infrastructure" },
        { icon: <Users size={22} />, text: "Dedicated account managers" },
        { icon: <BarChart3 size={22} />, text: "Transparent reporting dashboards" },
        { icon: <BrainCircuit size={22} />, text: "AI-supported campaign optimization" },
        { icon: <HandCoins size={22} />, text: "Structured pricing models" },
        { icon: <Settings size={22} />, text: "Ongoing technical support" },
        { icon: <Lightbulb size={22} />, text: "Strategic guidance for business expansion" }
    ];

    const tools = [
        { icon: <BarChart3 size={20} />, text: "Advanced analytics dashboards" },
        { icon: <Target size={20} />, text: "Conversion tracking systems" },
        { icon: <Settings size={20} />, text: "CRM integrations" },
        { icon: <BrainCircuit size={20} />, text: "AI-powered audience targeting" },
        { icon: <Zap size={20} />, text: "Automation funnels" },
        { icon: <LineChart size={20} />, text: "Performance reporting frameworks" }
    ];

    const differences = [
        { icon: <Handshake size={20} />, text: "You are positioned as a business partner, not a referrer" },
        { icon: <Users size={20} />, text: "You build your own client base" },
        { icon: <HandCoins size={20} />, text: "You earn recurring revenue" },
        { icon: <TrendingUp size={20} />, text: "You grow a long-term digital asset" },
        { icon: <Rocket size={20} />, text: "You operate under a scalable and performance-focused ecosystem" }
    ];

    const commitments = [
        { icon: <Award size={20} />, text: "Structured onboarding" },
        { icon: <Megaphone size={20} />, text: "Sales enablement support" },
        { icon: <BarChart3 size={20} />, text: "Campaign transparency" },
        { icon: <ShieldCheck size={20} />, text: "Ethical growth strategies" },
        { icon: <BrainCircuit size={20} />, text: "Continuous innovation" }
    ];

    return (
        <div className="bg-white text-slate-900">

            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:min-h-[560px] flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 items-center gap-12">
                        {/* LEFT CONTENT */}
                        <div className="text-left">
                            <h1 className="text-[36px] md:text-[48px] font-bold mb-4 leading-tight">
                                Become Our <span className="text-blue-200">IBP</span>
                            </h1>
                            <h2 className="text-[18px] md:text-[22px] font-medium text-blue-100 mb-6">
                                Build Your Digital Business Without Building the Backend
                            </h2>
                            <p className="text-[17px] mb-8 leading-relaxed opacity-90 max-w-xl text-white">
                                Start your own digital marketing venture with zero operational burden.<br />
                                <strong>Partner with us. Sell with confidence. Scale with freedom.</strong>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0066cc] py-4 px-8 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    Apply Now <ArrowRight size={20} />
                                </Link>
                                <Link
                                    to="#how-it-works"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                                >
                                    How It Works
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center md:justify-end relative z-10">
                            <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                                <img
                                    src={approach}
                                    alt="Become our IBP"
                                    className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-10">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
                        <p className="text-[18px] text-slate-700 leading-relaxed mb-4">
                            The digital economy is growing faster than ever. Businesses need performance-driven marketing, data-backed strategies, and measurable ROI.
                        </p>
                        <p className="text-[18px] text-slate-700 leading-relaxed mb-6">
                            As an Independent Business Partner, you get access to a full-stack digital marketing ecosystem powered by{' '}
                            <span className="text-[#0066cc] font-semibold">Adkryoss managed by Clink Consultancy Services Private Limited</span>{' '}
                            — while you focus on building relationships and closing deals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
                            {["No hiring headaches.", "No delivery pressure.", "No infrastructure investment."].map((pt, i) => (
                                <div key={i} className="flex items-center gap-2 text-lg font-semibold text-slate-800">
                                    <ShieldCheck size={20} className="text-[#0066cc] shrink-0" />
                                    {pt}
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-2xl font-bold text-[#0066cc] italic">Just growth.</p>
                    </div>
                </div>
            </section>

            {/* What Is IBP */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -ml-32 -mt-32 opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-10">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6">What Is IBP?</h2>
                        <p className="text-[18px] text-slate-700 leading-relaxed mb-4">
                            Our Independent Business Partner Program empowers entrepreneurs, consultants, freelancers, agencies, and corporate professionals to launch their own digital marketing vertical — under a strong and credible delivery system.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-8 my-8">
                            <div className="bg-white border border-slate-100 rounded-xl px-8 py-5 shadow-sm text-[18px] font-semibold text-slate-800">
                                You become the face.
                            </div>
                            <div className="bg-[#0066cc] rounded-xl px-8 py-5 shadow-sm text-[18px] font-semibold text-white">
                                We become your engine.
                            </div>
                        </div>
                        <p className="text-[17px] text-slate-700 leading-relaxed">
                            Through <span className="text-[#0066cc] font-semibold">Adkryoss managed by Clink Consultancy Services Private Limited</span>, you gain access to strategy teams, performance marketers, SEO experts, paid media specialists, content creators, automation experts, and analytics professionals.
                        </p>
                    </div>
                </div>
            </section>

            {/* What You Can Offer */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4">What You Can Offer Clients</h2>
                        <p className="text-[18px] text-slate-600">As our IBP, you can confidently provide:</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((svc, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0066cc] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4">
                                <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#0066cc] to-[#3b82f6] text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    {svc.icon}
                                </div>
                                <h3 className="text-[16px] font-semibold text-slate-800 group-hover:text-[#0066cc] transition-colors leading-snug mt-2">{svc.title}</h3>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-slate-500 italic mt-10 text-lg">
                        All solutions are built on performance, insights, and measurable outcomes.
                    </p>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-[18px] text-slate-600">A structured framework to get you from zero to scale.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0066cc] hover:shadow-lg transition-all group">
                                <div className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">{step.step}</div>
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0066cc] to-[#3b82f6] text-white rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h3 className="text-[18px] font-bold text-slate-900 mb-3 group-hover:text-[#0066cc] transition-colors leading-tight">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Model Works */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-6 leading-tight text-white">Why This Model Works in 2026 & Beyond</h2>
                            <p className="text-[18px] text-blue-200 mb-8">The digital marketing industry is moving toward:</p>
                            <ul className="space-y-4">
                                {trends.map((t, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-medium text-white/90">
                                        <span className="text-[#00bfff] shrink-0">{t.icon}</span>
                                        {t.text}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                                <p className="text-[17px] text-white leading-relaxed">
                                    Businesses don't just want marketing.<br />
                                    <strong>They want measurable growth.</strong>
                                </p>
                                <p className="mt-3 text-slate-300 text-[16px]">
                                    Our IBP model lets you tap into this demand without investing years into building a full-scale agency infrastructure.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-20"></div>
                            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 p-4 rounded-lg h-32 w-full animate-pulse"></div>
                                    <div className="bg-white/10 p-4 rounded-lg h-32 w-full"></div>
                                    <div className="bg-white/10 p-4 rounded-lg h-32 w-full"></div>
                                    <div className="bg-white/10 p-4 rounded-lg h-32 w-full animate-pulse"></div>
                                </div>
                                <div className="mt-6 text-center font-bold text-2xl text-blue-300">Your Scalable Business Model</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Join */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-[36px] font-bold text-slate-900 mb-4">Who Should Join?</h2>
                            <p className="text-[18px] text-slate-600 mb-8">This program is ideal for:</p>
                            <ul className="space-y-4">
                                {whoShouldJoin.map((w, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg text-slate-800 font-medium">
                                        <span className="text-[#0066cc] shrink-0">{w.icon}</span>
                                        {w.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm">
                            <p className="text-[20px] font-bold text-slate-700 italic leading-relaxed">
                                "If you have strong communication skills and a growth mindset, this model is built for you."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Competitive Advantage */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -mr-32 -mb-32 opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4">Your Competitive Advantage</h2>
                        <p className="text-[18px] text-slate-600 max-w-2xl mx-auto">
                            When you partner with <span className="text-[#0066cc] font-semibold">Adkryoss managed by Clink Consultancy Services Private Limited</span>, you gain:
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((adv, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-center gap-3 group">
                                <div className="w-10 h-10 shrink-0 bg-blue-50 text-[#0066cc] rounded-lg flex items-center justify-center group-hover:bg-[#0066cc] group-hover:text-white transition-colors">
                                    {adv.icon}
                                </div>
                                <span className="font-semibold text-slate-800 text-sm">{adv.text}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-10 text-lg font-semibold text-slate-700 italic">
                        You sell premium services backed by a professional execution framework.
                    </p>
                </div>
            </section>

            {/* Revenue Potential */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6">Revenue Potential</h2>
                        <p className="text-[18px] text-slate-700 leading-relaxed mb-6">
                            The digital marketing industry continues to expand rapidly across India and globally.
                        </p>
                        <p className="text-[17px] text-slate-600 mb-6">
                            With recurring retainers, performance-based campaigns, and long-term client relationships, your earning potential compounds over time.
                        </p>
                        <div className="bg-gradient-to-r from-[#0066cc] to-[#00458a] rounded-2xl p-8 text-white text-left md:text-center mt-8">
                            <p className="text-[20px] font-bold italic text-white mb-2">This is not commission-based selling.</p>
                            <p className="text-[20px] font-bold italic text-white">This is building your own scalable digital business ecosystem.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools & Technology */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Tools */}
                        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                            <h2 className="text-[30px] font-bold text-slate-900 mb-4">Tools & Technology Stack</h2>
                            <p className="text-slate-600 mb-6">We leverage modern marketing technologies including:</p>
                            <div className="space-y-4">
                                {tools.map((tool, i) => (
                                    <div key={i} className="flex items-center gap-3 text-lg text-slate-700">
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                            {tool.icon}
                                        </div>
                                        {tool.text}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-sm text-slate-500 italic">
                                All powered through the operational backbone of Adkryoss managed by Clink Consultancy Services Private Limited.
                            </p>
                        </div>

                        {/* What Makes Us Different */}
                        <div>
                            <h2 className="text-[30px] font-bold text-slate-900 mb-4">What Makes Us Different?</h2>
                            <p className="text-slate-600 mb-6 text-[17px]">Unlike traditional affiliate or reseller programs:</p>
                            <div className="space-y-4">
                                {differences.map((d, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                        <div className="text-[#0066cc] shrink-0">{d.icon}</div>
                                        <span className="font-semibold text-slate-800">{d.text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-lg font-bold text-[#0066cc] italic">This is ownership without operational chaos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4">Our Commitment to You</h2>
                        <p className="text-[18px] text-slate-600">
                            We believe in long-term partnerships, not short-term transactions.<br />
                            Through <span className="text-[#0066cc] font-semibold">Adkryoss managed by Clink Consultancy Services Private Limited</span>, we provide:
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {commitments.map((c, i) => (
                            <div key={i} className="flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full hover:border-blue-400 hover:bg-blue-50 transition-all">
                                <span className="text-[#0066cc]">{c.icon}</span>
                                <span className="font-semibold text-slate-700">{c.text}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-10 text-lg font-semibold text-[#0066cc]">
                        Your success directly strengthens our ecosystem.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-800 text-white text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-[40px] font-bold mb-6 leading-tight text-white">Let's Build Your Digital Empire</h2>
                        <p className="text-[18px] text-slate-300 mb-4 max-w-2xl mx-auto">
                            The opportunity is massive. The system is ready. The demand is growing.
                        </p>
                        <p className="text-[20px] font-bold text-blue-300 mb-10">
                            Now it's your move.
                        </p>
                        <p className="text-[17px] text-slate-400 mb-10">
                            Become an Independent Business Partner today and launch your digital growth journey.
                        </p>

                        <div className="p-10 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-[28px] font-bold mb-4">Ready to Start?</h3>
                            <p className="text-lg mb-8 text-slate-300">
                                Apply for the IBP Program and schedule your consultation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 bg-[#0066cc] text-white py-4 px-10 rounded-full text-[18px] font-bold transition-all duration-300 hover:bg-blue-600 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    Apply Now <ArrowRight size={22} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white py-4 px-10 rounded-full text-[18px] font-bold hover:bg-white/10 transition-all"
                                >
                                    Request Call Back <PhoneCall size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IBP;
