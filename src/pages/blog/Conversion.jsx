import React from "react";
import {
  Layout,
  Target,
  Activity,
  TestTube,
  Funnel,
  ShoppingCart,
  PhoneCall,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const Conversion = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Conversion Rate Optimization (CRO):
              <br />
              Turning Website Traffic into Revenue in 2026
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              More traffic isn’t the goal. More conversions are.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Website Analytics Dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CRO MATTERS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why CRO Is More Important Than Ever
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Rising CPC and customer acquisition costs mean businesses
              must maximize the value of existing traffic.
              Even a 1% increase in conversion rate can dramatically
              increase profitability.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
              alt="Revenue Growth Chart"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            The Core Pillars of CRO
          </h2>

          <div className="grid md:grid-cols-5 gap-8">

            {[
              { icon: Layout, text: "UX Optimization" },
              { icon: Target, text: "Landing Page Optimization" },
              { icon: Activity, text: "Behavioral Analytics" },
              { icon: TestTube, text: "A/B Testing" },
              { icon: Funnel, text: "Funnel Optimization" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="mx-auto text-orange-500 mb-4" size={32} />
                  <p className="font-medium text-gray-700">{item.text}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= HEATMAP SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Behavioral Analytics & Heatmaps
            </h2>
            <p className="text-gray-700">
              Heatmaps, scroll tracking, and session recordings reveal
              where users drop off and what attracts attention.
              Data replaces guesswork.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Heatmap Analytics"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= ADVANCED STRATEGIES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Advanced CRO Strategies for 2026
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "AI-Powered Personalization",
              "Psychological Trigger Integration",
              "Conversational Optimization",
            ].map((strategy, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <p className="font-semibold text-orange-600 mb-3">
                  Strategy {index + 1}
                </p>
                <p className="text-gray-700">{strategy}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= E-COMMERCE SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
              alt="Ecommerce Checkout Optimization"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              CRO for E-Commerce Websites
            </h2>
            <p className="text-gray-700">
              Optimize product pages, simplify checkout flows,
              reduce cart abandonment, and increase average order value
              through upsell and cross-sell strategies.
            </p>
          </div>

        </div>
      </section>

      {/* ================= LEAD GEN SECTION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              CRO for Lead Generation Websites
            </h2>
            <p className="text-gray-700">
              Shorter forms, urgency-based CTAs, trust signals,
              and strong value propositions increase demo bookings
              and consultation requests.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1581090700227-4c4f50e7b6a9"
              alt="Lead Generation Form Optimization"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= KPI SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Measuring CRO Success
          </h2>

          <div className="grid md:grid-cols-6 gap-6">

            {[
              "Conversion Rate",
              "Bounce Rate",
              "Revenue per Visitor",
              "Cost per Acquisition",
              "Session Duration",
              "Customer Lifetime Value",
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <BarChart3 className="mx-auto text-orange-500 mb-3" size={24} />
                {metric}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-white font-bold mb-6">
            Optimize Before You Scale
          </h2>

          <p className="text-blue-100 mb-8">
            CRO is one of the highest ROI digital growth strategies available.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            Start CRO Optimization <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default Conversion;
