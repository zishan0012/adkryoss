import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CareerImage from "../../assets/Career.jpeg";
import WhatMakesUsDifferentImage from "../../assets/WhatMakesUsDifferent.png";
import WhoWeArelookingImage from "../../assets/WhoWeAreLooking.png";
import OurHiringPhilosophyImage from "../../assets/OurHiringPhilosophy.png";
import GrowthImage from "../../assets/Growth.png";
import InternshipImage from "../../assets/Internship.png";
import ReadyToBuildImage from "../../assets/ReadyToBuild.png";
import StructuredcareerprogressionImage from "../../assets/Structuredcareerprogression.png";
import WorklifebalancesupportImage from "../../assets/Worklifebalancesupport.png";
import SkilldevelopmentprogramsImage from "../../assets/Skilldevelopmentprograms.png";
import PerformancebasedgrowthreviewsImage from "../../assets/Performancebasedgrowthreviews.png";
import LeadershipmentorshipImage from "../../assets/Leadershipmentorship.png";
import CollaborativeteamcultureImage from "../../assets/Collaborativeteamculture.png";
import InnovationdrivenenvironmentImage from "../../assets/Innovationdrivenenvironment.png";

const jobs = [
  {
    role: "SEO Executive",
    shortDesc:
      "Work on on-page, off-page, technical SEO, and strategy execution...",
    fullDesc:
      "Work on on-page, off-page, technical SEO, and strategy execution for enterprise clients.",
    experience: "2+ Years",
    department: "SEO",
    location: "New Delhi",
    openings: 2,
  },
  {
    role: "Performance Marketing Specialist",
    shortDesc:
      "Plan, execute, and optimise paid campaigns across Google & Meta...",
    fullDesc:
      "Plan, execute, and optimise paid campaigns across Google, Meta, and emerging platforms.",
    experience: "3+ Years",
    department: "Marketing",
    location: "Remote",
    openings: 1,
  },
  {
    role: "Content Strategist",
    shortDesc: "Build conversion-focused, SEO-driven content that ranks...",
    fullDesc:
      "Build conversion-focused, SEO-driven content that ranks and converts.",
    experience: "2+ Years",
    department: "Content",
    location: "New Delhi",
    openings: 1,
  },
  {
    role: "Social Media Growth Manager",
    shortDesc:
      "Develop scalable engagement and brand positioning strategies...",
    fullDesc: "Develop scalable engagement and brand positioning strategies.",
    experience: "3+ Years",
    department: "Social Media",
    location: "Remote",
    openings: 1,
  },
  {
    role: "Digital Marketing Intern",
    shortDesc: "Hands-on training across channels. Learn. Execute...",
    fullDesc: "Hands-on training across channels. Learn. Execute. Grow.",
    experience: "Fresher",
    department: "Marketing",
    location: "On-site",
    openings: 2,
  },
];

const Careers = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);
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
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
          {/* LEFT CONTENT */}
          <div className="text-left max-w-[600px] space-y-6">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Careers at Adkryoss
              </span>
            </h2>

            <h3
              className="text-xl md:text-2xl font-semibold text-blue-100 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Build What the Future Will Search For
            </h3>

            <p
              className="text-gray-200 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Digital marketing is no longer about posts and ads. It's about
              data. Strategy. Technology. AI. Performance.
              <br />
              <br />
              At Adkryoss managed by Clink Consultancy Services pvt. ltd, we
              don't just execute campaigns — we engineer measurable digital
              growth systems for brands that want to dominate their industry.
              <br />
              <br />
              If you're ambitious, curious, analytical, and obsessed with growth
              — this is where you belong.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <img
                src={CareerImage}
                alt="Careers"
                loading="lazy"
                className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US SECTION */}
      <section
        data-section="why"
        className={`relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white transition-all duration-700 ease-out ${
          visibleSections.why
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight animate-fade-in-up">
              Why Work With Adkryoss <br className="hidden md:block" />
            </h2>
            <h3
              className="text-4xl md:text-xl font-bold text-black leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              managed by Clink Consultancy Services pvt. ltd?
            </h3>
            <p
              className="text-gray-700 mt-4 text-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We are building a performance-first digital marketing ecosystem
              designed for modern brands. That means you won't just "do
              marketing." You'll build strategies that impact revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
            <div>
              <h3 className="text-4xl font-semibold text-blue-600 mb-6 text-left animate-fade-in-right">
                What Makes Us Different?
              </h3>
              <div className="text-gray-900 text-base">
                <ul className="space-y-3 list-disc pl-5">
                  {[
                    "Performance-driven culture (Data > Assumptions)",
                    "AI-integrated marketing workflows",
                    "Cross-channel growth strategy exposure",
                    "Enterprise-grade client portfolio",
                    "Rapid skill acceleration environment",
                    "Leadership mentorship model",
                    "Growth-focused career path",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="p-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 hover:text-blue-700 cursor-pointer animate-fade-in-right"
                      style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <img
                src={WhatMakesUsDifferentImage}
                alt="Digital Growth Lab Illustration"
                loading="lazy"
                className="w-full max-w-md rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </div>
          <div
            className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-orange-400 rounded-full mt-16 mb-6 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <p
            className="text-gray-500 text-lg font-medium italic text-center max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "1.3s" }}
          >
            This isn't a traditional agency job. <br />
            This is a digital growth lab. <br />
            Shape your career with impact.
          </p>
        </div>
      </section>

      {/* WORK CULTURE SECTION */}
      <section
        data-section="culture"
        className={`relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white transition-all duration-700 ease-out ${
          visibleSections.culture
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-200 opacity-20 blur-3xl rounded-full"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight animate-fade-in-up">
            Our Work Culture
          </h2>
          <div
            className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-orange-400 rounded-full mt-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <p
            className="text-gray-600 mt-6 text-lg leading-relaxed max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            At Adkryoss managed by Clink Consultancy Services pvt. ltd, culture
            is not a slogan — it's a system.
          </p>
          <p
            className="text-blue-600 font-bold mt-2 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            We believe in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-12">
            {[
              {
                title: "01. Ownership Over Hierarchy",
                desc: "If you see opportunity, you take it.",
                span: "lg:col-span-2",
              },
              {
                title: "02. Continuous Learning",
                desc: "SEO evolves. Algorithms shift. Platforms upgrade. We evolve faster.",
                span: "lg:col-span-2",
              },
              {
                title: "03. Data-Backed Decisions",
                desc: "We measure everything. We optimise relentlessly.",
                span: "lg:col-span-2",
              },
              {
                title: "04. Collaboration Without Silos",
                desc: "SEO works with content. Content works with paid. Paid works with analytics. Everything works together.",
                span: "lg:col-span-2 lg:col-start-2",
              },
              {
                title: "05. Performance Recognition",
                desc: "Growth is rewarded. Initiative is noticed.",
                span: "lg:col-span-2",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`group relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 ${card.span} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-400"></span>
                <div className="relative z-10 text-left">
                  <h3 className="text-xl font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-blue-700">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section
        data-section="looking"
        className={`py-14 bg-white transition-all duration-700 ease-out ${
          visibleSections.looking
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight animate-fade-in-up">
              Who We're Looking For
            </h2>
            <p
              className="text-gray-600 mt-4 text-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              We're building a team of specialists and growth thinkers in:
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
              {[
                "Search Engine Optimization (SEO)",
                "Performance Marketing (Google Ads & Meta Ads)",
                "Social Media Strategy",
                "Content Marketing & Copywriting",
                "Technical SEO & Web Optimization",
                "Data Analytics & Marketing Automation",
                "UI/UX & Conversion Optimization",
                "Account Management & Client Strategy",
              ].map((role, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition flex items-center justify-center text-center min-h-[100px] hover:-translate-y-2 hover:scale-105 duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <p className="font-semibold text-gray-700">{role}</p>
                </div>
              ))}
            </div>
            <div
              className="w-full lg:w-1/2 flex justify-center animate-float"
              style={{ animationDelay: "1s" }}
            >
              <img
                src={WhoWeArelookingImage}
                alt="Team Illustration"
                loading="lazy"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
          <p
            className="text-gray-600 mt-12 text-lg font-medium text-center animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            We don't hire based on degrees. <br />
            We hire based on potential, mindset, and hunger.
          </p>
        </div>
      </section>

      {/* OUR HIRING PHILOSOPHY */}
      <section
        data-section="philosophy"
        className={`py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white transition-all duration-700 ease-out ${
          visibleSections.philosophy
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight animate-fade-in-up">
              Our Hiring Philosophy
            </h2>
            <p
              className="text-blue-600 mt-4 text-lg font-bold animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              We look for:
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex justify-center">
              <img
                src={OurHiringPhilosophyImage}
                alt="Hiring Illustration"
                loading="lazy"
                className="w-full max-w-2xl object-contain rounded-2xl shadow-xl"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              {[
                "Analytical thinkers",
                "Problem solvers",
                "Digital-first mindset",
                "Adaptability to change",
                "Clear communicators",
                "Self-driven professionals",
                "Results-focused executors",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white px-3 py-2 m-3 rounded-xl shadow-md hover:shadow-xl transition text-center hover:-translate-y-2 hover:scale-105 duration-300 animate-fade-in-right"
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  <p className="font-semibold text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p
            className="text-gray-600 mt-16 text-lg font-medium italic text-center animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            Experience matters. <br />
            But growth mindset matters more.
          </p>
        </div>
      </section>

      {/* GROWTH & LEARNING OPPORTUNITIES */}
      <section
        data-section="growth"
        className={`py-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 transition-all duration-700 ease-out ${
          visibleSections.growth
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-black leading-tight whitespace-nowrap animate-fade-in-right">
                Growth & Learning Opportunities
              </h2>
              <p
                className="text-gray-700 mt-6 text-lg leading-relaxed max-w-4xl animate-fade-in-right"
                style={{ animationDelay: "0.1s" }}
              >
                Digital marketing is one of the fastest-evolving industries in
                the world. To stay ahead, you need exposure to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {[
                  "Advanced SEO frameworks",
                  "AI-powered marketing tools",
                  "Conversion Rate Optimization systems",
                  "Performance analytics dashboards",
                  "Multi-channel campaign management",
                  "International campaign strategy",
                  "Marketing automation platforms",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                  >
                    <p className="font-semibold text-blue-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={GrowthImage}
                alt="Growth & Learning Illustration"
                loading="lazy"
                className="w-full max-w-2xl object-contain rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          <div
            className="mt-20 text-center animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-gray-700 text-xl font-medium italic max-w-4xl mx-auto">
              At Adkryoss managed by Clink Consultancy Services pvt. ltd, you
              won't just learn — you'll implement.
            </p>
          </div>
        </div>
      </section>

      {/* LIFE AT ADKRYOSS */}
      <section
        data-section="life"
        className={`py-24 bg-gradient-to-br from-white via-blue-50 to-white transition-all duration-700 ease-out ${
          visibleSections.life
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black animate-fade-in-up">
              Life at Adkryoss
            </h2>
            <p
              className="text-gray-600 mt-3 text-lg font-medium animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Managed by Clink Consultancy Services pvt. ltd
            </p>
          </div>
          <p
            className="text-center text-gray-700 text-lg max-w-3xl mx-auto mt-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            We believe productivity increases when people feel empowered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
            {[
              {
                title: "Structured career progression",
                image: StructuredcareerprogressionImage,
              },
              {
                title: "Skill development programs",
                image: SkilldevelopmentprogramsImage,
              },
              {
                title: "Performance-based growth reviews",
                image: PerformancebasedgrowthreviewsImage,
              },
              {
                title: "Leadership mentorship",
                image: LeadershipmentorshipImage,
              },
              {
                title: "Collaborative team culture",
                image: CollaborativeteamcultureImage,
              },
              {
                title: "Innovation-driven environment",
                image: InnovationdrivenenvironmentImage,
              },
              {
                title: "Work-life balance support",
                image: WorklifebalancesupportImage,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl border border-blue-100 shadow-md overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-3 hover:border-orange-400 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative p-6">
                  <div className="absolute inset-0 rounded-b-3xl bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
                  <p className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-700 text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section
        data-section="openings"
        className={`py-0 bg-gray-50 transition-all duration-700 ease-out ${
          visibleSections.openings
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 animate-fade-in-up">
            Current Openings
          </h2>
          <div
            className="overflow-x-auto bg-white rounded-2xl shadow-lg animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4">Role</th>
                  <th className="p-4">Job Details</th>
                  <th className="p-4">Experience</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Openings</th>
                  <th className="p-4">Apply</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-300 hover:bg-gray-50 transition animate-fade-in-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <td className="p-4 font-medium">{job.role}</td>
                    <td className="p-4 max-w-xs">
                      {expandedIndex === index ? job.fullDesc : job.shortDesc}
                      <button
                        onClick={() =>
                          setExpandedIndex(
                            expandedIndex === index ? null : index,
                          )
                        }
                        className="block text-blue-600 mt-2 text-sm hover:underline"
                      >
                        {expandedIndex === index ? "Read Less" : "Read More"}
                      </button>
                    </td>
                    <td className="p-4">{job.experience}</td>
                    <td className="p-4">{job.department}</td>
                    <td className="p-4">{job.location}</td>
                    <td className="p-4">{job.openings}</td>
                    <td className="p-4">
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                        Apply Now →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INTERNSHIP PROGRAM */}
      <section
        data-section="internship"
        className={`py-28 bg-white transition-all duration-700 ease-out ${
          visibleSections.internship
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in-up">
              Internship Program
            </h2>
            <p
              className="text-xl text-gray-600 mt-5 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Our internship model is performance-focused and
              implementation-driven.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ul className="space-y-8">
              {[
                "Work on real client projects",
                "Build campaign strategies",
                "Learn AI-driven marketing tools",
                "Get exposure to SEO, paid ads, and analytics",
                "Receive structured mentorship",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="text-xl md:text-2xl font-semibold text-gray-800 flex items-start animate-fade-in-right"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <span className="text-blue-600 mr-4 text-2xl">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <img
                src={InternshipImage}
                alt="Internship Program"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full max-w-lg object-contain"
              />
            </div>
          </div>
          <div
            className="text-center mt-24 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <p className="text-3xl md:text-2xl font-bold text-gray-900">
              This is not a certificate internship.
            </p>
            <p className="text-3xl md:text-2xl font-bold text-blue-600 mt-3">
              This is a growth accelerator.
            </p>
          </div>
        </div>
      </section>

      {/* CAREER PATH */}
      <section
        data-section="career"
        className={`relative py-28 overflow-hidden transition-all duration-700 ease-out ${
          visibleSections.career
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-[length:200%_200%] animate-bgMove opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in-up">
              Your Career Path Here
            </h2>
            <p
              className="text-lg text-gray-600 mt-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              We believe in internal leadership building.
            </p>
          </div>
          <div
            className="group flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl font-semibold text-gray-800 mb-24 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span>Intern</span>
            <span className="text-blue-600">→</span>
            <span>Executive</span>
            <span className="text-blue-600">→</span>
            <span>Specialist</span>
            <span className="text-blue-600">→</span>
            <span>Team Lead</span>
            <span className="text-blue-600">→</span>
            <span>Growth Strategist</span>
            <span className="text-blue-600">→</span>
            <span className="font-bold text-blue-700">Business Head</span>
          </div>
        </div>
      </section>

      {/* DIVERSITY & INCLUSION */}
      <section
        data-section="diversity"
        className={`py-12 bg-gray-50 transition-all duration-700 ease-out ${
          visibleSections.diversity
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-[length:200%_200%] animate-borderMove transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center transition-all duration-500 group-hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Diversity & Inclusion
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We value diverse perspectives, backgrounds, and creative
                thinking. Innovation happens when different minds collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        data-section="cta"
        className={`py-18 bg-gray-100 transition-all duration-700 ease-out ${
          visibleSections.cta
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="animate-float" style={{ animationDelay: "0.1s" }}>
              <img
                src={ReadyToBuildImage}
                alt="Team Working"
                loading="lazy"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-right">
                Ready to Build Digital Growth?
              </h2>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-right"
                style={{ animationDelay: "0.1s" }}
              >
                If you are looking for real responsibility, real impact, real
                growth, and accelerated skill development, this is your
                opportunity to grow with a performance-driven team.
              </p>
              <div className="space-y-3 text-lg font-semibold text-gray-800 mb-8">
                {[
                  "Real responsibility",
                  "Real impact",
                  "Real growth",
                  "Real skill acceleration",
                ].map((item, idx) => (
                  <p
                    key={idx}
                    className="animate-fade-in-right"
                    style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                  >
                    ✔ {item}
                  </p>
                ))}
              </div>
              <a
                href="mailto:careers@adkryoss.com"
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                📩 Apply Now →
              </a>
              <p
                className="mt-6 text-gray-600 animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                Send your resume to:
                <a
                  href="mailto:careers@adkryoss.com"
                  className="font-semibold text-blue-600 ml-1 hover:underline"
                >
                  careers@adkryoss.com
                </a>
              </p>
              <p
                className="text-gray-600 mt-2 animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                Or connect with us on LinkedIn.
              </p>
            </div>
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
        @keyframes bgMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes borderMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
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

        .animate-bgMove {
          animation: bgMove 8s ease infinite;
        }

        .animate-borderMove {
          animation: borderMove 4s ease infinite;
        }

        /* Ensure animations play on scroll up by re-triggering */
        [data-section] {
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
};

export default Careers;
