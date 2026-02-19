import React from 'react';

const MobileAppMarketing = () => {
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
              Mobile App Marketing Services
            </h2>

            {/* H3 Subheading */}
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Turn Installs Into Active Users. Turn Users Into Revenue.
            </h3>

            <p className='text-white'>Mobile apps don’t fail because of poor ideas. They fail because they are invisible.
              Adkryoss managed by Clink Consultancy Services Private Limited builds data-driven mobile app marketing strategies that increase installs, improve retention, and maximize lifetime value — not just vanity downloads. </p>
            {/* 
                        { CTA Buttons — uncomment when ready to use} */}
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

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end hide-below-790">
              <img
                src="https://www.techmagnate.com/wp-content/uploads/2025/04/mobile-app-marketing-services.webp"
                alt="About Adkryoss"
                className="w-56 md:w-80 rounded-xl shadow-lg mr-[-700px] mt-[-300px]"
              />
            </div>

          </div>


        </div>
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
              src="data:image/jpeg;base64,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"
              alt="Mobile app marketing illustration"
              className="w-full max-w-md"
            />
          </div>
          {/* </div> */}
        </div>
      </section>


      <section className="py-20 px-6 bg-gray-50">
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
            <div className="bg-white w-100 ml-60 rounded-lg shadow-lg p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
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
            <div className="bg-white w-100 ml-60 rounded-lg shadow-lg p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
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
              src="data:image/jpeg;base64,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"
              alt="Mobile app marketing illustration"
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
            href="#contact"
            className="mt-4 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Start your growth journey today
          </a>
        </div>
      </section>

    </>
  );
};

export default MobileAppMarketing;
