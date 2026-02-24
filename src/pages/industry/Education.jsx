import React from "react";
import industryeducation from "../../assets/industryeducation.png";
import Edu from "../../assets/Education.jpg";
import school from "../../assets/school.jpg";
import College from "../../assets/college.jpg";
import Edtech from "../../assets/edtech.jpg";
import Coaching from "../../assets/coaching.jpg";
import Skills from "../../assets/skill.jpg";
import Abroad from "../../assets/abroad.jpg";
import Future from "../../assets/future.png";
// import education from "../../assets/education.png"

import {
  Search,
  Target,
  BarChart3,
  ShieldCheck,
  Users,
  FileText,
  Globe,
  CheckCircle,
} from "lucide-react";
const educationApproachCards = [
  {
    title: "Deep Market & Audience Research",
    desc: "Understanding student intent, parent behavior, geographic demand, and competitor positioning to craft targeted campaigns.",
    icon: Search,
  },
  {
    title: "Full-Funnel Strategy",
    desc: "From awareness to inquiry to enrollment — every stage is optimized for measurable growth.",
    icon: Target,
  },
  {
    title: "Data-Led Performance Optimization",
    desc: "Advanced tracking, CRM integration, AI-based targeting, and real-time campaign monitoring.",
    icon: BarChart3,
  },
  {
    title: "Reputation & Authority Building",
    desc: "Strengthening trust through content, reviews, thought leadership, and strategic brand positioning.",
    icon: ShieldCheck,
  },
];

const educationSolutions = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: Search,
    desc: "Rank for high-intent keywords like courses, admissions, and location-based searches.",
    points: [
      "Technical SEO audits",
      "Program & course page optimization",
      "Local SEO for campus visibility",
      "Authority-building content marketing",
    ],
  },
  {
    title: "Performance Marketing (PPC & Paid Media)",
    icon: Target,
    desc: "Maximize enrollment ROI with targeted paid campaigns.",
    points: [
      "Google Search & Display Ads",
      "YouTube advertising",
      "Meta & LinkedIn lead generation campaigns",
      "Conversion rate optimization",
    ],
  },
  {
    title: "Social Media Marketing",
    icon: Users,
    desc: "Build community, credibility, and student engagement.",
    points: [
      "Instagram & Facebook strategy",
      "LinkedIn branding for institutions",
      "Influencer collaborations",
      "Short-form video marketing",
    ],
  },
  {
    title: "Content & Thought Leadership",
    icon: FileText,
    desc: "Create impact-driven narratives that position institutions as industry leaders.",
    points: [
      "Blog strategy",
      "Admission landing pages",
      "Case studies",
      "Email marketing automation",
    ],
  },
  {
    title: "Online Reputation Management",
    icon: ShieldCheck,
    desc: "Build trust and credibility online.",
    points: [
      "Review monitoring",
      "Response management",
      "Brand sentiment analysis",
    ],
  },
  {
    title: "Website & Funnel Optimization",
    icon: Globe,
    desc: "A strong website converts visitors into applicants.",
    points: [
      "UX/UI improvements",
      "Speed optimization",
      "Landing page testing",
      "CRM & marketing automation integration",
    ],
  },
];
const educationClients = [
  {
    title: "Schools & International Schools",
    img: school,
    desc: "Increase admissions, improve parent engagement, and strengthen institutional branding through performance-driven digital strategies.",
  },
  {
    title: "Colleges & Universities",
    img: College,
    desc: "Drive course inquiries, boost enrollment numbers, and build long-term academic authority in competitive markets.",
  },
  {
    title: "EdTech Platforms",
    img: Edtech,
    desc: "Scale student acquisition with ROI-focused paid campaigns, SEO strategies, and optimized conversion funnels.",
  },
  {
    title: "Coaching Institutes",
    img: Coaching,
    desc: "Generate high-intent leads and increase enrollments with hyper-targeted local and national campaigns.",
  },
  {
    title: "Skill Development & Certification Providers",
    img: Skills,
    desc: "Position your courses for career-focused audiences and maximize registrations with structured digital funnels.",
  },
  {
    title: "Study Abroad Consultants",
    img: Abroad,
    desc: "Capture aspirational students through search visibility, paid campaigns, and trust-driven branding strategies.",
  },
];

const Education = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-blue-900/80"></div> */}

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

          {/* LEFT CONTENT */}
          <div className="text-left text-white">
            <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
              Education Industry Digital Marketing Services
            </h2>

            <h2 className="text-2xl md:text-xl font-semibold leading-snug text-white">
              Empowering Educational Institutions to Lead in the Digital Era
            </h2>

            <p className="text-white md:text-md leading-relaxed max-w-[600px]">
              Smarter strategies. Measurable growth. Future-ready enrollments.
              {/* </p>

              <p className="text-gray-300 leading-relaxed"> */}
              <span className="font-bold text-white">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              helps schools, colleges, universities, edtech platforms, and
              coaching institutes attract the right students, increase
              admissions, and build long-term digital authority through
              data-driven marketing strategies.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={industryeducation}
                alt="Section Image"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

      </section>
      {/* Why */}
      <section className="bg-gray-100 py-28">
        <div className="px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                The Digital Shift in Education
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                Today’s students and parents research, compare, and decide
                online. From course discovery to admission inquiries, every step
                happens digitally. Institutions that fail to build strong online
                visibility lose prospective enrollments to competitors who
                dominate search engines, social media, and digital platforms.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </span>{" "}
                builds performance-focused digital ecosystems that improve
                visibility, drive qualified inquiries, and enhance institutional
                reputation.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <img
                src={Edu}
                alt="Digital Shift in Education"
                className="w-125 h-125 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-24">
        <div className="px-8 lg:px-16">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach to Education Marketing
            </h2>
            <p className="text-gray-600 text-lg">
              We combine research, technology, creativity, and performance
              analytics to create a holistic digital growth strategy.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationApproachCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-blue-100 rounded-2xl p-8
            transition-all duration-500 hover:bg-teal-700 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-full bg-gray-100
              flex items-center justify-center mb-6
              group-hover:bg-white/20 transition"
                  >
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-white/90">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-28">
        <div className="px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Solutions for Education
            </h2>
            <p className="text-lg text-gray-600">
              Full-funnel strategies designed to increase visibility, inquiries,
              and enrollments for educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {educationSolutions.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-blue-100 rounded-2xl p-8
            transition-all duration-500 hover:bg-teal-700
            hover:shadow-2xl hover:-translate-y-2"
                >
                  <div
                    className="w-12 h-12 rounded-full bg-gray-100
              flex items-center justify-center mb-6
              group-hover:bg-white/20 transition"
                  >
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                  </div>

                  <h3
                    className="text-lg font-semibold text-gray-900 mb-3
              group-hover:text-white"
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-sm text-gray-600 mb-4 leading-relaxed
              group-hover:text-white/90"
                  >
                    {service.desc}
                  </p>

                  <ul
                    className="space-y-2 text-sm text-gray-600
              group-hover:text-white/90"
                  >
                    {service.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Center Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with diverse education institutions to build scalable,
              performance-driven digital ecosystems.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationClients.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-blue-100 rounded-2xl overflow-hidden
          transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-teal-700"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/90">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-24">
        <div className="px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Education Brands Choose Us
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                We combine technology, strategy, and performance marketing
                expertise to create scalable digital growth systems for
                educational institutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We don’t just generate leads — we help institutions build{" "}
                <span className="font-semibold text-blue-700">
                  sustainable digital ecosystems.
                </span>
              </p>
            </div>

            {/* RIGHT CHECKLIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Data-driven decision making",
                "ROI-focused performance strategy",
                "Transparent reporting dashboards",
                "AI-powered targeting & automation",
                "Omnichannel growth strategy",
                "Industry-specific expertise",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-white
            border border-blue-100 rounded-2xl p-6
            transition-all duration-500
            hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-full bg-blue-100
              flex items-center justify-center
              group-hover:bg-white/20 transition"
                  >
                    <span className="text-blue-700 font-bold group-hover:text-white">
                      ✓
                    </span>
                  </div>

                  {/* Text */}
                  <p className="text-gray-800 font-medium group-hover:text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-28">
        <div className="w-full px-8 lg:px-16">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Results You Can Expect
            </h2>
            <p className="text-lg text-gray-600">
              Our strategies are designed to deliver measurable outcomes that
              directly impact institutional growth.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Increased organic search rankings",
              "Higher admission inquiries",
              "Lower cost per lead",
              "Stronger brand recall",
              "Improved conversion rates",
              "Sustainable enrollment growth",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white border border-blue-100
          rounded-xl px-6 py-6
          transition-all duration-300
          hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                  <span className="text-green-600 font-bold">✓</span>
                </div>

                <p className="text-gray-800 font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-28 text-white">
        <div className="w-full px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Future-Ready Digital Growth
              </h2>

              <p className="text-xl text-black leading-relaxed">
                The education industry is evolving with hybrid learning,
                AI-based personalization, and digital-first student journeys.
                Institutions must innovate continuously to stay competitive.
              </p>

              <p className="text-lg text-black leading-relaxed">
                <span className="font-semibold text-black">
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </span>{" "}
                ensures your institution stays ahead with advanced analytics,
                automation, and growth-focused digital transformation
                strategies.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={Future}
                alt="Future Ready Education Marketing"
                className="w-96 lg:w-125 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-blue-700 to-blue-900 py-24">
        <div className="px-8 lg:px-16 text-center text-white">
          <h2 className="text-white md:text-5xl font-bold mb-6 leading-tight">
            Let’s Build Your Admission Growth Engine
          </h2>

          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Transform your institution into a digitally dominant education
            brand.
          </p>

          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            Partner with{" "}
            <span className="font-semibold text-white">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>{" "}
            to scale enrollments, strengthen authority, and lead the future of
            education.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition-all duration-300 hover:shadow-xl">
              Speak to an Expert →
            </button>

            <button className="border border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
              Request a Strategy Consultation →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
