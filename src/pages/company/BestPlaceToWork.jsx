import React, { useRef, useEffect, useState } from "react";
import BestPlaceToWorkImage from "../../assets/BestPlaceToWork.jpeg";
import LearningImage from "../../assets/Learning.png";
import BestPlaceImage from "../../assets/BestPlace.png";

const BestPlaceToWork = () => {
  const [visibleSections, setVisibleSections] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          } else {
            // Reset when out of view for re-animation on scroll up
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: false,
            }));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px", // Adjust trigger point
      }
    );

    // Observe all sections with data-section attribute
    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        data-section="hero"
        className={`relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden transition-all duration-700 ease-out ${
          visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

        {/* Animated Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-float-slower"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
          {/* LEFT CONTENT */}
          <div className="text-left max-w-[600px] space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Best Place to Work
              </span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold text-blue-100 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Where Talent Grows. Ideas Scale. Leaders Are Built.
            </h3>

            <p className="text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              At Adkryoss managed by Clink Consultancy Services Private Limited, we don't just build high-performing digital brands — we build high-performing people.
              <br /><br />
              We believe a workplace should inspire ambition, reward ownership, and encourage bold thinking.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center animate-float" style={{ animationDelay: "0.4s" }}>
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <img
                src={BestPlaceToWorkImage}
                alt="Best Place To Work"
                className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE CARDS (first set) */}
      <section
        data-section="culture1"
        className={`bg-white py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.culture1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              A Culture Built for Modern Marketers
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              The digital ecosystem evolves every second. So do we.
            </p>
          </div>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, our work culture is driven by agility, data intelligence, and creative freedom.
              We operate with a growth-first mindset — combining performance marketing,
              technology, analytics, and creative storytelling into measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, i) => {
              const cards = [
                { title: "Performance Marketing & Paid Media", desc: "Scalable campaigns engineered for ROI and measurable growth.", icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></> },
                { title: "SEO & Organic Growth Strategy", desc: "Sustainable visibility built on data-backed search intelligence.", icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></> },
                { title: "Data Analytics & Consumer Insights", desc: "Turning raw data into strategic business intelligence.", icon: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-6" /><path d="M22 20V14" /></> },
                { title: "Creative & Content Innovation", desc: "Storytelling that connects brands with modern audiences.", icon: <path d="M12 2a7 7 0 017 7c0 3-2 5-4 6l-3 7-3-7c-2-1-4-3-4-6a7 7 0 017-7z" /> },
                { title: "Marketing Automation & AI Tools", desc: "Smart systems that optimize journeys and scale efficiency.", icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></> },
                { title: "Conversion Rate Optimization", desc: "Engineering seamless user journeys that drive higher conversions.", icon: <><path d="M12 20V10" /><path d="M18 16l-6-6-6 6" /></> },
              ];
              return (
                <div
                  key={i}
                  className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      {cards[i].icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cards[i].title}</h3>
                  <p className="text-gray-600 text-sm">{cards[i].desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-14 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <p className="text-blue-700 font-semibold text-lg">
              We don't believe in rigid hierarchies. We believe in ownership, accountability, and experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE CARDS SECOND SET (gray/blue) */}
      <section
        data-section="culture2"
        className={`bg-white py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.culture2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              A Culture Built for Modern Marketers
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              The digital ecosystem evolves every second. So do we.
            </p>
          </div>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, our work culture is driven by agility, data intelligence, and creative freedom.
              We operate with a growth-first mindset — combining performance marketing,
              technology, analytics, and creative storytelling into measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, i) => {
              const cards = [
                { title: "Performance Marketing & Paid Media", desc: "Scalable campaigns engineered for ROI and measurable growth.", icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>, bg: "bg-gray-50" },
                { title: "SEO & Organic Growth Strategy", desc: "Sustainable visibility built on data-backed search intelligence.", icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></>, bg: "bg-blue-100" },
                { title: "Data Analytics & Consumer Insights", desc: "Turning raw data into strategic business intelligence.", icon: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-6" /><path d="M22 20V14" /></>, bg: "bg-gray-50" },
                { title: "Creative & Content Innovation", desc: "Storytelling that connects brands with modern audiences.", icon: <path d="M12 2a7 7 0 017 7c0 3-2 5-4 6l-3 7-3-7c-2-1-4-3-4-6a7 7 0 017-7z" />, bg: "bg-blue-100" },
                { title: "Marketing Automation & AI Tools", desc: "Smart systems that optimize journeys and scale efficiency.", icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>, bg: "bg-gray-50" },
                { title: "Conversion Rate Optimization", desc: "Engineering seamless user journeys that drive higher conversions.", icon: <><path d="M12 20V10" /><path d="M18 16l-6-6-6 6" /></>, bg: "bg-blue-100" },
              ];
              return (
                <div
                  key={i}
                  className={`${cards[i].bg} p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      {cards[i].icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cards[i].title}</h3>
                  <p className="text-gray-600 text-sm">{cards[i].desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-14 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <p className="text-blue-700 font-semibold text-lg">
              We don't believe in rigid hierarchies. We believe in ownership, accountability, and experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ADKRYOSS IS A GREAT PLACE TO WORK */}
      <section
        data-section="whyGreat"
        className={`bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.whyGreat ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Why Adkryoss Is a Great Place to Work
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              A performance-driven culture built for ambitious marketers and innovators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[...Array(5)].map((_, i) => {
              const cards = [
                { title: "Growth Without Limits", desc: "We create structured learning paths for every team member. From certification sponsorships to hands-on leadership exposure, we empower our people to stay ahead of digital trends.", icon: <path d="M12 2v20M5 12h14" /> },
                { title: "Performance-Driven Environment", desc: "Our work is backed by measurable KPIs, real-time dashboards, and transparent performance metrics. Clear goals. Clear outcomes. Clear recognition.", icon: <><path d="M3 3h18v18H3z" /><path d="M7 13l3 3 7-7" /></> },
                { title: "Innovation-Led Execution", desc: "We encourage experimentation. Testing new platforms, AI-driven marketing tools, automation frameworks, and advanced analytics is part of our DNA.", icon: <><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></> },
                { title: "Open & Collaborative Culture", desc: "We promote cross-functional collaboration between SEO strategists, media planners, creative designers, developers, and analysts — ensuring holistic campaign success.", icon: <><path d="M17 20h5V4H2v16h5" /><path d="M9 12h6" /></> },
                { title: "Recognition & Rewards", desc: "High performers are celebrated. Leadership opportunities are earned. Success is shared.", icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /> },
              ];
              const extraClass = i === 4 ? "md:col-span-2 flex justify-center" : "";
              const innerClass = i === 4 ? "bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 w-full md:w-[48%] border-l-4 border-b-4 border-blue-600 hover:bg-orange-200 animate-fade-in-up" : "bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border-l-4 border-b-4 border-blue-600 hover:bg-orange-200 animate-fade-in-up";
              return (
                <div key={i} className={extraClass}>
                  <div
                    className={innerClass}
                    style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {cards[i].icon}
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-900">{cards[i].title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{cards[i].desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK PHILOSOPHY */}
      <section
        data-section="philosophy"
        className={`bg-white py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.philosophy ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our Work Philosophy
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              At Adkryoss managed by Clink Consultancy Services Private Limited, we follow a strategic working framework:
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 text-center mb-14">
            {["Think Deep", "Plan Smart", "Execute Fast", "Measure Everything", "Optimize Continuously"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm sm:text-base font-semibold">
                  {step}
                </div>
                {idx !== 4 && <span className="hidden sm:inline text-gray-400 text-xl">→</span>}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <ul className="space-y-5 text-gray-700 text-base sm:text-lg">
                {[
                  "Agile marketing sprints",
                  "Data-backed decision making",
                  "AI-powered optimization models",
                  "Continuous testing frameworks",
                  "Customer-centric campaign strategies",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 mb-5 animate-fade-in-right" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                    <svg className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center animate-float" style={{ animationDelay: "0.5s" }}>
              <img src={BestPlaceImage} alt="Work Philosophy" className="rounded-2xl shadow-lg w-full max-w-md" />
            </div>
          </div>
          <div className="text-center mt-14 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our team adapts quickly to algorithm updates, evolving ad platforms, consumer behavior shifts, and new-age marketing technologies.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING & DEVELOPMENT */}
      <section
        data-section="learning"
        className={`bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.learning ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Learning & Development Ecosystem
            </h2>
            <p className="text-gray-700 text-base sm:text-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Digital marketing doesn't stand still — and neither do we.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-800 font-medium mb-6 text-base sm:text-lg animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
                Our team members gain exposure to:
              </p>
              <ul className="space-y-5 text-gray-700 text-base sm:text-lg">
                {[
                  "Advanced SEO frameworks",
                  "Performance media optimization",
                  "Conversion science",
                  "Brand storytelling psychology",
                  "Marketing automation systems",
                  "E-commerce growth strategies",
                  "B2B and D2C marketing funnels",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 animate-fade-in-right" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                    <svg className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-gray-800 text-base sm:text-lg font-medium animate-fade-in-right" style={{ animationDelay: "1.0s" }}>
                We believe skill development is not optional — it's strategic.
              </p>
            </div>
            <div className="flex justify-center animate-float" style={{ animationDelay: "0.4s" }}>
              <img src={LearningImage} alt="Learning & Development" className="rounded-2xl shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE-CENTRIC BENEFITS */}
      <section
        data-section="benefits"
        className={`bg-white py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.benefits ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Employee-Centric Benefits
            </h2>
            <p className="text-gray-700 text-base sm:text-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We focus on sustainable performance, not burnout culture.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Flexible work structure", icon: <path d="M3 12h18M12 3v18" /> },
              { text: "Hybrid collaboration model", icon: <><path d="M17 20h5V4H2v16h5" /><path d="M12 4v16" /></> },
              { text: "Leadership mentoring", icon: <path d="M12 2l4 7H8l4-7zM2 22h20" /> },
              { text: "Performance incentives", icon: <><circle cx="12" cy="8" r="4" /><path d="M6 22v-2a6 6 0 0112 0v2" /></> },
              { text: "Skill enhancement programs", icon: <><path d="M12 20h9" /><path d="M12 4h9" /><path d="M4 9h16" /><path d="M4 15h16" /></> },
              { text: "Career acceleration roadmap", icon: <path d="M5 12l5 5L20 7" /> },
              { text: "Transparent appraisal system", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></> },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 border-l-4 border-transparent animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-blue-600 to-orange-400"></div>
                <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <p className="text-gray-800 text-base font-medium relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              At Adkryoss managed by Clink Consultancy Services Private Limited, we prioritize both professional growth and personal well-being.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THRIVES HERE */}
      <section
        data-section="thrives"
        className={`bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.thrives ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Who Thrives Here?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              You'll fit right in if you:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Think analytically and creatively", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></> },
              { text: "Love data as much as design", icon: <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" /> },
              { text: "Adapt fast in a dynamic ecosystem", icon: <path d="M3 12h18M12 3v18" /> },
              { text: "Take ownership beyond your role", icon: <path d="M12 2l4 7H8l4-7zM2 22h20" /> },
              { text: "Want to build scalable digital brands", icon: <path d="M5 12l5 5L20 7" /> },
              { text: "Aspire to become a digital leader", icon: <><circle cx="12" cy="8" r="4" /><path d="M6 22v-2a6 6 0 0112 0v2" /></> },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <p className="text-gray-800 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <p className="text-gray-900 text-lg sm:text-xl font-semibold">
              We hire problem-solvers. We grow strategists. We build leaders.
            </p>
          </div>
        </div>
      </section>

      {/* JOIN SECTION */}
      <section
        data-section="join"
        className={`bg-gray-200 py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.join ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 animate-fade-in-up">
            Join a Future-Ready Digital Team
          </h2>
          <p className="text-black text-base sm:text-lg leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            The future of marketing is intelligent, automated, performance-led, and consumer-centric.
          </p>
          <p className="text-black text-base sm:text-lg leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            At Adkryoss managed by Clink Consultancy Services Private Limited, we are shaping that future every day — with people who are ambitious, curious, and ready to build impact.
          </p>
          <div className="space-y-3 mb-8">
            <p className="text-black text-lg sm:text-xl font-medium animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              If you are looking for more than just a job —
            </p>
            <p className="text-black text-lg sm:text-xl font-medium animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              If you are looking for a platform to grow, innovate, and lead —
            </p>
          </div>
          <p className="text-black text-xl sm:text-2xl font-semibold animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            This is where your journey begins.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        data-section="cta"
        className={`bg-blue-700 py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Build Your Career in Digital?
          </h2>
          <div className="space-y-4 text-white text-2xl sm:text-lg mb-10">
            <p className="text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Explore opportunities.</p>
            <p className="text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Collaborate with industry experts.</p>
            <p className="text-white animate-fade-in-up" style={{ animationDelay: "0.3s" }}>Work on national and global brands.</p>
          </div>
          <p className="text-white text-lg sm:text-xl font-medium animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Be part of a workplace where performance meets purpose.
          </p>
        </div>
      </section>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(30px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(40px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }

        /* Ensure animations play on scroll up by re-triggering */
        [data-section] {
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
};

export default BestPlaceToWork;