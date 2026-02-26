import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutImage from "../../assets/About.jpeg";
import WhoWeAreImage from "../../assets/WhoWeAre.png";
import WhyPartnerImage from "../../assets/WhyPartner.png";
import { motion } from 'framer-motion';


const steps = [
  {
    title: "Discover",
    desc: "We understand your business goals, competitors, audience behavior, and digital maturity level.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Strategize",
    desc: "We design a customized growth blueprint aligned with your KPIs, industry dynamics, and scalability objectives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "indigo",
  },
  {
    title: "Execute",
    desc: "Our cross-functional teams deploy campaigns across SEO, paid media, content, and social with precision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Optimize",
    desc: "Through real-time analytics, A/B testing, and data monitoring, we continuously improve performance metrics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M9 17V9m4 8v-4m4 4v-7" />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Scale",
    desc: "Once validated, we scale winning strategies to maximize ROI and long-term brand equity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8M14 7h7v7" />
      </svg>
    ),
    color: "red",
  },
];


const AboutUs = () => {
  const navigate = useNavigate();
   const [activeStep, setActiveStep] = useState(null);
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
        About Us
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Performance. Precision. Possibility.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        Adkryoss managed by Clink Consultancy Services pvt. ltd is a 
        next-generation digital marketing powerhouse built for brands 
        that refuse to settle for average growth.
        <br />
        We don’t just execute campaigns. We engineer scalable digital 
        ecosystems that drive measurable revenue, stronger brand authority, 
        and long-term competitive advantage.
        <br />
        In a world where algorithms evolve daily and consumer behavior 
        shifts overnight, we combine strategy, creativity, and data 
        intelligence to help businesses stay ahead — not just relevant.
      </p>

    </div>




 



 <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
    <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
    <img
      src={AboutImage}
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
    <div className="text-left max-w-[600px]">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          About Us
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Performance. Precision. Possibility.
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed">
        Adkryoss managed by Clink Consultancy Services pvt. ltd is a 
        next-generation digital marketing powerhouse built for brands 
        that refuse to settle for average growth.
        <br /><br />
        We don’t just execute campaigns. We engineer scalable digital 
        ecosystems that drive measurable revenue, stronger brand authority, 
        and long-term competitive advantage.
        <br /><br />
        In a world where algorithms evolve daily and consumer behavior 
        shifts overnight, we combine strategy, creativity, and data 
        intelligence to help businesses stay ahead — not just relevant.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">

      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={AboutImage}
          alt="About Section"
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
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(30px);
        }
      }
    `}
  </style>

</motion.section>




<motion.section className="py-20 bg-white"
initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE */}
    <div className="space-y-8">

      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16">
        Who We Are
      </h2>

      <img
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6ePIzJwyvdiGSKLu7yz2ZKmfnkavNZ7vCA&s"
        src={WhoWeAreImage}
        alt="Who We Are"
        className="w-full rounded-2xl shadow-lg object-cover"
      />

    </div>


    {/* RIGHT SIDE */}
    <div className="space-y-6 text-gray-700 mt-10">

      <p className="text-lg leading-relaxed">
        We are strategists, analysts, storytellers, technologists, 
        and growth architects.
      </p>

      <p className="text-lg leading-relaxed">
        Backed by the operational strength and consulting foundation of 
        Clink Consultancy Services Pvt. Ltd., Adkryoss is designed to 
        deliver enterprise-grade marketing solutions with agile execution.
      </p>

      <p className="text-lg font-semibold text-gray-900 mt-6">
        Our approach blends:
      </p>

      <ul className="space-y-3 text-lg font-medium">
        <li>✔ Deep market research</li>
        <li>✔ AI-driven performance insights</li>
        <li>✔ Creative storytelling</li>
        <li>✔ Conversion-focused strategy</li>
        <li>✔ Continuous optimization</li>
      </ul>

      <p className="text-lg leading-relaxed pt-4">
        We work with startups, SMEs, and growing enterprises to transform 
        digital channels into predictable revenue engines.
      </p>

    </div>

  </div>
</motion.section>


<motion.section className="py-18 bg-gray-50"
initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-4xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Why Businesses Choose Us
      </h2>

      <p className="text-xl text-gray-700 font-medium">
        Visibility is easy to promise. <br />
        <span className="text-gray-900 font-semibold">
          Impact is harder to deliver.
        </span>
      </p>

      <p className="text-lg text-gray-600 mt-6 leading-relaxed">
        At Adkryoss managed by Clink Consultancy Services pvt. ltd, 
        we don’t chase impressions — we engineer measurable growth. 
        Every campaign, framework, and optimization is aligned with one objective:
        <span className="font-semibold text-gray-900">
          {" "}sustainable business performance.
        </span>
      </p>
    </div>


    {/* 4 FEATURE BLOCKS */}
    <div className="grid md:grid-cols-2 gap-12">

      {/* CARD 01 */}
     
        {/* <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-300"> */}
        <div className="group relative bg-white p-10 rounded-3xl 
                border-l-4 border-b-4 border-orange-300
                shadow-lg hover:shadow-2xl 
                hover:bg-blue-100 
                transition-all duration-500 
                hover:-translate-y-3 
                overflow-hidden">
      
        <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-500">
          01. Growth Anchored in Revenue
        </h3>
        <p className="text-gray-600 mb-4 font-medium">
          Clicks don’t pay bills. Conversions do.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>✔ High-intent audience acquisition</li>
          <li>✔ Lead quality over lead quantity</li>
          <li>✔ Cost efficiency across funnels</li>
          <li>✔ Revenue attribution clarity</li>
        </ul>
        <p className="mt-4 text-gray-600">
          We build marketing systems that directly influence your bottom line — 
          not just your traffic graph.
        </p>
      </div>





      {/* CARD 02 */}
    
      {/* <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-300"> */}
      <div className="group relative bg-white p-10 rounded-3xl 
                border-l-4 border-b-4 border-orange-300
                shadow-lg hover:shadow-2xl 
                hover:bg-blue-100 
                transition-all duration-500 
                hover:-translate-y-3 
                overflow-hidden">
   
        <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-500">
          02. Intelligence-Driven Strategy
        </h3>
        <p className="text-gray-600 mb-4">
          Guesswork has no place in performance marketing.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>✔ Advanced keyword & search intent mapping</li>
          <li>✔ Customer journey analytics</li>
          <li>✔ Behavioral segmentation insights</li>
          <li>✔ Predictive performance modeling</li>
        </ul>
        <p className="mt-4 text-gray-600">
          Every action is backed by data signals, competitive analysis, 
          and real-time performance tracking.
        </p>
      </div>

      {/* CARD 03 */}
  
      {/* <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-300"> */}
      <div className="group relative bg-white p-10 rounded-3xl 
                border-l-4 border-b-4 border-orange-300
                shadow-lg hover:shadow-2xl 
                hover:bg-blue-100 
                transition-all duration-500 
                hover:-translate-y-3 
                overflow-hidden">

        <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-500">
          03. Connected Digital Infrastructure
        </h3>
        <p className="text-gray-600 mb-4">
          Growth doesn’t happen in isolated channels.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>✔ SEO + Paid Media synergy</li>
          <li>✔ Content aligned with search intent</li>
          <li>✔ Social amplification strategies</li>
          <li>✔ Conversion-optimized web experiences</li>
        </ul>
        <p className="mt-4 text-gray-600">
          Every channel strengthens the other — multiplying results instead of fragmenting efforts.
        </p>
      </div>

      {/* CARD 04 */}
     
      {/* <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-300"> */}
      <div className="group relative bg-white p-10 rounded-3xl 
                border-l-4 border-b-4 border-orange-300
                shadow-lg hover:shadow-2xl 
                hover:bg-blue-100 
                transition-all duration-500 
                hover:-translate-y-3 
                overflow-hidden">

        <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-500">
          04. Built for Constant Change
        </h3>
        <p className="text-gray-600 mb-4">
          The digital landscape evolves daily.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>✔ Proactive algorithm monitoring</li>
          <li>✔ AI-driven search adaptation</li>
          <li>✔ Privacy-compliant tracking models</li>
          <li>✔ Continuous growth channel testing</li>
        </ul>
        <p className="mt-4 text-gray-600">
          Your strategy doesn’t remain static. It evolves — intelligently.
        </p>
      </div>

    </div>


   {/* OUTCOME SECTION */}
<div className="mt-28">

  <div className="grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT – BIG HEADING */}
    <div>
      <h3 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
        The <br /> <h3 className='text-blue-600'>Outcome?</h3>
      </h3>
    </div>

    {/* RIGHT – BOLD POINTS */}
    <div className="space-y-4">
      <p className="text-xl md:text-2xl font-semibold text-gray-800">
        Sustainable growth.
      </p>
      <p className="text-xl md:text-2xl font-semibold text-gray-800">
        Higher marketing efficiency.
      </p>
      <p className="text-xl md:text-2xl font-semibold text-gray-800">
        Stronger brand authority.
      </p>
      <p className="text-xl md:text-2xl font-semibold text-gray-800">
        Performance that compounds over time.
      </p>
    </div>

  </div>

  {/* FULL WIDTH CENTERED PARAGRAPH */}
  <div className="mt-16 text-center max-w-4xl mx-auto">
    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
      That’s the difference with Adkryoss managed by 
      Clink Consultancy Services pvt. ltd.
    </p>
  </div>

</div>

  </div>
</motion.section>


{/* <section className="py-8 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Our Core Expertise
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        We offer full-spectrum digital growth solutions designed for modern brands.
      </p>
    </div>

    
    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Search Engine Optimization (SEO)</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Enterprise & Local SEO</li>
          <li>Technical SEO Audits</li>
          <li>E-commerce SEO</li>
          <li>Content-Led Organic Growth</li>
          <li>AI Search Optimization</li>
        </ul>
      </div>

      
      <div className="bg-green-500 text-white p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Performance Marketing</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Google Ads & PPC Campaigns</li>
          <li>Meta & Social Advertising</li>
          <li>Conversion Rate Optimization (CRO)</li>
          <li>Retargeting & Funnel Optimization</li>
          <li>ROI-Driven Media Planning</li>
        </ul>
      </div>

      <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Brand Strategy & Positioning</li>
          <li>Paid Social Campaigns</li>
          <li>Community Growth</li>
          <li>Influencer Collaborations</li>
          <li>Content Production & Creative Direction</li>
        </ul>
      </div>

      
      <div className="bg-green-500 text-white p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Content & Inbound Marketing</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>SEO-Optimized Blog Strategy</li>
          <li>Thought Leadership Content</li>
          <li>Landing Page Optimization</li>
          <li>Marketing Automation</li>
          <li>Email & Funnel Sequences</li>
        </ul>
      </div>

      
      <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Web & Experience Optimization</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Conversion-Focused Website Design</li>
          <li>UX & UI Strategy</li>
          <li>Speed & Performance Optimization</li>
          <li>Analytics & Heatmap Tracking</li>
        </ul>
      </div>

    </div>

  </div>
</section> */}



<motion.section className="py-8 bg-gray-100"
initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADING */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Our Core Expertise
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        We offer full-spectrum digital growth solutions designed for modern brands.
      </p>
    </div>

    {/* GRID CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-blue-100 text-blue-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-bold mb-4">Search Engine Optimization (SEO)</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Enterprise & Local SEO</li>
          <li>Technical SEO Audits</li>
          <li>E-commerce SEO</li>
          <li>Content-Led Organic Growth</li>
          <li>AI Search Optimization</li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div className="bg-green-100 text-green-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-bold mb-4">Performance Marketing</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Google Ads & PPC Campaigns</li>
          <li>Meta & Social Advertising</li>
          <li>Conversion Rate Optimization (CRO)</li>
          <li>Retargeting & Funnel Optimization</li>
          <li>ROI-Driven Media Planning</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div className="bg-purple-100 text-purple-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Brand Strategy & Positioning</li>
          <li>Paid Social Campaigns</li>
          <li>Community Growth</li>
          <li>Influencer Collaborations</li>
          <li>Content Production & Creative Direction</li>
        </ul>
      </div>

      {/* CARD 4 */}
      <div className="bg-yellow-100 text-yellow-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-bold mb-4">Content & Inbound Marketing</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>SEO-Optimized Blog Strategy</li>
          <li>Thought Leadership Content</li>
          <li>Landing Page Optimization</li>
          <li>Marketing Automation</li>
          <li>Email & Funnel Sequences</li>
        </ul>
      </div>

      {/* CARD 5 */}
      <div className="bg-pink-100 text-pink-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-bold mb-4">Web & Experience Optimization</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Conversion-Focused Website Design</li>
          <li>UX & UI Strategy</li>
          <li>Speed & Performance Optimization</li>
          <li>Analytics & Heatmap Tracking</li>
        </ul>
      </div>

    </div>

  </div>
</motion.section>



{/* <section className="py-8 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Our Working Model
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        We follow a structured yet agile growth framework.
      </p>
    </div>

  
    <div className="grid md:grid-cols-5 gap-8">

      
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
         
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          Discover
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We understand your business goals, competitors, audience behavior,
          and digital maturity level.
        </p>
      </div>

      
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
      
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          Strategize
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We design a customized growth blueprint aligned with your KPIs,
          industry dynamics, and scalability objectives.
        </p>
      </div>

     
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5">
    
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 7h16M4 12h10M4 17h16" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          Execute
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our cross-functional teams deploy campaigns across SEO, paid media,
          content, and social with precision.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
       
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 3v18h18M9 17V9m4 8v-4m4 4v-7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          Optimize
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Through real-time analytics, A/B testing, and data monitoring,
          we continuously improve performance metrics.
        </p>
      </div>

     
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-5">
         
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 17l6-6 4 4 8-8M14 7h7v7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          Scale
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Once validated, we scale winning strategies to maximize ROI
          and long-term brand equity.
        </p>
      </div>

    </div>

  </div>
</section> */}

<motion.section className="py-8 bg-gray-50"
initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Working Model</h2>
          <p className="text-lg text-gray-600 mt-4">We follow a structured yet agile growth framework.</p>
        </div>

        {/* STEPS GRID */}
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
          <div
  key={i}
  onClick={() => setActiveStep(step)}
  className={`cursor-pointer p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300
    ${step.color === "green" ? "bg-green-100/80 shadow-green-400/50 hover:shadow-green-500/70" : ""}
    ${step.color === "red" ? "bg-red-100/80 shadow-red-400/50 hover:shadow-red-500/70" : ""}
    ${step.color === "blue" ? "bg-blue-100/80 shadow-blue-400/50 hover:shadow-blue-500/70" : ""}
    ${step.color === "indigo" ? "bg-indigo-100/80 shadow-indigo-400/50 hover:shadow-indigo-500/70" : ""}
    ${step.color === "purple" ? "bg-purple-100/80 shadow-purple-400/50 hover:shadow-purple-500/70" : ""}
  `}
>
  <div className={`w-14 h-14 bg-${step.color}-200 rounded-xl flex items-center justify-center mb-5`}>
    <div className={`text-${step.color}-600`}>{step.icon}</div>
  </div>
  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
  <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
</div>
          ))}
        </div>
      </div>

      {/* MODAL POP-UP */}
      {activeStep && (
        <div
          onClick={() => setActiveStep(null)}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <div
            className={`bg-white rounded-3xl max-w-3xl w-full p-12 relative animate-scale-up`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={`text-4xl font-bold mb-6 text-${activeStep.color}-600`}>
              {activeStep.title}
            </h2>
            <p className="text-lg text-gray-700">{activeStep.desc}</p>
            <button
              onClick={() => setActiveStep(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </motion.section>





<motion.section className="py-10 px-6 bg-gray-50"
initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <h2 className="text-4xl font-bold text-center mb-16">
      Our Vision & Mission
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Vision Card */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-blue-100/80 shadow-blue-400/50">

        <div className="flex items-start gap-6">
          {/* Logo */}
          <img
            src="https://www.techmagnate.com/wp-content/uploads/2025/08/vission.webp"
            alt="Vision"
            className="w-16 h-16 object-contain"
          />

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a globally trusted digital growth partner that helps
              brands dominate their industry through intelligent marketing
              and sustainable digital systems.
            </p>
          </div>
        </div>

      </div>

      {/* Mission Card */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-orange-100/80 shadow-orange-400/50">

        <div className="flex items-start gap-6">
          {/* Logo */}
          <img
            src="https://www.techmagnate.com/wp-content/uploads/2025/08/mission.webp"
            alt="Mission"
            className="w-16 h-16 object-contain"
          />

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To combine innovation, strategy, and performance marketing expertise
              to deliver measurable results that directly impact revenue and
              brand authority.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</motion.section>



<motion.section className="py-20 px-6 bg-white"
initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <h2 className="text-4xl font-bold text-center mb-4">
      Industries We Serve
    </h2>
    <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
      We deliver tailored digital growth strategies across diverse industries,
      helping brands scale with performance-driven solutions.
    </p>

    {/* Industry Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

      {/* Card 1 */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 "> */}
      <div className="group relative bg-gray-50 p-8 rounded-2xl text-center 
                shadow-sm hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 overflow-hidden shadow-orange-400/100">

  {/* Left Sliding Line */}
  <span className="absolute top-0 left-0 h-full w-1 bg-orange-500 
                   scale-y-0 group-hover:scale-y-100 
                   origin-bottom transition-transform duration-300" />

  {/* Bottom Sliding Line */}
  <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-500 
                   scale-x-0 group-hover:scale-x-100 
                   origin-left transition-transform duration-300" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
          alt="E-commerce"
          className="w-16 h-16 mx-auto mb-6 object-contain"
        />
        <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-[#0066cc]">
          E-commerce & D2C Brands
        </h3>
      </div>

      {/* Card 2 */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"> */}
       <div className="group relative bg-gray-50 p-8 rounded-2xl text-center 
                shadow-sm hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 overflow-hidden shadow-orange-400/100">

  {/* Left Sliding Line */}
  <span className="absolute top-0 left-0 h-full w-1 bg-orange-500 
                   scale-y-0 group-hover:scale-y-100 
                   origin-bottom transition-transform duration-300" />

  {/* Bottom Sliding Line */}
  <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-500 
                   scale-x-0 group-hover:scale-x-100 
                   origin-left transition-transform duration-300" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Education"
          className="w-16 h-16 mx-auto mb-6 object-contain"
        />
        <h3 className="font-semibold text-lg  transition-colors duration-300 group-hover:text-[#0066cc]">
          Education & EdTech
        </h3>
      </div>

      {/* Card 3 */}

      {/* <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"> */}
       <div className="group relative bg-gray-50 p-8 rounded-2xl text-center 
                shadow-sm hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 overflow-hidden shadow-orange-400/100">

  {/* Left Sliding Line */}
  <span className="absolute top-0 left-0 h-full w-1 bg-orange-500 
                   scale-y-0 group-hover:scale-y-100 
                   origin-bottom transition-transform duration-300" />

  {/* Bottom Sliding Line */}
  <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-500 
                   scale-x-0 group-hover:scale-x-100 
                   origin-left transition-transform duration-300" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
          alt="Healthcare"
          className="w-16 h-16 mx-auto mb-6 object-contain"
        />
        <h3 className="font-semibold text-lg  transition-colors duration-300 group-hover:text-[#0066cc]">
          Healthcare
        </h3>
      </div>

      {/* Card 4 */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"> */}
       <div className="group relative bg-gray-50 p-8 rounded-2xl text-center 
                shadow-sm hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 overflow-hidden shadow-orange-400/100">

  {/* Left Sliding Line */}
  <span className="absolute top-0 left-0 h-full w-1 bg-orange-500 
                   scale-y-0 group-hover:scale-y-100 
                   origin-bottom transition-transform duration-300" />

  {/* Bottom Sliding Line */}
  <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-500 
                   scale-x-0 group-hover:scale-x-100 
                   origin-left transition-transform duration-300" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3063/3063823.png"
          alt="Corporate"
          className="w-16 h-16 mx-auto mb-6 object-contain"
        />
        <h3 className="font-semibold text-lg  transition-colors duration-300 group-hover:text-[#0066cc]">
          Corporate & B2B Services
        </h3>
      </div>

      {/* Card 5 */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"> */}
       <div className="group relative bg-gray-50 p-8 rounded-2xl text-center 
                shadow-sm hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 overflow-hidden shadow-orange-400/100">

  {/* Left Sliding Line */}
  <span className="absolute top-0 left-0 h-full w-1 bg-orange-500 
                   scale-y-0 group-hover:scale-y-100 
                   origin-bottom transition-transform duration-300" />

  {/* Bottom Sliding Line */}
  <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-500 
                   scale-x-0 group-hover:scale-x-100 
                   origin-left transition-transform duration-300" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="Startups"
          className="w-16 h-16 mx-auto mb-6 object-contain"
        />
        <h3 className="font-semibold text-lg  transition-colors duration-300 group-hover:text-[#0066cc]">
          Startups & Technology Companies
        </h3>
      </div>

      {/* Card 6 */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"> */}
       <div className="group relative bg-gray-50 p-8 rounded-2xl text-center 
                shadow-sm hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 overflow-hidden  shadow-orange-400/100">

  {/* Left Sliding Line */}
  <span className="absolute top-0 left-0 h-full w-1 bg-orange-500 
                   scale-y-0 group-hover:scale-y-100 
                   origin-bottom transition-transform duration-300" />

  {/* Bottom Sliding Line */}
  <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-500 
                   scale-x-0  group-hover:scale-x-100 
                   origin-left transition-transform duration-300" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
          alt="Real Estate"
          className="w-16 h-16 mx-auto mb-6 object-contain"
        />
        <h3 className="font-semibold text-lg  transition-colors duration-300 group-hover:text-[#0066cc]">
          Real Estate & Local Businesses
        </h3>
      </div>

    </div>

  </div>
</motion.section>


<motion.section className="py-24 px-6 bg-gray-50" 
initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
  <div className="max-w-6xl mx-auto">

    {/* Top Content */}
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* Left Side Content */}
      <div>
        <h2 className="text-4xl font-bold mb-8">
          Why Partner With Us?
        </h2>

        <ul className="space-y-4">
          {[
            "Transparent reporting & performance dashboards",
            "Dedicated account management",
            "AI-powered research & forecasting",
            "Agile execution model",
            "Scalable marketing systems",
            "ROI-focused campaign structure"
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-4">
              
              {/* Check Icon */}
              <span className="text-green-600 text-xl mt-1">✔</span>
              
              <span className="text-gray-700 text-lg font-medium">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Image */}
      <div className="flex justify-center">
        <img
          // src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          src={WhyPartnerImage}
          alt="Partnership"
          className="rounded-2xl shadow-lg w-full h-100 max-w-md object-cover"
        />
      </div>

    </div>

    {/* Bottom Full Width Paragraph */}
    <div className="mt-20 text-center max-w-4xl mx-auto">
      <p className="text-xl text-gray-700 leading-relaxed">
        At <span className="font-bold">Adkryoss managed by Clink Consultancy Services Pvt. Ltd</span>, 
        we believe growth is not accidental. It is designed, tested, optimized, and scaled.
      </p>
    </div>

  </div>
</motion.section>


<motion.section className="py-18 px-6 bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-center"
initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
  <div className="max-w-4xl mx-auto">

    {/* Main Heading */}
    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
      Let’s Build Your Digital Growth Engine
    </h2>

    {/* Supporting Text */}
    <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
      Whether you aim to increase organic visibility, generate high-quality leads, 
      dominate paid advertising, or build a powerful online brand presence — 
      we create strategies that move businesses forward.
    </p>

    {/* Strong Statement */}
    <div className="mb-10">
      <p className="text-2xl font-semibold mb-2 text-white">
        Your growth journey deserves more than generic marketing.
      </p>
      <p className="text-2xl font-semibold text-white">
        It deserves intelligent execution.
      </p>
    </div>

    {/* Brand Signature Line */}
    <p className="text-lg text-blue-200">
      <span className="font-semibold text-white">
        Adkryoss managed by Clink Consultancy Services Pvt. Ltd
      </span> — Where Strategy Meets Performance.
    </p>

    {/* Optional CTA Button */}
    <div className="mt-12">
      <button 
      onClick={()=>navigate("/contact")}
      className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300">
        Get Started Today
      </button>
    </div>

  </div>
</motion.section>

        </>
    );
};

export default AboutUs;
