import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutImage from "../../assets/About.jpeg";
import WhoWeAreImage from "../../assets/WhoWeAre.png";
import WhyPartnerImage from "../../assets/WhyPartner.png";

const steps = [
  {
    title: "Discover",
    desc: "We understand your business goals, competitors, audience behavior, and digital maturity level.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Strategize",
    desc: "We design a customized growth blueprint aligned with your KPIs, industry dynamics, and scalability objectives.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "indigo",
  },
  {
    title: "Execute",
    desc: "Our cross-functional teams deploy campaigns across SEO, paid media, content, and social with precision.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7h16M4 12h10M4 17h16"
        />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Optimize",
    desc: "Through real-time analytics, A/B testing, and data monitoring, we continuously improve performance metrics.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3v18h18M9 17V9m4 8v-4m4 4v-7"
        />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Scale",
    desc: "Once validated, we scale winning strategies to maximize ROI and long-term brand equity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 17l6-6 4 4 8-8M14 7h7v7"
        />
      </svg>
    ),
    color: "red",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(null);
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
            // Optional: remove class when out of view for re-animation on scroll up
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: false,
            }));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px", // Adjusts when animation triggers
      },
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
          visibleSections.hero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
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
          <div className="text-left max-w-[600px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>

            <h3
              className="text-xl md:text-2xl font-semibold mb-6 text-blue-100 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Performance. Precision. Possibility.
            </h3>

            <p
              className="text-gray-200 text-md md:text-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Adkryoss managed by Clink Consultancy Services pvt. ltd is a
              next-generation digital marketing powerhouse built for brands that
              refuse to settle for average growth.
              <br />
              <br />
              We don't just execute campaigns. We engineer scalable digital
              ecosystems that drive measurable revenue, stronger brand
              authority, and long-term competitive advantage.
              <br />
              <br />
              In a world where algorithms evolve daily and consumer behavior
              shifts overnight, we combine strategy, creativity, and data
              intelligence to help businesses stay ahead — not just relevant.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center animate-float"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <img
                src={AboutImage}
                alt="About Section"
                className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section
        data-section="who"
        className={`py-20 bg-white transition-all duration-700 ease-out ${
          visibleSections.who
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16 animate-fade-in-right">
              Who We Are
            </h2>
            <img
              src={WhoWeAreImage}
              alt="Who We Are"
              className="w-full rounded-2xl shadow-lg object-cover animate-float"
            />
          </div>
          <div className="space-y-6 text-gray-700 mt-10">
            <p
              className="text-lg leading-relaxed animate-fade-in-left"
              style={{ animationDelay: "0.1s" }}
            >
              We are strategists, analysts, storytellers, technologists, and
              growth architects.
            </p>
            <p
              className="text-lg leading-relaxed animate-fade-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              Backed by the operational strength and consulting foundation of
              Clink Consultancy Services Pvt. Ltd., Adkryoss is designed to
              deliver enterprise-grade marketing solutions with agile execution.
            </p>
            <p
              className="text-lg font-semibold text-gray-900 mt-6 animate-fade-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              Our approach blends:
            </p>
            <ul className="space-y-3 text-lg font-medium">
              {[
                "Deep market research",
                "AI-driven performance insights",
                "Creative storytelling",
                "Conversion-focused strategy",
                "Continuous optimization",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 animate-fade-in-left"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  <span className="text-green-600 text-xl mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p
              className="text-lg leading-relaxed pt-4 animate-fade-in-left"
              style={{ animationDelay: "0.9s" }}
            >
              We work with startups, SMEs, and growing enterprises to transform
              digital channels into predictable revenue engines.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        data-section="why"
        className={`py-18 bg-gray-50 transition-all duration-700 ease-out ${
          visibleSections.why
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Why Businesses Choose Us
            </h2>
            <p
              className="text-xl text-gray-700 font-medium animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Visibility is easy to promise. <br />
              <span className="text-gray-900 font-semibold">
                Impact is harder to deliver.
              </span>
            </p>
            <p
              className="text-lg text-gray-600 mt-6 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              At Adkryoss managed by Clink Consultancy Services pvt. ltd, we
              don't chase impressions — we engineer measurable growth. Every
              campaign, framework, and optimization is aligned with one
              objective:
              <span className="font-semibold text-gray-900">
                {" "}
                sustainable business performance.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`group relative bg-white p-10 rounded-3xl border-l-4 border-b-4 border-orange-300 shadow-lg hover:shadow-2xl hover:bg-blue-100 transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-500">
                  {i === 0 && "01. Growth Anchored in Revenue"}
                  {i === 1 && "02. Intelligence-Driven Strategy"}
                  {i === 2 && "03. Connected Digital Infrastructure"}
                  {i === 3 && "04. Built for Constant Change"}
                </h3>
                <p className="text-gray-600 mb-4 font-medium">
                  {i === 0 && "Clicks don't pay bills. Conversions do."}
                  {i === 1 &&
                    "Guesswork has no place in performance marketing."}
                  {i === 2 && "Growth doesn't happen in isolated channels."}
                  {i === 3 && "The digital landscape evolves daily."}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {i === 0 && (
                    <>
                      <li>✔ High-intent audience acquisition</li>
                      <li>✔ Lead quality over lead quantity</li>
                      <li>✔ Cost efficiency across funnels</li>
                      <li>✔ Revenue attribution clarity</li>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <li>✔ Advanced keyword & search intent mapping</li>
                      <li>✔ Customer journey analytics</li>
                      <li>✔ Behavioral segmentation insights</li>
                      <li>✔ Predictive performance modeling</li>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <li>✔ SEO + Paid Media synergy</li>
                      <li>✔ Content aligned with search intent</li>
                      <li>✔ Social amplification strategies</li>
                      <li>✔ Conversion-optimized web experiences</li>
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <li>✔ Proactive algorithm monitoring</li>
                      <li>✔ AI-driven search adaptation</li>
                      <li>✔ Privacy-compliant tracking models</li>
                      <li>✔ Continuous growth channel testing</li>
                    </>
                  )}
                </ul>
                <p className="mt-4 text-gray-600">
                  {i === 0 &&
                    "We build marketing systems that directly influence your bottom line — not just your traffic graph."}
                  {i === 1 &&
                    "Every action is backed by data signals, competitive analysis, and real-time performance tracking."}
                  {i === 2 &&
                    "Every channel strengthens the other — multiplying results instead of fragmenting efforts."}
                  {i === 3 &&
                    "Your strategy doesn't remain static. It evolves — intelligently."}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-28">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="animate-fade-in-right">
                <h3 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  The <br /> <span className="text-blue-600">Outcome?</span>
                </h3>
              </div>
              <div className="space-y-4 animate-fade-in-left">
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
            <div className="mt-16 text-center max-w-4xl mx-auto animate-fade-in-up">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                That's the difference with Adkryoss managed by Clink Consultancy
                Services pvt. ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section
        data-section="expertise"
        className={`py-8 bg-gray-100 transition-all duration-700 ease-out ${
          visibleSections.expertise
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in-up">
              Our Core Expertise
            </h2>

            <p
              className="text-lg text-gray-600 mt-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              We offer full-spectrum digital growth solutions designed for
              modern brands.
            </p>
          </div>

          {/* FIRST ROW (3 CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* SEO */}
            <div className="bg-blue-100 text-blue-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">
                Search Engine Optimization (SEO)
              </h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>Enterprise & Local SEO</li>
                <li>Technical SEO Audits</li>
                <li>E-commerce SEO</li>
                <li>Content-Led Organic Growth</li>
                <li>AI Search Optimization</li>
              </ul>
            </div>

            {/* Performance */}
            <div className="bg-green-100 text-green-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">Performance Marketing</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>Google Ads & PPC Campaigns</li>
                <li>Meta & Social Advertising</li>
                <li>Conversion Rate Optimization (CRO)</li>
                <li>Retargeting & Funnel Optimization</li>
                <li>ROI-Driven Media Planning</li>
              </ul>
            </div>

            {/* Social */}
            <div className="bg-purple-100 text-purple-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">
                Social Media Marketing
              </h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>Brand Strategy & Positioning</li>
                <li>Paid Social Campaigns</li>
                <li>Community Growth</li>
                <li>Influencer Collaborations</li>
                <li>Content Production & Creative Direction</li>
              </ul>
            </div>
          </div>

          {/* SECOND ROW (CENTERED 2 CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Content */}
            <div className="bg-yellow-100 text-yellow-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">
                Content & Inbound Marketing
              </h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>SEO-Optimized Blog Strategy</li>
                <li>Thought Leadership Content</li>
                <li>Landing Page Optimization</li>
                <li>Marketing Automation</li>
                <li>Email & Funnel Sequences</li>
              </ul>
            </div>

            {/* Web */}
            <div className="bg-pink-100 text-pink-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">
                Web & Experience Optimization
              </h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>Conversion-Focused Website Design</li>
                <li>UX & UI Strategy</li>
                <li>Speed & Performance Optimization</li>
                <li>Analytics & Heatmap Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING MODEL SECTION */}
      <section
        data-section="working"
        className={`py-8 bg-gray-50 transition-all duration-700 ease-out ${
          visibleSections.working
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in-up">
              Our Working Model
            </h2>
            <p
              className="text-lg text-gray-600 mt-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              We follow a structured yet agile growth framework.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(step)}
                className={`cursor-pointer p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 animate-fade-in-up
                  ${step.color === "green" ? "bg-green-100/80 shadow-green-400/50 hover:shadow-green-500/70" : ""}
                  ${step.color === "red" ? "bg-red-100/80 shadow-red-400/50 hover:shadow-red-500/70" : ""}
                  ${step.color === "blue" ? "bg-blue-100/80 shadow-blue-400/50 hover:shadow-blue-500/70" : ""}
                  ${step.color === "indigo" ? "bg-indigo-100/80 shadow-indigo-400/50 hover:shadow-indigo-500/70" : ""}
                  ${step.color === "purple" ? "bg-purple-100/80 shadow-purple-400/50 hover:shadow-purple-500/70" : ""}
                `}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 bg-${step.color}-200 rounded-xl flex items-center justify-center mb-5`}
                >
                  <div className={`text-${step.color}-600`}>{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {activeStep && (
          <div
            onClick={() => setActiveStep(null)}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in"
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full p-12 relative animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                className={`text-4xl font-bold mb-6 text-${activeStep.color}-600`}
              >
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
      </section>

      {/* VISION & MISSION SECTION */}
      <section
        data-section="vision"
        className={`py-10 px-6 bg-gray-50 transition-all duration-700 ease-out ${
          visibleSections.vision
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            Our Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-blue-100/80 shadow-blue-400/50 animate-fade-in-right">
              <div className="flex items-start gap-6">
                <img
                  src="https://www.techmagnate.com/wp-content/uploads/2025/08/vission.webp"
                  alt="Vision"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become a globally trusted digital growth partner that
                    helps brands dominate their industry through intelligent
                    marketing and sustainable digital systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-orange-100/80 shadow-orange-400/50 animate-fade-in-left">
              <div className="flex items-start gap-6">
                <img
                  src="https://www.techmagnate.com/wp-content/uploads/2025/08/mission.webp"
                  alt="Mission"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To combine innovation, strategy, and performance marketing
                    expertise to deliver measurable results that directly impact
                    revenue and brand authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section
        data-section="industries"
        className={`py-20 px-6 bg-white transition-all duration-700 ease-out ${
          visibleSections.industries
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">
              Industries We Serve
            </h2>
            <p
              className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              We deliver tailored digital growth strategies across diverse
              industries, helping brands scale with performance-driven
              solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                img: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
                text: "E-commerce & D2C Brands",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
                text: "Education & EdTech",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
                text: "Healthcare",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/3063/3063823.png",
                text: "Corporate & B2B Services",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
                text: "Startups & Technology Companies",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
                text: "Real Estate & Local Businesses",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-orange-400/100 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <span className="absolute top-0 left-0 h-full w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-16 h-16 mx-auto mb-6 object-contain"
                />
                <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-[#0066cc]">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER SECTION */}
      <section
        data-section="partner"
        className={`py-24 px-6 bg-gray-50 transition-all duration-700 ease-out ${
          visibleSections.partner
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 animate-fade-in-right">
                Why Partner With Us?
              </h2>

              <ul className="space-y-4">
                {[
                  "Agile execution model",
                  "Scalable marketing systems",
                  "Dedicated account management",
                  "ROI-focused campaign structure",
                  "AI-powered research & forecasting",
                  "Transparent reporting & performance dashboards",
                ].map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 animate-fade-in-right"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <span className="text-green-600 text-xl mt-1">✔</span>
                    <span className="text-gray-700 text-lg font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center animate-float">
              <img
                src={WhyPartnerImage}
                alt="Partnership"
                className="rounded-2xl shadow-lg w-full h-100 max-w-md object-cover"
              />
            </div>
          </div>
          <div className="mt-20 text-center max-w-4xl mx-auto animate-fade-in-up">
            <p className="text-xl text-gray-700 leading-relaxed">
              At{" "}
              <span className="font-bold">
                Adkryoss managed by Clink Consultancy Services Pvt. Ltd
              </span>
              , we believe growth is not accidental. It is designed, tested,
              optimized, and scaled.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        data-section="cta"
        className={`py-18 px-6 bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-center transition-all duration-700 ease-out ${
          visibleSections.cta
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 animate-fade-in-up">
            Let's Build Your Digital Growth Engine
          </h2>
          <p
            className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Whether you aim to increase organic visibility, generate
            high-quality leads, dominate paid advertising, or build a powerful
            online brand presence — we create strategies that move businesses
            forward.
          </p>
          <div
            className="mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-2xl font-semibold mb-2 text-white">
              Your growth journey deserves more than generic marketing.
            </p>
            <p className="text-2xl font-semibold text-white">
              It deserves intelligent execution.
            </p>
          </div>
          <p
            className="text-lg text-blue-200 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="font-semibold text-white">
              Adkryoss managed by Clink Consultancy Services Pvt. Ltd
            </span>{" "}
            — Where Strategy Meets Performance.
          </p>
          <div
            className="mt-12 animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              Get Started Today
            </button>
          </div>
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
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
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float 10s ease-in-out infinite;
        }

        /* Ensure animations play on scroll up by re-triggering */
        [data-section] {
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
};

export default AboutUs;
