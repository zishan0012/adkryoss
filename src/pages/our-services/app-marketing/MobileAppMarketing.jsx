import React from 'react';
import MobileImage from "../../../assets/Mobile.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import WhyMobileAppMarketingNeedsStrategicEdgeImage from "../../../assets/WhyMobileAppMarketingNeedsStrategicEdge.png"
import WhyChooseUsforMobileAppMarketingImage from '../../../assets/WhyChooseUsforMobileAppMarketing.png'

const MobileAppMarketing = () => {
  const navigate = useNavigate();
  return (
    <>


      {/* 
<section
  className="relative flex items-center min-h-[70vh] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

   
      <div className="text-left lg:text-left text-white space-y-6 mx-auto lg:mx-0">

      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
        Mobile App Marketing Services
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Turn Installs Into Active Users. Turn Users Into Revenue.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        Mobile apps don’t fail because of poor ideas. They fail because they are invisible.
        Adkryoss managed by Clink Consultancy Services Private Limited builds data-driven mobile app marketing strategies that increase installs, improve retention, and maximize lifetime value — not just vanity downloads.
      </p>

    </div>

   



{/* <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
  </div>
</section> */}


 


<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes

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
          Mobile App Marketing Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-blue-100">
        Turn Installs Into Active Users. Turn Users Into Revenue.
      </h3>

      <p className="text-gray-200 leading-relaxed">
        Mobile apps don’t fail because of poor ideas. They fail because they are invisible.
        Adkryoss managed by Clink Consultancy Services Private Limited builds data-driven 
        mobile app marketing strategies that increase installs, improve retention, 
        and maximize lifetime value — not just vanity downloads.
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
          src={MobileImage}
          alt="Mobile App Marketing Services"
          className="relative w-full object-contain rounded-2xl  
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

          {/* Left: Text & Points */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
              Why Mobile App Marketing Needs a Strategic Edge
            </h2>
            <p className="mb-6 text-lg text-left">
              Over 90% of apps struggle to cross 1,000 daily active users. The real challenge isn’t launching an app — it’s scaling it profitably.
            </p>
            <p className="mb-6 text-lg text-left">
              Adkryoss managed by Clink Consultancy Services Private Limited combines performance marketing, app store optimization, user behavior analytics, and AI-powered targeting to help apps grow sustainably across Android and iOS ecosystems.
            </p>



            <p className="mb-4 text-lg font-semibold text-left">
              We focus on:
            </p>

            <ul className="space-y-4 text-lg">
              {[
                "High-intent user acquisition",
                "Lower CPI & higher LTV",
                "Retention and engagement loops",
                "Data-backed growth optimization"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={WhyMobileAppMarketingNeedsStrategicEdgeImage} alt="Mobile app marketing illustration"
              className="w-full max-w-md"
            />
          </div>
          {/* </div> */}
        </div>
      </section>


      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
            Our Mobile App Marketing Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ASO */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-semibold">App Store Optimization (ASO)</h3>
              <p className="text-lg">
                Visibility inside the App Store and Play Store determines install velocity. Our ASO specialists optimize metadata, keywords, creatives, ratings, and conversion funnels to improve ranking and conversion rate.
              </p>
              <p className="font-semibold mt-2">What We Optimize:</p>
              <ul className="list-none space-y-2 text-lg">
                {[
                  "Keyword strategy & competitor gap analysis",
                  "Title, description & metadata enhancement",
                  "App creatives (icons, screenshots, videos)",
                  "Ratings & review management strategy",
                  "A/B testing for listing optimization"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-semibold text-lg">Result: Higher discoverability + improved install-to-view ratio.</p>
            </div>

            {/* Performance-Driven App Install Campaigns */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-semibold">Performance-Driven App Install Campaigns</h3>
              <p className="text-lg">
                We run scalable campaigns across high-converting channels to drive quality installs.
              </p>
              <p className="font-semibold mt-2">Platforms We Leverage:</p>
              <ul className="list-none space-y-2 text-lg">
                {[
                  "Google App Campaigns (UAC)",
                  "Meta App Install Ads",
                  "Apple Search Ads",
                  "YouTube Performance Campaigns",
                  "Programmatic & In-App Networks"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-lg">Adkryoss ensures each campaign is optimized for cost efficiency, event tracking, and user quality — not just raw downloads.</p>
            </div>

            {/* User Retention & Re-Engagement */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-semibold">User Retention & Re-Engagement Marketing</h3>
              <p className="text-lg">Acquisition without retention burns budgets. We build retention funnels that increase repeat sessions and in-app purchases.</p>
              <p className="font-semibold mt-2">Retention Strategies Include:</p>
              <ul className="list-none space-y-2 text-lg">
                {[
                  "Push notification automation",
                  "In-app messaging flows",
                  "Email & WhatsApp remarketing",
                  "Dynamic retargeting campaigns",
                  "Behavioral segmentation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-lg">We focus on DAU, MAU, churn reduction, and customer lifetime value (LTV).</p>
            </div>

            {/* App Analytics & Growth Intelligence */}
            <div className="bg-white  rounded-lg shadow-lg p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-semibold">App Analytics & Growth Intelligence</h3>
              <p className="text-lg">Growth without analytics is guesswork. We integrate and optimize tracking frameworks to measure real ROI.</p>
              <p className="font-semibold mt-2">Our Data Stack Includes:</p>
              <ul className="list-none space-y-2 text-lg">
                {[
                  "Firebase & GA4 tracking",
                  "Event & funnel analysis",
                  "Cohort & retention analysis",
                  "Attribution tracking",
                  "Revenue & LTV modeling"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-lg">We use predictive insights and AI-powered models to continuously refine campaigns and improve profitability.</p>
            </div>

            {/* Creative Strategy */}
            <div className="bg-white  rounded-lg shadow-lg p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-semibold">Creative Strategy for Mobile-First Audiences</h3>
              <p className="text-lg">Creative fatigue kills performance. Our team develops scroll-stopping creatives designed for mobile behavior.</p>
              <p className="font-semibold mt-2">We Focus On:</p>
              <ul className="list-none space-y-2 text-lg">
                {[
                  "Short-form vertical video ads",
                  "Interactive ad formats",
                  "Gamified creatives",
                  "Localized campaign variations",
                  "UGC-style performance ads"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-lg">We test, scale, and iterate continuously for improved CTR and CVR.</p>
            </div>
          </div>
        </div>
      </section>







      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-gray-900">
            Our Process: From Launch to Scale
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-commerce & D2C Apps */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19M7 13h10M10 21h4" />
              </svg>
              <h3 className="text-xl font-semibold">E-commerce & D2C Apps</h3>
            </div>

            {/* FinTech & Wallet Apps */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zM12 3v5M12 16v5M3 12h5M16 12h5" />
              </svg>
              <h3 className="text-xl font-semibold">FinTech & Wallet Apps</h3>
            </div>

            {/* EdTech Platforms */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.84 6.84M12 14L5.84 11.578a12.083 12.083 0 00-.84 6.84M12 14v7" />
              </svg>
              <h3 className="text-xl font-semibold">EdTech Platforms</h3>
            </div>

            {/* Healthcare & Fitness Apps */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <h3 className="text-xl font-semibold">Healthcare & Fitness Apps</h3>
            </div>

            {/* Gaming & Entertainment Apps */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 9.75h.008v.008H9.75V9.75zm4.5 0h.008v.008h-.008V9.75zM12 12.5v2m-6.5 0h13a2.5 2.5 0 002.5-2.5v-5a2.5 2.5 0 00-2.5-2.5H5a2.5 2.5 0 00-2.5 2.5v5a2.5 2.5 0 002.5 2.5z" />
              </svg>
              <h3 className="text-xl font-semibold">Gaming & Entertainment Apps</h3>
            </div>

            {/* SaaS & Utility Apps */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <h3 className="text-xl font-semibold">SaaS & Utility Apps</h3>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Text & Points */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
              Why Choose Us for Mobile App Marketing?
            </h2>
            <p className="mb-6 text-lg text-left">
              Adkryoss managed by Clink Consultancy Services Private Limited doesn’t believe in isolated campaigns. We build performance ecosystems that align acquisition, engagement, and revenue.
            </p>

            <p className="mb-4 text-lg font-semibold text-left">
              What Makes Us Different:
            </p>

            <ul className="space-y-4 text-lg text-left">
              {[
                "Performance-first mindset",
                "AI-powered audience targeting",
                "Full-funnel marketing approach",
                "Transparent reporting dashboards",
                "ROI-centric campaign execution"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-lg text-left font-semibold">
              We don’t optimize for installs. We optimize for growth.
            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={WhyChooseUsforMobileAppMarketingImage} alt="Mobile app marketing illustration"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </section>



      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Scale Your App the Smart Way
          </h2>
          <p className="text-lg md:text-xl text-white">
            Your app deserves more than downloads — it deserves active users, repeat engagement, and scalable revenue.
          </p>
          <p className="text-lg md:text-xl text-white">
            Partner with Adkryoss managed by Clink Consultancy Services Private Limited to build a mobile app marketing engine that delivers measurable impact.
          </p>
          <a
            href="/contact?service=mobile-app-marketing"
            className="mt-4 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Speak to Our Expert →
          </a>
        </div>
      </section>

    </>
  );
};

export default MobileAppMarketing;
