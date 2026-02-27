import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../../../assets/ppcservice.jpg";
import whyPPC from "../../../assets/output.jpg"
import Output from "../../../assets/approach.jpg"
import Process from "../../../assets/process.png"
import WhatMakesOurPPCDifferentImage from "../../../assets/WhatMakesOurPPCDifferent.png"
import WhyPPCisGrowthEngineTodayImage from "../../../assets/WhyPPCisGrowthEngineToday.png"
// import ppc from "../../../assets/Ppc1.jpg"
import {
  Search,
  Monitor,
  Share2,
  ShoppingCart,
  Repeat,
  LayoutDashboard,
  Facebook,
  Linkedin,
  Youtube,
  Network,
  Building2,
  GraduationCap,
  HeartPulse,
  Cpu,
  Briefcase,
  Banknote,
  CheckCircle
} from "lucide-react";
const ppcServices = [
  {
    title: "Search Advertising",
    desc: "Capture users actively searching for your products or services with high-intent keyword targeting and AI-driven bid strategies.",
    points: [
      "Google Ads Search Campaigns",
      "Dynamic Search Ads",
      "Competitor Targeting",
      "Local & International Campaigns",
    ],
    icon: Search,
  },
  {
    title: "Display & Programmatic Advertising",
    desc: "Reach your audience across premium websites, apps, and digital platforms with contextual and behavioral targeting.",
    points: [
      "Display Ads",
      "Programmatic Buying",
      "Retargeting Campaigns",
      "Contextual Advertising",
    ],
    icon: Monitor,
  },
  {
    title: "Social Media Advertising",
    desc: "Precision targeting across major social platforms to drive engagement, leads, and sales.",
    points: [
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads",
      "YouTube Ads",
      "X (Twitter) Ads",
      "Performance-driven creative testing",
    ],
    icon: Share2,
  },
  {
    title: "E-commerce & Shopping Ads",
    desc: "Maximize product visibility and revenue through optimized shopping campaigns.",
    points: [
      "Google Shopping Ads",
      "Performance Max Campaigns",
      "Marketplace Advertising",
      "Feed Optimization",
    ],
    icon: ShoppingCart,
  },
  {
    title: "Re-marketing & Re-targeting",
    desc: "Re-engage website visitors and abandoned cart users with highly personalized ad experiences.",
    points: [
      "Dynamic Remarketing",
      "Funnel-based Retargeting",
      "Cross-platform Retargeting",
    ],
    icon: Repeat,
  },
  {
    title: "Landing Page & Conversion Optimization",
    desc: "Clicks don’t convert themselves. We optimize landing pages for maximum ROI.",
    points: [
      "A/B Testing",
      "Heatmap Analysis",
      "UX Improvements",
      "Conversion Funnel Optimization",
    ],
    icon: LayoutDashboard,
  },
];

const platforms = [
  { name: "Google Ads", icon: Search },
  { name: "Microsoft Ads", icon: Monitor },
  { name: "Meta Ads", icon: Facebook },
  { name: "LinkedIn Campaign Manager", icon: Linkedin },
  { name: "YouTube", icon: Youtube },
  { name: "Programmatic Networks", icon: Network },
];
const industries = [
  {
    title: "E-commerce",
    desc: "Drive product visibility, conversions, and revenue through performance-driven PPC and shopping campaigns.",
    icon: ShoppingCart,
  },
  {
    title: "Real Estate",
    desc: "Generate high-intent leads for residential and commercial properties using location-based targeting.",
    icon: Building2,
  },
  {
    title: "Education",
    desc: "Increase enrollments through search, display, and social campaigns tailored to student intent.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    desc: "Reach patients at the right moment with compliant, intent-driven PPC campaigns.",
    icon: HeartPulse,
  },
  {
    title: "SaaS",
    desc: "Acquire qualified demo and trial users with funnel-based paid acquisition strategies.",
    icon: Cpu,
  },
  {
    title: "Finance",
    desc: "Lower CPA and improve lead quality for loans, insurance, and financial services.",
    icon: Banknote,
  },
  {
    title: "B2B Enterprises",
    desc: "Shorten sales cycles and generate high-quality leads through account-based PPC strategies.",
    icon: Briefcase,
  },
];
const PPCServices = () => {
    return (
        <>
        
 {/* <section
       
      <section
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
        style={{
          backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
          <div className="text-left relative z-10 text-white">
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] mb-3 font-bold tracking-[-1.5px] text-white leading-[1.1]">
              Increase ROI with India’s Leading PPC Agency
            </h1>

            <p className="text-[16px] md:text-[18px] mb-6 leading-[1.8] text-white max-w-xl">
              Partner with us, the leading PPC company in India, for campaigns that
              deliver measurable results, qualified leads, and higher ROI. Backed
              by data-driven insights and years of expertise, we help brands grow
              through transparent, ROI-focused advertising that builds long-term
              trust and performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                to="/contact"
                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Speak to Our Expert →
              </Link>
              <Link
                to="#services"
                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Our Services →
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end relative z-10">
            <img
              src={heroImage}
              alt="PPC Services"
              className="max-w-[350px] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section> */}


 {/* PPC Service Section */}
      <motion.section
        className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

        {/* Floating Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
          {/* LEFT CONTENT */}
          <div className="text-left max-w-[600px] space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                PPC Services
              </span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
              Increase ROI with India’s Leading PPC Agency
            </h3>

            <p className="text-gray-200 text-md md:text-lg leading-relaxed">
              Partner with us, the leading PPC company in India, for campaigns that deliver measurable results, qualified leads, and higher ROI. Backed by data-driven insights and years of expertise, we help brands grow through transparent, ROI-focused advertising that builds long-term trust and performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/contact">
                <button className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  Speak to Our Expert →
                </button>
              </Link>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
              >
                Our Services →
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end relative z-10">
            <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <img
                src={ heroImage}
                alt="PPC Services"
                className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>
        </div>
      </motion.section>


      {/*why ppc*/}
      <section className="py-16 md:py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why PPC is a Growth Engine Today
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Paid advertising is no longer about traffic — it’s about precision.
              With AI-driven bidding, intent-based targeting, and predictive analytics,
              modern PPC campaigns are designed to drive measurable business outcomes.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When executed strategically, PPC becomes your most controllable and scalable
              growth channel — allowing brands to optimize performance in real time
              and scale revenue with confidence.
            </p>

            <ul className="space-y-4">
              {[
                "Capture high-intent users at the decision stage",
                "Reduce cost per acquisition (CPA)",
                "Scale revenue predictably",
                "Improve customer lifetime value (CLV)",
                "Deliver real-time performance insights",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={WhyPPCisGrowthEngineTodayImage}
                alt="PPC Growth"
                className="rounded-2xl shadow-xl w-full max-w-md"
              />
            </div>
          </div>

        </div>
      </section>
      {/*Approach */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">


          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our PPC Approach
            </h2>

            <p className="text-xl font-semibold text-blue-700">
              Strategy First. Spend Later.
            </p>

            <p className="text-gray-700 text-lg">
              Every campaign at{" "}
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              begins with a deep business analysis — not keyword bidding.
            </p>

            <p className="text-gray-700">
              We treat paid media as a revenue lever, not a cost center. That means
              every decision is intentional, measurable, and aligned with long-term
              growth objectives.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Our process includes:
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Market & competitor intelligence analysis</li>
              <li>• Audience persona mapping</li>
              <li>• Funnel-based campaign architecture</li>
              <li>• Platform selection strategy</li>
              <li>• Conversion tracking & analytics setup</li>
              <li>• ROI forecasting models</li>
            </ul>
          </div>

        </div>
        <div className="max-w-4xl mx-auto px-6 mt-12">
          <p className="text-gray-800 text-lg font-medium text-center">
            We align paid media investments with{" "}
            <span className="text-blue-700">
              your revenue goals
            </span>{" "}
            — not vanity metrics.
          </p>
        </div>
      </section>
      {/*Services*/}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our PPC Services
            </h2>
            <p className="text-gray-600 text-lg">
              Performance-driven paid media solutions designed to scale revenue,
              not just traffic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col justify-between min-h-105
                bg-white border border-blue-100 rounded-2xl p-8
                transition-all duration-500
                hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-gray-100
                    flex items-center justify-center mb-6
                    group-hover:bg-white/20 transition">
                      <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3
                    group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4
                    group-hover:text-white/90">
                      {service.desc}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600
                    group-hover:text-white/90">
                      {service.points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>
      {/* Platform */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Work On
            </h2>
            <p className="text-gray-600 text-lg">
              We manage and optimize PPC campaigns across industry-leading
              advertising platforms to maximize reach, efficiency, and ROI.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-blue-100 rounded-xl p-6
                flex flex-col items-center justify-center text-center
                hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50
                  flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>

                  <p className="text-gray-900 font-medium">
                    {platform.name}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      {/* Difference */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Makes Our PPC Different?
              </h2>

              <p className="text-gray-600 text-lg">
                In a crowded paid media landscape, performance is driven by how
                intelligently campaigns are built, optimized, and measured.
              </p>

              <p className="text-gray-700">
                Our PPC methodology combines data science, automation, and creative
                execution to ensure every campaign contributes to long-term,
                sustainable growth.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  {
                    title: "Data-Led Decisions",
                    desc: "We rely on analytics, attribution modeling, and conversion tracking to guide every optimization decision.",
                  },
                  {
                    title: "AI & Automation Integration",
                    desc: "From smart bidding strategies to predictive audience segmentation.",
                  },
                  {
                    title: "Creative + Performance Synergy",
                    desc: "High-performing campaigns require compelling creatives.",
                  },
                  {
                    title: "Transparent Reporting",
                    desc: "Real-time dashboards ensure clarity on ROI.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-xl p-5 border border-blue-100"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-end">
              <img
                src={WhatMakesOurPPCDifferentImage}
                alt="PPC Strategy"
                className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/*Process */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT SIDE - IMAGE */}
            <div className="relative">
              <img
                src={Process}
                alt="Our PPC Process"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="flex items-center">
              <div className="w-full">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                  Our PPC Process
                </h2>

                <div className="space-y-8">

                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">
                      1. Discovery & Goal Mapping
                    </h3>
                    <p className="text-gray-700">
                      Understanding your business objectives and defining KPIs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">
                      2. Research & Planning
                    </h3>
                    <p className="text-gray-700">
                      Keyword research, competitor analysis, and campaign architecture.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">
                      3. Campaign Setup
                    </h3>
                    <p className="text-gray-700">
                      Ad creation, tracking implementation, and smart bidding configuration.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">
                      4. Optimization & Scaling
                    </h3>
                    <p className="text-gray-700">
                      Continuous testing, budget reallocation, and conversion optimization.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">
                      5. Reporting & Insights
                    </h3>
                    <p className="text-gray-700">
                      Data-backed insights with actionable recommendations.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Results */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">

        <div className="container">

          {/* HEADING */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Results That Drive Real Business Growth
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl">
              Our PPC campaigns are engineered to deliver measurable outcomes —
              not vanity metrics. Every strategy is optimized for profitability,
              scalability, and long-term revenue impact.
            </p>
          </div>


          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Lower Cost Per Acquisition",
                desc: "Smart bidding and continuous optimization reduce wasted ad spend and improve efficiency.",
              },
              {
                title: "Higher Return on Ad Spend (ROAS)",
                desc: "Revenue-focused campaign structures maximize profitability across every channel.",
              },
              {
                title: "Improved Conversion Rates",
                desc: "Landing page alignment and audience precision increase high-quality conversions.",
              },
              {
                title: "Scalable Revenue Growth",
                desc: "Data-backed scaling models allow predictable expansion without performance drops.",
              },
              {
                title: "Qualified Lead Generation",
                desc: "Intent-driven targeting ensures your sales team gets leads that actually convert.",
              },
              {
                title: "Real-Time Performance Visibility",
                desc: "Transparent dashboards provide actionable insights and continuous improvements.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
          group relative bg-white rounded-2xl p-8
          border border-gray-200
          shadow-sm
          hover:shadow-xl hover:-translate-y-1
          transition-all duration-300
        "
              >

                {/* Fancy Top Border Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-t-2xl"></div>

                {/* Tick + Title */}
                <div className="flex items-start gap-4 mb-4">

                  <div className="
              w-10 h-10 rounded-full
              bg-green-100
              flex items-center justify-center
              shrink-0
              group-hover:bg-green-200 transition
            ">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed pl-14">
                  {item.desc}
                </p>

              </div>
            ))}
          </div>


          {/* CLOSING STATEMENT */}
          <div className="mt-20">
            <p className="text-gray-800 text-xl max-w-4xl">
              Through strategic planning and continuous optimization,
              <span className="font-semibold text-gray-900">
                {" "}Adkryoss managed by Clink Consultancy Services Private Limited{" "}
              </span>
              transforms paid media into a{" "}
              <span className="text-blue-700 font-semibold">
                predictable revenue engine.
              </span>
            </p>
          </div>

        </div>
      </section>


      {/*Final */}
      <section className="bg-linear-to-r from-blue-700 to-blue-900 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          {/* Heading */}
          <h2 className="text-white md:text-4xl font-bold mb-6">
            Let’s Build High-Performance Campaigns
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
            If you're ready to move beyond basic ad management and invest in
            strategic performance marketing, we’re ready to partner with you.
          </p>
          <p className="text-white font-semibold mb-10">
            Drive visibility. Capture intent. Convert consistently.
          </p>
          <div>
            <Link to="/contact">
              <button
                className="
        bg-white text-blue-700 font-semibold
        px-8 py-4 rounded-full
        hover:bg-blue-100
        transition-all duration-300
        hover:shadow-xl
      "
              >
                Start Your PPC Growth Journey Today →
              </button>
            </Link>
          </div>


        </div>
      </section>

    </>
  );
};

export default PPCServices;
