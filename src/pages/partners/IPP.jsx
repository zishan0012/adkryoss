
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Briefcase,
    Globe,
    TrendingUp,
    Users,
    Zap,
    BarChart3,
    CheckCircle,
    ArrowRight,
    Layers,
    Target,
    Settings,
    ShieldCheck,
    Megaphone,
    Palette,
    Rocket,
    Award,
    HandshakeIcon,
    Cpu,
    GraduationCap,
    Building2,
    UserCheck,
    Lightbulb,
    Network,
    LineChart
} from 'lucide-react';
import approach from "../../assets/approach.jpg";

const IPP = () => {
    const services = [
        {
            icon: <Zap size={32} />,
            title: "Performance Marketing",
            desc: "ROI-focused paid campaigns across search, social, and display networks with deep audience targeting and conversion optimization."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "SEO & Organic Growth",
            desc: "Technical SEO, content strategy, on-page and off-page optimization, and data-backed keyword planning for long-term visibility."
        },
        {
            icon: <Users size={32} />,
            title: "Social Media Marketing",
            desc: "Strategic content creation, brand storytelling, community growth, and paid social amplification."
        },
        {
            icon: <Palette size={32} />,
            title: "Branding & Creative",
            desc: "Brand identity, UI/UX, visual communication, ad creatives, and conversion-focused design systems."
        },
        {
            icon: <Globe size={32} />,
            title: "Web & Funnel Development",
            desc: "High-performance websites, landing pages, sales funnels, and CRO optimization."
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Marketing Automation & Analytics",
            desc: "CRM integrations, AI-based campaign automation, performance dashboards, and data-driven reporting."
        }
    ];

    const audiences = [
        "Marketing consultants",
        "Freelancers",
        "Startup founders",
        "Corporate professionals transitioning to entrepreneurship",
        "Existing agencies seeking backend strength",
        "Sales-driven professionals wanting a scalable digital model"
    ];

    const steps = [
        {
            step: "Step 1",
            title: "Onboarding & Strategic Alignment",
            desc: "We align on your business goals, target markets, pricing structure, and growth roadmap."
        },
        {
            step: "Step 2",
            title: "Market Activation",
            desc: "You begin client acquisition under your own business identity while leveraging structured proposals and strategy decks."
        },
        {
            step: "Step 3",
            title: "Backend Execution",
            desc: "Campaign planning, execution, reporting, and optimization are managed by the expert team at Adkryoss managed by Clink Consultancy Services Private Limited."
        },
        {
            step: "Step 4",
            title: "Revenue & Scale",
            desc: "You earn attractive margins while scaling with operational confidence and strategic support."
        }
    ];

    const differentiators = [
        {
            icon: <ShieldCheck size={24} />,
            title: "Performance accountability"
        },
        {
            icon: <BarChart3 size={24} />,
            title: "Transparent reporting"
        },
        {
            icon: <Target size={24} />,
            title: "Strategic planning involvement"
        },
        {
            icon: <Users size={24} />,
            title: "Dedicated project coordination"
        },
        {
            icon: <Layers size={24} />,
            title: "Modern marketing technologies"
        },
        {
            icon: <Settings size={24} />,
            title: "Continuous upskilling support"
        }
    ];

    const toolsPoints = [
        "Advanced analytics platforms",
        "AI-powered optimization tools",
        "Conversion tracking systems",
        "Marketing automation software",
        "Data-driven reporting dashboards"
    ];

    const supportPoints = [
        "Structured onboarding training",
        "Sales enablement materials",
        "Strategy consultation support",
        "Campaign planning guidance",
        "Performance review meetings",
        "Ongoing marketing updates"
    ];

    return (
        <div className="bg-white text-slate-900">
            {/* Hero Section */}
            
            {/* <section c className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
                style={{
                    backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
                }}
            >

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 items-center gap-12">
                      
                        <div className="text-left animate-fadeInLeft">
                            <h1 className="text-[36px] md:text-[48px] font-bold mb-4 leading-tight">
                                Become Our <span className="text-blue-200">IPP</span>
                            </h1>
                            <h2 className="text-[20px] md:text-[24px] font-medium text-blue-100 mb-6">
                                Build Your Own Digital Marketing Company — Powered by Experts
                            </h2>
                            <p className="text-[18px] mb-8 leading-relaxed opacity-90 max-w-xl text-white">
                                <strong>Start. Scale. Succeed.</strong><br />
                                Launch your own digital marketing venture with a proven backend, powerful systems, and a high-performance team — without building everything from scratch.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#0066cc] py-4 px-8 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Apply Now <ArrowRight size={20} />
                                </Link>
                                <Link to="#how-it-works" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                                    How It Works
                                </Link>
                            </div>
                        </div>

                        
                        <div className="flex justify-center md:justify-end relative z-10">
                            <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                                <img
                                    src={approach}
                                    alt="Become our IPP"
                                    className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                                />
                            </div>
                        </div>
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

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid md:grid-cols-2 items-center gap-12">

      {/* LEFT CONTENT */}
      <div className="text-left max-w-[600px]">

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Become Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            IPP
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-blue-100 mb-6">
          Build Your Own Digital Marketing Company — Powered by Experts
        </h2>

        <p className="text-gray-200 mb-8 leading-relaxed">
          <strong>Start. Scale. Succeed.</strong>
          <br /><br />
          Launch your own digital marketing venture with a proven backend, 
          powerful systems, and a high-performance team — without building 
          everything from scratch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0066cc] py-4 px-8 rounded-full font-bold text-lg 
                       hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply Now <ArrowRight size={20} />
          </Link>

          <Link
            to="#how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white py-4 px-8 rounded-full font-bold text-lg 
                       hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            How It Works
          </Link>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">

        <div className="relative group w-full max-w-[420px]">

          {/* Image Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <img
            src={approach}
            alt="Become our IPP"
            className="relative w-full rounded-2xl shadow-2xl 
                       transform group-hover:-translate-y-2 transition duration-500"
          />

        </div>

      </div>

    </div>
  </div>

  {/* Floating Animation */}
  <style>
    {`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(30px); }
      }
    `}
  </style>

</section>





            {/* What is IPP Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6">What is IPP?</h2>
                        <p className="text-[18px] text-slate-700 leading-relaxed mb-6">
                            IPP (Independent Partner Program) is a strategic partnership model designed for ambitious professionals, consultants, agencies, and entrepreneurs who want to run their own digital marketing business with complete operational support.
                        </p>
                        <p className="text-[18px] text-slate-700 leading-relaxed font-medium">
                            Through this model, <span className="text-[#0066cc]">Adkryoss managed by Clink Consultancy Services Private Limited</span> provides the technology, delivery infrastructure, strategic expertise, and execution team — while you focus on client acquisition, relationships, and growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Partner With Us Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -ml-32 -mt-32 opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
                        <p className="text-[18px] text-slate-600 max-w-3xl mx-auto">
                            The digital ecosystem is evolving faster than ever. Instead of investing years building internal teams and systems, step into a ready-made, scalable marketing ecosystem.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { text: "A fully operational digital marketing backend", icon: <Cpu size={24} /> },
                            { text: "Access to certified strategists and specialists", icon: <Award size={24} /> },
                            { text: "Proven execution frameworks", icon: <Layers size={24} /> },
                            { text: "Scalable service models", icon: <TrendingUp size={24} /> },
                            { text: "Structured growth support", icon: <Rocket size={24} /> },
                            { text: "White-label delivery capabilities", icon: <ShieldCheck size={24} /> }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all group">
                                <div className="w-12 h-12 bg-blue-50 text-[#0066cc] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0066cc] group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800">{item.text}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-xl font-bold text-[#0066cc] italic">
                            "This is not a franchise. This is a performance-driven partnership."
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Service Ecosystem */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4">Our Core Service Ecosystem</h2>
                        <p className="text-[18px] text-slate-600">As an IPP partner, you can offer a comprehensive suite of digital growth solutions to your clients.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0066cc] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#0066cc] to-[#3b82f6] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0066cc] transition-colors">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-lg text-slate-500 italic">
                            Every service is executed under structured quality control and performance metrics to ensure consistent client satisfaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who can become an IPP */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[36px] font-bold mb-6 leading-tight text-white">Who Can Become an IPP?</h2>
                            <p className="text-[18px] text-blue-200 mb-8">The program is built for growth-oriented individuals and organizations such as:</p>
                            <ul className="space-y-4">
                                {[
                                    { text: "Marketing consultants", icon: <Megaphone size={20} className="text-[#00bfff] shrink-0" /> },
                                    { text: "Freelancers", icon: <UserCheck size={20} className="text-[#00bfff] shrink-0" /> },
                                    { text: "Startup founders", icon: <Rocket size={20} className="text-[#00bfff] shrink-0" /> },
                                    { text: "Corporate professionals transitioning to entrepreneurship", icon: <Building2 size={20} className="text-[#00bfff] shrink-0" /> },
                                    { text: "Existing agencies seeking backend strength", icon: <Network size={20} className="text-[#00bfff] shrink-0" /> },
                                    { text: "Sales-driven professionals wanting a scalable digital model", icon: <LineChart size={20} className="text-[#00bfff] shrink-0" /> }
                                ].map((aud, index) => (
                                    <li key={index} className="flex items-center gap-3 text-lg font-medium text-white/90">
                                        {aud.icon}
                                        {aud.text}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                                <p className="text-xl font-bold italic text-white">
                                    "If you can acquire clients and build relationships, the rest is handled professionally."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-20"></div>
                            {/* Abstract Visual Representation */}
                            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 p-4 rounded-lg h-32 w-full animate-pulse"></div>
                                    <div className="bg-white/10 p-4 rounded-lg h-32 w-full"></div>
                                    <div className="bg-white/10 p-4 rounded-lg h-32 w-full"></div>
                                    <div className="bg-white/10 p-4 rounded-lg h-32 w-full animate-pulse"></div>
                                </div>
                                <div className="mt-6 text-center font-bold text-2xl text-blue-300">Scalable Digital Model</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-4">How the IPP Model Works</h2>
                        <p className="text-[18px] text-slate-600">This structured framework ensures you focus on growth, not operational chaos.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0066cc] hover:shadow-lg transition-all group">
                                <div className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">{step.step}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0066cc] transition-colors leading-tight">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Different and Tools */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Differentiators */}
                        <div>
                            <h2 className="text-[32px] font-bold text-slate-900 mb-8">What Makes Our IPP Different?</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                Unlike traditional reseller or affiliate models, this partnership is built around:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {differentiators.map((diff, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                        <div className="text-[#0066cc]">{diff.icon}</div>
                                        <span className="font-semibold text-slate-800">{diff.title}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-lg font-medium text-slate-700 italic">
                                We operate with a results-first mindset, combining creativity, analytics, and automation.
                            </p>
                        </div>

                        {/* Tech Stats */}
                        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                            <h3 className="text-[28px] font-bold text-slate-900 mb-6">Technology & Tools Advantage</h3>
                            <p className="text-slate-600 mb-6">Our backend ecosystem integrates:</p>
                            <div className="space-y-4">
                                {toolsPoints.map((tool, index) => (
                                    <div key={index} className="flex items-center gap-3 text-lg text-slate-700">
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">✓</div>
                                        {tool}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <p className="text-center font-bold text-slate-900 text-lg">
                                    This ensures that every campaign is measurable, scalable, and aligned with client ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Revenue & Support */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-[36px] font-bold text-slate-900 mb-6">Revenue & Growth Potential</h2>
                        <p className="text-[18px] text-slate-700 leading-relaxed mb-8">
                            Digital marketing is one of the fastest-growing global industries. With the IPP model, you get <strong>Low operational investment, No infrastructure burden, No hiring stress, High-margin service offerings, and Unlimited scalability.</strong>
                        </p>
                        <p className="text-2xl font-bold text-[#0066cc] mb-12">You can build a long-term, recurring revenue business.</p>
                    </div>

                    <div className="bg-gradient-to-r from-[#0066cc] to-[#00458a] rounded-3xl p-12 text-white text-center">
                        <h2 className="text-[32px] font-bold mb-8">Support & Training</h2>
                        <p className="text-lg mb-8 opacity-90 text-white">Our IPP partners receive comprehensive backing because we grow when you grow.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {supportPoints.map((point, index) => (
                                <div key={index} className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all cursor-default">
                                    {point}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-800 text-white text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-[40px] font-bold mb-6 leading-tight text-white">Your Opportunity Starts Now</h2>
                        <p className="text-[18px] text-slate-300 mb-8 max-w-2xl mx-auto">
                            If you’ve been planning to start your own digital marketing company but were unsure about operations, team management, or service delivery — this is your opportunity.
                        </p>
                        <p className="text-[24px] font-bold text-blue-300 mb-10">
                            Build authority. Generate recurring revenue. Create scalable impact.
                        </p>

                        <div className="p-10 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-[28px] font-bold mb-4">Take the Next Step</h3>
                            <p className="text-lg mb-8 text-slate-300">Join the IPP network and build your digital marketing venture with confidence.</p>
                            <Link to="/contact" className="inline-flex items-center gap-3 bg-[#0066cc] text-white py-4 px-10 rounded-full text-[20px] font-bold transition-all duration-300 hover:bg-blue-600 hover:-translate-y-2 hover:shadow-2xl">
                                Become a Strategic Growth Partner <ArrowRight size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IPP;
