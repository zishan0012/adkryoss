import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ORMImage from "../../../assets/ORM.png";
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
  className="relative flex items-center min-h-[70vh] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

    
      <div className="text-left lg:text-left text-white space-y-6 mx-auto lg:mx-0">

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

  

     <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
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

<section
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
</section>


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
            src="data:image/jpeg;base64,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" 
            alt="Online Reputation Management"
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
        src="data:image/jpeg;base64,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"  // replace with your svg path
        alt="ORM Benefits"
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
