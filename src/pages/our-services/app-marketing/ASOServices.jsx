import React from 'react';
import ASOImage from "../../../assets/ASO.png";
import { useNavigate } from "react-router-dom";
import AppStoreOptimizationServicesImage from "../../../assets/AppStoreOptimizationServices.png"
import WhyASOMattersMoreThanEverImage from "../../../assets/WhyASOMattersMoreThanEver.png"
import WhyChooseUsforASOImage from "../../../assets/WhyChooseUsforASO.png"
import ResultsYouCanExpectImage from "../../../assets/ResultsYouCanExpect.png"

const ASOServices = () => {
  const navigate = useNavigate();
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

      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
        ASO Services – Drive More Downloads.
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Maximize App Revenue.
      </h3>

      <h4 className="text-2xl md:text-2xl font-semibold leading-snug">
        Unlock unstoppable app growth with data-driven App Store Optimization.
      </h4>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        Your app deserves visibility, downloads, and loyal users — not invisibility in crowded app stores.
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
          src={ASOImage}
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
          ASO Services – Drive More Downloads.
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-blue-100">
        Maximize App Revenue.
      </h3>

      <h4 className="text-lg md:text-xl font-semibold text-gray-300">
        Unlock unstoppable app growth with data-driven App Store Optimization.
      </h4>

      <p className="text-gray-200 leading-relaxed">
        Your app deserves visibility, downloads, and loyal users — 
        not invisibility in crowded app stores.
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
          src={ASOImage}
          alt="ASO Services"
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            App Store Optimization (ASO) Services
          </h2>
          <p className="text-lg md:text-xl mb-4">
            In a marketplace with millions of apps competing for attention, visibility is everything. A powerful ASO strategy ensures your app ranks higher, attracts the right audience, and converts impressions into installs.
          </p>
          <p className="text-base md:text-lg">
            At Adkryoss managed by Clink Consultancy Services Private Limited, we combine search intelligence, creative optimization, and conversion-focused design to turn your app into a growth engine. Our ASO framework is built to improve rankings, increase organic downloads, and maximize lifetime user value across both Android and iOS platforms.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src={AppStoreOptimizationServicesImage}   
            alt="App Store Optimization"
            className="w-full h-100 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
        

<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
    {/* Left Side - Text */}
    <div className="md:w-1/2 text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why ASO Matters More Than Ever
      </h2>
      <p className="text-lg md:text-xl mb-6">
        App stores are search-driven ecosystems. More than 65% of app downloads come from search queries within app stores. If your app isn't optimized for discoverability, you are losing potential users daily.
      </p>

      <p className="text-lg font-semibold mb-4">Our ASO services focus on:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Higher keyword rankings</li>
        <li>Increased organic installs</li>
        <li>Improved conversion rates</li>
        <li>Better retention & app engagement</li>
        <li>Reduced paid acquisition dependency</li>
      </ul>

      <p className="text-base md:text-lg font-medium">
        We don’t chase vanity metrics. We build sustainable app growth systems.
      </p>
    </div>

    {/* Right Side - Optional Image */}
    <div className="md:w-1/2">
      <img
        src={WhyASOMattersMoreThanEverImage}   
        alt="ASO Importance"
        className="w-full h-100 rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>



<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left">
      Our Comprehensive ASO Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1: ASO Audit & Competitive Analysis */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m-4-4v-4m0 0L9 9m3-4v4m0 0l3-3m-3 3l-3-3" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">ASO Audit & Competitive Analysis</h3>
        <p className="text-sm md:text-base mb-2">
          Complete technical and content audit, keyword performance, metadata optimization, competitor positioning, and review sentiment evaluation.
        </p>
        <p className="text-sm md:text-base">Identify gaps and growth opportunities your competitors are missing.</p>
      </div>

      {/* Card 2: Advanced Keyword Strategy */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m8-8h2M2 12H0" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Advanced Keyword Strategy</h3>
        <p className="text-sm md:text-base mb-2">Deep keyword research, search volume & difficulty analysis, intent-based clustering, trend & seasonal targeting, and localization strategy.</p>
        <p className="text-sm md:text-base">Our goal: rank your app where your audience is searching.</p>
      </div>

      {/* Card 3: App Listing Optimization */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">App Listing Optimization</h3>
        <p className="text-sm md:text-base mb-2">Optimize App Title, Subtitle, Short & Long Description, Keyword Field (iOS), Feature Highlights, and Conversion-driven copywriting.</p>
        <p className="text-sm md:text-base">Every word is optimized for algorithm performance and user psychology.</p>
      </div>

      {/* Card 4: Creative Optimization */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Creative Optimization (CRO)</h3>
        <p className="text-sm md:text-base mb-2">App Icon Testing, Screenshot Messaging, Preview Video Strategy, Feature Graphics, and A/B Testing (Google Play Experiments).</p>
        <p className="text-sm md:text-base">Ensure creatives communicate value within the first 3 seconds.</p>
      </div>

      {/* Card 5: Ratings & Review Management */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.073 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Ratings & Review Management</h3>
        <p className="text-sm md:text-base mb-2">Review monitoring, sentiment analysis, negative review recovery, and feedback-driven feature recommendations.</p>
        <p className="text-sm md:text-base">Turn reputation management into a growth lever, not damage control.</p>
      </div>

      {/* Card 6: App Store & Play Store Optimization */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m8 8h2M2 12H0" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">App Store & Play Store Optimization</h3>
        <p className="text-sm md:text-base mb-2">Optimize apps across Google Play Store and Apple App Store with platform-specific ranking and metadata strategies.</p>
      </div>
    </div>
  </div>
</section>



<section className="py-20 px-6 bg-[#197BB4]">
  <div className="max-w-7xl mx-auto text-white">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left">
      Our ASO Process
    </h2>
    <p className="mb-12 max-w-3xl text-lg text-white">
      We follow a performance-focused approach inspired by enterprise-grade digital growth models:
    </p>

    <div className="flex flex-nowrap gap-16 overflow-x-auto">
      {/* Card 1: Discover */}
      <div className="bg-white text-blue-600 rounded-lg shadow-lg p-6 flex-shrink-0 w-64 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">Discover</h3>
        <p className="text-sm text-center">
          Understand your app, audience, category dynamics, and competitive landscape.
        </p>
      </div>

      {/* Card 2: Strategize */}
      <div className="bg-white text-blue-600 rounded-lg shadow-lg p-6 flex-shrink-0 w-64 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">Strategize</h3>
        <p className="text-sm text-center">
          Create a keyword roadmap, positioning framework, and conversion optimization plan.
        </p>
      </div>

      {/* Card 3: Optimize */}
      <div className="bg-white text-blue-600 rounded-lg shadow-lg p-6 flex-shrink-0 w-64 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">Optimize</h3>
        <p className="text-sm text-center">
          Implement metadata improvements, creative testing, and ranking strategies.
        </p>
      </div>

      {/* Card 4: Measure & Scale */}
      <div className="bg-white text-blue-600 rounded-lg shadow-lg p-6 flex-shrink-0 w-64 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17h2m-1-6v6m0-6a9 9 0 100-6 9 9 0 000 6z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">Measure & Scale</h3>
        <p className="text-sm text-center">
          Track ranking improvements, installs, retention, and revenue impact. Refine continuously.
        </p>
      </div>
    </div>

    <p className="mt-12 max-w-3xl text-lg text-white">
      Growth is iterative. We optimize, test, refine, and scale.
    </p>
  </div>
</section>



<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto text-gray-800">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left">
      Industries We Serve
    </h2>
    <p className="mb-12 text-lg max-w-3xl">
      Our ASO solutions support apps across:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* E-commerce Apps */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.1a1 1 0 00.9-1.5L17 13M7 13V6h10v7" />
        </svg>
        <p className="text-lg font-semibold">E-commerce Apps</p>
      </div>

      {/* FinTech & Trading Apps */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3m0 0L7 7m4-4l4 4M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
        </svg>
        <p className="text-lg font-semibold">FinTech & Trading Apps</p>
      </div>

      {/* EdTech Platforms */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.844L12 21l-7-3.578a12.083 12.083 0 01.84-6.844L12 14z" />
        </svg>
        <p className="text-lg font-semibold">EdTech Platforms</p>
      </div>

      {/* Health & Fitness Apps */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3 0-6 3-6 6s3 6 6 6 6-3 6-6-3-6-6-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m4-8h4M4 12H0" />
        </svg>
        <p className="text-lg font-semibold">Health & Fitness Apps</p>
      </div>

      {/* SaaS Applications */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z" />
        </svg>
        <p className="text-lg font-semibold">SaaS Applications</p>
      </div>

      {/* Gaming Apps */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-16 4 16H8z" />
        </svg>
        <p className="text-lg font-semibold">Gaming Apps</p>
      </div>

      {/* Real Estate & Service Aggregators */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0H7m6 0v6h6" />
        </svg>
        <p className="text-lg font-semibold">Real Estate & Service Aggregators</p>
      </div>
    </div>

    <p className="mt-12 text-lg max-w-3xl">
      Whether you're launching a new app or scaling an existing one, our strategies adapt to your business model.
    </p>
  </div>
</section>



<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* Left: Text & Points */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
        Why Choose Us for ASO?
      </h2>
      <p className="mb-8 text-lg text-left">
        At Adkryoss managed by Clink Consultancy Services Private Limited, we don’t treat ASO as a checklist — we treat it as a performance marketing channel.
      </p>

      <p className="mb-6 text-lg font-semibold text-left">What makes us different:</p>

      <ul className="space-y-4 text-lg">
        {[
          "Data-first approach",
          "Conversion-focused copywriting",
          "AI-driven keyword intelligence",
          "Continuous A/B testing framework",
          "Transparent reporting dashboard",
          "Integration with Paid App Campaigns"
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-lg text-left">
        We align ASO with your overall digital marketing strategy — including SEO, PPC, and user acquisition campaigns.
      </p>
    </div>

    {/* Right: Image */}
    <div className="lg:w-1/2 flex justify-center">
      <img 
        src={WhyChooseUsforASOImage} alt="ASO illustration" 
        className="w-full max-w-md"
      />
    </div>
  </div>
</section>


<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto text-gray-900">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left">
      Our ASO Tech Stack
    </h2>
    <p className="mb-12 text-lg text-left max-w-3xl">
      We leverage modern tools and analytics platforms to ensure measurable performance:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* App analytics tools */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3m0 0L7 7m4-4l4 4M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
        </svg>
        <p className="text-lg font-semibold">App analytics tools</p>
      </div>

      {/* Keyword tracking platforms */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p className="text-lg font-semibold">Keyword tracking platforms</p>
      </div>

      {/* Conversion rate optimization frameworks */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z" />
        </svg>
        <p className="text-lg font-semibold">Conversion rate optimization frameworks</p>
      </div>

      {/* Review & sentiment analysis software */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-lg font-semibold">Review & sentiment analysis software</p>
      </div>

      {/* Competitive intelligence dashboards */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9h18M9 3v18" />
        </svg>
        <p className="text-lg font-semibold">Competitive intelligence dashboards</p>
      </div>
    </div>

    <p className="mt-12 text-lg text-left max-w-3xl">
      Data guides every decision we make.
    </p>
  </div>
</section>

<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* Left: Text & Points */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
        Results You Can Expect
      </h2>

      <ul className="space-y-4 text-lg">
        {[
          "Improved keyword rankings",
          "2X – 5X organic install growth (based on app category & competition)",
          "Higher app store conversion rates",
          "Increased user retention",
          "Lower cost per install"
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-lg text-left">
        We focus on sustainable growth — not short-term spikes.
      </p>
    </div>

    {/* Right: Image */}
    <div className="lg:w-1/2 flex justify-center">
      <img 
        src={ResultsYouCanExpectImage}  
        alt="ASO results illustration" 
        className="w-full max-w-md"
      />
    </div>
  </div>
</section>



<section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Let’s Scale Your App the Smart Way
    </h2>
    <p className="mb-4 text-lg text-white">
      Your app deserves more visibility, more installs, and more loyal users.
    </p>
    <p className="mb-6 text-lg text-white">
      Partner with <span className='mb-6 text-black font-bold'>Adkryoss managed by Clink Consultancy Services Private Limited</span>  to build an ASO strategy that drives measurable growth.
    </p>
    <p className="text-lg font-semibold mb-8 text-white">
      <span className='text-lg font-bold mb-8 text-black'>Ready to dominate the app stores?</span> Let’s build your next growth milestone today.
    </p>

    {/* CTA Button */}
    <button
      onClick={() => navigate("/contact?service=aso")} 
      className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
    >
      Get Started
    </button>
  </div>
</section>

        </>
    );
};

export default ASOServices;
