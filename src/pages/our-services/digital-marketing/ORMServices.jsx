import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ORMImage from "../../../assets/ORM.png";
import KeyBenefitsofProfessionalORMImage from "../../../assets/KeyBenefitsofProfessionalORM.png"
import WhyORMMattersMoreThanEverImage from "../../../assets/WhyORMMattersMoreThanEver.png"
import { Search, TrendingUp, Activity, Rocket, PenTool, Eye, CheckCircle,  } from 'lucide-react';

const ORMServices = () => {
  const navigate = useNavigate();
     const [openIndex, setOpenIndex] = useState(null);

     const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


const services = [
  {
    title: "1. Reputation Audit & Risk Assessment",
    content: [
      "Negative search results",
      "Review sentiment patterns",
      "Brand mention gaps",
      "Competitive positioning",
      "Vulnerability touchpoints",
    ],
    description:
      "We conduct a deep-dive analysis across search engines, review platforms, news portals, blogs, and social media channels to identify:",
    closing:
      "This forms the blueprint of a custom ORM strategy.",
  },
  {
    title: "2. Search Engine Reputation Management (SERM)",
    content: [
      "High-authority content publishing",
      "SEO-driven brand assets",
      "Knowledge panel optimization",
      "Profile ranking enhancement",
      "Content suppression strategies",
      "Structured PR amplification",
    ],
    description:
      "Search results shape perception. We optimize what appears on Page 1.",
    closing:
      "The goal: When someone searches your brand, they see authority, credibility, and trust.",
  },
  {
    title: "3. Review Management & Response Strategy",
    content: [
      "Multi-platform review monitoring",
      "Sentiment analysis dashboards",
      "Professional response frameworks",
      "Review generation campaigns",
      "Crisis mitigation protocols",
    ],
    description:
      "Online reviews directly impact conversion rates.",
    closing:
      "This ensures your brand voice remains professional, proactive, and persuasive.",
  },
  {
    title: "4. Crisis Management & Damage Control",
    content: [
      "Rapid negative content identification",
      "Strategic PR outreach",
      "Controlled narrative publishing",
      "Media positioning",
      "Social media counter-strategy",
      "Legal coordination (if required)",
    ],
    description:
      "Reputation risks escalate quickly in the digital ecosystem.",
    closing:
      "We protect long-term brand equity while minimizing immediate damage.",
  },
  {
    title: "5. Social Media Reputation Monitoring",
    content: [
      "Brand mentions",
      "Influencer commentary",
      "Trending narratives",
      "Audience sentiment shifts",
    ],
    description:
      "Social conversations move faster than search engines.",
    closing:
      "With Adkryoss managed by Clink Consultancy Services Private Limited, insights are transformed into proactive engagement strategies that build positive community trust.",
  },
  {
    title: "6. Personal & Corporate Brand Reputation",
    content: [
      "Google Search",
      "LinkedIn & Professional Networks",
      "Wikipedia & Authority Platforms",
      "Media Publications",
      "Industry Portals",
    ],
    description:
      "Whether you are a corporate brand, startup founder, CXO, political personality, healthcare provider, or educational institution — we build reputation assets that enhance credibility across:",
    closing:
      "Your digital footprint becomes a growth engine.",
  },
];


const industries = [
  {
    title: "Healthcare & Hospitals",
    icon: (
      <svg className="w-10 h-10 text-emerald-600 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 8v8M8 12h8M4 21h16V7l-8-4-8 4v14z" />
      </svg>
    ),
  },
  {
    title: "Real Estate Developers",
    icon: (
      <svg className="w-10 h-10 text-emerald-600 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 21h18M5 21V10l7-7 7 7v11" />
      </svg>
    ),
  },
  {
    title: "E-commerce & D2C Brands",
    icon: (
      <svg className="w-10 h-10 text-emerald-600 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1 6h12M10 21a1 1 0 100-2 1 1 0 000 2zM18 21a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
    ),
  },
  {
    title: "EdTech & Institutions",
    icon: (
      <svg className="w-10 h-10 text-emerald-600 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      </svg>
    ),
  },
  {
    title: "Finance & FinTech",
    icon: (
      <svg className="w-10 h-10 text-emerald-600 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 1v22M5 6h14M5 18h14" />
      </svg>
    ),
  },
  {
    title: "Political Campaigns",
    icon: (
      <svg className="w-10 h-10 text-emerald-600 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M2 20h20M12 4v16M6 8h12" />
      </svg>
    ),
  },
  {
    title: "IT & SaaS Companies",
    icon: (
      <svg className="w-10 h-10 text-emerald-600 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M9.75 3a6.75 6.75 0 016.5 0M3 12h18M9 21h6" />
      </svg>
    ),
  },
  {
    title: "Hospitality & Travel",
    icon: (
      <svg className="w-10 h-10 text-emerald-600 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 7h18M5 7v13M19 7v13M8 21v-6h8v6" />
      </svg>
    ),
  },
];

    return (
        <>






{/* <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    <div className="text-left text-white space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Online Reputation & ORM Services
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Control the Narrative. Command the Market.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        Your online reputation is your most powerful asset. We help you protect it, repair it, and elevate it with data-driven Online Reputation Management strategies that build trust and drive growth.
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

    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={ORMImage}
          alt="Section Image"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section> */}


<motion.section
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px] space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Online Reputation Management (ORM) Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Control the Narrative. Command the Market.
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-medium">
        Your online reputation is your most powerful asset. We help you protect it, repair it, and elevate it with data-driven Online Reputation Management strategies that build trust and drive growth.
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
      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={ORMImage}
          alt="ORM Services"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                     transform group-hover:-translate-y-2 transition duration-500"
        />

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

</motion.section>


<section className="px-8 md:px-16 lg:px-24 py-24 bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
            Why Online Reputation Matters More Than Ever
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In today’s digital-first economy, a single review, article, or social media mention 
            can influence buying decisions within seconds. Customers research before they engage. 
            Investors check credibility before they commit. Talent evaluates culture before they apply.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            If your brand narrative is not managed strategically, it will be shaped by external voices.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            That’s where <span className='text-lg text-gray-800 font-bold leading-relaxed'>Adkryoss managed by Clink Consultancy Services Private Limited </span> transforms 
            perception into measurable business advantage through structured, ethical, and 
            performance-driven ORM frameworks.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src={WhyORMMattersMoreThanEverImage}  alt="Online Reputation Management"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

<section className="px-8 md:px-16 lg:px-24 py-14 bg-gray-50">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Our Approach to ORM
      </h2>

      <p className="text-lg text-gray-700 mb-16 max-w-3xl">
        We don’t “hide” problems. We solve them with strategic digital positioning.
      </p>

      {/* 2 Cards Per Row */}
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white p-10 rounded-2xl border border-gray-200 shadow-sm 
                       transition-all duration-300 
                       hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500"
          >
            {/* Left Accent Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-emerald-600 
                            scale-y-0 group-hover:scale-y-100 
                            origin-top transition-transform duration-300 rounded-l-2xl"></div>

            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              {service.title}
            </h3>

            <p className="text-gray-700 mb-6">
              {service.description}
            </p>

            <ul className="space-y-3 mb-6">
              {service.content.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-800 font-medium">
              {service.closing}
            </p>
          </div>
        ))}
      </div>

    </section>


    <section className="px-8 md:px-16 lg:px-24 py-14 bg-white">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Industries We Serve
      </h2>

      <p className="text-lg text-gray-700 mb-16 max-w-3xl">
        Our ORM services cater to:
      </p>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 
                       transition-all duration-300 
                       hover:bg-emerald-600 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6">
              {industry.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 
                           transition-colors duration-300 
                           group-hover:text-white">
              {industry.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Closing Line */}
      <p className="text-lg text-gray-700 max-w-3xl">
        Each industry has unique reputation triggers. Our approach adapts accordingly.
      </p>

    </section>



    {/* Why Choose Our ORM Framework */}
<section className="px-8 md:px-16 lg:px-24 py-14 bg-gray-50">

  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Why Choose Our ORM Framework
  </h2>

  <p className="text-lg text-gray-700 mb-16 max-w-3xl">
    Through structured systems and measurable KPIs, Adkryoss managed by Clink Consultancy Services Private Limited delivers sustainable digital credibility that compounds over time.
  </p>

  {/* Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500">
      <div className="mb-6">
        <svg className="w-10 h-10 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-4">Strategic, Not Reactive</h3>
      <p className="text-gray-700">
        We build proactive reputation assets before crises occur.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500">
      <div className="mb-6">
        <svg className="w-10 h-10 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-4">SEO-Integrated Reputation Strategy</h3>
      <p className="text-gray-700">
        Reputation without SEO doesn’t scale. We align ORM with search visibility.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500">
      <div className="mb-6">
        <svg className="w-10 h-10 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M11 17a4 4 0 100-8 4 4 0 000 8z" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-4">Data-Led Sentiment Intelligence</h3>
      <p className="text-gray-700">
        We measure sentiment shifts, not assumptions.
      </p>
    </div>

    {/* Card 4 */}
    <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500">
      <div className="mb-6">
        <svg className="w-10 h-10 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M9 17v-6h6v6M5 21h14a2 2 0 002-2V7l-9-4-9 4v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-4">Transparent Reporting</h3>
      <p className="text-gray-700">
        Monthly dashboards covering ranking shifts, review growth, sentiment scores, and brand visibility.
      </p>
    </div>

    {/* Card 5 */}
    <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500">
      <div className="mb-6">
        <svg className="w-10 h-10 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-4">Ethical & Sustainable Methods</h3>
      <p className="text-gray-700">
        No black-hat suppression tactics. Only compliant, long-term strategies.
      </p>
    </div>

  </div>

  {/* Shape Divider */}
  <div className="flex justify-center mt-20">
    <div className="w-24 h-1 bg-emerald-600 rounded-full opacity-40"></div>
  </div>

</section>



<section
  className="w-full py-14 px-6 md:px-16 lg:px-4 text-white bg-cover bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/proven-sec-back.png')",
  }}
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      Our ORM Process
    </h2>

    {/* Process Flow Line */}
    <div className="text-lg md:text-xl text-blue-100 mb-16">
      Discover → Strategize → Execute → Monitor → Optimize → Scale
    </div>

    {/* Grid - 3 Cards Per Row */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-blue-800/60 backdrop-blur-sm p-6 rounded-xl 
                      hover:bg-[#197BB4] transition duration-300 
                      flex flex-col">
        <Search className="w-12 h-12 mb-4 text-green-400" />
        <h3 className="text-lg font-semibold">
          Reputation & Sentiment Audit
        </h3>
      </div>

      <div className="bg-blue-800/60 backdrop-blur-sm p-6 rounded-xl 
                      hover:bg-[#197BB4] transition duration-300 
                      flex flex-col">
        <PenTool className="w-12 h-12 mb-4 text-green-400" />
        <h3 className="text-lg font-semibold">
          Custom ORM Roadmap
        </h3>
      </div>

      <div className="bg-blue-800/60 backdrop-blur-sm p-6 rounded-xl 
                      hover:bg-[#197BB4] transition duration-300 
                      flex flex-col">
        <Rocket className="w-12 h-12 mb-4 text-green-400" />
        <h3 className="text-lg font-semibold">
          Content & SEO Deployment
        </h3>
      </div>

      <div className="bg-blue-800/60 backdrop-blur-sm p-6 rounded-xl 
                      hover:bg-[#197BB4] transition duration-300 
                      flex flex-col">
        <Activity className="w-12 h-12 mb-4 text-green-400" />
        <h3 className="text-lg font-semibold">
          Media & Platform Amplification
        </h3>
      </div>

      <div className="bg-blue-800/60 backdrop-blur-sm p-6 rounded-xl 
                      hover:bg-[#197BB4] transition duration-300 
                      flex flex-col">
        <Eye className="w-12 h-12 mb-4 text-green-400" />
        <h3 className="text-lg font-semibold">
          Continuous Monitoring
        </h3>
      </div>

      <div className="bg-blue-800/60 backdrop-blur-sm p-6 rounded-xl 
                      hover:bg-[#197BB4] transition duration-300 
                      flex flex-col">
        <TrendingUp className="w-12 h-12 mb-4 text-green-400" />
        <h3 className="text-lg font-semibold">
          Performance Reporting
        </h3>
      </div>

    </div>

  </div>
</section>




<section className="w-full py-16 px-6 md:px-16 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Side - Points */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">
        Key Benefits of Professional ORM
      </h2>

      <ul className="space-y-5 text-lg">
        {[
          "Improved Brand Trust",
          "Higher Conversion Rates",
          "Stronger Investor Confidence",
          "Better Talent Acquisition",
          "Increased Search Visibility",
          "Reduced Risk Exposure",
          "Long-Term Brand Authority",
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-lg text-blue-200">
        Reputation directly impacts revenue. We treat it like a performance channel.
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="flex justify-center">
      <img
        src={KeyBenefitsofProfessionalORMImage}  alt="ORM Benefits"
        className="w-full max-w-md"
      />
    </div>

  </div>
</section>

<section className="bg-white py-6 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {[
        {
          question: "What is Online Reputation Management?",
          answer:
            "ORM is the strategic process of monitoring, influencing, and improving how a brand or individual appears online across search engines, review platforms, and social channels.",
        },
        {
          question: "How long does ORM take to show results?",
          answer:
            "Initial improvements can be seen within 60–90 days, while long-term authority building is an ongoing strategy.",
        },
        {
          question: "Can negative search results be removed?",
          answer:
            "Removal depends on the source and platform policies. Where removal isn’t possible, we implement structured content and SEO strategies to reduce visibility impact.",
        },
        {
          question: "Is ORM suitable for startups?",
          answer:
            "Absolutely. Startups benefit significantly from proactive reputation positioning before scaling aggressively.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg transition duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left p-6 hover:bg-blue-50 transition duration-300"
          >
            <span className="font-bold text-black text-lg">
              {faq.question}
            </span>

            <span className="text-2xl font-bold text-black">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>


<section className="py-20 px-6 text-center text-white" style={{ background: "linear-gradient(135deg, #4f46e5, #6366f1)" }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Take Control of Your Digital Narrative
        </h2>
        <p className="text-lg md:text-xl mb-6 text-white">
          Your brand reputation is not accidental — it’s engineered.
        </p>
        <p className="text-base md:text-lg mb-8 text-white">
          Partner with Adkryoss managed by Clink Consultancy Services Private Limited to build, protect, and scale a powerful online presence that inspires trust and drives growth.
        </p>
        <button 
        onClick={()=>navigate("/contact?service=orm")}
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
          Start Building a Reputation That Converts
        </button>
      </div>
    </section>

        </>
    );
};

export default ORMServices;
