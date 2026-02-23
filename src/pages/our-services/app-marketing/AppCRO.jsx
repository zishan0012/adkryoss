import React from 'react';
import CROImage from "../../../assets/CRO.png";
import { useNavigate } from 'react-router-dom';

const AppCRO = () => {
  const navigate = useNavigate();
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
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    <div className="text-left text-white space-y-6">

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
          src={CROImage}
          alt="Section Image"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
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
              src="data:image/jpeg;base64,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"
              alt="CRO performance illustration"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </section>


      <section className="py-20 px-6 bg-blue-50">
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
              src="data:image/jpeg;base64,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"
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

          <button
            onClick={() => navigate("/contact?service=cro")}
            className="mt-6 inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Start Optimizing Today
          </button>
        </div>
      </section>


    </>
  );
};

export default AppCRO;
