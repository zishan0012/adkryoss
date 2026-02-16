import React from "react";
import {
  BarChart3,
  Activity,
  Database,
  TrendingUp,
  Target,
  Layers,
  LineChart,
  ArrowRight,
} from "lucide-react";

const Data = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Data-Driven Digital Marketing Strategy:
              <br />
              The Competitive Edge in 2026
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              Marketing without data is guesswork.
              Growth with data is predictable.
            </p>

            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full font-semibold transition">
              Build Data Strategy <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Analytics Dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHAT IS DATA DRIVEN ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              What Is a Data-Driven Marketing Strategy?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A data-driven strategy uses analytics, behavioral tracking,
              and predictive insights to optimize SEO, PPC, social media,
              content marketing, and conversion rate optimization.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Marketing Analytics Visualization"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY DATA MATTERS ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Data-Driven Marketing Is the Future
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Accurate ROAS Tracking",
              "Multi-Channel Attribution",
              "Customer Lifetime Value Forecasting",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <TrendingUp className="mx-auto text-cyan-500 mb-4" size={32} />
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12">
            Core Pillars of a Data-Driven Framework
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              { icon: Activity, text: "GA4 Implementation" },
              { icon: Layers, text: "Multi-Touch Attribution" },
              { icon: LineChart, text: "Predictive Analytics" },
              { icon: Target, text: "Customer Journey Mapping" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="mx-auto text-cyan-500 mb-4" size={32} />
                  {item.text}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= DASHBOARD SECTION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1581090700227-4c4f50e7b6a9"
              alt="Performance Dashboard"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Real-Time Performance Dashboards
            </h2>
            <p className="text-gray-700">
              Unified dashboards combine SEO, PPC, social,
              CRO, and CRM insights into a single decision-making system.
            </p>
          </div>

        </div>
      </section>

      {/* ================= REVENUE IMPACT ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12">
            How Data-Driven Marketing Impacts Revenue
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Reduced CAC",
              "Higher Conversion Rate",
              "Improved CLV",
              "Better Budget Allocation",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <BarChart3 className="mx-auto text-cyan-500 mb-3" size={24} />
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FIRST PARTY DATA ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            First-Party Data in 2026
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Email Databases",
              "CRM Integration",
              "Consent-Based Personalization",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Database className="mx-auto text-cyan-500 mb-4" size={32} />
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-white font-bold mb-6">
            Data Is the Competitive Advantage
          </h2>

          <p className="text-blue-100 mb-8">
            Precision-driven marketing powered by analytics,
            attribution modeling, and predictive insights
            defines the future of scalable growth.
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            Implement Data Strategy <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default Data;
