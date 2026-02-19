import React from 'react';
import ASOImage from "../../../assets/ASO.png";
import { useNavigate } from "react-router-dom";

const ASOServices = () => {
  const navigate = useNavigate();
    return (
        <>
        <section
  className="bg-cover bg-center bg-no-repeat py-16 h-100 md:py-20"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-8xl mx-auto px-6  grid md:grid-cols-2 items-center gap-12">

    {/* LEFT CONTENT */}
    <div className="text-left text-white space-y-6 mt-[-15px] ml-20">

      {/* H2 Heading */}
      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white w-200">
ASO Services – Drive More Downloads.
      </h2>

      {/* H3 Subheading */}
      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
   Maximize App Revenue.
      </h3>

      <h4 className="text-2xl md:text-2xl font-semibold leading-snug">Unlock unstoppable app growth with data-driven App Store Optimization.</h4>

      {/* Paragraph */}
      <p className="text-white md:text-md leading-relaxed">
  Your app deserves visibility, downloads, and loyal users — not invisibility in crowded app stores.   </p>

    
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
    <div className="flex justify-center md:justify-end hide-below-790">
      <img
        src={ASOImage}
        alt="About Adkryoss"
        className="w-56 md:w-100 h-70 rounded-xl shadow-lg mr-10"
      />
    </div>

  </div>
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
            src="data:image/jpeg;base64,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"
            alt="App Store Optimization"
            className="w-full h-auto rounded-lg shadow-lg"
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
        src="data:image/png;base64,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" // replace with your image path
        alt="ASO Importance"
        className="w-full h-auto rounded-lg shadow-lg"
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
        src="data:image/jpeg;base64,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" 
        alt="ASO illustration" 
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
        src="data:image/png;base64,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" 
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
