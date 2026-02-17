import React from "react";
import {
  ShoppingCart,
  TrendingUp,
  Search,
  Video,
  Target,
  Database,
  ArrowRight,
  BarChart3,
} from "lucide-react";

const Ecommerce = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              E-Commerce Digital Marketing Trends in 2026:
              <br />
              The Complete Growth Blueprint
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              E-commerce isn’t about selling products. It’s about engineering
              intelligent customer journeys.
            </p>

            <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full font-semibold transition">
              Scale My Online Store <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0"
              alt="Ecommerce Growth Dashboard"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY IT CHANGED ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why E-Commerce Digital Marketing Has Changed
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Modern consumers discover products across social platforms,
              compare via search engines, expect personalization, and demand
              frictionless checkout experiences.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1515165562835-c3b8c8d3c6c6"
              alt="Online Shopping Experience"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= AI PERSONALIZATION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="AI Personalization"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              AI-Powered Personalization & Predictive Commerce
            </h2>
            <p className="text-gray-700">
              AI-driven recommendations, predictive behavior tracking, and
              automated upsell strategies increase AOV and CLV.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OMNICHANNEL ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Omnichannel E-Commerce Marketing
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Google Shopping & Search",
              "Meta Ads",
              "Short-Form Video",
              "Email & Automation",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <TrendingUp
                  className="mx-auto text-purple-500 mb-4"
                  size={32}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEO ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">E-Commerce SEO in 2026</h2>
            <p className="text-gray-700">
              Beyond keywords — focus on structured product schema, Core Web
              Vitals, internal linking, and topical authority to dominate
              organic search.
            </p>
          </div>

          <div className="text-center">
            <Search className="mx-auto text-purple-500" size={80} />
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE MARKETING ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Performance Marketing & ROAS Optimization
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Creative Testing",
              "Dynamic Remarketing",
              "Full-Funnel Paid Strategy",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Target className="mx-auto text-purple-500 mb-4" size={32} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOCIAL COMMERCE ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1585238342028-4b4e2a7b4f4f"
              alt="Social Commerce"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Short-Form Video & Social Commerce
            </h2>
            <p className="text-gray-700">
              Instagram Shops, influencer collaborations, UGC content, and live
              shopping experiences are driving direct conversions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CRO ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Conversion Rate Optimization for E-Commerce
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Heatmap Analysis",
              "Checkout Optimization",
              "Trust Signals",
              "Page Speed Optimization",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <BarChart3 className="mx-auto text-purple-500 mb-3" size={24} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FIRST PARTY DATA ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            First-Party Data & Privacy-First Marketing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Email List Building",
              "CRM Integration",
              "Loyalty & Subscription Models",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Database className="mx-auto text-purple-500 mb-4" size={32} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPLETE FRAMEWORK ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            The Complete E-Commerce Growth Framework
          </h2>
          <p className="text-gray-700">
            AI personalization + Omnichannel marketing + SEO & Paid synergy +
            CRO + Automation + Data-driven decisions = Scalable revenue engine.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-white font-bold mb-6">
            Build a Scalable Revenue Engine
          </h2>

          <p className="text-blue-100 mb-8">
            Think beyond traffic. Focus on profitability, personalization, and
            performance precision.
          </p>

          <button className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            Launch E-Commerce Growth Strategy <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Ecommerce;
