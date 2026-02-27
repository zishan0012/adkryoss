import React from 'react';
import CROImage from "../../../assets/CRO.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import WhyAPCROIsNonNegotiableImage from "../../../assets/WhyAPCROIsNonNegotiable.png"
import WhenShouldYouInvestinAPCROImage from "../../../assets/WhenShouldYouInvestinAPCRO.png"

const AppCRO = () => {
  const navigate = useNavigate();
  return (
    <>




{/* <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
      {/* <section
  className="relative flex items-center min-h-[70vh] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
  <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

   
      <div className="text-left lg:text-left text-white space-y-6 mx-auto lg:mx-0">

      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
        AP CRO Services
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Turn Clicks Into Predictable Revenue
      </h3>

      <h3 className="text-2xl md:text-xl font-semibold leading-snug">
        Stop paying for traffic that doesn’t convert. Start building funnels that sell.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        AP CRO (Advanced Performance Conversion Rate Optimization) helps you unlock hidden revenue from your existing visitors through data, psychology, and AI-driven experimentation.
      </p>

    </div>

    



     <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={CROImage}
          alt="Section Image"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
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

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px] space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          AP CRO Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-blue-100">
        Turn Clicks Into Predictable Revenue
      </h3>

      <h3 className="text-lg md:text-xl font-semibold text-gray-300">
        Stop paying for traffic that doesn’t convert. Start building funnels that sell.
      </h3>

      <p className="text-gray-200 leading-relaxed">
        AP CRO (Advanced Performance Conversion Rate Optimization) helps you unlock hidden revenue 
        from your existing visitors through data, psychology, and AI-driven experimentation.
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
    <div className="flex justify-center md:justify-end">

      <div className="relative group w-full max-w-[420px]">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={CROImage}
          alt="AP CRO Services"
          className="relative w-full object-contain rounded-2xl shadow-2xl 
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

</section>



      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
              Why AP CRO Is Non-Negotiable in 2026
            </h2>
            <p className="mb-4 text-lg text-left">
              Most brands invest heavily in SEO, paid media, and social campaigns — but ignore what happens after the click.
            </p>
            <p className="mb-4 text-lg text-left font-semibold text-red-600">
              That’s where revenue leaks.
            </p>
            <p className="mb-4 text-lg text-left">
              AP CRO is not just button testing. It’s a structured, performance-first framework combining analytics, behavioral science, UX engineering, and AI-backed experimentation to systematically increase:
            </p>

            <ul className="list-none space-y-3 text-lg text-left">
              {[
                "Conversion Rates",
                "Average Order Value (AOV)",
                "Lead Quality",
                "Funnel Velocity",
                "Customer Lifetime Value"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-lg text-left font-semibold">
              At <span className="mt-6 text-lg text-left font-bold  text-black"> Adkryoss managed by Clink Consultancy Services Private Limited,</span> we treat CRO as a revenue growth engine — not a cosmetic website tweak.
            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={WhyAPCROIsNonNegotiableImage}
                alt="CRO performance illustration"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </section>


      <section id="services" className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-gray-900">
            Our AP CRO Framework
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zM12 3v5M12 16v5M3 12h5M16 12h5" />
              </svg>
              <h3 className="text-xl font-semibold">Conversion Intelligence Audit</h3>
              <ul className="list-disc ml-6 text-lg space-y-1">
                <li>GA4 + Tag Audit</li>
                <li>Heatmaps & Scroll Depth Analysis</li>
                <li>Session Recordings</li>
                <li>Funnel Drop-Off Diagnostics</li>
                <li>Technical UX Review</li>
                <li>Competitor Benchmarking</li>
              </ul>
              <p className="mt-2 font-semibold">Outcome: A detailed opportunity roadmap with revenue projections.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM12 14v7M12 3v5" />
              </svg>
              <h3 className="text-xl font-semibold">Behavioral & UX Engineering</h3>
              <ul className="list-disc ml-6 text-lg space-y-1">
                <li>Attention Mapping</li>
                <li>Friction Removal Strategy</li>
                <li>Value Proposition Refinement</li>
                <li>Trust Signal Optimization</li>
                <li>CTA Positioning & Messaging Framework</li>
              </ul>
              <p className="mt-2 font-semibold">We redesign for persuasion — not just aesthetics.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M12 3v18M4 4l16 16" />
              </svg>
              <h3 className="text-xl font-semibold">AI-Powered Experimentation</h3>
              <ul className="list-disc ml-6 text-lg space-y-1">
                <li>A/B & Multivariate Testing</li>
                <li>Dynamic Content Personalization</li>
                <li>AI-Based Segmentation</li>
                <li>Landing Page Variants</li>
                <li>Checkout Optimization</li>
                <li>Pricing & Offer Testing</li>
              </ul>
              <p className="mt-2 font-semibold">Every experiment is hypothesis-driven and statistically validated.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <h3 className="text-xl font-semibold">Funnel Acceleration & Automation</h3>
              <ul className="list-disc ml-6 text-lg space-y-1">
                <li>Multi-Step Funnel Optimization</li>
                <li>Retargeting Path Alignment</li>
                <li>CRM & Automation Sync</li>
                <li>Lead Scoring Optimization</li>
                <li>Cross-Device Experience Refinement</li>
              </ul>
              <p className="mt-2 font-semibold">We align paid traffic, landing pages, and CRM journeys into one seamless revenue pipeline.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-gray-900">
            What Makes Our AP CRO Different?
          </h2>

          <p className="mb-6 text-lg text-left">
            Unlike traditional CRO agencies that focus only on surface-level UI changes, Adkryoss managed by Clink Consultancy Services Private Limited integrates performance marketing, SEO insights, paid media data, and audience intelligence into the CRO strategy.
          </p>

          <p className="mb-6 text-lg text-left font-semibold text-red-600">
            We don’t test randomly. We engineer revenue growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Performance Media Insights",
              "Organic Traffic Behavior Data",
              "Advanced Funnel Analytics",
              "Martech Integration",
              "Conversion Copywriting"
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-gray-900">
            Industries We Optimize For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-Commerce & D2C */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19M7 13h10M10 21h4" />
              </svg>
              <h3 className="text-xl font-semibold">E-Commerce & D2C</h3>
            </div>

            {/* SaaS & Tech Platforms */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <h3 className="text-xl font-semibold">SaaS & Tech Platforms</h3>
            </div>



            {/* Real Estate & High-Value Lead Gen */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-6a4 4 0 014-4h10a4 4 0 014 4v6M9 21v-6h6v6" />
              </svg>
              <h3 className="text-xl font-semibold">Real Estate & High-Value Lead Gen</h3>
            </div>

            {/* Healthcare & Wellness */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <h3 className="text-xl font-semibold">Healthcare & Wellness</h3>
            </div>

            {/* B2B & Enterprise Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold">B2B & Enterprise Services</h3>
            </div>
          </div>

          <p className="mt-10 text-left text-lg text-gray-700">
            Every industry requires a unique persuasion framework — we customize accordingly.
          </p>
        </div>
      </section>


      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-gray-900">
            Metrics That Matter
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Conversion Rate Lift */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
              </svg>
              <h3 className="text-2xl font-bold">↑ 20–60%</h3>
              <p className="text-lg text-center">Conversion Rate Lift</p>
            </div>

            {/* Increase in AOV */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zM12 3v5M12 16v5" />
              </svg>
              <h3 className="text-2xl font-bold">↑ 15–40%</h3>
              <p className="text-lg text-center">Increase in AOV</p>
            </div>

            {/* Cost Per Acquisition */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m7 7H5" />
              </svg>
              <h3 className="text-2xl font-bold">↓ 25–50%</h3>
              <p className="text-lg text-center">Cost Per Acquisition</p>
            </div>

            {/* Higher ROAS */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h12" />
              </svg>
              <h3 className="text-2xl font-bold">↑ Higher</h3>
              <p className="text-lg text-center">ROAS from Existing Traffic</p>
            </div>

            {/* Improved Lead-to-Sales Ratio */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold">↑ Improved</h3>
              <p className="text-lg text-center">Lead-to-Sales Ratio</p>
            </div>
          </div>

          <p className="mt-10 text-left text-lg text-gray-700">
            Your growth should be predictable — not accidental.
          </p>
        </div>
      </section>


      <section className="py-20 px-6 bg-[#197BB4]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left text-gray-900">
            Our AP CRO Process Flow
          </h2>

          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md flex flex-col gap-4">
            <p className="text-xl font-bold text-gray-800">
              Audit → Strategy → Design → Experiment → Optimize → Scale
            </p>
            <p className="text-lg text-gray-700">
              We operate in continuous optimization cycles to ensure sustained growth, not one-time improvements.
            </p>
          </div>
        </div>
      </section>



      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-gray-900">
            Tools & Technology Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GA4 & Event Tracking */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <h3 className="text-xl font-semibold">GA4 & Advanced Event Tracking</h3>
              <p className="text-gray-700 text-lg">Measure user behavior, funnel events, and track conversions accurately.</p>
            </div>

            {/* Heatmapping & Behavior Analytics */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
              </svg>
              <h3 className="text-xl font-semibold">Heatmapping & Behavior Analytics Tools</h3>
              <p className="text-gray-700 text-lg">Understand attention, scroll depth, clicks, and friction points.</p>
            </div>

            {/* A/B Testing Platforms */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" />
              </svg>
              <h3 className="text-xl font-semibold">A/B Testing Platforms</h3>
              <p className="text-gray-700 text-lg">Run hypothesis-driven experiments with statistically validated results.</p>
            </div>

            {/* CRM & Marketing Automation */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <h3 className="text-xl font-semibold">CRM & Marketing Automation Systems</h3>
              <p className="text-gray-700 text-lg">Align campaigns, leads, and customer journeys seamlessly across platforms.</p>
            </div>

            {/* AI-Based Optimization Engines */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <h3 className="text-xl font-semibold">AI-Based Optimization Engines</h3>
              <p className="text-gray-700 text-lg">Leverage machine learning to personalize, segment, and optimize performance automatically.</p>
            </div>
          </div>
          <p className="mt-10 text-left text-lg text-gray-700">
            Technology supports strategy — it doesn’t replace it.
          </p>
        </div>
      </section>



      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-gray-900">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Performance-First Thinking",
              "Data-Led Decisions",
              "Transparent Experiment Reports",
              "Revenue-Centric KPIs",
              "Agile Execution Model",
              "Dedicated Growth Team"
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-left text-lg text-gray-700">
            At Adkryoss managed by Clink Consultancy Services Private Limited, AP CRO is not an add-on service — it is a strategic growth accelerator.
          </p>
        </div>
      </section>



      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Points */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left text-gray-900">
              When Should You Invest in AP CRO?
            </h2>

            <p className="mb-6 text-lg text-gray-700">
              You should prioritize AP CRO if:
            </p>

            <ul className="space-y-4">
              {[
                "Your traffic is increasing but sales are not",
                "Your paid ads are expensive but underperforming",
                "Your bounce rate is high",
                "Your checkout abandonment is above industry average",
                "Your funnel feels “okay” but not exceptional"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-lg text-gray-700">
              If any of these sound familiar, you’re leaving revenue on the table.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <img
              src={WhenShouldYouInvestinAPCROImage}  
                alt="AP CRO Investment Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>


      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Turn Traffic Into Revenue
          </h2>

          <p className="text-lg md:text-xl text-white">
            Growth doesn’t come from more clicks. <br />
            It comes from smarter conversions.
          </p>

          <p className="text-lg md:text-xl text-white">
            Partner with <strong>Adkryoss managed by Clink Consultancy Services Private Limited</strong> to build a conversion system that compounds your revenue every month.
          </p>

          <p className="text-lg md:text-xl text-white">
            Ready to optimize what you already have? <br />
            Let’s engineer your growth.
          </p>

          <Link
            to="/contact?service=cro"
            className="mt-6 inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Speak to Our Expert →
          </Link>
        </div>
      </section>


    </>
  );
};

export default AppCRO;
