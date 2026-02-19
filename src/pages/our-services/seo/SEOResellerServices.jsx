import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Shield,
  Users,
  Settings,
  Target,
  Search,
} from "lucide-react";

const SEOResellerServices = () => {
  const offerings = [
    {
      title: "White-Label SEO Execution",
      icon: <Settings size={32} />,
      desc: "End-to-end SEO delivered under your agency’s brand — from strategy to reporting.",
    },
    {
      title: "Dedicated SEO Team",
      icon: <Users size={32} />,
      desc: "Access SEO strategists, technical experts, content specialists, and link-building professionals.",
    },
    {
      title: "Transparent Reporting",
      icon: <BarChart3 size={32} />,
      desc: "Custom-branded reports with real metrics — rankings, traffic growth, leads, and performance insights.",
    },
    {
      title: "Scalable Delivery Model",
      icon: <Target size={32} />,
      desc: "From 1 client to 100+ clients — our systems scale as your agency grows.",
    },
  ];

  const whoItsFor = [
    "Digital marketing agencies",
    "Web development companies",
    "Freelancers managing multiple SEO clients",
    "Branding agencies adding SEO services",
    "International agencies outsourcing SEO",
  ];
  const resellerSolutions = [
    {
      title: "SEO Strategy & Roadmap",
      points: [
        "Competitor benchmarking",
        "Keyword gap analysis",
        "Search intent mapping",
        "Custom SEO growth plan",
      ],
    },
    {
      title: "On-Page SEO",
      points: [
        "Technical optimization",
        "Schema implementation",
        "Content structuring",
        "Internal linking frameworks",
      ],
    },
    {
      title: "Technical SEO",
      points: [
        "Site audits & error fixes",
        "Core Web Vitals optimization",
        "Crawlability & indexability",
        "Site architecture improvements",
      ],
    },
    {
      title: "Content Marketing",
      points: [
        "SEO-optimized blog creation",
        "Landing page content",
        "Topic cluster strategy",
        "AI-assisted + human-optimized writing",
      ],
    },
    {
      title: "Authority Building",
      points: [
        "High-quality backlinks",
        "Digital PR outreach",
        "Niche edits & guest posts",
        "Brand mentions",
      ],
    },
    {
      title: "Local & Enterprise SEO",
      points: [
        "Google Business Profile optimization",
        "Multi-location SEO",
        "Enterprise site management",
        "Large-scale technical implementation",
      ],
    },
  ];
  const resellerWorkflow = [
    {
      step: "Onboarding & Discovery",
      desc: "We understand your agency goals, client niche, and pricing model.",
    },
    {
      step: "Strategy Development",
      desc: "A custom SEO roadmap is prepared for each client.",
    },
    {
      step: "Execution",
      desc: "Our team handles audits, content, links, and optimization.",
    },
    {
      step: "Reporting & Scaling",
      desc: "Branded monthly reports with clear KPIs and strategic recommendations.",
    },
  ];
  const differentiators = [
    {
      title: "Performance-First Approach",
      desc: "We track rankings, traffic, leads, and ROI — not vanity metrics.",
    },
    {
      title: "Process-Driven Execution",
      desc: "Clear SOPs, defined timelines, and measurable milestones.",
    },
    {
      title: "Ethical SEO Only",
      desc: "White-hat techniques aligned with Google’s latest updates.",
    },
    {
      title: "Modern SEO Stack",
      desc: "AI insights, automation tools, and real-time analytics to stay ahead of algorithm shifts.",
    },
    {
      title: "Complete Confidentiality",
      desc: "100% white-label delivery. Your brand always stays in front.",
    },
  ];
  const seoTools = [
    "Google Search Console & Analytics 4",
    "SEMrush / Ahrefs",
    "Screaming Frog",
    "Surfer SEO",
    "AI-driven content research tools",
    "Advanced reporting dashboards",
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20 md:py-24"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/80"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              SEO Reseller Services
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-green-400 mb-6">
              Scale Your Agency. Deliver Results. Stay Invisible.
            </p>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
              White-label SEO solutions designed to help agencies expand
              revenue, retain clients, and dominate search — without hiring an
              in-house team.
            </p>
            {/* 
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-green-500
          text-white font-bold
          px-8 py-4 rounded-full
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl text-center"
        >
          Speak to an Expert →
        </a>

        <a
          href="#solutions"
          className="border-2 border-blue-500
          text-blue-400
          px-8 py-4 rounded-full font-bold
          transition-all duration-300
          hover:bg-green-500 hover:text-white hover:border-green-500 text-center"
        >
          Our Solutions →
        </a>
      </div> */}

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
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://www.techmagnate.com/wp-content/uploads/2025/04/digital-marketing-for-healthcare-industry.webp"
              alt="SEO Reseller Services"
              className="w-64 sm:w-72 md:w-80 lg:w-95 object-contain"
            />
          </div>

        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="pr-0 lg:pr-10">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Why SEO Reseller Services?
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
              The demand for SEO is exploding — but building an expert team,
              investing in tools, and managing execution can slow down your growth.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
              That’s where{" "}
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              steps in as your strategic backend SEO partner.
            </p>

            <p className="text-base md:text-lg font-medium text-gray-900">
              You focus on acquiring and managing clients. <br />
              <span className="text-blue-700 font-semibold">
                We focus on rankings, traffic, and measurable ROI.
              </span>
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-10 lg:mt-0 flex justify-start lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="SEO Analytics Dashboard"
              className="w-72 md:w-80 lg:w-96 object-contain"
            />
          </div>

        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "White-Label SEO Execution",
                desc: "End-to-end SEO delivered under your agency’s brand — from strategy to reporting."
              },
              {
                title: "Dedicated SEO Team",
                desc: "Access strategists, technical experts, content specialists, and link-building professionals."
              },
              {
                title: "Transparent Reporting",
                desc: "Custom-branded reports with rankings, traffic growth, leads & insights."
              },
              {
                title: "Scalable Delivery Model",
                desc: "From 1 client to 100+ — our systems scale as your agency grows."
              }
            ].map((item, i) => (
              <div key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our SEO Reseller Solutions
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              We don’t just offer SEO services. We offer structured growth systems.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• SEO Strategy & Roadmap</li>
              <li>• On-Page SEO</li>
              <li>• Technical SEO</li>
              <li>• Content Marketing</li>
              <li>• Authority Building</li>
              <li>• Local & Enterprise SEO</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="SEO Growth Strategy"
              className="w-80 md:w-96 object-contain"
            />
          </div>

        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            Complete SEO Execution Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Competitor benchmarking & keyword gap analysis",
              "Technical optimization & schema implementation",
              "Core Web Vitals & site architecture improvements",
              "SEO blog creation & topic cluster strategy",
              "High-quality backlinks & digital PR outreach",
              "Google Business Profile & enterprise SEO"
            ].map((item, i) => (
              <div key={i}
                className="bg-white border border-blue-100 rounded-2xl p-8 hover:bg-teal-700 hover:text-white transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            How Our Reseller Model Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Onboarding & Discovery",
              "Strategy Development",
              "Execution",
              "Reporting & Scaling"
            ].map((step, i) => (
              <div key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
              >
                <span className="text-sm font-bold text-blue-700">
                  Step {i + 1}
                </span>
                <h3 className="text-lg font-semibold mt-2">
                  {step}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Who Is This For?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Digital Marketing Agencies",
              "Web Development Companies",
              "Freelancers",
              "Branding Agencies",
              "International Agencies"
            ].map((item, i) => (
              <div key={i}
                className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                  alt={item}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6 font-semibold text-gray-900">
                  {item}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              "Performance-First Approach",
              "Process-Driven Execution",
              "Ethical White-Hat SEO",
              "Modern SEO Stack",
              "Complete Confidentiality"
            ].map((item, i) => (
              <div key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "E-commerce",
              "SaaS & Tech",
              "Healthcare",
              "Real Estate",
              "Education",
              "Finance",
              "B2B Services"
            ].map((industry, i) => (
              <div key={i}
                className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                  alt={industry}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6 font-semibold text-gray-900">
                  {industry}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-blue-700 to-blue-900 py-24 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-white md:text-4xl font-bold mb-6">
            Ready to Scale?
          </h2>

          <p className="text-white mb-10">
            Turn SEO into your agency’s strongest recurring revenue stream.
          </p>

          <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition">
            Partner With Us →
          </button>

        </div>
      </section>

    </>
  );
};

export default SEOResellerServices;
